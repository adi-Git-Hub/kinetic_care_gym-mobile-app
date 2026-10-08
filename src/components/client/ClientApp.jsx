import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Bell, ChevronRight, Play, CheckCircle2, Flame, Dumbbell, 
  Clock, ShieldCheck, Heart, Share2, Instagram, ArrowRight,
  Sparkles, Calendar, RotateCcw, Award, Check, User, ChevronLeft,
  Info, Maximize2, Volume2, Target, Zap, Activity
} from 'lucide-react';
import GymLogo from '../common/GymLogo';

export default function ClientApp({ 
  user, 
  workoutSplit, 
  exercises, 
  onUpdateExercises, 
  onOpenReceipt,
  isPhoneFrame = true 
}) {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'workout' | 'offers' | 'profile'
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'workout_plan' | 'exercise_detail' | 'my_profile' | 'preferences'
  const [selectedExerciseId, setSelectedExerciseId] = useState('ex-2'); // defaults to Incline Dumbbell Press
  const [completedExercises, setCompletedExercises] = useState({ 'ex-1': true });
  const [activeSets, setActiveSets] = useState({ 1: true, 2: true, 3: false, 4: false });
  const [isPlayingFormVideo, setIsPlayingFormVideo] = useState(false);
  const [isPlayingMuscleVideo, setIsPlayingMuscleVideo] = useState(false);
  const [viewMode, setViewMode] = useState('plan'); // 'plan' | 'muscle'
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  // Selected exercise data
  const currentExercise = exercises.find(e => e.id === selectedExerciseId) || exercises[1] || exercises[0];

  // Confetti celebration
  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00E5FF', '#10B981', '#38BDF8', '#F59E0B']
    });
  };

  const handleMarkComplete = (exerciseId) => {
    setCompletedExercises(prev => ({
      ...prev,
      [exerciseId]: true
    }));
    triggerCelebration();
  };

  const completedCount = Object.values(completedExercises).filter(Boolean).length;
  const progressPercent = Math.min(100, Math.round((completedCount / (exercises.length || 5)) * 100));

  return (
    <div className="w-full flex justify-center py-2 sm:py-6 animate-fadeIn">
      {/* Mobile Frame Container */}
      <div className={`relative transition-all duration-300 ${
        isPhoneFrame 
          ? 'w-full max-w-[420px] rounded-[44px] mobile-frame bg-[#080D11] border-[4px] border-[#1C2630] overflow-hidden shadow-2xl' 
          : 'w-full max-w-4xl rounded-2xl bg-[#080D11] border border-white/10 p-2 sm:p-6 shadow-2xl'
      }`}>

        {/* Dynamic Island / Notch on Phone Frame */}
        {isPhoneFrame && (
          <div className="sticky top-0 z-40 bg-[#080D11]/95 backdrop-blur-md px-6 pt-3 pb-2 flex justify-between items-center text-xs text-slate-400 border-b border-white/5 select-none">
            <span className="font-semibold text-white tracking-tight">9:41</span>
            {/* Dynamic island pill */}
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center gap-1.5 px-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] text-cyan-300 font-mono">KINETIC</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-white">
              <span className="text-[10px] font-mono">5G</span>
              <div className="w-4 h-2.5 border border-white rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-cyan-400 rounded-2xs" />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SCREEN 1: CLIENT HOME SCREEN
           ======================================================== */}
        {currentScreen === 'home' && (
          <div className="space-y-5 pb-24 text-slate-100">
            {/* Top Bar */}
            <div className="px-5 pt-4 flex items-center justify-between">
              <GymLogo size="small" />

              <div className="flex items-center gap-2.5">
                {/* Notification Bell */}
                <button 
                  onClick={() => setShowNotificationModal(!showNotificationModal)}
                  className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
                </button>

                {/* Profile Avatar */}
                <button 
                  onClick={() => { setActiveTab('profile'); setCurrentScreen('profile'); }}
                  className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-400/50 hover:ring-2 hover:ring-cyan-400 transition-all"
                >
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            {/* Notification popup preview */}
            {showNotificationModal && (
              <div className="mx-5 p-3 rounded-xl bg-[#121B23] border border-cyan-500/30 text-xs shadow-lg animate-fadeIn">
                <div className="flex items-center justify-between font-semibold text-cyan-400 mb-1">
                  <span>Gym Announcement</span>
                  <button onClick={() => setShowNotificationModal(false)} className="text-slate-400 text-xs">✕</button>
                </div>
                <p className="text-slate-300">Trainer Amit Verma reviewed your chest form guide. New weights prescribed!</p>
              </div>
            )}

            {/* Greeting + Motivation Banner */}
            <div className="px-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#0C171F] via-[#0E2028] to-[#0A161C] p-4 shadow-lg">
                {/* Background moody gym silhouette image */}
                <div 
                  className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-luminosity"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80')` }}
                />
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Good Morning,</p>
                      <h2 className="text-xl font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                        {user.name} <span className="text-lg">👋</span>
                      </h2>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      🔥 {user.streak} Day Streak
                    </span>
                  </div>
                  <p className="text-xs text-slate-300/80 italic mt-2 font-serif">
                    "Discipline today, bigger results tomorrow."
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
                    <span className="text-cyan-300 font-semibold tracking-wide">TRAIN SMART. STAY CONSISTENT.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* THE HERO: TODAY'S WORKOUT CARD */}
            <div className="px-5">
              <div className="relative rounded-3xl p-5 border border-cyan-400/40 bg-gradient-to-br from-[#0F222B] via-[#0D1A20] to-[#081014] shadow-[0_0_35px_rgba(0,229,255,0.2)] overflow-hidden group">
                {/* Top glow accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 rounded-full bg-cyan-400" />
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400">
                        TODAY'S WORKOUT
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      Monday Split
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                    CHEST + TRICEPS <span className="text-xl">🔥</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">Push Harder. Build Stronger.</p>

                  {/* Badges */}
                  <div className="flex items-center gap-2 mt-4 text-xs font-medium text-slate-300">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" /> ~ 60 mins
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10">
                      <Dumbbell className="w-3.5 h-3.5 text-cyan-400" /> {exercises.length} Exercises
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" /> Intermediate
                    </span>
                  </div>

                  {/* Primary CTA Button: VIEW TODAY'S WORKOUT PLAN */}
                  <button
                    onClick={() => setCurrentScreen('workout_plan')}
                    className="w-full mt-5 py-3.5 px-5 rounded-2xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.4)] group-hover:scale-[1.02]"
                  >
                    <span>VIEW TODAY'S WORKOUT PLAN</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* INSTAGRAM PROMOTION CARD */}
            <div className="px-5">
              <div className="rounded-2xl p-4 bg-gradient-to-r from-[#171424] via-[#121B24] to-[#0D1820] border border-pink-500/20 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wide uppercase">FOLLOW US ON INSTAGRAM</h4>
                      <p className="text-[11px] text-slate-400">Tips • Transformations • Offers • Events</p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 4 Mini photo tiles */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=200&q=80",
                    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=200&q=80",
                    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=200&q=80",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
                  ].map((img, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-white/10 relative group">
                      <img src={img} alt="Gym Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WANT TO LEVEL UP? PT PROMOTION CARD */}
            <div className="px-5">
              <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#11242E] via-[#0E1E26] to-[#0A1318] border border-cyan-500/30 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-base font-black text-cyan-400">WANT TO LEVEL UP?</h4>
                      <p className="text-xs text-white font-medium mt-0.5">
                        Get a Custom Workout Plan with Personal Training (PT).
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-500/30">
                      PRO
                    </span>
                  </div>

                  {/* Bullet points */}
                  <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>100% Personalized Plan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>One to One Guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Faster & Better Results</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => alert("Personal Training Inquiry: Trainer Amit Verma assigned for consultation.")}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Explore PT Plans</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* MEMBERSHIP STATUS CARD */}
            <div className="px-5">
              <div 
                onClick={() => { setActiveTab('profile'); setCurrentScreen('profile'); }}
                className="rounded-2xl p-4 bg-[#101820] border border-white/10 hover:border-cyan-500/30 transition-colors cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white">Premium Membership</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Active
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Valid till {user.validTill} • <span className="text-cyan-400 font-medium">{user.daysLeft} Days Left</span>
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* QUICK SHORTCUT CARDS */}
            <div className="px-5 grid grid-cols-2 gap-2.5">
              <div 
                onClick={() => setCurrentScreen('workout_plan')}
                className="p-3.5 rounded-xl bg-[#0F161D] border border-white/5 hover:border-cyan-500/30 cursor-pointer transition-colors"
              >
                <Dumbbell className="w-5 h-5 text-cyan-400 mb-1.5" />
                <h5 className="text-xs font-bold text-white">Workout Plan</h5>
                <p className="text-[10px] text-slate-400">3-Month Split Program</p>
              </div>
              <div 
                onClick={() => {
                  onOpenReceipt({
                    id: "REC-101",
                    date: "15 Aug 2026",
                    amount: "₹3,000",
                    plan: "Personal Training (Monthly)",
                    status: "Paid",
                    method: "UPI / PhonePe"
                  });
                }}
                className="p-3.5 rounded-xl bg-[#0F161D] border border-white/5 hover:border-cyan-500/30 cursor-pointer transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1.5" />
                <h5 className="text-xs font-bold text-white">Payments & Receipts</h5>
                <p className="text-[10px] text-slate-400">View Tax Invoices</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SCREEN 2: TODAY'S WORKOUT PLAN SCREEN
           ======================================================== */}
        {currentScreen === 'workout_plan' && (
          <div className="space-y-4 pb-24 text-slate-100">
            {/* Navigation Header */}
            <div className="px-5 pt-4 flex items-center justify-between border-b border-white/5 pb-3">
              <button
                onClick={() => setCurrentScreen('home')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors flex items-center gap-1 text-xs"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <div className="text-center">
                <h3 className="text-sm font-bold text-white">Today's Workout Plan</h3>
                <p className="text-[11px] text-slate-400">Mon, 06 Oct 2026</p>
              </div>
              <button 
                onClick={() => alert("Calendar: Chest + Triceps scheduled every Monday.")}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400"
              >
                <Calendar className="w-4 h-4" />
              </button>
            </div>

            {/* Segmented Control: Workout Plan vs Muscle View */}
            <div className="px-5">
              <div className="grid grid-cols-2 p-1 rounded-xl bg-[#10171F] border border-white/10 text-xs font-semibold">
                <button
                  onClick={() => setViewMode('plan')}
                  className={`py-2 rounded-lg transition-all ${
                    viewMode === 'plan' 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Workout Plan
                </button>
                <button
                  onClick={() => setViewMode('muscle')}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    viewMode === 'muscle' 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-orange-400" /> Muscle View
                </button>
              </div>
            </div>

            {/* Hero Split Card */}
            <div className="px-5">
              <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#0F232C] via-[#0E1A22] to-[#091216] border border-cyan-500/30 overflow-hidden shadow-lg">
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-black text-white">
                        CHEST + <span className="text-cyan-400">TRICEPS</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 max-w-[260px]">
                        Build a stronger chest, improve pressing strength and define your arms.
                      </p>
                    </div>
                    {/* Anatomical Mini Badge */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center">
                      <Target className="w-6 h-6 text-cyan-400 animate-pulse" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-3 text-xs font-medium text-slate-300">
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Clock className="w-3.5 h-3.5" /> ~ 60 mins
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Dumbbell className="w-3.5 h-3.5 text-cyan-400" /> {exercises.length} Exercises
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" /> Intermediate
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Muscle View Anatomy Demonstration if toggled */}
            {viewMode === 'muscle' && (
              <div className="mx-5 p-4 rounded-2xl bg-[#0D161D] border border-cyan-500/40 text-center animate-fadeIn">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Targeted Muscle Groups</h4>
                <div className="relative h-44 rounded-xl bg-[#090E13] border border-white/5 flex items-center justify-center overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80')` }}
                  />
                  <div className="relative z-10 space-y-1.5 p-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold">
                      Upper Clavicular Pectoralis (Primary)
                    </span>
                    <br />
                    <span className="inline-block px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold">
                      Mid & Lower Sternal Chest
                    </span>
                    <br />
                    <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                      Triceps Lateral & Long Heads (Secondary)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Workout Progress Bar */}
            <div className="px-5">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
                <span>Complete your workout</span>
                <span className="text-cyan-400 font-bold">{completedCount} / {exercises.length} Exercises ({progressPercent}%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#141C24] overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Exercise List */}
            <div className="px-5 space-y-2.5">
              {exercises.map((exercise, index) => {
                const isCompleted = completedExercises[exercise.id];
                const isSelected = selectedExerciseId === exercise.id;

                return (
                  <div
                    key={exercise.id}
                    onClick={() => {
                      setSelectedExerciseId(exercise.id);
                      setCurrentScreen('exercise_detail');
                    }}
                    className={`p-3 rounded-2xl transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#10242B] border border-cyan-400/60 shadow-[0_0_20px_rgba(0,229,255,0.15)]'
                        : 'bg-[#0E151C] border border-white/5 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Exercise Number / Completed Check */}
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-white/5 text-slate-400 border border-white/5'
                      }`}>
                        {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                      </div>

                      {/* Exercise Thumbnail */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-white/10 flex-shrink-0">
                        <img 
                          src={exercise.image} 
                          alt={exercise.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Exercise Info */}
                      <div>
                        <h5 className="text-xs font-bold text-white group-hover:text-cyan-300">
                          {exercise.name}
                        </h5>
                        <p className="text-[11px] text-cyan-400/90 font-medium">
                          {exercise.sets} Sets × {exercise.reps}
                        </p>
                        <span className="text-[10px] text-slate-400">
                          {exercise.targetMuscle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <div className="w-7 h-7 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-md animate-pulse">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Button: START WORKOUT */}
            <div className="px-5 pt-3">
              <button
                onClick={() => {
                  setSelectedExerciseId(exercises[0]?.id || 'ex-1');
                  setCurrentScreen('exercise_detail');
                }}
                className="w-full py-3.5 rounded-2xl font-black text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.35)]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>START WORKOUT</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            SCREEN 3: EXERCISE DETAIL SCREEN (Incline Dumbbell Press)
           ======================================================== */}
        {currentScreen === 'exercise_detail' && (
          <div className="space-y-4 pb-24 text-slate-100">
            {/* Top Navigation */}
            <div className="px-5 pt-4 flex items-center justify-between border-b border-white/5 pb-3">
              <button
                onClick={() => setCurrentScreen('workout_plan')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors flex items-center gap-1 text-xs"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <div className="text-center">
                <h3 className="text-sm font-extrabold text-white">{currentExercise.name}</h3>
                <p className="text-[11px] text-cyan-400">{currentExercise.category}</p>
              </div>
              <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-red-400 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Sub-tabs */}
            <div className="px-5">
              <div className="flex gap-2 overflow-x-auto pb-1 text-xs font-semibold">
                {['Exercise', 'Muscle Focus', 'Tips', 'History'].map((tab, idx) => (
                  <span
                    key={tab}
                    className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-colors ${
                      idx === 0 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            {/* VIDEO AREA 1: FORM GUIDE (Large Video) */}
            <div className="px-5">
              <div className="relative rounded-2xl overflow-hidden bg-[#0A1015] border border-cyan-500/30 shadow-lg group">
                <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={currentExercise.image}
                    alt={currentExercise.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isPlayingFormVideo ? 'scale-105 filter brightness-105' : 'group-hover:scale-105'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

                  {/* HD Badge & Duration */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-cyan-400 text-slate-950">
                      HD
                    </span>
                    <span className="text-[10px] font-bold text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      KINETIC COACHING
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 text-[11px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {currentExercise.videoDuration || '01:24'}
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlayingFormVideo(!isPlayingFormVideo)}
                    className="relative z-10 w-14 h-14 rounded-full bg-cyan-400/90 hover:bg-cyan-300 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-transform hover:scale-110"
                  >
                    {isPlayingFormVideo ? (
                      <span className="font-bold text-xs">PAUSE</span>
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                  </button>

                  {/* Interactive simulated progress bar when playing */}
                  {isPlayingFormVideo && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <div className="h-full bg-cyan-400 animate-[pulse_2s_infinite] w-2/3 transition-all" />
                    </div>
                  )}
                </div>

                {/* Form Guide Details text */}
                <div className="p-3.5 bg-[#0F171E] border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Form Guide
                    </h4>
                    <span className="text-[10px] text-cyan-300 font-medium">Kinetic Verified Form</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    {currentExercise.formGuideDesc}
                  </p>
                  
                  {/* Form checkpoints list */}
                  <div className="grid grid-cols-2 gap-1.5 mt-2.5 text-[10px] text-slate-300 font-medium">
                    <span className="flex items-center gap-1">✓ Correct posture</span>
                    <span className="flex items-center gap-1">✓ Full range of motion</span>
                    <span className="flex items-center gap-1">✓ Controlled descent</span>
                    <span className="flex items-center gap-1">✓ Exhale on press</span>
                  </div>
                </div>
              </div>
            </div>

            {/* VIDEO AREA 2: MUSCLE-MIND CONNECTION (Smaller Video) */}
            <div className="px-5">
              <div className="relative rounded-2xl p-3 bg-gradient-to-r from-[#121E26] to-[#0D161D] border border-cyan-500/20 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <h4 className="text-xs font-bold text-white">Muscle-Mind Connection</h4>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">00:45</span>
                </div>

                <div className="relative h-28 rounded-xl overflow-hidden bg-black/60 flex items-center justify-center border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
                    alt="Muscle Focus"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-red-900/20 mix-blend-color" />
                  
                  {/* Play trigger */}
                  <button
                    onClick={() => setIsPlayingMuscleVideo(!isPlayingMuscleVideo)}
                    className="relative z-10 w-10 h-10 rounded-full bg-orange-500/90 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>

                  <div className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/70 px-2 py-0.5 rounded">
                    Upper Pectoralis Focus
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 mt-2 font-medium">
                  {currentExercise.muscleMindCue}
                </p>
              </div>
            </div>

            {/* EXERCISE DETAILS CARD */}
            <div className="px-5">
              <div className="rounded-2xl p-4 bg-[#0E151C] border border-white/5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Exercise Details</h4>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-black/30 border border-white/5">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                      <Flame className="w-3.5 h-3.5 text-orange-400" /> Target Muscle
                    </div>
                    <p className="font-bold text-white mt-1">{currentExercise.targetMuscle}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/30 border border-white/5">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                      <Dumbbell className="w-3.5 h-3.5 text-cyan-400" /> Equipment
                    </div>
                    <p className="font-bold text-white mt-1">{currentExercise.equipment}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/30 border border-white/5">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" /> Sets × Reps
                    </div>
                    <p className="font-bold text-white mt-1">{currentExercise.sets} Sets × {currentExercise.reps}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/30 border border-white/5">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" /> Rest Between Sets
                    </div>
                    <p className="font-bold text-white mt-1">{currentExercise.rest}</p>
                  </div>
                </div>

                {/* Interactive Sets Checklist */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Track Today's Sets</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((setNum) => {
                      const isDone = activeSets[setNum];
                      return (
                        <button
                          key={setNum}
                          onClick={() => {
                            setActiveSets(prev => ({ ...prev, [setNum]: !prev[setNum] }));
                          }}
                          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
                            isDone 
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm' 
                              : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                          }`}
                        >
                          Set {setNum} {isDone ? '✓' : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS: MARK AS COMPLETE & SKIP */}
            <div className="px-5 pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  handleMarkComplete(currentExercise.id);
                  // Advance or back to list
                  setTimeout(() => {
                    setCurrentScreen('workout_plan');
                  }, 800);
                }}
                className="flex-1 py-3.5 rounded-2xl font-black text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>MARK AS COMPLETE</span>
              </button>

              <button
                onClick={() => setCurrentScreen('workout_plan')}
                className="px-5 py-3.5 rounded-2xl font-bold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1.5"
              >
                <span>Skip</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            SCREEN 4: CLIENT PROFILE & FITNESS PREFERENCES
           ======================================================== */}
        {currentScreen === 'profile' && (
          <div className="space-y-4 pb-24 text-slate-100">
            {/* Top Bar */}
            <div className="px-5 pt-4 flex items-center justify-between border-b border-white/5 pb-3">
              <GymLogo size="small" />
              <button
                onClick={() => setCurrentScreen('home')}
                className="text-xs text-cyan-400 font-semibold"
              >
                Done
              </button>
            </div>

            {/* Profile Avatar Card */}
            <div className="px-5 text-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400 p-0.5 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-xs font-bold border-2 border-black">
                  📷
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white mt-2">{user.name}</h3>
              <p className="text-xs text-slate-400">{user.phone} • {user.email}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Award className="w-3.5 h-3.5" /> Premium Member
              </div>
            </div>

            {/* Sub-menu Cards */}
            <div className="px-5 space-y-2">
              {/* My Profile */}
              <div 
                onClick={() => setCurrentScreen('my_profile')}
                className="p-3.5 rounded-xl bg-[#0E151C] border border-white/5 hover:border-cyan-500/30 flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">My Profile</h5>
                    <p className="text-[10px] text-slate-400">Personal information</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>

              {/* Fitness Preferences */}
              <div 
                onClick={() => setCurrentScreen('preferences')}
                className="p-3.5 rounded-xl bg-[#0E151C] border border-white/5 hover:border-cyan-500/30 flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Fitness Preferences</h5>
                    <p className="text-[10px] text-slate-400">Your goals & training details</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>

              {/* Membership Details */}
              <div 
                onClick={() => {
                  onOpenReceipt({
                    id: "REC-101",
                    date: "15 Aug 2026",
                    amount: "₹3,000",
                    plan: "Personal Training",
                    status: "Paid",
                    method: "UPI"
                  });
                }}
                className="p-3.5 rounded-xl bg-[#0E151C] border border-white/5 hover:border-cyan-500/30 flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Membership & Receipts</h5>
                    <p className="text-[10px] text-slate-400">Plan details & renewal invoice</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Assigned Trainer Mini Card */}
            <div className="px-5">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0C171E] to-[#0A131A] border border-cyan-500/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Assigned Personal Trainer</span>
                <div className="flex items-center gap-3 mt-2">
                  <img src={user.assignedTrainer.avatar} alt="Trainer" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                  <div>
                    <h5 className="text-xs font-bold text-white">{user.assignedTrainer.name}</h5>
                    <p className="text-[10px] text-slate-400">{user.assignedTrainer.role}</p>
                    <p className="text-[10px] text-cyan-300 font-mono mt-0.5">{user.assignedTrainer.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SCREEN 5: FITNESS PREFERENCES DETAIL
           ======================================================== */}
        {currentScreen === 'preferences' && (
          <div className="space-y-4 pb-24 text-slate-100">
            <div className="px-5 pt-4 flex items-center justify-between border-b border-white/5 pb-3">
              <button
                onClick={() => setCurrentScreen('profile')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors flex items-center gap-1 text-xs"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <h3 className="text-sm font-bold text-white">Fitness Preferences</h3>
              <button 
                onClick={() => {
                  triggerCelebration();
                  setCurrentScreen('profile');
                }}
                className="text-xs font-bold text-cyan-400 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30"
              >
                Save
              </button>
            </div>

            {/* Fitness Goal */}
            <div className="px-5 space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Fitness Goal</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Muscle Gain', 'Fat Loss', 'Strength', 'General Fitness', 'Endurance', 'Flexibility'].map((goal, idx) => (
                  <div 
                    key={goal}
                    className={`p-3 rounded-xl border font-bold cursor-pointer transition-all flex items-center gap-2 ${
                      idx === 0 
                        ? 'bg-[#102730] border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                        : 'bg-[#0E151C] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitness Level */}
            <div className="px-5 space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Fitness Level</label>
              <div className="grid grid-cols-3 gap-2 text-xs text-center font-bold">
                {['Beginner', 'Intermediate', 'Advanced'].map((lvl, idx) => (
                  <div 
                    key={lvl}
                    className={`py-2.5 rounded-xl border cursor-pointer transition-all ${
                      idx === 1 
                        ? 'bg-[#102730] border-cyan-400 text-cyan-300' 
                        : 'bg-[#0E151C] border-white/5 text-slate-400'
                    }`}
                  >
                    {lvl}
                  </div>
                ))}
              </div>
            </div>

            {/* Workout Days & Time */}
            <div className="px-5 space-y-3">
              <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Workout Days Per Week</span>
                <span className="font-bold text-white bg-white/5 px-3 py-1 rounded-lg">5 Days</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Preferred Workout Time</span>
                <span className="font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">Morning (6 AM - 9 AM)</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SCREEN 6: MY PROFILE (Personal Info)
           ======================================================== */}
        {currentScreen === 'my_profile' && (
          <div className="space-y-4 pb-24 text-slate-100">
            <div className="px-5 pt-4 flex items-center justify-between border-b border-white/5 pb-3">
              <button
                onClick={() => setCurrentScreen('profile')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors flex items-center gap-1 text-xs"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <h3 className="text-sm font-bold text-white">Personal Information</h3>
              <button 
                onClick={() => setCurrentScreen('profile')}
                className="text-xs font-bold text-cyan-400 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30"
              >
                Save
              </button>
            </div>

            <div className="px-5 space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Full Name</span>
                <p className="font-bold text-white mt-1">{user.name}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Phone Number</span>
                <p className="font-mono font-bold text-white mt-1">{user.phone}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Email Address</span>
                <p className="font-bold text-white mt-1">{user.email}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Height</span>
                  <p className="font-bold text-white mt-1">{user.height}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Weight</span>
                  <p className="font-bold text-white mt-1">{user.weight}</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#0E151C] border border-white/5">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                <p className="font-bold text-white mt-1">{user.location}</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            CLIENT MOBILE BOTTOM NAVIGATION BAR
           ======================================================== */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#080C0F]/95 backdrop-blur-lg border-t border-white/10 px-6 py-2.5 flex items-center justify-between text-[11px] font-medium z-30">
          <button
            onClick={() => {
              setActiveTab('home');
              setCurrentScreen('home');
            }}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === 'home' && currentScreen === 'home' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-lg ${activeTab === 'home' ? 'bg-cyan-500/10' : ''}`}>
              <Dumbbell className="w-5 h-5" />
            </div>
            <span>Home</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('workout');
              setCurrentScreen('workout_plan');
            }}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentScreen === 'workout_plan' || currentScreen === 'exercise_detail' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentScreen === 'workout_plan' ? 'bg-cyan-500/10' : ''}`}>
              <Zap className="w-5 h-5" />
            </div>
            <span>Workout</span>
          </button>

          <button
            onClick={() => {
              alert("Special Promo: Buy 6-month PT extension and get 1 month free nutrition coaching!");
            }}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <div className="p-1 rounded-lg">
              <Award className="w-5 h-5" />
            </div>
            <span>Offers</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('profile');
              setCurrentScreen('profile');
            }}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentScreen === 'profile' || currentScreen === 'preferences' || currentScreen === 'my_profile' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentScreen === 'profile' ? 'bg-cyan-500/10' : ''}`}>
              <User className="w-5 h-5" />
            </div>
            <span>Profile</span>
          </button>
        </div>

      </div>
    </div>
  );
}
