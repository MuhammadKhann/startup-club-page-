import React, { useState } from 'react';
import { RocketLogo } from './RocketLogo.tsx';

export const HeroVisual: React.FC = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const tags = [
    {
      label: 'VALIDATE',
      sub: 'Market & Economics',
      desc: 'Customer discovery, unit economics & business model validation',
      coords: 'top-4 -left-2 sm:top-8 sm:left-4',
      pillColor: 'border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10',
      dotColor: '#00F0FF',
    },
    {
      label: 'BUILD',
      sub: 'Product & AI',
      desc: 'Rapid production MVPs and intelligent software architecture',
      coords: 'top-6 -right-2 sm:top-10 sm:right-4',
      pillColor: 'border-[#0070F3]/40 text-[#0070F3] bg-[#0070F3]/10',
      dotColor: '#0070F3',
    },
    {
      label: 'SCALE',
      sub: 'GTM & Brand',
      desc: 'Conversion UI/UX, product marketing and customer acquisition',
      coords: 'bottom-24 -left-3 sm:bottom-28 sm:left-2',
      pillColor: 'border-[#9D4EDD]/40 text-[#D8B4FE] bg-[#9D4EDD]/10',
      dotColor: '#9D4EDD',
    },
    {
      label: 'FUND',
      sub: 'Capital & Demo Day',
      desc: 'Investor pitch decks, corporate sponsorships & venture term sheets',
      coords: 'bottom-16 -right-2 sm:bottom-20 sm:right-4',
      pillColor: 'border-[#FF6A19]/40 text-[#FF6A19] bg-[#FF6A19]/10',
      dotColor: '#FF6A19',
    },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] mx-auto flex items-center justify-center p-4 select-none">
      {/* Background circular tech grid & cosmic halo */}
      <div className="absolute inset-0 rounded-full border border-white/5 tech-grid opacity-60" />
      
      {/* Primary cyan/blue ambient halo */}
      <div 
        className="absolute w-[85%] h-[85%] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00F0FF 0%, #0070F3 40%, #FF6A19 80%, transparent 100%)',
        }}
      />

      {/* Thin orbital lines */}
      <div className="absolute inset-4 sm:inset-6 border border-[#00F0FF]/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-12 sm:inset-14 border border-[#0070F3]/15 rounded-full" />
      <div className="absolute inset-20 sm:inset-22 border border-white/10 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]" />

      {/* Technical Venture HUD Coordinates */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] text-zinc-500 tracking-widest uppercase">
        AU-VENTURE-ACCELERATOR // MULTAN
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] text-zinc-500 tracking-wider">
        DISCIPLINES: BIZ · TECH · DESIGN · CAPITAL
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-[#00F0FF] blur-[0.5px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white opacity-80" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#0070F3]" />
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 rounded-full bg-[#FF6A19] animate-pulse" />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-[#9D4EDD] opacity-80" />

      {/* Center 3D Rocket Logo */}
      <div className="relative z-10 transition-transform duration-500 hover:scale-105">
        <RocketLogo size="hero" showGlow={true} />
      </div>

      {/* Floating Milestone Badges around the Rocket */}
      {tags.map((tag) => (
        <div
          key={tag.label}
          onMouseEnter={() => setActiveLabel(tag.label)}
          onMouseLeave={() => setActiveLabel(null)}
          className={`absolute z-20 ${tag.coords} transition-all duration-300`}
        >
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border backdrop-blur-md cursor-pointer transition-all duration-200 ${
              tag.pillColor
            } ${
              activeLabel === tag.label
                ? 'scale-110 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'hover:scale-105'
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: tag.dotColor }}
            />
            <div className="text-left">
              <span className="font-mono text-xs sm:text-sm font-extrabold tracking-wider block">
                {tag.label}
              </span>
              <span className="hidden sm:block text-[9px] text-zinc-400 font-sans leading-none mt-0.5">
                {tag.sub}
              </span>
            </div>
          </div>

          {/* Contextual description tooltip */}
          {activeLabel === tag.label && (
            <div className="absolute left-0 mt-2 w-48 sm:w-56 p-2.5 bg-[#0e111a] border border-white/20 rounded-lg shadow-2xl text-[11px] text-zinc-200 font-sans z-30 pointer-events-none">
              {tag.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
