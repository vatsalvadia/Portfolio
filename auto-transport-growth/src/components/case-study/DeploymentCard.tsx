"use client";

import { Deployment } from "@/types/deployment";
import { ArrowRight, Activity, LayoutTemplate, Target, Settings, Map, LineChart, Search } from "lucide-react";

interface DeploymentCardProps {
  deployment: Deployment;
  onClick: (id: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Landing Pages": <LayoutTemplate className="w-4 h-4" />,
  "Google Ads": <Target className="w-4 h-4" />,
  "Meta": <Activity className="w-4 h-4" />,
  "CRM": <Settings className="w-4 h-4" />,
  "Tracking": <LineChart className="w-4 h-4" />,
  "CRO": <Activity className="w-4 h-4" />,
  "SEO": <Search className="w-4 h-4" />
};

export default function DeploymentCard({ deployment, onClick }: DeploymentCardProps) {
  return (
    <div 
      onClick={() => onClick(deployment.id)}
      className="group relative bg-brand-bg/60 backdrop-blur-md border border-brand-border hover:border-[#0D9488]/50 p-6 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(13,148,136,0.1)] flex flex-col h-full"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/0 to-[#0D9488]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Top: Category & Route */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex items-center gap-2 bg-[#0D9488]/10 border border-[#0D9488]/20 px-3 py-1.5 rounded text-[10px] font-bold text-[#0D9488] uppercase tracking-wider">
          {categoryIcons[deployment.category]}
          {deployment.category}
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-brand-gray/60 uppercase tracking-widest mb-1">Route</div>
          <div className="font-body text-xs text-brand-white font-bold">{deployment.route}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-headline text-xl text-brand-white mb-2 relative z-10 group-hover:text-brand-orange transition-colors">
        {deployment.title}
      </h3>
      <div className="font-mono text-xs text-brand-gray/80 mb-6 relative z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-border group-hover:bg-[#0D9488] transition-colors" />
        {deployment.businessType}
      </div>

      {/* Center: Pain -> Deployment */}
      <div className="bg-brand-card/50 border border-brand-border/50 rounded-lg p-4 mb-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="font-body text-xs text-brand-gray mb-1 line-clamp-1">{deployment.primaryLeak}</div>
        <div className="flex justify-center my-2">
          <ArrowRight className="w-3 h-3 text-[#0D9488] rotate-90 md:rotate-0" />
        </div>
        <div className="font-body text-sm font-bold text-brand-white line-clamp-1">{deployment.deploymentType}</div>
      </div>

      {/* Bottom: KPI & CTA */}
      <div className="flex items-end justify-between mt-auto relative z-10 pt-2 border-t border-brand-border/50">
        <div>
          <div className="font-body text-[10px] text-brand-gray uppercase tracking-widest mb-1">
            {deployment.kpiPrimary.label}
          </div>
          <div className="font-headline text-2xl text-[#0D9488] flex items-baseline drop-shadow-[0_0_8px_rgba(13,148,136,0.5)] group-hover:scale-105 transition-transform origin-left">
            <span className="text-sm mr-1">{deployment.kpiPrimary.direction === 'up' ? '↑' : '↓'}</span>
            {deployment.kpiPrimary.value}
          </div>
        </div>
        
        <div className="flex items-center gap-2 font-body text-xs font-bold text-brand-gray group-hover:text-brand-white transition-colors">
          View Full Breakdown
          <div className="w-6 h-6 rounded-full bg-brand-card flex items-center justify-center border border-brand-border group-hover:border-[#0D9488]/50 group-hover:bg-[#0D9488]/10 transition-colors">
            <ArrowRight className="w-3 h-3 group-hover:text-[#0D9488]" />
          </div>
        </div>
      </div>
    </div>
  );
}
