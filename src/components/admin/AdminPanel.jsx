import React, { useState } from 'react';
import { 
  Users, Dumbbell, UserCheck, ChevronRight, ChevronLeft, Search, 
  Plus, Check, Clock, Calendar, CheckCircle2, MoreVertical, 
  Sparkles, Flame, Edit2, ShieldAlert, LogOut
} from 'lucide-react';
import GymLogo from '../common/GymLogo';
import AddExerciseModal from './AddExerciseModal';

export default function AdminPanel({ 
  members, 
  workoutSplit, 
  exercises, 
  onSaveWorkoutPlan, 
  onAddExerciseToPlan 
}) {
  const [activeTab, setActiveTab] = useState('members'); // 'members' | 'workout_plans' | 'profile'
  const [currentView, setCurrentView] = useState('list'); // 'list' | 'member_detail' | 'update_plan'
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all' | 'pt' | 'standard' | 'basic'
  
  // Update Plan Form State
  const [selectedPlanType, setSelectedPlanType] = useState('PT');
  const [editableSplit, setEditableSplit] = useState(workoutSplit);
  const [selectedDayForExercises, setSelectedDayForExercises] = useState('Monday');
  const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false);
  const [saveSuccessNotification, setSaveSuccessNotification] = useState(false);

  // Filter members
  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.phone.includes(searchQuery);
    if (!matchesSearch) return false;
    if (filterType === 'pt') return m.planType === 'PT';
    if (filterType === 'standard') return m.planType === 'Standard';
    if (filterType === 'basic') return m.planType === 'Basic';
    return true;
  });

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setCurrentView('member_detail');
  };

  const handleSavePlan = () => {
    onSaveWorkoutPlan(editableSplit);
    setSaveSuccessNotification(true);
    setTimeout(() => {
      setSaveSuccessNotification(false);
      setCurrentView('member_detail');
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[750px] bg-[#080D11] rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-fadeIn text-slate-100">
      
      {/* ========================================================
          LEFT SIDEBAR (Admin / Trainer)
         ======================================================== */}
      <aside className="w-full md:w-64 bg-[#0A1116] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between p-4 flex-shrink-0">
        <div className="space-y-6">
          <div className="px-2 pt-2">
            <GymLogo size="default" />
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                TRAINER PORTAL
              </span>
              <span className="text-[10px] text-slate-400">v2.4 Active</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <button
              onClick={() => { setActiveTab('members'); setCurrentView('list'); }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'members' 
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Members ({members.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab('workout_plans'); setCurrentView('update_plan'); }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'workout_plans' 
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Dumbbell className="w-4 h-4 text-cyan-400" />
              <span>Workout Plans</span>
            </button>

            <button
              onClick={() => alert("Trainer Profile: Amit Verma (Senior Strength Coach)")}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <UserCheck className="w-4 h-4" />
              <span>My Trainer Profile</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer Trainer Profile */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
            <img 
              src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=200&q=80" 
              alt="Trainer Amit" 
              className="w-9 h-9 rounded-full object-cover border border-cyan-400"
            />
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">Amit Verma</p>
              <p className="text-[10px] text-cyan-400 truncate">Senior Strength Coach</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 px-1">
            Focus: Members & Workouts only. No financial access.
          </p>
        </div>
      </aside>

      {/* ========================================================
          MAIN CONTENT AREA
         ======================================================== */}
      <main className="flex-1 bg-[#080D11] overflow-y-auto p-4 md:p-8">
        
        {/* VIEW 1: MEMBERS LIST */}
        {currentView === 'list' && (
          <div className="space-y-6">
            {/* Header + Search + Filters */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-5">
              <div>
                <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <span>Members</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {members.length} Total
                  </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Manage assigned members, review routines, and update weekly workout splits.
                </p>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search members by name or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#101820] border border-white/10 focus:border-cyan-400 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { id: 'all', label: `All (${members.length})` },
                { id: 'pt', label: `Personal Training (${members.filter(m => m.planType === 'PT').length})` },
                { id: 'standard', label: `Standard (${members.filter(m => m.planType === 'Standard').length})` },
                { id: 'basic', label: `Basic (${members.filter(m => m.planType === 'Basic').length})` },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilterType(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    filterType === tab.id
                      ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Members Table */}
            <div className="rounded-2xl border border-white/10 bg-[#0B1217] overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#101921] border-b border-white/10 text-slate-400 uppercase tracking-wider font-semibold text-[10px]">
                    <tr>
                      <th className="py-3 px-4">#</th>
                      <th className="py-3 px-4">Member</th>
                      <th className="py-3 px-4">Current Plan</th>
                      <th className="py-3 px-4">Assigned Trainer</th>
                      <th className="py-3 px-4">Start Date</th>
                      <th className="py-3 px-4">Expiry Date</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredMembers.map((member, index) => {
                      const isExpired = member.daysLeft <= 0;
                      const isExpiring = member.daysLeft > 0 && member.daysLeft <= 30;

                      return (
                        <tr 
                          key={member.id}
                          onClick={() => handleSelectMember(member)}
                          className="hover:bg-cyan-950/20 transition-colors cursor-pointer group"
                        >
                          <td className="py-3.5 px-4 font-mono text-slate-500 font-bold">{index + 1}</td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <img 
                                src={member.avatar} 
                                alt={member.name} 
                                className="w-8 h-8 rounded-full object-cover border border-white/10" 
                              />
                              <div>
                                <p className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                                  {member.name}
                                </p>
                                <p className="text-[10px] text-slate-400 font-mono">{member.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                              member.planType === 'PT'
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                                : member.planType === 'Standard'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                                : 'bg-slate-700/40 text-slate-300 border border-slate-600/40'
                            }`}>
                              {member.plan}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-medium text-slate-300">{member.trainer}</td>
                          <td className="py-3.5 px-4 text-slate-400">{member.startDate}</td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-300">{member.expiryDate}</span>
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                isExpired 
                                  ? 'bg-red-500/20 text-red-300' 
                                  : isExpiring 
                                  ? 'bg-amber-500/20 text-amber-300' 
                                  : 'bg-emerald-500/20 text-emerald-300'
                              }`}>
                                ({member.daysLeft} days)
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              member.status === 'Active'
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : member.status === 'Expiring'
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                                : 'bg-red-500/20 text-red-400 border border-red-500/40'
                            }`}>
                              {member.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button className="p-1 rounded-lg hover:bg-white/10 text-slate-400 group-hover:text-cyan-400">
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: MEMBER PLAN DETAILS */}
        {currentView === 'member_detail' && (
          <div className="space-y-6">
            {/* Back Button */}
            <button
              onClick={() => setCurrentView('list')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Members List
            </button>

            {/* Member Profile Header Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0C171F] via-[#0E2028] to-[#0A161C] border border-cyan-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedMember.avatar} 
                  alt={selectedMember.name} 
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400 p-0.5" 
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-white">{selectedMember.name}</h2>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold">
                      {selectedMember.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 font-mono">{selectedMember.phone} • {selectedMember.email}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Member since {selectedMember.startDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentView('update_plan')}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Change / Update Plan</span>
                </button>
              </div>
            </div>

            {/* Current Plan Overview Card */}
            <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">Current Workout Plan</h3>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {selectedMember.plan}
                  </span>
                </div>
                <button
                  onClick={() => setCurrentView('update_plan')}
                  className="text-xs font-bold text-cyan-400 hover:underline"
                >
                  Change Plan
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-slate-400 block text-[11px]">Start Date</span>
                  <p className="font-bold text-white mt-1">{selectedMember.startDate}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-slate-400 block text-[11px]">Expiry Date</span>
                  <p className="font-bold text-cyan-300 mt-1">{selectedMember.expiryDate} ({selectedMember.daysLeft} days left)</p>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=150&q=80" 
                    alt="Trainer" 
                    className="w-8 h-8 rounded-full object-cover border border-cyan-400" 
                  />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Assigned Trainer</span>
                    <p className="font-bold text-white">{selectedMember.trainer}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Workout Split */}
            <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-white">Weekly Workout Split (Current Routine)</h3>
                  <p className="text-xs text-slate-400">Prescribed schedule assigned to this member's mobile app.</p>
                </div>
                <span className="text-xs font-bold text-cyan-400">7-Day Split</span>
              </div>

              <div className="space-y-2.5">
                {editableSplit.map((item) => (
                  <div
                    key={item.day}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      item.isToday 
                        ? 'bg-[#10242B] border-cyan-400/50 shadow-[0_0_15px_rgba(0,229,255,0.1)]' 
                        : 'bg-[#121A22] border-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${
                        item.isToday ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-300'
                      }`}>
                        {item.shortDay}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-white">{item.workout}</h4>
                          {item.isToday && (
                            <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                              Today
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {item.exercisesCount > 0 ? `${item.exercisesCount} Exercises • ${item.duration}` : 'Rest & Recovery Day'}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedDayForExercises(item.day);
                        setCurrentView('update_plan');
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-1"
                    >
                      <span>Edit Day</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentView('update_plan')}
                  className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2"
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>Update Workout Plan</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: UPDATE WORKOUT PLAN (Interactive Editor) */}
        {currentView === 'update_plan' && (
          <div className="space-y-6">
            <button
              onClick={() => setCurrentView('member_detail')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Member Profile
            </button>

            {/* Notification Banner when saved */}
            {saveSuccessNotification && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.3)] animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Workout plan updated successfully! Synced to {selectedMember.name}'s mobile app.</span>
              </div>
            )}

            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-black text-white">Update Workout Plan</h2>
              <p className="text-xs text-slate-400 mt-0.5">Assign plan for member: <span className="text-white font-bold">{selectedMember.name}</span></p>
            </div>

            {/* Step 1: Select Existing Plan or Custom */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Select from Existing Plan Templates
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'PT', title: 'Personal Training (PT)', desc: 'Customized workout with 1-on-1 personal guidance' },
                  { id: 'Standard', title: 'Standard Plan', desc: 'Structured workout plan for all muscle goals' },
                  { id: 'Basic', title: 'Basic Plan', desc: 'General fitness, stamina & recovery workout plan' },
                ].map(plan => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlanType(plan.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedPlanType === plan.id
                        ? 'bg-[#0E242B] border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.2)]'
                        : 'bg-[#0E151C] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-white">{plan.title}</h4>
                      {selectedPlanType === plan.id && <Check className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{plan.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* OR Create New Plan Button */}
            <div 
              onClick={() => alert("Create New Custom Plan: Custom hypertrophy schedule initialized.")}
              className="p-3.5 rounded-xl bg-[#101922] border border-dashed border-cyan-500/40 hover:border-cyan-400 cursor-pointer flex items-center justify-between text-xs transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white">Create New Workout Plan</span>
                  <p className="text-[11px] text-slate-400">Add a new plan with custom exercises and schedule for this member</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>

            {/* Step 2: Set Weekly Workout Split */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Set Weekly Workout Split
                </label>
                <span className="text-[11px] text-slate-400">Click View/Edit Exercises to manage routine</span>
              </div>

              <div className="space-y-2">
                {editableSplit.map((splitItem, idx) => (
                  <div 
                    key={splitItem.day}
                    className="p-3 rounded-xl bg-[#0E151C] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 text-xs font-mono font-bold text-cyan-400">{splitItem.shortDay}</span>
                      <select
                        value={splitItem.workout}
                        onChange={(e) => {
                          const updated = [...editableSplit];
                          updated[idx].workout = e.target.value;
                          setEditableSplit(updated);
                        }}
                        className="bg-[#121B23] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white font-medium outline-none focus:border-cyan-400"
                      >
                        <option value="Chest + Triceps">Chest + Triceps</option>
                        <option value="Back + Biceps">Back + Biceps</option>
                        <option value="Rest / Cardio">Rest / Cardio</option>
                        <option value="Shoulders + Abs">Shoulders + Abs</option>
                        <option value="Legs">Legs</option>
                        <option value="Full Body">Full Body</option>
                        <option value="Rest">Rest</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDayForExercises(splitItem.day);
                          setIsAddExerciseModalOpen(true);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add / Edit Exercises</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Configured Exercises for selected day */}
            <div className="p-4 rounded-xl bg-[#0B1319] border border-white/5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-cyan-400" />
                  Prescribed Exercises for {selectedDayForExercises} ({exercises.length} Total)
                </span>
                <button
                  onClick={() => setIsAddExerciseModalOpen(true)}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-cyan-400 text-slate-950 flex items-center gap-1 shadow-sm"
                >
                  <Plus className="w-3 h-3" /> Add Exercise
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {exercises.map((ex, i) => (
                  <div key={ex.id} className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-white">{i + 1}. {ex.name}</p>
                      <p className="text-[11px] text-cyan-400">{ex.sets} Sets × {ex.reps} • {ex.rest}</p>
                    </div>
                    <span className="text-[10px] text-slate-400">{ex.targetMuscle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions: Cancel & Save Plan */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setCurrentView('member_detail')}
                className="px-5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePlan}
                className="px-6 py-2.5 rounded-xl text-xs font-extrabold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                <Check className="w-4 h-4" />
                <span>Save Plan</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Add Exercise Modal */}
      <AddExerciseModal
        isOpen={isAddExerciseModalOpen}
        onClose={() => setIsAddExerciseModalOpen(false)}
        selectedDay={selectedDayForExercises}
        onAddExercise={(newEx) => {
          onAddExerciseToPlan(newEx);
          setSaveSuccessNotification(true);
          setTimeout(() => setSaveSuccessNotification(false), 2000);
        }}
      />
    </div>
  );
}
