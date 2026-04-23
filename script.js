
// ── PHONE FIELD VALIDATION ──
document.addEventListener('input', e => {
  const tel = e.target.closest('input[type="tel"]');
  if (!tel) return;
  const wrap = tel.closest('.phone-field-wrap');
  if (!wrap) return;
  if (tel.value.trim().length > 4) {
    wrap.classList.add('is-valid');
    wrap.classList.remove('has-error');
  } else if (tel.value.trim().length > 0) {
    wrap.classList.add('has-error');
    wrap.classList.remove('is-valid');
  } else {
    wrap.classList.remove('has-error','is-valid');
  }
});


// ── PREMIUM SUCCESS SCREEN ──
function showSuccessScreen(form, email) {
  const wrap = form.closest('.contact-form-wrap, .consult-form, [id^="sf-"]')
             || form.parentElement;
  form.style.display = 'none';
  const div = document.createElement('div');
  div.className = 'success-screen';
  div.innerHTML = `
    <div class="ss-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" width="30" height="30">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
    </div>
    <h3 class="ss-title">Message Sent Successfully!</h3>
    <p class="ss-msg">Thank you for reaching out. I'll review your project details and get back to you within 24 hours.</p>
    <a href="https://wa.me/17165734618" target="_blank" class="ss-wa-btn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Chat on WhatsApp
    </a>
  `;
  wrap.appendChild(div);
  div.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ============================================================
   QWEB MARKETING v4 — SCRIPT.JS
   Email: Web3Forms → sends direct to qweb.marketings@gmail.com
   SETUP: Replace YOUR_WEB3FORMS_KEY below
   Get key FREE at: https://web3forms.com
   Enter: qweb.marketings@gmail.com → get key → paste here
   ============================================================ */

const WEB3_KEY = '23381280-d7b8-4ad5-b1c4-815964a063cd'; // ← ONLY THING YOU NEED TO CHANGE

// ── SERVICE DATA ──
const SD = {
  'service-wordpress': {
    name:'WordPress Website Design', tag:'Web Development',
    h:'WordPress Sites That <span class="grad">Rank, Convert & Grow</span>',
    sub:'Your website is your #1 sales asset. We build custom WordPress sites engineered from the ground up for speed, SEO dominance, and conversion — so every visitor has a reason to become a client.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>',
    res:{
      big_val:'+312%', big_lbl:'Organic Traffic Growth', prog:85,
      m2_val:'3×', m2_lbl:'More Leads/Mo',
      m3_val:'#1', m3_lbl:'Google Ranking',
      client:'Morrison Legal Group',
      tags:['Custom Theme','On-Page SEO','Core Web Vitals'],
      fb1:'✓ 2–4 Week Delivery', fb2:'⚡ 90+ Page Speed Score'
    },
    bens:[
      {i:'🚀',t:'Speed That Wins Clients',d:'Our WordPress sites load under 2 seconds. Slow sites lose 53% of visitors — yours won\'t.'},
      {i:'📈',t:'SEO That Drives Revenue',d:'Technical SEO, clean code, and structured data baked into every build from day one.'},
      {i:'🎨',t:'Design That Builds Trust',d:'Every element crafted to reflect your brand and convert curious visitors into paying clients.'},
      {i:'🔐',t:'Security You Can Rely On',d:'Hardened setup, SSL, firewall rules, and regular updates included as standard.'}
    ],
    proc:[
      {t:'Discovery & Goal Setting',d:'We learn your business goals, target audience, and landscape before writing a single line of code.'},
      {t:'Design & Wireframes',d:'Full Figma mockups for every key page, presented for your approval before development begins.'},
      {t:'Development & Integration',d:'Custom theme coding, plugin integration, speed optimization, and full SEO setup.'},
      {t:'Testing, Launch & Handover',d:'Multi-device QA, speed audit, and training walkthrough so you\'re fully in control on day one.'}
    ],
    faqs:[
      {q:'Do you use page builders like Elementor?',a:'We offer custom-coded themes and Elementor/Gutenberg builds depending on your needs. Custom code always wins for performance.'},
      {q:'Will I be able to update content myself?',a:'Yes — we configure the CMS for ease of use and include a recorded training session so your team manages content confidently.'}
    ],
    portfolio:[
      {t:'Morrison Legal Group',res:'+312% Traffic',desc:'Full site redesign for a Buffalo-based law firm. Tripled contact form submissions in 60 days.',bg:'linear-gradient(135deg,#1B5BFF22,#0a0a2e)'},
      {t:'NovaBrand Agency',res:'+200% Inquiries',desc:'Portfolio-forward WordPress site with CRM and booking integration.',bg:'linear-gradient(135deg,#7c3aed22,#0a002a)'},
      {t:'GreenLeaf Wellness',res:'180 Subscribers M1',desc:'WooCommerce wellness site with subscription features.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'Harborlite Realty',res:'4× Lead Volume',desc:'IDX-integrated real estate site with automated lead routing.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'BluePeak Consulting',res:'+89% Session Time',desc:'B2B consulting firm with resource hub and HubSpot integration.',bg:'linear-gradient(135deg,#1B5BFF33,#00001a)'},
      {t:'Meadow + Oak Bakery',res:'3× Online Orders',desc:'Local bakery with custom cake builder and WooCommerce.',bg:'linear-gradient(135deg,#f59e0b22,#1a0a00)'}
    ]
  },
  'service-wix': {
    name:'Wix Development', tag:'Web Development',
    h:'Wix Sites That Go <span class="grad">Way Beyond Templates</span>',
    sub:'Most Wix sites look like everyone else\'s. Ours don\'t. We build fully custom Wix experiences with Velo JavaScript logic and design that\'s entirely unique to your brand.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>',
    res:{
      big_val:'+150%', big_lbl:'Online Bookings Growth', prog:75,
      m2_val:'$120K', m2_lbl:'Revenue/Year',
      m3_val:'60%', m3_lbl:'More Bookings',
      client:'Bella Salon & Spa',
      tags:['Wix Velo','Bookings','eCommerce'],
      fb1:'✓ Custom Design (No Templates)', fb2:'📅 Booking System Included'
    },
    bens:[
      {i:'🎯',t:'Truly Custom, Not Cookie-Cutter',d:'We use Wix as a blank canvas. Velo JavaScript unlocks functionality that rivals full custom builds.'},
      {i:'📅',t:'Bookings Made Easy',d:'Service businesses love Wix Bookings. We configure appointments, classes, and payments seamlessly.'},
      {i:'📦',t:'Sell Anything',d:'Physical products, digital downloads, or services — we set up your Wix store to convert.'},
      {i:'🔗',t:'Connected to Your Stack',d:'CRM, email platforms, analytics — all integrated through the Wix App Market.'}
    ],
    proc:[
      {t:'Scope & Feature Planning',d:'We map out every page, feature, and integration before building begins.'},
      {t:'Custom Design',d:'Unique Figma designs created for your brand — zero templates used.'},
      {t:'Wix Build + Velo Code',d:'We build with care, adding custom JavaScript where standard Wix falls short.'},
      {t:'Launch & Support',d:'Full QA, go-live assistance, and 14-day post-launch support included.'}
    ],
    faqs:[
      {q:'Is Wix professional enough for my business?',a:'When built correctly by experts, Wix sites perform excellently for SEO, speed, and conversions. The problem is most Wix sites are DIY template jobs.'},
      {q:'Can you build a booking system?',a:'Yes. Wix Bookings is excellent. We handle full setup including payment processing and calendar sync.'}
    ],
    portfolio:[
      {t:'Bella Salon & Spa',res:'+60% Bookings',desc:'Custom Wix site with Bookings, service catalog, and gift cards.',bg:'linear-gradient(135deg,#f472b622,#1a000a)'},
      {t:'Summit Fitness Studio',res:'3× Class Sign-ups',desc:'Fitness studio with class schedules and membership tiers.',bg:'linear-gradient(135deg,#1B5BFF22,#0a0a2e)'},
      {t:'Oak & Stone Events',res:'$120K Revenue/Yr',desc:'Event venue with inquiry forms, gallery, and Wix packages.',bg:'linear-gradient(135deg,#d9770622,#1a0a00)'},
      {t:'ClearPath Consulting',res:'+200% More Leads',desc:'B2B consulting firm with gated resources and lead nurture.',bg:'linear-gradient(135deg,#7c3aed22,#0a002a)'},
      {t:'The Dog House Co.',res:'150 Monthly Bookings',desc:'Pet grooming salon with online booking and pet profiles.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'Artisan Coffee',res:'Online Sales 4×',desc:'Specialty coffee eCommerce with subscription boxes.',bg:'linear-gradient(135deg,#92400e22,#1a0a00)'}
    ]
  },
  'service-webflow': {
    name:'Webflow Development', tag:'Web Development',
    h:'Webflow Sites That <span class="grad">Win Awards & Win Clients</span>',
    sub:'Webflow is the most powerful website platform — in the right hands. We build Webflow experiences that are visually extraordinary, technically pristine, and effortless for your team to manage.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',
    res:{
      big_val:'+180%', big_lbl:'Project Inquiry Growth', prog:80,
      m2_val:'Awwwards', m2_lbl:'Honorable Mention',
      m3_val:'160%', m3_lbl:'More Demo Requests',
      client:'Studio LP Creative',
      tags:['Webflow CMS','GSAP Animations','SEO'],
      fb1:'🏆 Award-Level Design', fb2:'⚡ Lightning CDN Performance'
    },
    bens:[
      {i:'🏆',t:'Design That Gets Noticed',d:'We\'ve built Webflow sites featured on Awwwards and CSS Design Awards. Your site will stand out.'},
      {i:'📝',t:'CMS Your Team Can Use',d:'Webflow\'s CMS is clean and intuitive. Your team updates content without touching code.'},
      {i:'🎬',t:'Motion That Sells',d:'Scroll-triggered animations and page transitions that make your brand feel truly premium.'},
      {i:'🌐',t:'Global Performance',d:'Webflow\'s built-in CDN delivers your site at lightning speed to every visitor worldwide.'}
    ],
    proc:[
      {t:'Architecture & CMS Planning',d:'We design your CMS structure and content model before any visual design begins.'},
      {t:'Figma Design',d:'High-fidelity mockups reviewed and approved by you at every stage.'},
      {t:'Webflow Development',d:'Clean, semantic build with all interactions, animations, and CMS configured.'},
      {t:'QA, Launch & Training',d:'Comprehensive device testing, SEO audit, and CMS training walkthrough.'}
    ],
    faqs:[
      {q:'Do I need a Webflow subscription?',a:'Yes — Webflow requires a paid hosting plan. We\'ll recommend the right tier and can manage the account on your behalf.'},
      {q:'How does Webflow compare to WordPress?',a:'Webflow is better for design-forward sites with complex interactions. We\'ll advise which is right for you.'}
    ],
    portfolio:[
      {t:'Studio LP Creative',res:'Awwwards HM',desc:'Award-winning Webflow portfolio with scroll-triggered animations.',bg:'linear-gradient(135deg,#4353FF33,#00001a)'},
      {t:'TechCorp SaaS',res:'+160% Demos',desc:'Enterprise SaaS site with CMS blog and HubSpot integration.',bg:'linear-gradient(135deg,#1B5BFF33,#000a1a)'},
      {t:'Luxe Interiors',res:'3× Lead Quality',desc:'Editorial-style luxury interior design site with parallax gallery.',bg:'linear-gradient(135deg,#D4AF3744,#1a1000)'},
      {t:'Meridian Capital',res:'+74% Conversions',desc:'Fintech firm with interactive ROI calculator.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'WaveForm Audio',res:'18K Mo. Visitors',desc:'Music production company with audio player and member portal.',bg:'linear-gradient(135deg,#7c3aed22,#0a002a)'},
      {t:'Solstice Retreat',res:'$280K Online',desc:'Wellness retreat with package browsing and inquiry flows.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'}
    ]
  },
  'service-shopify': {
    name:'Shopify Development', tag:'eCommerce',
    h:'Shopify Stores That <span class="grad">Turn Browsers Into Buyers</span>',
    sub:'Most eCommerce stores leave money on the table. We engineer Shopify stores with conversion-first architecture — from product page to checkout — so every dollar of traffic works harder for you.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>',
    res:{
      big_val:'4.2%', big_lbl:'Conversion Rate Achieved', prog:90,
      m2_val:'2×', m2_lbl:'Revenue in 90 Days',
      m3_val:'8×', m3_lbl:'Black Friday Sales',
      client:'ThreadLine Co.',
      tags:['Custom Theme','Subscriptions','Klaviyo'],
      fb1:'💰 CVR-Optimized Architecture', fb2:'🔁 Subscription Revenue Setup'
    },
    bens:[
      {i:'💰',t:'CVR-Optimized by Design',d:'We optimize every page — PDP, collection, cart, checkout — to maximize your conversion rate.'},
      {i:'🔁',t:'Build Recurring Revenue',d:'Subscription models and loyalty programs that keep customers coming back month after month.'},
      {i:'📊',t:'Data at Every Step',d:'Full analytics stack: GA4, Meta Pixel, custom events, and attribution reporting.'},
      {i:'📦',t:'Complex Inventory, Handled',d:'Multi-variant products, bundles, pre-orders, and B2B wholesale — built to scale.'}
    ],
    proc:[
      {t:'eCommerce Strategy Session',d:'We analyze your catalog, customer journey, and competitors to define optimal store architecture.'},
      {t:'UX Design & Wireframes',d:'Conversion-focused designs for every key page — designed to sell, not just display.'},
      {t:'Development & App Integration',d:'Custom theme coding, app setup, and full payment + shipping configuration.'},
      {t:'Launch & 30-Day Optimization',d:'Go-live support with 30-day post-launch monitoring and CVR optimization sprint.'}
    ],
    faqs:[
      {q:'Do you build fully custom Shopify themes?',a:'Yes — always custom, never stock themes. This ensures maximum performance and unique branding.'},
      {q:'Can you migrate my existing store to Shopify?',a:'Yes. We migrate products, customers, and order history from WooCommerce, BigCommerce — fully intact.'}
    ],
    portfolio:[
      {t:'ThreadLine Co.',res:'CVR 1.4%→4.2%',desc:'Premium apparel. Custom theme, upsell flows, and cart recovery.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'PeakFlow Nutrition',res:'Revenue Doubled',desc:'Supplements with subscription builder, bundles, and loyalty.',bg:'linear-gradient(135deg,#f59e0b22,#1a0a00)'},
      {t:'UrbanEdge Furniture',res:'AOV: $1,800',desc:'High-ticket furniture with room visualizer and financing.',bg:'linear-gradient(135deg,#8B5CF622,#0a001a)'},
      {t:'GlowSkin Boutique',res:'+$180K/Year',desc:'Skincare DTC with quiz-based product finder and automation.',bg:'linear-gradient(135deg,#f472b622,#1a000a)'},
      {t:'Rugged Supply Co.',res:'8× BF Sales',desc:'Outdoor gear with collection filtering and product bundles.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'Sonder Coffee',res:'400 Subscribers/Mo',desc:'Specialty coffee subscription eCommerce with Klaviyo flows.',bg:'linear-gradient(135deg,#92400e22,#1a0a00)'}
    ]
  },
  'service-framer': {
    name:'Framer Development', tag:'Web Development',
    h:'Framer Sites That <span class="grad">Stop Scrolls & Win Business</span>',
    sub:'Framer is where design and performance meet. We build Framer sites that showcase your brand at its absolute peak — with motion design that creates emotion and architecture that drives action.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 5h14v6H5z"/><path d="M5 11h7v7l-7-7z"/></svg>',
    res:{
      big_val:'+180%', big_lbl:'Conversion Increase', prog:78,
      m2_val:'$2.4M', m2_lbl:'Seed Funding Raised',
      m3_val:'95+', m3_lbl:'Page Speed Score',
      client:'Vanta Labs',
      tags:['Framer Motion','CMS','Interactions'],
      fb1:'✨ Motion-First Premium Design', fb2:'⚡ 95+ Page Speed Score'
    },
    bens:[
      {i:'✨',t:'Motion That Creates Emotion',d:'Framer\'s animation system lets us build interactions that make visitors feel your brand is truly premium.'},
      {i:'⚡',t:'Fastest Sites on the Web',d:'Framer\'s infrastructure delivers Page Speed scores that beat most hand-coded sites.'},
      {i:'🎭',t:'Component-Based for Scale',d:'Every element is a reusable component. Future updates are fast, consistent, and safe.'},
      {i:'🔗',t:'CMS Without Compromise',d:'Blog, case studies, and team pages managed visually without touching code.'}
    ],
    proc:[
      {t:'Motion Direction & Brand Alignment',d:'We establish your visual language, animation principles, and the story your site should tell.'},
      {t:'Interactive Prototype',d:'You experience the full site with animations before the build starts. No surprises.'},
      {t:'Production Build',d:'Every interaction, component, and CMS collection built to pixel-perfect precision.'},
      {t:'Launch & Analytics Setup',d:'Custom domain, SEO config, and analytics installed on go-live day.'}
    ],
    faqs:[
      {q:'Is Framer good for SEO?',a:'Yes — Framer generates clean, semantic HTML with excellent built-in SEO tools. We configure all meta tags, structured data, and sitemaps.'},
      {q:'Can my team update content?',a:'Absolutely. Framer\'s visual CMS editor is intuitive. Most clients update content confidently within 30 minutes.'}
    ],
    portfolio:[
      {t:'Vanta Labs',res:'+180% Signups',desc:'SaaS startup with 3D scroll experience and interactive product demo.',bg:'linear-gradient(135deg,#1B5BFF33,#00001a)'},
      {t:'Studio Kinetic',res:'Awwwards Nomination',desc:'Motion design studio with physics-based hover interactions.',bg:'linear-gradient(135deg,#7c3aed22,#0a002a)'},
      {t:'Horizon Capital',res:'+$4M AUM from Site',desc:'Investment firm with animated market data and investor portal.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'Forma Architecture',res:'3× RFQ Submissions',desc:'Architecture firm portfolio with parallax project images.',bg:'linear-gradient(135deg,#D4AF3744,#1a1000)'},
      {t:'Pulse Analytics',res:'CVR: 2.8%',desc:'B2B analytics platform with animated charts and pricing.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'Drift Creative',res:'$220K Pipeline/Qtr',desc:'Creative agency with full-screen project reveals.',bg:'linear-gradient(135deg,#f59e0b22,#1a0a00)'}
    ]
  },
  'service-smm': {
    name:'Social Media Marketing', tag:'Marketing',
    h:'Social Media That <span class="grad">Builds Audiences & Drives Revenue</span>',
    sub:'Posting on social without a strategy is just noise. We build systematic social media programs that grow your following with the right people, create content that performs, and convert attention into revenue.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    res:{
      big_val:'1400%', big_lbl:'Follower Growth in 6 Weeks', prog:88,
      m2_val:'7.4%', m2_lbl:'Avg Engagement Rate',
      m3_val:'$180K', m3_lbl:'Revenue Attributed',
      client:'GlowSkin Boutique',
      tags:['Instagram','TikTok','Paid Social'],
      fb1:'📸 Premium Content Creation', fb2:'📈 Real Growth (No Bots Ever)'
    },
    bens:[
      {i:'📸',t:'Content That Actually Performs',d:'Studio-quality graphics and reels designed to generate engagement, not just impressions.'},
      {i:'📈',t:'Real Audience Growth',d:'We grow your following with in-target, engaged people who become clients — not bots.'},
      {i:'🎯',t:'Social That Generates Leads',d:'Every piece of content is mapped to your funnel. We build audiences with intent to convert.'},
      {i:'📊',t:'Numbers That Matter',d:'Monthly reports showing reach, engagement, leads, and revenue — not just likes.'}
    ],
    proc:[
      {t:'Audit & Competitive Analysis',d:'Full review of your existing social presence, audience data, and competitor activity.'},
      {t:'Content Strategy & Calendar',d:'Monthly content calendar built around your goals and audience insights.'},
      {t:'Content Creation & Publishing',d:'Designing, writing, and scheduling every piece of content across all channels.'},
      {t:'Community Management & Reporting',d:'Daily engagement, DM responses, and monthly performance review with action items.'}
    ],
    faqs:[
      {q:'How many posts per week?',a:'Packages range from 3 to 7 posts per week per platform. Quality and consistency beats volume every time.'},
      {q:'Do you manage paid ads too?',a:'Yes. Paid ad management (Meta, LinkedIn, TikTok) available as an add-on. Ad spend is always separate from management fees.'}
    ],
    portfolio:[
      {t:'GlowSkin Boutique',res:'800→12K Followers',desc:'Skincare brand. 1,400% growth in 6 weeks with 7.4% engagement.',bg:'linear-gradient(135deg,#f472b622,#1a000a)'},
      {t:'Luxe Interiors',res:'+$180K Revenue',desc:'Interior design firm. Pinterest strategy drove 42K monthly clicks.',bg:'linear-gradient(135deg,#D4AF3744,#1a1000)'},
      {t:'FitCore Supplements',res:'22% Sales from Social',desc:'Supplements brand. TikTok content drove 3.2M organic views.',bg:'linear-gradient(135deg,#1B5BFF22,#0a0a2e)'},
      {t:'Ridge & Root Outdoors',res:'8K→34K Instagram',desc:'Outdoor brand. Content series drove 325% growth in 4 months.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'Morrison Legal Group',res:'40 LinkedIn Leads/Mo',desc:'Law firm thought leadership generating 40 qualified leads/month.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'Sonder Coffee',res:'3.2M TikTok Views',desc:'Behind-the-scenes series went viral 3× in one quarter.',bg:'linear-gradient(135deg,#92400e22,#1a0a00)'}
    ]
  },
  'service-seo': {
    name:'SEO Services', tag:'Marketing',
    h:'SEO That Puts You on <span class="grad">Page 1 and Keeps You There</span>',
    sub:'Anyone can promise Google rankings. We deliver them — with a systematic combination of technical excellence, content strategy, and authority building that compounds in value over time.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
    res:{
      big_val:'+520%', big_lbl:'Organic Traffic Growth', prog:92,
      m2_val:'47', m2_lbl:'Page-1 Keywords',
      m3_val:'$220K', m3_lbl:'Revenue Attributed',
      client:'FitCore Supplements',
      tags:['Technical SEO','Content Strategy','Link Building'],
      fb1:'🏆 Results From Month 3', fb2:'📈 Traffic That Compounds Monthly'
    },
    bens:[
      {i:'🏆',t:'Page 1 Rankings That Last',d:'We\'ve ranked clients for hundreds of competitive keywords. White-hat, sustainable, real authority.'},
      {i:'🚀',t:'Traffic That Compounds',d:'Unlike paid ads, SEO compounds. Clients see 3–5× organic traffic growth within 12 months.'},
      {i:'💡',t:'Content That Converts',d:'We write for humans first. Every piece is designed to rank AND move readers toward conversion.'},
      {i:'🔧',t:'Technical SEO Done Right',d:'Core Web Vitals, crawlability, structured data — every technical factor handled with expertise.'}
    ],
    proc:[
      {t:'Technical SEO Audit',d:'Comprehensive audit of your site\'s health, indexability, content gaps, and backlink profile.'},
      {t:'Keyword & Content Strategy',d:'Keyword mapping, content cluster planning, and prioritized content calendar tied to revenue.'},
      {t:'On-Page Optimization',d:'Optimizing existing pages and building new targeted content across key topic clusters.'},
      {t:'Authority Building & Reporting',d:'White-hat link acquisition through outreach and digital PR. Monthly reporting with clear attribution.'}
    ],
    faqs:[
      {q:'How long does SEO take?',a:'Most clients see meaningful ranking movement in 3–4 months, with strong results by 6–12 months. SEO compounds — it gets more valuable every month.'},
      {q:'Do you guarantee rankings?',a:'We don\'t make specific ranking guarantees (no ethical agency should). We guarantee consistent expert effort, transparent reporting, and proven methodology.'}
    ],
    portfolio:[
      {t:'FitCore Supplements',res:'+520% Traffic',desc:'47 page-1 keywords. Organic traffic drove $220K in annual revenue.',bg:'linear-gradient(135deg,#10b98133,#001a0a)'},
      {t:'Morrison Legal Group',res:'#1 for 12 Keywords',desc:'Law firm now ranks #1 for "Buffalo injury lawyer" and 11 related terms.',bg:'linear-gradient(135deg,#1B5BFF22,#0a0a2e)'},
      {t:'Summit Fitness Studio',res:'8× Organic Leads',desc:'Local SEO tripled Google Business profile views in 90 days.',bg:'linear-gradient(135deg,#7c3aed22,#0a002a)'},
      {t:'BluePeak Consulting',res:'+566% Growth',desc:'B2B consulting grew from 900 to 6K monthly visitors in 8 months.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'GreenLeaf Wellness',res:'+180% Revenue',desc:'Ranked for 34 product-intent keywords, doubling DTC revenue.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'TechCorp SaaS',res:'62 Page-1 Rankings',desc:'SaaS platform generating 400+ trials/month from organic search.',bg:'linear-gradient(135deg,#4353FF33,#00001a)'}
    ]
  },
  'service-graphics': {
    name:'Graphics Design', tag:'Design',
    h:'Visual Design That Makes Your <span class="grad">Brand Impossible to Ignore</span>',
    sub:'Great design is silent persuasion. We create brand identities and visual systems that build instant trust, communicate your value clearly, and make your business look like the premium choice it is.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    res:{
      big_val:'42%', big_lbl:'Ad Click-Through Rate', prog:72,
      m2_val:'3×', m2_lbl:'Press Features',
      m3_val:'$2.4M', m3_lbl:'Seed Funding Raised',
      client:'ThreadLine Brand Identity',
      tags:['Brand Identity','Social Kit','Ad Creatives'],
      fb1:'🎨 3 Concepts Presented First', fb2:'🖨️ Web + Print Files Included'
    },
    bens:[
      {i:'🎨',t:'Consistency Builds Trust',d:'A professional, consistent brand identity signals quality and reliability before you say a word.'},
      {i:'📲',t:'Assets Built for Performance',d:'Every social creative designed for the platform — optimized for stop-the-scroll visibility.'},
      {i:'🖨️',t:'Print-Ready Every Time',d:'All files in correct formats, color modes (CMYK/RGB), and resolutions for digital and print.'},
      {i:'🔄',t:'Revisions Until You\'re Happy',d:'We don\'t stop until the design is right. No hidden fees, no revision limits — ever.'}
    ],
    proc:[
      {t:'Brand Discovery Workshop',d:'We dig into your values, target audience, competitors, and design preferences.'},
      {t:'3 Creative Directions',d:'Three distinct concept directions presented for your feedback and selection.'},
      {t:'Refinement & Polish',d:'Your chosen direction refined through as many revision rounds as needed.'},
      {t:'Full File Delivery',d:'All assets in every format — web (PNG, SVG, JPG), print (AI, EPS, PDF), and editable source.'}
    ],
    faqs:[
      {q:'What\'s included in a full brand identity?',a:'Logo (primary + variations), color palette, typography system, brand guidelines, social media kit, business card design, and letterhead.'},
      {q:'How long does branding take?',a:'A full brand identity typically takes 2–3 weeks from start to final delivery, including revision rounds.'}
    ],
    portfolio:[
      {t:'ThreadLine Identity',res:'Press Coverage ×3',desc:'Full identity for fashion startup. Logo, palette, packaging, guidelines.',bg:'linear-gradient(135deg,#f59e0b33,#1a0a00)'},
      {t:'GlowSkin Visual System',res:'42% Ad CTR',desc:'Social media template system generating above-average click-through.',bg:'linear-gradient(135deg,#f472b622,#1a000a)'},
      {t:'Vanta Labs Rebrand',res:'$2.4M Seed Funded',desc:'SaaS rebrand that helped secure seed funding with pitch deck.',bg:'linear-gradient(135deg,#1B5BFF33,#00001a)'},
      {t:'Ridge & Root Outdoors',res:'3× Brand Recognition',desc:'Outdoor brand identity with custom illustration system.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'Meridian Capital',res:'Enterprise Deals Closed',desc:'Financial firm rebrand with premium print materials.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'Forma Architecture',res:'Featured in Design Week',desc:'Architecture identity featured in two design publications.',bg:'linear-gradient(135deg,#D4AF3744,#1a1000)'}
    ]
  },
  'service-email': {
    name:'Email Marketing', tag:'Marketing',
    h:'Email Marketing That <span class="grad">Turns Your List Into a Revenue Machine</span>',
    sub:'Your email list is your most valuable marketing asset — if you know how to use it. We build automated email systems that work 24/7, nurturing leads and generating consistent revenue without you lifting a finger.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    res:{
      big_val:'$42K', big_lbl:'Revenue in First 30 Days', prog:86,
      m2_val:'38%', m2_lbl:'Average Open Rate',
      m3_val:'5.4×', m3_lbl:'Email Program ROI',
      client:'FitCore Supplements',
      tags:['Klaviyo','Automation Flows','Copywriting'],
      fb1:'🤖 Fully Automated 24/7 Flows', fb2:'💌 Inbox Delivery Guaranteed'
    },
    bens:[
      {i:'🤖',t:'Automation That Never Sleeps',d:'Welcome flows, cart recovery, win-back campaigns — generating revenue every hour, every day.'},
      {i:'✏️',t:'Copy That Actually Converts',d:'Emails that feel personal, not promotional. Open rates and revenue per email that beat averages.'},
      {i:'🧪',t:'Always Getting Better',d:'Continuous A/B testing of subject lines, content, and send times to improve month over month.'},
      {i:'💌',t:'Emails That Land in Inboxes',d:'Full deliverability setup — SPF, DKIM, DMARC — so your emails don\'t get lost in spam.'}
    ],
    proc:[
      {t:'Account Audit & Strategy',d:'Full review of your email setup, list health, segmentation gaps, and automation opportunities.'},
      {t:'Flow Architecture & Mapping',d:'We map the optimal email journey for each customer segment and lifecycle stage.'},
      {t:'Copy, Design & Build',d:'Every email written, designed, and built in your ESP with full testing before activation.'},
      {t:'Launch, Monitor & Optimize',d:'Program goes live and we monitor weekly, optimizing continuously for revenue impact.'}
    ],
    faqs:[
      {q:'Which email platform do you recommend?',a:'Klaviyo for eCommerce (best Shopify integration). ActiveCampaign for B2B service businesses. We\'re certified on both.'},
      {q:'Can you help grow my email list?',a:'Yes. We design pop-ups, lead magnets, and landing pages to grow your list alongside managing your email program.'}
    ],
    portfolio:[
      {t:'FitCore Supplements',res:'$42K in 30 Days',desc:'Welcome series + abandoned cart flows from a cold-start program.',bg:'linear-gradient(135deg,#1B5BFF22,#0a0a2e)'},
      {t:'ThreadLine Co.',res:'38% Open Rate',desc:'Post-purchase and loyalty emails averaging 38% open rate.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'Sonder Coffee',res:'$120/Subscriber/Yr',desc:'Subscription brand win-back recovering 22% of churned subscribers.',bg:'linear-gradient(135deg,#92400e22,#1a0a00)'},
      {t:'GlowSkin Boutique',res:'5.4× Email ROI',desc:'Full Klaviyo migration generating 5.4× program ROI.',bg:'linear-gradient(135deg,#f472b622,#1a000a)'},
      {t:'BluePeak Consulting',res:'60 Leads/Month',desc:'B2B nurture converting cold list subscribers to qualified sales calls.',bg:'linear-gradient(135deg,#0891b222,#000a1a)'},
      {t:'UrbanEdge Furniture',res:'$680 Revenue/Email',desc:'High-ticket furniture with personalized browse abandonment flows.',bg:'linear-gradient(135deg,#8B5CF622,#0a001a)'}
    ]
  },
  'service-video': {
    name:'Video Editing', tag:'Content',
    h:'Video Content That <span class="grad">Demands Attention & Drives Action</span>',
    sub:'Video is the highest-performing content format in every channel. We produce and edit videos that capture attention in the first 3 seconds, communicate your value, and give viewers a reason to act.',
    icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
    res:{
      big_val:'4.2M', big_lbl:'Organic Views Achieved', prog:94,
      m2_val:'+34%', m2_lbl:'ROAS Improvement',
      m3_val:'+90%', m3_lbl:'Demo Request Rate',
      client:'FitCore Brand Reel',
      tags:['Social Reels','Ad Creatives','Motion Graphics'],
      fb1:'🎬 3–5 Day Turnaround', fb2:'♾️ Unlimited Revisions Included'
    },
    bens:[
      {i:'🎬',t:'Quality That Reflects Your Brand',d:'Color grading, sound design, and motion graphics that make your content look genuinely premium.'},
      {i:'📱',t:'Optimized for Every Platform',d:'Every video in exact format, resolution, and aspect ratio for peak performance on each platform.'},
      {i:'⚡',t:'3–5 Day Turnaround',d:'Standard delivery in 3–5 business days. Rush options available for time-sensitive campaigns.'},
      {i:'♾️',t:'Revisions Until Perfect',d:'We revise until you\'re fully satisfied — no hidden revision fees, no limits, ever.'}
    ],
    proc:[
      {t:'Creative Brief & Asset Collection',d:'You share raw footage, brand assets, and your brief. We ask the right questions to get aligned.'},
      {t:'First Cut Delivery',d:'Rough cut delivered within 48 hours for directional feedback.'},
      {t:'Color, Sound & Graphics',d:'Full color grade, audio mastering, motion graphics, and visual effects applied.'},
      {t:'Final Delivery & File Package',d:'Final files in all requested formats and platform exports delivered via shared drive.'}
    ],
    faqs:[
      {q:'Do I need to provide footage?',a:'You can provide your own footage, or we source stock footage, animations, and b-roll. We\'ll specify exactly what\'s needed in the creative brief.'},
      {q:'What formats do you deliver?',a:'MP4 (H.264) as standard. ProRes or MOV for broadcast. 4K available on request. All platform-specific exports included.'}
    ],
    portfolio:[
      {t:'FitCore Brand Reel',res:'4.2M Views Organic',desc:'60-second brand video generated 4.2M TikTok and Reel views.',bg:'linear-gradient(135deg,#1B5BFF22,#0a0a2e)'},
      {t:'ThreadLine Product Ads',res:'+34% ROAS',desc:'Meta ad creative package — 3 formats per product, A/B tested.',bg:'linear-gradient(135deg,#22c55e22,#001a0a)'},
      {t:'GlowSkin Testimonials',res:'62% Watch-Through',desc:'Six-part testimonial series averaging 62% full watch-through rate.',bg:'linear-gradient(135deg,#f472b622,#1a000a)'},
      {t:'TechCorp Explainer',res:'+90% Demo Requests',desc:'Animated product explainer increasing demo request rate by 90%.',bg:'linear-gradient(135deg,#4353FF33,#00001a)'},
      {t:'Forma Architecture',res:'Behance Feature',desc:'Cinematic architecture video featured as Behance Project of the Week.',bg:'linear-gradient(135deg,#D4AF3744,#1a1000)'},
      {t:'Sonder Coffee Tour',res:'$48K Direct Revenue',desc:'Roastery tour video that drove $48K in direct eCommerce sales.',bg:'linear-gradient(135deg,#92400e22,#1a0a00)'}
    ]
  }
};

const svcIds = Object.keys(SD);

// ── BUILD PREMIUM SERVICE PAGE ──
function buildSvcPage(id, c) {
  const d = SD[id];
  if (!d) { c.innerHTML = '<div style="padding:200px 5%;text-align:center;color:var(--muted)">Service not found.</div>'; return; }
  const r = d.res;

  const portHtml = d.portfolio.map((p,i) => `
    <div class="spc${i>=3?' hidden-port':''}"
         data-title="${p.t}" data-desc="${p.desc}" data-res="${p.res}" data-tag="${d.name}" data-bg="${p.bg}">
      <div class="spc-img" style="background:${p.bg}">
        <span>${p.t}</span>
        <div class="spc-ov"><span class="spc-ov-txt">View Project</span></div>
      </div>
      <div class="spc-meta">
        <div class="spc-tag">${d.name}</div>
        <h4>${p.t}</h4>
        <div class="spc-res">📊 ${p.res}</div>
      </div>
    </div>`).join('');

  c.innerHTML = `
  <section class="svcp-hero">
    <canvas id="svc-pcv-${id}"></canvas>
    <div class="hero-glow g1"></div>
    <div class="hero-glow g2"></div>
    <div class="svcp-layout">

      <!-- LEFT -->
      <div class="svcp-left">
        <div class="hero-pill" style="margin-bottom:1.4rem">
          <span class="hp-dot"></span>${d.tag} · Qweb Marketing · Buffalo, NY
        </div>
        <h1 class="hero-h1">${d.h}</h1>
        <p class="hero-p" style="max-width:490px;margin-bottom:2rem">${d.sub}</p>
        <div class="svcp-btns">
          <a href="#svcform-${id}" class="btn-primary btn-md" onclick="scrollTo2('svcform-${id}')">
            Request This Service
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#" class="btn-ghost btn-md" onclick="return nav('consultancy')">Book Free Call</a>
        </div>
        <div class="svcp-trust" style="display:flex;align-items:center;gap:12px;margin-top:1.75rem">
          <div class="trust-avs">
            <div class="tav" style="background:linear-gradient(135deg,#1B5BFF,#5b8dff)">JM</div>
            <div class="tav" style="background:linear-gradient(135deg,#7c3aed,#a855f7)">SR</div>
            <div class="tav" style="background:linear-gradient(135deg,#059669,#34d399)">DK</div>
            <div class="tav" style="background:linear-gradient(135deg,#d97706,#fbbf24)">AN</div>
          </div>
          <div style="margin-left:8px">
            <div style="color:#f59e0b;font-size:.78rem;letter-spacing:2px">★★★★★</div>
            <div style="font-size:.78rem;color:var(--muted)">Trusted by <strong style="color:var(--text)">40+ clients</strong> · 5.0 avg rating</div>
          </div>
        </div>
      </div>

      <!-- RIGHT — RESULT CARD -->
      <div class="svcp-right">
        <div class="result-card">
          <div class="rc-hdr">
            <div class="rc-badge"></div>
            <div class="rc-hdr-txt">Client Win · <span>${r.client}</span></div>
          </div>
          <div class="rc-main">
            <span class="rc-big-val">${r.big_val}</span>
            <div class="rc-big-lbl">${r.big_lbl}</div>
          </div>
          <div class="rc-prog-wrap">
            <div class="rc-prog-bar" style="--w:${r.prog}%"></div>
          </div>
          <div class="rc-metrics">
            <div class="rc-m"><span class="rc-m-val">${r.m2_val}</span><div class="rc-m-lbl">${r.m2_lbl}</div></div>
            <div class="rc-div"></div>
            <div class="rc-m"><span class="rc-m-val">${r.m3_val}</span><div class="rc-m-lbl">${r.m3_lbl}</div></div>
          </div>
          <div class="rc-tags">${r.tags.map(t=>`<span class="rc-tag">${t}</span>`).join('')}</div>
        </div>
        <div class="svc-fb svc-fb1">
          <svg viewBox="0 0 24 24" fill="#34d399" width="14" height="14"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01" stroke="#34d399" fill="none" stroke-width="2.5"/></svg>
          ${r.fb1}
        </div>
        <div class="svc-fb svc-fb2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" width="14" height="14"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
          ${r.fb2}
        </div>
      </div>
    </div>

    <!-- STATS BAR -->
    <div class="svcp-statsbar">
      <div class="hsb-item"><span class="hsb-n" data-target="150">0</span><sup>+</sup><p>Projects Done</p></div>
      <div class="hsb-sep"></div>
      <div class="hsb-item"><span class="hsb-n" data-target="40">0</span><sup>+</sup><p>Happy Clients</p></div>
      <div class="hsb-sep"></div>
      <div class="hsb-item"><span class="hsb-n" data-target="5">0</span><sup>+</sup><p>Years Experience</p></div>
      <div class="hsb-sep"></div>
      <div class="hsb-item"><span class="hsb-n" data-target="98">0</span><sup>%</sup><p>Satisfaction</p></div>
    </div>
  </section>

  <section class="section" style="background:var(--bg2)">
    <div class="container">
      <div class="sec-hdr reveal"><span class="tag-pill">Why Choose Us</span><h2>What You <span class="grad">Actually Get</span></h2></div>
      <div class="ben-grid">${d.bens.map(b=>`<div class="ben-card reveal"><div class="ben-ico">${b.i}</div><h4>${b.t}</h4><p>${b.d}</p></div>`).join('')}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="sec-hdr reveal"><span class="tag-pill">How We Work</span><h2>Our <span class="grad">4-Step Process</span></h2></div>
      <div class="proc-list reveal">${d.proc.map((p,i)=>`<div class="pi"><div class="pi-n">0${i+1}</div><div class="pi-body"><strong>${p.t}</strong><p>${p.d}</p></div></div>`).join('')}</div>
    </div>
  </section>

  <section class="section" style="background:var(--bg2)">
    <div class="container">
      <div class="sec-hdr reveal"><span class="tag-pill">Client Results</span><h2>Real Work, <span class="grad">Real Outcomes</span></h2><p>Selected ${d.name} projects — real clients, real numbers.</p></div>
      <div class="svc-port-grid" id="spg-${id}">${portHtml}</div>
      <div class="seemore-wrap" id="smw-${id}"><button class="btn-outline btn-md" onclick="showMorePort('${id}')">See More Work →</button></div>
    </div>
  </section>

  <section class="section">
    <div class="container faq-box">
      <div class="sec-hdr reveal"><span class="tag-pill">FAQ</span><h2>Common <span class="grad">Questions</span></h2></div>
      <div class="faq-list">${d.faqs.map(f=>`<div class="fq reveal"><button class="fq-btn">${f.q}<span class="fq-ic">+</span></button><div class="fq-ans"><p>${f.a}</p></div></div>`).join('')}</div>
    </div>
  </section>

  <!-- REQUEST FORM — Never uses reveal class, always visible -->
  <section class="section" id="svcform-${id}" style="background:var(--bg2)">
    <div class="container" style="max-width:680px">
      <div class="sec-hdr">
        <span class="tag-pill">Get Started Today</span>
        <h2>Request <span class="grad">${d.name}</span></h2>
        <p>Fill in the form below. We'll reply to your email within 24 hours with a custom proposal.</p>
      </div>
      <form class="prem-form" id="sf-${id}" onsubmit="sendSvcForm(event,'${id}','${d.name}')">
        <div class="pf-hd">
          <h3>Tell Us About Your Project</h3>
          <p>More detail = better proposal. Every submission goes directly to qweb.marketings@gmail.com</p>
        </div>
        <div class="pf-row">
          <div class="pf-g"><label>Full Name *</label><input type="text" name="name" placeholder="John Smith" required></div>
          <div class="pf-g"><label>Email Address *</label><input type="email" name="email" placeholder="john@company.com" required></div>
        </div>
        <div class="pf-g"><label>Phone / WhatsApp *</label><div class="phone-field-wrap">
  <div class="pcd" id="pcdsvc">
    <div class="pcd-trigger" onclick="togglePCD(this)">
      <img class="pcd-flag-img trigger-flag" src="https://flagcdn.com/20x15/us.png" alt="US">
      <span class="pcd-val">+1</span>
      <svg class="pcd-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11"><polyline points="6,9 12,15 18,9"/></svg>
    </div>
    <div class="pcd-dropdown">
      <div class="pcd-search-wrap"><input class="pcd-search" type="text" placeholder="Search country..." oninput="filterPCD(this)" onclick="event.stopPropagation()"></div>
      <div class="pcd-list">
<div class="pcd-item" data-code="+1" data-iso="us" data-name="United States"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/us.png" alt="United States" loading="lazy"><span class="pcd-item-name">United States</span><span class="pcd-code">+1</span></div>
<div class="pcd-item" data-code="+1" data-iso="ca" data-name="Canada"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ca.png" alt="Canada" loading="lazy"><span class="pcd-item-name">Canada</span><span class="pcd-code">+1</span></div>
<div class="pcd-item" data-code="+44" data-iso="gb" data-name="United Kingdom"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/gb.png" alt="United Kingdom" loading="lazy"><span class="pcd-item-name">United Kingdom</span><span class="pcd-code">+44</span></div>
<div class="pcd-item" data-code="+61" data-iso="au" data-name="Australia"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/au.png" alt="Australia" loading="lazy"><span class="pcd-item-name">Australia</span><span class="pcd-code">+61</span></div>
<div class="pcd-item" data-code="+64" data-iso="nz" data-name="New Zealand"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/nz.png" alt="New Zealand" loading="lazy"><span class="pcd-item-name">New Zealand</span><span class="pcd-code">+64</span></div>
<div class="pcd-item" data-code="+353" data-iso="ie" data-name="Ireland"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ie.png" alt="Ireland" loading="lazy"><span class="pcd-item-name">Ireland</span><span class="pcd-code">+353</span></div>
<div class="pcd-item" data-code="+27" data-iso="za" data-name="South Africa"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/za.png" alt="South Africa" loading="lazy"><span class="pcd-item-name">South Africa</span><span class="pcd-code">+27</span></div>
<div class="pcd-item" data-code="+971" data-iso="ae" data-name="United Arab Emirates"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ae.png" alt="United Arab Emirates" loading="lazy"><span class="pcd-item-name">United Arab Emirates</span><span class="pcd-code">+971</span></div>
<div class="pcd-item" data-code="+966" data-iso="sa" data-name="Saudi Arabia"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/sa.png" alt="Saudi Arabia" loading="lazy"><span class="pcd-item-name">Saudi Arabia</span><span class="pcd-code">+966</span></div>
<div class="pcd-item" data-code="+974" data-iso="qa" data-name="Qatar"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/qa.png" alt="Qatar" loading="lazy"><span class="pcd-item-name">Qatar</span><span class="pcd-code">+974</span></div>
<div class="pcd-item" data-code="+965" data-iso="kw" data-name="Kuwait"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/kw.png" alt="Kuwait" loading="lazy"><span class="pcd-item-name">Kuwait</span><span class="pcd-code">+965</span></div>
<div class="pcd-item" data-code="+973" data-iso="bh" data-name="Bahrain"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/bh.png" alt="Bahrain" loading="lazy"><span class="pcd-item-name">Bahrain</span><span class="pcd-code">+973</span></div>
<div class="pcd-item" data-code="+968" data-iso="om" data-name="Oman"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/om.png" alt="Oman" loading="lazy"><span class="pcd-item-name">Oman</span><span class="pcd-code">+968</span></div>
<div class="pcd-item" data-code="+962" data-iso="jo" data-name="Jordan"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/jo.png" alt="Jordan" loading="lazy"><span class="pcd-item-name">Jordan</span><span class="pcd-code">+962</span></div>
<div class="pcd-item" data-code="+961" data-iso="lb" data-name="Lebanon"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/lb.png" alt="Lebanon" loading="lazy"><span class="pcd-item-name">Lebanon</span><span class="pcd-code">+961</span></div>
<div class="pcd-item" data-code="+972" data-iso="il" data-name="Israel"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/il.png" alt="Israel" loading="lazy"><span class="pcd-item-name">Israel</span><span class="pcd-code">+972</span></div>
<div class="pcd-item" data-code="+90" data-iso="tr" data-name="Turkey"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/tr.png" alt="Turkey" loading="lazy"><span class="pcd-item-name">Turkey</span><span class="pcd-code">+90</span></div>
<div class="pcd-item" data-code="+91" data-iso="in" data-name="India"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/in.png" alt="India" loading="lazy"><span class="pcd-item-name">India</span><span class="pcd-code">+91</span></div>
<div class="pcd-item" data-code="+92" data-iso="pk" data-name="Pakistan"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/pk.png" alt="Pakistan" loading="lazy"><span class="pcd-item-name">Pakistan</span><span class="pcd-code">+92</span></div>
<div class="pcd-item" data-code="+880" data-iso="bd" data-name="Bangladesh"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/bd.png" alt="Bangladesh" loading="lazy"><span class="pcd-item-name">Bangladesh</span><span class="pcd-code">+880</span></div>
<div class="pcd-item" data-code="+94" data-iso="lk" data-name="Sri Lanka"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/lk.png" alt="Sri Lanka" loading="lazy"><span class="pcd-item-name">Sri Lanka</span><span class="pcd-code">+94</span></div>
<div class="pcd-item" data-code="+977" data-iso="np" data-name="Nepal"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/np.png" alt="Nepal" loading="lazy"><span class="pcd-item-name">Nepal</span><span class="pcd-code">+977</span></div>
<div class="pcd-item" data-code="+60" data-iso="my" data-name="Malaysia"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/my.png" alt="Malaysia" loading="lazy"><span class="pcd-item-name">Malaysia</span><span class="pcd-code">+60</span></div>
<div class="pcd-item" data-code="+65" data-iso="sg" data-name="Singapore"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/sg.png" alt="Singapore" loading="lazy"><span class="pcd-item-name">Singapore</span><span class="pcd-code">+65</span></div>
<div class="pcd-item" data-code="+63" data-iso="ph" data-name="Philippines"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ph.png" alt="Philippines" loading="lazy"><span class="pcd-item-name">Philippines</span><span class="pcd-code">+63</span></div>
<div class="pcd-item" data-code="+66" data-iso="th" data-name="Thailand"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/th.png" alt="Thailand" loading="lazy"><span class="pcd-item-name">Thailand</span><span class="pcd-code">+66</span></div>
<div class="pcd-item" data-code="+62" data-iso="id" data-name="Indonesia"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/id.png" alt="Indonesia" loading="lazy"><span class="pcd-item-name">Indonesia</span><span class="pcd-code">+62</span></div>
<div class="pcd-item" data-code="+84" data-iso="vn" data-name="Vietnam"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/vn.png" alt="Vietnam" loading="lazy"><span class="pcd-item-name">Vietnam</span><span class="pcd-code">+84</span></div>
<div class="pcd-item" data-code="+81" data-iso="jp" data-name="Japan"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/jp.png" alt="Japan" loading="lazy"><span class="pcd-item-name">Japan</span><span class="pcd-code">+81</span></div>
<div class="pcd-item" data-code="+82" data-iso="kr" data-name="South Korea"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/kr.png" alt="South Korea" loading="lazy"><span class="pcd-item-name">South Korea</span><span class="pcd-code">+82</span></div>
<div class="pcd-item" data-code="+86" data-iso="cn" data-name="China"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/cn.png" alt="China" loading="lazy"><span class="pcd-item-name">China</span><span class="pcd-code">+86</span></div>
<div class="pcd-item" data-code="+852" data-iso="hk" data-name="Hong Kong"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/hk.png" alt="Hong Kong" loading="lazy"><span class="pcd-item-name">Hong Kong</span><span class="pcd-code">+852</span></div>
<div class="pcd-item" data-code="+886" data-iso="tw" data-name="Taiwan"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/tw.png" alt="Taiwan" loading="lazy"><span class="pcd-item-name">Taiwan</span><span class="pcd-code">+886</span></div>
<div class="pcd-item" data-code="+49" data-iso="de" data-name="Germany"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/de.png" alt="Germany" loading="lazy"><span class="pcd-item-name">Germany</span><span class="pcd-code">+49</span></div>
<div class="pcd-item" data-code="+33" data-iso="fr" data-name="France"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/fr.png" alt="France" loading="lazy"><span class="pcd-item-name">France</span><span class="pcd-code">+33</span></div>
<div class="pcd-item" data-code="+34" data-iso="es" data-name="Spain"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/es.png" alt="Spain" loading="lazy"><span class="pcd-item-name">Spain</span><span class="pcd-code">+34</span></div>
<div class="pcd-item" data-code="+39" data-iso="it" data-name="Italy"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/it.png" alt="Italy" loading="lazy"><span class="pcd-item-name">Italy</span><span class="pcd-code">+39</span></div>
<div class="pcd-item" data-code="+31" data-iso="nl" data-name="Netherlands"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/nl.png" alt="Netherlands" loading="lazy"><span class="pcd-item-name">Netherlands</span><span class="pcd-code">+31</span></div>
<div class="pcd-item" data-code="+32" data-iso="be" data-name="Belgium"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/be.png" alt="Belgium" loading="lazy"><span class="pcd-item-name">Belgium</span><span class="pcd-code">+32</span></div>
<div class="pcd-item" data-code="+41" data-iso="ch" data-name="Switzerland"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ch.png" alt="Switzerland" loading="lazy"><span class="pcd-item-name">Switzerland</span><span class="pcd-code">+41</span></div>
<div class="pcd-item" data-code="+43" data-iso="at" data-name="Austria"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/at.png" alt="Austria" loading="lazy"><span class="pcd-item-name">Austria</span><span class="pcd-code">+43</span></div>
<div class="pcd-item" data-code="+46" data-iso="se" data-name="Sweden"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/se.png" alt="Sweden" loading="lazy"><span class="pcd-item-name">Sweden</span><span class="pcd-code">+46</span></div>
<div class="pcd-item" data-code="+47" data-iso="no" data-name="Norway"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/no.png" alt="Norway" loading="lazy"><span class="pcd-item-name">Norway</span><span class="pcd-code">+47</span></div>
<div class="pcd-item" data-code="+45" data-iso="dk" data-name="Denmark"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/dk.png" alt="Denmark" loading="lazy"><span class="pcd-item-name">Denmark</span><span class="pcd-code">+45</span></div>
<div class="pcd-item" data-code="+358" data-iso="fi" data-name="Finland"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/fi.png" alt="Finland" loading="lazy"><span class="pcd-item-name">Finland</span><span class="pcd-code">+358</span></div>
<div class="pcd-item" data-code="+351" data-iso="pt" data-name="Portugal"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/pt.png" alt="Portugal" loading="lazy"><span class="pcd-item-name">Portugal</span><span class="pcd-code">+351</span></div>
<div class="pcd-item" data-code="+30" data-iso="gr" data-name="Greece"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/gr.png" alt="Greece" loading="lazy"><span class="pcd-item-name">Greece</span><span class="pcd-code">+30</span></div>
<div class="pcd-item" data-code="+48" data-iso="pl" data-name="Poland"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/pl.png" alt="Poland" loading="lazy"><span class="pcd-item-name">Poland</span><span class="pcd-code">+48</span></div>
<div class="pcd-item" data-code="+420" data-iso="cz" data-name="Czech Republic"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/cz.png" alt="Czech Republic" loading="lazy"><span class="pcd-item-name">Czech Republic</span><span class="pcd-code">+420</span></div>
<div class="pcd-item" data-code="+36" data-iso="hu" data-name="Hungary"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/hu.png" alt="Hungary" loading="lazy"><span class="pcd-item-name">Hungary</span><span class="pcd-code">+36</span></div>
<div class="pcd-item" data-code="+40" data-iso="ro" data-name="Romania"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ro.png" alt="Romania" loading="lazy"><span class="pcd-item-name">Romania</span><span class="pcd-code">+40</span></div>
<div class="pcd-item" data-code="+380" data-iso="ua" data-name="Ukraine"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ua.png" alt="Ukraine" loading="lazy"><span class="pcd-item-name">Ukraine</span><span class="pcd-code">+380</span></div>
<div class="pcd-item" data-code="+7" data-iso="ru" data-name="Russia"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ru.png" alt="Russia" loading="lazy"><span class="pcd-item-name">Russia</span><span class="pcd-code">+7</span></div>
<div class="pcd-item" data-code="+55" data-iso="br" data-name="Brazil"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/br.png" alt="Brazil" loading="lazy"><span class="pcd-item-name">Brazil</span><span class="pcd-code">+55</span></div>
<div class="pcd-item" data-code="+52" data-iso="mx" data-name="Mexico"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/mx.png" alt="Mexico" loading="lazy"><span class="pcd-item-name">Mexico</span><span class="pcd-code">+52</span></div>
<div class="pcd-item" data-code="+54" data-iso="ar" data-name="Argentina"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ar.png" alt="Argentina" loading="lazy"><span class="pcd-item-name">Argentina</span><span class="pcd-code">+54</span></div>
<div class="pcd-item" data-code="+56" data-iso="cl" data-name="Chile"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/cl.png" alt="Chile" loading="lazy"><span class="pcd-item-name">Chile</span><span class="pcd-code">+56</span></div>
<div class="pcd-item" data-code="+57" data-iso="co" data-name="Colombia"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/co.png" alt="Colombia" loading="lazy"><span class="pcd-item-name">Colombia</span><span class="pcd-code">+57</span></div>
<div class="pcd-item" data-code="+51" data-iso="pe" data-name="Peru"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/pe.png" alt="Peru" loading="lazy"><span class="pcd-item-name">Peru</span><span class="pcd-code">+51</span></div>
<div class="pcd-item" data-code="+58" data-iso="ve" data-name="Venezuela"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ve.png" alt="Venezuela" loading="lazy"><span class="pcd-item-name">Venezuela</span><span class="pcd-code">+58</span></div>
<div class="pcd-item" data-code="+234" data-iso="ng" data-name="Nigeria"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ng.png" alt="Nigeria" loading="lazy"><span class="pcd-item-name">Nigeria</span><span class="pcd-code">+234</span></div>
<div class="pcd-item" data-code="+254" data-iso="ke" data-name="Kenya"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ke.png" alt="Kenya" loading="lazy"><span class="pcd-item-name">Kenya</span><span class="pcd-code">+254</span></div>
<div class="pcd-item" data-code="+233" data-iso="gh" data-name="Ghana"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/gh.png" alt="Ghana" loading="lazy"><span class="pcd-item-name">Ghana</span><span class="pcd-code">+233</span></div>
<div class="pcd-item" data-code="+255" data-iso="tz" data-name="Tanzania"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/tz.png" alt="Tanzania" loading="lazy"><span class="pcd-item-name">Tanzania</span><span class="pcd-code">+255</span></div>
<div class="pcd-item" data-code="+20" data-iso="eg" data-name="Egypt"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/eg.png" alt="Egypt" loading="lazy"><span class="pcd-item-name">Egypt</span><span class="pcd-code">+20</span></div>
<div class="pcd-item" data-code="+212" data-iso="ma" data-name="Morocco"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ma.png" alt="Morocco" loading="lazy"><span class="pcd-item-name">Morocco</span><span class="pcd-code">+212</span></div>
<div class="pcd-item" data-code="+213" data-iso="dz" data-name="Algeria"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/dz.png" alt="Algeria" loading="lazy"><span class="pcd-item-name">Algeria</span><span class="pcd-code">+213</span></div>
<div class="pcd-item" data-code="+98" data-iso="ir" data-name="Iran"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/ir.png" alt="Iran" loading="lazy"><span class="pcd-item-name">Iran</span><span class="pcd-code">+98</span></div>
<div class="pcd-item" data-code="+93" data-iso="af" data-name="Afghanistan"><img class="pcd-flag-img" src="https://flagcdn.com/20x15/af.png" alt="Afghanistan" loading="lazy"><span class="pcd-item-name">Afghanistan</span><span class="pcd-code">+93</span></div>
      </div>
    </div>
  </div>
  <input class="pcd-code-hidden" type="hidden" name="phone_code" value="+1">
  <input type="tel" name="phone" placeholder="Enter phone number" required>
</div>
        <div class="pf-g"><label>Project Details *</label><textarea name="message" rows="4" placeholder="Tell us about your project, goals, timeline, and any specific requirements..." required></textarea></div>
        <div class="pf-g"><label>Budget Range</label>
          <select name="budget"><option value="">Select your budget range</option><option>$500 – $1,500</option><option>$1,500 – $5,000</option><option>$5,000 – $15,000</option><option>$15,000+</option></select>
        </div>
        <button type="submit" class="btn-primary btn-form-submit">Submit Request — We Reply Within 24 Hours →</button>
        <div class="form-st" id="st-${id}"></div>
      </form>
    </div>
  </section>

  <section class="section cta-sec">
    <div class="container"><div class="cta-card reveal"><div class="cta-orb"></div>
      <h2>Ready to Get Started?<br><span class="grad">Let's Talk.</span></h2>
      <p>Book your free 30-minute strategy call — no pitch, just a real conversation.</p>
      <a href="#" class="btn-primary btn-md" onclick="return nav('consultancy')">Book My Free Strategy Call →</a>
    </div></div>
  </section>`;

  // Init after DOM settles
  setTimeout(() => {
    // Portfolio clicks
    c.querySelectorAll('.spc').forEach(el => el.addEventListener('click', () => openPortModal(el)));
    // Inits
    initFAQ();
    forceRevealActive();
    startReveal();
    startCounters();
    // Particles
    initSvcParticles(id);
    // Canvas style
    const pcv = document.getElementById('svc-pcv-' + id);
    if (pcv) { pcv.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;width:100%;height:100%'; }
  }, 80);
}

function scrollTo2(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior:'smooth' });
  return false;
}

function showMorePort(id) {
  document.getElementById('spg-'+id)?.querySelectorAll('.hidden-port').forEach(el => {
    el.classList.remove('hidden-port');
    el.style.animation = 'fadeUp .4s ease both';
  });
  const w = document.getElementById('smw-'+id);
  if (w) w.style.display = 'none';
}

// ── SERVICE PARTICLES ──
function initSvcParticles(id) {
  const cv = document.getElementById('svc-pcv-' + id);
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let pts = [];
  function resize() { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; }
  class P {
    constructor() { this.r(); }
    r() { this.x=Math.random()*cv.width;this.y=Math.random()*cv.height;this.vx=(Math.random()-.5)*.28;this.vy=(Math.random()-.5)*.28;this.s=Math.random()*1.4+.3;this.o=Math.random()*.22+.04; }
    tick() { this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>cv.width||this.y<0||this.y>cv.height)this.r(); }
    draw() { ctx.beginPath();ctx.arc(this.x,this.y,this.s,0,Math.PI*2);ctx.fillStyle=`rgba(27,91,255,${this.o})`;ctx.fill(); }
  }
  function init() { resize(); pts=Array.from({length:45},()=>new P()); }
  function frame() { ctx.clearRect(0,0,cv.width,cv.height); pts.forEach(p=>{p.tick();p.draw();}); requestAnimationFrame(frame); }
  init(); frame();
}

// ── PAGE ROUTER ──
function nav(id) {
  // Update browser URL
  const slugMap = {
    'home': '/',
    'about': '/about-us',
    'services': '/services',
    'portfolio': '/portfolio',
    'contact': '/contact',
    'consultancy': '/book-free-call',
    'hotdeals': '/hot-deals',
  };
  const slug = slugMap[id] || (id.startsWith('service-') ? '/services/' + id.replace('service-','') : '/' + id);
  window.history.pushState({ page: id }, '', slug);

  document.querySelectorAll('.pg').forEach(p => p.classList.remove('active'));

  // Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
  const id = e.state?.page || 'home';
  nav(id);
});

  if (svcIds.includes(id)) {
    const c = document.getElementById('svc-container');
    buildSvcPage(id, c);
    c.classList.add('active');
  } else {
    const el = document.getElementById('pg-' + id);
    if (el) el.classList.add('active');
  }
  window.scrollTo({top:0, behavior:'smooth'});
  closeNav();
  document.querySelectorAll('[data-p]').forEach(a => a.classList.toggle('on', a.dataset.p === id));
  setTimeout(forceRevealActive, 60);
  setTimeout(() => { startReveal(); startCounters(); initFAQ(); initHotDealsCountdown(); }, 150);
  return false;
}

// Force all above-fold .reveal elements visible on active page
function forceRevealActive() {
  const active = document.querySelector('.pg.active');
  if (!active) return;
  const vh = window.innerHeight;
  active.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh + 300) el.classList.add('vis');
  });
}

// ── HEADER ──
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('on', window.scrollY > 20);
  document.getElementById('bttBtn').classList.toggle('on', window.scrollY > 400);
  forceRevealActive();
}, {passive:true});
document.getElementById('bttBtn').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// ── MOBILE NAV ──
const hbg = document.getElementById('hbg');

hbg.addEventListener('click', openNav);

function openNav() {
  const drawer  = document.getElementById('mobDrawer');
  const overlay = document.getElementById('mobNavOverlay');
  hbg.classList.add('on');
  if (drawer)  drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  const drawer  = document.getElementById('mobDrawer');
  const overlay = document.getElementById('mobNavOverlay');
  hbg.classList.remove('on');
  if (drawer)  drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}
// Close on scroll
window.addEventListener('scroll', () => {
  const drawer = document.getElementById('mobDrawer');
  if (drawer && drawer.classList.contains('open')) closeNav();
}, { passive: true });

// Services sub-dropdown in mobile drawer
function toggleMobDrop(btn) {
  const items = btn.nextElementSibling;
  const isOpen = items.classList.contains('open');
  items.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
}

// Desktop services dropdown
document.querySelectorAll('.has-drop > a').forEach(a => {
  a.addEventListener('click', e => {
    if (window.innerWidth < 900) { e.preventDefault(); a.parentElement.classList.toggle('open'); }
  });
});

// ── SCROLL REVEAL ──
function startReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('vis'), (i%4)*70);
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.05});
  document.querySelectorAll('.pg.active .reveal:not(.vis)').forEach(el => obs.observe(el));
}

