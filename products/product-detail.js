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

  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function picture(image, sizes, loading){
    const source = image.srcset ? '<source srcset="' + image.srcset + '" sizes="' + sizes + '" type="' + image.type + '">' : '';
    return '<picture>' + source + '<img src="' + image.src + '" alt="' + image.alt + '" loading="' + loading + '"></picture>';
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

  function renderProduct(product){
    return [
      '<section class="detail-hero">',
      '  <div class="container detail-hero-grid">',
      '    <div class="detail-copy">',
      '      <a class="back-link" href="../index.html#products"><span>&lt;</span> Back to Products</a>',
      '      <div class="detail-kicker">' + product.category + '</div>',
      '      <h1>' + product.title + '</h1>',
      '      <p>' + product.summary + '</p>',
      '      <div class="hero-actions">',
      '        <a class="btn btn-primary" href="mailto:hollyhuang0121@gmail.com?subject=Inquiry%20about%20' + encodeURIComponent(product.title) + '">Request a Quote</a>',
      '        <a class="btn btn-ghost" href="#product-video">Watch Product Video</a>',
      '      </div>',
      '      <div class="detail-metrics">' + metricCards(product.metrics) + '</div>',
      '    </div>',
      '    <div class="hero-product-card">',
      '      ' + picture(product.image, '(max-width: 640px) 92vw, 470px', 'eager'),
      '      <div class="hero-card-caption"><strong>TeJieWen (TJW) ' + product.title + '</strong><span>Source factory product platform with OEM/ODM project support.</span></div>',
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
      '<section class="detail-section alt">',
      '  <div class="container split-grid">',
      '    <div class="copy-panel">',
      '      <span class="section-label">Application Scenario</span>',
      '      <h2>' + product.application.title + '</h2>',
      '      <p>' + product.application.text + '</p>',
      '      <ul class="feature-list">' + featureItems(product.application.features) + '</ul>',
      '    </div>',
      '    <figure class="media-card">',
      '      ' + picture(product.application.image, '(max-width: 640px) 92vw, 560px', 'lazy'),
      '      <figcaption class="media-caption">' + product.application.caption + '</figcaption>',
      '    </figure>',
      '  </div>',
      '</section>',
      '<section class="detail-section" id="product-video">',
      '  <div class="container">',
      '    <div class="video-card">',
      '      <div class="video-wrap">',
      '        <video controls preload="metadata" playsinline poster="' + product.image.src + '">',
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
      '<footer class="footer">',
      '  <div class="container">',
      '    <div class="footer-grid">',
      '      <div>',
      '        <div class="footer-brand"><img src="../assets/tjw-logo.webp" alt="TJW Logo"><div><strong>TeJieWen (TJW)</strong><span>Drone Technology</span></div></div>',
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

  ready(function(){
    bindMenu();
    const root = document.getElementById('productDetailRoot');
    if(!root) return;
    const key = document.body.dataset.product || 'agriculture';
    const product = PRODUCTS[key] || PRODUCTS.agriculture;
    root.innerHTML = renderProduct(product);
  });
})();
