import React, { useState } from 'react';
import { X, Plus, Video, Dumbbell, Clock, Flame, Check } from 'lucide-react';

export default function AddExerciseModal({ isOpen, onClose, onAddExercise, selectedDay = "Monday" }) {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(4);
  const [reps, setReps] = useState('10–12');
  const [rest, setRest] = useState('60 sec');
  const [targetMuscle, setTargetMuscle] = useState('Upper Chest');
  const [equipment, setEquipment] = useState('Dumbbells + Incline Bench');
  const [hasVideo, setHasVideo] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newExercise = {
      id: `ex-${Date.now()}`,
      name: name.trim(),
      category: targetMuscle,
      sets: Number(sets),
      reps: `${reps} Reps`,
      rest: rest,
      equipment: equipment,
      targetMuscle: targetMuscle,
      videoDuration: '01:15',
      formGuideDesc: `Maintain strict posture and focused control for ${name.trim()}.`,
      muscleMindCue: `Concentrate on full mind-muscle contraction in the ${targetMuscle}.`,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      completed: false,
    };

    onAddExercise(newExercise, selectedDay);
    setName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0D141A] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.2)] overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#101820]">
          <div>
            <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Workout Builder</span>
            <h3 className="text-lg font-bold text-white mt-0.5">Add Exercise to {selectedDay}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Exercise Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Exercise Name <span className="text-cyan-400">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Incline Dumbbell Press"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#131B22] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Quick presets row */}
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Quick Select Common Exercises:</label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { n: 'Incline Dumbbell Press', m: 'Upper Chest', eq: 'Dumbbells + Incline Bench' },
                { n: 'Cable Lateral Raise', m: 'Lateral Deltoids', eq: 'Cable Machine' },
                { n: 'Skull Crushers', m: 'Triceps Long Head', eq: 'EZ Bar + Flat Bench' },
                { n: 'Lat Pulldown', m: 'Lats & Upper Back', eq: 'Lat Pulldown Station' },
                { n: 'Bulgarian Split Squats', m: 'Quads & Glutes', eq: 'Dumbbells + Bench' }
              ].map((preset) => (
                <button
                  key={preset.n}
                  type="button"
                  onClick={() => {
                    setName(preset.n);
                    setTargetMuscle(preset.m);
                    setEquipment(preset.eq);
                  }}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 text-slate-300 transition-colors"
                >
                  + {preset.n}
                </button>
              ))}
            </div>
          </div>

          {/* Target Muscle & Equipment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400" /> Target Muscle
              </label>
              <input
                type="text"
                placeholder="e.g. Upper Chest"
                value={targetMuscle}
                onChange={(e) => setTargetMuscle(e.target.value)}
                className="w-full bg-[#131B22] border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 text-cyan-400" /> Equipment
              </label>
              <input
                type="text"
                placeholder="e.g. Dumbbells + Incline Bench"
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                className="w-full bg-[#131B22] border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none"
              />
            </div>
          </div>

          {/* Sets, Reps & Rest */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Sets
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className="w-full bg-[#131B22] border border-white/10 focus:border-cyan-400 rounded-xl px-3 py-2 text-sm text-white text-center outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Reps
              </label>
              <input
                type="text"
                placeholder="10–12"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="w-full bg-[#131B22] border border-white/10 focus:border-cyan-400 rounded-xl px-3 py-2 text-sm text-white text-center outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3 text-cyan-400" /> Rest
              </label>
              <input
                type="text"
                placeholder="60 sec"
                value={rest}
                onChange={(e) => setRest(e.target.value)}
                className="w-full bg-[#131B22] border border-white/10 focus:border-cyan-400 rounded-xl px-3 py-2 text-sm text-white text-center outline-none"
              />
            </div>
          </div>

          {/* Video Placeholder Area */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-cyan-400" /> Form Guide Video
            </label>
            <div className="border border-dashed border-cyan-500/30 rounded-xl p-4 bg-[#111921] flex flex-col items-center justify-center text-center hover:border-cyan-400 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform mb-2">
                <Video className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium text-white">Upload or Link Trainer Form Guide Video</p>
              <p className="text-[11px] text-slate-400 mt-0.5">MP4, WebM or Kinetic Care Cloud Video Library</p>
              <span className="mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                HD Kinetic Video Ready
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!name.trim()}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              <Check className="w-4 h-4" /> Add Exercise to Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
