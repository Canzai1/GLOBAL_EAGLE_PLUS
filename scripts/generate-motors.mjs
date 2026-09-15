import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://tjwuav.com";
const whatsapp = "https://wa.me/8618771672481";
const email = "sale06@tjwuav.com";
const formUrl = "https://tfile.xiaoman.cn/okki-form/index.html#/?client_id=472820&amp;site_id=33168&amp;form_id=105749043874082";

const products = [
  {
    slug: "tyi-3508-brushless-motor",
    model: "3508",
    name: "TYI 3508 Brushless Motor",
    family: "multirotor",
    familyLabel: "Multirotor motor",
    kv: "KV400 / KV590",
    thrust: "Up to 2 kg",
    weight: "90 g",
    dimensions: "42.2 × 31 mm",
    packageWeight: "223 g / 2-piece pack",
    packageSize: "90 × 73 × 48 mm",
    image: "tyi-3508-brushless-motor-studio.webp",
    description: "Compact multirotor brushless motor offered in KV400 and KV590 windings, with published maximum thrust up to 2 kg.",
  },
  {
    slug: "tyi-4006-brushless-motor",
    model: "4006",
    name: "TYI 4006 Brushless Motor",
    family: "multirotor",
    familyLabel: "Multirotor motor",
    kv: "KV380",
    thrust: "Up to 1.6 kg",
    weight: "93 g",
    dimensions: "50 × 29.67 mm",
    packageWeight: "131.4 g",
    packageSize: "90 × 73 × 48 mm",
    image: "tyi-4006-brushless-motor-studio.webp",
    description: "KV380 multirotor brushless motor with a compact 50 × 29.67 mm body and published maximum thrust up to 1.6 kg.",
  },
  {
    slug: "tyi-5008-brushless-motor",
    model: "5008",
    name: "TYI 5008 Brushless Motor",
    family: "multirotor",
    familyLabel: "Multirotor motor",
    kv: "KV335 / KV400",
    thrust: "Up to 3.9 kg",
    weight: "162 g",
    dimensions: "58 × 37.5 mm",
    packageWeight: "193.4 g",
    packageSize: "90 × 73 × 48 mm",
    image: "tyi-5008-brushless-motor-studio.webp",
    description: "Multirotor brushless motor available in KV335 and KV400 windings, with published maximum thrust up to 3.9 kg.",
  },
  {
    slug: "tyi-5010-brushless-motor",
    model: "5010",
    name: "TYI 5010 Brushless Motor",
    family: "multirotor",
    familyLabel: "Multirotor motor",
    kv: "KV280 / KV340",
    thrust: "Up to 4.5 kg",
    weight: "182 g",
    dimensions: "58.5 × 38 mm",
    packageWeight: "215 g",
    packageSize: "90 × 73 × 48 mm",
    image: "tyi-5010-brushless-motor-studio.webp",
    description: "First-generation 5010 multirotor brushless motor offered in KV280 and KV340 windings, with published maximum thrust up to 4.5 kg.",
  },
  {
    slug: "tyi-5010-ii-brushless-motor",
    model: "5010 II",
    name: "TYI 5010 II Brushless Motor",
    family: "multirotor",
    familyLabel: "Multirotor motor",
    kv: "KV280 / KV340",
    thrust: "Up to 4.5 kg",
    weight: "198 g",
    dimensions: "58.4 × 36 mm",
    packageWeight: "239 g",
    packageSize: "90 × 73 × 48 mm",
    image: "tyi-5010-ii-brushless-motor-studio.webp",
    description: "Second-generation yellow 5010 multirotor motor available in KV280 and KV340 windings, with published maximum thrust up to 4.5 kg.",
  },
  {
    slug: "tyi-b2807-fpv-motor",
    model: "B2807",
    name: "TYI B2807 FPV Motor",
    family: "fpv",
    familyLabel: "FPV motor",
    kv: "KV1300",
    thrust: "Up to 2.2 kg",
    weight: "62 g",
    dimensions: "33.9 × 36 mm",
    packageWeight: "72 g",
    packageSize: "63 × 62 × 46 mm",
    image: "tyi-b2807-fpv-motor-studio.webp",
    description: "Compact KV1300 FPV brushless motor with a 62 g net weight and published maximum thrust up to 2.2 kg.",
  },
  {
    slug: "tyi-b2809-fpv-motor",
    model: "B2809",
    name: "TYI B2809 FPV Motor",
    family: "fpv",
    familyLabel: "FPV motor",
    kv: "KV1250",
    thrust: "Up to 2.4 kg",
    weight: "63 g",
    dimensions: "33.9 × 38 mm",
    packageWeight: "81 g",
    packageSize: "63 × 62 × 46 mm",
    image: "tyi-b2809-fpv-motor-studio.webp",
    description: "KV1250 FPV brushless motor with a compact 33.9 × 38 mm body and published maximum thrust up to 2.4 kg.",
  },
  {
    slug: "tyi-b2812-fpv-motor",
    model: "B2812",
    name: "TYI B2812 FPV Motor",
    family: "fpv",
    familyLabel: "FPV motor",
    kv: "KV900",
    thrust: "Up to 2.5 kg",
    weight: "85 g",
    dimensions: "33.9 × 41 mm",
    packageWeight: "95.5 g",
    packageSize: "63 × 62 × 46 mm",
    image: "tyi-b2812-fpv-motor-studio.webp",
    description: "KV900 FPV brushless motor with an 85 g net weight and published maximum thrust up to 2.5 kg.",
  },
  {
    slug: "tyi-b3110-fpv-motor",
    model: "B3110",
    name: "TYI B3110 FPV Motor",
    family: "fpv",
    familyLabel: "FPV motor",
    kv: "KV900",
    thrust: "Up to 2.7 kg",
    weight: "79 g",
    dimensions: "37.2 × 38.3 mm",
    packageWeight: "98.3 g",
    packageSize: "63 × 62 × 46 mm",
    image: "tyi-b3110-fpv-motor-studio.webp",
    description: "KV900 FPV brushless motor with a 79 g net weight and published maximum thrust up to 2.7 kg.",
  },
  {
    slug: "tyi-b3112-fpv-motor",
    model: "B3112",
    name: "TYI B3112 FPV Motor",
    family: "fpv",
    familyLabel: "FPV motor",
    kv: "KV900",
    thrust: "Up to 3 kg",
    weight: "84 g",
    dimensions: "37.2 × 45.3 mm",
    packageWeight: "100 g",
    packageSize: "63 × 62 × 46 mm",
    image: "tyi-b3112-fpv-motor-studio.webp",
    description: "KV900 FPV brushless motor with an 84 g net weight and published maximum thrust up to 3 kg.",
  },
  {
    slug: "tyi-b3115-fpv-motor",
    model: "B3115",
    name: "TYI B3115 FPV Motor",
    family: "fpv",
    familyLabel: "FPV motor",
    kv: "KV900",
    thrust: "Up to 3.6 kg",
    weight: "Confirm at quotation",
    dimensions: "Confirm at quotation",
    packageWeight: "126.3 g",
    packageSize: "63 × 63 × 49 mm",
    image: "tyi-b3115-fpv-motor-studio.webp",
    description: "KV900 B3115 FPV brushless motor with published maximum thrust up to 3.6 kg. Final physical specifications are confirmed with the selected configuration.",
  },
  {
    slug: "tyi-cf5015-fpv-motor",
    model: "CF5015",
    name: "TYI CF5015 FPV Motor",
    family: "fpv",
    familyLabel: "FPV motor",
    kv: "KV410 confirmed",
    thrust: "Up to 7.3 kg",
    weight: "276 g",
    dimensions: "62 × 58 mm",
    packageWeight: "315.4–329.1 g",
    packageSize: "Approx. 115 × 89 × 64 mm",
    image: "tyi-cf5015-fpv-motor-studio.webp",
    description: "High-thrust CF5015 FPV brushless motor. KV410 is the confirmed catalog winding; additional windings are available subject to quotation confirmation.",
  },
];

