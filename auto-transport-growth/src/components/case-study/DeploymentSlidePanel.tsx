"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Deployment } from "@/types/deployment";
import { X, ShieldAlert, ArrowRight, TrendingUp, CheckCircle, Phone, Fingerprint } from "lucide-react";
import { useAuditModal } from "@/context/AuditModalContext";

interface DeploymentSlidePanelProps {
  deployment: Deployment | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DeploymentSlidePanel({ deployment, isOpen, onClose }: DeploymentSlidePanelProps) {
  const [activeStep, setActiveStep] = useState("01");
  const { openModal } = useAuditModal();
  // Lock body scroll when panel is open and handle scroll spy
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setActiveStep("01"), 0); // Reset on open
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const sections = ["01", "02", "03", "04", "05"];
    let current = activeStep;
    
    for (const id of sections) {
      const el = document.getElementById(`section-${id}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        // If element is in upper part of screen
        if (rect.top <= 250) {
          current = id;
        }
      }
    }
    if (current !== activeStep) {
      setActiveStep(current);
    }
  };

  if (!deployment) return null;

  const progressSteps = [
    { id: "01", label: "Broken System" },
    { id: "02", label: "Leak Audit" },
    { id: "03", label: "Deployment" },
    { id: "04", label: "Metrics" },
    { id: "05", label: "Insight" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-brand-bg/80 backdrop-blur-sm"
          />

          {/* Slide Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[101] w-full md:w-[70%] lg:w-[60%] bg-brand-card border-l border-brand-border shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex overflow-hidden"
          >
            {/* Progress Sidebar (Desktop Only) */}
            <div className="hidden md:flex flex-col w-48 border-r border-brand-border/50 bg-brand-bg/50 p-6">
              <div className="font-headline text-2xl font-bold mb-12 flex items-center gap-1">
                VV <span className="text-brand-orange text-lg">↗</span>
              </div>
              <div className="space-y-8 flex-1">
                {progressSteps.map((step, i) => {
                  const isActive = step.id === activeStep || (activeStep === "05" && step.id === "05");
                  return (
                    <div key={i} className={`flex gap-4 group cursor-default transition-opacity ${isActive ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}>
                      <span className={`font-mono text-xs pt-1 transition-colors ${isActive ? 'text-brand-orange' : 'text-[#0D9488]'}`}>{step.id}</span>
                      <span className={`font-body text-sm font-medium transition-colors ${isActive ? 'text-brand-orange' : 'text-brand-white'}`}>{step.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main Content Area */}
            <div 
              className="flex-1 overflow-y-auto relative scroll-smooth pb-32" 
              data-lenis-prevent
              onScroll={handleScroll}
            >
              
              {/* Top Header/Close */}
              <div className="sticky top-0 z-20 bg-brand-card/90 backdrop-blur border-b border-brand-border px-6 md:px-12 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-[#0D9488]/10 border border-[#0D9488]/30 rounded text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                    {deployment.category} Deployment
                  </div>
                  <div className="hidden md:block font-mono text-xs text-brand-gray/50 uppercase">
                    ID: {deployment.id}
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-brand-bg rounded-full transition-colors group"
                >
                  <X className="w-6 h-6 text-brand-gray group-hover:text-brand-white" />
                </button>
              </div>

              <div className="px-6 md:px-12 pt-12 max-w-4xl mx-auto space-y-16">
                
                {/* Mini Hero */}
                <section>
                  <div className="font-mono text-sm text-brand-orange uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Fingerprint className="w-4 h-4" /> Confidential Case Record
                  </div>
                  <h1 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">
                    {deployment.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 font-mono text-sm">
                    <div className="flex items-center gap-2 text-brand-gray">
                      <span className="text-[#0D9488]">Route:</span> {deployment.route}
                    </div>
                    <div className="text-brand-border">|</div>
                    <div className="flex items-center gap-2 text-brand-gray">
                      <span className="text-[#0D9488]">Type:</span> {deployment.businessType}
                    </div>
                    <div className="text-brand-border">|</div>
                    <div className="flex items-center gap-2 text-brand-gray">
                      <span className="text-[#0D9488]">Timeline:</span> {deployment.timeline}
                    </div>
                  </div>
                </section>

                {/* 01 Broken System / 02 Leak Audit */}
                <section id="section-01" className="bg-red-950/10 border border-red-900/30 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
                  <div className="flex items-center gap-2 mb-6 text-red-400 font-bold uppercase tracking-widest text-xs">
                    <ShieldAlert className="w-4 h-4" /> 01 - The Primary Leak
                  </div>
                  <h3 id="section-02" className="font-headline text-2xl text-brand-white mb-6 pt-4">{deployment.primaryLeak}</h3>
                  <ul className="space-y-4">
                    {deployment.painPoints.map((pain, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-brand-gray">
                        <X className="w-5 h-5 text-red-500/70 shrink-0 mt-0.5" />
                        {pain}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 03 System Deployed */}
                <section id="section-03" className="bg-[#0D9488]/5 border border-[#0D9488]/20 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#0D9488]" />
                  <div className="flex items-center gap-2 mb-6 text-[#0D9488] font-bold uppercase tracking-widest text-xs">
                    <CheckCircle className="w-4 h-4" /> 02 - The Deployment
                  </div>
                  <h3 className="font-headline text-2xl text-brand-white mb-6">{deployment.deploymentType}</h3>
                  <ul className="space-y-4">
                    {deployment.systemBuilt.map((sys, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-brand-gray">
                        <ArrowRight className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                        {sys}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 04 Metrics */}
                <section id="section-04">
                  <div className="flex items-center gap-2 mb-6 text-brand-orange font-bold uppercase tracking-widest text-xs">
                    <TrendingUp className="w-4 h-4" /> 03 - 90-Day Metrics
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Primary KPI */}
                    <div className="bg-brand-bg border border-brand-border p-8 rounded-xl shadow-[0_0_30px_rgba(13,148,136,0.05)]">
                      <div className="font-mono text-xs text-brand-gray uppercase tracking-widest mb-4">
                        {deployment.kpiPrimary.label}
                      </div>
                      <div className="font-headline text-6xl text-[#0D9488] flex items-baseline">
                        <span className="text-3xl mr-2">{deployment.kpiPrimary.direction === 'up' ? '↑' : '↓'}</span>
                        {deployment.kpiPrimary.value}
                      </div>
                    </div>
                    {/* Secondary KPI */}
                    <div className="bg-brand-bg border border-brand-border p-8 rounded-xl">
                      <div className="font-mono text-xs text-brand-gray uppercase tracking-widest mb-4">
                        {deployment.kpiSecondary.label}
                      </div>
                      <div className="font-headline text-5xl text-brand-white flex items-baseline">
                        <span className="text-2xl mr-2 text-brand-orange">{deployment.kpiSecondary.direction === 'up' ? '↑' : '↓'}</span>
                        {deployment.kpiSecondary.value}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 05 Operator Insight */}
                <section id="section-05" className="bg-brand-bg border-l-4 border-brand-orange p-6 md:p-8 rounded-r-xl">
                  <h4 className="font-body text-sm font-bold text-brand-orange tracking-widest uppercase mb-4">Operator Insight</h4>
                  <p className="font-body text-lg text-brand-white leading-relaxed italic">
                    &ldquo;{deployment.operatorInsight}&rdquo;
                  </p>
                </section>

                {/* Bottom CTA */}
                <section className="border-t border-brand-border pt-12 pb-12">
                  <div className="text-center bg-brand-bg/50 border border-brand-border p-10 rounded-2xl">
                    <h3 className="font-headline text-3xl text-brand-white mb-4">Want This Built For Your Brokerage?</h3>
                    <p className="font-body text-brand-gray mb-8">Get a free diagnostic audit of your current lead system.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button onClick={openModal} className="bg-brand-orange hover:bg-brand-orange-hover text-brand-white font-body font-bold px-8 py-4 rounded transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                        Audit My System
                      </button>
                      <button className="bg-transparent border border-[#0D9488]/30 hover:bg-[#0D9488]/10 text-[#0D9488] font-body font-bold px-8 py-4 rounded transition-colors flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" /> Call A Growth Operator
                      </button>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
