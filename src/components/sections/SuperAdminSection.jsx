import React, { useState } from 'react';
import { 
  ShieldCheck, Users, CreditCard, Clock, AlertTriangle, 
  CheckCircle2, XCircle, ZoomIn, Download, ArrowRight, DollarSign 
} from 'lucide-react';

export default function SuperAdminSection({ onOpenLightbox, onOpenReceipt }) {
  const [activePanelTab, setActivePanelTab] = useState('full'); // 'full' | 'dashboard' | 'members' | 'billing'

  const panelViews = {
    full: {
      image: '/Super_admin.png',
      title: 'Super Admin Full 3-Screen Dashboard',
      desc: 'Complete owner overview: Executive Dashboard, Members Directory, and Billing/Payment Receipts'
    },
    dashboard: {
      image: '/super_admin_dashboard.png',
      title: 'Panel 1 — Executive Dashboard',
      desc: 'Total Members (142), Active (128), Expiring (12), Revenue ₹1.24L (+18%), and Expiry alerts'
    },
    members: {
      image: '/super_admin_members.png',
      title: 'Panel 2 — Members Directory',
      desc: 'Full directory with status filters: All, Active, Expiring Soon, and Expired'
    },
    billing: {
      image: '/super_admin_billing.png',
      title: 'Panel 3 — Member Detail & Tax Invoices',
      desc: 'Member financial overview (Amount Paid ₹9,000, Amount Due ₹0) and Payment Receipts'
    }
  };

  const current = panelViews[activePanelTab];

  return (
    <section 
      id="super-admin"
      className="relative py-24 px-4 sm:px-6 bg-[#060A0D] border-t border-white/5 overflow-hidden"
    >
      {/* Background Emerald Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SECTION 05 — GYM OWNER COMMAND CENTER</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            SUPER ADMIN
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-serif italic">
            "Memberships. Fees. Payments. Complete Control."
          </p>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The executive portal for the gym owner. Immediate visibility into gym members, expirations in the next 7 days, 
            fee collection, and digital tax receipts. <strong className="text-white">Zero workout management distraction.</strong>
          </p>
        </div>

        {/* Executive Stat Highlights Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#0B151C] border border-white/10 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Total Members</span>
            <p className="text-2xl font-black text-white mt-1">142</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0B151C] border border-emerald-500/30 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-400">Active Members</span>
            <p className="text-2xl font-black text-white mt-1">128 <span className="text-xs text-emerald-400 font-normal">(90%)</span></p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0B151C] border border-amber-500/30 text-center">
            <span className="text-[10px] uppercase font-bold text-amber-400">Expiring Soon</span>
            <p className="text-2xl font-black text-amber-300 mt-1">12 <span className="text-xs text-amber-400 font-normal">(7-14d)</span></p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0B151C] border border-red-500/30 text-center">
            <span className="text-[10px] uppercase font-bold text-red-400">Expired</span>
            <p className="text-2xl font-black text-red-400 mt-1">6</p>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-gradient-to-br from-[#0F2826] to-[#0A1617] border border-emerald-400/40 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-300">Total Revenue</span>
            <p className="text-2xl font-black text-white mt-1">₹1,24,500</p>
          </div>
        </div>

        {/* View Switcher: Full Super_admin.png vs Sub-Panels */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#091117] border border-white/10 text-xs font-bold flex-wrap justify-center gap-1">
            <button
              onClick={() => setActivePanelTab('full')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activePanelTab === 'full'
                  ? 'bg-emerald-400 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Super_admin.png (Source of Truth)
            </button>
            <button
              onClick={() => setActivePanelTab('dashboard')}
              className={`px-3 py-2 rounded-xl transition-all ${
                activePanelTab === 'dashboard'
                  ? 'bg-emerald-400 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Dashboard Overview
            </button>
            <button
              onClick={() => setActivePanelTab('members')}
              className={`px-3 py-2 rounded-xl transition-all ${
                activePanelTab === 'members'
                  ? 'bg-emerald-400 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Members Directory
            </button>
            <button
              onClick={() => setActivePanelTab('billing')}
              className={`px-3 py-2 rounded-xl transition-all ${
                activePanelTab === 'billing'
                  ? 'bg-emerald-400 text-slate-950 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Member Details & Billing
            </button>
          </div>
        </div>

        {/* MAIN VISUAL: Super_admin.png DISPLAYED LARGE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0C1A1C] via-[#091215] to-[#060A0D] border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] space-y-6 group">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Official Super Admin UI Specification
              </span>
              <h3 className="text-lg font-black text-white mt-1">
                {current.title}
              </h3>
              <p className="text-xs text-slate-400">{current.desc}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenReceipt({
                  id: 'REC-2026-101',
                  date: '15 Aug 2026',
                  amount: '₹3,000',
                  plan: 'Personal Training (PT)',
                  status: 'Paid',
                  method: 'UPI / Direct Bank'
                }, 'Rahul Sharma', '+91 98765 43210')}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Test Tax Receipt Modal</span>
              </button>

              <button
                onClick={() => onOpenLightbox(current.image, current.title, 'Super Admin Source UI Specification')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all flex items-center gap-1.5"
              >
                <ZoomIn className="w-4 h-4 text-emerald-400" />
                <span>Inspect Full 4K Resolution</span>
              </button>
            </div>
          </div>

          {/* Large Image Canvas */}
          <div 
            onClick={() => onOpenLightbox(current.image, current.title, 'Super Admin Source UI Specification')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-2 sm:p-4 hover:border-emerald-400/50 transition-all"
          >
            <img 
              src={current.image} 
              alt="Super Admin Specification" 
              className="w-full h-auto max-h-[800px] object-contain rounded-xl shadow-2xl mx-auto"
            />
          </div>
        </div>

        {/* Super Admin Responsibilities vs Strict Limits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* What Super Admin Manages */}
          <div className="p-6 rounded-3xl bg-[#091517] border border-emerald-500/30 space-y-4">
            <h4 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Super Admin Executive Responsibilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Membership Expiry Tracking:</strong> Expiring members (12) shown right on dashboard without deep clicks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Directory Status Audit:</strong> Filter all 142 members by Active, Expiring, and Expired.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Fee Dues & Financial Logs:</strong> Inspect Total Amount, Amount Paid, and Amount Due per member.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Official Tax Receipts:</strong> Generate and download branded GST payment invoices and receipts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Revenue Growth:</strong> Track monthly gross collections (₹1.24L, +18% growth) and categories.</span>
              </li>
            </ul>
          </div>

          {/* What Super Admin Does NOT Manage */}
          <div className="p-6 rounded-3xl bg-[#0E1317] border border-red-500/20 space-y-4">
            <h4 className="text-sm font-extrabold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              Strict Role Boundaries (Zero Workout Clutter)
            </h4>
            <p className="text-xs text-slate-400">
              Super Admin does NOT manage workout routines or exercise programming:
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Workout Plan Editor:</strong> Splits are assigned by qualified trainers on the gym floor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Exercise Management:</strong> Super Admin does not build or edit exercise lists.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Workout Scheduling:</strong> Weekly splits remain the exclusive domain of the Trainer panel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span><strong>No Trainer Exercise Assignments:</strong> Super Admin focuses purely on Gym Money & Memberships.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
