"use client";

import RevealSection from "@/components/RevealSection";
import { ShieldCheck, MapPinned, Database, Repeat, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export default function MarketDominance() {
  const assets = [
    { icon: <MapPinned />, title: "Exclusive Route Visibility" },
    { icon: <Database />, title: "First-Party CRM Data" },
    { icon: <Repeat />, title: "Automated Lead Recovery" },
    { icon: <BarChart />, title: "Route Profitability Intelligence" }
  ];

  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
            <span className="font-body text-sm font-bold text-[#0D9488] tracking-widest uppercase">The Paradigm Shift</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-6">
            From Lead Buyer to Market Owner
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            Instead of competing on shared lead pricing with 5 other brokers, this regional operator built an owned inbound infrastructure that gives them total route control.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Built Assets */}
          <RevealSection variant="slideRight" delay={0.2} className="order-2 lg:order-1">
            <div className="bg-brand-card/30 border border-brand-border p-8 rounded-xl">
              <h3 className="font-headline text-2xl text-brand-white mb-6">The Owned Infrastructure</h3>
              <div className="space-y-4">
                {assets.map((asset, i) => (
                  <div key={i} className="flex items-center gap-4 bg-brand-bg border border-brand-border/50 p-4 rounded-lg">
                    <div className="w-10 h-10 rounded bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488]">
                      {asset.icon}
                    </div>
                    <span className="font-body text-brand-white font-medium">{asset.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Right: Route Map Visual */}
          <RevealSection variant="slideLeft" delay={0.4} className="order-1 lg:order-2 h-[400px]">
            <div className="w-full h-full bg-brand-card border border-[#0D9488]/30 rounded-xl overflow-hidden relative shadow-[0_0_40px_rgba(13,148,136,0.1)] group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
              
              {/* USA Map abstraction using SVG paths */}
              <svg viewBox="0 0 800 500" className="w-full h-full opacity-20 absolute inset-0">
                <path d="M100,200 Q300,50 600,150 T750,400 Q400,450 150,400 Z" fill="none" stroke="#0D9488" strokeWidth="2" strokeDasharray="10 10" />
              </svg>
              
              {/* Nodes and expanding pulses */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Hub (e.g. Texas) */}
                <div className="absolute left-[30%] top-[60%]">
                  <div className="w-4 h-4 bg-brand-orange rounded-full relative z-10 shadow-[0_0_15px_#F97316]" />
                  <motion.div 
                    animate={{ scale: [1, 3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-4px] bg-brand-orange rounded-full"
                  />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-brand-orange uppercase tracking-widest whitespace-nowrap bg-brand-bg/80 px-2 py-1 rounded">Hub: TX</div>
                </div>

                {/* Nodes (e.g. FL, NY, CA) */}
                {[
                  { left: "70%", top: "70%", label: "FL" },
                  { left: "80%", top: "30%", label: "NY" },
                  { left: "15%", top: "40%", label: "CA" }
                ].map((node, i) => (
                  <div key={i} className="absolute" style={{ left: node.left, top: node.top }}>
                    <div className="w-3 h-3 bg-[#0D9488] rounded-full relative z-10 shadow-[0_0_15px_#0D9488]" />
                    <motion.div 
                      animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-2px] bg-[#0D9488] rounded-full"
                    />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#0D9488] uppercase tracking-widest bg-brand-bg/80 px-2 py-1 rounded">{node.label}</div>
                  </div>
                ))}
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  <motion.line x1="30%" y1="60%" x2="70%" y2="70%" stroke="#0D9488" strokeWidth="1" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1 }} />
                  <motion.line x1="30%" y1="60%" x2="80%" y2="30%" stroke="#0D9488" strokeWidth="1" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.5 }} />
                  <motion.line x1="30%" y1="60%" x2="15%" y2="40%" stroke="#0D9488" strokeWidth="1" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2 }} />
                </svg>
              </div>

              <div className="absolute bottom-6 right-6 font-headline text-xl text-[#0D9488]/50 uppercase tracking-widest">
                Route Dominance Map
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
