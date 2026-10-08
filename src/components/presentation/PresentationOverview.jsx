import React from 'react';
import { 
  Smartphone, Dumbbell, ShieldCheck, ArrowRight, CheckCircle2, 
  Sparkles, Users, Award, PlayCircle, Clock, Zap, Target,
  Layers, Lock, Eye, FileText, Check, TrendingUp
} from 'lucide-react';
import GymLogo from '../common/GymLogo';

export default function PresentationOverview({ onSelectPortal }) {
  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* ========================================================
          HERO PRESENTATION SECTION
         ======================================================== */}
      <section className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-[#0B151C] via-[#080D11] to-[#05080A] p-8 md:p-14 text-center shadow-[0_0_60px_rgba(0,229,255,0.15)]">
        {/* Ambient lighting glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Presentation Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Product Presentation & Visual Architecture</span>
        </div>

        {/* Main Title & Brand */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none font-display">
            KINETIC CARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200">GYM</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-200">
            Digital Gym Management System
          </p>
          <p className="text-sm sm:text-base text-cyan-300/90 font-medium tracking-wide">
            "One connected system for Members, Trainers & Gym Management."
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto pt-2 leading-relaxed">
            Engineered exclusively for high-standard fitness facilities. A strict, role-separated ecosystem where members execute workouts with perfect form, trainers prescribe splits without financial distraction, and gym owners maintain transparent revenue control.
          </p>
        </div>

        {/* 3 Quick Jump CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
          <button
            onClick={() => onSelectPortal('client')}
            className="px-5 py-3 rounded-2xl text-xs font-extrabold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.4)]"
          >
            <Smartphone className="w-4 h-4" />
            <span>Launch Client App</span>
          </button>
          <button
            onClick={() => onSelectPortal('admin')}
            className="px-5 py-3 rounded-2xl text-xs font-extrabold bg-[#10242B] hover:bg-[#15323C] text-cyan-300 border border-cyan-500/40 transition-all flex items-center gap-2"
          >
            <Dumbbell className="w-4 h-4" />
            <span>Launch Trainer Panel</span>
          </button>
          <button
            onClick={() => onSelectPortal('superadmin')}
            className="px-5 py-3 rounded-2xl text-xs font-extrabold bg-[#131B22] hover:bg-[#18232C] text-white border border-white/15 transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Launch Super Admin</span>
          </button>
        </div>
      </section>

      {/* ========================================================
          THE THREE MAJOR EXPERIENCES (Large Visual Mockup Cards)
         ======================================================== */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            The Three Major Experiences
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Dedicated interfaces built with strict separation of responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. CLIENT APP CARD */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#0E1E26] via-[#0A161C] to-[#071014] border border-cyan-500/30 flex flex-col justify-between hover:border-cyan-400/60 transition-all group shadow-xl">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Mobile-First
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white">1. Client App</h3>
                <p className="text-xs text-cyan-400 font-semibold mt-0.5">Workout Execution & Form Coaching</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Empowers members inside the gym. The workout plan is front and center—no clutter, no attendance distraction. Includes HD video Form Guides and Mind-Muscle connection cues.
              </p>

              {/* Feature highlights */}
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span><strong>Today's Workout Hero:</strong> Split, timer, sets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span><strong>Form Guide Videos:</strong> Posture & breathing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span><strong>Mind-Muscle Connection:</strong> Targeted cues</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span><strong>Fitness Preferences:</strong> Goal & training days</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onSelectPortal('client')}
                className="w-full py-3 rounded-xl font-bold text-xs bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              >
                <span>Explore Client App Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. ADMIN / TRAINER PANEL CARD */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#11242E] via-[#0B181F] to-[#081116] border border-cyan-500/30 flex flex-col justify-between hover:border-cyan-400/60 transition-all group shadow-xl">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  Trainer Focus
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white">2. Admin / Trainer Panel</h3>
                <p className="text-xs text-teal-400 font-semibold mt-0.5">Members & Workout Splits Management</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Streamlined for trainers and gym floor managers. Strictly focused on prescribing routines, updating Monday-Sunday splits, and adding exercises. <strong className="text-white">Zero finance clutter.</strong>
              </p>

              {/* Feature highlights */}
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span><strong>Member Directory:</strong> Assigned clients & status</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span><strong>Weekly Workout Split:</strong> 7-day routine editor</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span><strong>Add Exercise Modal:</strong> Sets, reps, video link</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span><strong>Instant App Sync:</strong> Pushes live to member</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onSelectPortal('admin')}
                className="w-full py-3 rounded-xl font-bold text-xs bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
              >
                <span>Explore Trainer Panel Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. SUPER ADMIN PANEL CARD */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#141C24] via-[#0D141B] to-[#090F14] border border-cyan-500/30 flex flex-col justify-between hover:border-cyan-400/60 transition-all group shadow-xl">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Gym Owner
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white">3. Super Admin Panel</h3>
                <p className="text-xs text-emerald-400 font-semibold mt-0.5">Business, Memberships & Revenue</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                The command center for the gym owner. Immediate visibility into expiring memberships, fee dues, verified payment receipts, and monthly revenue. <strong className="text-white">Zero workout management clutter.</strong>
              </p>

              {/* Feature highlights */}
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Immediate Expiry Alert:</strong> Next 7–14 days upfront</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Membership Analytics:</strong> 90% active breakdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Revenue Overview:</strong> ₹1.24L (+18% growth)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Printable Tax Receipts:</strong> Instant PDF preview</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onSelectPortal('superadmin')}
                className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <span>Explore Super Admin Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          THE 3 CORE USER STORIES STRIP
         ======================================================== */}
      <section className="rounded-3xl p-8 bg-[#0A1218] border border-white/10 space-y-6">
        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Story Driven Experience</span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-1">How The System Solves Real Gym Problems</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-[#0F171E] border border-cyan-500/20 space-y-2">
            <span className="text-xs font-bold text-cyan-400">STORY 1 • THE MEMBER</span>
            <p className="text-xs font-serif italic text-white">
              "Open the app → See today's workout → Start workout → Watch correct form → Complete workout."
            </p>
            <p className="text-[11px] text-slate-400 pt-1">
              No confusion on the gym floor. Members know exactly what exercises to perform, the exact sets and reps, and how to execute each movement with video guides.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0F171E] border border-teal-500/20 space-y-2">
            <span className="text-xs font-bold text-teal-400">STORY 2 • THE TRAINER</span>
            <p className="text-xs font-serif italic text-white">
              "Open members → See their workout plan → Change/update plan → Add exercises → Member receives updated plan."
            </p>
            <p className="text-[11px] text-slate-400 pt-1">
              Trainers focus 100% on member progress. Prescribing changes takes less than 30 seconds, automatically syncing to the member's phone.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0F171E] border border-emerald-500/20 space-y-2">
            <span className="text-xs font-bold text-emerald-400">STORY 3 • THE GYM OWNER</span>
            <p className="text-xs font-serif italic text-white">
              "Open dashboard → See members → See expiry dates → See fees → See payments → Download receipts → Understand gym revenue."
            </p>
            <p className="text-[11px] text-slate-400 pt-1">
              Zero revenue leakage. Memberships nearing expiration are visible immediately on the dashboard without searching through cluttered menus.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          ROLE SEPARATION MATRIX (Strict Architecture)
         ======================================================== */}
      <section className="rounded-3xl p-8 bg-[#080D11] border border-cyan-500/20 space-y-6">
        <div>
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Architectural Integrity</span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-1">Strict Role Separation Matrix</h2>
          <p className="text-xs text-slate-400 mt-1">
            Why Kinetic Care Gym feels modern: Every user only sees what belongs to their job.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0F1820] text-slate-300 font-bold uppercase tracking-wider text-[10px] border-b border-white/10">
              <tr>
                <th className="py-3 px-4">System Capability</th>
                <th className="py-3 px-4 text-cyan-400">Client App</th>
                <th className="py-3 px-4 text-teal-400">Admin / Trainer Panel</th>
                <th className="py-3 px-4 text-emerald-400">Super Admin Panel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-[#0B1217]">
              {[
                { feature: "View Daily Workout & Exercises", client: true, trainer: true, superadmin: false },
                { feature: "Exercise Form Guide & Mind-Muscle Videos", client: true, trainer: false, superadmin: false },
                { feature: "Set & Rep Tracking / Completion", client: true, trainer: false, superadmin: false },
                { feature: "Manage Assigned Members List", client: false, trainer: true, superadmin: true },
                { feature: "Edit Weekly Workout Splits (Mon–Sun)", client: false, trainer: true, superadmin: false },
                { feature: "Add Custom Exercises to Routine", client: false, trainer: true, superadmin: false },
                { feature: "Gym Revenue & Collection Charts", client: false, trainer: false, superadmin: true },
                { feature: "Membership Expiry Alerts & Tracking", client: "Personal Only", trainer: "Basic View", superadmin: true },
                { feature: "Official GST Invoices & Payment Receipts", client: "View Personal", trainer: false, superadmin: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">{row.feature}</td>
                  
                  {/* Client */}
                  <td className="py-3 px-4">
                    {row.client === true ? (
                      <span className="text-cyan-400 font-bold flex items-center gap-1">✓ Primary Focus</span>
                    ) : row.client === false ? (
                      <span className="text-slate-600">—</span>
                    ) : (
                      <span className="text-slate-400">{row.client}</span>
                    )}
                  </td>

                  {/* Trainer */}
                  <td className="py-3 px-4">
                    {row.trainer === true ? (
                      <span className="text-teal-400 font-bold flex items-center gap-1">✓ Primary Focus</span>
                    ) : row.trainer === false ? (
                      <span className="text-slate-600">—</span>
                    ) : (
                      <span className="text-slate-400">{row.trainer}</span>
                    )}
                  </td>

                  {/* Super Admin */}
                  <td className="py-3 px-4">
                    {row.superadmin === true ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">✓ Primary Focus</span>
                    ) : row.superadmin === false ? (
                      <span className="text-slate-600">—</span>
                    ) : (
                      <span className="text-slate-400">{row.superadmin}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
