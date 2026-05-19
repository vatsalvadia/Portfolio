"use client";

import RevealSection from "./RevealSection";
import { LayoutTemplate, Target, Settings, LineChart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GrowthAssets() {
  const assets = [
    {
      icon: <LayoutTemplate className="w-6 h-6 text-brand-orange" />,
      title: "Conversion-First Website",
      desc: "Custom-built funnels designed to convert paid traffic into exclusive, high-intent auto shipping leads.",
      points: ["Route landing pages", "Instant quote forms", "FMCSA trust architecture"],
    },
    {
      icon: <Target className="w-6 h-6 text-brand-orange" />,
      title: "Google Ads & Campaigns",
      desc: "Hyper-targeted search campaigns prioritizing high-volume routes with strict negative keyword filtering.",
      points: ["Route + state campaigns", "Negative ad term filtering", "Carrier/broker segmentation"],
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-orange" />,
      title: "CRM & Lead Automation",
      desc: "Never let a lead go cold. Automated speed-to-lead workflows tailored for the auto transport industry.",
      points: ["Missed-call text back", "Instant quote SMS", "Lead scoring & routing"],
    },
    {
      icon: <LineChart className="w-6 h-6 text-brand-orange" />,
      title: "Tracking, Retargeting & CRO",
      desc: "Comprehensive lead tracking and conversion optimization designed to continuously drive down acquisition costs.",
      points: ["Call + form tracking", "Search/display retargeting", "A/B copy optimization"],
    },
  ];

  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border" id="services">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">One Niche. Four Growth Engines.</h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            Our proprietary performance stack designed specifically to scale auto transport brokerages.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset, i) => (
            <RevealSection key={i} variant="fadeUp" delay={0.1 * i} className="h-full">
              <AssetCard asset={asset} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssetCard({ asset }: { asset: { icon: React.ReactNode, title: string, desc: string, points: string[] } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-full rounded-xl bg-brand-card p-8 border border-brand-border overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Border Tracing Effect using Framer Motion */}
      <motion.div 
        className="absolute inset-0 border-2 border-brand-orange rounded-xl pointer-events-none z-10"
        initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          clipPath: isHovered 
            ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" 
            : "polygon(0 0, 0 0, 0 100%, 0% 100%)" 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      <div className="relative z-0">
        <div className="w-14 h-14 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6 border border-brand-orange/20">
          {asset.icon}
        </div>
        <h3 className="font-headline text-2xl text-brand-white mb-3">{asset.title}</h3>
        <p className="font-body text-brand-gray mb-6 h-20">{asset.desc}</p>
        <ul className="space-y-3">
          {asset.points.map((point: string, idx: number) => (
            <li key={idx} className="flex items-center gap-3 font-body text-sm text-brand-gray">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
