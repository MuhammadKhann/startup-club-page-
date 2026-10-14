import React, { useState } from 'react';
import { SQUAD_SIMULATOR } from '../data/clubData.ts';

interface SquadMatcherProps {
  onOpenApply: () => void;
}

export const SquadMatcher: React.FC<SquadMatcherProps> = ({ onOpenApply }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const current = SQUAD_SIMULATOR[selectedIndex];

  return (
    <div className="w-full bg-[#0d0f17] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
            CO-FOUNDER SQUAD SIMULATOR
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Where does your major fit in a startup squad?
        </h3>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Select your faculty below to see your co-founding role, core deliverables, and how your skills connect with other disciplines.
        </p>
      </div>

      {/* Faculty Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {SQUAD_SIMULATOR.map((item, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={item.faculty}
              onClick={() => setSelectedIndex(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#00F0FF] bg-[#00F0FF]/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <span className={`text-[11px] font-mono block mb-1 font-semibold ${isSelected ? 'text-[#00F0FF]' : 'text-zinc-400'}`}>
                {item.tag}
              </span>
              <span className="text-sm font-bold text-white block">
                {item.faculty}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Faculty Deep Dive Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        {/* Role & Responsibilities */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-black/50 border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-mono text-[#00F0FF] font-semibold block uppercase">
                {current.badge}
              </span>
              <h4 className="text-xl font-bold text-white mt-0.5">{current.role}</h4>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              Co-Founder Equity
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
              Key Venture Responsibilities:
            </span>
            <ul className="space-y-2">
              {current.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <span className="text-[#00F0FF] font-mono font-bold mt-0.5">✦</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tangible Portfolio Output */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-gradient-to-br from-[#0a1628] to-[#0d0f17] border border-[#00F0FF]/25 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block font-bold mb-1">
              What You Put On Your Résumé
            </span>
            <h5 className="text-lg font-bold text-white mb-2">Verified Real-World Assets</h5>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Before graduation, you won't just have an attendance certificate. You will own:
            </p>
            <div className="mt-3 p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-xs text-[#00F0FF]">
              {current.whatYouBuild}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenApply}
              className="w-full py-2.5 px-4 rounded-lg bg-[#00F0FF] hover:bg-[#0070F3] text-black hover:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              Co-Found a Startup in This Role →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
