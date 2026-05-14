import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Search, 
  Zap, 
  Globe, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  ExternalLink as Linkedin,
  Target,
  Trophy,
  Users,
  MapPin,
  Clock,
  Layout,
  MousePointer2,
  PieChart,
  Bot,
  MessageSquare,
  Award
} from 'lucide-react';

// --- STYLES ---
const styles = `
  :root {
    --bg-deep: #050505;
    --bg-card: #0d0d0d;
    --accent-primary: #6366f1;
    --accent-secondary: #a855f7;
    --text-primary: #ffffff;
    --text-secondary: #f1f5f9;
    --text-muted: #cbd5e1;
    --glass: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.1);
    --font-main: 'Inter', system-ui, -apple-system, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { 
    background: var(--bg-deep); 
    color: var(--text-primary); 
    font-family: var(--font-main);
    overflow-x: hidden;
    line-height: 1.7;
    font-size: 18px;
  }

  .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  
  .main-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .main-nav.scrolled {
    background: rgba(5, 5, 5, 0.9);
    backdrop-filter: blur(16px);
    padding: 1rem 0;
    border-bottom: 1px solid var(--glass-border);
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links { display: flex; gap: 2.5rem; align-items: center; }
  .nav-links a { 
    color: var(--text-secondary); 
    text-decoration: none; 
    font-size: 0.95rem; 
    font-weight: 500;
    transition: color 0.3s;
    letter-spacing: 0.02em;
  }
  .nav-links a:hover { color: var(--accent-primary); }
  
  .logo { 
    font-size: 1.5rem; 
    font-weight: 800; 
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
    text-decoration: none;
  }

  .hero {
    padding: 8rem 0 4rem;
    position: relative;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent-primary);
    margin-bottom: 1rem;
  }
  .hero h1 {
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 800;
    margin-bottom: 1.2rem;
    letter-spacing: -0.03em;
  }
  .hero h1 span {
    background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero-p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 650px;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  .hero-image-container {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5);
    aspect-ratio: 1;
  }
  .hero-image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.9;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-top: -2rem;
    position: relative;
    z-index: 10;
  }
  .stat-card {
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    padding: 1.5rem;
    border-radius: 20px;
    text-align: left;
    transition: transform 0.3s;
    backdrop-filter: blur(10px);
  }
  .stat-card:hover { transform: translateY(-5px); border-color: var(--accent-primary); }
  .stat-num {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0.4rem;
    display: block;
    color: white;
  }
  .stat-label { font-weight: 700; color: var(--text-primary); display: block; margin-bottom: 0.4rem; }
  .stat-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.4; }

  .section { padding: 5rem 0; }
  .section-header { margin-bottom: 3rem; max-width: 800px; }
  .section-tag {
    color: var(--accent-primary);
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;
    display: block;
  }
  .section h2 { font-size: 3.5rem; font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.02em; }

  /* Work Grid */
  .featured-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  .work-card {
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    border-radius: 32px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
  }
  .work-card:hover { 
    transform: translateY(-12px);
    border-color: var(--accent-primary);
    box-shadow: 0 40px 80px -20px rgba(99, 102, 241, 0.25);
  }
  .work-img {
    height: 340px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .work-img img { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
  .work-card:hover .work-img img { scale: 1.08; opacity: 0.7; }
  
  .work-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%);
    z-index: 1;
  }
  .work-tag-container {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    z-index: 2;
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }
  
  .work-content { padding: 3rem; flex-grow: 1; position: relative; z-index: 2; }
  .work-tag {
    font-size: 0.8rem;
    padding: 0.45rem 1.1rem;
    background: rgba(99, 102, 241, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.3);
    backdrop-filter: blur(8px);
    border-radius: 100px;
    color: var(--text-primary);
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  .work-title { font-size: 1.85rem; font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.01em; }
  .work-desc { font-size: 1rem; color: var(--text-muted); margin-bottom: 2rem; }
  
  .work-details { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 2.5rem; 
    margin-top: 2rem; 
    padding-top: 2.5rem; 
    border-top: 1px solid var(--glass-border); 
  }
  .work-detail-label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-bottom: 0.6rem; letter-spacing: 0.05em; }
  .work-detail-val { font-size: 1.1rem; font-weight: 800; color: var(--text-primary); }

  /* Knowledge Base (AEO/GEO Focus) */
  .knowledge-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }
  .kb-card {
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    padding: 2.5rem;
    border-radius: 24px;
    transition: 0.3s;
  }
  .kb-card:hover { border-color: var(--accent-primary); }
  .kb-question { font-weight: 800; color: white; margin-bottom: 1rem; font-size: 1.1rem; }
  .kb-answer { font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; }

  .tech-section { background: #080808; border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border); padding: 5rem 0; }
  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    justify-content: center;
  }
  .tech-pill {
    padding: 0.9rem 1.8rem;
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.3s;
    color: var(--text-secondary);
  }
  .tech-pill:hover { border-color: var(--accent-primary); background: rgba(99, 102, 241, 0.08); color: white; }

  .testimonial-slider {
    position: relative;
    width: 100%;
    padding: 1rem 0;
  }
  .testimonial-viewport {
    overflow: hidden;
    margin: 0 -1rem;
    padding: 1rem;
  }
  .testimonial-track {
    display: flex;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 2rem;
  }
  .testimonial-slide {
    flex: 0 0 calc(50% - 1rem);
    min-width: 0; /* Fixes flex child shrinking */
  }
  .testimonial-card {
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    padding: 3rem;
    border-radius: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    min-height: 380px;
  }
  .testimonial-card:hover { 
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    background: rgba(255,255,255,0.02);
  }
  
  @media (max-width: 1024px) {
    .testimonial-slide { flex: 0 0 100%; }
    .testimonial-card { min-height: auto; padding: 2.5rem; }
  }
  .testimonial-quote { font-size: 1.35rem; font-style: italic; margin-bottom: 2.5rem; color: var(--text-secondary); line-height: 1.6; }
  .testimonial-author { display: flex; align-items: center; gap: 1.5rem; }
  .author-avatar { 
    width: 64px; 
    height: 64px; 
    border-radius: 20px; 
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    font-size: 1.5rem;
  }
  .author-info h4 { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.2rem; }
  .author-info p { font-size: 0.95rem; color: var(--text-muted); }

  .dashboard-container {
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    border-radius: 32px;
    overflow: hidden;
    margin-top: 3rem;
  }
  table { width: 100%; border-collapse: collapse; text-align: left; }
  th { background: rgba(255,255,255,0.02); padding: 1.8rem; font-size: 0.85rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); border-bottom: 1px solid var(--glass-border); }
  td { padding: 1.8rem; border-bottom: 1px solid var(--glass-border); font-size: 1.1rem; color: var(--text-secondary); }
  .rank-badge { background: #064e3b; color: #34d399; padding: 0.4rem 1rem; border-radius: 100px; font-size: 0.9rem; font-weight: 800; }

  .journey-item {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 4rem;
    padding: 3.5rem;
    background: var(--bg-card);
    border-radius: 32px;
    border: 1px solid var(--glass-border);
    margin-bottom: 2.5rem;
    transition: 0.3s;
  }
  .journey-item:hover { border-color: var(--accent-primary); }
  .journey-date { color: var(--accent-primary); font-weight: 800; font-size: 1rem; margin-bottom: 0.8rem; display: block; }
  .journey-company { font-size: 1.25rem; font-weight: 800; color: white; }
  .journey-role { font-size: 1.8rem; font-weight: 800; margin-bottom: 1.5rem; }
  .journey-desc { font-size: 1.1rem; color: var(--text-muted); }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.25rem 2.5rem;
    border-radius: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    font-size: 1.05rem;
  }
  .btn-primary { 
    background: var(--accent-primary); 
    color: white; 
    border: none;
    box-shadow: 0 15px 35px -10px rgba(99, 102, 241, 0.5);
  }
  .btn-primary:hover { 
    transform: translateY(-4px) scale(1.02); 
    box-shadow: 0 20px 45px -10px rgba(99, 102, 241, 0.6); 
  }
  .btn-outline { 
    background: transparent; 
    border: 1px solid var(--glass-border); 
    color: white; 
  }
  .btn-outline:hover { background: var(--glass); border-color: var(--text-primary); transform: translateY(-4px); }

  footer { background: #020202; padding: 5rem 0 3rem; border-top: 1px solid var(--glass-border); }
  .footer-grid { display: grid; grid-template-columns: 2.5fr 1fr 1fr 1.5fr; gap: 4rem; margin-bottom: 4rem; }
  .footer-logo { font-size: 1.8rem; font-weight: 900; margin-bottom: 1.5rem; display: block; }
  .footer-links h4 { margin-bottom: 1.5rem; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-primary); }
  .footer-links ul { list-style: none; }
  .footer-links li { margin-bottom: 1rem; }
  .footer-links a { color: var(--text-muted); text-decoration: none; transition: color 0.3s; font-weight: 500; }
  .footer-links a:hover { color: white; }
  .footer-bottom { padding-top: 3rem; border-top: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center; color: var(--text-muted); font-size: 1rem; }

  .highlight { color: var(--accent-primary); }
  
  @media (max-width: 1024px) {
    .hero { grid-template-columns: 1fr; text-align: center; gap: 5rem; padding-top: 10rem; }
    .hero h1 { font-size: 3.5rem; }
    .hero-p { margin: 0 auto 3rem; }
    .hero-image-container { max-width: 500px; margin: 0 auto; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); margin-top: 5rem; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 4rem; }
    .featured-grid { grid-template-columns: 1fr; }
    .testimonial-grid { grid-template-columns: 1fr; }
    .journey-item { grid-template-columns: 1fr; gap: 1.5rem; }
  }
`;

