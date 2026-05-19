"use client";

import RevealSection from "@/components/RevealSection";
import { AlertOctagon, TrendingDown, Users, PhoneMissed, DollarSign, ArrowDownToLine } from "lucide-react";

export default function BrokenSystem() {
  const problems = [
    { icon: <Users />, title: "Recycled Leads", desc: "Fighting 5+ brokers for the exact same quote request." },
    { icon: <TrendingDown />, title: "CPL Inflation", desc: "Paying $25+ for low-intent traffic that rarely books." },
    { icon: <PhoneMissed />, title: "Missed Recovery", desc: "Zero automation for after-hours leads or abandoned quotes." },
    { icon: <ArrowDownToLine />, title: "Weak Follow-Up", desc: "Relying on manual calls in an industry built on speed-to-lead." }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-b border-brand-border">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <AlertOctagon className="w-5 h-5 text-red-500" />
            <span className="font-body text-sm font-bold text-red-500 tracking-widest uppercase">The Before State</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-6">
            The Shared Lead Trap
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto mb-8">
            Before we deployed the Owned Pipeline, this brokerage was burning ad spend on third-party aggregators and losing high-value routes to faster competitors.
          </p>
          
          {/* Revenue Leak Estimate */}
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-brand-card/50 border border-red-500/30 px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.05)]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <div className="font-body text-xs text-brand-gray uppercase tracking-widest font-bold mb-1">Estimated Revenue Lost Monthly</div>
                <div className="font-headline text-2xl md:text-3xl text-red-400">~$18K – $42K Leakage Potential</div>
              </div>
            </div>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Broken Funnel Visual */}
          <RevealSection variant="slideLeft" delay={0.2} className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              {/* Top Funnel */}
              <div className="w-full h-16 border-2 border-brand-gray/30 border-b-transparent rounded-t-full relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4 text-brand-gray/50 whitespace-nowrap font-mono text-xs">
                  <span>Shared Traffic</span>
                  <span>Old SEO</span>
                  <span>Cold Calls</span>
                </div>
              </div>
              
              {/* Funnel Body with leaks */}
              <div className="w-[80%] h-32 border-x-2 border-brand-gray/30 relative flex items-center justify-center bg-brand-card/20">
                {/* Leaks */}
                <div className="absolute -left-12 top-4 flex items-center gap-2 text-red-500 font-mono text-xs animate-pulse">
                  <ArrowDownToLine className="w-4 h-4 rotate-90" />
                  Dropoff
                </div>
                <div className="absolute -right-16 bottom-4 flex items-center gap-2 text-red-500 font-mono text-xs animate-pulse" style={{ animationDelay: '0.5s' }}>
                  Competitors
                  <ArrowDownToLine className="w-4 h-4 -rotate-90" />
                </div>
                
                <span className="font-headline text-2xl text-brand-gray/30 text-center">No Automation<br/>System</span>
              </div>
              
              {/* Funnel Bottom */}
              <div className="w-[40%] h-16 border-2 border-brand-gray/30 border-t-transparent rounded-b-full relative flex items-center justify-center bg-brand-card/20">
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-red-400 font-headline text-lg whitespace-nowrap">
                  Low Booking Volume
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Problem List */}
          <div className="flex flex-col gap-6">
            {problems.map((prob, i) => (
              <RevealSection key={i} variant="fadeUp" delay={0.3 + i * 0.1}>
                <div className="flex gap-4 items-start bg-brand-card/30 border border-brand-border p-6 rounded-xl hover:border-red-500/30 transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mt-1">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-brand-white mb-2">{prob.title}</h3>
                    <p className="font-body text-brand-gray text-sm leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
