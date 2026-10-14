import React, { useState } from 'react';

export const OutputCollage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'app' | 'deck' | 'event' | 'campaign' | 'code' | 'sponsor'>('app');

  return (
    <div className="w-full bg-[#050811] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top dashboard control bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-[11px] text-zinc-400 ml-2">
            AU_STUDENT_OUTPUT_VAULT
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-[#19E4F2]">
          <span>STATUS: SHIPPED</span>
        </div>
      </div>

      {/* Output Segmented Switcher */}
      <div className="flex items-center gap-1 p-2 bg-black/40 border-b border-white/10 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('app')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'app'
              ? 'bg-[#15AEEF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          01. App Interface
        </button>
        <button
          onClick={() => setActiveTab('deck')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'deck'
              ? 'bg-[#15AEEF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          02. Pitch Deck
        </button>
        <button
          onClick={() => setActiveTab('event')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'event'
              ? 'bg-[#15AEEF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          03. Event Stage
        </button>
        <button
          onClick={() => setActiveTab('campaign')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'campaign'
              ? 'bg-[#15AEEF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          04. Campaign
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'code'
              ? 'bg-[#15AEEF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          05. Terminal / Code
        </button>
        <button
          onClick={() => setActiveTab('sponsor')}
          className={`px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'sponsor'
              ? 'bg-[#15AEEF] text-black font-bold'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          06. Sponsorship
        </button>
      </div>

      {/* Main Preview Screen */}
      <div className="p-4 sm:p-6 min-h-[340px] flex items-center justify-center">
        {/* 1. App Interface Mockup */}
        {activeTab === 'app' && (
          <div className="w-full space-y-4">
            <div className="p-4 rounded-xl bg-[#091122] border border-[#15AEEF]/30 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#19E4F2] uppercase tracking-wider block">
                    Product Prototype #01
                  </span>
                  <h4 className="font-bold text-base text-white">AU Campus Pulse — Micro-SaaS</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Production v1.2
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Built by 3 first-year & second-year students in 10 days. Automated timetable alerts and AI-generated exam prep summaries.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Active Users</span>
                  <span className="text-sm sm:text-base font-bold text-[#19E4F2] font-mono">1,420+</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Avg Response</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">42ms</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-center">
                  <span className="text-xs font-mono text-zinc-400 block">Satisfaction</span>
                  <span className="text-sm sm:text-base font-bold text-[#FF6A19] font-mono">98.4%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span>Stack: Next.js 15 · Tailwind · FastAPI · Supabase</span>
              <span className="text-[#19E4F2]">Proof of Execution</span>
            </div>
          </div>
        )}

        {/* 2. Pitch Deck Mockup */}
        {activeTab === 'deck' && (
          <div className="w-full space-y-3">
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#0c162c] to-[#040812] border border-white/15">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#FF6A19] font-bold">SLIDE 04 / 12 — PROBLEM & MARKET</span>
                <span className="text-[10px] font-mono text-zinc-400">AU SEED PITCH</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                "92% of university graduates submit résumés with zero demonstrated code or projects."
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                We bridge the execution gap through intensive 14-day sprint cycles. Students ship tested products to real end users before speaking with employers or angel investors.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-[#19E4F2]">
                <span>Traction: 4 Products</span>
                <span>·</span>
                <span>Seed Stage Ready</span>
                <span>·</span>
                <span>Multan Ecosystem</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 text-center">
              Coached by venture operators and past national hackathon winners.
            </p>
          </div>
        )}

        {/* 3. Event Stage Mockup */}
        {activeTab === 'event' && (
          <div className="w-full space-y-3">
            <div className="p-5 rounded-xl bg-[#090e1a] border border-[#15AEEF]/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#15AEEF]/20 text-[#19E4F2] border border-[#15AEEF]/30 uppercase">
                  Flagship Event
                </span>
                <span className="font-mono text-xs text-zinc-400">Auditorium Hall</span>
              </div>
              <h4 className="text-lg font-bold text-white">AU 36-Hour HackSprint 2026</h4>
              <p className="text-xs text-zinc-300">
                120 builders. 30 multidisciplinary teams. 36 hours of non-stop coding, designing, and pitching. Live jury of tech CEOs.
              </p>
              <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-mono text-zinc-400">Total Prize Pool</span>
                  <span className="text-base font-bold text-white font-mono">PKR 500,000+</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-400">Sponsor Backing</span>
                  <span className="text-sm font-semibold text-[#19E4F2]">Tier-1 Tech Partners</span>
                </div>
              </div>
            </div>
            <span className="block text-center font-mono text-[11px] text-zinc-400">
              Operations track manages stage, lighting, livestreams & logistics.
            </span>
          </div>
        )}

        {/* 4. Social Campaign Mockup */}
        {activeTab === 'campaign' && (
          <div className="w-full space-y-3">
            <div className="p-4 rounded-xl bg-[#0c1222] border border-cyan-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center font-bold text-cyan-300 text-xs">
                  AU
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">@austartupclub · Campaign Reel</h5>
                  <span className="text-[10px] text-zinc-400">Visual Direction: Media & Design Track</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black border border-white/10 text-center font-mono">
                <p className="text-sm font-bold text-[#19E4F2] uppercase tracking-wider mb-1">
                  "Stop collecting titles. Start building."
                </p>
                <span className="text-[11px] text-zinc-400">Cinematic 4K Mini-Doc Teaser</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                <div className="p-1.5 bg-white/5 rounded">18.4K Impressions</div>
                <div className="p-1.5 bg-white/5 rounded text-[#19E4F2]">1,200+ Shares</div>
                <div className="p-1.5 bg-white/5 rounded text-[#FF6A19]">90+ Inbound DMs</div>
              </div>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 text-center">
              Real media output that builds a verifiable public brand.
            </p>
          </div>
        )}

        {/* 5. Terminal / Code Mockup */}
        {activeTab === 'code' && (
          <div className="w-full font-mono text-xs bg-black/90 p-4 rounded-xl border border-white/15 space-y-2 text-left">
            <div className="text-zinc-500">$ cd ~/projects/au-multan-copilot</div>
            <div className="text-zinc-400">$ git checkout -b feature/gemini-rag-engine</div>
            <div className="text-[#19E4F2]">$ pnpm run test:sprint-mvp</div>
            <div className="text-emerald-400">✓ 24 unit suites passed (1.4s)</div>
            <div className="text-zinc-300">$ git commit -m "ship: public MVP v1.0"</div>
            <div className="text-emerald-300">$ vercel --prod</div>
            <div className="text-[#15AEEF]">Deployed: https://au-copilot.applet.dev (2.1s)</div>
            <div className="pt-2 text-[11px] text-zinc-400 border-t border-white/10">
              Students leave with verified commit history and live production URLs.
            </div>
          </div>
        )}

        {/* 6. Sponsorship Meeting Mockup */}
        {activeTab === 'sponsor' && (
          <div className="w-full space-y-3">
            <div className="p-4 rounded-xl bg-[#10141f] border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Corporate Partnership Deck
                </span>
                <span className="text-[10px] font-mono text-zinc-400">PR Track Deliverable</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Industry-Campus Talent Pipeline
              </h4>
              <p className="text-xs text-zinc-300">
                Direct sponsorship pitch deck presented to regional software houses, venture incubators, and telecom leaders in South Punjab.
              </p>
              <div className="p-3 rounded-lg bg-black/60 border border-white/10 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-zinc-300">
                  <span>Platinum Tier (Title Sponsor)</span>
                  <span className="text-amber-300 font-bold">PKR 300,000</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Gold Hackathon Track Partner</span>
                  <span className="text-zinc-200">PKR 150,000</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Mentorship & Hiring Partner</span>
                  <span className="text-zinc-200">Executive Access</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 text-center">
              Real high-stakes outreach, negotiation, and corporate management.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
