import React from 'react';

interface RocketLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showGlow?: boolean;
}

export const RocketLogo: React.FC<RocketLogoProps> = ({
  className = '',
  size = 'md',
  showGlow = true,
}) => {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-16 h-16',
    xl: 'w-32 h-32',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      {/* Background radial glow */}
      {showGlow && (
        <div 
          className="absolute inset-0 rounded-full blur-2xl pointer-events-none opacity-60 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(25,228,242,0.35) 0%, rgba(21,174,239,0.15) 50%, transparent 70%)',
          }}
        />
      )}

      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_20px_rgba(21,174,239,0.5)]"
      >
        <defs>
          {/* Main electric blue/cyan gradient */}
          <linearGradient id="auRocketGrad" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#19E4F2" />
            <stop offset="60%" stopColor="#15AEEF" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Core metallic cockpit gradient */}
          <linearGradient id="auCockpitGrad" x1="100" y1="50" x2="100" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#19E4F2" />
            <stop offset="100%" stopColor="#0B3C6D" />
          </linearGradient>

          {/* Orange thruster flame gradient */}
          <linearGradient id="auFlameGrad" x1="100" y1="140" x2="100" y2="195" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FFB020" />
            <stop offset="70%" stopColor="#FF6A19" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>

          {/* Cyan glow filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="flameRadial" cx="100" cy="155" r="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6A19" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF6A19" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Thruster Glow */}
        <circle cx="100" cy="165" r="28" fill="url(#flameRadial)" className="animate-pulse" />

        {/* Outer Orbital Orbit Ring Line */}
        <ellipse
          cx="100"
          cy="100"
          rx="88"
          ry="32"
          stroke="#19E4F2"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeOpacity="0.4"
          transform="rotate(-25 100 100)"
        />

        {/* Rocket Thruster Flame (Orange Accent 5-10%) */}
        <path
          d="M93 148 C93 148 95 182 100 192 C105 182 107 148 107 148 C102 153 98 153 93 148 Z"
          fill="url(#auFlameGrad)"
          className="animate-pulse"
        />
        {/* Inner intense white core flame */}
        <path
          d="M96 148 C96 148 98 170 100 178 C102 170 104 148 104 148 C102 151 98 151 96 148 Z"
          fill="#FFF"
          opacity="0.9"
        />

        {/* Rocket / Letter "A" Left Fin & Leg */}
        <path
          d="M100 24 L64 125 L42 148 L68 144 L78 120 L100 68 Z"
          fill="url(#auRocketGrad)"
          stroke="#19E4F2"
          strokeWidth="1.5"
          filter="url(#neonGlow)"
        />

        {/* Rocket / Letter "A" Right Fin & Leg */}
        <path
          d="M100 24 L136 125 L158 148 L132 144 L122 120 L100 68 Z"
          fill="url(#auRocketGrad)"
          stroke="#19E4F2"
          strokeWidth="1.5"
          filter="url(#neonGlow)"
        />

        {/* Horizontal Bridge of Letter "A" / Rocket Wing Structure */}
        <path
          d="M74 114 L126 114 L130 124 L70 124 Z"
          fill="#06182C"
          stroke="#19E4F2"
          strokeWidth="1.5"
        />

        {/* Center Fuselage / Rocket Body (Nosecone to Engine) */}
        <path
          d="M100 18 C92 36 90 70 90 144 L110 144 C110 70 108 36 100 18 Z"
          fill="#06101E"
          stroke="#19E4F2"
          strokeWidth="1.8"
        />

        {/* Cockpit / Tech Core Diamond */}
        <polygon
          points="100,52 108,74 100,92 92,74"
          fill="url(#auCockpitGrad)"
          stroke="#FFFFFF"
          strokeWidth="1"
        />

        {/* Center Engine Nozzle */}
        <path
          d="M91 144 L109 144 L106 150 L94 150 Z"
          fill="#FF6A19"
          stroke="#FFB020"
          strokeWidth="1"
        />

        {/* Tech Coordinate / HUD Crosshairs */}
        <line x1="100" y1="8" x2="100" y2="16" stroke="#19E4F2" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="24" y1="100" x2="32" y2="100" stroke="#19E4F2" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="168" y1="100" x2="176" y2="100" stroke="#19E4F2" strokeWidth="1.5" strokeOpacity="0.6" />
      </svg>
    </div>
  );
};
