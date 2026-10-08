import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, imageSrc, title, subtitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn select-none"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[95vh] bg-[#0A1015] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,229,255,0.3)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-[#0D151C] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/kinetic_logo.png" alt="Kinetic Logo" className="h-7 w-auto" />
            <div className="border-l border-white/10 pl-3">
              <h3 className="text-sm font-extrabold text-white">{title || 'UI Specification'}</h3>
              <p className="text-[11px] text-cyan-400 font-mono">{subtitle || 'Kinetic Care Gym Source Asset'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Image Area */}
        <div className="flex-1 overflow-auto p-2 sm:p-6 flex items-center justify-center bg-[#060A0D]">
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-h-[82vh] w-auto object-contain rounded-lg border border-white/5 shadow-2xl"
          />
        </div>

        {/* Bottom Hint */}
        <div className="py-2.5 px-4 bg-[#090E13] border-t border-white/5 text-[11px] text-slate-400 flex justify-between items-center">
          <span>Source of Truth High-Resolution Asset</span>
          <span className="text-cyan-400 font-mono">100% Native Design Ratio</span>
        </div>
      </div>
    </div>
  );
}