// --- DATA ---
const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Results', href: '#results' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const STATS = [
  { 
    num: '$1.5M+', 
    label: 'Managed Ad Spend', 
    desc: 'B2B, Ecommerce, and high-growth Local Service campaigns optimized for maximum ROAS.' 
  },
  { 
    num: '350%', 
    label: 'Organic Growth', 
    desc: 'Average traffic increase achieved for SEO clients within the first 12 months of implementation.' 
  },
  { 
    num: '35+', 
    label: 'Industries Served', 
    desc: 'Proven success across diverse sectors including SaaS, Fintech, Healthcare, and Global Manufacturing.' 
  },
  { 
    num: '9+', 
    label: 'Years Experience', 
    desc: 'Deep professional expertise in Growth Operations, Performance Marketing, and technical SEO scaling.' 
  },
];

const FEATURED_WORK = [
  {
    title: "Global SEO Scaling for SaaS",
    image: "/seo-dashboard.png",
    tags: ["SEO", "Content Ops", "GEO"],
    problem: "The client faced stagnant organic traffic and was losing market share in high-intent global keyword clusters.",
    strategy: "Deployed a programmatic SEO architecture combined with AI-assisted content scaling to build topical authority fast.",
    result: "420% increase in high-intent keyword rankings.",
    tools: ["Ahrefs", "GA4", "Search Console"],
    timeline: "8 Months"
  },
  {
    title: "High-Ticket B2B Lead Engine",
    image: "/funnel-dashboard.png",
    tags: ["PPC", "CRM Ops", "AEO"],
    problem: "Customer acquisition costs were unsustainable (CPA > $150) with fragmented lead attribution across paid channels.",
    strategy: "Engineered a full-funnel Meta Ads ecosystem integrated with automated GHL lead scoring and routing workflows.",
    result: "32% lower CPA, 40% higher lead velocity.",
    tools: ["Meta Ads", "GoHighLevel", "Zapier"],
    timeline: "5 Months"
  }
];

