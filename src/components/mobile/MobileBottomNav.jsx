import React, { useState, useEffect } from 'react';
import { Home, Smartphone, Dumbbell, ShieldCheck } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME', icon: Home },
  { id: 'client', label: 'CLIENT', icon: Smartphone },
  { id: 'admin', label: 'ADMIN', icon: Dumbbell },
  { id: 'super-admin', label: 'SUPER ADMIN', icon: ShieldCheck },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 px-4 max-w-[420px] mx-auto pointer-events-none">
      <nav className="pointer-events-auto p-1.5 rounded-full liquid-glass flex items-center justify-between shadow-[0_10px_35px_rgba(0,0,0,0.9)] border border-cyan-400/30">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex-1 touch-target-44 py-2 px-1 rounded-full flex flex-col items-center justify-center gap-0.5 transition-all ${
                isActive
                  ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-105'
                  : 'text-slate-400 hover:text-white active:scale-95'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] font-extrabold tracking-wider leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
