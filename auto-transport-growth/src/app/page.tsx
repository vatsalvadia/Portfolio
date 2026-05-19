import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SharedVsOwned from "@/components/SharedVsOwned";
import PerformanceMarketing from "@/components/PerformanceMarketing";
import CaseStudy from "@/components/CaseStudy";
import GrowthAssets from "@/components/GrowthAssets";
import FounderSection from "@/components/FounderSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
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
  );
}
