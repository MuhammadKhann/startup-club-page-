export interface TrackInfo {
  id: string;
  name: string;
  leadIcon: string;
  kicker: string;
  tagline: string;
  accentColor: string; // Tailwind color class or hex
  borderHover: string;
  bgGlow: string;
  skills: string[];
  quote: string;
  openRoles: string[];
  tools: string[];
  upcomingSprints: string[];
}

export const TRACKS: TrackInfo[] = [
  {
    id: 'tech-ai',
    name: 'TECH & AI',
    leadIcon: 'Zap',
    kicker: 'BUILD THE PRODUCT',
    tagline: 'Turn ideas into things people can actually use.',
    accentColor: '#15AEEF',
    borderHover: 'hover:border-[#15AEEF]',
    bgGlow: 'from-[#15AEEF]/20 to-transparent',
    skills: ['MVPs', 'AI tools', 'Websites', 'Automation', 'Platforms', 'Hackathons'],
    quote: 'Turn ideas into things people can actually use.',
    openRoles: [
      'Full-Stack Web & Mobile Builders',
      'AI / LLM Workflow Engineers',
      'Backend & API Systems Devs',
      'Technical Product Leads',
    ],
    tools: ['Next.js / React', 'Python & FastAPI', 'Tailwind CSS', 'Gemini & Claude APIs', 'Supabase / Firebase', 'Docker'],
    upcomingSprints: [
      'AU Campus Student Hub MVP (7-day build)',
      'Autonomous Exam Schedule & Grade Notifier',
      'AI Study Companion for Multan Campus',
    ],
  },
  {
    id: 'media-design',
    name: 'MEDIA & DESIGN',
    leadIcon: 'Palette',
    kicker: 'BUILD THE BRAND',
    tagline: 'Make projects impossible to ignore.',
    accentColor: '#19E4F2',
    borderHover: 'hover:border-[#19E4F2]',
    bgGlow: 'from-[#19E4F2]/20 to-transparent',
    skills: ['Design', 'Video', 'Reels', 'Creative Direction', 'Content', 'Campaigns'],
    quote: 'Make projects impossible to ignore.',
    openRoles: [
      'UI/UX & Product Designers',
      'Motion Designers & Reel Creators',
      'Brand Identity Strategists',
      'Visual Storytellers & Photographers',
    ],
    tools: ['Figma', 'After Effects / Premiere', 'Blender / Spline 3D', 'Canva Pro', 'Davinci Resolve'],
    upcomingSprints: [
      'The Rebuild Visual Identity Package',
      'Student Founder Spotlight Mini-Doc Series',
      'HackSprint Brand Assets & Merch Kits',
    ],
  },
  {
    id: 'pr-corporate',
    name: 'PR & CORPORATE',
    leadIcon: 'Briefcase',
    kicker: 'BUILD THE NETWORK',
    tagline: 'Connect campus ambition with the outside world.',
    accentColor: '#F59E0B',
    borderHover: 'hover:border-[#F59E0B]',
    bgGlow: 'from-[#F59E0B]/20 to-transparent',
    skills: ['Sponsorships', 'Partnerships', 'Outreach', 'Industry Relations'],
    quote: 'Connect campus ambition with the outside world.',
    openRoles: [
      'Corporate Sponsorship Leads',
      'Startup Ecosystem Liaisons',
      'Media & Press Coordinators',
      'Alumni & Angel Investor Relations',
    ],
    tools: ['Pitch Decks & Notion', 'LinkedIn Sales Nav', 'CRM Automation', 'Google Workspace'],
    upcomingSprints: [
      'PKR 500k+ Hackathon Prize Pool Sponsorship Drive',
      'Top 10 Tech Companies Multan Chapter Outreach',
      'AU Startup Club Advisory Council Setup',
    ],
  },
  {
    id: 'operations-events',
    name: 'OPERATIONS & EVENTS',
    leadIcon: 'Settings',
    kicker: 'MAKE IT HAPPEN',
    tagline: 'Ideas mean nothing without execution.',
    accentColor: '#FF6A19',
    borderHover: 'hover:border-[#FF6A19]',
    bgGlow: 'from-[#FF6A19]/20 to-transparent',
    skills: ['Hackathons', 'Pitch Nights', 'Workshops', 'Event Operations'],
    quote: 'Ideas mean nothing without execution.',
    openRoles: [
      'Hackathon Directors & Stage Managers',
      'Sprint Logistics & Ops Specialists',
      'Participant Experience Curators',
      'Budget & Resource Coordinators',
    ],
    tools: ['Trello & ClickUp', 'Luma / Eventbrite', 'Live Audio/Visual Systems', 'Financial Spreadsheets'],
    upcomingSprints: [
      'AU 36-Hour HackSprint 2026',
      'Monthly Midnight AI Build Nights',
      'Demo Day & Investor Pitch Arena',
    ],
  },
];

