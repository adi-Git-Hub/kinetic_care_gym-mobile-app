import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Smartphone, Sparkles, Flame, 
  Dumbbell, Target, User, ZoomIn 
} from 'lucide-react';

const SCREEN_INFO = [
  {
    step: '01',
    title: "Home & Today's Workout",
    subtitle: "Greeting • Chest + Triceps Hero • Streak & PT Promo",
    badge: "SCREEN 01 — HOME"
  },
  {
    step: '02',
    title: "Today's Workout Plan",
    subtitle: "5 Prescribed Exercises • Muscle Anatomy View • 60 Mins",
    badge: "SCREEN 02 — WORKOUT PLAN"
  },
  {
    step: '03',
    title: "Exercise Detail & Video Guide",
    subtitle: "Form Guide HD Video • Muscle-Mind Connection • Sets Check",
    badge: "SCREEN 03 — EXERCISE DETAIL"
  }
];

export default function MobileClientCarousel({ onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0); // 0, 1, or 2
  const [isSwiping, setIsSwiping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Touch Swipe Handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    if (currentIndex < 2) {
      setHasInteracted(true);
      setIsSwiping(true);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsSwiping(false), 520);
    } else {
      // Loop or bounce back
      setHasInteracted(true);
      setIsSwiping(true);
      setCurrentIndex(0);
      setTimeout(() => setIsSwiping(false), 520);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setHasInteracted(true);
      setIsSwiping(true);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsSwiping(false), 520);
    } else {
      // Loop to last
      setHasInteracted(true);
      setIsSwiping(true);
      setCurrentIndex(2);
      setTimeout(() => setIsSwiping(false), 520);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (touchEndX.current === 0) return;

    if (diff > 45) {
      // Swiped Left -> Next screen
      handleNext();
    } else if (diff < -45) {
      // Swiped Right -> Prev screen
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Precise translateX percentage for single 300% width composite strip:
  // Screen 1: 0%
  // Screen 2: -33.333333%
  // Screen 3: -66.666667%
  const translateXValue = currentIndex === 0 ? '0%' : currentIndex === 1 ? '-33.333333%' : '-66.666667%';

  const currentMeta = SCREEN_INFO[currentIndex];

  return (
    <section 
      id="client"
      className="relative py-12 px-4 bg-gradient-to-b from-[#04070A] via-[#070D12] to-[#04070A] border-t border-cyan-500/15"
    >
      {/* Background Cyan Ambient Glow */}
      <div className="absolute top-1/3 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="space-y-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full liquid-glass text-cyan-300 text-[10px] font-bold uppercase tracking-widest">
            <Smartphone className="w-3 h-3 text-cyan-400" />
            <span>SECTION 02 — CLIENT APP</span>
          </div>

          <h2 className="text-2xl font-black text-white tracking-tight">
            CLIENT APP
          </h2>

          <p className="text-sm font-bold text-cyan-400 font-serif italic">
            "Your Workout. Your Plan."
          </p>

          <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
            Open the app and immediately know what workout to do today.
          </p>
        </div>

        {/* 4 Feature Pills Above Carousel */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
          <div className="p-2.5 rounded-xl liquid-glass flex items-center gap-2 text-slate-200">
            <Flame className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate">Today's Workout</span>
          </div>
          <div className="p-2.5 rounded-xl liquid-glass flex items-center gap-2 text-slate-200">
            <Dumbbell className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate">Workout Plan</span>
          </div>
          <div className="p-2.5 rounded-xl liquid-glass flex items-center gap-2 text-slate-200">
            <Target className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate">Exercise Guide</span>
          </div>
          <div className="p-2.5 rounded-xl liquid-glass flex items-center gap-2 text-slate-200">
            <User className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate">Profile & Goals</span>
          </div>
        </div>

        {/* ===================================================================
            CRITICAL REQUIREMENT: SINGLE-IMAGE THREE-PART VIEWPORT CAROUSEL
            - Sized for exactly ONE mobile screen
            - Uses the single composite image User-iamge/1c2c778b...
            - NEVER shows multiple screens together
            - Horizontal translateX slides 1 screen at a time
           =================================================================== */}
        <div className="relative rounded-3xl liquid-glass p-3 sm:p-4 shadow-2xl border border-cyan-400/25 space-y-3">
          
          {/* Top Progress Loader Bar */}
          <div className="h-1 w-full bg-black/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_8px_#00E5FF]"
              style={{ width: `${((currentIndex + 1) / 3) * 100}%` }}
            />
          </div>

          {/* Current Screen Badge & Inspect Button */}
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30">
              {currentMeta.badge}
            </span>

            <button
              onClick={() => onOpenLightbox(
                '/User-iamge/1c2c778b-a538-4c59-b84e-90b092c3b210.png',
                currentMeta.title,
                currentMeta.subtitle
              )}
              className="touch-target-44 flex items-center gap-1 text-[11px] font-bold text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect</span>
            </button>
          </div>

          {/* CLIPPED CAROUSEL VIEWPORT (Strictly 1 Screen at a Time) */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full aspect-[1/2] max-h-[640px] rounded-2xl overflow-hidden bg-black/90 border border-white/10 shadow-inner select-none cursor-grab active:cursor-grabbing"
          >
            {/* The single 300% width composite strip that slides horizontally */}
            <div 
              className="absolute top-0 left-0 h-full flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                width: '300%',
                transform: `translateX(${translateXValue})`,
              }}
            >
              <img 
                src="/User-iamge/1c2c778b-a538-4c59-b84e-90b092c3b210.png" 
                alt="Client App 3-Screen Strip"
                className={`w-full h-full object-fill pointer-events-none transition-all duration-500 ${
                  isSwiping ? 'brightness-110 filter blur-[0.5px]' : 'brightness-100'
                }`}
              />
            </div>

            {/* Left Touch Navigation Button (44px target) */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 touch-target-44 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white active:scale-90 transition-transform shadow-lg z-20"
              aria-label="Previous Screen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Touch Navigation Button (44px target) */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 touch-target-44 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white active:scale-90 transition-transform shadow-lg z-20"
              aria-label="Next Screen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Screen Title & Subtitle */}
          <div className="pt-2 px-1 text-center space-y-1">
            <h4 className="text-xs font-black text-white">
              {currentMeta.title}
            </h4>
            <p className="text-[10px] text-slate-400">
              {currentMeta.subtitle}
            </p>
          </div>

          {/* Pagination Controls & Counter */}
          <div className="pt-2 pb-1 flex flex-col items-center justify-center space-y-1.5">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setHasInteracted(true);
                    setIsSwiping(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsSwiping(false), 520);
                  }}
                  className="touch-target-44 p-2 flex items-center justify-center"
                  aria-label={`Go to screen ${idx + 1}`}
                >
                  <span className={`block rounded-full transition-all ${
                    currentIndex === idx 
                      ? 'w-7 h-2 bg-cyan-400 shadow-[0_0_12px_#00E5FF]' 
                      : 'w-2 h-2 bg-white/20'
                  }`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400">
              <span className="text-cyan-400">0{currentIndex + 1}</span>
              <span>/</span>
              <span>03</span>
            </div>

            <p className={`text-[9px] uppercase tracking-widest text-cyan-400/90 font-bold transition-opacity ${
              hasInteracted ? 'opacity-40' : 'opacity-100 animate-pulse'
            }`}>
              ← SWIPE TO EXPLORE →
            </p>
          </div>

        </div>

        {/* Primary Workout CTA Button */}
        <div className="pt-1">
          <button
            onClick={() => {
              // Advances to Screen 2 (Workout Plan)
              setCurrentIndex(1);
            }}
            className="w-full touch-target-44 py-3.5 px-5 rounded-2xl font-extrabold text-xs skeuo-btn-cyan flex items-center justify-center gap-2"
          >
            <span>VIEW TODAY'S WORKOUT PLAN</span>
          </button>
        </div>

      </div>
    </section>
  );
}
