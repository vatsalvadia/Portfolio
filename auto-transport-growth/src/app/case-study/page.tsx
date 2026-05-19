import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/case-study/ScrollProgressBar";

import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import BrokenSystem from "@/components/case-study/BrokenSystem";
import DiagnosticAudit from "@/components/case-study/DiagnosticAudit";
import PipelineDeployment from "@/components/case-study/PipelineDeployment";
import PerformanceShift from "@/components/case-study/PerformanceShift";
import MarketDominance from "@/components/case-study/MarketDominance";
import DeploymentLibrary from "@/components/case-study/DeploymentLibrary";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";
import MicroCTA from "@/components/case-study/MicroCTA";

export const metadata: Metadata = {
  title: "How We Rebuilt an Auto Transport Broker's Pipeline in 90 Days",
  description: "A forensic pipeline transformation report detailing how we cut CPL by 24% and built an owned auto transport lead generation system.",
  keywords: ["auto transport marketing", "auto transport lead generation", "car shipping leads", "broker marketing system", "CPL reduction"],
};

export default function CaseStudyPage() {
  return (
    <SmoothScroll>
      <ScrollProgressBar />
      <Navbar />
      
      <main className="bg-brand-bg min-h-screen">
        <CaseStudyHero />
        <BrokenSystem />
        <MicroCTA title="Wondering if your funnel leaks like this?" />
        <DiagnosticAudit />
        <PipelineDeployment />
        <MicroCTA title="Want this proprietary architecture deployed for your brokerage?" buttonText="Deploy My Pipeline" />
        <PerformanceShift />
        <MarketDominance />
        <DeploymentLibrary />
        <CaseStudyCTA />
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