const TESTIMONIALS = [
  {
    quote: "Vatsal Vadia reduced our CPA by 32% while increasing MQL quality. His ability to link paid performance to CRM data is exceptional.",
    author: "Marketing Director",
    company: "Metal Pro Building (US Steel Leader)",
    initials: "MP"
  },
  {
    quote: "The SEO framework Vatsal implemented changed how we dominate global search. A true expert in growth operations.",
    author: "Head of Growth",
    company: "WSI Global Network",
    initials: "WS"
  },
  {
    quote: "We scaled our organic traffic by 4x in just 10 months. Vatsal's programmatic SEO approach is the best I've seen.",
    author: "CEO & Founder",
    company: "Finlytics (FinTech SaaS)",
    initials: "FL"
  },
  {
    quote: "The GHL automation Vatsal built for us saved our sales team 20 hours a week and doubled our lead response time.",
    author: "Operations Manager",
    company: "HealthCare Plus Group",
    initials: "HC"
  }
];

const KNOWLEDGE_BASE = [
  {
    q: "How does Vatsal Vadia approach SEO growth?",
    a: "Vatsal utilizes a 'Semantic Authority' model, focusing on topical mapping, technical optimization, and high-intent programmatic content to scale organic traffic consistently."
  },
  {
    q: "What is Vatsal's experience in PPC management?",
    a: "With over $1.5M in managed ad spend, Vatsal specializes in high-ROAS Meta and Google Ads campaigns for B2B and high-ticket service industries."
  },
  {
    q: "Can Vatsal Vadia automate marketing operations?",
    a: "Yes, Vatsal is an expert in GHL and Zapier, building automated lead-to-sales pipelines that reduce manual friction and increase conversion velocity."
  }
];

