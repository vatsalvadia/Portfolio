"use client";

import RevealSection from "@/components/RevealSection";
import Counter from "@/components/Counter";
import { TrendingUp, ArrowRight, ArrowDown } from "lucide-react";

export default function PerformanceShift() {
  return (
    <section className="py-24 bg-brand-card border-b border-brand-border relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-brand-orange" />
            <span className="font-body text-sm font-bold text-brand-orange tracking-widest uppercase">The Outcome</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-6">
            90-Day Performance Shift
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            By shifting from a shared lead dependency to an owned pipeline, we drove down acquisition costs while drastically improving booking rates.
          </p>
        </RevealSection>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <RevealSection variant="fadeUp" delay={0.1}>
            <div className="bg-brand-bg/50 border border-brand-border p-6 rounded-xl hover:border-brand-orange/30 transition-all h-full">
              <div className="font-body text-xs font-bold text-brand-gray uppercase tracking-widest mb-4">Cost Per Lead (CPL)</div>
              <div className="flex items-end gap-3 mb-2">
                <div className="text-4xl md:text-5xl font-headline font-extrabold text-[#0D9488] flex items-baseline tracking-tight">
                  <span className="text-2xl mr-1">↓</span>
                  <Counter from={0} to={24} suffix="%" />
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm text-brand-gray/80">
                <span className="line-through text-red-400/70">$25</span> <ArrowRight className="w-3 h-3" /> <span className="text-brand-white">$19</span>
              </div>
            </div>
          </RevealSection>

          <RevealSection variant="fadeUp" delay={0.2}>
            <div className="bg-brand-bg/50 border border-brand-border p-6 rounded-xl hover:border-brand-orange/30 transition-all h-full">
              <div className="font-body text-xs font-bold text-brand-gray uppercase tracking-widest mb-4">Lead-to-Booking</div>
              <div className="text-4xl md:text-5xl font-headline font-extrabold text-[#0D9488] flex items-baseline tracking-tight mb-2">
                <span className="text-2xl mr-1">↑</span>
                <Counter from={0} to={3.5} decimals={1} suffix="X" />
              </div>
              <div className="font-body text-sm text-brand-gray/80">Quality over quantity.</div>
            </div>
          </RevealSection>

          <RevealSection variant="fadeUp" delay={0.3}>
            <div className="bg-brand-bg/50 border border-brand-border p-6 rounded-xl hover:border-brand-orange/30 transition-all h-full">
              <div className="font-body text-xs font-bold text-brand-gray uppercase tracking-widest mb-4">Missed Recovery</div>
              <div className="text-4xl md:text-5xl font-headline font-extrabold text-brand-orange flex items-baseline tracking-tight mb-2">
                <span className="text-2xl mr-1">↑</span>
                <Counter from={0} to={98} suffix="%" />
              </div>
              <div className="font-body text-sm text-brand-gray/80">Automated after-hours text-back.</div>
            </div>
          </RevealSection>

          <RevealSection variant="fadeUp" delay={0.4}>
            <div className="bg-brand-bg/50 border border-brand-border p-6 rounded-xl hover:border-brand-orange/30 transition-all h-full">
              <div className="font-body text-xs font-bold text-brand-gray uppercase tracking-widest mb-4">Pipeline ROI</div>
              <div className="text-4xl md:text-5xl font-headline font-extrabold text-brand-orange flex items-baseline tracking-tight mb-2">
                <span className="text-2xl mr-1">↑</span>
                <Counter from={0} to={31} suffix="%" />
              </div>
              <div className="font-body text-sm text-brand-gray/80">Overall profit margin increase.</div>
            </div>
          </RevealSection>
        </div>

        {/* Interactive Before/After Visual */}
        <RevealSection variant="fadeUp" delay={0.5}>
          <div className="max-w-4xl mx-auto border border-brand-border rounded-xl overflow-hidden bg-brand-bg flex flex-col md:flex-row shadow-2xl relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-card border-4 border-brand-bg flex items-center justify-center z-10 hidden md:flex">
              <ArrowRight className="w-5 h-5 text-brand-gray" />
            </div>

            {/* Left: Old System */}
            <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-border/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-900/5 transition-colors group-hover:bg-red-900/10" />
              <div className="relative z-10 opacity-50">
                <h3 className="font-headline text-2xl text-brand-gray mb-6">Old System</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center text-red-400">
                    <span>Ad Spend</span> <span>Wasted ($25 CPL)</span>
                  </div>
                  <div className="h-px w-full bg-brand-border" />
                  <div className="flex justify-between items-center text-brand-gray">
                    <span>Lead Source</span> <span>Shared Aggregators</span>
                  </div>
                  <div className="h-px w-full bg-brand-border" />
                  <div className="flex justify-between items-center text-red-400">
                    <span>Follow-Up Speed</span> <span>Manual (Slow)</span>
                  </div>
                  <div className="h-px w-full bg-brand-border" />
                  <div className="flex justify-between items-center text-brand-gray">
                    <span>Data Tracking</span> <span>None</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Owned Pipeline */}
            <div className="flex-1 p-8 md:p-12 relative overflow-hidden group bg-[#0D9488]/5">
              <div className="absolute inset-0 bg-[#0D9488]/0 transition-colors group-hover:bg-[#0D9488]/10" />
              <div className="relative z-10">
                <h3 className="font-headline text-2xl text-[#0D9488] mb-6 flex items-center gap-2">
                  Owned Pipeline
                </h3>
                <div className="space-y-4 font-mono text-sm font-bold">
                  <div className="flex justify-between items-center text-brand-white">
                    <span>Ad Spend</span> <span className="text-[#0D9488]">Route-Optimized ($19 CPL)</span>
                  </div>
                  <div className="h-px w-full bg-[#0D9488]/20" />
                  <div className="flex justify-between items-center text-brand-white">
                    <span>Lead Source</span> <span className="text-[#0D9488]">Exclusive Traffic</span>
                  </div>
                  <div className="h-px w-full bg-[#0D9488]/20" />
                  <div className="flex justify-between items-center text-brand-white">
                    <span>Follow-Up Speed</span> <span className="text-[#0D9488]">Automated (Instant)</span>
                  </div>
                  <div className="h-px w-full bg-[#0D9488]/20" />
                  <div className="flex justify-between items-center text-brand-white">
                    <span>Data Tracking</span> <span className="text-[#0D9488]">Full Attribution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

      </div>
    </section>
  );
}