// ── COUNTERS ──
function countUp(el) {
  if (el._cnt) return; el._cnt = true;
  const target=+el.dataset.target, dur=1500, t0=performance.now();
  (function run(now) {
    const p=Math.min((now-t0)/dur,1), ease=1-Math.pow(1-p,3);
    el.textContent=Math.floor(target*ease);
    if(p<1) requestAnimationFrame(run); else el.textContent=target;
  })(performance.now());
}
function startCounters() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){countUp(e.target);obs.unobserve(e.target);} });
  },{threshold:.5});
  document.querySelectorAll('.pg.active [data-target]').forEach(el=>obs.observe(el));
}

// ── FAQ ──
function initFAQ() {
  document.querySelectorAll('.fq-btn').forEach(btn => {
    btn.onclick = function() {
      const item=this.parentElement, open=item.classList.contains('open');
      document.querySelectorAll('.fq.open').forEach(f=>f.classList.remove('open'));
      if(!open) item.classList.add('open');
    };
  });
}

// ── TESTIMONIAL SLIDER (3-card groups) ──
let tIdx=0, tTimer=null;
const tsTrack  = document.getElementById('tsTrack');
const tsGroups = tsTrack ? Array.from(tsTrack.querySelectorAll('.ts-group')) : [];
const tsDots   = document.getElementById('tsDots');

