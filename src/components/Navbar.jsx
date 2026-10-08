import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { id: 'vision', label: '01 Vision' },
  { id: 'client-app', label: '02 Client' },
  { id: 'workout-experience', label: '03 Workout' },
  { id: 'admin-trainer', label: '04 Admin' },
  { id: 'super-admin', label: '05 Super Admin' },
  { id: 'ecosystem', label: '06 Ecosystem' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('vision');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link detection
      const scrollPos = window.scrollY + 200;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06090C]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Kinetic Care Gym Brand Logo */}
        <div 
          onClick={() => scrollTo('vision')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="/kinetic_logo.png" 
            alt="Kinetic Care Gym" 
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]"
          />
          <div className="hidden sm:block border-l border-white/10 pl-3">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold block">
              PRODUCT DEMO
            </span>
            <span className="text-[11px] text-slate-300 font-medium">
              Digital Management System
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#0E161D]/80 border border-white/10 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 font-extrabold shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Explore CTA & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('client-app')}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-[#10242B] hover:bg-[#15343E] text-cyan-300 border border-cyan-500/40 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            <span>Explore Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080D11]/98 border-b border-cyan-500/30 px-6 py-6 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2.5 px-3 rounded-xl text-sm font-bold text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-cyan-400 text-xs">→</span>
              </button>
            ))}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => scrollTo('client-app')}
                className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 text-center"
              >
                Explore The System
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
