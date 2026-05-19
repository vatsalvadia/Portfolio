import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/case-study/ScrollProgressBar";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import MicroCTA from "@/components/case-study/MicroCTA";

// Dynamically import below-the-fold components to reduce hydration payload and split chunk loads
const BrokenSystem = dynamic(() => import("@/components/case-study/BrokenSystem"));
const DiagnosticAudit = dynamic(() => import("@/components/case-study/DiagnosticAudit"));
const PipelineDeployment = dynamic(() => import("@/components/case-study/PipelineDeployment"));
const PerformanceShift = dynamic(() => import("@/components/case-study/PerformanceShift"));
const MarketDominance = dynamic(() => import("@/components/case-study/MarketDominance"));
const DeploymentLibrary = dynamic(() => import("@/components/case-study/DeploymentLibrary"));
const CaseStudyCTA = dynamic(() => import("@/components/case-study/CaseStudyCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "How We Rebuilt an Auto Transport Broker's Pipeline in 90 Days",
  description: "A forensic pipeline transformation report detailing how we cut CPL by 24% and built an owned auto transport lead generation system.",
  keywords: ["auto transport marketing", "auto transport lead generation", "car shipping leads", "broker marketing system", "CPL reduction"],
  alternates: {
    canonical: "/case-study",
  },
};

export default function CaseStudyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://auto.vatsalvadia.com/case-study/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://auto.vatsalvadia.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Study",
            "item": "https://auto.vatsalvadia.com/case-study"
          }
        ]
      },
      {
        "@type": "NewsArticle",
        "@id": "https://auto.vatsalvadia.com/case-study/#article",
        "headline": "How We Rebuilt an Auto Transport Broker's Pipeline in 90 Days",
        "description": "A forensic pipeline transformation report detailing how we cut CPL by 24% and built an owned auto transport lead generation system.",
        "image": "https://auto.vatsalvadia.com/images/og-image.png",
        "datePublished": "2026-05-10T08:00:00+00:00",
        "author": {
          "@type": "Person",
          "name": "Vatsal Vadia",
          "url": "https://www.vatsalvadia.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Auto Transport Growth Systems",
          "logo": {
            "@type": "ImageObject",
            "url": "https://auto.vatsalvadia.com/images/og-image.png"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
