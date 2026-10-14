import React from 'react';

interface RocketLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showGlow?: boolean;
}

export const RocketLogo: React.FC<RocketLogoProps> = ({
  className = '',
  size = 'md',
  showGlow = true,
}) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size]} ${className} group`}>
      {/* 3D Background radial atmospheric glow */}
      {showGlow && (
        <div 
          className="absolute inset-[-15%] rounded-full blur-2xl pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(25,228,242,0.4) 0%, rgba(21,174,239,0.2) 45%, rgba(255,106,25,0.15) 75%, transparent 100%)',
          }}
        />
      )}

      {/* 3D Animated Rocket SVG */}
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_4px_24px_rgba(21,174,239,0.45)] transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* 3D Isometric Lighting for Fuselage */}
          <linearGradient id="fuselage3D" x1="60" y1="20" x2="140" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#E0F7FA" />
            <stop offset="45%" stopColor="#19E4F2" />
            <stop offset="75%" stopColor="#15AEEF" />
            <stop offset="95%" stopColor="#082A4D" />
            <stop offset="100%" stopColor="#031122" />
          </linearGradient>

          {/* 3D Left Wing / Fin with ambient light */}
          <linearGradient id="leftWing3D" x1="40" y1="100" x2="95" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#19E4F2" />
            <stop offset="50%" stopColor="#0B3E70" />
            <stop offset="100%" stopColor="#031224" />
          </linearGradient>

          {/* 3D Right Wing / Fin in shadow */}
          <linearGradient id="rightWing3D" x1="105" y1="100" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#15AEEF" />
            <stop offset="50%" stopColor="#06223F" />
            <stop offset="100%" stopColor="#020B17" />
          </linearGradient>

          {/* 3D Cockpit Metallic Specular */}
          <linearGradient id="cockpitGlass" x1="90" y1="50" x2="110" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#80DEEA" />
            <stop offset="70%" stopColor="#0F385C" />
            <stop offset="100%" stopColor="#041324" />
          </linearGradient>

          {/* Intense Supersonic Flame Gradient (Shooting Out) */}
          <linearGradient id="mainFlame" x1="100" y1="150" x2="100" y2="235" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="18%" stopColor="#FFF59D" />
            <stop offset="45%" stopColor="#FFB300" />
            <stop offset="75%" stopColor="#FF6A19" />
            <stop offset="95%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#B71C1C" stopOpacity="0" />
          </linearGradient>

          {/* Inner Core Plasma Plume */}
          <linearGradient id="innerCoreFlame" x1="100" y1="150" x2="100" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFF9C4" />
            <stop offset="85%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="thrusterBloom" x="-50%" y="-20%" width="200%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic Thruster Heat Haze & Ambient Fire Bulb */}
        <ellipse cx="100" cy="180" rx="35" ry="45" fill="url(#mainFlame)" opacity="0.3" filter="url(#thrusterBloom)" />

        {/* Animated Thruster Sparks shooting out */}
        <g className="animate-pulse">
          <circle cx="100" cy="225" r="2.5" fill="#FFE082" />
          <circle cx="94" cy="215" r="2" fill="#FF6A19" />
          <circle cx="106" cy="220" r="2.2" fill="#FFB300" />
          <circle cx="98" cy="232" r="1.8" fill="#FF5722" />
          <circle cx="103" cy="235" r="1.5" fill="#FFF" />
        </g>

        {/* Main 3D Exhaust Flame (Layers expanding and contracting) */}
        <path
          d="M86 154 C82 170 88 205 100 232 C112 205 118 170 114 154 C106 160 94 160 86 154 Z"
          fill="url(#mainFlame)"
          filter="url(#thrusterBloom)"
        >
          <animate
            attributeName="d"
            dur="0.22s"
            repeatCount="indefinite"
            values="
              M86 154 C82 170 88 205 100 232 C112 205 118 170 114 154 C106 160 94 160 86 154 Z;
              M84 154 C80 175 86 215 100 238 C114 215 120 175 116 154 C106 162 94 162 84 154 Z;
              M87 154 C83 168 89 200 100 228 C111 200 117 168 113 154 C105 159 95 159 87 154 Z;
              M86 154 C82 170 88 205 100 232 C112 205 118 170 114 154 C106 160 94 160 86 154 Z
            "
          />
        </path>

        {/* Intense Core White/Yellow Jet Flame */}
        <path
          d="M92 154 C90 166 94 192 100 210 C106 192 110 166 108 154 C104 158 96 158 92 154 Z"
          fill="url(#innerCoreFlame)"
        >
          <animate
            attributeName="d"
            dur="0.18s"
            repeatCount="indefinite"
            values="
              M92 154 C90 166 94 192 100 210 C106 192 110 166 108 154 C104 158 96 158 92 154 Z;
              M91 154 C88 170 93 198 100 216 C107 198 112 170 109 154 C104 159 96 159 91 154 Z;
              M92 154 C90 166 94 192 100 210 C106 192 110 166 108 154 C104 158 96 158 92 154 Z
            "
          />
        </path>

        {/* Supersonic Diamond Ring Shockwave */}
        <polygon points="100,168 104,175 100,182 96,175" fill="#FFFFFF" opacity="0.9" />
        <polygon points="100,186 103,191 100,196 97,191" fill="#FFFFFF" opacity="0.75" />

        {/* 3D Left Wing (Letter A leg with 3D bevel and edge glow) */}
        <path
          d="M100 22 L56 128 L32 152 L62 148 L74 122 L100 64 Z"
          fill="url(#leftWing3D)"
          stroke="#19E4F2"
          strokeWidth="1.5"
        />
        {/* Left Wing Top Specular Bevel Line */}
        <path d="M100 24 L58 126 L36 148" stroke="#E0F7FA" strokeWidth="1" strokeOpacity="0.8" />

        {/* 3D Right Wing (Letter A leg in deeper shadow with rim light) */}
        <path
          d="M100 22 L144 128 L168 152 L138 148 L126 122 L100 64 Z"
          fill="url(#rightWing3D)"
          stroke="#15AEEF"
          strokeWidth="1.5"
        />
        {/* Right Wing Rim Highlight */}
        <path d="M144 128 L168 152 L138 148" stroke="#19E4F2" strokeWidth="1" strokeOpacity="0.5" />

        {/* Horizontal Structural Bridge (A-Crossbar) with 3D Depth */}
        <path
          d="M72 118 L128 118 L133 128 L67 128 Z"
          fill="#061A2F"
          stroke="#19E4F2"
          strokeWidth="1.5"
        />
        <line x1="72" y1="120" x2="128" y2="120" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" />

        {/* Central 3D Fuselage (Nosecone to Thruster) */}
        <path
          d="M100 14 C90 32 86 66 86 150 L114 150 C114 66 110 32 100 14 Z"
          fill="url(#fuselage3D)"
          stroke="#19E4F2"
          strokeWidth="1.8"
        />

        {/* Center 3D Nosecone Spine Highlight */}
        <path
          d="M100 15 L100 149"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />

        {/* Left Side Highlight Reflection */}
        <path
          d="M93 36 C91 60 90 95 90 144"
          stroke="#E0F7FA"
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />

        {/* 3D Cockpit Window with Reflection Glass */}
        <ellipse cx="100" cy="72" rx="7" ry="12" fill="url(#cockpitGlass)" stroke="#FFFFFF" strokeWidth="1.2" />
        <ellipse cx="98" cy="67" rx="2.5" ry="4.5" fill="#FFFFFF" opacity="0.85" />

        {/* Titanium Exhaust Nozzle with Orange Glowing Lip */}
        <path
          d="M88 148 L112 148 L109 155 L91 155 Z"
          fill="#FF6A19"
          stroke="#FFA726"
          strokeWidth="1.2"
        />
        <line x1="89" y1="154" x2="111" y2="154" stroke="#FFF" strokeWidth="1" />

        {/* Precision HUD Coordinate Crosshairs */}
        <line x1="100" y1="4" x2="100" y2="10" stroke="#19E4F2" strokeWidth="1.5" />
        <line x1="20" y1="100" x2="28" y2="100" stroke="#19E4F2" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="172" y1="100" x2="180" y2="100" stroke="#19E4F2" strokeWidth="1.2" strokeOpacity="0.6" />
      </svg>
    </div>
  );
};
