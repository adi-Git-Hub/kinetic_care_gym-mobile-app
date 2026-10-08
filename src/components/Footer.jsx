import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04070A] py-10 px-4 sm:px-6 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img src="/kinetic_logo.png" alt="Kinetic Care Gym" className="h-9 w-auto object-contain" />
          <div className="border-l border-white/10 pl-3">
            <p className="font-bold text-white">KINETIC CARE GYM</p>
            <p className="text-[11px] text-slate-500">Digital Gym Management System • Product Demo</p>
          </div>
        </div>

        {/* System summary */}
        <div className="text-center md:text-right text-[11px] text-slate-500 space-y-1">
          <p>© 2026 Kinetic Care Gym. All rights reserved.</p>
          <p className="text-cyan-400/80">Static Visual Demo • Source Assets: User-iamge/ • admin.png • Super_admin.png</p>
        </div>

      </div>
    </footer>
  );
}
