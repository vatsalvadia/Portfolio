"use client";

import RevealSection from "@/components/RevealSection";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useAuditModal } from "@/context/AuditModalContext";

export default function CaseStudyCTA() {
  const { openModal } = useAuditModal();
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <RevealSection variant="fadeUp" className="bg-brand-card border border-[#0D9488]/30 rounded-2xl p-10 md:p-16 text-center shadow-[0_0_50px_rgba(13,148,136,0.1)] relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-6 relative z-10">
            Want This Built For <span className="text-brand-orange">Your Brokerage?</span>
          </h2>
          <p className="font-body text-brand-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
            Get a free diagnostic audit of your current lead system and discover exactly where your booked shipments are leaking.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            {/* Option 1: Primary */}
            <button onClick={openModal} className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange-hover text-brand-white font-body text-sm font-bold px-8 py-4 rounded transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2 group">
              Get My Free Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Option 2: Phone Call */}
            <a href="tel:+918200290416" className="w-full md:w-auto bg-[#0D9488]/10 hover:bg-[#0D9488]/20 border border-[#0D9488]/30 text-[#0D9488] font-body text-sm font-bold px-8 py-4 rounded transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> +91 8200290416
            </a>
            
            {/* Option 3: WhatsApp */}
            <a href="https://wa.me/918200290416" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-body text-sm font-bold px-8 py-4 rounded transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
