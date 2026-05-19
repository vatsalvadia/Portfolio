"use client";

import RevealSection from "@/components/RevealSection";
import { Search, Map, MousePointerClick, Activity, Users, ShieldAlert, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DiagnosticAudit() {
  const leaks = [
    {
      id: "01",
      title: "Traffic Leak",
      icon: <MousePointerClick className="w-6 h-6 text-brand-orange" />,
      desc: "Google Ads budget wasted on generic 'car shipping' terms rather than high-margin route queries.",
      impact: "High"
    },
    {
      id: "02",
      title: "Lead Quality Leak",
      icon: <Users className="w-6 h-6 text-[#0D9488]" />,
      desc: "Buying shared leads from aggregators meant racing 5 other brokers to the bottom on price.",
      impact: "Critical"
    },
    {
      id: "03",
      title: "Conversion Leak",
      icon: <Activity className="w-6 h-6 text-brand-orange" />,
      desc: "Landing page quote forms were too long and lacked mobile optimization, causing a 65% drop-off.",
      impact: "Medium"
    },
    {
      id: "04",
      title: "Recovery Leak",
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
      desc: "After-hours quote requests received zero follow-up until 9 AM the next day. Leads went cold.",
      impact: "Critical"
    },
    {
      id: "05",
      title: "Route Opportunity Leak",
      icon: <Map className="w-6 h-6 text-[#0D9488]" />,
      desc: "No dedicated landing pages for their most profitable snowbird routes (NY → FL).",
      impact: "High"
    }
  ];

  return (
    <section className="py-24 bg-brand-card border-b border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealSection variant="fadeUp" className="mb-16">
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-start lg:items-end border-b border-brand-border/50 pb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4 bg-brand-bg px-3 py-1 rounded-full border border-brand-border shadow-sm">
                <Search className="w-4 h-4 text-[#0D9488]" />
                <span className="font-body text-xs font-bold text-brand-gray tracking-widest uppercase">Forensic Audit</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-6">
                What We Found
              </h2>
              <p className="font-body text-brand-gray text-lg">
                We identified 5 hidden acquisition leaks costing the brokerage booked shipments. 
                Instead of simply running ads, we broke down their existing infrastructure to pinpoint exactly where revenue was bleeding.
              </p>
            </div>

            {/* Leak Score Metric */}
            <div className="shrink-0 flex items-center gap-6 bg-brand-bg border border-brand-border p-6 rounded-xl shadow-lg">
              <div>
                <div className="font-body text-xs font-bold text-brand-gray uppercase tracking-widest mb-1">Funnel Efficiency Score</div>
                <div className="font-headline text-4xl text-red-400">41<span className="text-2xl text-brand-gray">/100</span></div>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-brand-gray/20 border-t-red-500 border-r-red-500 rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.2)]" />
            </div>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {leaks.map((leak, i) => (
            <RevealSection key={leak.id} variant="fadeUp" delay={0.1 * i} className="h-full">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-brand-bg/50 border border-brand-border p-8 rounded-xl h-full flex flex-col group relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(13,148,136,0.05)] hover:border-[#0D9488]/30"
              >
                <div className="absolute top-0 right-0 p-4 text-6xl font-headline text-brand-gray/5 font-bold pointer-events-none transition-transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2">
                  {leak.id}
                </div>
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-brand-card flex items-center justify-center border border-brand-border group-hover:border-[#0D9488]/30 transition-colors">
                    {leak.icon}
                  </div>
                  <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                    leak.impact === 'Critical' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 
                    leak.impact === 'High' ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' : 
                    'bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20'
                  }`}>
                    {leak.impact}
                  </div>
                </div>
                
                <h3 className="font-headline text-2xl text-brand-white mb-3 relative z-10 group-hover:text-[#0D9488] transition-colors">{leak.title}</h3>
                <p className="font-body text-brand-gray text-sm leading-relaxed relative z-10">{leak.desc}</p>
                
                <div className="mt-auto pt-6 flex items-center gap-2 text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-body text-sm font-bold">
                  View Fix <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* Operator Insight Trust Note */}
        <RevealSection variant="fadeUp" delay={0.4}>
          <div className="bg-brand-orange/5 border-l-4 border-brand-orange p-6 md:p-8 rounded-r-xl max-w-4xl mx-auto shadow-sm">
            <p className="font-headline text-xl md:text-2xl text-brand-white mb-2">
              <span className="text-brand-orange mr-2">Operator Insight:</span> 
              The biggest profit leak wasn’t traffic — it was recovery.
            </p>
            <p className="font-body text-brand-gray text-base leading-relaxed">
              Most transport marketing focuses purely on buying more leads. But when we audited their CRM, we found that 60% of after-hours leads booked with competitors before the dispatchers even logged in at 9 AM. Fixing speed-to-lead dropped their effective CPL overnight.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