function buildTsDots() {
  if (!tsDots) return;
  tsDots.innerHTML = '';
  tsGroups.forEach((_,i) => {
    const d = document.createElement('button');
    d.className = 'ts-dot' + (i===0?' on':'');
    d.setAttribute('aria-label','Slide '+(i+1));
    d.addEventListener('click', ()=>tsGo(i));
    tsDots.appendChild(d);
  });
}
function tsGo(n) {
  if (!tsTrack || !tsGroups.length) return;
  tIdx = ((n%tsGroups.length)+tsGroups.length)%tsGroups.length;
  tsTrack.style.transform = `translateX(-${tIdx*100}%)`;
  document.querySelectorAll('.ts-dot').forEach((d,i)=>d.classList.toggle('on',i===tIdx));
  clearInterval(tTimer);
  tTimer = setInterval(()=>tsGo(tIdx+1), 6000);
}
function initTsSlider() {
  buildTsDots();
  document.getElementById('tsPrev')?.addEventListener('click', ()=>tsGo(tIdx-1));
  document.getElementById('tsNext')?.addEventListener('click', ()=>tsGo(tIdx+1));
  tTimer = setInterval(()=>tsGo(tIdx+1), 6000);
}

// ── PORTFOLIO ──
function initPortFilter() {
  document.querySelectorAll('.pf-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.pf-btn').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      const f = this.dataset.f;
      document.querySelectorAll('.pc').forEach(c=>c.classList.toggle('hidden', f!=='all'&&c.dataset.cat!==f));
    });
  });
  document.querySelectorAll('.pc').forEach(c=>c.addEventListener('click',()=>openPortModal(c)));
}

