import React, { useState } from 'react';
import { RocketLogo } from './RocketLogo.tsx';

export const HeroVisual: React.FC = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const tags = [
    {
      label: 'BUILD',
      desc: 'Turn concepts into functional MVPs',
      coords: 'top-6 -left-2 sm:top-10 sm:left-4',
      pillColor: 'border-[#15AEEF] text-[#15AEEF] bg-[#15AEEF]/10',
      dotColor: '#15AEEF',
    },
    {
      label: 'LAUNCH',
      desc: 'Deploy live to early campus users',
      coords: 'top-10 -right-2 sm:top-14 sm:right-6',
      pillColor: 'border-[#19E4F2] text-[#19E4F2] bg-[#19E4F2]/10',
      dotColor: '#19E4F2',
    },
    {
      label: 'EXECUTE',
      desc: 'Sprint cycles, weekly demo deliverables',
      coords: 'bottom-20 -left-4 sm:bottom-24 sm:left-2',
      pillColor: 'border-white/30 text-white bg-white/5',
      dotColor: '#FFFFFF',
    },
    {
      label: 'SCALE',
      desc: 'Industry backing & venture validation',
      coords: 'bottom-14 -right-2 sm:bottom-16 sm:right-4',
      pillColor: 'border-[#FF6A19] text-[#FF6A19] bg-[#FF6A19]/10',
      dotColor: '#FF6A19',
    },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center p-4 select-none">
      {/* Background circular tech grid & halo */}
      <div className="absolute inset-0 rounded-full border border-white/5 tech-grid opacity-70" />
      
      {/* Primary cyan ambient halo */}
      <div 
        className="absolute w-[80%] h-[80%] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #19E4F2 0%, #15AEEF 40%, #FF6A19 80%, transparent 100%)',
        }}
      />

      {/* Thin orbital lines */}
      <div className="absolute inset-4 sm:inset-8 border border-[#19E4F2]/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-12 sm:inset-16 border border-[#15AEEF]/15 rounded-full" />
      <div className="absolute inset-20 sm:inset-24 border border-white/10 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]" />

      {/* Technical HUD Crosshairs & Coordinates */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
        AU-MULTAN // ACCEL-NODE.01
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-zinc-500 tracking-wider">
        SYS.STATE: REBUILD_ACTIVE
      </div>
      <div className="absolute top-1/2 left-2 -translate-y-1/2 font-mono text-[9px] text-zinc-600 -rotate-90">
        LAT 30.1984° N
      </div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2 font-mono text-[9px] text-zinc-600 rotate-90">
        LON 71.4687° E
      </div>

      {/* Floating Particles (CSS dots) */}
      <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-[#19E4F2] blur-[0.5px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white opacity-80" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#15AEEF]" />
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 rounded-full bg-[#FF6A19] animate-pulse" />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-[#19E4F2] opacity-60" />

      {/* Center Large Glowing Rocket Logo */}
      <div className="relative z-10 transition-transform duration-500 hover:scale-105">
        <RocketLogo size="hero" showGlow={true} />
      </div>

      {/* Floating Labels around the emblem: BUILD, LAUNCH, EXECUTE, SCALE */}
      {tags.map((tag) => (
        <div
          key={tag.label}
          onMouseEnter={() => setActiveLabel(tag.label)}
          onMouseLeave={() => setActiveLabel(null)}
          className={`absolute z-20 ${tag.coords} transition-all duration-300`}
        >
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md border backdrop-blur-md cursor-pointer transition-all duration-200 ${
              tag.pillColor
            } ${
              activeLabel === tag.label
                ? 'scale-110 shadow-[0_0_15px_rgba(25,228,242,0.4)]'
                : 'hover:scale-105'
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: tag.dotColor }}
            />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest">
              {tag.label}
            </span>
          </div>

          {/* Interactive contextual hint on hover */}
          {activeLabel === tag.label && (
            <div className="absolute left-0 mt-1.5 w-44 p-2 bg-[#060c18] border border-white/20 rounded shadow-xl text-[11px] text-zinc-300 font-sans z-30 pointer-events-none">
              {tag.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
