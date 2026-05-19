"use client";

import RevealSection from "./RevealSection";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-24 bg-brand-card border-b border-brand-border relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg to-brand-card pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <RevealSection variant="scaleUp">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-brand-orange rounded-full blur-xl opacity-20" />
            <div className="w-full h-full rounded-full border-4 border-brand-border bg-brand-bg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                src="/images/founder-portrait.jpg" 
                alt="Vatsal Vadia - Auto Transport Growth Systems" 
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-brand-orange text-brand-bg w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-4 h-4 fill-current" />
            </div>
          </div>
        </RevealSection>

        <RevealSection variant="fadeUp" delay={0.2}>
          <p className="font-headline text-3xl md:text-4xl leading-tight text-brand-white mb-8">
            "Built specifically for auto transport operators. We don't just build websites; we build growth infrastructure that protects your margins."
          </p>
          <div className="font-headline text-2xl text-[#0D9488] mb-1">Vatsal Vadia</div>
          <div className="font-body text-sm text-brand-gray font-bold uppercase tracking-widest">
            Founder, Auto Transport Growth Systems
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
