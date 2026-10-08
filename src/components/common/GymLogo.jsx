import React from 'react';

export default function GymLogo({ size = 'default', showSubtitle = true, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const iconSize = isLarge ? 'w-10 h-10' : isSmall ? 'w-6 h-6' : 'w-8 h-8';
  const titleSize = isLarge ? 'text-2xl' : isSmall ? 'text-base' : 'text-lg';
  const subSize = isLarge ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Cyan Crest Gym Icon */}
      <div className={`relative ${iconSize} flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-teal-900/40 to-slate-900 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,229,255,0.3)]`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-3/4 h-3/4 text-cyan-400"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Muscular Crest / Bull Horns / Kinetic Shield */}
          <path d="M4 6c0 6 3 11 8 13 5-2 8-7 8-13" />
          <path d="M7 9l5 4 5-4" />
          <path d="M12 4v9" />
          <path d="M9 3c-2 0-4 1.5-5 4" strokeDasharray="1 1" />
          <path d="M15 3c2 0 4 1.5 5 4" strokeDasharray="1 1" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
      </div>

      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-wider text-white font-display ${titleSize} flex items-center gap-1.5`}>
          <span>KINETIC</span>
        </span>
        {showSubtitle && (
          <span className={`text-cyan-400 tracking-[0.25em] font-semibold mt-0.5 ${subSize}`}>
            CARE GYM
          </span>
        )}
      </div>
    </div>
  );
}
