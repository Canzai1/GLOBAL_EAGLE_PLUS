(function(){
  const SOURCE_LANG = 'english';
  const LANG_KEY = 'tjw_site_language_v2';
  const POS_KEY = 'tjw_translate_widget_position_v2';
  const TRANSLATE_SRC = 'https://cdn.staticfile.net/translate.js/3.18.66/translate.js';
  let translateLoadPromise = null;
  let translateConfigured = false;

  const LANGUAGES = [
    ['english', 'English original'],
    ['chinese_simplified', 'Chinese (Simplified)'],
    ['spanish', 'Spanish'],
    ['french', 'French'],
    ['german', 'German'],
    ['russian', 'Russian'],
    ['portuguese', 'Portuguese'],
    ['italian', 'Italian'],
    ['arabic', 'Arabic'],
    ['japanese', 'Japanese'],
    ['korean', 'Korean'],
    ['thai', 'Thai'],
    ['vietnamese', 'Vietnamese'],
    ['indonesian', 'Indonesian'],
    ['malay', 'Malay'],
    ['hindi', 'Hindi'],
    ['turkish', 'Turkish'],
    ['dutch', 'Dutch'],
    ['polish', 'Polish'],
    ['swedish', 'Swedish'],
    ['ukrainian', 'Ukrainian'],
    ['greek', 'Greek'],
    ['hebrew', 'Hebrew']
  ];

  const QUICK_LANGS = [
    ['chinese_simplified', 'CN'],
    ['spanish', 'ES'],
    ['french', 'FR'],
    ['german', 'DE'],
    ['russian', 'RU'],
    ['arabic', 'AR']
  ];

  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function createWidget(){
    if(document.getElementById('tjwTranslateWidget')) return;

    const widget = document.createElement('div');
    widget.id = 'tjwTranslateWidget';
    widget.className = 'tjw-translate-widget';
    widget.innerHTML = [
      '<button class="tjw-translate-toggle" type="button" id="tjwTranslateToggle" aria-label="Open translation tool. Drag to move.">',
      '<span class="tjw-translate-icon">A/EN</span>',
      '</button>',
      '<div class="tjw-translate-panel" id="tjwTranslatePanel" role="dialog" aria-label="Website translation tool">',
      '<div class="tjw-translate-head">',
      '<div><p class="tjw-translate-title">Translate Page</p><p class="tjw-translate-subtitle">Choose a language to translate this page. Drag the round button to move it.</p></div>',
      '<button class="tjw-translate-close" type="button" id="tjwTranslateClose" aria-label="Close translation panel">&times;</button>',
      '</div>',
      '<select class="tjw-translate-select" id="languageSwitcher" aria-label="Choose translation language"></select>',
      '<div class="tjw-translate-quick" id="tjwTranslateQuick"></div>',
      '<button class="tjw-translate-reset" type="button" id="tjwTranslateReset">Show English Original</button>',
      '<div class="tjw-translate-status" id="tjwTranslateStatus">Translation service is ready.</div>',
      '<div class="tjw-translate-tip">Tip: first-time translation may take a few seconds depending on the visitor network.</div>',
      '</div>'
    ].join('');
    document.body.appendChild(widget);

    const select = widget.querySelector('#languageSwitcher');
    LANGUAGES.forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });

    const quick = widget.querySelector('#tjwTranslateQuick');
    QUICK_LANGS.forEach(([lang, label]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.lang = lang;
      button.textContent = label;
      quick.appendChild(button);
    });

    restorePosition(widget);
    bindDrag(widget);
    bindPanel(widget);
    initTranslation(widget);
  }

  function setStatus(widget, text, isError){
    const status = widget.querySelector('#tjwTranslateStatus');
    if(!status) return;
    status.textContent = text;
    status.classList.toggle('is-error', !!isError);
  }

  function initTranslation(widget){
    const select = widget.querySelector('#languageSwitcher');
    const saved = localStorage.getItem(LANG_KEY) || SOURCE_LANG;
    select.value = select.querySelector('option[value="' + saved + '"]') ? saved : SOURCE_LANG;
    setStatus(widget, select.value === SOURCE_LANG ? 'English original is displayed.' : 'Preparing saved language...');

    select.addEventListener('change', () => applyLanguage(widget, select.value));
    widget.querySelector('#tjwTranslateReset').addEventListener('click', () => applyLanguage(widget, SOURCE_LANG));
    widget.querySelectorAll('#tjwTranslateQuick button').forEach((button) => {
      button.addEventListener('click', () => applyLanguage(widget, button.dataset.lang));
    });

    if(select.value !== SOURCE_LANG){
      runWhenIdle(() => {
        if((localStorage.getItem(LANG_KEY) || SOURCE_LANG) === select.value) applyLanguage(widget, select.value);
      }, 900);
    }
  }

  function applyLanguage(widget, lang){
    const select = widget.querySelector('#languageSwitcher');
    if(select.querySelector('option[value="' + lang + '"]')) select.value = lang;
    localStorage.setItem(LANG_KEY, lang);

    if(lang === SOURCE_LANG && !hasTranslateApi()){
      setStatus(widget, 'English original is displayed.');
      return;
    }

    if(!hasTranslateApi()){
      setStatus(widget, 'Loading translation service...');
      loadTranslate()
        .then(() => applyLanguage(widget, lang))
        .catch(() => setStatus(widget, 'Translation service failed to load. Please check the network and try again.', true));
      return;
    }

    try{
      configureTranslate();
      if(lang === SOURCE_LANG){
        if(typeof translate.reset === 'function') translate.reset({selectLanguageRefreshRender:false});
        translate.to = SOURCE_LANG;
        if(translate.storage && typeof translate.storage.set === 'function') translate.storage.set('to', SOURCE_LANG);
        setStatus(widget, 'English original is displayed.');
        return;
      }

      translate.changeLanguage(lang);
      const label = select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : lang;
      setStatus(widget, 'Current language: ' + label);
    }catch(error){
      setStatus(widget, 'Translation failed. Please try again later.', true);
    }
  }

  function loadTranslate(){
    if(hasTranslateApi()){
      configureTranslate();
      return Promise.resolve();
    }
    if(translateLoadPromise) return translateLoadPromise;

    translateLoadPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-tjw-translate-lib]');
      if(existing){
        existing.addEventListener('load', () => { configureTranslate(); resolve(); }, {once:true});
        existing.addEventListener('error', reject, {once:true});
        return;
      }

      const script = document.createElement('script');
      script.src = TRANSLATE_SRC;
      script.async = true;
      script.dataset.tjwTranslateLib = 'true';
      script.onload = () => {
        try{
          configureTranslate();
          resolve();
        }catch(error){
          reject(error);
        }
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return translateLoadPromise;
  }

  function configureTranslate(){
    if(!hasTranslateApi() || translateConfigured) return;
    translate.language.setLocal(SOURCE_LANG);
    translate.service.use('client.edge');
    translateConfigured = true;
  }

  function hasTranslateApi(){
    return !!(
      window.translate &&
      window.translate.language &&
      typeof window.translate.changeLanguage === 'function'
    );
  }

  function bindPanel(widget){
    const toggle = widget.querySelector('#tjwTranslateToggle');
    const close = widget.querySelector('#tjwTranslateClose');

    toggle.addEventListener('click', () => {
      if(widget.dataset.dragged === 'true'){
        widget.dataset.dragged = 'false';
        return;
      }
      widget.classList.toggle('is-open');
      updateAlignment(widget);
      if(widget.classList.contains('is-open')){
        loadTranslate().catch(() => setStatus(widget, 'Translation service failed to load. Please check the network and try again.', true));
      }
    });

    close.addEventListener('click', () => widget.classList.remove('is-open'));
    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape') widget.classList.remove('is-open');
    });
  }

  function bindDrag(widget){
    const handle = widget.querySelector('#tjwTranslateToggle');
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    let dragging = false;
    let moved = false;

    handle.addEventListener('pointerdown', (event) => {
      const rect = widget.getBoundingClientRect();
      startX = event.clientX;
      startY = event.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      dragging = true;
      moved = false;
      widget.classList.add('is-dragging');
      widget.style.left = startLeft + 'px';
      widget.style.top = startTop + 'px';
      widget.style.right = 'auto';
      widget.style.bottom = 'auto';
      if(handle.setPointerCapture) handle.setPointerCapture(event.pointerId);
    });

    document.addEventListener('pointermove', (event) => {
      if(!dragging) return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if(Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;

      const viewport = getViewportSize();
      const left = clamp(startLeft + dx, 10, viewport.width - widget.offsetWidth - 10);
      const top = clamp(startTop + dy, 10, viewport.height - widget.offsetHeight - 10);
      widget.style.left = left + 'px';
      widget.style.top = top + 'px';
      updateAlignment(widget);
    });

    document.addEventListener('pointerup', () => {
      if(!dragging) return;
      dragging = false;
      widget.classList.remove('is-dragging');
      if(moved){
        widget.dataset.dragged = 'true';
        savePosition(widget);
      }
    });

    window.addEventListener('resize', () => clampPosition(widget));
  }

  function restorePosition(widget){
    const saved = localStorage.getItem(POS_KEY);
    if(!saved){
      updateAlignment(widget);
      return;
    }
    try{
      const pos = JSON.parse(saved);
      if(typeof pos.left !== 'number' || typeof pos.top !== 'number') return;
      widget.style.left = pos.left + 'px';
      widget.style.top = pos.top + 'px';
      widget.style.right = 'auto';
      widget.style.bottom = 'auto';
      runWhenIdle(() => clampPosition(widget), 120);
    }catch(error){
      localStorage.removeItem(POS_KEY);
    }
  }

  function savePosition(widget){
    const rect = widget.getBoundingClientRect();
    localStorage.setItem(POS_KEY, JSON.stringify({left:Math.round(rect.left), top:Math.round(rect.top)}));
  }

  function clampPosition(widget){
    const rect = widget.getBoundingClientRect();
    const viewport = getViewportSize();
    if(!widget.style.left && !widget.style.top) return;
    const left = clamp(rect.left, 10, viewport.width - widget.offsetWidth - 10);
    const top = clamp(rect.top, 10, viewport.height - widget.offsetHeight - 10);
    widget.style.left = left + 'px';
    widget.style.top = top + 'px';
    widget.style.right = 'auto';
    widget.style.bottom = 'auto';
    updateAlignment(widget);
    savePosition(widget);
  }

  function updateAlignment(widget){
    const rect = widget.getBoundingClientRect();
    const viewport = getViewportSize();
    const panelWidth = viewport.width <= 640 ? viewport.width - 28 : Math.min(318, viewport.width - 32);
    widget.classList.toggle('align-left', rect.right - panelWidth < 8);
  }

  function getViewportSize(){
    return {
      width: Math.min(window.innerWidth || document.documentElement.clientWidth, document.documentElement.clientWidth || window.innerWidth),
      height: Math.min(window.innerHeight || document.documentElement.clientHeight, document.documentElement.clientHeight || window.innerHeight)
    };
  }

  function clamp(value, min, max){
    return Math.max(min, Math.min(max, value));
  }

  function runWhenIdle(callback, timeout){
    if('requestIdleCallback' in window){
      window.requestIdleCallback(callback, {timeout:timeout || 1000});
      return;
    }
    window.setTimeout(callback, timeout || 600);
  }

  ready(createWidget);
})();
