"use client";

import RevealSection from "./RevealSection";
import Counter from "./Counter";
import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border" id="case-study">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealSection variant="scaleUp">
          <div className="bg-brand-card rounded-2xl overflow-hidden shadow-2xl border border-brand-border flex flex-col md:flex-row relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="p-10 md:p-16 flex-1 text-brand-white relative z-10">
              <div className="font-body text-xs font-bold text-brand-orange mb-4 uppercase tracking-widest">
                Case Study: Regional Broker — Southeast U.S.
              </div>
              <h2 className="font-headline text-4xl md:text-5xl mb-6 leading-tight">
                From Shared Leads to Owned Growth
              </h2>
              <p className="text-brand-gray font-body text-lg mb-12 max-w-2xl">
                By transitioning from purchased lists to a custom route-based funnel and automated CRM, this regional brokerage completely transformed their unit economics within 90 days.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-headline font-extrabold text-[#0D9488] mb-2 tracking-tight flex items-baseline">
                    <span className="text-2xl mr-1">↓</span>
                    <Counter from={0} to={24} suffix="%" />
                  </div>
                  <div className="font-body text-sm font-semibold text-brand-gray uppercase tracking-wider">Cost Per Lead</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-headline font-extrabold text-[#0D9488] mb-2 tracking-tight flex items-baseline">
                    <span className="text-2xl mr-1">↑</span>
                    <Counter from={0} to={3.5} decimals={1} suffix="x" />
                  </div>
                  <div className="font-body text-sm font-semibold text-brand-gray uppercase tracking-wider">Lead-to-Booking Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-headline font-extrabold text-[#0D9488] mb-2 tracking-tight flex items-baseline">
                    <span className="text-2xl mr-1">↑</span>
                    <Counter from={0} to={41} suffix="%" />
                  </div>
                  <div className="font-body text-sm font-semibold text-brand-gray uppercase tracking-wider">Quote Form Completion</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-headline font-extrabold text-[#0D9488] mb-2 tracking-tight flex items-baseline">
                    <span className="text-2xl mr-1">↑</span>
                    <Counter from={0} to={98} suffix="%" />
                  </div>
                  <div className="font-body text-sm font-semibold text-brand-gray uppercase tracking-wider">Missed Leads Recovered</div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
