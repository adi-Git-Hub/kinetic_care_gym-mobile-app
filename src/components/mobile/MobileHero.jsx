import React from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';

export default function MobileHero({ onExploreClick }) {
  return (
    <section 
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#030609]"
    >
      {/* Edge-to-edge Full Mobile Banner Asset */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center">
        <img 
          src="/hero-banner.png" 
          alt="Kinetic Care Gym — Train Better. Manage Smarter." 
          className="w-full h-auto min-h-[100svh] object-cover sm:object-contain object-center select-none pointer-events-none"
        />
        
        {/* Subtle Bottom Ambient Gradient for seamless section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#04070A] via-[#04070A]/60 to-transparent pointer-events-none" />

        {/* Minimal Tactile Floating CTA Bar at Bottom */}
        <div className="absolute bottom-4 left-0 right-0 px-5 z-20 flex flex-col items-center gap-2">
          <button
            onClick={onExploreClick}
            className="w-full touch-target-44 py-3 px-6 rounded-2xl font-extrabold text-xs skeuo-btn-cyan flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(0,229,255,0.4)]"
            aria-label="Explore The App"
          >
            <span>EXPLORE THE APP</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
