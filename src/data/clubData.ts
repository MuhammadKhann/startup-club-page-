export interface TrackInfo {
  id: string;
  name: string;
  leadIcon: string;
  discipline: string;
  kicker: string;
  tagline: string;
  accentColor: string; // Hex color
  borderHover: string;
  bgGlow: string;
  skills: string[];
  quote: string;
  idealFor: string[];
  openRoles: string[];
  tools: string[];
  upcomingSprints: string[];
}

export const OFFICIAL_LINKS = {
  RECRUITMENT_FORM: 'https://forms.gle/frAYWhapYd1fbd6o7',
  WHATSAPP_COMMUNITY: 'https://chat.whatsapp.com/IL8LVPRgfz51E2S9zb1DQ6',
};

export const TRACKS: TrackInfo[] = [
  {
    id: 'venture-strategy',
    name: 'VENTURE ACCELERATION',
    leadIcon: 'TrendingUp',
    discipline: 'Business, Economics & Finance',
    kicker: 'ARCHITECT THE BUSINESS',
    tagline: 'Turn market problems into scalable business models and viable unit economics.',
    accentColor: '#00F0FF',
    borderHover: 'hover:border-[#00F0FF]',
    bgGlow: 'from-[#00F0FF]/15 to-transparent',
    skills: ['Business Models', 'Market Validation', 'Unit Economics', 'Financial Modeling', 'GTM Strategy', 'Pitch Decks'],
    quote: 'Ideas without business models are hobbies. We build companies with market traction.',
    idealFor: ['Business Administration (BBA)', 'Economics & Finance', 'Aspiring Founders & CEOs'],
    openRoles: [
      'Venture Associate & Market Researcher',
      'Chief of Staff / Startup Co-Founder',
      'Financial Modeling & Pricing Analyst',
      'GTM & Growth Strategist',
    ],
    tools: ['Notion Pitch Vault', 'Excel & Financial Projections', 'Miro Canvas', 'Stripe Metrics', 'Pitch Deck Studio'],
    upcomingSprints: [
      'Campus Problem Validation & User Interview Blitz (100+ students interviewed)',
      'FinTech & EdTech Unit Economics Teardown',
      'Seed Pitch Deck Sprint for Multan Angel Network',
    ],
  },
  {
    id: 'tech-product',
    name: 'TECH & PRODUCT ENGINEERING',
    leadIcon: 'Cpu',
    discipline: 'Computer Science, AI & Engineering',
    kicker: 'ENGINEER THE PRODUCT',
    tagline: 'Build production-ready MVPs, intelligent AI agents, and frictionless user experiences.',
    accentColor: '#0070F3',
    borderHover: 'hover:border-[#0070F3]',
    bgGlow: 'from-[#0070F3]/15 to-transparent',
    skills: ['Rapid MVPs', 'AI Agents & LLMs', 'Full-Stack Apps', 'System Architecture', 'Mobile Apps', 'Hackathons'],
    quote: 'Stop building toy classroom assignments. Ship software people pay to use.',
    idealFor: ['Computer Science', 'Software Engineering', 'Cyber Security', 'AI & Data Science'],
    openRoles: [
      'Full-Stack Founding Engineer',
      'AI / LLM Systems Architect',
      'Mobile App Developer (React Native/Flutter)',
      'Backend & API Infrastructure Lead',
    ],
    tools: ['Next.js & React', 'FastAPI & Python', 'Supabase / PostgreSQL', 'Gemini & Claude APIs', 'Tailwind CSS', 'Vercel'],
    upcomingSprints: [
      'AU Student Hub MVP (7-Day Sprint)',
      'AI Examination & Timetable Assistant',
      'Campus Micro-Marketplace Prototype',
    ],
  },
  {
    id: 'media-creative',
    name: 'MEDIA & CREATIVE DIRECTION',
    leadIcon: 'Sparkles',
    discipline: 'Design, Arts, Humanities & Media',
    kicker: 'CRAFT THE BRAND & EXPERIENCE',
    tagline: 'Transform complex ventures into irresistible brands, intuitive UI/UX, and viral narratives.',
    accentColor: '#9D4EDD',
    borderHover: 'hover:border-[#9D4EDD]',
    bgGlow: 'from-[#9D4EDD]/15 to-transparent',
    skills: ['UI/UX Design Systems', 'Visual Brand Identity', 'Motion Graphics', 'Short-form Video', 'Product Storytelling', 'Copywriting'],
    quote: 'Great products die in obscurity without world-class design and compelling stories.',
    idealFor: ['UI/UX Designers', 'Visual Artists', 'English & Content Strategists', 'Videographers'],
    openRoles: [
      'Lead UI/UX Product Designer',
      'Brand Identity & Motion Art Director',
      'Social Video Producer & Reel Specialist',
      'Conversion Copywriter & Storyteller',
    ],
    tools: ['Figma & FigJam', 'After Effects & Premiere', 'Blender 3D', 'Spline', 'Typefully & Substack'],
    upcomingSprints: [
      'AU Startup Club 2026 Brand Design System',
      'Founder Documentary Mini-Series (Season 1)',
      'High-Conversion Landing Page Kits for Cohort Startups',
    ],
  },
  {
    id: 'corporate-capital',
    name: 'CORPORATE RELATIONS & CAPITAL',
    leadIcon: 'Briefcase',
    discipline: 'Finance, PR & Communications',
    kicker: 'SECURE CAPITAL & ALLIANCES',
    tagline: 'Connect campus founders to regional venture funds, industry sponsorships, and enterprise partnerships.',
    accentColor: '#F59E0B',
    borderHover: 'hover:border-[#F59E0B]',
    bgGlow: 'from-[#F59E0B]/15 to-transparent',
    skills: ['Corporate Sponsorships', 'VC & Angel Outreach', 'Partnership Deals', 'Media Relations', 'Contract Negotiation'],
    quote: 'We bridge the gap between academic corridors and Pakistan’s premier startup ecosystem.',
    idealFor: ['Finance & Accounting', 'Business Administration', 'Public Relations & Marketing'],
    openRoles: [
      'Head of Corporate Sponsorships',
      'VC & Investor Relations Liaison',
      'Strategic Enterprise Partnership Lead',
      'Media & Press Communications Officer',
    ],
    tools: ['HubSpot CRM', 'LinkedIn Sales Navigator', 'Notion Partner Board', 'Google Workspace', 'Pitch Decks'],
    upcomingSprints: [
      'PKR 750,000+ HackSprint Prize Pool Campaign',
      'Top 20 Tech Firms Corporate Alliance Tour',
      'AU Startup Club Advisory Council Induction',
    ],
  },
  {
    id: 'campus-operations',
    name: 'CAMPUS OPERATIONS & EVENTS',
    leadIcon: 'Target',
    discipline: 'All Departments / Operations Specialists',
    kicker: 'ORCHESTRATE THE ECOSYSTEM',
    tagline: 'Direct flagship venture summits, 36-hour hackathons, pitch arenas, and seamless cohort experiences.',
    accentColor: '#FF6A19',
    borderHover: 'hover:border-[#FF6A19]',
    bgGlow: 'from-[#FF6A19]/15 to-transparent',
    skills: ['Flagship Event Production', 'Cohort Program Management', 'Pitch Arena Logistics', 'Live Stage Directing', 'Budget Execution'],
    quote: 'Strategy without flawless operational execution is just wishful thinking.',
    idealFor: ['Project Managers', 'Operations Enthusiasts', 'Event Directors from Any Faculty'],
    openRoles: [
      'Flagship Summit Director',
      'Cohort Operations Manager',
      'Live Stage & Audio-Visual Producer',
      'Participant Experience & Logistics Lead',
    ],
    tools: ['ClickUp & Notion', 'Luma & Eventbrite', 'Live Broadcast Hardware', 'Budget Ledgers', 'Slack'],
    upcomingSprints: [
      'AU 36-Hour National HackSprint 2026',
      'Monthly Midnight AI & Venture Build Nights',
      'Annual Demo Day & Investor Pitch Arena',
    ],
  },
];

