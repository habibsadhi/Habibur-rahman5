import {
  PersonalInfo,
  ServiceItem,
  CaseStudy,
  GraphicDesignItem,
  SkillItem,
  Testimonial,
  ProcessStep,
} from '../types';

/**
 * PORTFOLIO DATA CONFIGURATION
 * Edit this file to customize all portfolio details, images, links, and text.
 * Ready for GitHub sharing & hosting!
 */

export const personalInfo: PersonalInfo = {
  name: 'Habibur Rahman',
  role: 'Digital Marketing Specialist, SEO & Graphic Designer',
  secondaryRoles: [
    'SEO Strategist & Technical Auditor',
    'Paid Media & Meta Ads Specialist',
    'Brand Identity & Visual Designer',
    'Conversion Rate Optimization (CRO) Lead',
  ],
  location: 'Available Worldwide / Remote',
  email: 'habiburrahmmm@gmail.com',
  whatsappNumber: '+8801700000000', // Update with your actual WhatsApp
  availability: 'Available for freelance projects & full-time roles',
  bio: 'I help modern businesses and brands generate organic traffic, scale profitable ad campaigns, and establish captivating visual identities that convert viewers into loyal paying customers.',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  behanceUrl: 'https://behance.net',
  experienceYears: 4,
  completedProjects: 120,
  happyClients: 85,
  totalAdSpendManaged: '$350K+',
};

export const heroStats = [
  { label: 'Projects Completed', value: '120+', subtext: 'Worldwide clients' },
  { label: 'Average ROAS on Paid Ads', value: '4.2x', subtext: 'Meta & Google Ads' },
  { label: 'Organic Traffic Lift', value: '+340%', subtext: 'Within 6 months SEO' },
  { label: 'Client Satisfaction', value: '99%', subtext: 'Verified 5-star ratings' },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Paid Ads',
    category: 'marketing',
    tagline: 'High-ROI Customer Acquisition Across Paid Channels',
    description:
      'Data-backed customer acquisition campaigns on Meta (Facebook/Instagram), Google Search & Display, and TikTok Ads designed to maximize ROAS and lower customer acquisition costs (CAC).',
    features: [
      'Meta (Facebook & Instagram) Ads Management',
      'Google Search, Performance Max & Display PPC',
      'Retargeting & Dynamic Product Ads (DPA)',
      'A/B Creative & Copy Testing Frameworks',
      'Conversion Rate Optimization (CRO) & Funnel Audits',
      'Email Marketing Automation (Klaviyo / Mailchimp)',
    ],
    tools: ['Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'Klaviyo', 'Hotjar', 'TikTok Ads'],
    highlightMetric: '4.2x Avg. ROAS',
    icon: 'Megaphone',
  },
  {
    id: 'seo-strategy',
    title: 'SEO & Search Engine Growth',
    category: 'seo',
    tagline: 'Sustainable First-Page Google Rankings & Organic Leads',
    description:
      'Comprehensive on-page, off-page, and technical SEO architecture that turns your website into an organic lead-generation machine that ranks ahead of competitors.',
    features: [
      'Deep Technical SEO & Core Web Vitals Audits',
      'High-Intent Keyword Research & Topic Clustering',
      'On-Page Optimization (Schema, Meta, Structure)',
      'High-Authority Link Building & Outreach Strategy',
      'Local SEO & Google Business Profile (GBP) Ranking',
      'Penalty Recovery & Algorithm Update Resilience',
    ],
    tools: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'SurferSEO', 'Moz'],
    highlightMetric: '+340% Organic Traffic',
    icon: 'TrendingUp',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Brand Identity',
    category: 'graphics',
    tagline: 'Memorable Visuals That Captivate & Drive Conversions',
    description:
      'Compelling visual assets, brand identity systems, marketing collateral, and high-converting ad creatives tailored to resonate with your target demographic.',
    features: [
      'Complete Brand Identity (Logo, Typography, Palette)',
      'High-Click-Through Social Media Ad Creatives',
      'Instagram / LinkedIn Carousel Strategy & Design',
      'Marketing Collateral, Brochures & Pitch Decks',
      'E-commerce Product Display Graphics & Mockups',
      'Custom Vector Illustrations & Iconography',
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro', 'InDesign'],
    highlightMetric: '250+ Brand Creatives',
    icon: 'Palette',
  },
];

