"use client";

import RevealSection from "./RevealSection";
import { X, CheckCircle2 } from "lucide-react";

export default function SharedVsOwned() {
  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">Stop Renting. Start Owning.</h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            Transition from a rented lead model to an asset-based growth system.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Renting (The Old Way) */}
          <RevealSection variant="slideLeft" delay={0.1} className="h-full">
            <div className="border border-brand-border rounded-xl overflow-hidden bg-brand-card/50 h-full flex flex-col">
              <div className="bg-brand-card p-6 border-b border-brand-border text-center">
                <h3 className="font-headline text-3xl text-brand-white">Shared Leads</h3>
                <p className="text-brand-gray font-body text-xs font-bold uppercase tracking-widest mt-2">The Old Way</p>
              </div>
              <div className="p-8 space-y-6 flex-1">
                {[
                  { title: "Low Margin", desc: "Competing solely on price against 5+ competitors." },
                  { title: "Zero Assets", desc: "When you stop paying, your pipeline instantly dries up." },
                  { title: "Brand Dilution", desc: "Customers buy from the cheapest quote, not your brand." },
                  { title: "Commodity Status", desc: "Your brand loses to the cheapest quote." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-body text-brand-white font-bold mb-1">{item.title}</div>
                      <div className="font-body text-brand-gray text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Owning (The AutoNav System) */}
          <RevealSection variant="slideRight" delay={0.2} className="h-full">
            <div className="border-2 border-brand-orange rounded-xl overflow-hidden bg-brand-card relative shadow-[0_0_40px_rgba(249,115,22,0.1)] h-full flex flex-col transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-brand-orange text-[#0A0F1E] font-body text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-lg tracking-widest">
                THE GOAL
              </div>
              <div className="bg-[#1e293b]/50 p-6 border-b border-brand-border text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-transparent pointer-events-none" />
                <h3 className="font-headline text-3xl text-brand-white relative z-10">Owned Pipeline</h3>
                <p className="text-brand-orange font-body text-xs font-bold uppercase tracking-widest mt-2 relative z-10">Owned Pipeline System™</p>
              </div>
              <div className="p-8 space-y-6 flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-50 pointer-events-none" />
                {[
                  { title: "High Margin Profits", desc: "Exclusive leads generated specifically for your brand with zero sharing." },
                  { title: "Asset Ownership", desc: "100% ownership of your Google Ads campaigns, landing pages, and retargeting audiences." },
                  { title: "Call & Form Tracking", desc: "Granular conversion tracking to measure cost-per-lead and booked shipment value." },
                  { title: "Weekly Optimization", desc: "Ongoing landing page conversion optimization, A/B testing, and automation tweaks." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 relative z-10">
                    <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-body text-brand-white font-bold mb-1">{item.title}</div>
                      <div className="font-body text-brand-gray text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
