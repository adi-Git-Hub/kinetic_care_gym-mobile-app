import React from 'react';
import { 
  Smartphone, Dumbbell, ShieldCheck, ArrowRight, ArrowDown, 
  Sparkles, CheckCircle2, HeartHandshake, Layers 
} from 'lucide-react';

export default function EcosystemSection({ onScrollToTop }) {
  return (
    <section 
      id="ecosystem"
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#060A0D] via-[#080D11] to-[#040608] border-t border-white/5 overflow-hidden text-center"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>SECTION 06 — SYSTEM ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-display leading-tight">
            ONE GYM.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-100">
              ONE CONNECTED SYSTEM.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A unified digital ecosystem that aligns members, trainers, and gym owners without friction.
          </p>
        </div>

        {/* The 3-Role Connected Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          
          {/* Role 1: CLIENT */}
          <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#0E1E26] to-[#0A141A] border border-cyan-500/30 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Smartphone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">ROLE 01</span>
                <h3 className="text-2xl font-black text-white">CLIENT</h3>
                <p className="text-xs font-bold text-cyan-300 mt-0.5">"Workout Experience"</p>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">↓</span>
                  <span><strong>Receives:</strong> Real-time workout plan</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Executes movements with video form guides</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Connects with assigned coach & personal training</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-medium">
              Zero clutter. Workout-focused.
            </div>
          </div>

          {/* Role 2: ADMIN / TRAINER */}
          <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#11242E] to-[#0B171E] border border-teal-500/30 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Dumbbell className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">ROLE 02</span>
                <h3 className="text-2xl font-black text-white">ADMIN / TRAINER</h3>
                <p className="text-xs font-bold text-teal-300 mt-0.5">"Workout Management"</p>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">↓</span>
                  <span><strong>Creates / Updates:</strong> 7-Day Workout Plan</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span>Prescribes customized exercises, sets & reps</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold">✓</span>
                  <span>Updates split which immediately appears in client app</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-medium">
              Zero accounting. Training-focused.
            </div>
          </div>

          {/* Role 3: SUPER ADMIN */}
          <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#141F28] to-[#0D151D] border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">ROLE 03</span>
                <h3 className="text-2xl font-black text-white">SUPER ADMIN</h3>
                <p className="text-xs font-bold text-emerald-300 mt-0.5">"Membership + Finance"</p>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">↓</span>
                  <span><strong>Manages:</strong> Membership + Fees + Payments</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Direct dashboard visibility for expiring members (12)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Generates official GST tax receipts & audits revenue</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-slate-400 font-medium">
              Zero workout distraction. Business-focused.
            </div>
          </div>

        </div>

        {/* Final Branding & Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#081016] border border-cyan-500/30 shadow-[0_0_60px_rgba(0,229,255,0.2)] max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center">
            <img 
              src="/kinetic_logo.png" 
              alt="Kinetic Care Gym" 
              className="h-16 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]" 
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              "Everything your gym needs.<br />
              <span className="text-cyan-400">Connected in one system."</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto pt-2">
              Designed to elevate member retention, empower fitness trainers with structured workout tools, 
              and provide the gym owner with effortless revenue control.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={onScrollToTop}
              className="px-6 py-3 rounded-2xl text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-105"
            >
              Back to System Vision
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
