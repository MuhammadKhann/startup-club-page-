import React, { useState, useEffect } from 'react';
import { RocketLogo } from './RocketLogo.tsx';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Join', href: '#why-join' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020304]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark + icon */}
          <a
            href="#"
            className="flex items-center gap-3 group text-white hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            <RocketLogo size="md" showGlow={false} />
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-base sm:text-lg text-white font-sans">
                AU STARTUP CLUB
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#19E4F2] px-1.5 py-0.5 rounded border border-[#19E4F2]/30 bg-[#19E4F2]/5">
                AIR MULTAN
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#19E4F2] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#19E4F2] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApply}
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-lg border border-[#15AEEF] bg-[#15AEEF]/10 hover:bg-[#15AEEF] text-white hover:text-black font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(21,174,239,0.2)] hover:shadow-[0_0_25px_rgba(25,228,242,0.6)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                JOIN THE REBUILD <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
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
        <div className="md:hidden bg-[#020304]/95 border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-[#19E4F2] hover:bg-white/5 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg bg-[#15AEEF] text-black font-bold text-sm tracking-wide"
            >
              JOIN THE REBUILD →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
