import React, { useState } from 'react';
import { 
  Users, CreditCard, LayoutDashboard, ChevronRight, ChevronLeft, 
  Search, ArrowUpRight, Clock, AlertTriangle, CheckCircle2, 
  Download, Filter, DollarSign, Calendar, TrendingUp, ShieldCheck, 
  FileText, LogOut
} from 'lucide-react';
import GymLogo from '../common/GymLogo';
import { SUPER_ADMIN_METRICS } from '../../data/mockData';

export default function SuperAdminPanel({ 
  members, 
  onOpenReceipt 
}) {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'members' | 'finance'
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'members' | 'member_detail'
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [memberFilter, setMemberFilter] = useState('all'); // 'all' | 'active' | 'expiring' | 'expired'
  const [selectedRevenuePeriod, setSelectedRevenuePeriod] = useState('This Month');

  // Filter members list
  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.phone.includes(searchQuery);
    if (!matchesSearch) return false;
    if (memberFilter === 'active') return m.status === 'Active';
    if (memberFilter === 'expiring') return m.status === 'Expiring';
    if (memberFilter === 'expired') return m.status === 'Expired';
    return true;
  });

  const expiringMembersList = members.filter(m => m.status === 'Expiring' || m.daysLeft <= 14);

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setCurrentView('member_detail');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[750px] bg-[#080D11] rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-fadeIn text-slate-100">
      
      {/* ========================================================
          LEFT SIDEBAR (Super Admin)
         ======================================================== */}
      <aside className="w-full md:w-64 bg-[#0A1116] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between p-4 flex-shrink-0">
        <div className="space-y-6">
          <div className="px-2 pt-2">
            <GymLogo size="default" />
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                SUPER ADMIN
              </span>
              <span className="text-[10px] text-slate-400">Gym Owner</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <button
              onClick={() => { setActiveTab('dashboard'); setCurrentView('dashboard'); }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard' && currentView === 'dashboard'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-cyan-400" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => { setActiveTab('members'); setCurrentView('members'); }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'members' || currentView === 'member_detail'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Members ({SUPER_ADMIN_METRICS.totalMembers})</span>
            </button>

            <button
              onClick={() => { setActiveTab('finance'); setCurrentView('finance'); }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'finance' 
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <CreditCard className="w-4 h-4 text-cyan-400" />
              <span>Payments & Revenue</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-4 border-t border-white/5 space-y-2">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
            <div className="w-9 h-9 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center font-bold text-xs">
              SA
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">Gym Owner</p>
              <p className="text-[10px] text-cyan-400 truncate">Kinetic Care Gym Main</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 px-1">
            Focus: Gym Business, Membership & Finance. No workout clutter.
          </p>
        </div>
      </aside>

      {/* ========================================================
          MAIN CONTENT AREA
         ======================================================== */}
      <main className="flex-1 bg-[#080D11] overflow-y-auto p-4 md:p-8">
        
        {/* ========================================================
            VIEW 1: SUPER ADMIN DASHBOARD
           ======================================================== */}
        {currentView === 'dashboard' && (
          <div className="space-y-6">
            {/* Top Greeting Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-white/10 pb-5">
              <div>
                <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <span>Good Morning, Super Admin</span>
                  <span>👋</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">Here's the financial and membership overview of your gym.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Tue, 06 Oct 2026</span>
              </div>
            </div>

            {/* DASHBOARD TOP METRIC CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Total Members */}
              <div className="p-4 rounded-2xl bg-[#0F171E] border border-white/10 shadow-md">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">TOTAL MEMBERS</span>
                  <Users className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-black text-white mt-2">{SUPER_ADMIN_METRICS.totalMembers}</h3>
                <span className="text-[10px] text-slate-400 mt-1 block">Full gym directory</span>
              </div>

              {/* Active Members */}
              <div className="p-4 rounded-2xl bg-[#0F171E] border border-emerald-500/20 shadow-md">
                <div className="flex items-center justify-between text-emerald-400 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">ACTIVE MEMBERS</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black text-white mt-2">{SUPER_ADMIN_METRICS.activeMembers}</h3>
                <span className="text-[10px] text-emerald-400/90 mt-1 block">{SUPER_ADMIN_METRICS.activePct}% of total capacity</span>
              </div>

              {/* Expiring Soon */}
              <div className="p-4 rounded-2xl bg-[#0F171E] border border-amber-500/20 shadow-md">
                <div className="flex items-center justify-between text-amber-400 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">EXPIRING SOON</span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-2xl font-black text-white mt-2">{SUPER_ADMIN_METRICS.expiringSoon}</h3>
                <span className="text-[10px] text-amber-400/90 mt-1 block">Next 7–14 days</span>
              </div>

              {/* Expired Members */}
              <div className="p-4 rounded-2xl bg-[#0F171E] border border-red-500/20 shadow-md">
                <div className="flex items-center justify-between text-red-400 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">EXPIRED</span>
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-2xl font-black text-white mt-2">{SUPER_ADMIN_METRICS.expiredMembers}</h3>
                <span className="text-[10px] text-red-400/90 mt-1 block">Requires follow-up</span>
              </div>

              {/* Total Revenue */}
              <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl bg-gradient-to-br from-[#0E242B] via-[#0B1A20] to-[#081216] border border-cyan-500/30 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                <div className="flex items-center justify-between text-cyan-400 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[10px]">TOTAL REVENUE</span>
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-black text-white mt-2">{SUPER_ADMIN_METRICS.totalRevenue}</h3>
                <span className="text-[10px] text-cyan-300 font-bold mt-1 inline-flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> {SUPER_ADMIN_METRICS.revenueGrowth} this month
                </span>
              </div>
            </div>

            {/* GRAPHS & OVERVIEW SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* Membership Donut / Breakdown Overview */}
              <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Membership Overview
                  </h3>
                  <span className="text-xs font-bold text-cyan-400">{SUPER_ADMIN_METRICS.totalMembers} Members</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-around gap-4 pt-2">
                  {/* Visual SVG Donut Chart */}
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background track */}
                      <circle cx="50" cy="50" r="40" stroke="#131B22" strokeWidth="12" fill="none" />
                      {/* Active (90%) */}
                      <circle 
                        cx="50" cy="50" r="40" 
                        stroke="#00E5FF" strokeWidth="12" 
                        strokeDasharray="226 25" strokeDashoffset="0" 
                        fill="none" strokeLinecap="round" 
                      />
                      {/* Expiring (8%) */}
                      <circle 
                        cx="50" cy="50" r="40" 
                        stroke="#F59E0B" strokeWidth="12" 
                        strokeDasharray="20 231" strokeDashoffset="-228" 
                        fill="none" 
                      />
                      {/* Expired (4%) */}
                      <circle 
                        cx="50" cy="50" r="40" 
                        stroke="#EF4444" strokeWidth="12" 
                        strokeDasharray="10 241" strokeDashoffset="-249" 
                        fill="none" 
                      />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-2xl font-black text-white">{SUPER_ADMIN_METRICS.totalMembers}</span>
                      <span className="block text-[9px] text-slate-400 uppercase font-semibold">Total</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">Active</span>
                      <span className="font-bold text-white ml-auto">{SUPER_ADMIN_METRICS.activeMembers} ({SUPER_ADMIN_METRICS.activePct}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="text-slate-300">Expiring Soon</span>
                      <span className="font-bold text-amber-300 ml-auto">{SUPER_ADMIN_METRICS.expiringSoon} ({SUPER_ADMIN_METRICS.expiringPct}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-slate-300">Expired</span>
                      <span className="font-bold text-red-400 ml-auto">{SUPER_ADMIN_METRICS.expiredMembers} ({SUPER_ADMIN_METRICS.expiredPct}%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Revenue Chart */}
              <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Revenue Overview
                    </h3>
                    <p className="text-base font-extrabold text-white mt-0.5">
                      {SUPER_ADMIN_METRICS.totalRevenue} <span className="text-xs font-bold text-emerald-400">{SUPER_ADMIN_METRICS.revenueGrowth}</span>
                    </p>
                  </div>
                  <select 
                    value={selectedRevenuePeriod}
                    onChange={(e) => setSelectedRevenuePeriod(e.target.value)}
                    className="bg-[#121B23] border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-300 outline-none"
                  >
                    <option>This Month</option>
                    <option>Last Quarter</option>
                    <option>Year 2026</option>
                  </select>
                </div>

                {/* Bar Chart Representation */}
                <div className="pt-2">
                  <div className="h-36 flex items-end justify-between gap-3 px-2 pb-2 border-b border-white/10">
                    {SUPER_ADMIN_METRICS.monthlyRevenue.map((item, idx) => {
                      const max = 130000;
                      const heightPercent = Math.round((item.revenue / max) * 100);
                      const isCurrent = idx === SUPER_ADMIN_METRICS.monthlyRevenue.length - 1;

                      return (
                        <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group">
                          <span className="text-[10px] text-slate-400 group-hover:text-cyan-300 font-mono transition-colors">
                            {item.label}
                          </span>
                          <div className="w-full bg-white/5 rounded-t-lg h-24 flex items-end">
                            <div 
                              className={`w-full rounded-t-lg transition-all duration-500 ${
                                isCurrent 
                                  ? 'bg-gradient-to-t from-cyan-500 to-teal-300 shadow-[0_0_15px_rgba(0,229,255,0.4)]' 
                                  : 'bg-cyan-500/30 group-hover:bg-cyan-500/50'
                              }`}
                              style={{ height: `${heightPercent}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">{item.month}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* MEMBERSHIP EXPIRY (Immediate Visibility - No Unnecessary Clicks!) */}
            <div className="p-5 rounded-2xl bg-[#0E151C] border border-amber-500/30 space-y-3">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    MEMBERSHIP EXPIRY (Expiring in Next 7–14 Days)
                  </h3>
                </div>
                <span className="text-xs text-amber-300 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  Immediate Action Required
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-[10px] uppercase font-bold text-slate-400 border-b border-white/5">
                    <tr>
                      <th className="py-2.5 px-3">Member</th>
                      <th className="py-2.5 px-3">Plan</th>
                      <th className="py-2.5 px-3">Expiry Date</th>
                      <th className="py-2.5 px-3">Days Left</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {expiringMembersList.map((m) => (
                      <tr key={m.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-2">
                            <img src={m.avatar} alt={m.name} className="w-6 h-6 rounded-full object-cover" />
                            <span className="font-bold text-white">{m.name}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-slate-300">{m.plan}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">{m.expiryDate}</td>
                        <td className="py-2.5 px-3">
                          <span className="font-bold text-amber-400">{m.daysLeft} days</span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Expiring
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <button 
                            onClick={() => handleSelectMember(m)}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
                          >
                            Renew / View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RECENT PAYMENTS SUMMARY */}
            <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 space-y-3">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Recent Payments
                </h3>
                <button
                  onClick={() => { setActiveTab('finance'); setCurrentView('finance'); }}
                  className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  View All Payments <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-[10px] uppercase font-bold text-slate-400 border-b border-white/5">
                    <tr>
                      <th className="py-2.5 px-3">#</th>
                      <th className="py-2.5 px-3">Member</th>
                      <th className="py-2.5 px-3">Plan</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {SUPER_ADMIN_METRICS.recentPayments.map((p) => (
                      <tr key={p.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 px-3 font-mono text-slate-500 font-bold">{p.id}</td>
                        <td className="py-2.5 px-3">
                          <div className="flex items-center gap-2">
                            <img src={p.avatar} alt={p.member} className="w-6 h-6 rounded-full object-cover" />
                            <span className="font-bold text-white">{p.member}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-slate-300">{p.plan}</td>
                        <td className="py-2.5 px-3 font-bold text-white">{p.amount}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">{p.date}</td>
                        <td className="py-2.5 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            p.status === 'Paid' 
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <button
                            onClick={() => onOpenReceipt({
                              id: `REC-10${p.id}`,
                              date: p.date,
                              amount: p.amount,
                              plan: p.plan,
                              status: p.status,
                              method: 'Instant UPI / Bank POS'
                            })}
                            className="p-1 rounded-lg hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-colors"
                            title="Download Receipt"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 2: SUPER ADMIN MEMBERS DIRECTORY
           ======================================================== */}
        {currentView === 'members' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-5">
              <div>
                <h2 className="text-xl font-extrabold text-white">Members Directory ({SUPER_ADMIN_METRICS.totalMembers})</h2>
                <p className="text-xs text-slate-400 mt-1">Review active memberships, monitor expirations, and audit fee dues.</p>
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

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { id: 'all', label: `All (${SUPER_ADMIN_METRICS.totalMembers})` },
                { id: 'active', label: `Active (${SUPER_ADMIN_METRICS.activeMembers})` },
                { id: 'expiring', label: `Expiring Soon (${SUPER_ADMIN_METRICS.expiringSoon})` },
                { id: 'expired', label: `Expired (${SUPER_ADMIN_METRICS.expiredMembers})` },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setMemberFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    memberFilter === tab.id
                      ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Directory Table */}
            <div className="rounded-2xl border border-white/10 bg-[#0B1217] overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#101921] border-b border-white/10 text-slate-400 uppercase tracking-wider font-semibold text-[10px]">
                    <tr>
                      <th className="py-3 px-4">#</th>
                      <th className="py-3 px-4">Member</th>
                      <th className="py-3 px-4">Plan</th>
                      <th className="py-3 px-4">Start Date</th>
                      <th className="py-3 px-4">Expiry Date</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredMembers.map((member, index) => (
                      <tr 
                        key={member.id}
                        onClick={() => handleSelectMember(member)}
                        className="hover:bg-cyan-950/20 transition-colors cursor-pointer group"
                      >
                        <td className="py-3.5 px-4 font-mono text-slate-500 font-bold">{index + 1}</td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                            <div>
                              <p className="font-bold text-white group-hover:text-cyan-300 transition-colors">{member.name}</p>
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
                              : 'bg-slate-700/40 text-slate-300'
                          }`}>
                            {member.plan}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">{member.startDate}</td>
                        <td className="py-3.5 px-4">
                          <span className="text-slate-300">{member.expiryDate}</span>
                          <span className="text-[10px] text-slate-400 block font-mono">({member.daysLeft} days)</span>
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
                          <button className="px-3 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-xs font-semibold">
                            View Billing
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 3: SUPER ADMIN MEMBER DETAIL & PAYMENT HISTORY
           ======================================================== */}
        {currentView === 'member_detail' && (
          <div className="space-y-6">
            <button
              onClick={() => setCurrentView('members')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Members
            </button>

            {/* Member Profile Overview Card */}
            <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedMember.avatar} 
                  alt={selectedMember.name} 
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400" 
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-white">{selectedMember.name}</h2>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold">
                      {selectedMember.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5 font-mono">{selectedMember.phone} • {selectedMember.email}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{selectedMember.location}</p>
                </div>
              </div>
            </div>

            {/* Financial Details Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0B1217] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Current Plan</span>
                <p className="font-bold text-white mt-1 text-sm">{selectedMember.plan}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0B1217] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Start Date</span>
                <p className="font-bold text-white mt-1 text-sm">{selectedMember.startDate}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0B1217] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Expiry Date</span>
                <p className="font-bold text-cyan-300 mt-1 text-sm">{selectedMember.expiryDate} ({selectedMember.daysLeft}d left)</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0B1217] border border-emerald-500/20">
                <span className="text-[10px] text-emerald-400 uppercase font-semibold">Total Paid</span>
                <p className="font-black text-emerald-400 mt-1 text-sm">{selectedMember.paidAmount}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0B1217] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Amount Due</span>
                <p className="font-black text-white mt-1 text-sm">{selectedMember.dueAmount}</p>
              </div>
            </div>

            {/* Payment History Table */}
            <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-cyan-400" /> Payment History
                </h3>
                <span className="text-xs text-slate-400">All transactions verified via Kinetic POS</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-[10px] uppercase font-bold text-slate-400 border-b border-white/5">
                    <tr>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Plan</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {selectedMember.history.map((record) => (
                      <tr key={record.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-3 font-mono text-slate-300">{record.date}</td>
                        <td className="py-3 px-3 font-bold text-white">{record.amount}</td>
                        <td className="py-3 px-3 text-slate-300">{record.plan}</td>
                        <td className="py-3 px-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            record.status === 'Paid'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => onOpenReceipt(record, selectedMember.name, selectedMember.phone)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Receipt</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 4: SUPER ADMIN FINANCE & REVENUE
           ======================================================== */}
        {currentView === 'finance' && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-5">
              <h2 className="text-xl font-extrabold text-white">Gym Financial Overview</h2>
              <p className="text-xs text-slate-400 mt-1">
                Overview of gym revenue, membership collections, and payments. Simple, clean, and not accounting clutter.
              </p>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SUPER_ADMIN_METRICS.revenueCategories.map((cat) => (
                <div key={cat.name} className="p-4 rounded-2xl bg-[#0E151C] border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400">{cat.name}</span>
                  <h3 className="text-xl font-black text-white mt-1.5">{cat.amount}</h3>
                  <div className="w-full h-1.5 rounded-full bg-white/5 mt-3 overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">{cat.percentage}% of gym gross</span>
                </div>
              ))}
            </div>

            {/* Recent Payments Table */}
            <div className="p-5 rounded-2xl bg-[#0E151C] border border-white/10 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                All Recorded Payments (October 2026)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="text-[10px] uppercase font-bold text-slate-400 border-b border-white/5">
                    <tr>
                      <th className="py-2.5 px-3">Receipt #</th>
                      <th className="py-2.5 px-3">Member</th>
                      <th className="py-2.5 px-3">Plan</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Tax Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {SUPER_ADMIN_METRICS.recentPayments.map((p) => (
                      <tr key={p.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-3 font-mono text-cyan-400 font-bold">INV-2026-00{p.id}</td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <img src={p.avatar} alt={p.member} className="w-6 h-6 rounded-full object-cover" />
                            <span className="font-bold text-white">{p.member}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-slate-300">{p.plan}</td>
                        <td className="py-3 px-3 font-bold text-white">{p.amount}</td>
                        <td className="py-3 px-3 font-mono text-slate-400">{p.date}</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            p.status === 'Paid' 
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => onOpenReceipt({
                              id: `INV-2026-00${p.id}`,
                              date: p.date,
                              amount: p.amount,
                              plan: p.plan,
                              status: p.status,
                              method: 'UPI / Direct Bank'
                            }, p.member)}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors"
                          >
                            View Receipt
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
