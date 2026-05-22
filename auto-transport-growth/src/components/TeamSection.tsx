"use client";

import RevealSection from "./RevealSection";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Briefcase, Award, Sparkles } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  badges: string[];
  experience: string;
  specialty: string;
  links: {
    linkedin?: string;
    github?: string;
  };
  icon: React.ReactNode;
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Vatsal Vadia",
      role: "Founder & Growth Architect",
      bio: "Over the decades experience in digital engineering, digital strategy, and performance systems, building the growth infrastructure that scales multimillion-dollar transport brands.",
      image: "/images/team/vatsal.jpg",
      badges: ["Founder", "Growth Strategy", "10+ Yrs Exp"],
      experience: "10+ Years",
      specialty: "Growth Infrastructure & Ads",
      links: {
        linkedin: "https://linkedin.com",
      },
      icon: <Award className="w-5 h-5 text-brand-orange" />,
    },
    {
      name: "Bhavesh",
      role: "Lead Software Architect",
      bio: "6+ years experienced in software engineering, performance tuning, end to end software development, pipelines, testing, etc. Completed more than 15 enterprise level projects for clients all over the world in versatile domains.",
      image: "/images/team/bhavesh.jpg",
      badges: ["Architecture", "Performance Tuning", "6+ Yrs Exp"],
      experience: "6+ Years",
      specialty: "High-Perf Engineering & CI/CD",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
    },
    {
      name: "Sakshi",
      role: "Cloud & Infrastructure Engineer",
      bio: "4+ years of experience in software engineering and cloud computing, building scalable applications for multi national businesses, achieved milestones in finance and other domains for UK and clients all over the world.",
      image: "/images/team/sakshi.jpg",
      badges: ["Cloud Systems", "AWS/GCP", "4+ Yrs Exp"],
      experience: "4+ Years",
      specialty: "Distributed Systems & Cloud Scale",
      links: {
        linkedin: "https://linkedin.com",
      },
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
    },
    {
      name: "Suman",
      role: "Creative Lead & UX Architect",
      bio: "Senior Creative Lead specializing in conversion-focused UX and brand systems. Architect of the visual trust engines and digital assets that turn transport traffic into high-margin broker operations.",
      image: "/images/team/suman.jpg",
      badges: ["UX/UI Design", "Creative Lead", "Conversion"],
      experience: "Design Master",
      specialty: "Visual Trust & Conversion Funnels",
      links: {
        linkedin: "https://linkedin.com",
      },
      icon: <Sparkles className="w-5 h-5 text-teal-400" />,
    },
  ];

  return (
    <section className="py-24 bg-brand-bg border-b border-brand-border relative overflow-hidden" id="team">
      {/* Abstract Glowing Orbs for Luxury High-Tech Feel */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <RevealSection variant="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" /> Growth Catalyst Team
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-brand-white mb-4">
            Engineered For Scale
          </h2>
          <p className="font-body text-brand-gray text-lg max-w-2xl mx-auto">
            The multi-disciplinary engineering and performance marketing talent behind your growth systems.
          </p>
        </RevealSection>

        {/* 4-Column Grid with hover glows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <RevealSection key={i} variant="fadeUp" delay={0.15 * i} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-brand-card/75 backdrop-blur-md rounded-xl border border-brand-border h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-brand-orange/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"
              >
                {/* Top thin accent line that lights up orange/teal alternatively */}
                <div 
                  className={`h-1 w-full bg-gradient-to-r ${
                    i % 2 === 0 ? "from-brand-orange to-brand-orange-hover" : "from-teal-500 to-emerald-400"
                  }`} 
                />

                {/* Profile Image Container */}
                <div className="relative w-full aspect-[4/5] bg-brand-bg/50 overflow-hidden">
                  {/* Subtle color overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card/95 via-transparent to-transparent z-10 pointer-events-none" />
                  
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-lg bg-brand-card/90 backdrop-blur-sm border border-brand-border/60 flex items-center justify-center shadow-lg group-hover:border-brand-orange/40 transition-colors">
                    {member.icon}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="font-headline text-2xl text-brand-white group-hover:text-brand-orange transition-colors leading-tight mb-1">
                        {member.name}
                      </h3>
                      <p className="font-body text-xs font-semibold text-[#0D9488] uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="font-body text-xs text-brand-gray/90 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Footer (Badges and Links) */}
                  <div className="space-y-4 border-t border-brand-border/60 pt-4">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.badges.map((badge, bi) => (
                        <span 
                          key={bi} 
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                            i % 2 === 0 
                              ? "bg-brand-orange/5 text-brand-orange/90 border-brand-orange/15" 
                              : "bg-teal-500/5 text-teal-400 border-teal-500/15"
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Social/Link Row */}
                    <div className="flex items-center justify-between text-brand-gray text-xs pt-1">
                      <span className="font-body text-[11px] text-brand-gray/60">
                        {member.specialty}
                      </span>
                      <div className="flex items-center gap-2">
                        {member.links.linkedin && (
                          <a
                            href={member.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-orange transition-colors p-1"
                            title="LinkedIn"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                        {member.links.github && (
                          <a
                            href={member.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-400 transition-colors p-1"
                            title="GitHub"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