const TECH_STACK = [
  { name: "Google Ads", icon: <Target size={20} /> },
  { name: "Meta Ads", icon: <Users size={20} /> },
  { name: "GA4 / GTM", icon: <BarChart3 size={20} /> },
  { name: "Ahrefs / SEMrush", icon: <Search size={20} /> },
  { name: "HubSpot", icon: <Layout size={20} /> },
  { name: "Zapier / Make", icon: <Zap size={20} /> },
  { name: "AI Automation", icon: <Bot size={20} /> },
  { name: "Shopify / WP", icon: <Globe size={20} /> },
];

const RANKINGS = [
  { keyword: 'Diamond Buyers Toronto', rank: '#1', volume: '12.5k', location: 'Canada' },
  { keyword: 'Truck Driving School USA', rank: '#1', volume: '45k', location: 'United States' },
  { keyword: 'Best Acne Treatment Sydney', rank: '#2', volume: '8.2k', location: 'Australia' },
  { keyword: 'Ceramic Coating London', rank: '#1', volume: '15.4k', location: 'United Kingdom' },
  { keyword: 'Growth Strategy Agency', rank: '#3', volume: '4.2k', location: 'Global' },
];

const EXPERIENCE = [
  {
    role: 'Digital Marketing Director / Growth Lead',
    company: 'Metal Pro Building (US Startup)',
    period: 'Jul 2025 - Jan 2026',
    details: 'Full-funnel ownership for a US-based industry leader. Built the entire marketing, sales, and automation ecosystem from the ground up, achieving a 3.5x ROAS on a $1.5M budget.'
  },
  {
    role: 'Digital Marketing Consultant',
    company: 'WSI',
    period: 'Apr 2023 - Jun 2025',
    details: 'Managed growth operations for 10+ global clients across highly competitive niches including Healthcare and Finance. Led a cross-functional team of 10+ professionals.'
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Blub World',
    period: 'Jan 2019 - Mar 2023',
    details: 'Devised content-led growth strategies that scaled organic reach by 60%. Specialized in audience segmentation that drove a 22% reduction in customer acquisition costs.'
  },
  {
    role: 'SEO Executive',
    company: 'E-Digital',
    period: 'Jun 2015 - Dec 2018',
    details: 'Foundational role focused on technical SEO audits and local search strategy for regional retail and service brands.'
  }
];

