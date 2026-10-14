import React from 'react';
import { TrackInfo } from '../data/clubData.ts';

interface TrackDetailModalProps {
  track: TrackInfo | null;
  onClose: () => void;
  onApplyForTrack: (trackId: string) => void;
}

export const TrackDetailModal: React.FC<TrackDetailModalProps> = ({
  track,
  onClose,
  onApplyForTrack,
}) => {
  if (!track) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#070b14] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Close track detail modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: track.accentColor }}
          />
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
            {track.kicker}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          {track.name}
        </h2>
        <p className="text-sm text-zinc-300 italic mb-6">"{track.quote}"</p>

        {/* Deliverables / Sprints */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#19E4F2] mb-3">
              Core Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {track.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#19E4F2] mb-3">
              Upcoming Sprints (What You'll Build)
            </h4>
            <div className="space-y-2">
              {track.upcomingSprints.map((sprint, idx) => (
                <div
                  key={sprint}
                  className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-zinc-500 mt-0.5">0{idx + 1}</span>
                  <span className="text-xs sm:text-sm text-zinc-200">{sprint}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#19E4F2] mb-2.5">
                Open Builder Roles
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {track.openRoles.map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <span className="text-[#15AEEF]">✦</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#19E4F2] mb-2.5">
                Execution Stack & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {track.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[#0e1726] border border-white/10 text-[11px] font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApplyForTrack(track.id);
            }}
            className="px-6 py-2.5 rounded-lg bg-[#15AEEF] hover:bg-[#19E4F2] text-black font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-[0_0_15px_rgba(21,174,239,0.4)]"
          >
            Apply for {track.name} →
          </button>
        </div>
      </div>
    </div>
  );
};
