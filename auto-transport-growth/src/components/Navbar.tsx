"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useAuditModal } from "@/context/AuditModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useAuditModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <div className="font-headline text-3xl font-extrabold tracking-tighter flex items-center">
            VV <span className="text-brand-orange ml-1">↗</span>
          </div>
          <div className="hidden sm:flex flex-col ml-2 border-l border-brand-border pl-3">
            <span className="font-body text-sm font-bold text-brand-white leading-tight">Vatsal Vadia</span>
            <span className="font-body text-[10px] text-brand-gray uppercase tracking-widest">Auto Transport Growth Systems</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#services" className="font-body text-sm font-medium text-brand-gray hover:text-brand-white transition-colors">Services</a>
          <Link href="/case-study" className="font-body text-sm font-medium text-brand-gray hover:text-brand-white transition-colors">Case Study</Link>
          <a href="/#audit" className="font-body text-sm font-medium text-brand-gray hover:text-brand-white transition-colors">Audit</a>
          
          <button onClick={openModal} className="bg-brand-orange hover:bg-brand-orange-hover text-brand-white font-body text-sm font-bold px-6 py-2.5 rounded transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]">
            Get Free CPL Audit
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-body text-lg font-medium text-brand-white">Services</a>
          <Link href="/case-study" onClick={() => setMobileMenuOpen(false)} className="font-body text-lg font-medium text-brand-white">Case Study</Link>
          <button onClick={() => { setMobileMenuOpen(false); openModal(); }} className="font-body text-lg font-medium text-brand-white text-left">Audit</button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="bg-brand-orange text-brand-white font-body font-bold py-3 px-4 rounded text-center mt-4 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Get Free CPL Audit
            </button>
        </motion.div>
      )}
    </header>
  );
}
