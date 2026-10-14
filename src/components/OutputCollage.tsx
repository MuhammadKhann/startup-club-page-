import React, { useState } from 'react';

export const OutputCollage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'finance' | 'mvp' | 'design' | 'capital' | 'pitch' | 'stage'>('finance');

  return (
    <div className="w-full bg-[#0d0f17] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top control bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-[11px] text-zinc-400 ml-2">
            MULTIDISCIPLINARY_VENTURE_OUTPUT
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-[#00F0FF]">
          <span>STATUS: REAL ASSETS DELIVERED</span>
        </div>
      </div>

      {/* Segmented discipline switcher */}
      <div className="flex items-center gap-1 p-2 bg-black/40 border-b border-white/10 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('finance')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'finance'
              ? 'bg-[#00F0FF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          01. Financial Model (Biz)
        </button>
        <button
          onClick={() => setActiveTab('mvp')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'mvp'
              ? 'bg-[#0070F3] text-white font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          02. Production MVP (Tech)
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'design'
              ? 'bg-[#9D4EDD] text-white font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          03. UI/UX System (Design)
        </button>
        <button
          onClick={() => setActiveTab('capital')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'capital'
              ? 'bg-[#F59E0B] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          04. Capital & Deals (Corp)
        </button>
        <button
          onClick={() => setActiveTab('pitch')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'pitch'
              ? 'bg-[#00F0FF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          05. Seed Pitch Deck
        </button>
        <button
          onClick={() => setActiveTab('stage')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'stage'
              ? 'bg-[#FF6A19] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          06. Demo Day (Ops)
        </button>
      </div>

      {/* Main Preview Container */}
      <div className="p-4 sm:p-6 min-h-[350px] flex items-center justify-center">
        {/* 1. Financial Model (Business & Finance) */}
        {activeTab === 'finance' && (
          <div className="w-full space-y-4 text-left">
            <div className="p-4 rounded-xl bg-[#091322] border border-[#00F0FF]/30 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-wider block font-bold">
                    Venture Economics · Business & Accounting Track
                  </span>
                  <h4 className="font-bold text-base text-white">SaaS Unit Economics & 18-Month Projections</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
                  LTV / CAC = 3.8x
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Crafted by Business & Finance co-founders: pricing tiers, gross margin modeling, cash burn rate, and payback period under 4 months.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-[11px] font-mono text-zinc-400 block">MRR Run Rate</span>
                  <span className="text-sm sm:text-base font-bold text-[#00F0FF] font-mono">PKR 340,000</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-[11px] font-mono text-zinc-400 block">CAC Payback</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">3.2 Months</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-[11px] font-mono text-zinc-400 block">Gross Margin</span>
                  <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">82.4%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-[11px] font-mono text-zinc-400 block">Runway</span>
                  <span className="text-sm sm:text-base font-bold text-[#FF6A19] font-mono">14 Months</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span>Tools: Excel Financial Engine · Stripe Revenue Canvas · Pitch Vault</span>
              <span className="text-[#00F0FF]">Tangible Business Output</span>
            </div>
          </div>
        )}

        {/* 2. Production MVP (Tech & Product) */}
        {activeTab === 'mvp' && (
          <div className="w-full space-y-4 text-left">
            <div className="p-4 rounded-xl bg-[#08152e] border border-[#0070F3]/40 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#0070F3] uppercase tracking-wider block font-bold">
                    Production Architecture · Tech Track
                  </span>
                  <h4 className="font-bold text-base text-white">AU Campus Pulse — Micro-Platform</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Production Live
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Engineered in a 14-day sprint: automated academic notifications, secure student authentication, and instant AI exam study summaries.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Active Users</span>
                  <span className="text-sm sm:text-base font-bold text-[#0070F3] font-mono">2,150+</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">P99 Latency</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">38ms</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Uptime</span>
                  <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">99.9%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span>Stack: Next.js 15 · Python FastAPI · PostgreSQL · Gemini SDK</span>
              <span className="text-[#0070F3]">Deployed to Production</span>
            </div>
          </div>
        )}

        {/* 3. UI/UX Design System (Media & Creative) */}
        {activeTab === 'design' && (
          <div className="w-full space-y-3 text-left">
            <div className="p-4 rounded-xl bg-[#140b24] border border-[#9D4EDD]/40 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#D8B4FE] uppercase tracking-wider block font-bold">
                    Figma Design System · Media & Creative Track
                  </span>
                  <h4 className="font-bold text-base text-white">Venture Brand Tokens & Conversion UX</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#9D4EDD]/20 text-[#D8B4FE] border border-[#9D4EDD]/30">
                  Figma 100+ Components
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Designed by Arts & Humanities students: WCAG-compliant color systems, typography scale, responsive mobile wireframes, and launch teasers.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Design Tokens</span>
                  <span className="text-sm sm:text-base font-bold text-[#D8B4FE] font-mono">140+ Variables</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Conversion Lift</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">+42%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Asset Suite</span>
                  <span className="text-sm sm:text-base font-bold text-[#FF6A19] font-mono">4K Media Kit</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span>Tools: Figma · After Effects · Spline 3D · DaVinci Resolve</span>
              <span className="text-[#D8B4FE]">Visual World-Class Brand</span>
            </div>
          </div>
        )}

        {/* 4. Capital & Corporate Deals */}
        {activeTab === 'capital' && (
          <div className="w-full space-y-3 text-left">
            <div className="p-4 rounded-xl bg-[#161208] border border-[#F59E0B]/40 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider block font-bold">
                    Corporate Ledger · Corporate & Capital Track
                  </span>
                  <h4 className="font-bold text-base text-white">National HackSprint Sponsorship Allocations</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Total Closed: PKR 750,000+
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Negotiated and executed by Finance & PR leads: corporate sponsorship contracts, angel investor outreach, and recruiting agreements.
              </p>
              <div className="space-y-1.5 font-mono text-xs">
                <div className="p-2 rounded bg-black/60 border border-white/10 flex justify-between">
                  <span className="text-zinc-300">Title Sponsor (Tech Unicorn Partnership)</span>
                  <span className="text-amber-400 font-bold">PKR 400,000</span>
                </div>
                <div className="p-2 rounded bg-black/60 border border-white/10 flex justify-between">
                  <span className="text-zinc-400">Track Innovation Partners (x2 Software Houses)</span>
                  <span className="text-zinc-200">PKR 250,000</span>
                </div>
                <div className="p-2 rounded bg-black/60 border border-white/10 flex justify-between">
                  <span className="text-zinc-400">Cloud Credit In-Kind Commitments</span>
                  <span className="text-emerald-400">$25,000 USD Credits</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span>Real corporate negotiation, contracts, and stakeholder management</span>
              <span className="text-amber-400">Commercial Traction</span>
            </div>
          </div>
        )}

        {/* 5. Seed Pitch Deck */}
        {activeTab === 'pitch' && (
          <div className="w-full space-y-3 text-left">
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#0c162c] to-[#040812] border border-[#00F0FF]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#00F0FF] font-bold">SLIDE 04 / 11 — PROBLEM & MARKET SIZING</span>
                <span className="text-[10px] font-mono text-zinc-400">SEED MEMO · PRE-REVENUE</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                "94% of university students graduate with zero demonstrated revenue, code, or portfolio proof."
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                AU Startup Club provides the cross-disciplinary co-founding engine where business, engineering, and creative talent launch scalable ventures before finishing their degree.
              </p>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs text-center">
                <div className="p-2 bg-white/5 rounded border border-white/10">
                  <span className="block text-zinc-400 text-[10px]">TAM (Pakistan Tech)</span>
                  <span className="text-[#00F0FF] font-bold">$4.2 Billion</span>
                </div>
                <div className="p-2 bg-white/5 rounded border border-white/10">
                  <span className="block text-zinc-400 text-[10px]">SAM (Student Market)</span>
                  <span className="text-white font-bold">$120 Million</span>
                </div>
                <div className="p-2 bg-white/5 rounded border border-white/10">
                  <span className="block text-zinc-400 text-[10px]">SOM Year 1</span>
                  <span className="text-[#FF6A19] font-bold">$1.8 Million</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 text-center">
              Evaluated by real VC analysts and past national pitch winners.
            </p>
          </div>
        )}

        {/* 6. Demo Day (Campus Operations) */}
        {activeTab === 'stage' && (
          <div className="w-full space-y-3 text-left">
            <div className="p-4 rounded-xl bg-[#140b06] border border-[#FF6A19]/40 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#FF6A19] uppercase tracking-wider block font-bold">
                    Summit Production · Operations Track
                  </span>
                  <h4 className="font-bold text-base text-white">AU Annual Demo Day & Pitch Arena</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FF6A19]/20 text-[#FF6A19] border border-[#FF6A19]/30">
                  500+ Attendees
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Orchestrated entirely by student operations directors: stage lighting, live investor scorecards, VIP guest management, and press coverage.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs text-center">
                <div className="p-2 bg-black/60 rounded border border-white/10">
                  <span className="block text-zinc-400 text-[10px]">Finalist Squads</span>
                  <span className="text-white font-bold">12 Ventures</span>
                </div>
                <div className="p-2 bg-black/60 rounded border border-white/10">
                  <span className="block text-zinc-400 text-[10px]">Angel Investors</span>
                  <span className="text-[#00F0FF] font-bold">18 on Jury</span>
                </div>
                <div className="p-2 bg-black/60 rounded border border-white/10">
                  <span className="block text-zinc-400 text-[10px]">Live Stream Views</span>
                  <span className="text-[#FF6A19] font-bold">4,500+</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span>Operations, event technology, hospitality, and live broadcasting</span>
              <span className="text-[#FF6A19]">Flawless Execution</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
