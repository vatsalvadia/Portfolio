"use client";

import RevealSection from "./RevealSection";
import { TrendingDown, UserX, Clock4, EyeOff } from "lucide-react";

export default function PainSection() {
  const pains = [
    {
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      title: "Fighting 5 brokers for the same lead",
      desc: "Shared leads force you into margin-killing price wars.",
    },
    {
      icon: <UserX className="w-6 h-6 text-red-500" />,
      title: "Paying for recycled quote requests",
      desc: "Buying lists filled with dead numbers and price shoppers.",
    },
    {
      icon: <Clock4 className="w-6 h-6 text-red-500" />,
      title: "Losing hot leads after hours",
      desc: "Your team can't quote and text back fast enough.",
    },
    {
      icon: <EyeOff className="w-6 h-6 text-red-500" />,
      title: "No route-specific SEO = invisible margins",
      desc: "Missing out on high-intent search traffic for your most profitable lanes.",
    },
  ];

  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border" id="pain">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">Sound Familiar?</h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            The broken reality of the traditional auto transport lead model.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pains.map((pain, i) => (
            <RevealSection key={i} variant="fadeUp" delay={0.1 * i} className="h-full">
              <div className="bg-brand-card p-8 rounded-lg border border-brand-border shadow-sm hover:shadow-[0_10px_30px_rgba(249,115,22,0.05)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="w-12 h-12 bg-red-500/10 rounded flex items-center justify-center mb-6 border border-red-500/20 group-hover:scale-110 transition-transform">
                  {pain.icon}
                </div>
                <h3 className="font-headline text-2xl text-brand-white mb-3 leading-tight">{pain.title}</h3>
                <p className="font-body text-brand-gray">{pain.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
