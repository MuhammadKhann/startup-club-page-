import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroVisual } from './components/HeroVisual.tsx';
import { RocketLogo } from './components/RocketLogo.tsx';
import { ApplicationModal } from './components/ApplicationModal.tsx';
import { WhatsAppModal } from './components/WhatsAppModal.tsx';
import { TrackDetailModal } from './components/TrackDetailModal.tsx';
import { OutputCollage } from './components/OutputCollage.tsx';
import { SquadMatcher } from './components/SquadMatcher.tsx';
import {
  TRACKS,
  ACCELERATOR_PHASES,
  SPRINT_EXPERIENCES,
  FAQS,
  TrackInfo,
  OFFICIAL_LINKS,
} from './data/clubData.ts';

export default function App() {
  // Modal states
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [selectedTrackDetail, setSelectedTrackDetail] = useState<TrackInfo | null>(null);
  const [prefilledTrack, setPrefilledTrack] = useState<string>('venture-strategy');
  const [prefilledRoleTier, setPrefilledRoleTier] = useState<'cohort' | 'council'>('cohort');

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Handlers
  const handleOpenApply = (trackId?: string, tier: 'cohort' | 'council' = 'cohort') => {
    if (trackId) setPrefilledTrack(trackId);
    setPrefilledRoleTier(tier);
    setApplyModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    setWhatsAppModalOpen(true);
  };

  const tickerItems = [
    'VALIDATE PROBLEM',
    'ARCHITECT MODEL',
    'DESIGN EXPERIENCE',
    'BUILD MVP',
    'GTM SPRINT',
    'REVENUE',
    'SCALE VENTURE',
  ];

  const whoWeLookForTicker = [
    'BUSINESS STRATEGISTS',
    'ENGINEERS & CODERS',
    'UI/UX DESIGNERS',
    'FINANCIAL ANALYSTS',
    'GROWTH MARKETERS',
    'OPERATORS',
    'CREATIVE DIRECTORS',
    'FOUNDERS',
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white overflow-x-hidden selection:bg-[#00F0FF] selection:text-black">
      {/* 1. TOP NAVIGATION */}
      <Navbar onOpenApply={() => handleOpenApply()} />

      <main className="relative pt-24 sm:pt-28">
        {/* 2. HERO SECTION (High-Impact Multidisciplinary Value Proposition) */}
        <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 overflow-hidden">
          {/* Subtle cosmic tech background grid */}
          <div className="absolute inset-0 tech-grid opacity-50 pointer-events-none" />
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, #00F0FF 0%, #0070F3 45%, transparent 75%)',
            }}
          />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Column: Multidisciplinary Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Electric cyan recruitment pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F0FF]/40 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-mono font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                <span>VENTURE RECRUITMENT OPEN — 2026/27</span>
              </div>

              {/* Campus Kicker */}
              <div className="font-mono text-xs sm:text-sm text-zinc-400 tracking-widest uppercase">
                AIR UNIVERSITY MULTAN · CROSS-DISCIPLINARY ACCELERATOR
              </div>

              {/* Giant Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] uppercase text-white font-sans text-balance">
                BUILD. LAUNCH. SCALE. <br />
                <span className="text-[#00F0FF] drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                  BEFORE GRADUATION.
                </span>
              </h1>

              {/* Punchy Subhead */}
              <p className="text-lg sm:text-xl font-semibold text-zinc-100 max-w-xl">
                Stop collecting titles. Start building real ventures that matter.
              </p>

              {/* Multidisciplinary Supporting Narrative */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                AU Startup Club is the venture launchpad where <strong>Business strategists, Engineers, UI/UX designers, Marketers, and Corporate operators</strong> from every department co-found scalable startups. Test ideas against the market, launch working products, and graduate with equity and proof of execution.
              </p>

              {/* Dual Action Conversion CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-[#00F0FF] hover:bg-[#0070F3] text-black hover:text-white font-extrabold text-sm tracking-wide transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_30px_rgba(0,112,243,0.7)] flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  APPLY NOW — 90 SEC →
                </a>

                <a
                  href={OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:border-[#00F0FF]/40 text-center"
                >
                  JOIN WHATSAPP COMMUNITY ↗
                </a>

                <button
                  onClick={() => handleOpenApply()}
                  className="text-xs font-mono text-zinc-400 hover:text-[#00F0FF] underline underline-offset-4 py-2 sm:py-0 text-center cursor-pointer"
                >
                  (Or fast in-app form)
                </button>
              </div>

              {/* Inclusivity note */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs font-mono text-zinc-400 pt-1">
                <span className="text-[#00F0FF]">✦ Open to:</span>
                <span>BBA & Economics</span>
                <span className="text-zinc-600">·</span>
                <span>CS & Engineering</span>
                <span className="text-zinc-600">·</span>
                <span>Arts & Media</span>
                <span className="text-zinc-600">·</span>
                <span>All Semesters</span>
              </div>
            </div>

            {/* Right Column: 3D Rocket Insignia with Venture Milestone Nodes */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* MOVING TICKER: Universal Venture Lifecycle */}
        <div className="border-y border-white/10 bg-[#070709] py-3 overflow-hidden select-none">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-400">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span className={item === 'REVENUE' ? 'text-[#00F0FF] font-bold' : item === 'SCALE VENTURE' ? 'text-[#FF6A19] font-bold' : 'hover:text-white transition-colors'}>
                  {item}
                </span>
                <span className="text-zinc-600">→</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3. IMMEDIATE CONTRAST SECTION (The Usual Society vs AU Startup Club) */}
        <section id="why-join" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                WHY WE'RE REBUILDING
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Most societies give you certificates. <br />
                <span className="text-[#00F0FF]">We give you ventures.</span>
              </h2>
            </div>

            {/* Two Column Contrast Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
              {/* Column 1: The Usual Society */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-6">
                <div className="border-b border-zinc-800 pb-4">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block">
                    The University Society Trap
                  </span>
                  <h3 className="text-xl font-bold text-zinc-400 mt-1">The Usual Student Club</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    'Empty presidential titles without real-world responsibilities',
                    'Attendance certificates that employers and venture funds ignore',
                    'Recycled lecture events and theoretical PowerPoint slides',
                    'Committee politics, bureaucratic drama & zero commercial value',
                    'Students graduate with blank portfolios and zero co-founder equity',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base">
                      <span className="font-mono text-red-500/80 font-bold text-base shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: AU Startup Club */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#09101c] border border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/10 rounded-bl-full pointer-events-none blur-xl" />

                <div className="border-b border-[#00F0FF]/30 pb-4 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-wider block font-semibold">
                      The Venture Accelerator
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">AU Startup Club</h3>
                  </div>
                  <span className="font-mono text-[10px] text-black bg-[#00F0FF] px-2 py-0.5 rounded font-bold uppercase">
                    Co-Founder Studio
                  </span>
                </div>

                <ul className="space-y-4">
                  {[
                    'Multidisciplinary startup squads (Business + Tech + Design + Corporate)',
                    'Customer discovery, validated unit economics & business model canvases',
                    'Production software MVPs, AI workflows, and live landing pages',
                    'Live pitch nights with tech CEOs, angel investors, and sponsor grants',
                    'Demonstrated traction, user growth, and verifiable portfolio links',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white text-sm sm:text-base font-medium">
                      <span className="font-mono text-[#00F0FF] font-bold text-base shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="text-center pt-6">
              <blockquote className="text-base sm:text-xl font-mono text-zinc-300 italic tracking-wide max-w-2xl mx-auto">
                "No corporate filler. No fluff. Real market validation. Real skin in the game."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 4. THE 4-PHASE ACCELERATOR MODEL */}
        <section id="accelerator" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black border-y border-white/10 overflow-hidden">
          <div className="max-w-6xl mx-auto space-y-14 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                THE ACCELERATOR LIFECYCLE
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
                How we take student ideas to market.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                A structured 10-week venture sprint modeled after top startup incubators. Business students validate the model; engineers architect the system; designers craft the brand.
              </p>
            </div>

            {/* 4 Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACCELERATOR_PHASES.map((p) => (
                <div
                  key={p.phase}
                  className="p-6 rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-[#00F0FF]/40 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-black text-[#00F0FF]">{p.phase}</span>
                      <span className="font-mono text-[11px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {p.duration}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-[#D8B4FE] block font-semibold uppercase">
                      {p.discipline}
                    </span>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">Sprint Deliverable</span>
                    <span className="text-xs font-mono text-zinc-200 block mt-0.5 font-medium">
                      {p.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MULTIDISCIPLINARY CO-FOUNDER SQUAD SIMULATOR */}
        <section id="squads" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <SquadMatcher onOpenApply={() => handleOpenApply()} />
          </div>
        </section>

        {/* 6. CHOOSE YOUR TRACK (The 5 Operational Tracks) */}
        <section id="tracks" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black/60 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                THE 5 OPERATIONAL TRACKS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Different faculties. One execution engine.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
                Every track operates as a specialized division within our accelerator. Business leads steer economics, engineers ship code, and creatives construct memorable brands.
              </p>
            </div>

            {/* 5 Interactive Track Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRACKS.map((track) => (
                <div
                  key={track.id}
                  onClick={() => setSelectedTrackDetail(track)}
                  className={`group relative p-7 rounded-2xl bg-[#0d0f17] border border-white/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${track.borderHover} hover:shadow-2xl hover:shadow-black`}
                >
                  <div className="space-y-4">
                    {/* Discipline Badge & Kicker */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                        {track.kicker}
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                        style={{ backgroundColor: track.accentColor }}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {track.name}
                      </h3>
                      <span className="text-xs font-mono text-[#00F0FF] block mt-1">
                        {track.discipline}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {track.tagline}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-400 pt-1">
                      {track.skills.slice(0, 4).map((skill, idx) => (
                        <span key={skill} className="flex items-center">
                          <span>{skill}</span>
                          {idx < 3 && <span className="text-zinc-600 mx-1.5">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                      View roles & sprints
                    </span>
                    <span
                      className="font-mono text-xs font-bold transition-all group-hover:translate-x-1 flex items-center gap-1"
                      style={{ color: track.accentColor }}
                    >
                      EXPLORE TRACK →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WHAT YOU'LL ACTUALLY DO & OUTPUT VAULT */}
        <section id="output" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                TANGIBLE EXECUTION OUTPUT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                This isn't a club you watch. <br />
                <span className="text-[#00F0FF]">It's a venture studio you build in.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Venture Progression Timeline */}
              <div className="lg:col-span-5 space-y-4">
                {[
                  {
                    step: 'DISCOVER',
                    role: 'Business + Economics',
                    desc: 'Interview 100+ target users and test customer willingness to pay.',
                    color: 'text-[#00F0FF]',
                  },
                  {
                    step: 'ASSEMBLE',
                    role: 'Cross-Faculty Squads',
                    desc: 'Form teams where business analysts, engineers, and designers unite.',
                    color: 'text-[#0070F3]',
                  },
                  {
                    step: 'SHIP',
                    role: 'Product + Design',
                    desc: 'Deploy production software and release cinematic visual brand assets.',
                    color: 'text-[#D8B4FE]',
                  },
                  {
                    step: 'MONETIZE',
                    role: 'Corporate + Finance',
                    desc: 'Secure enterprise pilot sponsorships, users, and customer pre-orders.',
                    color: 'text-amber-400',
                  },
                  {
                    step: 'PITCH',
                    role: 'All Disciplines',
                    desc: 'Deliver live pitches before angels, tech founders, and regional VCs.',
                    color: 'text-[#FF6A19]',
                  },
                ].map((item, idx, arr) => (
                  <div key={item.step} className="space-y-2">
                    <div className="p-4 rounded-xl bg-[#0d0f17] border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-mono text-sm font-extrabold tracking-wider ${item.color}`}>
                          {item.step}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">{item.role}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flex justify-center text-zinc-600 font-mono text-xs py-0.5">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column: Output Dashboard Collage */}
              <div className="lg:col-span-7">
                <OutputCollage />
              </div>
            </div>
          </div>
        </section>

        {/* 8. SPRINT EXPERIENCES */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black/40 border-t border-white/10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                VENTURE EXPERIENCES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                High-stakes sprints. Zero fluff.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                Sprint cycles structured to test your team's grit, commercial thinking, and speed to market.
              </p>
            </div>

            {/* Grid of Experiences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SPRINT_EXPERIENCES.map((exp) => (
                <div
                  key={exp.title}
                  className="p-6 rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#00F0FF] uppercase tracking-wider font-semibold">
                      {exp.tag}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">
                      {exp.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. EXECUTIVE COUNCIL RECRUITMENT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070b14] border-y border-[#00F0FF]/20">
          <div className="max-w-5xl mx-auto space-y-8 text-center sm:text-left">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF6A19] font-bold">
                EXECUTIVE COUNCIL 2026–27
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Don't just join the rebuild. <br />
                <span className="text-[#00F0FF]">Lead it.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                We are opening executive positions for ambitious students who can manage budgets, negotiate corporate partnerships, lead technical sprints, and direct national flagships.
              </p>
            </div>

            {/* Leadership Qualities */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                Executive Competencies We Value (Open Across All Departments):
              </span>
              <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                {[
                  'Commercial Acumen',
                  'High Ownership',
                  'Product Sense',
                  'Strategic Partnerships',
                  'Operational Rigor',
                  'Persuasive Storytelling',
                ].map((q) => (
                  <span
                    key={q}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-mono text-white"
                  >
                    ✦ {q}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Selection is evaluated strictly on execution, commitment, and leadership vision — never on your academic semester or department.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#FF6A19] hover:bg-[#ff8038] text-black font-extrabold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,106,25,0.4)] cursor-pointer text-center"
              >
                APPLY FOR EXECUTIVE COUNCIL (FORM) →
              </a>
              <button
                onClick={() => handleOpenApply(undefined, 'council')}
                className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold text-xs tracking-wider transition-all cursor-pointer text-center"
              >
                In-App Council Preview →
              </button>
            </div>
          </div>
        </section>

        {/* 10. MANIFESTO SECTION */}
        <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 relative bg-black text-center overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, #00F0FF 0%, #0070F3 50%, transparent 80%)',
            }}
          />

          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold block">
              OUR CONSTITUTION
            </span>

            <div className="space-y-6 text-xl sm:text-3xl md:text-4xl font-bold text-zinc-300 leading-snug">
              <p>Students shouldn't wait until graduation to start building.</p>
              <p>Ideas should leave PowerPoint slides.</p>
              <p>Business models must solve real human pain.</p>
              <p>Classroom skills should convert into market revenue.</p>
              <p>Titles should be earned through execution.</p>
            </div>

            <div className="pt-8">
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-[#00F0FF] drop-shadow-[0_0_35px_rgba(0,240,255,0.5)] uppercase font-sans">
                BUILD OR BE BUILT.
              </h2>
            </div>
          </div>
        </section>

        {/* 11. RECRUITMENT PROCESS (With Explicit Official Links) */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/10 bg-[#070709]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                HOW TO JOIN
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                90 seconds can change your university trajectory.
              </h2>
            </div>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 01 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f17] border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-2xl font-black text-[#00F0FF] block">01</span>
                  <div className="text-xs font-mono text-[#00F0FF] font-bold">
                    👉 Step 1: Fill Recruitment Form
                  </div>
                  <h3 className="text-xl font-bold text-white">APPLY</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Submit your basic profile, faculty, and venture interest via our official intake form. (Takes 90 secs)
                  </p>
                  <div className="text-[11px] font-mono text-zinc-500 truncate">
                    {OFFICIAL_LINKS.RECRUITMENT_FORM}
                  </div>
                </div>
                <a
                  href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#00F0FF] hover:bg-[#0070F3] text-black hover:text-white font-bold text-xs text-center transition-colors block"
                >
                  Open Official Form (90s) ↗
                </a>
              </div>

              {/* Step 02 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f17] border border-emerald-500/30 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-2xl font-black text-emerald-400 block">02</span>
                  <div className="text-xs font-mono text-emerald-400 font-bold">
                    👉 Step 2: Join WhatsApp Community
                  </div>
                  <h3 className="text-xl font-bold text-white">CONNECT</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Instantly join our official WhatsApp Community to meet prospective co-founders and get sprint alerts.
                  </p>
                  <div className="text-[11px] font-mono text-zinc-500 truncate">
                    {OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                  </div>
                </div>
                <a
                  href={OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs text-center transition-colors block"
                >
                  Join Official WhatsApp ↗
                </a>
              </div>

              {/* Step 03 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0f17] border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-2xl font-black text-[#FF6A19] block">03</span>
                  <div className="text-xs font-mono text-[#FF6A19] font-bold">
                    👉 Step 3: Squad Assembly
                  </div>
                  <h3 className="text-xl font-bold text-white">CO-FOUND</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Selected applicants assemble into 4-person startup squads and kick off sprint cycle 1.
                  </p>
                  <span className="inline-block text-xs font-mono text-[#FF6A19]">Launch & Scale</span>
                </div>
                <button
                  onClick={() => handleOpenApply()}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs text-center transition-colors cursor-pointer"
                >
                  Quick In-App Wizard →
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#00F0FF] hover:bg-[#0070F3] text-black hover:text-white font-extrabold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer text-center"
              >
                FILL RECRUITMENT FORM (90 SECS) ↗
              </a>
              <a
                href={OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm tracking-wide transition-all cursor-pointer text-center hover:border-emerald-500/40"
              >
                JOIN OFFICIAL WHATSAPP COMMUNITY ↗
              </a>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                ALL FACULTIES WELCOME
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion Boxes */}
            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="border border-white/10 rounded-xl overflow-hidden bg-[#0d0f17] transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5"
                    >
                      <span className="font-bold text-sm sm:text-base text-white font-sans">
                        {faq.q}
                      </span>
                      <span className="font-mono text-xs text-[#00F0FF] shrink-0">
                        {isOpen ? '—' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0C] border-t border-white/10 text-center">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-25"
            style={{
              background: 'radial-gradient(circle, #00F0FF 0%, #0070F3 40%, transparent 80%)',
            }}
          />

          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <div className="flex justify-center">
              <RocketLogo size="lg" showGlow={true} />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold block">
              AU STARTUP CLUB · AIR UNIVERSITY MULTAN · 2026–2027
            </span>

            {/* Massive Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase leading-tight font-sans">
                YOUR DEGREE TELLS PEOPLE <br />
                WHAT YOU STUDIED.
              </h2>
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#00F0FF] uppercase leading-tight font-sans">
                WHAT YOU BUILD TELLS THEM <br />
                WHAT YOU CAN DO.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
              Applications are now open for Business strategists, Tech builders, UI/UX designers, and Executive leaders.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-xl bg-[#00F0FF] hover:bg-[#0070F3] text-black hover:text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer text-center"
              >
                APPLY NOW (GOOGLE FORM) →
              </a>
              <a
                href={OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm uppercase tracking-wider transition-all cursor-pointer text-center hover:border-emerald-500/40"
              >
                JOIN THE COMMUNITY (WHATSAPP) ↗
              </a>
            </div>

            <div className="pt-6 space-y-1">
              <p className="font-mono text-xs text-zinc-400">
                Air University Multan Campus
              </p>
              <blockquote className="font-mono text-xs sm:text-sm text-[#FF6A19] italic font-semibold">
                "Build or be built. See you on the inside."
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="border-t border-white/10 bg-[#060709] py-12 px-4 sm:px-6 lg:px-8 text-zinc-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-zinc-300">
            <RocketLogo size="sm" showGlow={false} />
            <span className="font-bold text-white font-sans">AU STARTUP CLUB</span>
            <span>·</span>
            <span>AIR UNIVERSITY MULTAN</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#accelerator" className="hover:text-white transition-colors">Venture Model</a>
            <a href="#tracks" className="hover:text-white transition-colors">5 Tracks</a>
            <a href="#squads" className="hover:text-white transition-colors">Squad Matching</a>
            <a href="#output" className="hover:text-white transition-colors">Outputs</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a
              href={OFFICIAL_LINKS.RECRUITMENT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF] hover:underline"
            >
              Apply (90s)
            </a>
          </div>

          <div>
            © 2026 AU Startup Club. Multidisciplinary Venture Launchpad.
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        initialTrack={prefilledTrack}
        initialRoleTier={prefilledRoleTier}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        onOpenApply={() => setApplyModalOpen(true)}
      />

      <TrackDetailModal
        track={selectedTrackDetail}
        onClose={() => setSelectedTrackDetail(null)}
        onApplyForTrack={(trackId) => handleOpenApply(trackId, 'cohort')}
      />
    </div>
  );
}
