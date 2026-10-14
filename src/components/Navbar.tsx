import React, { useState, useEffect } from 'react';
import { RocketLogo } from './RocketLogo.tsx';
import { OFFICIAL_LINKS } from '../data/clubData.ts';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accelerator Model', href: '#accelerator' },
    { name: '5 Tracks', href: '#tracks' },
    { name: 'Squad Matching', href: '#squads' },
    { name: 'Output Vault', href: '#output' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0C]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          {/* Zone 1: Single brand wordmark + 3D rocket */}
          <a
            href="#"
            className="flex items-center gap-3 group text-white hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
          >
            <RocketLogo size="md" showGlow={true} />
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-white font-sans">
                AU STARTUP CLUB
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-[#00F0FF] px-2 py-0.5 rounded border border-[#00F0FF]/30 bg-[#00F0FF]/5">
                VENTURE INCUBATOR
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00F0FF] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00F0FF] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={OFFICIAL_LINKS.RECRUITMENT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-lg border border-[#00F0FF] bg-[#00F0FF]/10 hover:bg-[#00F0FF] text-white hover:text-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                JOIN THE COHORT <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>

            {/* Mobile quick apply button */}
            <button
              onClick={onOpenApply}
              className="sm:hidden px-3.5 py-1.5 rounded-lg bg-[#00F0FF] text-black font-bold text-xs"
            >
              Apply (90s)
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0C]/98 border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-[#00F0FF] hover:bg-white/5 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={OFFICIAL_LINKS.RECRUITMENT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 text-center rounded-lg bg-[#00F0FF] text-black font-bold text-sm tracking-wide block"
            >
              FILL RECRUITMENT FORM (90 SECS) ↗
            </a>
            <a
              href={OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-semibold text-xs tracking-wider block"
            >
              OPEN WHATSAPP COMMUNITY ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