export const ACCELERATOR_PHASES = [
  {
    phase: '01',
    title: 'Market Validation & Problem Discovery',
    duration: 'Weeks 1–2',
    discipline: 'Business + Creative',
    desc: 'Students identify real market pain points, conduct customer discovery interviews, evaluate competitors, and craft initial business model canvases.',
    deliverable: 'Validated Problem Statement & Customer Personas',
  },
  {
    phase: '02',
    title: 'Cross-Disciplinary Squad Assembly',
    duration: 'Weeks 3–4',
    discipline: 'Business + Tech + Design',
    desc: 'Coders meet marketers and business analysts. Teams co-found venture squads where complementary skills guarantee fast execution.',
    deliverable: 'Co-Founder Charter & MVP Roadmap',
  },
  {
    phase: '03',
    title: 'Rapid MVP Prototyping & GTM Launch',
    duration: 'Weeks 5–8',
    discipline: 'Tech + Design + Corporate',
    desc: 'Engineers build the product core, designers build high-converting UI/UX, and business leads execute guerrilla marketing to gain initial active users.',
    deliverable: 'Live Production MVP & First 100 Users',
  },
  {
    phase: '04',
    title: 'Demo Day & Capital Connection',
    duration: 'Weeks 9–10',
    discipline: 'All Disciplines',
    desc: 'Squads pitch live before tech CEOs, angel investors, and venture funds. Exceptional projects receive incubation grants and acceleration backing.',
    deliverable: 'Audited Pitch Deck, Investor Term Sheet Ready',
  },
];

