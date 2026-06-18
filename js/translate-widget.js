(function(){
  const SOURCE_LANG='chinese_simplified';
  const LANG_KEY='tjw_site_language';
  const POS_KEY='tjw_translate_widget_position';
  const TRANSLATE_SRC='https://cdn.staticfile.net/translate.js/3.18.66/translate.js';
  let translateLoadPromise=null;
  let translateConfigured=false;
  const LANGUAGES=[
    ['chinese_simplified','中文原文'],
    ['english','English'],
    ['spanish','Español'],
    ['french','Français'],
    ['german','Deutsch'],
    ['russian','Русский'],
    ['portuguese','Português'],
    ['italian','Italiano'],
    ['arabic','العربية'],
    ['japanese','日本語'],
    ['korean','한국어'],
    ['thai','ไทย'],
    ['vietnamese','Tiếng Việt'],
    ['indonesian','Indonesia'],
    ['malay','Melayu'],
    ['hindi','हिन्दी'],
    ['turkish','Türkçe'],
    ['dutch','Nederlands'],
    ['polish','Polski'],
    ['swedish','Svenska'],
    ['ukrainian','Українська'],
    ['greek','Ελληνικά'],
    ['hebrew','עברית']
  ];
  const QUICK_LANGS=[
    ['english','EN'],
    ['spanish','ES'],
    ['french','FR'],
    ['arabic','AR'],
    ['russian','RU'],
    ['japanese','JP']
  ];

  function ready(fn){
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn);
    else fn();
  }

  function createWidget(){
    if(document.getElementById('tjwTranslateWidget')) return;
    const widget=document.createElement('div');
    widget.id='tjwTranslateWidget';
    widget.className='tjw-translate-widget';
    widget.innerHTML=[
      '<button class="tjw-translate-toggle" type="button" id="tjwTranslateToggle" aria-label="打开翻译工具，拖动可移动">',
      '<span class="tjw-translate-icon">A/文</span>',
      '</button>',
      '<div class="tjw-translate-panel" id="tjwTranslatePanel" role="dialog" aria-label="网页翻译工具">',
      '<div class="tjw-translate-head">',
      '<div><p class="tjw-translate-title">网页翻译</p><p class="tjw-translate-subtitle">选择语言即可翻译，拖动圆形按钮可移动位置。</p></div>',
      '<button class="tjw-translate-close" type="button" id="tjwTranslateClose" aria-label="关闭翻译面板">×</button>',
      '</div>',
      '<select class="tjw-translate-select" id="languageSwitcher" aria-label="选择翻译语言"></select>',
      '<div class="tjw-translate-quick" id="tjwTranslateQuick"></div>',
      '<button class="tjw-translate-reset" type="button" id="tjwTranslateReset">显示中文原文</button>',
      '<div class="tjw-translate-status" id="tjwTranslateStatus">翻译服务加载中...</div>',
      '<div class="tjw-translate-tip">提示：如果第一次翻译较慢，稍等几秒后再选择语言即可。</div>',
      '</div>'
    ].join('');
    document.body.appendChild(widget);

    const select=widget.querySelector('#languageSwitcher');
    LANGUAGES.forEach(([value,label])=>{
      const option=document.createElement('option');
      option.value=value;
      option.textContent=label;
      select.appendChild(option);
    });

    const quick=widget.querySelector('#tjwTranslateQuick');
    QUICK_LANGS.forEach(([lang,label])=>{
      const button=document.createElement('button');
      button.type='button';
      button.dataset.lang=lang;
      button.textContent=label;
      quick.appendChild(button);
    });

    restorePosition(widget);
    bindDrag(widget);
    bindPanel(widget);
    initTranslation(widget);
  }

  function setStatus(widget,text,isError){
    const status=widget.querySelector('#tjwTranslateStatus');
    if(!status) return;
    status.textContent=text;
    status.classList.toggle('is-error',!!isError);
  }

  function initTranslation(widget){
    const select=widget.querySelector('#languageSwitcher');
    const saved=localStorage.getItem(LANG_KEY)||SOURCE_LANG;
    if(select.querySelector('option[value="'+saved+'"]')) select.value=saved;
    setStatus(widget,saved===SOURCE_LANG ? '请选择目标语言' : '正在准备上次选择的语言...');

    select.addEventListener('change',()=>applyLanguage(widget,select.value));
    widget.querySelector('#tjwTranslateReset').addEventListener('click',()=>applyLanguage(widget,SOURCE_LANG));
    widget.querySelectorAll('#tjwTranslateQuick button').forEach(button=>{
      button.addEventListener('click',()=>applyLanguage(widget,button.dataset.lang));
    });

    if(saved!==SOURCE_LANG){
      runWhenIdle(()=>{
        if((localStorage.getItem(LANG_KEY)||SOURCE_LANG)===saved) applyLanguage(widget,saved);
      },900);
    }
  }

  function applyLanguage(widget,lang){
    const select=widget.querySelector('#languageSwitcher');
    if(select.querySelector('option[value="'+lang+'"]')) select.value=lang;
    localStorage.setItem(LANG_KEY,lang);

    if(lang===SOURCE_LANG && !hasTranslateApi()){
      setStatus(widget,'已显示中文原文');
      return;
    }

    if(!hasTranslateApi()){
      setStatus(widget,'翻译服务加载中...');
      loadTranslate()
        .then(()=>applyLanguage(widget,lang))
        .catch(()=>setStatus(widget,'翻译服务加载失败，请检查网络后重试。',true));
      return;
    }

    try{
      configureTranslate();
      if(lang===SOURCE_LANG){
        if(typeof translate.reset==='function') translate.reset({selectLanguageRefreshRender:false});
        translate.to=SOURCE_LANG;
        if(translate.storage && typeof translate.storage.set==='function') translate.storage.set('to',SOURCE_LANG);
        setStatus(widget,'已显示中文原文');
        return;
      }
      translate.changeLanguage(lang);
      const label=select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : lang;
      setStatus(widget,'当前语言：'+label);
    }catch(error){
      setStatus(widget,'翻译失败，请稍后重试。',true);
    }
  }

  function loadTranslate(){
    if(hasTranslateApi()){
      configureTranslate();
      return Promise.resolve();
    }
    if(translateLoadPromise) return translateLoadPromise;
    translateLoadPromise=new Promise((resolve,reject)=>{
      const existing=document.querySelector('script[data-tjw-translate-lib]');
      if(existing){
        existing.addEventListener('load',()=>{configureTranslate();resolve();},{once:true});
        existing.addEventListener('error',reject,{once:true});
        return;
      }
      const script=document.createElement('script');
      script.src=TRANSLATE_SRC;
      script.async=true;
      script.dataset.tjwTranslateLib='true';
      script.onload=()=>{
        try{
          configureTranslate();
          resolve();
        }catch(error){
          reject(error);
        }
      };
      script.onerror=reject;
      document.head.appendChild(script);
    });
    return translateLoadPromise;
  }

  function configureTranslate(){
    if(!hasTranslateApi() || translateConfigured) return;
    translate.language.setLocal(SOURCE_LANG);
    translate.service.use('client.edge');
    translateConfigured=true;
  }

  function hasTranslateApi(){
    return !!(
      window.translate &&
      window.translate.language &&
      typeof window.translate.changeLanguage==='function'
    );
  }

  function runWhenIdle(callback,timeout){
    if('requestIdleCallback' in window){
      window.requestIdleCallback(callback,{timeout:timeout||1000});
      return;
    }
    window.setTimeout(callback,timeout||600);
  }

  function bindPanel(widget){
    const toggle=widget.querySelector('#tjwTranslateToggle');
    const close=widget.querySelector('#tjwTranslateClose');
    toggle.addEventListener('click',()=>{
      if(widget.dataset.dragged==='true'){
        widget.dataset.dragged='false';
        return;
      }
      widget.classList.toggle('is-open');
      updateAlignment(widget);
      if(widget.classList.contains('is-open')){
        loadTranslate().catch(()=>setStatus(widget,'翻译服务加载失败，请检查网络后重试。',true));
      }
    });
    close.addEventListener('click',()=>widget.classList.remove('is-open'));
    document.addEventListener('keydown',(event)=>{
      if(event.key==='Escape') widget.classList.remove('is-open');
    });
  }

  function bindDrag(widget){
    const handle=widget.querySelector('#tjwTranslateToggle');
    let startX=0,startY=0,startLeft=0,startTop=0,dragging=false,moved=false;
    const onMove=(event)=>{
      if(!dragging) return;
      const point=getPoint(event);
      const dx=point.x-startX;
      const dy=point.y-startY;
      if(Math.abs(dx)>4 || Math.abs(dy)>4) moved=true;
      const viewport=getViewportSize();
      const maxLeft=viewport.width-widget.offsetWidth-10;
      const maxTop=viewport.height-widget.offsetHeight-10;
      const left=Math.max(10,Math.min(maxLeft,startLeft+dx));
      const top=Math.max(10,Math.min(maxTop,startTop+dy));
      widget.style.left=left+'px';
      widget.style.top=top+'px';
      widget.style.right='auto';
      widget.style.bottom='auto';
      updateAlignment(widget);
      event.preventDefault();
    };
    const onEnd=()=>{
      if(!dragging) return;
      dragging=false;
      widget.classList.remove('is-dragging');
      widget.dataset.dragged=moved?'true':'false';
      if(moved) savePosition(widget);
      window.setTimeout(()=>{widget.dataset.dragged='false'},80);
      document.removeEventListener('mousemove',onMove);
      document.removeEventListener('mouseup',onEnd);
      document.removeEventListener('touchmove',onMove);
      document.removeEventListener('touchend',onEnd);
    };
    handle.addEventListener('mousedown',(event)=>{
      dragging=true;moved=false;
      const rect=widget.getBoundingClientRect();
      startLeft=rect.left;startTop=rect.top;startX=event.clientX;startY=event.clientY;
      widget.classList.add('is-dragging');
      document.addEventListener('mousemove',onMove);
      document.addEventListener('mouseup',onEnd);
    });
    handle.addEventListener('touchstart',(event)=>{
      const touch=event.touches[0];
      dragging=true;moved=false;
      const rect=widget.getBoundingClientRect();
      startLeft=rect.left;startTop=rect.top;startX=touch.clientX;startY=touch.clientY;
      widget.classList.add('is-dragging');
      document.addEventListener('touchmove',onMove,{passive:false});
      document.addEventListener('touchend',onEnd);
    },{passive:true});
    window.addEventListener('resize',()=>clampPosition(widget));
  }

  function getPoint(event){
    const touch=event.touches&&event.touches[0];
    return {x:touch?touch.clientX:event.clientX,y:touch?touch.clientY:event.clientY};
  }

  function savePosition(widget){
    const rect=widget.getBoundingClientRect();
    localStorage.setItem(POS_KEY,JSON.stringify({left:rect.left,top:rect.top}));
  }

  function restorePosition(widget){
    try{
      const saved=JSON.parse(localStorage.getItem(POS_KEY)||'null');
      if(saved && Number.isFinite(saved.left) && Number.isFinite(saved.top)){
        widget.style.left=saved.left+'px';
        widget.style.top=saved.top+'px';
        widget.style.right='auto';
        widget.style.bottom='auto';
        window.setTimeout(()=>clampPosition(widget),0);
      }
    }catch(error){}
  }

  function clampPosition(widget){
    const rect=widget.getBoundingClientRect();
    if(!widget.style.left || !widget.style.top) return;
    const viewport=getViewportSize();
    const left=Math.max(10,Math.min(viewport.width-widget.offsetWidth-10,rect.left));
    const top=Math.max(10,Math.min(viewport.height-widget.offsetHeight-10,rect.top));
    widget.style.left=left+'px';
    widget.style.top=top+'px';
    updateAlignment(widget);
    savePosition(widget);
  }

  function getViewportSize(){
    const root=document.documentElement;
    return {
      width:root.clientWidth||window.innerWidth,
      height:root.clientHeight||window.innerHeight
    };
  }

  function updateAlignment(widget){
    const rect=widget.getBoundingClientRect();
    const panel=widget.querySelector('.tjw-translate-panel');
    const viewport=getViewportSize();
    const panelWidth=panel ? Math.min(panel.offsetWidth||318,viewport.width-28) : 318;
    const hasRoomOnRight=rect.left+panelWidth<=viewport.width-10;
    widget.classList.toggle('align-left',hasRoomOnRight);
  }

  ready(createWidget);
})();
