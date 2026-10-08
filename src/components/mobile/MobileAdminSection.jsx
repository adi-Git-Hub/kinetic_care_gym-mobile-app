import React from 'react';
import { 
  Dumbbell, ChevronRight, ZoomIn, CheckCircle2, XCircle, 
  Sparkles, Eye, UserCheck 
} from 'lucide-react';

export default function MobileAdminSection({ onOpenLightbox }) {
  return (
    <section 
      id="admin"
      className="relative py-12 px-5 bg-gradient-to-b from-[#04070A] via-[#060D12] to-[#04070A] border-t border-teal-500/15"
    >
      {/* Ambient Teal Background Glow */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="space-y-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full liquid-glass-teal text-teal-300 text-[10px] font-bold uppercase tracking-widest">
            <Dumbbell className="w-3 h-3 text-teal-400" />
            <span>SECTION 03 — ADMIN / TRAINER</span>
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight">
            ADMIN / TRAINER
          </h2>

          <p className="text-sm font-bold text-teal-400 font-serif italic">
            "Manage Members. Manage Their Workouts."
          </p>

          <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
            Strictly focused on member progress and 7-day splits. Zero financial clutter.
          </p>
        </div>

        {/* 5 Key Trainer Points */}
        <div className="p-3.5 rounded-2xl liquid-glass-teal space-y-2 text-xs">
          <div className="flex items-center justify-between text-[11px] font-bold text-teal-300 uppercase tracking-wider pb-1 border-b border-white/5">
            <span>TRAINER RESPONSIBILITIES</span>
            <UserCheck className="w-4 h-4 text-teal-400" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-200">
            <span className="flex items-center gap-1.5">✓ MEMBERS DIRECTORY</span>
            <span className="flex items-center gap-1.5">✓ WORKOUT PLANS</span>
            <span className="flex items-center gap-1.5">✓ CHANGE PLAN</span>
            <span className="flex items-center gap-1.5">✓ ADD EXERCISES</span>
            <span className="flex items-center gap-1.5 col-span-2">✓ UPDATE WEEKLY SPLIT</span>
          </div>
        </div>

        {/* ========================================================
            ONLY ONE ADMIN IMAGE PREVIEW CONTAINER (admin.png)
           ======================================================== */}
        <div className="relative rounded-3xl liquid-glass-teal p-3 sm:p-4 overflow-hidden shadow-2xl border border-teal-400/25 space-y-3">
          
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 px-2 py-0.5 rounded-md bg-teal-500/10 border border-teal-500/30">
              SOURCE ASSET: admin.png
            </span>

            <button
              onClick={() => onOpenLightbox('/admin.png', 'Admin / Trainer Panel', 'Members List, Plan Details & Split Editor')}
              className="touch-target-44 flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-teal-300 transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5 text-teal-400" />
              <span>Inspect UI</span>
            </button>
          </div>

          {/* Controlled Preview Container (Contain, no distortion, no stretching) */}
          <div 
            onClick={() => onOpenLightbox('/admin.png', 'Admin / Trainer Panel', 'Members List, Plan Details & Split Editor')}
            className="cursor-zoom-in relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/80 flex items-center justify-center p-2 border border-white/5 shadow-inner"
          >
            <img 
              src="/admin.png" 
              alt="Admin Trainer Panel" 
              className="w-full h-full object-contain rounded-xl shadow-2xl hover:scale-[1.02] transition-transform"
            />
            
            {/* Subtle tap to expand badge */}
            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] text-teal-300 border border-teal-500/30 flex items-center gap-1">
              <ZoomIn className="w-3 h-3" /> Tap to Zoom
            </div>
          </div>

          {/* Workflow Sequence */}
          <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">
              TRAINER WORKFLOW
            </p>
            <div className="text-[11px] font-mono font-bold text-teal-300/90 text-center space-y-1">
              <div>SELECT MEMBER</div>
              <div className="text-slate-500">↓</div>
              <div>VIEW PLAN</div>
              <div className="text-slate-500">↓</div>
              <div>CHANGE PLAN</div>
              <div className="text-slate-500">↓</div>
              <div>EDIT / ADD EXERCISES</div>
              <div className="text-slate-500">↓</div>
              <div>SAVE</div>
              <div className="text-slate-500">↓</div>
              <div className="text-emerald-400 font-sans">CLIENT GETS UPDATED PLAN ✓</div>
            </div>
          </div>

          {/* Reveal Button */}
          <button
            onClick={() => onOpenLightbox('/admin.png', 'Admin / Trainer Panel', 'Members List, Plan Details & Split Editor')}
            className="w-full touch-target-44 py-3.5 px-5 rounded-2xl font-extrabold text-xs skeuo-btn-cyan flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <span>VIEW ADMIN PANEL</span>
          </button>
        </div>

      </div>
    </section>
  );
}