// --- COMPONENTS ---
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-slide logic for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlides = isMobile ? TESTIMONIALS.length : TESTIMONIALS.length - 1;
        return (prev + 1) % maxSlides;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="portfolio-app">
      <style>{styles}</style>
      
      {/* Navigation */}
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <header className="container nav-content">
          <a href="#" className="logo">VATSAL VADIA</a>
          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href}>{link.name}</a>
            ))}
            <a href="https://calendar.app.google/UFdTwiyhE52yscFDA" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
              Book Free Call
            </a>
          </div>
        </header>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container hero">
          <article>
            <div className="hero-badge">
              <CheckCircle2 size={16} /> Verified Performance Marketer
            </div>
            <h1>
              I Scale Brands Through <span>Data-Driven</span> Growth.
            </h1>
            <p className="hero-p">
              I’m <span className="highlight" style={{ fontWeight: 700 }}>Vatsal Vadia</span>, a performance marketer helping brands grow through SEO, paid ads, AI automation, and conversion strategy.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <a href="https://calendar.app.google/UFdTwiyhE52yscFDA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book a Free Strategy Call <ArrowRight size={20} />
              </a>
              <a href="#work" className="btn btn-outline">
                View Case Studies
              </a>
            </div>
          </article>
          <aside className="hero-image-container" style={{ border: 'none', background: 'transparent', boxShadow: 'none', overflow: 'visible' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '40px',
              overflow: 'hidden',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)'
            }}>
              <img src="/vatsal-hero-final.jpeg" alt="Vatsal Vadia - Growth Operations & Performance Marketing Expert" style={{ opacity: 1, scale: '1.05' }} />
            </div>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
              zIndex: -1,
              filter: 'blur(40px)'
            }}></div>
          </aside>
        </section>

        {/* Stats Section */}
        <section className="container">
          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
                <p className="stat-desc">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="tech-section">
          <div className="container">
            <div className="tech-grid">
              {TECH_STACK.map((tech, i) => (
                <div key={i} className="tech-pill">
                  <span className="highlight">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="section">
          <div className="container">
            <header className="section-header">
              <span className="section-tag">Featured Work</span>
              <h2>Proven Case Studies</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                Real-world execution of growth strategies that deliver measurable ROI for B2B and SaaS brands.
              </p>
            </header>
            <div className="featured-grid">
              {FEATURED_WORK.map((work, i) => (
                <article key={i} className="work-card">
                  <div className="work-img">
                    <img src={work.image} alt={`${work.title} - Case Study by Vatsal Vadia`} />
                    <div className="work-overlay"></div>
                    <div className="work-tag-container">
                      {work.tags.map(tag => <span key={tag} className="work-tag">{tag}</span>)}
                    </div>
                  </div>
                  <div className="work-content">
                    <h3 className="work-title">{work.title}</h3>
                    <p className="work-desc"><strong>Challenge:</strong> {work.problem}</p>
                    <p className="work-desc"><strong>Strategy:</strong> {work.strategy}</p>
                    <div className="work-details">
                      <div>
                        <p className="work-detail-label">Metric Reached</p>
                        <p className="work-detail-val highlight">{work.result}</p>
                      </div>
                      <div>
                        <p className="work-detail-label">Timeline</p>
                        <p className="work-detail-val">{work.timeline}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Structured Knowledge (AEO/GEO Section) */}
        <section className="section" style={{ background: '#080808' }}>
          <div className="container">
            <header className="section-header">
              <span className="section-tag">Expert Insights</span>
              <h2>Growth Knowledge Base</h2>
              <p style={{ color: 'var(--text-muted)' }}>Direct answers to common growth and performance marketing inquiries.</p>
            </header>
            <div className="knowledge-grid">
              {KNOWLEDGE_BASE.map((item, i) => (
                <article key={i} className="kb-card">
                  <h3 className="kb-question">{item.q}</h3>
                  <p className="kb-answer">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <header className="section-header">
              <span className="section-tag">Trust</span>
              <h2>What Clients Say</h2>
            </header>
            <div className="testimonial-slider">
              <div className="testimonial-viewport">
                <div 
                  className="testimonial-track"
                  style={{ transform: `translateX(calc(-${currentSlide} * (${isMobile ? '100% + 2rem' : '50% + 1rem'})))` }}
                >
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="testimonial-slide">
                      <article className="testimonial-card">
                        <div>
                          <MessageSquare className="highlight" size={32} style={{ marginBottom: '2rem', opacity: 0.3 }} />
                          <p className="testimonial-quote">"{t.quote}"</p>
                        </div>
                        <footer className="testimonial-author">
                          <div className="author-avatar">{t.initials}</div>
                          <div className="author-info">
                            <h4>{t.author}</h4>
                            <p>{t.company}</p>
                          </div>
                        </footer>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Dashboard */}
        <section id="results" className="section">
          <div className="container">
            <header className="section-header">
              <span className="section-tag">Results</span>
              <h2>Global Search Dominance</h2>
              <p style={{ color: 'var(--text-muted)' }}>Consistent #1 placements for high-competition keywords in global markets.</p>
            </header>
            <div className="dashboard-container">
              <table>
                <thead>
                  <tr>
                    <th>Keyword Cluster</th>
                    <th>Volume</th>
                    <th>Market</th>
                    <th>Live Status</th>
                  </tr>
                </thead>
                <tbody>
                  {RANKINGS.map((item, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 800 }}>{item.keyword}</td>
                      <td>{item.volume}</td>
                      <td>{item.location}</td>
                      <td><span className="rank-badge">{item.rank}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* About / Journey */}
        <section id="about" className="section">
          <div className="container">
            <header className="section-header">
              <span className="section-tag">The Strategist</span>
              <h2>9+ Years of Growth Ops</h2>
            </header>
            <div className="journey-list">
              {EXPERIENCE.map((exp, i) => (
                <article key={i} className="journey-item">
                  <div>
                    <span className="journey-date">{exp.period}</span>
                    <p className="journey-company">{exp.company}</p>
                  </div>
                  <div>
                    <h3 className="journey-role">{exp.role}</h3>
                    <p className="journey-desc">{exp.details}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="section">
          <div className="container">
            <div style={{ background: 'linear-gradient(135deg, #111, #000)', padding: '6rem 4rem', borderRadius: '48px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <span className="section-tag">Next Step</span>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Ready to scale your business?</h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                Book a strategy call to discuss your growth bottlenecks and build a high-conversion roadmap.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <a href="https://calendar.app.google/UFdTwiyhE52yscFDA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book a Free Strategy Call
                </a>
                <a href="#work" className="btn btn-outline">
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Actions */}
      <aside style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 10000
      }}>
        <a 
          href="https://wa.me/918200290416"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
          aria-label="Contact Vatsal on WhatsApp"
          style={{
            background: '#25D366',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s'
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a 
          href="tel:+918200290416"
          className="floating-btn"
          aria-label="Call Vatsal Vadia"
          style={{
            background: 'var(--accent-primary)',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
            transition: 'all 0.3s'
          }}
        >
          <Phone size={28} />
        </a>
      </aside>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <span className="footer-logo">VATSAL VADIA</span>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Growth Operations & Performance Marketer. <br />
                Turning complex search and paid data into <br /> sustainable revenue engines.
              </p>
            </div>
            <nav className="footer-links" aria-label="Footer Navigation">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#work">Featured Work</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#about">About Me</a></li>
              </ul>
            </nav>
            <nav className="footer-links" aria-label="Social Links">
              <h4>Social</h4>
              <ul>
                <li><a href="https://linkedin.com/in/vatsal-vadia" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:vatsalvadiaofficial@gmail.com">Email</a></li>
                <li><a href="https://wa.me/918200290416" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </nav>
            <div className="footer-links">
              <h4>Quick Connect</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                <MapPin size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} className="highlight" /> 
                Remote / Global Presence
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                <Clock size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} className="highlight" /> 
                IST (GMT+5:30)
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Vatsal Vadia. All rights reserved.</p>
            <nav style={{ display: 'flex', gap: '2rem' }} aria-label="Legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </nav>
          </div>
        </div>
      </footer>
      <style>{`
        .floating-btn:hover {
          transform: scale(1.1) translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default App;
