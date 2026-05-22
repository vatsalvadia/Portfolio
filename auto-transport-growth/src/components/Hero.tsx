"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Route, Zap, Truck, Shield, MapPin, Timer, Building2 } from "lucide-react";
import Link from "next/link";
import { useAuditModal } from "@/context/AuditModalContext";

export default function Hero() {
  const { openModal } = useAuditModal();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.5, // Match accelerated loader timeline
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 overflow-hidden">
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex-1 flex items-center max-w-[1280px] mx-auto px-6 w-full relative z-10 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="inline-block border border-brand-border bg-brand-card/50 text-brand-gray font-body text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max mb-8">
              For Auto Transport Companies Only
            </div>
            
            {/* LCP CRITICAL PATH: Headline renders statically and instantly to maximize perceived speed and Lighthouse audit success */}
            <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] mb-6 text-brand-white">
              Stop Renting Shared Leads.<br />
              <span className="text-brand-orange">Build a Performance Marketing System That Books More Shipments.</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-brand-gray mb-10 max-w-lg">
              Lower cost per lead, improve quote-to-booking rates, and scale profitable auto transport campaigns with landing pages, paid ads, CRM automation, and conversion tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openModal} className="bg-brand-orange hover:bg-brand-orange-hover text-brand-white font-body text-sm font-bold px-8 py-4 rounded transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center justify-center gap-2 group">
                Audit My Auto Transport Lead System
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/case-study" className="border border-brand-border bg-brand-card/50 hover:bg-brand-border text-brand-white font-body text-sm font-bold px-8 py-4 rounded transition-colors flex items-center justify-center gap-2 group">
                <Play className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                View Case Study
              </Link>
            </div>
          </div>

          {/* Right Dashboard UI */}
          <motion.div variants={itemVariants} className="hidden lg:block relative transform-gpu will-change-transform">
            <div className="bg-brand-card border border-brand-border rounded-xl shadow-2xl p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6 border-b border-brand-border pb-4">
                <div className="text-brand-white font-body text-sm font-bold uppercase tracking-wider">Pipeline Velocity</div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Landing Page", color: "bg-brand-orange/10", border: "border-brand-orange/20", text: "text-brand-gray" },
                  { label: "Google Ads", color: "bg-brand-orange/20", border: "border-brand-orange/30", text: "text-brand-white" },
                  { label: "Meta Retargeting", color: "bg-brand-orange/40", border: "border-brand-orange/50", text: "text-brand-white" },
                  { label: "CRM Automation", color: "bg-brand-orange/60", border: "border-brand-orange/70", text: "text-brand-white" },
                  { label: "Call Tracking", color: "bg-brand-orange/80", border: "border-brand-orange/90", text: "text-brand-white" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ width: "20%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.6 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4 transform-gpu will-change-[width]"
                  >
                    <div className="w-6 text-center text-brand-gray font-body font-bold text-sm">{i + 1}</div>
                    <div className={`flex-1 ${item.color} border ${item.border} p-3 rounded font-body text-sm font-medium ${item.text}`}>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
                
                {/* Final Goal */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.4 }}
                  className="flex items-center gap-4 pt-2 transform-gpu"
                >
                  <div className="w-6 text-center text-brand-orange font-body font-extrabold text-sm">6</div>
                  <div className="flex-1 bg-brand-orange border border-brand-orange p-3 rounded font-body text-sm font-bold text-[#0A0F1E] flex justify-between items-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    <span>Owned Pipeline System™</span>
                    <Zap className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating Elements for Parallax */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-12 bg-[#0D9488]/20 border border-[#0D9488]/40 backdrop-blur-md p-4 rounded-lg flex items-center gap-3 shadow-xl transform-gpu"
            >
              <ShieldCheck className="w-6 h-6 text-[#0D9488]" />
              <div className="flex flex-col">
                <span className="font-body text-xs text-brand-white font-bold">Exclusive</span>
                <span className="font-body text-[10px] text-brand-gray uppercase">Zero Sharing</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Truck Animation for Desktop (>=900px) */}
        <div className="hidden min-[900px]:block absolute bottom-0 left-6 right-6 h-48 z-0 pointer-events-none">
          {/* Thin orange route line */}
          <div className="absolute bottom-[24px] left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
          
          {/* Animated Carrier Container */}
          <motion.div
            initial={{ left: "100%" }}
            animate={{ left: "45%" }} // Stop perfectly in the gap between columns
            transition={{ 
              delay: 1.8, 
              duration: 4.2, 
              ease: "easeOut" 
            }}
            className="absolute bottom-0 flex flex-col items-center w-[280px] select-none"
          >
            {/* Glassmorphic Notification Card (fades/pops in after truck stops) */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 6.2, duration: 0.5, ease: "easeOut" }}
              className="mb-3 bg-brand-card/90 backdrop-blur-md border border-brand-orange/20 p-3 rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.12)] w-[230px] text-left pointer-events-auto"
            >
              {/* Pulsing Status dot & header */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-mono text-brand-orange uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-brand-orange animate-ping" />
                  New Shipment Lead
                </span>
                <span className="text-[8px] font-mono text-brand-gray font-bold">12s ago</span>
              </div>
              <div className="font-headline text-sm text-brand-white mb-1">Dallas, TX → Miami, FL</div>
              <div className="text-[11px] font-body text-brand-gray flex justify-between items-center">
                <span>2021 Toyota Camry</span>
                <span className="text-[8px] font-mono bg-brand-orange/10 text-brand-orange px-1.5 py-0.5 rounded font-bold uppercase">Dispatched</span>
              </div>
            </motion.div>

            {/* Truck Body Wrapper */}
            <div className="relative">
              {/* Subtle orange neon glow under the carrier wheels */}
              <div className="absolute -bottom-1 left-5 right-5 h-1.5 bg-brand-orange/30 rounded-full blur-md" />
              
              {/* Clean vector-detailed inline SVG of modern aerodynamic car carrier truck */}
              <svg 
                width="220" 
                height="72" 
                viewBox="0 0 260 85" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main Structural Frame */}
                <rect x="74" y="55" width="155" height="6" rx="2" fill="#475569" />
                <rect x="22" y="55" width="52" height="6" rx="2" fill="#334155" />
                
                {/* Vertical Support Trusses */}
                <path d="M 74 55 L 78 22 L 84 22 L 80 55 Z" fill="#64748B" />
                <path d="M 128 55 L 140 22 L 146 22 L 134 55 Z" fill="#475569" />
                <path d="M 182 55 L 194 22 L 200 22 L 188 55 Z" fill="#64748B" />
                <path d="M 218 55 L 218 22 L 224 22 L 224 55 Z" fill="#334155" />
                
                {/* Upper Deck Platform */}
                <rect x="76" y="18" width="148" height="4" rx="1" fill="#475569" />
                
                {/* Aerodynamic Cab Body */}
                <rect x="18" y="26" width="52" height="29" fill="#FFFFFF" />
                <path d="M 18 26 Q 48 22 66 32 L 70 55 L 18 55 Z" fill="#FFFFFF" />
                
                {/* Glass Windshield & Side Windows */}
                <path d="M 55 30 Q 64 32 67 41 L 55 41 Z" fill="#0A0F1E" />
                <rect x="38" y="31" width="13" height="10" rx="1" fill="#0A0F1E" />
                <rect x="23" y="31" width="11" height="10" rx="1" fill="#0A0F1E" />
                
                {/* Cab Styling Details */}
                <rect x="44" y="47" width="22" height="2.5" rx="0.5" fill="#F97316" /> {/* Orange decal line */}
                <rect x="66" y="49" width="4" height="2" fill="#F97316" /> {/* Amber marker light */}
                <circle cx="15" cy="49" r="1.5" fill="#F97316" />
                
                {/* Exhaust Stack */}
                <rect x="13" y="12" width="3" height="26" fill="#94A3B8" />
                <path d="M 13 12 Q 15 8 18 12 Z" fill="#94A3B8" />
                
                {/* Top Deck Car (Minimalist White Sedan) */}
                <g transform="translate(90, 4)">
                  <path d="M 5 12 C 10 12 15 4 25 4 L 45 4 C 55 4 60 12 65 12 L 68 14 C 68 15 65 15 5 15 Z" fill="#FFFFFF" />
                  <path d="M 18 11 L 24 5 L 35 5 L 42 11 Z" fill="#0A0F1E" />
                  <circle cx="15" cy="14" r="3.5" fill="#1E293B" />
                  <circle cx="15" cy="14" r="1.5" fill="#94A3B8" />
                  <circle cx="53" cy="14" r="3.5" fill="#1E293B" />
                  <circle cx="53" cy="14" r="1.5" fill="#94A3B8" />
                </g>
                
                {/* Bottom Deck Car (Minimalist White Sedan) */}
                <g transform="translate(140, 39)">
                  <path d="M 5 12 C 10 12 15 4 25 4 L 45 4 C 55 4 60 12 65 12 L 68 14 C 68 15 65 15 5 15 Z" fill="#FFFFFF" />
                  <path d="M 18 11 L 24 5 L 35 5 L 42 11 Z" fill="#0A0F1E" />
                  <circle cx="15" cy="14" r="3.5" fill="#1E293B" />
                  <circle cx="15" cy="14" r="1.5" fill="#94A3B8" />
                  <circle cx="53" cy="14" r="3.5" fill="#1E293B" />
                  <circle cx="53" cy="14" r="1.5" fill="#94A3B8" />
                </g>

                {/* Carrier Wheels */}
                <circle cx="28" cy="58" r="7.5" fill="#0A0F1E" />
                <circle cx="28" cy="58" r="3.5" fill="#94A3B8" />
                <circle cx="28" cy="58" r="1" fill="#FFFFFF" />

                <circle cx="60" cy="58" r="7.5" fill="#0A0F1E" />
                <circle cx="60" cy="58" r="3.5" fill="#94A3B8" />
                <circle cx="60" cy="58" r="1" fill="#FFFFFF" />

                <circle cx="114" cy="58" r="7.5" fill="#0A0F1E" />
                <circle cx="114" cy="58" r="3.5" fill="#94A3B8" />
                <circle cx="114" cy="58" r="1" fill="#FFFFFF" />

                <circle cx="130" cy="58" r="7.5" fill="#0A0F1E" />
                <circle cx="130" cy="58" r="3.5" fill="#94A3B8" />
                <circle cx="130" cy="58" r="1" fill="#FFFFFF" />

                <circle cx="188" cy="58" r="7.5" fill="#0A0F1E" />
                <circle cx="188" cy="58" r="3.5" fill="#94A3B8" />
                <circle cx="188" cy="58" r="1" fill="#FFFFFF" />

                <circle cx="204" cy="58" r="7.5" fill="#0A0F1E" />
                <circle cx="204" cy="58" r="3.5" fill="#94A3B8" />
                <circle cx="204" cy="58" r="1" fill="#FFFFFF" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative w-full bg-[#070b15]/90 backdrop-blur-xl border-t border-brand-border/80 py-6 z-20">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-brand-orange/10 rounded-lg border border-brand-orange/20 text-brand-orange shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-body text-sm font-extrabold text-brand-white">100% Owned Leads</div>
              <div className="font-body text-[11px] text-brand-gray tracking-wide mt-0.5">Zero sharing or reselling</div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="flex items-center gap-4 lg:pl-8 lg:border-l lg:border-brand-border/40">
            <div className="p-2.5 bg-[#0D9488]/10 rounded-lg border border-[#0D9488]/20 text-[#0D9488] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-body text-sm font-extrabold text-brand-white">Route Precision</div>
              <div className="font-body text-[11px] text-brand-gray tracking-wide mt-0.5">High-volume lane targeting</div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 lg:pl-8 lg:border-l lg:border-brand-border/40">
            <div className="p-2.5 bg-brand-orange/10 rounded-lg border border-brand-orange/20 text-brand-orange shrink-0">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-body text-sm font-extrabold text-brand-white">Speed-to-Lead Flow</div>
              <div className="font-body text-[11px] text-brand-gray tracking-wide mt-0.5">Instant quotes in under 90s</div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 lg:pl-8 lg:border-l lg:border-brand-border/40">
            <div className="p-2.5 bg-[#0D9488]/10 rounded-lg border border-[#0D9488]/20 text-[#0D9488] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-body text-sm font-extrabold text-brand-white">Operator Engineered</div>
              <div className="font-body text-[11px] text-brand-gray tracking-wide mt-0.5">Built for auto logistics margins</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
