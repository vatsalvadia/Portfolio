"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deployments } from "@/data/deployments";
import { Deployment, DeploymentCategory } from "@/types/deployment";
import DeploymentCard from "./DeploymentCard";
import DeploymentSlidePanel from "./DeploymentSlidePanel";
import RevealSection from "@/components/RevealSection";
import { Layers, Search, ChevronDown } from "lucide-react";
import { useLenis } from "lenis/react";

export default function DeploymentLibrary() {
  const [activeCategory, setActiveCategory] = useState<DeploymentCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDeploymentId, setSelectedDeploymentId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleExplore = () => {
    setIsExpanded(true);
    // Smooth scroll down to reveal the newly expanded items
    setTimeout(() => {
      if (gridRef.current) {
        const y = gridRef.current.getBoundingClientRect().top + window.scrollY + 200;
        if (lenis) {
          lenis.scrollTo(y, { duration: 1.2 });
        } else {
          window.scrollTo({ top: y }); // Fallback without 'smooth' to prevent conflict
        }
      }
    }, 100);
  };

  // Filter and search logic
  const filteredDeployments = useMemo(() => {
    return deployments.filter(dep => {
      const matchesCategory = activeCategory === "All" || dep.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        searchQuery === "" ||
        dep.route.toLowerCase().includes(searchLower) ||
        dep.primaryLeak.toLowerCase().includes(searchLower) ||
        dep.title.toLowerCase().includes(searchLower) ||
        dep.deploymentType.toLowerCase().includes(searchLower);
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Determine which ones to show based on expansion state and filters
  // If user searches or filters, we should probably auto-expand, or just show matching
  const visibleDeployments = isExpanded || searchQuery !== "" || activeCategory !== "All" 
    ? filteredDeployments 
    : filteredDeployments.slice(0, 6);

  // Counts for filter bar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All": deployments.length };
    deployments.forEach(dep => {
      counts[dep.category] = (counts[dep.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories: (DeploymentCategory | "All")[] = [
    "All", "Landing Pages", "Google Ads", "Meta", "CRM", "Tracking", "CRO", "SEO"
  ];

  const selectedDeployment = useMemo(() => {
    return deployments.find(d => d.id === selectedDeploymentId) || null;
  }, [selectedDeploymentId]);

  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0D9488]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-brand-white" />
            <span className="font-body text-sm font-bold text-brand-white tracking-widest uppercase">Additional Pipeline Wins</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-6">
            Not An <span className="text-[#0D9488]">Isolated Win</span>
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-3xl mx-auto">
            These systems are deployed across landing pages, Google Ads, CRM, retargeting, tracking, and route visibility to reduce CPL and build owned lead infrastructure.
          </p>
        </RevealSection>

        {/* Intelligence Controls: Filter & Search */}
        <RevealSection variant="fadeUp" delay={0.2} className="mb-12">
          <div className="bg-brand-card/50 border border-brand-border rounded-2xl p-4 md:p-6 backdrop-blur flex flex-col xl:flex-row justify-between items-center gap-6">
            
            {/* Scrollable Filter Bar */}
            <div className="w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 hide-scrollbar flex items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg font-body text-sm font-bold transition-all flex items-center gap-2 ${
                    activeCategory === cat 
                      ? "bg-[#0D9488]/20 text-[#0D9488] border border-[#0D9488]/50" 
                      : "bg-transparent text-brand-gray hover:text-brand-white hover:bg-brand-border border border-transparent"
                  }`}
                >
                  {cat} <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeCategory === cat ? 'bg-[#0D9488]/20' : 'bg-brand-border'}`}>{categoryCounts[cat] || 0}</span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="w-full xl:w-80 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray group-focus-within:text-[#0D9488] transition-colors" />
              <input 
                type="text" 
                placeholder="Search route, leak, or system..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-bg border border-brand-border focus:border-[#0D9488]/50 rounded-xl py-3 pl-10 pr-4 font-body text-sm text-brand-white placeholder:text-brand-gray/50 outline-none transition-all"
              />
            </div>
          </div>
        </RevealSection>

        {/* Deployments Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {visibleDeployments.map((deployment, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={deployment.id}
              >
                <DeploymentCard 
                  deployment={deployment} 
                  onClick={(id) => setSelectedDeploymentId(id)} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {visibleDeployments.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-20 border border-dashed border-brand-border rounded-2xl">
              <Search className="w-8 h-8 text-brand-gray mb-4" />
              <div className="font-headline text-xl text-brand-white mb-2">No deployments found</div>
              <div className="font-body text-brand-gray">Try adjusting your filters or search query.</div>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 text-[#0D9488] font-body text-sm font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Explore Button */}
        {!isExpanded && activeCategory === "All" && searchQuery === "" && (
          <RevealSection variant="fadeUp" className="flex justify-center mb-24">
            <button 
              onClick={handleExplore}
              className="bg-brand-card hover:bg-brand-border border border-brand-border text-brand-white font-body font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              Explore Full Growth Library
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-[#0D9488]" />
            </button>
          </RevealSection>
        )}

        {/* Final Trust Boost */}
        <div className="text-center border-t border-brand-border/50 pt-16">
          <div className="font-headline text-2xl text-brand-gray/30 tracking-widest uppercase mb-4">Built Across 20 Deployments</div>
          <div className="flex flex-wrap justify-center gap-4 text-brand-gray/40 font-mono text-sm uppercase">
            <span>Landing Pages</span> • <span>PPC</span> • <span>CRM</span> • <span>CRO</span> • <span>SEO</span> • <span>Tracking</span>
          </div>
        </div>

      </div>

      {/* Slide Panel Overlay */}
      <DeploymentSlidePanel 
        deployment={selectedDeployment} 
        isOpen={!!selectedDeploymentId} 
        onClose={() => setSelectedDeploymentId(null)} 
      />

    </section>
  );
}
