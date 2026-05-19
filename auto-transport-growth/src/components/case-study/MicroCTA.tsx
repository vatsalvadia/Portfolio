"use client";

import RevealSection from "@/components/RevealSection";
import { ArrowRight } from "lucide-react";
import { useAuditModal } from "@/context/AuditModalContext";

interface MicroCTAProps {
  title: string;
  buttonText?: string;
  href?: string;
}

export default function MicroCTA({ 
  title, 
  buttonText = "Audit My System", 
  href = "#" 
}: MicroCTAProps) {
  const { openModal } = useAuditModal();
  return (
    <section className="py-12 bg-brand-bg border-b border-brand-border">
      <RevealSection variant="fadeUp" className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-brand-card/30 border border-brand-border/50 rounded-2xl p-8 shadow-2xl">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-white text-center md:text-left">
          {title}
        </h3>
        <button onClick={openModal} className="shrink-0 bg-brand-orange hover:bg-brand-orange-hover text-brand-white font-body text-sm font-bold px-8 py-4 rounded transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] flex items-center gap-2 group">
          {buttonText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </RevealSection>
    </section>
  );
}