const arrow = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const whatsappIcon = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4A8.4 8.4 0 1 1 20.5 11.7Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.7.9c-.2.2-.1.4 0 .6.8 1.4 1.9 2.4 3.4 3 .3.1.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.5-.9 2.1-.6.6-1.4.8-2.3.7-1.4-.2-3.2-.8-5.1-2.5-2.2-2-3.4-4.4-3.5-5.9 0-.7.2-1.1.5-1.5Z" fill="currentColor"/></svg>`;

function pageHead({ title, description, pathName, image, schema }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${description}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="theme-color" content="#07352b" />
    <link rel="canonical" href="${siteUrl}${pathName}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <meta property="og:site_name" content="TYI" />
    <meta property="og:type" content="product" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${siteUrl}${pathName}" />
    <meta property="og:image" content="${siteUrl}${image}" />
    <meta property="og:image:alt" content="${title}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${siteUrl}${image}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=Playfair+Display:wght@500;600&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/index-D_4mflDQ.css" />
    <link rel="stylesheet" href="/assets/motors.css" />
    <script type="module" src="/assets/motors.js"></script>
    <script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>
    <title>${title}</title>
  </head>`;
}

function header() {
  return `<header class="site-header motor-header">
      <a class="wordmark" href="/" aria-label="TYI home">TYI</a>
      <nav data-site-nav aria-label="Primary navigation">
        <a href="/#products">Agricultural Drones</a>
        <a href="/delivery-drones/">Delivery Drones</a>
        <a href="/products/7-inch-fpv-drone/">FPV Drones</a>
        <a href="/motors/" aria-current="page">Motors</a>
      </nav>
      <a class="header-cta" href="#contact">Get a Quote</a>
      <button class="menu-button" type="button" data-menu-button aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span>
      </button>
    </header>`;
}

function footer() {
  return `<footer class="footer motor-footer">
      <div class="footer-top section-shell">
        <div>
          <a class="wordmark wordmark--footer" href="/">TYI</a>
          <p class="motor-footer-note">Agricultural, delivery and FPV drone platforms with matching propulsion components for professional operations.</p>
        </div>
        <nav aria-label="Footer products">
          <b>Products</b>
          <a href="/#products">Agricultural Drones</a>
          <a href="/delivery-drones/">Delivery Drones</a>
          <a href="/products/7-inch-fpv-drone/">FPV Drones</a>
          <a href="/motors/">Brushless Motors</a>
        </nav>
        <nav aria-label="Footer company">
          <b>Company</b>
          <a href="/#manufacturer">Manufacturer</a>
          <a href="/#field-proof">Field Proof</a>
          <a href="#contact">Contact</a>
          <a href="/privacy-policy/">Privacy Policy</a>
        </nav>
        <div class="footer-markets">
          <b>Contact</b>
          <a href="mailto:${email}">${email}</a>
          <a href="${whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div class="footer-bottom section-shell">
        <span>© 2026 TYI. All rights reserved.</span>
        <a href="mailto:${email}">${email}</a>
      </div>
    </footer>
    <a class="motor-whatsapp" href="${whatsapp}" target="_blank" rel="noreferrer" aria-label="Chat with TYI on WhatsApp">${whatsappIcon}</a>`;
}

function contact(productName = "TYI Brushless Motors") {
  const subject = encodeURIComponent(`Quote request: ${productName}`);
  const message = encodeURIComponent(`Hello TYI, I would like a quote for ${productName}.`);
  return `<section class="motor-contact section-shell" id="contact">
      <div class="motor-contact__copy">
        <p>Direct manufacturer inquiry</p>
        <h2>Match the Motor to Your Build.</h2>
        <span>Tell us the aircraft, battery voltage, propeller, target thrust and quantity. Our team will confirm the winding, motor direction, ESC pairing, lead time and final quotation.</span>
        <div class="motor-contact__links">
          <a href="mailto:${email}?subject=${subject}">Email ${email}</a>
          <a href="${whatsapp}?text=${message}" target="_blank" rel="noreferrer">Discuss this motor on WhatsApp</a>
        </div>
      </div>
      <div class="motor-form-shell">
        <iframe title="Request a TYI motor quotation" src="${formUrl}" loading="lazy"></iframe>
      </div>
    </section>`;
}

function card(product, index) {
  return `<article class="motor-card" data-motor-family="${product.family}">
      <a class="motor-card__media" href="/products/${product.slug}/" aria-label="View ${product.name}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <img src="/assets/motors/${product.image}" alt="${product.name}" decoding="async" />
      </a>
      <div class="motor-card__copy">
        <p>${product.familyLabel}</p>
        <h3><a href="/products/${product.slug}/">${product.model}</a></h3>
        <dl class="motor-card__facts">
          <div><dt>KV options</dt><dd>${product.kv}</dd></div>
          <div><dt>Max thrust</dt><dd>${product.thrust}</dd></div>
          <div><dt>Net weight</dt><dd>${product.weight}</dd></div>
        </dl>
        <a class="product-cta product-cta--details" href="/products/${product.slug}/">View Details ${arrow}</a>
      </div>
    </article>`;
}

function categoryPage() {
  const title = "Brushless Drone Motors | FPV & Multirotor Motors | TYI";
  const description = "Explore 12 TYI brushless motors for FPV and multirotor drone platforms, with multiple KV windings, OEM/ODM support and direct manufacturer quotation.";
  const image = "/assets/motors/tyi-cf5015-fpv-motor-studio.webp";
  const pathName = "/motors/";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "TYI Brushless Motors",
      description,
      url: `${siteUrl}${pathName}`,
      primaryImageOfPage: `${siteUrl}${image}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${siteUrl}/products/${product.slug}/`,
      })),
    },
  ];

  return `${pageHead({ title, description, pathName, image, schema })}
  <body>
    <div class="site motors-site">
      ${header()}
      <main>
        <section class="motor-hero">
          <div class="motor-hero__copy">
            <span class="motor-eyebrow">TYI propulsion components</span>
            <h1>Brushless Motors</h1>
            <p>FPV and multirotor motor options from compact 28-series units to the high-thrust CF5015. Select a published configuration, then confirm the propeller, ESC and voltage around your aircraft.</p>
            <div class="motor-actions">
              <a class="button button--orange" href="#catalog">Explore 12 Models ${arrow}</a>
              <a class="text-link" href="#contact">Request a Quote</a>
            </div>
          </div>
          <figure class="motor-hero__media">
            <img src="${image}" alt="TYI CF5015 FPV brushless motor" fetchpriority="high" decoding="async" />
            <figcaption>FPV and multirotor propulsion</figcaption>
          </figure>
        </section>
        <dl class="motor-stats" aria-label="Motor range summary">
          <div><dt>Published models</dt><dd>12</dd></div>
          <div><dt>Product families</dt><dd>2</dd></div>
          <div><dt>Published thrust</dt><dd>1.6–7.3 kg</dd></div>
          <div><dt>Supply options</dt><dd>OEM / ODM</dd></div>
        </dl>
        <section class="motor-catalog section-shell" id="catalog">
          <header class="motor-section-heading">
            <div>
              <p>Motor range</p>
              <h2>Choose by Platform and Thrust.</h2>
            </div>
            <span>Published figures are a starting point for selection. Final thrust depends on winding, voltage, propeller, ESC and test conditions.</span>
          </header>
          <div class="motor-filter" role="group" aria-label="Filter motor family">
            <button class="is-active" type="button" data-motor-filter="all" aria-pressed="true">All 12</button>
            <button type="button" data-motor-filter="multirotor" aria-pressed="false">Multirotor</button>
            <button type="button" data-motor-filter="fpv" aria-pressed="false">FPV</button>
          </div>
          <div class="motor-grid">
            ${products.map(card).join("\n")}
          </div>
        </section>
        <section class="motor-confidence">
          <div class="motor-confidence__heading">
            <p>Configuration support</p>
            <h2>Specify the Mission. Confirm the Powertrain.</h2>
          </div>
          <div class="motor-confidence__list">
            <article><b>01</b><h3>KV selection</h3><p>Choose the winding around voltage, propeller size and target response.</p></article>
            <article><b>02</b><h3>Thrust matching</h3><p>Confirm required thrust with the intended propeller and operating voltage.</p></article>
            <article><b>03</b><h3>ESC pairing</h3><p>Match current capacity and protocol to the final motor configuration.</p></article>
            <article><b>04</b><h3>OEM / ODM</h3><p>Discuss labels, winding options, packaging and batch requirements directly.</p></article>
          </div>
        </section>
        ${contact()}
      </main>
      ${footer()}
    </div>
    <script>
      window.okkiConfigs = window.okkiConfigs || [];
      function okkiAdd() { window.okkiConfigs.push(arguments); }
      okkiAdd("analytics", { siteId: "472820-33168", gId: "" });
    </script>
    <script async src="//tfile.xiaoman.cn/okki/analyze.js?id=472820-33168-"></script>
  </body>
</html>`;
}

function property(name, value) {
  return { "@type": "PropertyValue", name, value };
}

function productPage(product) {
  const title = `${product.name} | ${product.kv} | TYI`;
  const description = product.description;
  const pathName = `/products/${product.slug}/`;
  const image = `/assets/motors/${product.image}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      model: product.model,
      brand: { "@type": "Brand", name: "TYI" },
      category: product.familyLabel,
      image: `${siteUrl}${image}`,
      description,
      additionalProperty: [
        property("KV options", product.kv),
        property("Published maximum thrust", product.thrust),
        property("Net weight", product.weight),
        property("Motor dimensions", product.dimensions),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Brushless Motors", item: `${siteUrl}/motors/` },
        { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}${pathName}` },
      ],
    },
  ];
  const related = products.filter((item) => item.family === product.family && item.slug !== product.slug).slice(0, 3);

  return `${pageHead({ title, description, pathName, image, schema })}
  <body>
    <div class="site motors-site">
      ${header()}
      <main>
        <section class="motor-product-hero">
          <div class="motor-product-hero__copy">
            <a class="motor-breadcrumb" href="/motors/">Brushless Motors <span>/</span> ${product.familyLabel}</a>
            <span class="motor-eyebrow">TYI ${product.familyLabel}</span>
            <h1>${product.model}</h1>
            <p>${product.description}</p>
            <div class="motor-actions">
              <a class="button button--orange" href="#contact">Request a Quote ${arrow}</a>
              <a class="text-link" href="/motors/">Compare All Motors</a>
            </div>
          </div>
          <figure class="motor-product-hero__media">
            <img src="${image}" alt="${product.name}" fetchpriority="high" decoding="async" />
            <figcaption>${product.familyLabel} · ${product.kv}</figcaption>
          </figure>
        </section>
        <dl class="motor-product-stats" aria-label="${product.name} key data">
          <div><dt>KV options</dt><dd>${product.kv}</dd></div>
          <div><dt>Max thrust</dt><dd>${product.thrust}</dd></div>
          <div><dt>Net weight</dt><dd>${product.weight}</dd></div>
          <div><dt>Motor size</dt><dd>${product.dimensions}</dd></div>
        </dl>
        <section class="motor-overview section-shell">
          <header>
            <p>Product overview</p>
            <h2>Configure Around the Aircraft.</h2>
          </header>
          <p>${product.name} is listed as a ${product.familyLabel.toLowerCase()} with ${product.kv} winding availability and published maximum thrust of ${product.thrust.replace("Up to ", "up to ")}. Use these figures as the starting point for configuration. TYI will confirm voltage, propeller, ESC, motor direction and final test data against your aircraft and order quantity.</p>
        </section>
        <section class="motor-specs">
          <div class="motor-specs__inner section-shell">
            <div class="motor-specs__copy">
              <p>Published product data</p>
              <h2>${product.model} Specifications</h2>
              <dl class="motor-spec-table">
                <div><dt>Product family</dt><dd>${product.familyLabel}</dd></div>
                <div><dt>KV options</dt><dd>${product.kv}</dd></div>
                <div><dt>Published maximum thrust</dt><dd>${product.thrust}</dd></div>
                <div><dt>Single motor net weight</dt><dd>${product.weight}</dd></div>
                <div><dt>Motor dimensions</dt><dd>${product.dimensions}</dd></div>
                <div><dt>Packed weight</dt><dd>${product.packageWeight}</dd></div>
                <div><dt>Package dimensions</dt><dd>${product.packageSize}</dd></div>
                <div><dt>Supply</dt><dd>OEM / ODM and batch orders</dd></div>
              </dl>
            </div>
            <aside class="motor-config-note">
              <span>Before ordering</span>
              <h3>Confirm the complete propulsion setup.</h3>
              <p>Final performance varies with winding, voltage, propeller, ESC, temperature and test method. Share your target thrust and aircraft details for a matched recommendation.</p>
              <a class="text-link" href="#contact">Discuss Your Build ${arrow}</a>
            </aside>
          </div>
        </section>
        <section class="motor-related section-shell">
          <header>
            <p>Related motors</p>
            <h2>Compare Nearby Options.</h2>
          </header>
          <div class="motor-grid">${related.map((item) => card(item, products.indexOf(item))).join("\n")}</div>
        </section>
        ${contact(product.name)}
      </main>
      ${footer()}
    </div>
    <script>
      window.okkiConfigs = window.okkiConfigs || [];
      function okkiAdd() { window.okkiConfigs.push(arguments); }
      okkiAdd("analytics", { siteId: "472820-33168", gId: "" });
    </script>
    <script async src="//tfile.xiaoman.cn/okki/analyze.js?id=472820-33168-"></script>
  </body>
</html>`;
}

await fs.mkdir(path.join(root, "motors"), { recursive: true });
await fs.writeFile(path.join(root, "motors", "index.html"), categoryPage(), "utf8");

for (const product of products) {
  const outputDir = path.join(root, "products", product.slug);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), productPage(product), "utf8");
}

console.log(`Generated 1 motor category page and ${products.length} product pages.`);
