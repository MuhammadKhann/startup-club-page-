import React, { useState } from 'react';
import { RocketLogo } from './RocketLogo.tsx';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  onOpenApply,
}) => {
  const [copied, setCopied] = useState(false);
  const communityLink = 'https://chat.whatsapp.com/AU-Startup-Club-Multan-2026';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(communityLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    { name: '#announcements', desc: 'Recruitment status, room keys, sprint kickoffs' },
    { name: '#tech-and-ai', desc: 'Code commits, MVPs, LLM APIs, and hackathon teams' },
    { name: '#media-creative', desc: 'Visual campaigns, video reels, and brand drops' },
    { name: '#pitch-and-capital', desc: 'Pitch practice, corporate outreach & sponsors' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#070d17] border border-emerald-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-white my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close WhatsApp modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.558 1.942.882 3.003.882h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.748 0-3.39-.452-4.823-1.246l-5.177 1.358 1.38-5.049c-.887-1.488-1.38-3.218-1.38-5.063 0-5.514 4.486-10 10-10s10 4.486 10 10z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                OFFICIAL COMMUNITY HUB
              </span>
              <span className="text-zinc-500 text-xs">·</span>
              <span className="text-zinc-400 text-xs font-mono">AU MULTAN</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">AU Startup Club WhatsApp</h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
          Connect directly with builders, track leads, and student founders. Get sprint alerts, participate in midnight build rooms, and team up for hackathons.
        </p>

        {/* Channels preview */}
        <div className="space-y-2 mb-5">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
            Inside the Community
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {channels.map((ch) => (
              <div key={ch.name} className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                <span className="font-mono text-xs font-semibold text-[#19E4F2]">{ch.name}</span>
                <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link / Action row */}
        <div className="bg-black/80 border border-white/15 rounded-xl p-3 flex items-center justify-between gap-2 mb-5">
          <div className="truncate font-mono text-xs text-zinc-300">
            {communityLink}
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs text-white shrink-0 transition-colors"
          >
            {copied ? 'Copied Link!' : 'Copy'}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href={communityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Open WhatsApp Community ↗
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenApply();
            }}
            className="py-3 px-4 rounded-xl border border-white/20 hover:border-white/40 text-xs font-semibold text-white transition-colors"
          >
            Fill Application Form →
          </button>
        </div>
      </div>
    </div>
  );
};
