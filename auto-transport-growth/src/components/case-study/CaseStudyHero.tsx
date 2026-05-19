"use client";

import { motion } from "framer-motion";
import { Lock, Map, Clock, Target, TrendingUp, BarChart3 } from "lucide-react";

export default function CaseStudyHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-brand-bg">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Cinematic Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-8 bg-brand-card border border-brand-border px-4 py-2 rounded-full w-max shadow-lg">
              <Lock className="w-4 h-4 text-brand-orange" />
              <span className="font-body text-xs font-bold text-brand-gray tracking-widest uppercase">
                Confidential // Southeast Regional Broker
              </span>
            </div>

            <h1 className="font-headline text-5xl md:text-7xl leading-[1.05] mb-6 text-brand-white">
              Growth Forensic Breakdown:<br/>
              <span className="text-[#0D9488]">From Shared Leads to Owned Pipeline</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-brand-gray mb-10 max-w-lg leading-relaxed">
              How a regional auto transport broker cut CPL by 24%, increased quote-to-booking by 3.5X, and recovered 98% of missed opportunities in just 90 days.
            </p>

            {/* Micro Trust Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Broker Type", value: "Regional Operator", icon: <Target className="w-4 h-4 text-brand-orange" /> },
                { label: "Primary Route", value: "TX → FL", icon: <Map className="w-4 h-4 text-[#0D9488]" /> },
                { label: "Timeline", value: "90 Days", icon: <Clock className="w-4 h-4 text-brand-orange" /> },
                { label: "Market Type", value: "High Competition", icon: <TrendingUp className="w-4 h-4 text-[#0D9488]" /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col border border-brand-border/50 bg-brand-card/30 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <span className="font-body text-[10px] text-brand-gray uppercase tracking-widest font-bold">{stat.label}</span>
                  </div>
                  <span className="font-body text-sm text-brand-white font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Premium Mock Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-full min-h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-brand-card border border-brand-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Dashboard Header */}
              <div className="h-12 border-b border-brand-border flex items-center px-4 justify-between bg-[#0A0F1E]/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-border/50" />
                  <div className="w-3 h-3 rounded-full bg-brand-border/50" />
                  <div className="w-3 h-3 rounded-full bg-brand-border/50" />
                </div>
                <div className="font-body text-xs text-brand-gray font-mono uppercase tracking-widest flex items-center gap-2">
                  <BarChart3 className="w-3 h-3" /> System_Intelligence_Panel
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="flex-1 p-6 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                
                {/* Simulated Route Map */}
                <div className="h-48 border border-[#0D9488]/30 rounded-lg bg-[#0D9488]/5 relative mb-6 overflow-hidden flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M10,90 Q40,10 90,50" stroke="#0D9488" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  </svg>
                  <div className="absolute left-[10%] bottom-[10%] w-3 h-3 bg-brand-orange rounded-full shadow-[0_0_10px_#F97316]" />
                  <div className="absolute right-[10%] top-[50%] w-3 h-3 bg-[#0D9488] rounded-full shadow-[0_0_10px_#0D9488]" />
                  <span className="font-headline text-xl text-[#0D9488]/50 uppercase tracking-widest relative z-10">
                    Route Dominance Map
                  </span>
                </div>

                {/* Simulated Performance Graph */}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <div className="font-body text-[10px] text-brand-gray uppercase tracking-widest mb-2">CPL Trajectory</div>
                    <div className="h-24 flex items-end gap-2 border-b border-l border-brand-border/50 p-2">
                      {[60, 75, 80, 50, 40, 25, 20].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                          className={`w-full rounded-t-sm ${i > 3 ? 'bg-[#0D9488]' : 'bg-brand-border'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-body text-[10px] text-brand-gray uppercase tracking-widest mb-2">Booking Volume</div>
                    <div className="h-24 flex items-end gap-2 border-b border-l border-brand-border/50 p-2">
                      {[20, 25, 22, 50, 70, 85, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                          className={`w-full rounded-t-sm ${i > 3 ? 'bg-brand-orange' : 'bg-brand-border'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-1/3 bg-brand-card border border-[#0D9488]/50 p-4 rounded-xl shadow-2xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#0D9488]/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#0D9488]" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl text-brand-white">3.5X</span>
                <span className="font-body text-[10px] text-brand-gray tracking-widest uppercase">Lead-to-Booking</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
