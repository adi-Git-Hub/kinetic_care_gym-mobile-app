import React from 'react';
import { 
  ShieldCheck, ZoomIn, Eye, CreditCard, DollarSign, 
  FileText, Clock, AlertTriangle, Users 
} from 'lucide-react';

export default function MobileSuperAdminSection({ onOpenLightbox, onOpenReceipt }) {
  return (
    <section 
      id="super-admin"
      className="relative py-12 px-5 bg-gradient-to-b from-[#04070A] via-[#050B0E] to-[#030608] border-t border-emerald-500/15"
    >
      {/* Ambient Emerald Glow */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="space-y-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full liquid-glass text-emerald-300 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>SECTION 04 — SUPER ADMIN</span>
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight">
            SUPER ADMIN
          </h2>

          <p className="text-sm font-bold text-emerald-400 font-serif italic">
            "Memberships. Fees. Payments."
          </p>

          <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
            The command center for the gym owner. Complete control over memberships, expiry alerts, and revenue.
          </p>
        </div>

        {/* 6 Key Super Admin Focus Points */}
        <div className="p-3.5 rounded-2xl liquid-glass space-y-2 text-xs border border-emerald-500/25">
          <div className="flex items-center justify-between text-[11px] font-bold text-emerald-300 uppercase tracking-wider pb-1 border-b border-white/5">
            <span>GYM OWNER CONTROL</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-200">
            <span className="flex items-center gap-1.5">✓ MEMBERS (142)</span>
            <span className="flex items-center gap-1.5">✓ EXPIRY (12 SOON)</span>
            <span className="flex items-center gap-1.5">✓ FEES & DUES</span>
            <span className="flex items-center gap-1.5">✓ PAYMENTS</span>
            <span className="flex items-center gap-1.5">✓ TAX RECEIPTS</span>
            <span className="flex items-center gap-1.5">✓ REVENUE (₹1.24L)</span>
          </div>
        </div>

        {/* ========================================================
            ONLY ONE SUPER ADMIN IMAGE PREVIEW CONTAINER (Super_admin.png)
           ======================================================== */}
        <div className="relative rounded-3xl liquid-glass p-3 sm:p-4 overflow-hidden shadow-2xl border border-emerald-400/25 space-y-3">
          
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30">
              SOURCE ASSET: Super_admin.png
            </span>

            <button
              onClick={() => onOpenLightbox('/Super_admin.png', 'Super Admin Command Center', 'Dashboard, Members Directory & Billing')}
              className="touch-target-44 flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-emerald-300 transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inspect UI</span>
            </button>
          </div>

          {/* Controlled Preview Container (Contain, no distortion, no stretching) */}
          <div 
            onClick={() => onOpenLightbox('/Super_admin.png', 'Super Admin Command Center', 'Dashboard, Members Directory & Billing')}
            className="cursor-zoom-in relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/80 flex items-center justify-center p-2 border border-white/5 shadow-inner"
          >
            <img 
              src="/Super_admin.png" 
              alt="Super Admin Panel" 
              className="w-full h-full object-contain rounded-xl shadow-2xl hover:scale-[1.02] transition-transform"
            />
            
            {/* Subtle tap to expand badge */}
            <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <ZoomIn className="w-3 h-3" /> Tap to Zoom
            </div>
          </div>

          {/* Role Boundary Notice */}
          <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-[10px] text-slate-400 leading-relaxed text-center">
            <strong className="text-white block mb-0.5">Zero Workout Management Clutter</strong>
            Super Admin is dedicated exclusively to gym business, memberships, and revenue.
          </div>

          {/* Action Buttons: VIEW SUPER ADMIN & TEST RECEIPT */}
          <div className="space-y-2 pt-1">
            <button
              onClick={() => onOpenLightbox('/Super_admin.png', 'Super Admin Command Center', 'Dashboard, Members Directory & Billing')}
              className="w-full touch-target-44 py-3.5 px-5 rounded-2xl font-extrabold text-xs skeuo-btn-cyan flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW SUPER ADMIN</span>
            </button>

            <button
              onClick={() => onOpenReceipt({
                id: 'REC-2026-101',
                date: '15 Aug 2026',
                amount: '₹3,000',
                plan: 'Personal Training (PT)',
                status: 'Paid',
                method: 'UPI / Direct Bank POS'
              }, 'Rahul Sharma', '+91 98765 43210')}
              className="w-full touch-target-44 py-3 px-5 rounded-2xl font-bold text-xs skeuo-btn-dark flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Preview Official Tax Receipt</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