function openPortModal(el) {
  const m = document.getElementById('portModal');
  document.getElementById('modalTitle').textContent = el.dataset.title || '';
  document.getElementById('modalTag').textContent   = el.dataset.tag   || '';
  document.getElementById('modalDesc').textContent  = el.dataset.desc  || '';
  // Support both data-result (index.html cards) and data-res (service page cards)
  const result = el.dataset.result || el.dataset.res || '';
  const resEl  = document.getElementById('modalRes');
  if (result) {
    resEl.textContent = '📊 Result: ' + result;
    resEl.style.display = 'inline-block';
  } else {
    resEl.textContent = '';
    resEl.style.display = 'none';
  }
  const vis = document.getElementById('modalVis');
  vis.style.background = el.dataset.bg || el.dataset.grad || 'var(--bg3)';
  vis.textContent = el.dataset.title || '';
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePortModal() {
  document.getElementById('portModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closePortModal(); });

// ── PHONE & TIMEZONE ──
function initPhones() {
  // No external library needed — using native select + input
}
function initTZ() {
  const f = document.getElementById('tzField');
  if (f) f.value = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Not detected';
}

// ── EMAIL SENDING via Web3Forms ──
// ✅ HOW TO ACTIVATE EMAIL SENDING:
//   1. Go to https://web3forms.com
//   2. Enter: qweb.marketings@gmail.com
//   3. Click "Get your Access Key"
//   4. Copy the key and replace 'YOUR_WEB3FORMS_KEY' at the top of this file
//   All form submissions will then arrive directly at qweb.marketings@gmail.com

function sendForm(e, type) {
  e.preventDefault();
  const stEl = document.getElementById(type==='contact'?'contactSt':'consultSt');
  doSend(e.target, stEl, type==='contact'?'Contact Form':'Strategy Call Booking');
}
function sendSvcForm(e, id, name) {
  e.preventDefault();
  doSend(e.target, document.getElementById('st-'+id), 'Service Request: '+name);
}

async function doSend(form, stEl, subject) {
  const btn = form.querySelector('button[type="submit"]');
  const origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending…';

  const fd   = new FormData(form);
  const data = Object.fromEntries(fd);

  // Collect phone: hidden code input + tel input
  const codeHidden = form.querySelector('.pcd-code-hidden');
  const numEl      = form.querySelector('input[name="phone"]');
  if (codeHidden && numEl && numEl.value.trim()) {
    data.phone = codeHidden.value + ' ' + numEl.value.trim();
  }

  // Demo mode if key not configured
  if (!WEB3_KEY || WEB3_KEY === 'YOUR_WEB3FORMS_KEY') {
    showStatus(stEl, 'ok',
      '✓ Form is working! To activate email delivery to qweb.marketings@gmail.com:\n' +
      '1. Visit web3forms.com\n2. Enter qweb.marketings@gmail.com\n3. Get your free API key\n4. Replace YOUR_WEB3FORMS_KEY in script.js'
    );
    form.reset();
    btn.textContent = origText;
    btn.disabled = false;
    return;
  }

  const payload = {
    access_key: WEB3_KEY,
    subject:    `[Qweb Marketing] ${subject} from ${data.name || 'Website Visitor'}`,
    from_name:  data.name    || 'Website Visitor',
    email:      data.email   || '',
    phone:      data.phone   || 'Not provided',
    message:    data.message || 'No message provided',
    budget:     data.budget  || 'Not specified',
    preferred_date: data.date || '',
    preferred_time: data.time || '',
    timezone:   data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    redirect:   false
  };

  try {
    const res    = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.success) {
      // Show premium success screen
      showSuccessScreen(form, data.email);
    } else {
      throw new Error(result.message || 'Send failed');
    }
  } catch(err) {
    showStatus(stEl, 'err', '✗ Send failed — email us directly: qweb.marketings@gmail.com or WhatsApp: +1 716-573-4618');
    btn.textContent = origText;
    btn.disabled = false;
  }
}

function showStatus(el, cls, msg) {
  if (!el) return;
  el.className = 'form-st ' + cls;
  el.textContent = msg;
  el.scrollIntoView({behavior:'smooth', block:'nearest'});
}

// ── HOME PARTICLES ──
function initParticles() {
  const cv = document.getElementById('pcv');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let pts = [], raf;
  function resize() { cv.width=cv.offsetWidth; cv.height=cv.offsetHeight; }
  class P {
    constructor() { this.r(); }
    r() { this.x=Math.random()*cv.width;this.y=Math.random()*cv.height;this.vx=(Math.random()-.5)*.3;this.vy=(Math.random()-.5)*.3;this.s=Math.random()*1.6+.3;this.o=Math.random()*.28+.04; }
    tick() { this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>cv.width||this.y<0||this.y>cv.height)this.r(); }
    draw() { ctx.beginPath();ctx.arc(this.x,this.y,this.s,0,Math.PI*2);ctx.fillStyle=`rgba(27,91,255,${this.o})`;ctx.fill(); }
  }
  function init() { resize(); pts=Array.from({length:65},()=>new P()); }
  function frame() {
    ctx.clearRect(0,0,cv.width,cv.height);
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<100){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(27,91,255,${.06*(1-d/100)})`;ctx.lineWidth=.5;ctx.stroke();}
    }
    pts.forEach(p=>{p.tick();p.draw();});
    raf = requestAnimationFrame(frame);
  }
  init(); frame();
  window.addEventListener('resize', ()=>{cancelAnimationFrame(raf);init();frame();});
}

// Inject global keyframes + helper styles
const gs = document.createElement('style');
gs.textContent = `
  @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
  .hsb-item sup{font-family:var(--fh);font-size:1.25rem;font-weight:800;color:var(--blue-lt);vertical-align:super;line-height:0}
  .svcp-statsbar .hsb-n{font-family:var(--fh);font-size:1.8rem;font-weight:800;color:var(--white)}
  .hero-h1 .grad{font-style:normal}
`;
document.head.appendChild(gs);


// ── HOT DEALS COUNTDOWN ──
function initHotDealsCountdown() {
  const el = document.getElementById('hdCountdown');
  if (!el) return;
  const KEY = 'qweb_deal_end';
  let end = localStorage.getItem(KEY);
  if (!end || isNaN(parseInt(end))) {
    end = Date.now() + 48 * 60 * 60 * 1000;
    localStorage.setItem(KEY, end);
  }
  function tick() {
    const diff = parseInt(end) - Date.now();
    if (diff <= 0) { el.textContent = 'ENDED'; return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    setTimeout(tick, 1000);
  }
  tick();
}

// ── CUSTOM PHONE DROPDOWN ──
function togglePCD(trigger) {
  const pcd = trigger.closest('.pcd');
  const isOpen = pcd.classList.contains('open');
  document.querySelectorAll('.pcd.open').forEach(p => p.classList.remove('open'));
  if (!isOpen) {
    pcd.classList.add('open');
    setTimeout(() => pcd.querySelector('.pcd-search')?.focus(), 50);
  }
}
function filterPCD(input) {
  const q = input.value.toLowerCase();
  const list = input.closest('.pcd-dropdown').querySelector('.pcd-list');
  list.querySelectorAll('.pcd-item').forEach(item => {
    const text = (item.dataset.name + item.dataset.code).toLowerCase();
    item.style.display = text.includes(q) ? '' : 'none';
  });
}
// Close when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.pcd')) {
    document.querySelectorAll('.pcd.open').forEach(p => p.classList.remove('open'));
  }
});
// Handle item selection — updates flag IMAGE in trigger
document.addEventListener('click', e => {
  const item = e.target.closest('.pcd-item');
  if (!item) return;
  const pcd  = item.closest('.pcd');
  const wrap = pcd.closest('.phone-field-wrap');
  const code = item.dataset.code;
  const iso  = item.dataset.iso;
  const name = item.dataset.name;
  // Update trigger flag image + code text
  const triggerFlag = pcd.querySelector('.trigger-flag');
  if (triggerFlag) {
    triggerFlag.src = `https://flagcdn.com/20x15/${iso}.png`;
    triggerFlag.alt = name;
  }
  pcd.querySelector('.pcd-val').textContent = code;
  // Update hidden input value
  wrap.querySelector('.pcd-code-hidden').value = code;
  // Mark selected item
  pcd.querySelectorAll('.pcd-item').forEach(i => i.classList.remove('selected'));
  item.classList.add('selected');
  // Close + clear search
  pcd.classList.remove('open');
  const search = pcd.querySelector('.pcd-search');
  search.value = '';
  pcd.querySelectorAll('.pcd-item').forEach(i => i.style.display = '');
});

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  forceRevealActive();
  startReveal();
  startCounters();
  initFAQ();
  initTsSlider();
  initPortFilter();
  initPhones();
  initTZ();
  initParticles();

  // Stagger home hero elements in
  const homeLeft = [
    document.querySelector('#pg-home .hero-pill'),
    document.querySelector('#pg-home .hero-h1'),
    document.querySelector('#pg-home .hero-p'),
    document.querySelector('#pg-home .hero-btns'),
    document.querySelector('#pg-home .hero-trust'),
  ];
  homeLeft.forEach((el,i) => el && setTimeout(()=>el.classList.add('vis'), 150+i*110));
  const homeRight = document.querySelector('#pg-home .hero-right');
  if (homeRight) setTimeout(()=>homeRight.classList.add('vis'), 400);
  const statsBar = document.querySelector('#pg-home .hero-statsbar');
  if (statsBar) setTimeout(()=>statsBar.classList.add('vis'), 580);

  // Hard failsafe: after 2s, force reveal everything visible on active page
  setTimeout(()=>{
    document.querySelectorAll('.pg.active .reveal').forEach(el=>el.classList.add('vis'));
  }, 2000);
});