export const SQUAD_SIMULATOR = [
  {
    faculty: 'Business & Management',
    tag: 'BBA / Accounting / Finance',
    badge: 'The Strategist & Operator',
    role: 'Venture Co-Founder & CEO / Chief of Staff',
    responsibilities: [
      'Define revenue model, pricing tiers, and unit economics',
      'Validate customer Willingness-To-Pay (WTP)',
      'Manage team milestones and sprint operations',
      'Lead pitch delivery to corporate partners and investors',
    ],
    whatYouBuild: 'Financial Model, Investor Pitch Deck, Customer Acquisition Plan',
  },
  {
    faculty: 'Computer Science & Software',
    tag: 'CS / SE / Cyber / AI',
    badge: 'The Technical Architect',
    role: 'Founding Engineer & CTO',
    responsibilities: [
      'Architect robust, scalable web and mobile software',
      'Integrate LLM reasoning, APIs, and modern databases',
      'Deploy CI/CD production pipelines with zero downtime',
      'Transform business requirements into working software',
    ],
    whatYouBuild: 'Production Web App, AI Backend Pipeline, Live API Infrastructure',
  },
  {
    faculty: 'Design & Humanities',
    tag: 'Arts / English / Visual Media',
    badge: 'The Brand & Product Visionary',
    role: 'Chief Design Officer / Head of Growth',
    responsibilities: [
      'Design seamless, high-retention user journeys in Figma',
      'Establish memorable visual brand guidelines and logos',
      'Produce cinematic product teasers, reels, and visual drops',
      'Craft persuasive copywriting that converts visitors to users',
    ],
    whatYouBuild: 'Design System, High-Converting Landing Page, Cinematic Video Series',
  },
  {
    faculty: 'Economics & Sciences',
    tag: 'Economics / Math / Applied Science',
    badge: 'The Quantitative Analyst',
    role: 'Head of Data & Market Intelligence',
    responsibilities: [
      'Conduct statistical TAM/SAM/SOM market sizing',
      'Analyze customer retention cohorts and churn patterns',
      'Build algorithmic forecasting models',
      'Structure investor metrics and traction benchmarks',
    ],
    whatYouBuild: 'Cohort Retention Dashboards, Market Sizing Report, Growth Analytics',
  },
];

