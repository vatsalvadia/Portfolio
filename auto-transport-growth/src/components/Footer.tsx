"use client";

import RevealSection from "./RevealSection";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useAuditModal } from "@/context/AuditModalContext";

export default function Footer() {
  const { openModal } = useAuditModal();
  return (
    <>
      {/* Final CTA Section */}
      <section className="bg-brand-card py-24 border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <RevealSection variant="scaleUp">
            <h2 className="font-headline text-4xl md:text-6xl text-brand-white mb-6">
              Your Competitors Rent Leads.<br />
              <span className="text-brand-orange">You Should Own Your Market.</span>
            </h2>
            <p className="font-body text-brand-gray text-lg mb-10 max-w-2xl mx-auto">
              Get in touch with our team today to map out a custom growth strategy for your auto transport business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button onClick={openModal} className="bg-brand-orange hover:bg-brand-orange-hover text-brand-white font-body text-sm font-bold px-8 py-4 rounded transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center gap-2 group w-full sm:w-auto justify-center">
                Audit My Auto Transport Lead System
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+918200290416" className="bg-[#1e293b] hover:bg-brand-border text-brand-white font-body text-sm font-bold px-8 py-4 rounded transition-colors flex items-center gap-2 hidden md:flex">
                <Phone className="w-4 h-4" />
                Call Now: +91 8200290416
              </a>
              <a href="mailto:work@vatsalvadia.com" className="text-brand-gray hover:text-brand-white font-body text-sm font-bold px-8 py-4 rounded transition-colors flex items-center gap-2 hidden md:flex border border-transparent hover:border-brand-border">
                <Mail className="w-4 h-4" />
                work@vatsalvadia.com
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-brand-bg text-brand-gray border-t border-brand-border pt-16 pb-24 md:pb-8">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="max-w-sm">
              <div className="font-headline text-2xl font-extrabold tracking-tighter flex items-center mb-4 text-brand-white">
                VV <span className="text-brand-orange ml-1">↗</span>
              </div>
              <p className="font-body text-sm leading-relaxed mb-6">
                Vatsal Vadia Growth Infrastructure. Building high-converting owned pipelines for the auto transport industry.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-12 sm:gap-24">
              <div className="flex flex-col gap-4">
                <span className="font-body text-xs font-bold text-brand-white uppercase tracking-widest">Company</span>
                <a href="#" className="font-body text-sm hover:text-brand-orange transition-colors">Services</a>
                <a href="#" className="font-body text-sm hover:text-brand-orange transition-colors">Case Study</a>
                <a href="#" className="font-body text-sm hover:text-brand-orange transition-colors">Audit</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-body text-xs font-bold text-brand-white uppercase tracking-widest">Legal</span>
                <a href="#" className="font-body text-sm hover:text-brand-white transition-colors">Privacy Policy</a>
                <a href="#" className="font-body text-sm hover:text-brand-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-brand-border pt-8 text-center text-xs font-body font-medium flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Vatsal Vadia | Auto Transport Growth Systems. All rights reserved.</p>
            <p className="text-brand-orange uppercase tracking-widest font-bold">Owned Pipeline System™</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-bg border-t border-brand-border p-4 flex gap-4 z-50 shadow-[0_-10px_20px_rgba(10,15,30,0.8)]">
        <button onClick={openModal} className="flex-1 bg-brand-orange text-brand-white font-body text-sm font-bold py-3.5 rounded shadow-[0_0_15px_rgba(249,115,22,0.3)]">
          Free Ads Audit
        </button>
        <a href="tel:+918200290416" className="flex-1 bg-[#1e293b] text-brand-white font-body text-sm font-bold py-3.5 rounded flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" /> Call
        </a>
      </div>
    </>
  );
}
