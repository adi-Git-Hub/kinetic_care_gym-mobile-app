import React, { useState } from 'react';
import MobileHero from './components/mobile/MobileHero';
import MobileClientCarousel from './components/mobile/MobileClientCarousel';
import MobileAdminSection from './components/mobile/MobileAdminSection';
import MobileSuperAdminSection from './components/mobile/MobileSuperAdminSection';
import MobileBottomNav from './components/mobile/MobileBottomNav';
import ImageLightbox from './components/ImageLightbox';
import ReceiptModal from './components/common/ReceiptModal';

export default function App() {
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({ src: '', title: '', subtitle: '' });

  // Receipt Modal State
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [receiptRecord, setReceiptRecord] = useState(null);
  const [receiptMember, setReceiptMember] = useState({ name: 'Rahul Sharma', phone: '+91 98765 43210' });

  // Open Image Lightbox
  const handleOpenLightbox = (src, title, subtitle) => {
    setLightboxData({ src, title, subtitle });
    setLightboxOpen(true);
  };

  // Open Receipt Modal
  const handleOpenReceipt = (record, memberName = 'Rahul Sharma', memberPhone = '+91 98765 43210') => {
    setReceiptRecord(record);
    setReceiptMember({ name: memberName, phone: memberPhone });
    setReceiptOpen(true);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020406] text-slate-100 flex justify-center font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Mobile Shell Container (Centered on larger displays, 100% native on mobile) */}
      <div className="w-full max-w-[420px] min-h-screen bg-[#04070A] border-x border-white/5 relative flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.95)]">
        
        {/* ========================================================
            EXACTLY 4 VERTICAL SECTIONS
           ======================================================== */}
        <main className="flex-1 pb-24">
          {/* SECTION 01 — HERO */}
          <MobileHero onExploreClick={() => scrollTo('client')} />

          {/* SECTION 02 — CLIENT APP (Horizontal Swipe Carousel, 1 Image at a Time) */}
          <MobileClientCarousel onOpenLightbox={handleOpenLightbox} />

          {/* SECTION 03 — ADMIN / TRAINER */}
          <MobileAdminSection onOpenLightbox={handleOpenLightbox} />

          {/* SECTION 04 — SUPER ADMIN */}
          <MobileSuperAdminSection 
            onOpenLightbox={handleOpenLightbox}
            onOpenReceipt={handleOpenReceipt}
          />
        </main>

        {/* Minimal Mobile App Footer */}
        <footer className="px-5 py-6 border-t border-white/5 bg-[#030508] text-center text-[10px] text-slate-500 space-y-2 mb-16">
          <div className="flex items-center justify-center gap-2">
            <img src="/kinetic_icon.png" alt="Crest" className="h-5 w-auto" />
            <span className="font-bold text-white tracking-widest uppercase">KINETIC CARE GYM</span>
          </div>
          <p>Static Mobile Product Demo • Digital Gym Management System</p>
        </footer>

        {/* Floating Liquid Glass Bottom Navigation */}
        <MobileBottomNav />

      </div>

      {/* Lightbox Modal for Full Resolution UI Zoom */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxData.src}
        title={lightboxData.title}
        subtitle={lightboxData.subtitle}
      />

      {/* Official Tax Invoice / Payment Receipt Modal */}
      <ReceiptModal
        isOpen={receiptOpen}
        onClose={() => setReceiptOpen(false)}
        receiptData={receiptRecord}
        memberName={receiptMember.name}
        memberPhone={receiptMember.phone}
      />

    </div>
  );
}
