"use client";

import RevealSection from "@/components/RevealSection";
import { LayoutTemplate, Target, Settings, Map, ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PipelineDeployment() {
  const steps = [
    {
      week: "Week 1–2",
      title: "Conversion-First Landing Pages",
      icon: <LayoutTemplate className="w-5 h-5 text-brand-white" />,
      desc: "Replaced the generic homepage with ultra-fast, route-specific landing pages designed to capture high-intent shippers. Built a custom quoting calculator.",
      color: "bg-[#0D9488]"
    },
    {
      week: "Week 3",
      title: "Google Ads + Meta Retargeting",
      icon: <Target className="w-5 h-5 text-brand-white" />,
      desc: "Launched laser-focused Google Search campaigns targeting primary lanes (TX→FL). Deployed Meta pixel for retargeting unconverted visitors.",
      color: "bg-brand-orange"
    },
    {
      week: "Week 4",
      title: "CRM + Missed Call Automation",
      icon: <Settings className="w-5 h-5 text-brand-white" />,
      desc: "Integrated speed-to-lead CRM. Configured automated text-back for missed calls and a 5-day email/SMS nurturing sequence for cold quotes.",
      color: "bg-[#0D9488]"
    },
    {
      week: "Week 5+",
      title: "Route Expansion + CPL Optimization",
      icon: <Map className="w-5 h-5 text-brand-white" />,
      desc: "Used call tracking and form attribution data to kill unprofitable keywords. Scaled budget into top-performing snowbird routes.",
      color: "bg-brand-orange"
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-b border-brand-border">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0D9488]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <ArrowDownCircle className="w-5 h-5 text-[#0D9488]" />
            <span className="font-body text-sm font-bold text-[#0D9488] tracking-widest uppercase">The Solution</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-6">
            Owned Pipeline Deployment
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            Instead of applying bandaids to a broken system, we completely replaced their lead acquisition architecture over 30 days.
          </p>
        </RevealSection>

        {/* Timeline Blueprint */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-border" />
          
          <div className="space-y-12">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <RevealSection key={i} variant={isEven ? "slideRight" : "slideLeft"} delay={0.1 * i}>
                  <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 group`}>
                    
                    {/* Center Node */}
                    <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full border-4 border-brand-bg ${step.color} flex items-center justify-center z-10 shadow-[0_0_15px_rgba(13,148,136,0.3)] transition-transform duration-300 group-hover:scale-110`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="bg-brand-card/50 border border-brand-border p-6 rounded-xl hover:border-[#0D9488]/30 transition-colors shadow-lg relative overflow-hidden">
                        {/* Blueprint grid background */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-[0.03] pointer-events-none" />
                        
                        <span className="font-body text-xs font-bold text-brand-gray uppercase tracking-widest mb-2 block">{step.week}</span>
                        <h3 className="font-headline text-2xl text-brand-white mb-3">{step.title}</h3>
                        <p className="font-body text-brand-gray text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
