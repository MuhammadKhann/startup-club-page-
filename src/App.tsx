import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroVisual } from './components/HeroVisual.tsx';
import { RocketLogo } from './components/RocketLogo.tsx';
import { ApplicationModal } from './components/ApplicationModal.tsx';
import { WhatsAppModal } from './components/WhatsAppModal.tsx';
import { TrackDetailModal } from './components/TrackDetailModal.tsx';
import { OutputCollage } from './components/OutputCollage.tsx';
import { TRACKS, SPRINT_EXPERIENCES, FAQS, TrackInfo, OFFICIAL_LINKS } from './data/clubData.ts';

export default function App() {
  // Modal states
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [selectedTrackDetail, setSelectedTrackDetail] = useState<TrackInfo | null>(null);
  const [prefilledTrack, setPrefilledTrack] = useState<string>('tech-ai');
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
    'IDEA',
    'BUILD',
    'TEST',
    'FAIL',
    'LEARN',
    'REBUILD',
    'LAUNCH',
  ];

  const whoWeLookForTicker = [
    'BUILDERS',
    'CODERS',
    'DESIGNERS',
    'MARKETERS',
    'OPERATORS',
    'FOUNDERS',
    'CREATORS',
  ];

  return (
    <div className="min-h-screen bg-[#020304] text-white overflow-x-hidden selection:bg-[#15AEEF] selection:text-black">
      {/* 1. TOP NAVIGATION */}
      <Navbar onOpenApply={() => handleOpenApply()} />

      <main className="relative pt-24 sm:pt-28">
        {/* 2. HERO SECTION */}
        <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 overflow-hidden">
          {/* Subtle tech background grid and gradient light */}
          <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[120px] pointer-events-none opacity-25"
            style={{
              background: 'radial-gradient(circle, #15AEEF 0%, #19E4F2 40%, transparent 70%)',
            }}
          />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Column: Headline and Call-to-Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Electric blue recruitment pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#19E4F2]/40 bg-[#15AEEF]/10 text-[#19E4F2] text-xs font-mono font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#19E4F2] animate-pulse" />
                <span>RECRUITMENT OPEN — 2026/27</span>
              </div>

              {/* Attention line */}
              <div className="font-mono text-xs sm:text-sm text-zinc-400 tracking-widest uppercase">
                ATTENTION AIR UNIVERSITY MULTAN
              </div>

              {/* Giant Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] uppercase text-white font-sans text-balance">
                THE REBUILD <br />
                <span className="text-[#19E4F2] drop-shadow-[0_0_35px_rgba(25,228,242,0.4)]">
                  HAS BEGUN.
                </span>
              </h1>

              {/* Punchy Subhead */}
              <p className="text-lg sm:text-xl font-semibold text-zinc-100 max-w-xl">
                Stop collecting titles. Start building things that matter.
              </p>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                AU Startup Club is recruiting builders, coders, designers, marketers and operators from every department. Build real projects, launch ideas, work with ambitious people and create something worth putting on your résumé before graduation.
              </p>

              {/* Hero CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-extrabold text-sm tracking-wide transition-all duration-200 shadow-[0_0_20px_rgba(21,174,239,0.35)] hover:shadow-[0_0_30px_rgba(25,228,242,0.7)] flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  APPLY NOW — 90 SEC →
                </a>

                <a
                  href={OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:border-[#19E4F2]/40 text-center"
                >
                  JOIN WHATSAPP COMMUNITY ↗
                </a>

                <button
                  onClick={() => handleOpenApply()}
                  className="text-xs font-mono text-zinc-400 hover:text-[#19E4F2] underline underline-offset-4 py-2 sm:py-0 text-center"
                >
                  (Or fast in-app form)
                </button>
              </div>

              {/* Notice under buttons */}
              <p className="text-xs font-mono text-zinc-500 pt-1">
                Limited Core Council & Active Cohort positions available.
              </p>
            </div>

            {/* Right Column: Large glowing rocket/A-shaped logo visual */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* SUBTLE MOVING TICKER: IDEA → BUILD → TEST → FAIL → LEARN → REBUILD → LAUNCH */}
        <div className="border-y border-white/10 bg-[#03060a] py-3 overflow-hidden select-none">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-xs sm:text-sm font-semibold tracking-widest text-zinc-400">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span className={item === 'REBUILD' ? 'text-[#19E4F2] font-bold' : item === 'LAUNCH' ? 'text-[#FF6A19] font-bold' : 'hover:text-white transition-colors'}>
                  {item}
                </span>
                <span className="text-zinc-600">→</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3. IMMEDIATE CONTRAST SECTION */}
        <section id="why-join" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                WHY WE'RE REBUILDING
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Most societies give you certificates. <br />
                <span className="text-[#19E4F2]">We give you experience.</span>
              </h2>
            </div>

            {/* Two Column Contrast Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
              {/* Column 1: The Usual Society (Muted Grey) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-6">
                <div className="border-b border-zinc-800 pb-4">
                  <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block">
                    The Campus Default
                  </span>
                  <h3 className="text-xl font-bold text-zinc-400 mt-1">The Usual Society</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    'Empty titles without responsibilities',
                    'Attendance certificates that employers ignore',
                    'Recycled events with zero innovation',
                    'Committee politics & hierarchical red tape',
                    'Zero portfolio value upon graduation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base">
                      <span className="font-mono text-red-500/80 font-bold text-base shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: AU Startup Club (Bright Styling) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#06101f] border border-[#15AEEF]/50 shadow-[0_0_30px_rgba(21,174,239,0.12)] space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#19E4F2]/10 rounded-bl-full pointer-events-none blur-xl" />

                <div className="border-b border-[#15AEEF]/30 pb-4 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#19E4F2] uppercase tracking-wider block font-semibold">
                      The Execution Engine
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">AU Startup Club</h3>
                  </div>
                  <span className="font-mono text-[10px] text-black bg-[#19E4F2] px-2 py-0.5 rounded font-bold uppercase">
                    The Rebuild
                  </span>
                </div>

                <ul className="space-y-4">
                  {[
                    'Real startup projects shipped to real users',
                    'Technical & creative multidisciplinary squads',
                    'Industry connections & venture founders',
                    'Hackathons & high-stakes pitch nights',
                    'Portfolio-worthy execution with live links',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white text-sm sm:text-base font-medium">
                      <span className="font-mono text-[#19E4F2] font-bold text-base shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="text-center pt-6">
              <blockquote className="text-base sm:text-xl font-mono text-zinc-300 italic tracking-wide max-w-2xl mx-auto">
                "No corporate filler. No fluff. Real projects. Real skin in the game."
              </blockquote>
            </div>
          </div>
        </section>

        {/* 4. THE BIG MISSION STATEMENT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black border-y border-white/10 overflow-hidden">
          {/* Subtle oversized 'A' watermark */}
          <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] opacity-[0.04] pointer-events-none select-none text-white font-black text-[600px] flex items-center justify-center font-sans">
            A
          </div>

          <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                THE MISSION
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
                Build before you graduate.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                University shouldn't only prepare you to enter the world. It should give you enough room to start creating your own.
              </p>
            </div>

            {/* Three Large Metrics / Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#050912] border border-white/10 hover:border-[#15AEEF]/50 transition-all group">
                <span className="font-mono text-sm text-[#19E4F2] font-bold block mb-3">01 — BUILD</span>
                <h3 className="text-xl font-bold text-white mb-2">Turn ideas into MVPs</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Turn ideas into MVPs, products and campaigns with fast execution sprints.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#050912] border border-white/10 hover:border-[#19E4F2]/50 transition-all group">
                <span className="font-mono text-sm text-[#19E4F2] font-bold block mb-3">02 — CONNECT</span>
                <h3 className="text-xl font-bold text-white mb-2">Work alongside ambitious peers</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Work alongside ambitious people from different disciplines: coders, designers, and operators.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#050912] border border-white/10 hover:border-[#FF6A19]/50 transition-all group">
                <span className="font-mono text-sm text-[#FF6A19] font-bold block mb-3">03 — LAUNCH</span>
                <h3 className="text-xl font-bold text-white mb-2">Ship projects publicly</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Ship projects, run events, pitch ideas and build your reputation across Pakistan's tech landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO ARE WE LOOKING FOR? */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
          {/* Horizontal scrolling ticker above */}
          <div className="mb-14 overflow-hidden border-y border-white/10 py-3 bg-[#03060c]">
            <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-6 font-mono text-xs sm:text-sm font-bold tracking-widest text-zinc-400">
              {[...whoWeLookForTicker, ...whoWeLookForTicker, ...whoWeLookForTicker].map((item, idx) => (
                <span key={idx} className="flex items-center gap-6">
                  <span className="hover:text-[#19E4F2] transition-colors">{item}</span>
                  <span className="text-[#15AEEF]">✦</span>
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                WHO WE'RE LOOKING FOR
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                You don't need a startup. <br />
                <span className="text-[#19E4F2]">You need the mindset to build one.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                From CS to Business, Mathematics to English — your department doesn't matter. Curiosity, ownership and execution do.
              </p>
            </div>

            {/* 3 Semester Cohort Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* First Semester */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/10 hover:border-[#15AEEF]/50 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500 uppercase">First Semester</span>
                  <span className="font-mono text-xs text-[#19E4F2] font-bold">SEM 1 & 2</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">START EARLY</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Find your people, develop practical skills and build your first serious project before other students even choose an elective.
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500">
                  Focus: Tool proficiency & squad formation
                </div>
              </div>

              {/* Middle Semesters */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/10 hover:border-[#15AEEF]/50 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500 uppercase">Middle Semesters</span>
                  <span className="font-mono text-xs text-[#15AEEF] font-bold">SEM 3 TO 6</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">BUILD MOMENTUM</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Join teams, lead initiatives and turn classroom skills into visible outcomes that stand out in internships.
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500">
                  Focus: Hackathon wins & production code
                </div>
              </div>

              {/* Final Semesters */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/10 hover:border-[#FF6A19]/50 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500 uppercase">Final Semesters</span>
                  <span className="font-mono text-xs text-[#FF6A19] font-bold">SEM 7 & 8</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">LEAVE WITH PROOF</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Build something real for your portfolio, résumé or future venture before walking across the graduation stage.
                </p>
                <div className="pt-2 text-xs font-mono text-zinc-500">
                  Focus: Venture launch, funding & career launch
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CHOOSE YOUR TRACK */}
        <section id="tracks" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black/60 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                CHOOSE YOUR TRACK
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Different skills. One execution engine.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                Every track operates as an autonomous squad with weekly sprint goals and cross-team collaboration.
              </p>
            </div>

            {/* 4 Interactive Track Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TRACKS.map((track) => (
                <div
                  key={track.id}
                  onClick={() => setSelectedTrackDetail(track)}
                  className={`group relative p-7 sm:p-8 rounded-2xl bg-[#050912] border border-white/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${track.borderHover} hover:shadow-2xl hover:shadow-black`}
                >
                  <div className="space-y-4">
                    {/* Track kicker & Icon badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                        {track.kicker}
                      </span>
                      <span
                        className="w-3 h-3 rounded-full transition-transform group-hover:scale-125"
                        style={{ backgroundColor: track.accentColor }}
                      />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {track.name}
                    </h3>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 text-xs font-mono text-zinc-300">
                      {track.skills.map((skill, idx) => (
                        <span key={skill} className="flex items-center">
                          <span>{skill}</span>
                          {idx < track.skills.length - 1 && (
                            <span className="text-zinc-600 mx-1.5">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Short quote */}
                    <blockquote className="text-sm text-zinc-300 italic border-l border-white/20 pl-3">
                      "{track.quote}"
                    </blockquote>
                  </div>

                  {/* Reveal arrow on hover */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                      View roles & active projects
                    </span>
                    <span
                      className="font-mono text-xs font-bold transition-all group-hover:translate-x-1 flex items-center gap-1"
                      style={{ color: track.accentColor }}
                    >
                      EXPLORE THIS TRACK →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WHAT YOU'LL ACTUALLY DO */}
        <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                EXECUTION FLOW
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                This isn't a club you watch. <br />
                <span className="text-[#19E4F2]">It's a club you work in.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Timeline */}
              <div className="lg:col-span-5 space-y-4">
                {[
                  {
                    step: 'BUILD',
                    desc: 'Join multidisciplinary teams with engineers, designers, and operators.',
                    color: 'text-[#19E4F2]',
                  },
                  {
                    step: 'EXECUTE',
                    desc: 'Work on real products, campaigns and campus events during sprint weeks.',
                    color: 'text-[#15AEEF]',
                  },
                  {
                    step: 'SHIP',
                    desc: 'Launch something publicly to actual university students and early testers.',
                    color: 'text-white',
                  },
                  {
                    step: 'SHOW',
                    desc: 'Add verified, tangible work and GitHub/Figma links to your portfolio.',
                    color: 'text-[#FF6A19]',
                  },
                  {
                    step: 'GROW',
                    desc: 'Build leadership, high-value professional networks and real startup experience.',
                    color: 'text-emerald-400',
                  },
                ].map((item, idx, arr) => (
                  <div key={item.step} className="space-y-2">
                    <div className="p-4 rounded-xl bg-[#060a14] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4">
                      <span className={`font-mono text-sm font-bold tracking-wider shrink-0 ${item.color}`}>
                        {item.step}
                      </span>
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

        {/* 8. PROJECTS & EXPERIENCES */}
        <section id="experiences" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-black/40 border-t border-white/10">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                EXPERIENCES & SPRINTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Things we want to build.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                Sprint cycles designed to push you beyond theory into rapid, relentless production.
              </p>
            </div>

            {/* Grid of Experiences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SPRINT_EXPERIENCES.map((exp) => (
                <div
                  key={exp.title}
                  className="p-6 rounded-2xl bg-[#050912] border border-white/10 hover:border-[#15AEEF]/40 transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#19E4F2] uppercase tracking-wider">
                      {exp.tag}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">
                      {exp.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#19E4F2] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tagline at bottom */}
            <div className="text-center pt-4">
              <p className="text-sm font-mono text-zinc-400">
                And whatever ambitious idea our members bring next.
              </p>
            </div>
          </div>
        </section>

        {/* 9. CORE COUNCIL RECRUITMENT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#040816] border-y border-[#15AEEF]/20">
          <div className="max-w-5xl mx-auto space-y-8 text-center sm:text-left">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF6A19] font-bold">
                CORE COUNCIL 2026–27
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Don't just join the rebuild. <br />
                <span className="text-[#19E4F2]">Lead it.</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                We're opening limited leadership positions for students who can take ownership, build teams and execute under pressure.
              </p>
            </div>

            {/* Qualities Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                Qualities We Value (Over Conventional Job Titles)
              </span>
              <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                {[
                  'Ownership',
                  'Execution',
                  'Communication',
                  'Reliability',
                  'Initiative',
                  'Creative Thinking',
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
              Limited positions available. Selection will be based on ability and commitment — not semester or department.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleOpenApply(undefined, 'council')}
                className="px-8 py-3.5 rounded-xl bg-[#FF6A19] hover:bg-[#ff8038] text-black font-extrabold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,106,25,0.4)] cursor-pointer"
              >
                APPLY FOR CORE COUNCIL →
              </button>
            </div>
          </div>
        </section>

        {/* 10. MANIFESTO SECTION */}
        <section className="py-28 sm:py-40 px-4 sm:px-6 lg:px-8 relative bg-black text-center overflow-hidden">
          {/* Subtle central radial light */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, #19E4F2 0%, #15AEEF 50%, transparent 80%)',
            }}
          />

          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold block">
              WE BELIEVE
            </span>

            <div className="space-y-6 text-xl sm:text-3xl md:text-4xl font-bold text-zinc-300 leading-snug">
              <p>Students shouldn't wait until graduation to start building.</p>
              <p>Ideas should leave PowerPoint.</p>
              <p>Skills should leave classrooms.</p>
              <p>Networks should create opportunities.</p>
              <p>Titles should be earned through execution.</p>
            </div>

            {/* Electric Blue Punchline */}
            <div className="pt-8">
              <h2 className="text-4xl sm:text-7xl font-black tracking-tight text-[#19E4F2] drop-shadow-[0_0_35px_rgba(25,228,242,0.5)] uppercase font-sans">
                BUILD OR BE BUILT.
              </h2>
            </div>
          </div>
        </section>

        {/* 11. RECRUITMENT PROCESS */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/10 bg-[#03060c]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                HOW TO JOIN
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                90 seconds can change your university experience.
              </h2>
            </div>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 01 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-2xl font-black text-[#19E4F2] block">01</span>
                  <div className="text-xs font-mono text-[#19E4F2] font-bold">
                    👉 Step 1: Fill Recruitment Form
                  </div>
                  <h3 className="text-xl font-bold text-white">APPLY</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Fill out the short recruitment form with your basic details and builder interest. (Takes 90 secs)
                  </p>
                  <div className="text-[11px] font-mono text-zinc-500 truncate">
                    {OFFICIAL_LINKS.RECRUITMENT_FORM}
                  </div>
                </div>
                <a
                  href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-bold text-xs text-center transition-colors block"
                >
                  Open Official Form (90s) ↗
                </a>
              </div>

              {/* Step 02 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-emerald-500/30 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-2xl font-black text-emerald-400 block">02</span>
                  <div className="text-xs font-mono text-emerald-400 font-bold">
                    👉 Step 2: Join WhatsApp Community
                  </div>
                  <h3 className="text-xl font-bold text-white">CONNECT</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Instantly join the official AU Startup Club WhatsApp Community for sprint notifications.
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
              <div className="p-6 sm:p-8 rounded-2xl bg-[#060a14] border border-white/10 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-2xl font-black text-[#FF6A19] block">03</span>
                  <div className="text-xs font-mono text-[#FF6A19] font-bold">
                    👉 Step 3: Start Building
                  </div>
                  <h3 className="text-xl font-bold text-white">BUILD</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Selected candidates join the Core Council or Active Cohort and start shipping real initiatives.
                  </p>
                  <span className="inline-block text-xs font-mono text-[#FF6A19]">Ship to Production</span>
                </div>
                <button
                  onClick={() => handleOpenApply()}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs text-center transition-colors"
                >
                  Quick In-App Preview →
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-extrabold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(21,174,239,0.3)] cursor-pointer text-center"
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
              <span className="font-mono text-xs uppercase tracking-widest text-[#15AEEF] font-semibold">
                COMMON QUESTIONS
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
                    className="border border-white/10 rounded-xl overflow-hidden bg-[#050912] transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5"
                    >
                      <span className="font-bold text-sm sm:text-base text-white font-sans">
                        {faq.q}
                      </span>
                      <span className="font-mono text-xs text-[#19E4F2] shrink-0">
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
        <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#020408] border-t border-white/10 text-center">
          {/* Giant blue/cyan gradient glow behind logo */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(circle, #19E4F2 0%, #15AEEF 40%, transparent 80%)',
            }}
          />

          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            {/* Center Logo */}
            <div className="flex justify-center">
              <RocketLogo size="lg" showGlow={true} />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-[#19E4F2] font-semibold block">
              AU STARTUP CLUB · 2026–2027
            </span>

            {/* Massive Heading */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase leading-tight font-sans">
                YOUR DEGREE TELLS PEOPLE <br />
                WHAT YOU STUDIED.
              </h2>
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#19E4F2] uppercase leading-tight font-sans">
                WHAT YOU BUILD TELLS THEM <br />
                WHAT YOU CAN DO.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
              Applications are now open for the AU Startup Club Core Council & Active Cohort.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-xl bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(21,174,239,0.5)] cursor-pointer text-center"
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
      <footer className="border-t border-white/10 bg-[#010203] py-12 px-4 sm:px-6 lg:px-8 text-zinc-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-zinc-300">
            <RocketLogo size="sm" showGlow={false} />
            <span className="font-bold text-white font-sans">AU STARTUP CLUB</span>
            <span>·</span>
            <span>AIR UNIVERSITY MULTAN</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#why-join" className="hover:text-white transition-colors">Why Join</a>
            <a href="#tracks" className="hover:text-white transition-colors">Tracks</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Execution</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <button
              onClick={() => handleOpenApply()}
              className="text-[#19E4F2] hover:underline"
            >
              Apply
            </button>
          </div>

          <div>
            © 2026 AU Startup Club. All Rights Reserved.
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
