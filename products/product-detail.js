(function(){
  const PRODUCTS = {
    agriculture: {
      category: 'Agricultural Plant Protection',
      title: 'Agricultural Spraying Drone',
      summary: 'A configurable crop protection platform for spraying, fertilizing, spreading, and orchard field operations, built for stable payload work and OEM/ODM project adaptation.',
      image: {
        src: '../assets/step49/product-agriculture.jpg',
        srcset: '../assets/optimized/product-agriculture-480.webp 480w, ../assets/optimized/product-agriculture-820.webp 820w',
        type: 'image/webp',
        alt: 'Agricultural spraying drone product image'
      },
      carousel: {
        caption: 'Product white-background views, field spraying, orchard operation, and fertilizing scenes.',
        images: [
          '../assets/carousel/agriculture/agriculture-carousel-1.jpg?v=20260625b',
          '../assets/carousel/agriculture/agriculture-carousel-2.jpg?v=20260625b',
          '../assets/carousel/agriculture/agriculture-carousel-3.jpg?v=20260625b',
          '../assets/carousel/agriculture/agriculture-carousel-4.jpg?v=20260625b'
        ]
      },
      metrics: [
        ['Application', 'Crop Protection'],
        ['Core Function', 'Precision Spraying'],
        ['Service Support', 'OEM/ODM']
      ],
      specs: [
        ['Application', 'Crop protection, orchard spraying, fertilizing, and spreading'],
        ['Core Function', 'Precision spraying with configurable nozzles and flow systems'],
        ['Payload Options', 'Tank, pump, nozzle, spreading, and project payload customization'],
        ['Recommended Users', 'Agricultural service teams, farms, orchards, and dealers'],
        ['Customization', 'Logo, color, payload module, flight platform, and packaging'],
        ['After-Sales Support', 'Operation guidance, spare parts support, and project documentation'],
        ['Mission Strength', 'Stable low-altitude operation for efficient field coverage'],
        ['Factory Service', 'Sample support, batch production, and OEM/ODM cooperation']
      ],
      application: {
        title: 'Built for Field Crop Protection',
        text: 'The agricultural platform focuses on repeatable field operation, quick service deployment, and flexible configuration for different crop types and regional project needs.',
        image: {
          src: '../assets/step49/application-agriculture.jpg',
          srcset: '../assets/optimized/application-agriculture-420.webp 420w, ../assets/optimized/application-agriculture-720.webp 720w',
          type: 'image/webp',
          alt: 'Agricultural drone application scene'
        },
        caption: 'Agricultural spraying, orchard protection, field fertilizing, and spreading operation scenarios.',
        features: [
          'Configurable spraying and spreading payloads for different project requirements',
          'Suitable for field crops, orchards, plantations, and service operation teams',
          'OEM/ODM support for brand, color, payload module, and delivery configuration',
          'Factory-backed supply for sample evaluation, batch orders, and spare parts'
        ]
      },
      video: {
        src: '../assets/videos/agriculture-spraying.mp4',
        title: 'Agricultural Spraying Demonstration',
        text: 'A real operation clip showing stable low-altitude agricultural spraying in field conditions.',
        points: ['Field operation', 'Spraying workflow', 'Payload stability']
      }
    },
    vtol: {
      category: 'VTOL Platform',
      title: 'VTOL Drone',
      summary: 'A hybrid platform that combines multirotor vertical takeoff and landing with fixed-wing endurance for mapping, inspection, security, and long-distance missions.',
      image: {
        src: '../assets/step49/product-vtol.jpg',
        srcset: '../assets/optimized/product-vtol-480.webp 480w, ../assets/optimized/product-vtol-820.webp 820w',
        type: 'image/webp',
        alt: 'VTOL drone product image'
      },
      carousel: {
        caption: 'White-background product views, flight scenes, indoor setup, and ground deployment angles.',
        images: [
          '../assets/carousel/vtol/vtol-carousel-1.jpg?v=20260625b',
          '../assets/carousel/vtol/vtol-carousel-2.jpg?v=20260625b',
          '../assets/carousel/vtol/vtol-carousel-3.jpg?v=20260625b',
          '../assets/carousel/vtol/vtol-carousel-4.jpg?v=20260625b',
          '../assets/carousel/vtol/vtol-carousel-5.jpg?v=20260625b'
        ]
      },
      metrics: [
        ['Takeoff Mode', 'VTOL'],
        ['Key Advantage', 'Long Endurance'],
        ['Mission Type', 'Mapping / Inspection']
      ],
      specs: [
        ['Takeoff Mode', 'Vertical takeoff and landing without runway requirements'],
        ['Airframe Type', 'Fixed-wing hybrid platform with multirotor lift capability'],
        ['Mission Type', 'Mapping, inspection, security, emergency response, and patrol'],
        ['Payload Options', 'Camera, mapping payload, inspection payload, and custom modules'],
        ['Key Advantage', 'Efficient long-distance coverage with flexible field deployment'],
        ['Customization', 'Airframe, payload bay, color, logo, and mission equipment'],
        ['Recommended Users', 'Survey teams, industrial users, public safety, and integrators'],
        ['Factory Service', 'Platform configuration, production support, and technical handover']
      ],
      application: {
        title: 'Long-Range Mission Platform',
        text: 'The VTOL platform is designed for customers who need runway-free deployment, broad area coverage, and mission payload flexibility across multiple industrial environments.',
        image: {
          src: '../assets/step49/application-mapping.jpg',
          srcset: '../assets/optimized/application-mapping-420.webp 420w, ../assets/optimized/application-mapping-720.webp 720w',
          type: 'image/webp',
          alt: 'VTOL drone mapping application scene'
        },
        caption: 'Large-area mapping, line patrol, inspection, and long-distance mission scenarios.',
        features: [
          'Vertical takeoff and landing for complex terrain and limited launch sites',
          'Fixed-wing cruising efficiency for longer range and wider mission coverage',
          'Payload-ready structure for cameras, sensors, and project equipment',
          'Custom platform service for integrators, dealers, and project buyers'
        ]
      },
      video: {
        src: '../assets/videos/vtol-flight.mp4',
        title: 'VTOL Flight Demonstration',
        text: 'A field clip showing the VTOL platform in flight, suitable for customer evaluation and project discussion.',
        points: ['Vertical takeoff', 'Fixed-wing mission', 'Long-range platform']
      }
    },
    mapping: {
      category: 'Geographic Mapping',
      title: 'High-Precision Mapping Drone',
      summary: 'A drone platform for aerial surveying, orthophoto capture, 3D modeling, land planning, construction measurement, and geographic data acquisition.',
      image: {
        src: '../assets/step49/product-mapping.jpg',
        srcset: '../assets/optimized/product-mapping-480.webp 480w, ../assets/optimized/product-mapping-820.webp 820w',
        type: 'image/webp',
        alt: 'High-precision mapping drone product image'
      },
      carousel: {
        caption: 'White-background product views, aerial mapping, construction survey, environmental monitoring, and inspection data collection scenes.',
        images: [
          '../assets/carousel/mapping/mapping-carousel-1.jpg?v=20260625c',
          '../assets/carousel/mapping/mapping-carousel-2.jpg?v=20260625c',
          '../assets/carousel/mapping/mapping-carousel-3.jpg?v=20260625c',
          '../assets/carousel/mapping/mapping-carousel-4.jpg?v=20260625c'
        ]
      },
      metrics: [
        ['Application', 'Aerial Mapping'],
        ['Data Output', 'Images / Models'],
        ['Platform Type', 'VTOL / Multirotor']
      ],
      specs: [
        ['Application', 'Surveying, mapping, modeling, land planning, and measurement'],
        ['Data Output', 'Aerial images, orthophotos, point cloud support, and 3D models'],
        ['Payload Device', 'Mapping camera, survey payload, or project-specific sensor'],
        ['Platform Type', 'VTOL or multirotor configuration according to mission range'],
        ['Mission Strength', 'Stable route operation and repeatable data acquisition'],
        ['Recommended Users', 'Survey teams, mapping companies, construction, and land projects'],
        ['Customization', 'Camera payload, platform type, data workflow, and branding'],
        ['Factory Service', 'Project configuration, sample support, and batch delivery']
      ],
      application: {
        title: 'Surveying and Mapping Workflows',
        text: 'This mapping solution supports customers who need reliable aerial data collection for land, construction, environmental, and infrastructure projects.',
        image: {
          src: '../assets/step49/application-mapping.jpg',
          srcset: '../assets/optimized/application-mapping-420.webp 420w, ../assets/optimized/application-mapping-720.webp 720w',
          type: 'image/webp',
          alt: 'Aerial mapping application scene'
        },
        caption: 'Aerial survey, geographic mapping, 3D modeling, construction measurement, and route planning.',
        features: [
          'Supports route-based aerial data capture for repeatable survey missions',
          'Flexible payload options for cameras and project-specific data equipment',
          'Suitable for land planning, engineering measurement, and inspection mapping',
          'Factory configuration support for dealers, integrators, and project buyers'
        ]
      },
      video: {
        src: '../assets/videos/mapping-survey.mp4',
        title: 'Mapping Survey Demonstration',
        text: 'A practical demonstration clip for mapping and aerial survey mission presentation.',
        points: ['Aerial survey', 'Route operation', 'Data collection']
      }
    },
    inspection: {
      category: 'Industrial Inspection',
      title: 'Industrial Inspection Drone',
      summary: 'A modular inspection platform for power lines, industrial parks, pipeline patrols, emergency response, public safety, and real-time industrial monitoring.',
      image: {
        src: '../assets/step49/product-inspection.jpg',
        srcset: '../assets/optimized/product-inspection-480.webp 480w, ../assets/optimized/product-inspection-820.webp 820w',
        type: 'image/webp',
        alt: 'Industrial inspection drone product image'
      },
      carousel: {
        caption: 'White-background product views, flight inspection, power facility inspection, and substation operation scenes.',
        images: [
          '../assets/carousel/inspection/inspection-carousel-1.jpg?v=20260625c',
          '../assets/carousel/inspection/inspection-carousel-2.jpg?v=20260625c',
          '../assets/carousel/inspection/inspection-carousel-3.jpg?v=20260625c',
          '../assets/carousel/inspection/inspection-carousel-4.jpg?v=20260625c'
        ]
      },
      metrics: [
        ['Application', 'Inspection / Security'],
        ['Payload Capability', 'Flexible Mounting'],
        ['Structure', 'Modular']
      ],
      specs: [
        ['Application', 'Power inspection, facility patrol, pipeline inspection, and security'],
        ['Payload Capability', 'Flexible mounting for cameras, sensors, and inspection modules'],
        ['Operation Mode', 'Real-time monitoring, patrol tasks, and emergency response support'],
        ['Structure', 'Modular platform for easier project customization and maintenance'],
        ['Mission Strength', 'Stable visual inspection and quick field deployment'],
        ['Recommended Users', 'Power utilities, industrial facilities, security teams, and integrators'],
        ['Customization', 'Payload mount, camera system, logo, color, and mission package'],
        ['Factory Service', 'OEM/ODM development, production support, and technical handover']
      ],
      application: {
        title: 'Industrial Patrol and Inspection',
        text: 'The inspection platform focuses on practical industrial visibility, flexible payload mounting, and fast deployment for safety, facility, and infrastructure missions.',
        image: {
          src: '../assets/step49/application-power-inspection.jpg',
          srcset: '../assets/optimized/application-power-inspection-420.jpg 420w, ../assets/optimized/application-power-inspection-720.jpg 720w',
          type: 'image/jpeg',
          alt: 'Industrial inspection drone application scene'
        },
        caption: 'Power line inspection, factory patrol, pipeline routes, emergency response, and public safety support.',
        features: [
          'Flexible payload mounting for visual cameras and project inspection equipment',
          'Suitable for power line, facility, pipeline, and industrial patrol missions',
          'Modular structure helps project teams configure and maintain equipment',
          'OEM/ODM support for industrial users, distributors, and system integrators'
        ]
      },
      video: {
        src: '../assets/videos/industrial-inspection.mp4',
        title: 'Industrial Inspection Demonstration',
        text: 'A product video showing industrial UAV operation for inspection and project presentation.',
        points: ['Inspection mission', 'Flexible payload', 'Industrial patrol']
      }
    }
  };

  const PRODUCT_URLS = {
    agriculture: 'agricultural-spraying-drone.html',
    vtol: 'vtol-drone.html',
    mapping: 'high-precision-mapping-drone.html',
    inspection: 'industrial-inspection-drone.html'
  };

  const PRODUCT_FAQS = {
    agriculture: [
      {
        question: 'What crops and fields is this agricultural spraying drone suitable for?',
        answer: 'It is designed for crop protection, orchard spraying, fertilizing, spreading, and field service operations where stable low-altitude payload work is required.'
      },
      {
        question: 'Can TJW customize the tank, nozzle, payload, logo, and color?',
        answer: 'Yes. TeJieWen supports OEM/ODM configuration for spraying tanks, nozzle systems, spreading modules, brand logo, color, packaging, and project delivery needs.'
      },
      {
        question: 'What information should buyers send for a crop protection drone project?',
        answer: 'Useful details include crop type, field area, required payload, terrain, quantity, target market, branding requirements, and any local service or spare parts needs.'
      }
    ],
    vtol: [
      {
        question: 'When should customers choose a VTOL drone instead of a multirotor platform?',
        answer: 'A VTOL drone is a strong choice for runway-free takeoff, longer range, wide-area mapping, line patrol, security, and missions that need fixed-wing cruising efficiency.'
      },
      {
        question: 'Can the VTOL platform carry mapping or inspection payloads?',
        answer: 'Yes. The platform can be configured with cameras, mapping payloads, inspection sensors, and project-specific modules according to mission requirements.'
      },
      {
        question: 'Does TJW support OEM/ODM VTOL drone configuration?',
        answer: 'TJW can support airframe configuration, payload bay adaptation, color, logo, mission equipment, production service, and technical handover for integrators and dealers.'
      }
    ],
    mapping: [
      {
        question: 'What mapping tasks can this high-precision mapping drone support?',
        answer: 'It supports aerial surveying, orthophoto capture, 3D modeling, land planning, construction measurement, route operation, and geographic data acquisition projects.'
      },
      {
        question: 'Can the mapping payload be configured for project requirements?',
        answer: 'Yes. Buyers can discuss camera payloads, survey sensors, platform type, data workflow, branding, and delivery configuration based on the project scenario.'
      },
      {
        question: 'Who typically uses TJW mapping drone solutions?',
        answer: 'Typical users include survey teams, mapping companies, construction projects, land planning teams, engineering contractors, and UAV solution integrators.'
      }
    ],
    inspection: [
      {
        question: 'Which inspection scenarios is this industrial inspection drone designed for?',
        answer: 'It is designed for power line inspection, substation patrol, pipeline routes, industrial facility monitoring, security patrol, public safety, and emergency response.'
      },
      {
        question: 'Can the inspection payload and camera system be customized?',
        answer: 'Yes. TJW can help configure visual cameras, inspection sensors, payload mounts, mission packages, logo, color, and OEM/ODM production requirements.'
      },
      {
        question: 'How does TJW support industrial inspection projects?',
        answer: 'Support can include project configuration, modular platform adaptation, batch production, documentation, technical handover, spare parts planning, and factory service coordination.'
      }
    ]
  };

  const RELATED_PRODUCTS = {
    agriculture: ['vtol', 'mapping', 'inspection'],
    vtol: ['mapping', 'inspection', 'agriculture'],
    mapping: ['vtol', 'inspection', 'agriculture'],
    inspection: ['vtol', 'mapping', 'agriculture']
  };

  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function productUrl(key){
    return PRODUCT_URLS[key] || PRODUCT_URLS.agriculture;
  }

  function breadcrumb(product){
    return [
      '<nav class="breadcrumb" aria-label="Breadcrumb">',
      '  <a href="../index.html#home">Home</a>',
      '  <span class="breadcrumb-separator">/</span>',
      '  <a href="../index.html#products">Products</a>',
      '  <span class="breadcrumb-separator">/</span>',
      '  <span class="breadcrumb-current" aria-current="page">' + product.title + '</span>',
      '</nav>'
    ].join('');
  }

  function picture(image, sizes, loading){
    const source = image.srcset ? '<source srcset="' + image.srcset + '" sizes="' + sizes + '" type="' + image.type + '">' : '';
    return '<picture>' + source + '<img src="' + image.src + '" alt="' + image.alt + '" loading="' + loading + '" decoding="async"></picture>';
  }

  function heroCarousel(product){
    const images = product.carousel && product.carousel.images && product.carousel.images.length ? product.carousel.images : [product.image.src];
    const slides = images.map(function(src, index){
      const active = index === 0 ? ' active' : '';
      const imageAttrs = index === 0 ? 'src="' + src + '" loading="eager"' : 'data-src="' + src + '" loading="lazy"';
      return [
        '<div class="carousel-slide' + active + '">',
        '  <img ' + imageAttrs + ' alt="' + product.title + ' carousel image ' + (index + 1) + '" decoding="async">',
        '</div>'
      ].join('');
    }).join('');
    const dots = images.map(function(src, index){
      const active = index === 0 ? ' active' : '';
      return '<button class="carousel-dot' + active + '" type="button" data-slide="' + index + '" aria-label="Show image ' + (index + 1) + '"></button>';
    }).join('');

    return [
      '<div class="hero-product-card product-carousel-card" data-carousel>',
      '  <div class="product-carousel">',
      slides,
      '    <button class="carousel-arrow carousel-prev" type="button" aria-label="Previous image">&lsaquo;</button>',
      '    <button class="carousel-arrow carousel-next" type="button" aria-label="Next image">&rsaquo;</button>',
      '    <div class="carousel-dots">' + dots + '</div>',
      '  </div>',
      '  <div class="hero-card-caption"><strong>TeJieWen (TJW) ' + product.title + '</strong><span>' + product.carousel.caption + '</span></div>',
      '</div>'
    ].join('');
  }

  function metricCards(items){
    return items.map(function(item){
      return '<div class="metric"><small>' + item[0] + '</small><b>' + item[1] + '</b></div>';
    }).join('');
  }

  function specCards(items){
    return items.map(function(item){
      return '<div class="detail-card"><small>' + item[0] + '</small><b>' + item[1] + '</b></div>';
    }).join('');
  }

  function featureItems(items){
    return items.map(function(item){
      return '<li>' + item + '</li>';
    }).join('');
  }

  function videoPoints(items){
    return items.map(function(item){
      return '<span>' + item + '</span>';
    }).join('');
  }

  function faqCards(key){
    const items = PRODUCT_FAQS[key] || [];
    return items.map(function(item){
      return [
        '<article class="faq-card">',
        '  <h3>' + item.question + '</h3>',
        '  <p>' + item.answer + '</p>',
        '</article>'
      ].join('');
    }).join('');
  }

  function relatedCards(key){
    const items = RELATED_PRODUCTS[key] || [];
    return items.map(function(relatedKey){
      const item = PRODUCTS[relatedKey];
      if(!item) return '';
      return [
        '<a class="related-link" href="' + productUrl(relatedKey) + '">',
        '  <small>' + item.category + '</small>',
        '  <strong>' + item.title + '</strong>',
        '  <span>' + item.summary + '</span>',
        '</a>'
      ].join('');
    }).join('');
  }

  function renderProduct(product, key){
    return [
      '<section class="detail-hero">',
      '  <div class="container detail-hero-grid">',
      '    <div class="detail-copy">',
      '      ' + breadcrumb(product),
      '      <div class="detail-kicker">' + product.category + '</div>',
      '      <h1>' + product.title + '</h1>',
      '      <p>' + product.summary + '</p>',
      '      <div class="hero-actions">',
      '        <a class="btn btn-ghost" href="#product-video">Watch Product Video</a>',
      '      </div>',
      '      <div class="detail-metrics">' + metricCards(product.metrics) + '</div>',
      '    </div>',
      '    ' + heroCarousel(product),
      '  </div>',
      '</section>',
      '<section class="cta-band">',
      '  <div class="container cta-inner">',
      '    <div>',
      '      <h2>Need a project configuration?</h2>',
      '      <p>Send your target application, payload requirement, quantity, and branding needs. TJW can help configure the product and factory service plan.</p>',
      '    </div>',
      '    <div class="cta-actions">',
      '      <a class="btn btn-primary" href="mailto:hollyhuang0121@gmail.com?subject=TJW%20' + encodeURIComponent(product.title) + '%20Project%20Inquiry">Email TJW</a>',
      '      <a class="btn btn-ghost" href="https://wa.me/8618771672481" target="_blank" rel="noopener">WhatsApp</a>',
      '    </div>',
      '  </div>',
      '</section>',
      '<section class="detail-section">',
      '  <div class="container">',
      '    <div class="section-head">',
      '      <span class="section-label">Product Details</span>',
      '      <h2>Key configuration and project information</h2>',
      '      <p>Use these core details as a starting point for customer inquiries, product selection, and OEM/ODM discussion.</p>',
      '    </div>',
      '    <div class="spec-grid">' + specCards(product.specs) + '</div>',
      '  </div>',
      '</section>',
      '<section class="detail-section alt seo-section">',
      '  <div class="container">',
      '    <div class="section-head">',
      '      <span class="section-label">Buyer Guidance</span>',
      '      <h2>Common buyer questions</h2>',
      '      <p>Clear answers help customers compare application fit, customization options, and project requirements before contacting TJW.</p>',
      '    </div>',
      '    <div class="faq-grid">' + faqCards(key) + '</div>',
      '    <div class="related-products">',
      '      <div class="related-heading">',
      '        <div>',
      '          <span class="section-label">Related Products</span>',
      '          <h2>Compare other TJW UAV solutions</h2>',
      '        </div>',
      '      </div>',
      '      <div class="related-grid">' + relatedCards(key) + '</div>',
      '    </div>',
      '  </div>',
      '</section>',
      '<section class="detail-section" id="product-video">',
      '  <div class="container">',
      '    <div class="video-card">',
      '      <div class="video-wrap">',
      '        <video controls preload="none" playsinline poster="' + product.image.src + '">',
      '          <source src="' + product.video.src + '" type="video/mp4">',
      '        </video>',
      '      </div>',
      '      <div class="video-copy">',
      '        <span class="section-label">Product Video</span>',
      '        <h2>' + product.video.title + '</h2>',
      '        <p>' + product.video.text + '</p>',
      '        <div class="video-points">' + videoPoints(product.video.points) + '</div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</section>',
      '<footer class="footer">',
      '  <div class="container">',
      '    <div class="footer-grid">',
      '      <div>',
      '        <div class="footer-brand"><img src="../assets/tjw-logo.webp" alt="TJW Logo" loading="lazy" decoding="async"><div><strong>TeJieWen (TJW)</strong><span>Drone Technology</span></div></div>',
      '        <p>Source manufacturer focused on industrial UAV research and production, serving agricultural plant protection, mapping, inspection, VTOL, and OEM/ODM project needs.</p>',
      '      </div>',
      '      <div>',
      '        <h3>Navigation</h3>',
      '        <ul class="footer-links">',
      '          <li><a href="../index.html#home">Home</a></li>',
      '          <li><a href="../index.html#products">Products</a></li>',
      '          <li><a href="../index.html#featured">Product Videos</a></li>',
      '          <li><a href="../index.html#applications">Applications</a></li>',
      '        </ul>',
      '      </div>',
      '      <div>',
      '        <h3>Contact</h3>',
      '        <ul class="footer-links">',
      '          <li><a href="mailto:hollyhuang0121@gmail.com">hollyhuang0121@gmail.com</a></li>',
      '          <li><a href="https://wa.me/8618771672481" target="_blank" rel="noopener">+86 18771672481</a></li>',
      '          <li><a href="https://tjwuav.com/" target="_blank" rel="noopener">tjwuav.com</a></li>',
      '        </ul>',
      '      </div>',
      '    </div>',
      '    <div class="footer-bottom"><span>&copy; TeJieWen (TJW) Drone Technology.</span><span>Industrial UAV Solutions &middot; OEM/ODM &middot; Production Line Service</span></div>',
      '  </div>',
      '</footer>'
    ].join('');
  }

  function bindMenu(){
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('navLinks');
    if(!btn || !nav) return;
    btn.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        nav.classList.remove('open');
      });
    });
  }

  function initCarousels(){
    document.querySelectorAll('[data-carousel]').forEach(function(carousel){
      const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
      const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
      const prev = carousel.querySelector('.carousel-prev');
      const next = carousel.querySelector('.carousel-next');
      if(!slides.length) return;

      let index = 0;
      let timer = null;
      const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      function loadSlide(i){
        const img = slides[i] && slides[i].querySelector('img[data-src]');
        if(img){
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      }

      function show(i){
        index = (i + slides.length) % slides.length;
        loadSlide(index);
        loadSlide((index + 1) % slides.length);
        slides.forEach(function(slide, n){ slide.classList.toggle('active', n === index); });
        dots.forEach(function(dot, n){ dot.classList.toggle('active', n === index); });
      }

      function stop(){
        if(timer) clearInterval(timer);
        timer = null;
      }

      function start(){
        stop();
        if(!reducedMotion && slides.length > 1) timer = setInterval(function(){ show(index + 1); }, 4200);
      }

      loadSlide(0);
      loadSlide(1);
      prev && prev.addEventListener('click', function(){ show(index - 1); start(); });
      next && next.addEventListener('click', function(){ show(index + 1); start(); });
      dots.forEach(function(dot){
        dot.addEventListener('click', function(){
          show(Number(dot.dataset.slide || 0));
          start();
        });
      });
      carousel.addEventListener('mouseenter', stop);
      carousel.addEventListener('mouseleave', start);
      carousel.addEventListener('focusin', stop);
      carousel.addEventListener('focusout', start);
      start();
    });
  }

  ready(function(){
    bindMenu();
    const root = document.getElementById('productDetailRoot');
    if(!root) return;
    const key = document.body.dataset.product || 'agriculture';
    const product = PRODUCTS[key] || PRODUCTS.agriculture;
    root.innerHTML = renderProduct(product, key);
    initCarousels();
  });
})();