export const SPRINT_EXPERIENCES = [
  {
    title: 'Venture Incubation Sprints',
    desc: 'Students take a market hypothesis from customer discovery to validated business model in 14 days.',
    tag: 'Business & Strategy',
    metric: '14-Day Validation',
  },
  {
    title: 'Midnight Product Build Nights',
    desc: 'Cross-functional teams design, code, and deploy functional tools and agentic workflows in overnight lock-ins.',
    tag: 'Engineering & Design',
    metric: 'Overnight Launch',
  },
  {
    title: 'AU National HackSprint',
    desc: 'Air University Multan flagship competition uniting tech builders, business planners, and creative storytellers.',
    tag: 'Interdisciplinary',
    metric: 'PKR 750K+ Prize Pool',
  },
  {
    title: 'Founder & VC Closed Sessions',
    desc: 'Direct, unfiltered strategy clinics with venture capitalists, startup founders, and high-growth operators.',
    tag: 'Capital & Mentorship',
    metric: 'Zero Theoretical Fluff',
  },
  {
    title: 'Shark Pitch Arena',
    desc: 'Students defend business models, customer acquisition costs, and defensibility before real angel investors.',
    tag: 'Pitch & Capital',
    metric: 'Live Investment Term Sheets',
  },
  {
    title: 'Brand & GTM Challenges',
    desc: 'Media and marketing squads execute growth sprints for real brands, driving qualified organic conversions.',
    tag: 'Creative & Growth',
    metric: 'Demonstrated ROI Portfolio',
  },
];

export const FAQS = [
  {
    q: 'I am a Business / BBA / Economics student. What will I do in this club?',
    a: 'You are the co-founder who turns code into a viable business. In every startup squad, business students lead market validation, unit economics, revenue models, customer acquisition strategy, and investor pitch decks. A startup cannot scale without business leadership.',
  },
  {
    q: 'Do I need to know how to code to join?',
    a: 'Absolutely not. Over 60% of founding a startup has nothing to do with writing code: it requires market insight, product design, financial modeling, storytelling, sales, and operations. We pair business minds with technical engineers so each co-founder shines in their domain.',
  },
  {
    q: 'Which departments and semesters can apply?',
    a: 'Every single department at Air University Multan — including Business Administration, Accounting & Finance, Economics, English, Mathematics, Computer Science, Software Engineering, and Cyber Security. Students from 1st semester through 8th semester are eligible.',
  },
  {
    q: 'What is the difference between Active Cohort and Core Council?',
    a: 'Active Cohort members join multidisciplinary startup squads to build, design, or market ventures. Core Council members take executive ownership of club leadership: directing tracks, managing corporate sponsorships, running flagships, and shaping campus innovation strategy.',
  },
  {
    q: 'Do I already need an idea or a team before applying?',
    a: 'No. Our accelerator model starts with problem discovery and cross-disciplinary squad matching. You will find like-minded co-founders during our kickoff sprints.',
  },
  {
    q: 'What is the time commitment expected?',
    a: 'For Active Cohort builders, expect 4–6 focused hours per week dedicated to your squad sprints. For Core Council leadership, expect 8–10 hours per week of high-ownership management.',
  },
];

export const DEPARTMENTS = [
  'Business Administration (BBA)',
  'Accounting & Finance (BS AF)',
  'Economics & Commerce',
  'Computer Science (CS)',
  'Software Engineering (SE)',
  'Cyber Security (CYS)',
  'Artificial Intelligence & Data Science',
  'Mathematics & Statistics',
  'Electrical Engineering (EE)',
  'English, Arts & Humanities',
  'Other / Interdisciplinary Faculty',
];

export const SEMESTERS = [
  '1st Semester (Freshman)',
  '2nd Semester',
  '3rd Semester (Sophomore)',
  '4th Semester',
  '5th Semester (Junior)',
  '6th Semester',
  '7th Semester (Senior)',
  '8th Semester (Graduating)',
];
