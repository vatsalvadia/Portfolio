import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";

// Below-the-fold sections are dynamically imported to split JS bundle chunks and optimize hydration times
const PainSection = dynamic(() => import("@/components/PainSection"));
const SharedVsOwned = dynamic(() => import("@/components/SharedVsOwned"));
const PerformanceMarketing = dynamic(() => import("@/components/PerformanceMarketing"));
const CaseStudy = dynamic(() => import("@/components/CaseStudy"));
const GrowthAssets = dynamic(() => import("@/components/GrowthAssets"));
const FounderSection = dynamic(() => import("@/components/FounderSection"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://auto.vatsalvadia.com/#service",
        "name": "Auto Transport Growth Systems",
        "url": "https://auto.vatsalvadia.com",
        "logo": "https://auto.vatsalvadia.com/images/og-image.png",
        "image": "https://auto.vatsalvadia.com/images/og-image.png",
        "description": "Performance marketing systems for auto transport companies, including high-converting landing pages, paid ads, CRM automation, and route precision tracking.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "priceRange": "$$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://auto.vatsalvadia.com/#website",
        "url": "https://auto.vatsalvadia.com",
        "name": "Auto Transport Growth Systems",
        "description": "Performance marketing systems for auto transport companies."
      },
      {
        "@type": "FAQPage",
        "@id": "https://auto.vatsalvadia.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does your system differ from buying shared leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shared leads are sold to multiple brokers simultaneously, driving down margins. Our system builds your own exclusive, route-precise lead generation machine so you own the customer relationship."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical deployment timeline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy your core funnel, automated CRM, tracking infrastructure, and launch active campaigns within 14 days of project kickoff."
            }
          }
        ]
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
        <Loader />
        <Navbar />
        <main>
          <Hero />
          <PainSection />
          <SharedVsOwned />
          <PerformanceMarketing />
          <CaseStudy />
          <GrowthAssets />
          <FounderSection />
          <FaqSection />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
