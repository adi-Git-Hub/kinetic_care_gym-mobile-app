import React from 'react';
import { X, Download, Printer, CheckCircle2, ShieldCheck, QrCode } from 'lucide-react';
import GymLogo from './GymLogo';
import { GYM_INFO } from '../../data/mockData';

export default function ReceiptModal({ isOpen, onClose, receiptData, memberName = "Rahul Sharma", memberPhone = "+91 98765 43210" }) {
  if (!isOpen || !receiptData) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert(`Downloading receipt #${receiptData.id || 'REC-101'} as PDF... (Simulated Demo Download)`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0C1217] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.2)] overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top decorative gradient bar */}
        <div className="h-2 w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GymLogo size="small" />
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> OFFICIAL RECEIPT
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Receipt Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Gym & Tax Header */}
          <div className="flex justify-between items-start text-xs border-b border-white/5 pb-4">
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">{GYM_INFO.name}</h4>
              <p className="text-slate-400 mt-0.5">{GYM_INFO.location}</p>
              <p className="text-slate-400">{GYM_INFO.phone}</p>
              <p className="text-slate-500 font-mono mt-1">GSTIN: {GYM_INFO.gstin}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">Receipt No:</p>
              <p className="font-mono font-bold text-cyan-400 text-sm">{receiptData.id || 'REC-2026-101'}</p>
              <p className="text-slate-400 mt-1">Date: {receiptData.date}</p>
              <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-semibold ${
                receiptData.status === 'Paid' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
              }`}>
                {receiptData.status}
              </span>
            </div>
          </div>

          {/* Member Information */}
          <div className="bg-[#10171D] p-3.5 rounded-xl border border-white/5">
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Billed To</p>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="font-semibold text-white text-sm">{memberName}</p>
                <p className="text-xs text-slate-400">{memberPhone}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-slate-400">Membership ID</p>
                <p className="font-mono text-xs text-slate-300">KC-M-101</p>
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-400 border-b border-white/10 pb-2">
              <span>Item / Description</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between text-sm py-1.5 text-slate-200">
              <div>
                <p className="font-medium">{receiptData.plan}</p>
                <p className="text-xs text-slate-400">Monthly Access + Personalized Trainer Guidance</p>
              </div>
              <p className="font-semibold">{receiptData.amount}</p>
            </div>
            <div className="flex justify-between text-xs py-1 text-slate-400 border-t border-white/5 pt-2">
              <span>GST (Included @ 18%)</span>
              <span>₹457.62</span>
            </div>
            <div className="flex justify-between text-base font-bold text-white border-t border-white/10 pt-3">
              <span>Total Paid</span>
              <span className="text-cyan-400">{receiptData.amount}</span>
            </div>
          </div>

          {/* Payment Method & Security Seal */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-teal-950/20 border border-teal-500/20">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <div>
                <p className="text-xs font-medium text-white">Payment Method: {receiptData.method || 'UPI / Instant Bank Transfer'}</p>
                <p className="text-[11px] text-teal-300/70">Verified & Authenticated by Kinetic Gym POS</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-slate-900 border border-white/10 rounded flex items-center justify-center text-slate-400">
              <QrCode className="w-7 h-7 text-cyan-400/80" />
            </div>
          </div>

          {/* Authorized Seal */}
          <div className="flex justify-between items-end pt-2 text-[11px] text-slate-500">
            <div>
              <p>This is a computer-generated digital receipt.</p>
              <p className="text-slate-600">No physical signature required.</p>
            </div>
            <div className="text-right">
              <div className="w-24 border-b border-slate-700 mb-1" />
              <p className="font-semibold text-slate-400">Authorized Signatory</p>
              <p className="text-[10px] text-cyan-400">Kinetic Care Gym Management</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-[#090D10] border-t border-white/10 flex items-center justify-end gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <Printer className="w-4 h-4" /> Print
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            <Download className="w-4 h-4" /> Download PDF Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