export const SPRINT_EXPERIENCES = [
  {
    title: 'Startup MVP Sprints',
    desc: 'Students take an idea from zero to working prototype within 7 to 14 days with peer builders.',
    tag: 'Rapid Prototyping',
    metric: '14 Days to Ship',
  },
  {
    title: 'AI Build Nights',
    desc: 'Teams create practical AI tools, agentic workflows, and micro-SaaS prototypes under time pressure.',
    tag: 'Hands-on AI',
    metric: 'Overnight Sprints',
  },
  {
    title: 'Campus Hackathons',
    desc: 'High-octane technical challenges, cross-discipline collaboration, and campus-wide competition.',
    tag: 'Competitive Build',
    metric: 'PKR Prizes & Mentors',
  },
  {
    title: 'Founder Sessions',
    desc: 'Direct, unfiltered conversations with real tech entrepreneurs, VC operators, and product architects.',
    tag: 'Real Industry',
    metric: 'Zero Cliché Advice',
  },
  {
    title: 'Pitch Nights',
    desc: 'Students learn how to articulate, defend, and market ideas in front of harsh, constructive critique.',
    tag: 'High Stakes',
    metric: 'Investor Readiness',
  },
  {
    title: 'Brand Challenges',
    desc: 'Design and marketing squads solve real creative and growth problems for actual local businesses.',
    tag: 'Live Client Work',
    metric: 'Direct Portfolio Proof',
  },
];

export const FAQS = [
  {
    q: 'Who can join?',
    a: 'Students from any Air University Multan department. Whether you are in CS, Software Engineering, Cyber Security, Business Administration, Mathematics, Electrical, or English — if you are curious, have ownership, and want to build, you belong here.',
  },
  {
    q: 'Which semesters can apply?',
    a: 'From 1st semester through 8th (final year). 1st years get to start early and find their tribe; middle semesters build momentum and portfolio weight; final-year students graduate with tangible proof rather than just a transcript.',
  },
  {
    q: 'Do I need startup experience?',
    a: 'No. You do not need to have founded a company or built an app before. We care infinitely more about initiative, grit, high curiosity, and a bias for execution over endless talking.',
  },
  {
    q: 'Can non-CS students join Tech & AI?',
    a: 'Yes. Track placement depends strictly on your curiosity, current skills, and desire to learn, not what your degree title says. Many of the best builders come from non-technical backgrounds who learned modern AI and no-code/low-code tools.',
  },
  {
    q: 'Is this only for people who want to become founders?',
    a: 'No. Designers, engineers, growth marketers, operators, and future corporate leaders all benefit massively from working on real projects. Tech companies hire people who can ship, not people with generic certificates.',
  },
  {
    q: 'Can I apply for the Core Council?',
    a: 'Yes! Core Council positions are open for candidates who want to lead tracks, direct hackathons, manage sponsorships, and shape the rebuilding of student tech culture at Air University Multan. Selection is based on commitment and execution ability.',
  },
];

export const DEPARTMENTS = [
  'Computer Science (CS)',
  'Software Engineering (SE)',
  'Cyber Security (CYS)',
  'Artificial Intelligence & Data Science',
  'Business Administration (BBA)',
  'Accounting & Finance (BS AF)',
  'Mathematics',
  'Electrical Engineering (EE)',
  'English & Humanities',
  'Other / Interdisciplinary',
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
