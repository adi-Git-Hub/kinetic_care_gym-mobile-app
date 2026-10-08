import React, { useState } from 'react';
import { 
  Play, CheckCircle2, Flame, Eye, Dumbbell, Target, Sparkles, 
  ArrowRight, Check, Activity, ZoomIn 
} from 'lucide-react';

export default function WorkoutExperienceSection({ onOpenLightbox }) {
  const [activeStep, setActiveStep] = useState(3); // default highlight on Form Guide

  const WORKOUT_STEPS = [
    {
      step: '01',
      title: "VIEW TODAY'S WORKOUT",
      desc: "Tap the prominent cyan hero CTA. The member is immediately shown today's split: 'Chest + Triceps', estimated time (~60 mins), and 5 targeted exercises.",
      highlight: "Barbell Bench Press, Incline Press, Chest Fly, Tricep Pushdown, Overhead Extension."
    },
    {
      step: '02',
      title: "SELECT EXERCISE",
      desc: "Selecting an exercise (e.g. Incline Dumbbell Press) loads the detailed exercise breakdown, target muscular quadrant, equipment setup, and prescribed sets.",
      highlight: "Upper Chest focus, Dumbbells + 30° Incline Bench, 4 Sets × 10–12 Reps."
    },
    {
      step: '03',
      title: "WATCH FORM GUIDE",
      desc: "Large HD video area demonstrating correct setup, scapula retraction, controlled eccentric tempo, and proper breathing.",
      highlight: "Eliminates injury risk and reinforces proper lifting biomechanics on the gym floor."
    },
    {
      step: '04',
      title: "UNDERSTAND MUSCLE-MIND CONNECTION",
      desc: "Dedicated anatomical visualization showing exactly which muscle fibers to contract and where the member should feel the burn.",
      highlight: "Clavicular head isolation cue: Squeeze upper pecs toward collarbone at peak contraction."
    },
    {
      step: '05',
      title: "COMPLETE WORKOUT",
      desc: "Tap 'Mark as Complete'. The exercise is checked off, progress advances to next movement, giving clear positive feedback.",
      highlight: "Simple, satisfying, and free from confusing analytics clutter."
    }
  ];

  return (
    <section 
      id="workout-experience"
      className="relative py-24 px-4 sm:px-6 bg-[#060A0D] border-t border-white/5 overflow-hidden"
    >
      {/* Background Teal Accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-cyan-400" />
            <span>SECTION 03 — GUIDED GYM FLOOR EXECUTION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            THE WORKOUT EXPERIENCE
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-serif italic">
            "Every workout is clear, guided and easy to follow."
          </p>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The heart of the entire product. Members are never left wondering how to perform an exercise or which muscle to feel. 
            No confusing data dashboards—just pure, guided execution.
          </p>
        </div>

        {/* 5-Step Flow Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {WORKOUT_STEPS.map((s, index) => {
            const isActive = activeStep === index + 1;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(index + 1)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0E2028] border-cyan-400 shadow-[0_0_25px_rgba(0,229,255,0.25)] scale-[1.02]'
                    : 'bg-[#0B1117] border-white/5 hover:border-white/20'
                }`}
              >
                <div>
                  <span className={`text-2xl font-black font-mono block ${isActive ? 'text-cyan-400' : 'text-slate-600'}`}>
                    {s.step}
                  </span>
                  <h4 className="text-xs font-black text-white mt-2 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="text-[10px] font-semibold text-cyan-300/90 block">
                    ✓ {s.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* LARGE VISUAL SHOWCASE OF WORKOUT SCREENS (SOURCE ASSETS) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0C151D] via-[#091016] to-[#06090D] border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                Exercise & Form Coaching Interface
              </span>
              <h3 className="text-lg font-black text-white mt-1">
                Visual Flow: Incline Dumbbell Press • Form Guide & Mind-Muscle Videos
              </h3>
            </div>

            <button
              onClick={() => onOpenLightbox('/User-iamge/1c2c778b-a538-4c59-b84e-90b092c3b210.png', 'The Workout Experience', 'Form Guide & Mind-Muscle Connection Source Asset')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all flex items-center gap-1.5"
            >
              <ZoomIn className="w-4 h-4 text-cyan-400" />
              <span>Inspect Full Screen Flow</span>
            </button>
          </div>

          {/* Large Image View */}
          <div 
            onClick={() => onOpenLightbox('/User-iamge/1c2c778b-a538-4c59-b84e-90b092c3b210.png', 'The Workout Experience', 'Form Guide & Mind-Muscle Connection Source Asset')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-white/10 bg-black/50 p-2 sm:p-4 hover:border-cyan-400/50 transition-all"
          >
            <img 
              src="/User-iamge/1c2c778b-a538-4c59-b84e-90b092c3b210.png" 
              alt="The Workout Experience Flow"
              className="w-full h-auto max-h-[700px] object-contain rounded-xl shadow-2xl mx-auto" 
            />
          </div>

          {/* Key Callouts Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl bg-[#091118] border border-white/5">
              <span className="font-bold text-cyan-400 block mb-1">📹 FORM GUIDE VIDEO</span>
              <p className="text-slate-300 text-[11px]">
                Demonstrates setup, 30° bench angle, correct posture, controlled negative, and full range of motion.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#091118] border border-white/5">
              <span className="font-bold text-orange-400 block mb-1">🧠 MIND-MUSCLE CONNECTION</span>
              <p className="text-slate-300 text-[11px]">
                Highlights anatomical target (Clavicular Pectoralis) so the user feels exactly where contraction occurs.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#091118] border border-white/5">
              <span className="font-bold text-emerald-400 block mb-1">✓ MARK AS COMPLETE</span>
              <p className="text-slate-300 text-[11px]">
                Tactile button logs the completed exercise and advances smoothly to the next movement in the routine.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
