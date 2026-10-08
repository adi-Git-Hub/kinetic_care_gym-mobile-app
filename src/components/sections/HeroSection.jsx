import React from 'react';
import { ArrowDown, Sparkles, Shield, Dumbbell, Smartphone, ChevronRight } from 'lucide-react';

export default function HeroSection({ onExploreClick }) {
  return (
    <section 
      id="vision"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#05080A] via-[#070C10] to-[#0A1015]"
    >
      {/* Background Cinematic Texture & Glowing Cyan Orbs */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060A0D] via-black/60 to-transparent pointer-events-none" />

      {/* Atmospheric Cyan Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fadeIn">
        
        {/* Section Counter Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101D24]/80 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,229,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 01 — SYSTEM OVERVIEW & VISION</span>
        </div>

        {/* Real Kinetic Care Gym Logo */}
        <div className="flex justify-center my-4">
          <div className="p-4 rounded-3xl bg-[#091016]/90 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,229,255,0.25)] flex items-center justify-center">
            <img 
              src="/kinetic_logo.png" 
              alt="Kinetic Care Gym Logo" 
              className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]" 
            />
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none font-display">
            KINETIC CARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-100">GYM</span>
          </h1>

          <p className="text-xl sm:text-3xl font-extrabold text-slate-200 tracking-tight">
            Digital Gym Management System
          </p>

          <p className="text-lg sm:text-2xl text-cyan-400 font-bold italic font-serif">
            "Train Better. Manage Smarter."
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed pt-2">
            "One connected digital ecosystem for Members, Trainers & Gym Management."
          </p>
        </div>

        {/* Three Connected Pillars Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-4 text-left">
          <div className="p-4 rounded-2xl bg-[#0C151D]/90 border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4" /> 01 Client App
            </div>
            <p className="text-xs text-slate-300 mt-1 font-medium">Workout-first mobile experience with form video guides.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0C151D]/90 border border-white/5 hover:border-teal-500/30 transition-all">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Dumbbell className="w-4 h-4" /> 02 Trainer Panel
            </div>
            <p className="text-xs text-slate-300 mt-1 font-medium">Manage members & weekly splits. Zero finance clutter.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0C151D]/90 border border-white/5 hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" /> 03 Super Admin
            </div>
            <p className="text-xs text-slate-300 mt-1 font-medium">Business, expiry tracking, fees, and revenue control.</p>
          </div>
        </div>

        {/* Main CTA: EXPLORE THE SYSTEM */}
        <div className="pt-6">
          <button
            onClick={onExploreClick}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-[0_0_35px_rgba(0,229,255,0.4)] hover:scale-105 active:scale-95"
          >
            <span>EXPLORE THE SYSTEM</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