export const skillsData: SkillItem[] = [
  // Digital Marketing
  { name: 'Meta Ads Manager (FB & IG)', category: 'marketing', level: 95, badge: 'PPC' },
  { name: 'Google Ads & Performance Max', category: 'marketing', level: 90, badge: 'PPC' },
  { name: 'Conversion Funnel Optimization', category: 'marketing', level: 88, badge: 'CRO' },
  { name: 'Email Marketing Automations', category: 'marketing', level: 85, badge: 'Retention' },
  { name: 'Google Analytics 4 & Tag Manager', category: 'marketing', level: 92, badge: 'Analytics' },
  
  // SEO
  { name: 'Technical SEO Auditing', category: 'seo', level: 94, badge: 'Technical' },
  { name: 'Keyword Strategy & Clustering', category: 'seo', level: 96, badge: 'On-Page' },
  { name: 'Google Search Console Optimization', category: 'seo', level: 95, badge: 'Search' },
  { name: 'Local SEO & Google Business', category: 'seo', level: 90, badge: 'Local' },
  { name: 'Ahrefs & SEMrush Analysis', category: 'seo', level: 92, badge: 'Audit' },
  
  // Graphic Design
  { name: 'Brand Identity & Logo Systems', category: 'graphics', level: 92, badge: 'Branding' },
  { name: 'Adobe Illustrator & Photoshop', category: 'graphics', level: 94, badge: 'Design' },
  { name: 'High-CTR Ad Creatives & Banners', category: 'graphics', level: 95, badge: 'Social' },
  { name: 'Figma UI/UX & Layout Prototyping', category: 'graphics', level: 86, badge: 'UI/UX' },
  { name: 'Print & Packaging Collateral', category: 'graphics', level: 85, badge: 'Print' },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'ecommerce-seo-traffic',
    title: 'E-Commerce Organic Revenue Scaled 340%',
    category: 'seo',
    client: 'Nordic Lifestyle Gear',
    industry: 'Outdoor & Apparel E-commerce',
    year: '2024',
    summary:
      'Transformed a stagnant e-commerce store with technical debt into an organic traffic powerhouse ranking #1 for over 85 commercial intent keywords.',
    challenge:
      'The client had poor site architecture, duplicate faceted navigation URLs, 404 crawl errors, and low-quality product descriptions that kept organic sales flat for 14 months.',
    strategy:
      'Executed full Screaming Frog technical audit, consolidated canonical URLs, engineered semantic keyword clusters for 12 core product categories, implemented Product Schema, and built high-DA editorial backlinks.',
    results: [
      { metric: '+340%', label: 'Organic Monthly Visitors', trend: 'up' },
      { metric: '85+', label: 'Page 1 Commercial Keywords', trend: 'up' },
      { metric: '$128K', label: 'Added Monthly Revenue', trend: 'up' },
      { metric: '-65%', label: 'Bounce Rate', trend: 'down' },
    ],
    tags: ['Technical SEO', 'Keyword Clustering', 'Schema Markup', 'Link Building', 'E-Commerce'],
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Comprehensive 48-Page Technical SEO Audit',
      'Consolidated URL Architecture & XML Sitemaps',
      '12 Semantic Content Hubs for Buying Guides',
      'Schema.org Rich Snippet Deployment',
    ],
    testimonial: {
      quote:
        'Habibur changed our entire customer acquisition landscape. We went from paying exorbitant ad costs to receiving hundreds of free buyers daily from Google.',
      author: 'Marcus Lindberg',
      role: 'Head of Growth, Nordic Lifestyle',
    },
  },
  {
    id: 'meta-ads-scaling',
    title: 'Scaling DTC Skincare Brand to 4.5x ROAS with Meta Ads',
    category: 'marketing',
    client: 'GlowPure Skincare',
    industry: 'Beauty & Direct-to-Consumer',
    year: '2024',
    summary:
      'Rebuilt ad account structure, deployed hook-tested video/image creatives, and structured full-funnel retargeting to achieve profitable scale.',
    challenge:
      'Customer acquisition costs were steadily rising with previous ad agencies delivering sub-1.6x ROAS, causing unsustainable ad spend bleed.',
    strategy:
      'Implemented Broad Audience targeting with Advantage+ Shopping Campaigns (ASC), split-tested dynamic angle hooks (Dermatologist-approved vs. Ingredient focus), and redesigned high-converting landing pages.',
    results: [
      { metric: '4.52x', label: 'Average Blended ROAS', trend: 'up' },
      { metric: '-42%', label: 'Cost Per Acquisition (CAC)', trend: 'down' },
      { metric: '$94,000', label: 'Monthly Ad Revenue Generated', trend: 'up' },
      { metric: '3.8%', label: 'Conversion Rate', trend: 'up' },
    ],
    tags: ['Meta Ads', 'Performance Marketing', 'Advantage+ ASC', 'Creative Testing', 'A/B Testing'],
    coverImage:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Account Restructure with CBO & ASC Campaigns',
      '30+ Custom Ad Creatives (Statics & Reels/Carousels)',
      'Custom Conversion Tracking & GA4 Integration',
      'Post-Purchase Email Retention Flow Setup',
    ],
    testimonial: {
      quote:
        'Our ad performance was completely turned around in under 30 days. Habibur is both analytically sharp and deeply creative.',
      author: 'Elena Vance',
      role: 'Founder, GlowPure Cosmetics',
    },
  },
  {
    id: 'tech-brand-identity',
    title: 'Complete Visual Identity & Ad Kit for Fintech Startup',
    category: 'graphics',
    client: 'NovaPay Global',
    industry: 'Financial Technology',
    year: '2023 - 2024',
    summary:
      'Designed a sleek, trustworthy, and modern brand identity package, complete with logo, typography, color system, and 50+ social marketing assets.',
    challenge:
      'As a new fintech platform, NovaPay lacked credibility. Their initial visuals looked fragmented and amateur, causing high hesitation among financial users.',
    strategy:
      'Crafted an authoritative brand system inspired by security and speed. Developed a minimalist geometric emblem, unified design tokens, social media templates, and marketing presentation decks.',
    results: [
      { metric: '100%', label: 'Brand Consistency Score', trend: 'up' },
      { metric: '50+', label: 'Multi-Channel Asset Pack', trend: 'up' },
      { metric: '+82%', label: 'Social Engagement Rate', trend: 'up' },
      { metric: '$2.1M', label: 'Seed Round Closed with New Deck', trend: 'up' },
    ],
    tags: ['Brand Identity', 'Logo Design', 'Vector Illustration', 'Marketing Deck', 'Social Banners'],
    coverImage:
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Brand Style Guide & Vector Logo System',
      'Typography & High-Contrast Color Palette',
      'Figma Social Media Carousel & Story Templates',
      'Pitch Deck & Investor Presentation Layout',
    ],
    testimonial: {
      quote:
        'The branding Habibur built gave our startup immediate institutional credibility. Investors and clients constantly compliment our visual polish.',
      author: 'Arjun Mehta',
      role: 'Co-Founder & CEO, NovaPay',
    },
  },
  {
    id: 'local-seo-services',
    title: 'Local SEO Dominance: #1 Maps & Organic Ranking for Multi-Location Clinic',
    category: 'seo',
    client: 'Apex Wellness Clinics',
    industry: 'Healthcare & Local Services',
    year: '2024',
    summary:
      'Ranked 3 physical clinic locations in the coveted Google Maps 3-Pack and captured top organic search positions for high-value patient terms.',
    challenge:
      'Competitors were monopolizing the local search map pack while Apex suffered from inconsistent NAP citations and zero optimized location pages.',
    strategy:
      'Audited and cleansed over 90 local business citations, localized page schema, launched patient review generation campaigns, and built hyper-targeted local landing pages.',
    results: [
      { metric: '#1 Rank', label: 'In Google Local 3-Pack', trend: 'up' },
      { metric: '+290%', label: 'Direct Phone Calls from GBP', trend: 'up' },
      { metric: '3.4x', label: 'Monthly Appointment Bookings', trend: 'up' },
      { metric: '4.9 ⭐', label: '180+ Real Patient Reviews', trend: 'up' },
    ],
    tags: ['Local SEO', 'Google Business Profile', 'Citations', 'Local Schema', 'Healthcare'],
    coverImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Google Business Profile Optimization & Geo-Tagging',
      '90+ Verified Local Directory Citations (Yelp, YellowPages, etc.)',
      'Local Geo-Targeted Service Landing Pages',
      'Automated SMS Review Collection Workflow',
    ],
  },
];

