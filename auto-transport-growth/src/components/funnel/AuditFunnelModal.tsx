"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuditModal } from "@/context/AuditModalContext";
import { X, CalendarCheck, Lock, Unlock, ArrowRight, ShieldAlert, CheckCircle2, TrendingUp, AlertTriangle, Activity, AlertCircle, RefreshCw, BarChart2 } from "lucide-react";

type FunnelStep = 1 | 2 | 3 | 4 | 5 | 6;

interface AuditFormData {
  name: string;
  company: string;
  website: string;
  businessType: string;
  painPoints: string[];
  currentStack: string[];
  websiteType: string;
  responseTime: string;
  goals: string[];
}

export default function AuditFunnelModal() {
  const { isOpen, closeModal } = useAuditModal();
  const [step, setStep] = useState<FunnelStep>(1);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  // Form State
  const [formData, setFormData] = useState<AuditFormData>({
    name: "",
    company: "",
    website: "",
    businessType: "Broker",
    painPoints: [],
    currentStack: [],
    websiteType: "Generic business website",
    responseTime: "5–15 minutes",
    goals: []
  });

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (step === 6) setStep(1); // Reset on reopening after completion
    } else {
      document.body.style.overflow = "unset";
      setShowExitIntent(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCloseAttempt = () => {
    if (step === 5) {
      setShowExitIntent(true);
    } else {
      closeModal();
    }
  };

  const forceClose = () => {
    setShowExitIntent(false);
    closeModal();
  };

  // Calculations for dynamic diagnostics
  const getLeakScore = () => {
    let score = 15; // base leak score
    score += formData.painPoints.length * 5;
    if (formData.responseTime === "15+ minutes" || formData.responseTime === "No structured process") score += 15;
    if (formData.responseTime === "5–15 minutes") score += 8;
    if (formData.websiteType === "No real funnel") score += 12;
    if (formData.websiteType === "Outdated") score += 8;
    if (formData.currentStack.includes("None properly")) score += 10;
    return Math.min(score, 98);
  };

  const getFunnelStatus = (score: number) => {
    if (score < 35) return { label: "MODERATE FRICTION", color: "text-teal-400 border-teal-500/30 bg-teal-500/5" };
    if (score < 65) return { label: "SYSTEM LEAK RISK", color: "text-brand-orange border-brand-orange/30 bg-brand-orange/5" };
    return { label: "CRITICAL PIPELINE DAMAGE", color: "text-red-400 border-red-500/30 bg-red-500/5 animate-pulse" };
  };

  const getDetectedIssues = () => {
    const issues: string[] = [];
    const pp = formData.painPoints;

    if (pp.includes("Overpaying for shared leads") || pp.includes("Low-quality leads") || pp.includes("Competing only on price")) {
      issues.push("Shared Lead Dependency");
    }
    if (pp.includes("Missed calls / slow response") || pp.includes("Losing leads after hours") || formData.responseTime === "15+ minutes" || formData.responseTime === "No structured process") {
      issues.push("Weak Recovery Automation");
    }
    if (pp.includes("No route-based visibility") || pp.includes("Poor Google Ads performance")) {
      issues.push("Route Visibility Limitations");
    }
    if (pp.includes("Weak website conversions") || pp.includes("No tracking infrastructure") || formData.websiteType === "No real funnel") {
      issues.push("Conversion Infrastructure Gaps");
    }

    // Default Fallbacks
    if (issues.length === 0) {
      return ["Shared Lead Dependency", "Weak Recovery Automation", "Route Visibility Limitations"];
    }
    return issues.slice(0, 3);
  };

  const togglePainPoint = (point: string) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter(p => p !== point)
        : [...prev.painPoints, point]
    }));
  };

  const toggleStack = (stack: string) => {
    setFormData(prev => ({
      ...prev,
      currentStack: prev.currentStack.includes(stack)
        ? prev.currentStack.filter(s => s !== stack)
        : [...prev.currentStack, stack]
    }));
  };

  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleNextStep = async () => {
    if (step === 3) {
      // Add a cool system scanner transition between step 3 and 4
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        setStep(4);
      }, 1500);
    } else if (step === 5) {
      // Submit to Web3Forms
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: "ee1364bd-5aeb-45de-9880-86170d99535f",
            subject: `New Gated CPL Audit Intake - ${formData.company}`,
            from_name: "Auto Transport Growth System",
            name: formData.name,
            company: formData.company,
            website: formData.website,
            business_type: formData.businessType,
            pain_points: formData.painPoints.join(", "),
            current_stack: formData.currentStack.join(", "),
            website_type: formData.websiteType,
            lead_response_speed: formData.responseTime,
            goals: formData.goals.join(", "),
            calculated_leak_rate: `${getLeakScore()}%`
          })
        });
      } catch (err) {
        console.error("Error submitting to Web3Forms:", err);
      }
      setStep(6);
    } else {
      setStep(prev => (prev + 1) as FunnelStep);
    }
  };

  const handlePrevStep = () => {
    setStep(prev => (prev - 1) as FunnelStep);
  };

  if (!isOpen) return null;

  const leakScore = getLeakScore();
  const funnelStatus = getFunnelStatus(leakScore);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center font-body">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-brand-bg/95 backdrop-blur-md"
          onClick={handleCloseAttempt}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-brand-card border border-brand-border shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row z-10 mx-4"
        >
          {/* Diagnostic Sidebar (Desktop) */}
          <div className="hidden md:flex flex-col w-72 bg-brand-bg/50 border-r border-brand-border p-8 justify-between">
            <div>
              <div className="font-headline text-2xl font-bold mb-8 flex items-center gap-1 text-brand-white">
                VV <span className="text-brand-orange text-lg">↗</span>
              </div>

              {/* Steps Indicator */}
              <div className="space-y-5 mb-8">
                {[
                  { id: 1, label: "Business Profile" },
                  { id: 2, label: "Growth Problems" },
                  { id: 3, label: "System Status" },
                  { id: 4, label: "Growth Goals" },
                  { id: 5, label: "Booking Gate" },
                  { id: 6, label: "Confirmation" }
                ].map((s) => (
                  <div key={s.id} className={`flex items-center gap-3 transition-all duration-300 ${step >= s.id ? 'opacity-100' : 'opacity-20'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-bold ${
                      step === s.id 
                        ? 'bg-brand-orange text-brand-white border-brand-orange shadow-[0_0_12px_rgba(249,115,22,0.4)]' 
                        : step > s.id 
                          ? 'bg-[#0D9488]/20 text-[#0D9488] border-[#0D9488]'
                          : 'bg-transparent border-brand-gray text-brand-gray'
                    }`}>
                      {step > s.id ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.id}
                    </div>
                    <span className={`text-xs font-semibold tracking-wide ${step === s.id ? 'text-brand-orange' : 'text-brand-white'}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic System Scanner Widget */}
            <div className="border border-brand-border bg-[#0A0F1E]/60 p-4 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-orange animate-pulse" /> Diagnostics
                </span>
                {isScanning ? (
                  <span className="text-[10px] font-mono text-[#0D9488] animate-spin"><RefreshCw className="w-3 h-3" /></span>
                ) : (
                  <span className="text-[10px] font-mono text-[#0D9488] flex items-center gap-1">ONLINE</span>
                )}
              </div>

              {/* Leak Score */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-brand-gray">FUNNEL LEAK RATE:</span>
                  <span className="text-brand-white font-bold">{leakScore}%</span>
                </div>
                <div className="w-full bg-brand-border h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-orange" 
                    animate={{ width: `${leakScore}%` }}
                    transition={{ type: "spring", stiffness: 60 }}
                  />
                </div>
              </div>

              {/* Status Pill */}
              <div className={`text-[10px] font-mono font-bold text-center py-1.5 border rounded ${funnelStatus.color}`}>
                {isScanning ? "SCANNING PIPELINE..." : funnelStatus.label}
              </div>

              {/* Active Route Scan pulse */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-brand-gray">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                <span>ROUTE RADAR: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto relative p-6 md:p-10 flex flex-col justify-between">
            <button 
              onClick={handleCloseAttempt}
              className="absolute top-4 right-4 p-2 text-brand-gray hover:text-brand-white bg-brand-bg hover:bg-brand-border rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Mobile Steps Tracker */}
            <div className="md:hidden flex gap-1 mb-6 mt-2">
              {[1, 2, 3, 4, 5, 6].map(s => (
                <div key={s} className={`h-1.5 flex-1 rounded-full ${step >= s ? 'bg-brand-orange' : 'bg-brand-border'}`} />
              ))}
            </div>

            {/* Steps Container */}
            <div className="flex-1 flex flex-col justify-center min-h-[400px]">
              
              <AnimatePresence mode="wait">

                {/* STEP 1: BUSINESS PROFILE */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-headline text-3xl text-brand-white mb-2 font-bold tracking-tight">
                        Let’s Map Your Current Lead Infrastructure
                      </h2>
                      <p className="text-brand-gray text-sm max-w-xl">
                        This audit is designed specifically for brokers, carriers, and dispatch teams looking to reduce CPL, improve quote flow, and build owned acquisition systems.
                      </p>
                    </div>

                    <div className="space-y-4 max-w-xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-brand-gray tracking-wider">Full Name</label>
                          <input 
                            required 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="John Doe"
                            className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange outline-none transition-colors" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-brand-gray tracking-wider">Company Name</label>
                          <input 
                            required 
                            type="text" 
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            placeholder="Elite Transport Broker"
                            className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange outline-none transition-colors" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-brand-gray tracking-wider">Website URL</label>
                        <input 
                          required 
                          type="url" 
                          value={formData.website}
                          onChange={(e) => setFormData({...formData, website: e.target.value})}
                          placeholder="https://elitetransport.com"
                          className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange outline-none transition-colors" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-brand-gray tracking-wider">Business Type</label>
                        <div className="grid grid-cols-3 gap-3">
                          {["Broker", "Carrier", "Dispatch Team"].map(type => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({...formData, businessType: type})}
                              className={`py-3 rounded-lg border text-sm font-semibold transition-colors ${
                                formData.businessType === type
                                  ? "bg-brand-orange/15 border-brand-orange text-brand-white"
                                  : "bg-brand-bg border-brand-border text-brand-gray hover:border-brand-gray/50"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: CURRENT GROWTH PROBLEMS */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-headline text-3xl text-brand-white mb-2 font-bold tracking-tight">
                        Where Is Your Growth System Breaking?
                      </h2>
                      <p className="text-brand-gray text-sm">
                        Most transport companies are leaking booked shipments in places they never track. Select all that apply:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin">
                      {[
                        "Overpaying for shared leads",
                        "High cost per lead (CPL)",
                        "Weak quote-to-booking rate",
                        "Missed calls / slow response",
                        "No CRM automation",
                        "Low-quality leads",
                        "Poor Google Ads performance",
                        "No route-based visibility",
                        "Weak website conversions",
                        "No tracking infrastructure",
                        "Losing leads after hours",
                        "Low inbound quote volume",
                        "Inconsistent bookings",
                        "Competing only on price"
                      ].map(point => {
                        const isSelected = formData.painPoints.includes(point);
                        return (
                          <button
                            key={point}
                            type="button"
                            onClick={() => togglePainPoint(point)}
                            className={`flex items-center justify-between p-3.5 rounded-lg border text-left text-sm transition-all ${
                              isSelected
                                ? "bg-brand-orange/10 border-brand-orange text-brand-white shadow-[0_0_15px_rgba(249,115,22,0.05)]"
                                : "bg-brand-bg border-brand-border text-brand-gray hover:border-brand-border-hover hover:text-brand-white"
                            }`}
                          >
                            <span>{point}</span>
                            {isSelected && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange font-bold uppercase tracking-wider">
                                Active Leak
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CURRENT SYSTEM STATUS */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-headline text-3xl text-brand-white mb-2 font-bold tracking-tight">
                        What Does Your Current Funnel Actually Look Like?
                      </h2>
                      <p className="text-brand-gray text-sm">
                        Provide a brief diagnostic breakdown of your current tools and response timeline.
                      </p>
                    </div>

                    <div className="space-y-5 max-w-2xl">
                      {/* Stack Usage */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-brand-gray tracking-wider">Do you currently use:</label>
                        <div className="flex flex-wrap gap-2.5">
                          {["Landing pages", "Google Ads", "Meta Ads", "CRM automation", "Call tracking", "Route SEO", "None properly"].map(stack => {
                            const isSelected = formData.currentStack.includes(stack);
                            return (
                              <button
                                key={stack}
                                type="button"
                                onClick={() => toggleStack(stack)}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                                  isSelected
                                    ? "bg-[#0D9488]/15 border-[#0D9488] text-brand-white"
                                    : "bg-brand-bg border-brand-border text-brand-gray hover:border-brand-gray/50"
                                }`}
                              >
                                {stack}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Website Description */}
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-brand-gray tracking-wider">Website Description</label>
                          <select 
                            value={formData.websiteType}
                            onChange={(e) => setFormData({...formData, websiteType: e.target.value})}
                            className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange outline-none transition-colors appearance-none"
                          >
                            <option>Conversion-focused</option>
                            <option>Generic business website</option>
                            <option>Outdated</option>
                            <option>No real funnel</option>
                          </select>
                        </div>

                        {/* Lead Response Speed */}
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase text-brand-gray tracking-wider">Lead Response Speed</label>
                          <select 
                            value={formData.responseTime}
                            onChange={(e) => setFormData({...formData, responseTime: e.target.value})}
                            className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-brand-white focus:border-brand-orange outline-none transition-colors appearance-none"
                          >
                            <option>Under 1 minute</option>
                            <option>1–5 minutes</option>
                            <option>5–15 minutes</option>
                            <option>15+ minutes</option>
                            <option>No structured process</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* SYSTEM SCANNING INTERMEDIATE PAGE */}
                {isScanning && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-[#0D9488]/10 border-t-brand-orange rounded-full animate-spin" />
                      <Activity className="w-8 h-8 text-brand-orange absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-2xl text-brand-white font-bold uppercase tracking-wider">Compiling Infrastructure Diagnostics</h3>
                      <p className="text-brand-gray text-sm font-mono">Running leak analysis calculations & routing diagnostics...</p>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: GROWTH GOALS */}
                {step === 4 && !isScanning && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-headline text-3xl text-brand-white mb-2 font-bold tracking-tight">
                        What Are You Trying To Achieve Over The Next 90 Days?
                      </h2>
                      <p className="text-brand-gray text-sm">
                        Select your primary operational objectives. We will align our strategy roadmap to these outcomes:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin">
                      {[
                        "Lower CPL",
                        "More booked shipments",
                        "Better lead quality",
                        "More inbound quote requests",
                        "Reduce dependence on shared leads",
                        "Scale Google Ads profitably",
                        "Build route domination",
                        "Improve booking rate",
                        "Recover missed opportunities",
                        "Build a full owned pipeline"
                      ].map(goal => {
                        const isSelected = formData.goals.includes(goal);
                        return (
                          <button
                            key={goal}
                            type="button"
                            onClick={() => toggleGoal(goal)}
                            className={`flex items-center justify-between p-3.5 rounded-lg border text-left text-sm transition-all ${
                              isSelected
                                ? "bg-[#0D9488]/10 border-[#0D9488] text-brand-white shadow-[0_0_15px_rgba(13,148,136,0.05)]"
                                : "bg-brand-bg border-brand-border text-brand-gray hover:border-brand-border-hover hover:text-brand-white"
                            }`}
                          >
                            <span>{goal}</span>
                            {isSelected && (
                              <CheckCircle2 className="w-4.5 h-4.5 text-[#0D9488]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: BOOKING GATE */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full space-y-4"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <h2 className="font-headline text-2xl md:text-3xl text-brand-white font-bold tracking-tight">
                          Reserve Your Free $500 Growth Review
                        </h2>
                        <p className="text-brand-gray text-xs">
                          Your audit + strategy session normally costs $500. For a limited time, qualified operators unlock it for free.
                        </p>
                      </div>

                      {/* Personalized Summary Card */}
                      <div className="w-full md:w-auto bg-[#0A0F1E] border border-brand-border p-3.5 rounded-xl shrink-0">
                        <div className="text-[10px] font-mono text-brand-orange uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-brand-orange" /> Diagnostics Summary
                        </div>
                        <div className="space-y-1">
                          {getDetectedIssues().map((issue, idx) => (
                            <div key={idx} className="text-[10px] font-mono text-brand-white flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-red-400" />
                              {issue}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Google Calendar Iframe */}
                    <div className="flex-1 min-h-[300px] w-full bg-white rounded-xl border border-brand-border overflow-hidden relative">
                      <iframe 
                        src="https://calendar.app.google/ZcsLKbEPunnZQkDK6"
                        className="w-full h-full border-0 bg-white"
                        title="Google Calendar Booking"
                      />
                    </div>

                    {/* Action Block */}
                    <div className="bg-[#0D9488]/10 border border-[#0D9488]/30 rounded-xl p-3 text-center">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-brand-white text-xs font-semibold">
                          <Lock className="w-4 h-4 text-brand-orange animate-pulse" />
                          Access locked until session is secured.
                        </div>
                        <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
                          <button 
                            onClick={handleNextStep}
                            className="w-full bg-[#0D9488] hover:bg-[#0f766e] text-white font-bold px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(13,148,136,0.3)] text-sm"
                          >
                            Unlock My Audit Access <Unlock className="w-4 h-4" />
                          </button>
                          <span className="text-[9px] font-mono text-brand-gray tracking-wide">
                            Audit access activates after reserving your operator session.
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 6: FINAL CONFIRMATION */}
                {step === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center my-auto py-6"
                  >
                    <div className="w-16 h-16 bg-[#0D9488]/20 rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(13,148,136,0.3)]">
                      <CheckCircle2 className="w-8 h-8 text-[#0D9488]" />
                    </div>
                    
                    <h2 className="font-headline text-3xl text-brand-white mb-2 font-bold uppercase tracking-tight">
                      Audit Pipeline Activated
                    </h2>
                    <p className="text-brand-gray text-sm mb-6 max-w-xl">
                      Your strategy session and audit intake are confirmed. Our system has already processed your preliminary Funnel Leak Analysis, and your full breakdown will be revealed during your reserved operator session.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-6">
                      
                      {/* Status Panel */}
                      <div className="bg-[#0A0F1E] border border-brand-border rounded-xl p-5 text-left space-y-3.5">
                        <div className="text-xs font-mono text-brand-gray uppercase tracking-widest border-b border-brand-border/60 pb-2 flex items-center gap-1.5">
                          <BarChart2 className="w-4 h-4 text-brand-orange" /> Operational Status
                        </div>
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-brand-gray">Strategy Session</span>
                            <span className="text-[#0D9488] font-bold">Confirmed ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-brand-gray">Audit Intake</span>
                            <span className="text-[#0D9488] font-bold">Received ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-brand-gray">Funnel Leak Analysis</span>
                            <span className="text-[#0D9488] font-bold">Processed ✓</span>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono border-t border-brand-border/40 pt-2.5">
                            <span className="text-brand-gray">Full Breakdown</span>
                            <span className="text-brand-orange font-bold flex items-center gap-1">
                              Reserved For Session <Lock className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* What We'll Cover */}
                      <div className="bg-[#0A0F1E]/50 border border-brand-border rounded-xl p-5 text-left">
                        <div className="text-xs font-mono text-brand-gray uppercase tracking-widest border-b border-brand-border/60 pb-2 mb-3">
                          What We'll Cover
                        </div>
                        <ul className="space-y-2 text-xs text-brand-gray font-mono">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            Hidden CPL leaks & budget recovery
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            Shared lead dependency audits
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            Quote conversion inefficiencies
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            Missed recovery automation gaps
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            Route visibility optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            Custom system roadmap blueprints
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-full max-w-sm">
                      <button 
                        onClick={closeModal}
                        className="w-full bg-brand-bg border border-brand-border hover:bg-brand-border text-brand-white px-6 py-3 rounded-lg font-bold transition-colors text-sm"
                      >
                        Return To Site
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Bottom Navigation Buttons (If not step 5/6) */}
            {step < 5 && !isScanning && (
              <div className="border-t border-brand-border/50 pt-5 mt-6 flex justify-between items-center z-10">
                {step > 1 ? (
                  <button
                    onClick={handlePrevStep}
                    className="text-xs font-mono uppercase tracking-wider text-brand-gray hover:text-brand-white transition-colors py-2 px-3 border border-brand-border rounded bg-brand-bg/40"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  onClick={handleNextStep}
                  disabled={
                    (step === 1 && (!formData.name || !formData.company || !formData.website)) ||
                    (step === 2 && formData.painPoints.length === 0) ||
                    (step === 4 && formData.goals.length === 0)
                  }
                  className="bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-35 disabled:hover:bg-brand-orange text-brand-white font-bold text-xs font-mono uppercase tracking-widest py-3 px-6 rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.15)] flex items-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          
          {/* Exit Intent Overlay for Step 5 */}
          <AnimatePresence>
            {showExitIntent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-brand-card/95 backdrop-blur flex items-center justify-center p-6"
              >
                <div className="bg-brand-bg border border-brand-border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500 animate-bounce" />
                  </div>
                  <h3 className="font-headline text-2xl text-brand-white mb-4 font-bold">Don't Lose Your Spot</h3>
                  <p className="text-brand-gray mb-8 text-sm">
                    Your Free $500 Audit + Strategy Session is currently reserved. If you leave now, your operator allocation slot will be released.
                  </p>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setShowExitIntent(false)}
                      className="w-full bg-brand-orange hover:bg-brand-orange-hover text-brand-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg text-sm"
                    >
                      Continue My Booking
                    </button>
                    <button 
                      onClick={forceClose}
                      className="w-full bg-transparent hover:bg-brand-border text-brand-gray px-6 py-3 rounded-lg transition-colors text-xs"
                    >
                      Cancel and Exit
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
