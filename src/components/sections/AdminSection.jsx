import React, { useState } from 'react';
import { 
  Dumbbell, Users, ChevronRight, CheckCircle2, XCircle, 
  Sparkles, ZoomIn, Eye, ShieldAlert, ArrowRight, RefreshCw 
} from 'lucide-react';

export default function AdminSection({ onOpenLightbox }) {
  const [activePanelTab, setActivePanelTab] = useState('full'); // 'full' | 'members' | 'details' | 'update'

  const panelViews = {
    full: {
      image: '/admin.png',
      title: 'Admin / Trainer Full 3-Screen Workflow',
      desc: 'Complete overview: Members Directory, Member Plan Details, and Workout Split Editor'
    },
    members: {
      image: '/admin_panel_members.png',
      title: 'Panel 1 — Members List',
      desc: 'View members, assigned trainers, start dates, and expiry countdowns directly'
    },
    details: {
      image: '/admin_panel_plan_details.png',
      title: 'Panel 2 — Member Plan Details',
      desc: 'Inspect Rahul Sharma current workout plan, 7-day split, and assigned trainer'
    },
    update: {
      image: '/admin_panel_update_plan.png',
      title: 'Panel 3 — Update / Assign Workout Plan',
      desc: 'Select PT/Standard plan, set weekly split, and add custom exercises'
    }
  };

  const current = panelViews[activePanelTab];

  return (
    <section 
      id="admin-trainer"
      className="relative py-24 px-4 sm:px-6 bg-[#070D12] border-t border-white/5 overflow-hidden"
    >
      {/* Background Teal Accents */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest">
            <Dumbbell className="w-3.5 h-3.5 text-teal-400" />
            <span>SECTION 04 — TRAINER FLOOR MANAGEMENT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            ADMIN / TRAINER PANEL
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-teal-400 font-serif italic">
            "Manage Members. Manage Their Workouts."
          </p>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The Admin/Trainer portal is focused 100% on members and workout splits. 
            Trainers can prescribe exercises and update member schedules in under 30 seconds.
          </p>
        </div>

        {/* The Trainer Workflow Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0C151D] border border-teal-500/30 max-w-5xl mx-auto">
          <p className="text-[11px] font-bold text-teal-400 uppercase tracking-widest text-center mb-3">
            TRAINER WORKFLOW: FROM ASSIGNMENT TO MEMBER PHONE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-center text-[11px] font-bold">
            <div className="p-2.5 rounded-xl bg-[#111F28] border border-white/10 text-white flex items-center justify-center">
              1. MEMBER
            </div>
            <div className="p-2.5 rounded-xl bg-[#111F28] border border-white/10 text-white flex items-center justify-center">
              2. CURRENT PLAN
            </div>
            <div className="p-2.5 rounded-xl bg-[#111F28] border border-teal-500/40 text-teal-300 flex items-center justify-center">
              3. CHANGE PLAN
            </div>
            <div className="p-2.5 rounded-xl bg-[#111F28] border border-teal-500/40 text-teal-300 flex items-center justify-center">
              4. ADD / EDIT EXERCISES
            </div>
            <div className="p-2.5 rounded-xl bg-[#111F28] border border-teal-500/40 text-teal-300 flex items-center justify-center">
              5. SAVE
            </div>
            <div className="p-2.5 rounded-xl bg-teal-500/20 border border-teal-400 text-teal-300 flex items-center justify-center col-span-2 md:col-span-1 shadow-sm">
              6. APP SYNCED ✓
            </div>
          </div>
        </div>

        {/* View Switcher: Full admin.png vs Individual Sub-Panels */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#091117] border border-white/10 text-xs font-bold flex-wrap justify-center gap-1">
            <button
              onClick={() => setActivePanelTab('full')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activePanelTab === 'full'
                  ? 'bg-teal-400 text-slate-950 font-black shadow-[0_0_15px_rgba(20,184,166,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full admin.png (Source of Truth)
            </button>
            <button
              onClick={() => setActivePanelTab('members')}
              className={`px-3 py-2 rounded-xl transition-all ${
                activePanelTab === 'members'
                  ? 'bg-teal-400 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Members List
            </button>
            <button
              onClick={() => setActivePanelTab('details')}
              className={`px-3 py-2 rounded-xl transition-all ${
                activePanelTab === 'details'
                  ? 'bg-teal-400 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Member Details & Split
            </button>
            <button
              onClick={() => setActivePanelTab('update')}
              className={`px-3 py-2 rounded-xl transition-all ${
                activePanelTab === 'update'
                  ? 'bg-teal-400 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Update Workout Plan
            </button>
          </div>
        </div>

        {/* MAIN VISUAL: admin.png DISPLAYED LARGE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0D1820] via-[#091217] to-[#060B0E] border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.15)] space-y-6 group">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                Official Admin / Trainer UI Specification
              </span>
              <h3 className="text-lg font-black text-white mt-1">
                {current.title}
              </h3>
              <p className="text-xs text-slate-400">{current.desc}</p>
            </div>

            <button
              onClick={() => onOpenLightbox(current.image, current.title, 'Admin / Trainer Source UI Specification')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 transition-all flex items-center gap-1.5"
            >
              <ZoomIn className="w-4 h-4 text-teal-400" />
              <span>Inspect Full Resolution UI</span>
            </button>
          </div>

          {/* Large Image Canvas */}
          <div 
            onClick={() => onOpenLightbox(current.image, current.title, 'Admin / Trainer Source UI Specification')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-2 sm:p-4 hover:border-teal-400/50 transition-all"
          >
            <img 
              src={current.image} 
              alt="Admin Trainer Specification" 
              className="w-full h-auto max-h-[800px] object-contain rounded-xl shadow-2xl mx-auto"
            />
          </div>
        </div>

        {/* Responsibilities & Strict Boundaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* What Admin / Trainer Manages */}
          <div className="p-6 rounded-3xl bg-[#0B151C] border border-teal-500/30 space-y-4">
            <h4 className="text-sm font-extrabold text-teal-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              Admin / Trainer Core Responsibilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">•</span>
                <span><strong>View Members Directory:</strong> See client name, phone, current plan, and assigned trainer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">•</span>
                <span><strong>Check Membership Expiry:</strong> Track validity countdown (e.g. 38 days left) for renewal awareness.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">•</span>
                <span><strong>View & Edit Workout Splits:</strong> Maintain Monday-Sunday schedules (Chest, Back, Legs, Full Body).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">•</span>
                <span><strong>Add New Exercises:</strong> Prescribe sets, reps, rest periods, target muscles, and link video guides.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">•</span>
                <span><strong>Instant Sync:</strong> Changes saved here appear immediately inside the member's mobile app.</span>
              </li>
            </ul>
          </div>

          {/* What Admin / Trainer Does NOT Manage */}
          <div className="p-6 rounded-3xl bg-[#0E1317] border border-red-500/20 space-y-4">
            <h4 className="text-sm font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              Strict Role Boundaries (Zero Finance Clutter)
            </h4>
            <p className="text-xs text-slate-400">
              To keep trainers efficient on the gym floor, they are never exposed to accounting or business overhead:
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Gym Revenue Figures:</strong> Financial analytics are restricted to Super Admin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Membership Fees Tracking:</strong> Trainers do not manage fee structures or dues.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Payment History:</strong> Invoices and receipt logs are kept private to the gym owner.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Financial Reports:</strong> Zero clutter, leaving 100% bandwidth for member fitness.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
