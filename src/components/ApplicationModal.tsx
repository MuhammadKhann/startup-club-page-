import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DEPARTMENTS, SEMESTERS, TRACKS, OFFICIAL_LINKS } from '../data/clubData.ts';
import { RocketLogo } from './RocketLogo.tsx';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
  initialRoleTier?: 'cohort' | 'council';
  onOpenWhatsApp: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialTrack,
  initialRoleTier = 'cohort',
  onOpenWhatsApp,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitting, setSubmitting] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    department: DEPARTMENTS[0],
    semester: SEMESTERS[0],
    track: initialTrack || 'tech-ai',
    roleTier: initialRoleTier,
    builderPitch: '',
    portfolioUrl: '',
  });

  const [applicantId, setApplicantId] = useState('');

  if (!isOpen) return null;

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      return;
    }
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const generatedId = `AU-26-${Math.floor(1000 + Math.random() * 9000)}`;
      setApplicantId(generatedId);
      setSubmitting(false);
      setStep(4);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#19E4F2', '#15AEEF', '#FF6A19', '#ffffff'],
        });
      } catch {
        // Fallback if canvas is unavailable
      }
    }, 600);
  };

  const copyApplicantId = () => {
    navigator.clipboard.writeText(applicantId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#060a12] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-white my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close recruitment modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
          <RocketLogo size="sm" showGlow={true} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-[#19E4F2] font-semibold tracking-wider uppercase">
                AU STARTUP CLUB · RECRUITMENT 2026/27
              </span>
              <span className="text-zinc-500 text-xs">·</span>
              <span className="text-zinc-400 text-xs font-mono">≈ 90 SEC</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              {step === 4 ? 'Application Received' : 'Join the Rebuild'}
            </h2>
          </div>
        </div>

        {/* Official Google Form Direct Banner */}
        {step < 4 && (
          <div className="mb-5 p-3 rounded-xl bg-[#15AEEF]/10 border border-[#15AEEF]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-left">
              <span className="font-mono text-[10px] text-[#19E4F2] uppercase font-bold block">
                👉 Step 1: Official Recruitment Form
              </span>
              <span className="text-xs text-zinc-300">
                You can also fill the official Google Form directly (90 secs).
              </span>
            </div>
            <a
              href={OFFICIAL_LINKS.RECRUITMENT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-bold text-xs whitespace-nowrap shrink-0 transition-colors text-center"
            >
              Open Google Form ↗
            </a>
          </div>
        )}

        {/* Step Progress Pills */}
        {step < 4 && (
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div
              className={`h-1.5 rounded-full transition-all ${
                step >= 1 ? 'bg-[#15AEEF]' : 'bg-white/10'
              }`}
            />
            <div
              className={`h-1.5 rounded-full transition-all ${
                step >= 2 ? 'bg-[#15AEEF]' : 'bg-white/10'
              }`}
            />
            <div
              className={`h-1.5 rounded-full transition-all ${
                step >= 3 ? 'bg-[#15AEEF]' : 'bg-white/10'
              }`}
            />
          </div>
        )}

        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <form onSubmit={handleNextStep1} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Full Name <span className="text-[#FF6A19]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Bilal Ahmed"
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#15AEEF] focus:ring-1 focus:ring-[#15AEEF]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  AU Email / Student ID <span className="text-[#FF6A19]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. 23-CS-042 or student@multan.au.edu.pk"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#15AEEF] focus:ring-1 focus:ring-[#15AEEF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  WhatsApp Contact <span className="text-[#FF6A19]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="e.g. 0300 1234567"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#15AEEF] focus:ring-1 focus:ring-[#15AEEF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Department</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#15AEEF]"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept} className="bg-[#0b1322] text-white">
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Current Semester</label>
                <select
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-[#15AEEF]"
                >
                  {SEMESTERS.map((sem) => (
                    <option key={sem} value={sem} className="bg-[#0b1322] text-white">
                      {sem}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-semibold text-sm transition-colors cursor-pointer"
              >
                Next: Select Track →
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Track & Role Tier */}
        {step === 2 && (
          <form onSubmit={handleNextStep2} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-2">
                Choose Primary Track <span className="text-[#FF6A19]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TRACKS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, track: t.id })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.track === t.id
                        ? 'border-[#19E4F2] bg-[#19E4F2]/10 shadow-[0_0_12px_rgba(25,228,242,0.2)]'
                        : 'border-white/10 bg-white/5 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-white">{t.name}</span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: t.accentColor }}
                      />
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-1">{t.tagline}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-medium text-zinc-300 mb-2">
                Recruitment Tier
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, roleTier: 'cohort' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formData.roleTier === 'cohort'
                      ? 'border-[#15AEEF] bg-[#15AEEF]/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <span className="block font-semibold text-xs text-white">Active Cohort</span>
                  <span className="text-[11px] text-zinc-400">Builder squad member, build projects</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, roleTier: 'council' })}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    formData.roleTier === 'council'
                      ? 'border-[#FF6A19] bg-[#FF6A19]/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="block font-semibold text-xs text-white">Core Council</span>
                    <span className="text-[9px] font-mono text-[#FF6A19] uppercase">Leadership</span>
                  </div>
                  <span className="text-[11px] text-zinc-400">Direct tracks, ops & lead rebuild</span>
                </button>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-semibold text-sm transition-colors cursor-pointer"
              >
                Next: Fast Builder Pitch →
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Fast Builder Pitch */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                What is 1 project, tool, or campaign you want to build this semester? <span className="text-[#FF6A19]">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.builderPitch}
                onChange={(e) => setFormData({ ...formData, builderPitch: e.target.value })}
                placeholder="e.g. I want to build an automated exam notifier for Air University students / create viral video reels for our tech events..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#15AEEF] focus:ring-1 focus:ring-[#15AEEF]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Proof of Work / Links (Optional)
              </label>
              <input
                type="text"
                value={formData.portfolioUrl}
                onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                placeholder="GitHub, Behance, LinkedIn, Drive folder, or recent work link"
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#15AEEF] focus:ring-1 focus:ring-[#15AEEF]"
              />
              <p className="text-[11px] text-zinc-400 mt-1">
                No past links? Don't worry — dedication and willingness to execute matter most.
              </p>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded-lg bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Submitting Application...' : 'Submit Application (Done) →'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Success Screen */}
        {step === 4 && (
          <div className="text-center py-4 space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#15AEEF]/20 border border-[#19E4F2] flex items-center justify-center text-[#19E4F2] text-2xl font-bold shadow-[0_0_20px_rgba(25,228,242,0.3)]">
              ✓
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">You're in the Queue!</h3>
              <p className="text-sm text-zinc-300 mt-1">
                Your application for <span className="text-[#19E4F2] font-semibold">{formData.fullName}</span> has been logged into the AU Startup Club Rebuild Database.
              </p>
            </div>

            {/* Applicant ID Box */}
            <div className="bg-black/80 border border-white/15 rounded-xl p-4 flex items-center justify-between max-w-sm mx-auto">
              <div className="text-left">
                <span className="block text-[10px] font-mono text-zinc-400 uppercase">Applicant Code</span>
                <span className="font-mono text-lg font-bold text-white tracking-wider">{applicantId}</span>
              </div>
              <button
                onClick={copyApplicantId}
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-mono text-zinc-200 transition-colors"
              >
                {copiedId ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            {/* Crucial Next Steps: Form & WhatsApp Official Links */}
            <div className="space-y-3 max-w-md mx-auto text-left">
              {/* Step 1 Link Card */}
              <div className="bg-[#0b1424] border border-[#15AEEF]/40 rounded-xl p-3.5 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-[#19E4F2] font-bold block">
                    👉 Step 1: Fill Recruitment Form (90 secs)
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono truncate block max-w-[240px]">
                    {OFFICIAL_LINKS.RECRUITMENT_FORM}
                  </span>
                </div>
                <a
                  href={OFFICIAL_LINKS.RECRUITMENT_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-bold text-xs whitespace-nowrap shrink-0 transition-colors"
                >
                  Open Form ↗
                </a>
              </div>

              {/* Step 2 WhatsApp Card */}
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold block">
                    👉 Step 2: Instantly Join Official WhatsApp Community
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono truncate block">
                  {OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                </span>
                <a
                  href={OFFICIAL_LINKS.WHATSAPP_COMMUNITY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
                >
                  Join Official WhatsApp Community ↗
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
              >
                Return to Landing Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
