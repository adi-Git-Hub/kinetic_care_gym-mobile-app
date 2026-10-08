import React, { useState } from 'react';
import { 
  Smartphone, ChevronRight, Eye, Check, Flame, Zap, Dumbbell, 
  User, Bell, Calendar, ArrowRight, Sparkles, ZoomIn 
} from 'lucide-react';

export default function ClientSection({ onOpenLightbox }) {
  const [selectedView, setSelectedView] = useState('workout_flow'); // 'workout_flow' | 'profile_flow' | 'overview'

  const clientViews = {
    workout_flow: {
      image: '/User-iamge/1c2c778b-a538-4c59-b84e-90b092c3b210.png',
      alt: 'Client App Workout Journey (Home → Workout Plan → Exercise Detail)',
      title: "Today's Workout Plan & Exercise Flow",
      badge: "Primary Client Journey"
    },
    profile_flow: {
      image: '/User-iamge/1b25735c-e505-4d96-84bb-af3b395e552b.png',
      alt: 'Client App Profile & Preferences',
      title: "Profile, Goals & Training Preferences",
      badge: "Member Profile & Preferences"
    },
    overview: {
      image: '/User-iamge/b5f1dfc9-a4f6-4244-bc97-27a89ec5015f.png',
      alt: 'Client App Expanded Overview',
      title: "Client System High-Res Dashboard",
      badge: "Full Ecosystem View"
    }
  };

  const current = clientViews[selectedView];

  return (
    <section 
      id="client-app"
      className="relative py-24 px-4 sm:px-6 bg-[#070C10] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>SECTION 02 — MOBILE-FIRST MEMBER APP</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            CLIENT APP
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-serif italic">
            "Your Workout. Your Plan."
          </p>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The Client App is strictly mobile-first. The workout plan is the biggest and most important element. 
            The client experience communicates one clear truth: 
            <span className="text-white font-semibold block mt-1">"Open the app and immediately know what workout to do today."</span>
          </p>
        </div>

        {/* Client Journey Step Flow Indicator */}
        <div className="p-4 rounded-2xl bg-[#0D151D] border border-cyan-500/20 max-w-4xl mx-auto">
          <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider text-center mb-3">
            THE INTUITIVE 4-STEP CLIENT JOURNEY
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className="p-3 rounded-xl bg-[#121E27] border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2 shadow-sm">
              <span>01. HOME</span>
              <ChevronRight className="w-4 h-4 text-cyan-400 hidden md:block" />
            </div>
            <div className="p-3 rounded-xl bg-[#121E27] border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2 shadow-sm">
              <span>02. TODAY'S WORKOUT</span>
              <ChevronRight className="w-4 h-4 text-cyan-400 hidden md:block" />
            </div>
            <div className="p-3 rounded-xl bg-[#121E27] border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2 shadow-sm">
              <span>03. EXERCISE DETAIL</span>
              <ChevronRight className="w-4 h-4 text-cyan-400 hidden md:block" />
            </div>
            <div className="p-3 rounded-xl bg-[#121E27] border border-cyan-500/40 text-cyan-300 flex items-center justify-center gap-2 shadow-sm">
              <span>04. PROFILE</span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0B1218] border border-white/10 text-xs font-bold">
            <button
              onClick={() => setSelectedView('workout_flow')}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedView === 'workout_flow'
                  ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Workout Flow Showcase (Source Asset)
            </button>
            <button
              onClick={() => setSelectedView('profile_flow')}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedView === 'profile_flow'
                  ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Profile & Preferences
            </button>
            <button
              onClick={() => setSelectedView('overview')}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedView === 'overview'
                  ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Screen UI
            </button>
          </div>
        </div>

        {/* LARGE SOURCE IMAGE PRESENTATION CONTAINER */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0D161F] via-[#091016] to-[#060A0E] border border-cyan-500/30 p-4 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.15)] group">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                {current.badge}
              </span>
              <h3 className="text-lg font-black text-white mt-1">{current.title}</h3>
            </div>

            <button
              onClick={() => onOpenLightbox(current.image, current.title, 'Client App UI Specification')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <ZoomIn className="w-4 h-4 text-cyan-400" />
              <span>Inspect Full High-Res Image</span>
            </button>
          </div>

          {/* Large Image Frame */}
          <div 
            onClick={() => onOpenLightbox(current.image, current.title, 'Client App UI Specification')}
            className="cursor-zoom-in relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 flex items-center justify-center p-2 sm:p-4 hover:border-cyan-400/50 transition-all"
          >
            <img 
              src={current.image} 
              alt={current.alt} 
              className="w-full h-auto max-h-[750px] object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Hover overlay hint */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-cyan-400" /> Click to Inspect 4K
            </div>
          </div>
        </div>

        {/* Supporting Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          
          <div className="p-5 rounded-2xl bg-[#0C141B] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Personalized Workout Plan</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tailored split created by the gym trainer. Displays exact sets, reps, and target muscles without guesswork.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C141B] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Daily Workout Split</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clear 7-day schedule (e.g., Monday: Chest + Triceps). Members know their focus before walking through the gym doors.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C141B] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Dumbbell className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Exercise Guidance</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              HD Form Guides show setup, posture, and breathing. Mind-Muscle Connection videos highlight peak muscle contractions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C141B] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Membership Information</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Transparent tier details, validity countdown, and assigned trainer contact right from the home card.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C141B] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Bell className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Instant Notifications</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct announcements when a trainer updates the member's split, changes weight prescriptions, or logs special tips.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0C141B] border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <User className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Fitness Preferences & Profile</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Configure muscle goals (Muscle Gain, Fat Loss, Strength), preferred workout times, and focus body parts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