export const graphicDesignShowcase: GraphicDesignItem[] = [
  {
    id: 'gd-1',
    title: 'Fintech Mobile & Brand System',
    category: 'Branding & Logo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Modern geometric mark conveying swift digital transfers and institutional security.',
    software: ['Illustrator', 'Figma'],
    client: 'NovaPay Global',
  },
  {
    id: 'gd-2',
    title: 'High-Converting E-Commerce Social Carousel',
    category: 'Social Media Creatives',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Story-driven 5-slide educational carousel for skincare routine boosting CTR by 64%.',
    software: ['Photoshop', 'Canva Pro'],
    client: 'GlowPure Skincare',
  },
  {
    id: 'gd-3',
    title: 'Eco-Friendly Product Packaging & Labeling',
    category: 'Packaging & Print',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Minimalist sustainable packaging layout with tactile kraft paper textures and clean typography.',
    software: ['Illustrator', 'InDesign'],
    client: 'EarthBloom Botanicals',
  },
  {
    id: 'gd-4',
    title: 'Black Friday Paid Ad Promo Banners',
    category: 'Ad Banners',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    description: 'High-contrast promotional banner campaign across 8 standard IAB display dimensions.',
    software: ['Photoshop', 'Illustrator'],
    client: 'Nordic Gear',
  },
  {
    id: 'gd-5',
    title: 'Minimalist Coffee Roasters Identity',
    category: 'Branding & Logo',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    description: 'Artisanal logo mark, packaging labels, and coffee bag mockups with refined typography.',
    software: ['Illustrator', 'Photoshop'],
    client: 'Roast & Steam Co.',
  },
  {
    id: 'gd-6',
    title: 'Tech Conference Infographic & Rollup Banner',
    category: 'Packaging & Print',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'Vector data visualization infographic showcasing AI infrastructure adoption metrics.',
    software: ['Illustrator', 'Figma'],
    client: 'Apex Tech Summit',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Deep Audit',
    description:
      'We analyze your current site performance, Google rankings, ad spend efficiency, competitors, and visual brand presence to uncover hidden revenue bottlenecks.',
    deliverables: ['Competitor Benchmark Report', 'Technical SEO Audit', 'Ad Account Health Score'],
  },
  {
    step: 2,
    title: 'Strategy & Creative Blueprint',
    description:
      'We formulate a custom action plan tailored to your business goals—defining target keyword clusters, ad funnel architecture, and brand creative angles.',
    deliverables: ['Keyword Master Sheet', 'Media Buying Plan & Budget Forecast', 'Design Moodboard'],
  },
  {
    step: 3,
    title: 'Execution & Campaign Launch',
    description:
      'We implement on-page SEO changes, configure high-converting paid ad campaigns, design premium creatives, and establish conversion tracking.',
    deliverables: ['Live Ad Campaigns', 'On-Page SEO Implemented', 'Complete Brand Graphic Assets'],
  },
  {
    step: 4,
    title: 'Optimization & Rapid Scaling',
    description:
      'Through continuous A/B testing, search query harvesting, and ad creative refreshes, we scale winning strategies while driving down acquisition costs.',
    deliverables: ['Weekly Transparent Reports', 'Continuous A/B Creative Tests', 'Monthly Strategic Review'],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Lindberg',
    role: 'Growth Director',
    company: 'Nordic Lifestyle E-Commerce',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content:
      'Habibur took our organic traffic from under 4,000 monthly visitors to over 22,000 in six months. His understanding of technical SEO and search intent is second to none.',
    rating: 5,
    highlight: '+340% Organic Traffic',
    serviceType: 'SEO Strategy & Technical Audit',
  },
  {
    id: 't-2',
    name: 'Elena Vance',
    role: 'Founder & CEO',
    company: 'GlowPure Skincare',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content:
      'Before Habibur, our Facebook ad ROAS was hovering around 1.5x. He not only revamped our targeting structure but created brand-new ad creatives that pushed our blended ROAS past 4.5x!',
    rating: 5,
    highlight: '4.5x ROAS on Meta Ads',
    serviceType: 'Paid Media & Creative Ads',
  },
  {
    id: 't-3',
    name: 'Arjun Mehta',
    role: 'Co-Founder',
    company: 'NovaPay Financial Tech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content:
      'Habibur created our company logo, brand guidelines, and pitch deck. The sleek aesthetics and professional polish helped us gain trust with early banking partners and close our seed round.',
    rating: 5,
    highlight: 'Complete Brand System',
    serviceType: 'Brand Identity & Graphic Design',
  },
];

export const faqItems = [
  {
    question: 'How quickly can I see results from SEO vs. Digital Marketing?',
    answer:
      'Paid advertising (Meta Ads, Google Ads) generates immediate traffic and sales within 24 to 48 hours of launch. SEO is a compounding long-term growth asset that typically demonstrates significant ranking jumps and organic traffic velocity within 60 to 90 days.',
  },
  {
    question: 'Do you design custom graphics for ads and branding from scratch?',
    answer:
      'Yes, absolutely! Every single visual asset, vector logo, and ad creative is custom-designed using Adobe Illustrator, Photoshop, and Figma tailored to your specific brand identity and target audience psychology.',
  },
  {
    question: 'Can you work on an existing ad account or website without breaking anything?',
    answer:
      'Yes. For existing accounts and websites, I always run a non-destructive audit first, document existing baselines, and test optimizations iteratively to protect existing revenue streams.',
  },
  {
    question: 'How do we collaborate and communicate during a project?',
    answer:
      'We communicate seamlessly via Slack, WhatsApp, Google Meet, or Email. You receive live dashboard tracking, transparent bi-weekly reports, and direct access to review work before anything goes live.',
  },
];
