"use client";

import RevealSection from "./RevealSection";
import { TrendingDown, ClipboardCheck, PhoneCall, RefreshCw } from "lucide-react";

export default function PerformanceMarketing() {
  const cards = [
    {
      icon: <TrendingDown className="w-6 h-6 text-brand-orange" />,
      title: "Google Ads CPL Optimization",
      desc: "Bid strategies engineered for conversion. We actively filter out negative broker queries and double down on routes that yield high-paying, direct carrier bookings.",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-[#0D9488]" />,
      title: "Landing Page Conversion Testing",
      desc: "Constant A/B optimization of your headline copy, routing calculators, and form fields to lower cost-per-click wastage and capture high-intent inquiries.",
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-brand-orange" />,
      title: "Call Tracking + Form Attribution",
      desc: "Know exactly which route ad, search query, or custom page generated each booked shipment. Absolute transparency over your marketing spend and ROI.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#0D9488]" />,
      title: "Retargeting for Unconverted Visitors",
      desc: "Automatically re-engage users who started calculating a quote but didn't finish. Keep your brand top-of-mind across Google Search, Display, and Social.",
    },
  ];

  return (
    <section className="py-24 bg-brand-card border-b border-brand-border relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">
            Performance Marketing Built Around <span className="text-brand-orange">Booked Shipments</span>, Not Clicks
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            Stop paying agency retainers for meaningless impressions. We build data-driven systems designed purely to drive profitable volume.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <RevealSection key={i} variant="fadeUp" delay={0.1 * i}>
              <div className="bg-brand-bg/50 border border-brand-border rounded-xl p-8 hover:border-brand-orange/50 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-card flex items-center justify-center border border-brand-border mb-6 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/5 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="font-headline text-2xl text-brand-white mb-4 group-hover:text-brand-orange transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body text-brand-gray text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
