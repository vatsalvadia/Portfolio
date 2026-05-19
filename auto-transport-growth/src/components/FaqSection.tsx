"use client";

import RevealSection from "./RevealSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you manage Google Ads for auto transport companies?",
    a: "Yes. We build, manage, and optimize high-intent, route-targeted Google Search campaigns designed to capture carriers, brokers, and shippers at the exact moment they need transport services.",
  },
  {
    q: "Do you track cost per lead and booked shipment quality?",
    a: "Absolutely. We implement granular call and form tracking so you can attribute every phone call and quote submission back to the exact keyword, ad, and route that generated it.",
  },
  {
    q: "Can you improve our current campaign performance instead of rebuilding everything?",
    a: "Yes. We can audit your existing Google Ads setup, CRM workflows, and landing pages to find quick-win optimizations (like negative keyword filtering or form speed tweaks) before suggesting any rebuilds.",
  },
  {
    q: "Can you work with our existing CRM?",
    a: "Yes, we integrate seamlessly with major industry CRMs (like GoHighLevel, Salesforce, custom dispatch tools, and proprietary broker portals) to ensure lead delivery and automated follow-ups sync perfectly.",
  },
  {
    q: "How fast can this launch?",
    a: "Standard funnels, paid campaign setups, and automation tracks are fully configured and live in 14-21 days.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border" id="audit">
      <div className="max-w-[800px] mx-auto px-6">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">Frequently Asked Questions</h2>
        </RevealSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <RevealSection key={i} variant="fadeUp" delay={0.1 * i}>
              <div 
                className={`bg-brand-card border ${openIndex === i ? 'border-brand-orange' : 'border-brand-border'} rounded-lg overflow-hidden transition-colors duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-body text-lg font-bold text-brand-white">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-gray transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-orange' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="font-body text-brand-gray">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
