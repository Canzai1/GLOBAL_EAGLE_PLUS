/* TJWUAV consent-gated GA4. One shared instance for React and standalone pages.
 * Reviewed public-route allowlist: update deliberately when indexable pages change.
 * No tag/network/cookies before opt-in. No message, email, phone or raw URL payloads.
 */
(() => {
  'use strict';
  if (window.__tjwuavAnalyticsInitialized) return;
  window.__tjwuavAnalyticsInitialized = true;

  const ID = 'G-KBY48M7PBZ';
  const SITE = 'https://tjwuav.com';
  const KEY = 'tjwuav:analytics-consent:v1';
  const LIFETIME = 180 * 24 * 60 * 60 * 1000;
  const PAGES = {
    "/": {
      "title": "Complete Agricultural, Delivery & FPV Drones | TYI",
      "family": "general"
    },
    "/agricultural-drones/": {
      "title": "Agricultural Drones | 5L to 30L Platforms | TYI",
      "family": "agricultural"
    },
    "/delivery-drones/": {
      "title": "Delivery Drones | 5KG to 50KG Cargo UAVs | TYI",
      "family": "delivery"
    },
    "/fpv-drones/": {
      "title": "FPV Drones | 7 to 15-Inch Platforms | TYI",
      "family": "fpv"
    },
    "/guides/how-to-choose-agricultural-spraying-drone/": {
      "title": "How to Choose an Agricultural Spraying Drone | Buyer’s Guide",
      "family": "agricultural"
    },
    "/guides/agricultural-drone-assembly-line-equipment/": {
      "title": "Agricultural Drone Assembly Line Equipment Checklist | TYI",
      "family": "production_line"
    },
    "/guides/agricultural-drone-spare-parts-kit/": {
      "title": "Agricultural Drone Spare Parts Kit Checklist | TYI",
      "family": "agricultural"
    },
    "/guides/agricultural-spraying-drone-quotation-checklist/": {
      "title": "Agricultural Spraying Drone Quotation Checklist | TYI",
      "family": "agricultural"
    },
    "/agricultural-drone-production-line/": {
      "title": "Agricultural Drone Production Line & Technical Services | TYI",
      "family": "production_line"
    },
    "/products/tyi-4-axis-5l/": {
      "title": "TYI 4 Axis 5L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-4-axis-5l"
    },
    "/products/tyi-4-axis-10l/": {
      "title": "TYI 4 Axis 10L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-4-axis-10l"
    },
    "/products/tyi-4-axis-16l/": {
      "title": "TYI 4 Axis 16L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-4-axis-16l"
    },
    "/products/tyi-4-axis-21l/": {
      "title": "TYI 4 Axis 21L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-4-axis-21l"
    },
    "/products/tyi-4-axis-30l/": {
      "title": "TYI 4 Axis 30L Plug-In Agricultural Drone",
      "family": "agricultural",
      "model": "tyi-4-axis-30l"
    },
    "/products/tyi-6-axis-10l/": {
      "title": "TYI 6 Axis 10L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-6-axis-10l"
    },
    "/products/tyi-6-axis-16l/": {
      "title": "TYI 6 Axis 16L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-6-axis-16l"
    },
    "/products/tyi-6-axis-30l/": {
      "title": "TYI 6 Axis 30L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-6-axis-30l"
    },
    "/products/tyi-8-axis-16l/": {
      "title": "TYI 8 Axis 16L Agricultural Spraying Drone",
      "family": "agricultural",
      "model": "tyi-8-axis-16l"
    },
    "/products/7-inch-fpv-drone/": {
      "title": "7-Inch FPV Drone | Long-Range Video Platform",
      "family": "fpv",
      "model": "7-inch-fpv-drone"
    },
    "/products/10-inch-fpv-drone/": {
      "title": "10-Inch FPV Drone | Long-Range Video Platform",
      "family": "fpv",
      "model": "10-inch-fpv-drone"
    },
    "/products/13-inch-fpv-drone-crossbar/": {
      "title": "13-Inch Crossbar FPV Drone | Long-Range Video",
      "family": "fpv",
      "model": "13-inch-fpv-drone-crossbar"
    },
    "/products/13-inch-fpv-drone-square-tube/": {
      "title": "13-Inch Square-Tube FPV Drone | Long-Range Video",
      "family": "fpv",
      "model": "13-inch-fpv-drone-square-tube"
    },
    "/products/13-inch-fpv-drone-ares-frame/": {
      "title": "13-Inch Ares Frame FPV Drone | Long-Range Video",
      "family": "fpv",
      "model": "13-inch-fpv-drone-ares-frame"
    },
    "/products/15-inch-fpv-drone/": {
      "title": "15-Inch FPV Drone | Long-Range Video Platform",
      "family": "fpv",
      "model": "15-inch-fpv-drone"
    },
    "/products/4-axis-5kg-portable-delivery-drone/": {
      "title": "4 Axis 5KG Portable Delivery Drone | TYI Delivery Drone",
      "family": "delivery",
      "model": "4-axis-5kg-portable-delivery-drone"
    },
    "/products/4-axis-5-10kg-long-flight-delivery-drone/": {
      "title": "4 Axis 5KG/10KG Long Flight Delivery Drone | TYI Delivery Drone",
      "family": "delivery",
      "model": "4-axis-5-10kg-long-flight-delivery-drone"
    },
    "/products/6-axis-16kg-delivery-drone/": {
      "title": "6 Axis 16KG Long Flight Delivery Drone | TYI Delivery Drone",
      "family": "delivery",
      "model": "6-axis-16kg-delivery-drone"
    },
    "/products/6-axis-30kg-delivery-drone/": {
      "title": "6 Axis 30KG X9 Plus Delivery Drone | TYI",
      "family": "delivery",
      "model": "6-axis-30kg-delivery-drone"
    },
    "/products/4-axis-5-10kg-long-distance-delivery-drone/": {
      "title": "4 Axis 5KG/10KG Long Distance Delivery Drone | TYI Delivery Drone",
      "family": "delivery",
      "model": "4-axis-5-10kg-long-distance-delivery-drone"
    },
    "/products/4-axis-5-10kg-x6-delivery-drone/": {
      "title": "4 Axis 5KG/10KG Delivery Drone with X6 Motor | TYI Delivery Drone",
      "family": "delivery",
      "model": "4-axis-5-10kg-x6-delivery-drone"
    },
    "/products/6-axis-50kg-long-range-delivery-drone/": {
      "title": "6 Axis 50KG Long-Range GPS Delivery Drone | TYI",
      "family": "delivery",
      "model": "6-axis-50kg-long-range-delivery-drone"
    },
    "/products/4-axis-22kg-delivery-drone/": {
      "title": "4 Axis 22KG Delivery Drone | TYI Delivery Drone",
      "family": "delivery",
      "model": "4-axis-22kg-delivery-drone"
    },
    "/products/4-axis-5kg-delivery-drone/": {
      "title": "4 Axis 5KG Delivery Drone | TYI Delivery Drone",
      "family": "delivery",
      "model": "4-axis-5kg-delivery-drone"
    },
    "/privacy-policy/": {
      "title": "Privacy Policy | TYI",
      "family": "general"
    },
    "/about/": {
      "title": "About TYI | Complete Drone Manufacturer in China",
      "family": "general"
    },
    "/contact/": {
      "title": "Contact TYI | Drone Quotes & Inquiries",
      "family": "general"
    },
    "/faq/": {
      "title": "Drone FAQ | Products, Configurations & Quotes | TYI",
      "family": "general"
    },
    "/motors/": {
      "title": "Brushless Drone Motors | FPV & Multirotor Motors | TYI",
      "family": "motor"
    },
    "/products/tyi-3508-brushless-motor/": {
      "title": "TYI 3508 Brushless Motor | KV400 / KV590 | TYI",
      "family": "motor",
      "model": "tyi-3508-brushless-motor"
    },
    "/products/tyi-4006-brushless-motor/": {
      "title": "TYI 4006 Brushless Motor | KV380 | TYI",
      "family": "motor",
      "model": "tyi-4006-brushless-motor"
    },
    "/products/tyi-5008-brushless-motor/": {
      "title": "TYI 5008 Brushless Motor | KV335 / KV400 | TYI",
      "family": "motor",
      "model": "tyi-5008-brushless-motor"
    },
    "/products/tyi-5010-brushless-motor/": {
      "title": "TYI 5010 Brushless Motor | KV280 / KV340 | TYI",
      "family": "motor",
      "model": "tyi-5010-brushless-motor"
    },
    "/products/tyi-5010-ii-brushless-motor/": {
      "title": "TYI 5010 II Brushless Motor | KV280 / KV340 | TYI",
      "family": "motor",
      "model": "tyi-5010-ii-brushless-motor"
    },
    "/products/tyi-b2807-fpv-motor/": {
      "title": "TYI B2807 FPV Motor | KV1300 | TYI",
      "family": "motor",
      "model": "tyi-b2807-fpv-motor"
    },
    "/products/tyi-b2809-fpv-motor/": {
      "title": "TYI B2809 FPV Motor | KV1250 | TYI",
      "family": "motor",
      "model": "tyi-b2809-fpv-motor"
    },
    "/products/tyi-b2812-fpv-motor/": {
      "title": "TYI B2812 FPV Motor | KV900 | TYI",
      "family": "motor",
      "model": "tyi-b2812-fpv-motor"
    },
    "/products/tyi-b3110-fpv-motor/": {
      "title": "TYI B3110 FPV Motor | KV900 | TYI",
      "family": "motor",
      "model": "tyi-b3110-fpv-motor"
    },
    "/products/tyi-b3112-fpv-motor/": {
      "title": "TYI B3112 FPV Motor | KV900 | TYI",
      "family": "motor",
      "model": "tyi-b3112-fpv-motor"
    },
    "/products/tyi-b3115-fpv-motor/": {
      "title": "TYI B3115 FPV Motor | KV900 | TYI",
      "family": "motor",
      "model": "tyi-b3115-fpv-motor"
    },
    "/products/tyi-cf5015-fpv-motor/": {
      "title": "TYI CF5015 FPV Motor | KV410 confirmed | TYI",
      "family": "motor",
      "model": "tyi-cf5015-fpv-motor"
    }
  };
  const path = window.location.pathname.replace(/\/+$/, '') + '/';
  const page = PAGES[path];
  // Unknown paths and the real404 never become guessed page URLs in Analytics.
  if (!page) return;
  const debug = window.tjwuavAnalyticsDebug === true;
  const canCollect = window.location.hostname === 'tjwuav.com' || debug;
  let storageAvailable = true;
  let choice = readChoice();
  let enabled = false;
  let loaded = false;
  let viewSent = false;
  let expiryTimer;
  let banner;
  let choicesButton;
  let storageNote;

  function readChoice() {
    try {
      const raw = window.localStorage.getItem(KEY) || 'null';
      const value = JSON.parse(raw);
      if (value?.v !== 1 || !['granted', 'denied'].includes(value.analytics)
        || !Number.isFinite(value.expiresAt) || value.expiresAt <= Date.now()
        || value.expiresAt > Date.now() + LIFETIME + 60000) return null;
      // Same-value writes can be a no-op: use an actual non-PII write/remove probe.
      if (value.analytics === 'granted') {
        window.localStorage.setItem(KEY + ':probe', '1');
        window.localStorage.removeItem(KEY + ':probe');
      }
      return value;
    } catch { storageAvailable = false; return null; }
  }

  function saveChoice(analytics) {
    choice = { v: 1, analytics, expiresAt: Date.now() + LIFETIME };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(choice));
      storageAvailable = window.localStorage.getItem(KEY) === JSON.stringify(choice);
    } catch { storageAvailable = false; }
    if (!storageAvailable) choice.analytics = 'denied';
    return storageAvailable;
  }

  function safeReferrer() {
    try {
      if (!document.referrer) return '';
      const url = new URL(document.referrer);
      // No referrer path, query, fragment, username or port is sent.
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return '';
      if (url.hostname === 'tjwuav.com' || url.hostname === 'www.tjwuav.com') return SITE + '/';
      // Public referring origin only; never arbitrary full referring URLs.
      return url.protocol + '//' + url.hostname + '/';
    } catch { return ''; }
  }

  function metadata() {
    return {
      page_location: SITE + path,
      page_path: path,
      page_title: page.title,
      page_referrer: safeReferrer(),
      product_family: page.family,
      ...(debug ? { debug_mode: true, test_traffic: 'developer_validation' } : {})
    };
  }

  function validGrant() {
    if (storageAvailable) choice = readChoice();
    return choice?.analytics === 'granted' && choice.expiresAt > Date.now();
  }

  function send(name, extra = {}) {
    if (!enabled || !canCollect || typeof window.gtag !== 'function') return;
    if (!validGrant()) { stopAndReload(false); renderState(true); return; }
    window.gtag('event', name, { ...metadata(), ...extra, send_to: ID, transport_type: 'beacon' });
  }

  function scheduleExpiry() {
    window.clearTimeout(expiryTimer);
    if (!choice) return;
    const remaining = choice.expiresAt - Date.now();
    if (remaining <= 0) {
      choice = null;
      if (loaded) stopAndReload();
      else renderState(true);
      return;
    }
    expiryTimer = window.setTimeout(scheduleExpiry, Math.min(remaining + 10, 2147483000));
  }

  function startAnalytics() {
    if (!validGrant() || !canCollect) return;
    enabled = true;
    window['ga-disable-' + ID] = false;
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    const denied = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' };
    window.gtag('consent', 'default', denied);
    window.gtag('consent', 'update', { ...denied, analytics_storage: 'granted' });
    window.gtag('set', 'url_passthrough', false);
    window.gtag('set', 'ads_data_redaction', true);
    const config = {
      ...metadata(),
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: LIFETIME / 1000,
      // No arbitrary UTM, ad click ID or contact query is forwarded as page_location.
      campaign_id: '', campaign_source: '', campaign_medium: '',
      campaign_name: '', campaign_term: '', campaign_content: ''
    };
    window.gtag('set', config);
    window.gtag('js', new Date());
    window.gtag('config', ID, config);
    if (!viewSent) {
      viewSent = true;
      send('page_view');
    }
    const script = document.createElement('script');
    script.id = 'tjw-google-analytics';
    script.async = true;
    script.referrerPolicy = 'origin';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    // Blocking/failing Analytics never blocks the visitor's contact actions.
    script.addEventListener('error', () => {
      enabled = false;
      window['ga-disable-' + ID] = true;
      window.dataLayer.length = 0;
      loaded = false;
      viewSent = false;
      script.remove();
    });
    document.head.append(script);
  }

  function clearAnalyticsCookies() {
    try {
      const names = document.cookie.split(';').map(part => part.trim().split('=')[0])
        .filter(name => name === '_ga' || name === '_ga_' + ID.slice(2).replaceAll('-', ''));
      for (const name of names) {
        const expired = name + '=; Max-Age=0; Path=/; SameSite=Lax';
        document.cookie = expired;
        document.cookie = expired + '; Domain=' + window.location.hostname;
        document.cookie = expired + '; Domain=.' + window.location.hostname;
      }
    } catch { /* Existing browsing/contact behavior must survive restricted storage. */ }
  }

  function stopAndReload(reload = true) {
    // Kill collection before a unload engagement handler can run.
    enabled = false;
    window['ga-disable-' + ID] = true;
    if (Array.isArray(window.dataLayer)) window.dataLayer.length = 0;
    clearAnalyticsCookies();
    document.getElementById('tjw-google-analytics')?.remove();
    // A fresh denied/unset document unloads the library entirely: no denied-state pings.
    if (reload) {
      window.gtag = function () {};
      window.location.reload();
    }
  }

  function locationFor(anchor) {
    if (anchor.closest('.floating-whatsapp, .motor-whatsapp')) return 'floating';
    if (anchor.closest('header, .site-header')) return 'header';
    if (anchor.closest('footer')) return 'footer';
    if (anchor.closest('.direct-inquiry-card, .motor-direct-card, .inquiry-form')) return 'contact_card';
    if (anchor.closest('#contact, .contact-links, .motor-contact__links')) return 'contact_info';
    return 'content';
  }

  function contactClicked(event) {
    if (!event.isTrusted) return;
    if (!enabled) return;
    const target = event.target instanceof Element ? event.target : event.target?.parentElement;
    const anchor = target?.closest('a[href]');
    if (!anchor || anchor.closest('#tjw-analytics-banner')) return;
    let name;
    const href = anchor.getAttribute('href') || '';
    if (/^mailto:/i.test(href)) name = 'email_click';
    else {
      try {
        const url = new URL(href, window.location.origin);
        if (url.protocol === 'https:' && url.hostname === 'wa.me') name = 'whatsapp_click';
      } catch { return; }
    }
    if (!name) return;
    if (!validGrant()) { stopAndReload(false); renderState(true); return; }
    // No preventDefault, no URL rewrite, no callbacks delaying navigation.
    send(name, { contact_location: locationFor(anchor), ...(page.model ? { product_model_id: page.model } : {}) });
  }

  function renderState(show) {
    if (!banner) return;
    banner.hidden = !show;
    choicesButton.hidden = show;
    choicesButton.setAttribute('aria-expanded', String(show));
    storageNote.hidden = storageAvailable;
    choicesButton.setAttribute('aria-label', 'Change analytics privacy choices');
  }

  function decide(analytics) {
    const hadLibrary = loaded;
    saveChoice(analytics);
    if (analytics === 'denied' || !storageAvailable) {
      enabled = false;
      window['ga-disable-' + ID] = true;
      clearAnalyticsCookies();
      if (hadLibrary) {
        stopAndReload(storageAvailable);
        if (storageAvailable) return;
      }
    } else startAnalytics();
    scheduleExpiry();
    renderState(!storageAvailable);
    if (storageAvailable) choicesButton.focus({ preventScroll: true });
  }

  function init() {
    banner = document.createElement('section');
    banner.id = 'tjw-analytics-banner';
    banner.className = 'tjw-analytics-banner';
    banner.setAttribute('aria-label', 'Analytics privacy choices');
    banner.innerHTML = '<h2>Analytics privacy choices</h2>' +
      '<p>We use optional Google Analytics cookies to understand page visits and email/WhatsApp link clicks. Analytics stays off until you accept. Rejecting will not affect browsing or contacting us. <a href="/privacy-policy/">Privacy Policy</a>.</p>' +
      '<div class="tjw-analytics-actions"><button type="button" data-analytics-choice="denied">Reject analytics</button><button type="button" data-analytics-choice="granted">Accept analytics</button></div>' +
      '<p class="tjw-analytics-storage" hidden>Your browser cannot save this choice. Analytics remains off; browsing and contact links still work.</p>';
    storageNote = banner.querySelector('.tjw-analytics-storage');
    for (const button of banner.querySelectorAll('[data-analytics-choice]')) {
      button.addEventListener('click', event => { if (event.isTrusted) decide(button.dataset.analyticsChoice); });
    }
    choicesButton = document.createElement('button');
    choicesButton.id = 'tjw-analytics-choices';
    choicesButton.className = 'tjw-analytics-choices';
    choicesButton.type = 'button';
    choicesButton.textContent = 'Privacy choices';
    choicesButton.setAttribute('aria-controls', banner.id);
    choicesButton.addEventListener('click', () => {
      renderState(true);
      banner.querySelector('button').focus({ preventScroll: true });
    });
    document.body.append(banner, choicesButton);
    // One delegated listener survives React rendering and nested SVG click targets.
    document.addEventListener('click', contactClicked, { passive: true });
    renderState(!choice);
    if (validGrant()) startAnalytics();
    else { window['ga-disable-' + ID] = true; clearAnalyticsCookies(); }
    scheduleExpiry();
    window.addEventListener('storage', event => {
      if (event.key !== KEY && event.key !== null) return;
      choice = readChoice();
      if (!validGrant() && loaded) { stopAndReload(storageAvailable); renderState(true); return; }
      if (validGrant()) startAnalytics();
      renderState(!choice);
      scheduleExpiry();
    });
    window.addEventListener('pageshow', event => {
      // A previously granted document must not bypass a cross-tab withdrawal through BFCache.
      if (!event.persisted) return;
      choice = readChoice();
      if (!validGrant() && loaded) { stopAndReload(storageAvailable); renderState(true); }
      else { renderState(!choice); if (validGrant()) startAnalytics(); scheduleExpiry(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
