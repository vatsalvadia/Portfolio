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
