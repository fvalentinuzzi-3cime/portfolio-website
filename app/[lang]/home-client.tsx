"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { sendGAEvent } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

// Animation variants for smooth fade-ins
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function HomeClient({ dict }: { dict: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for Pop-ups
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  // This listens for scroll events and handles the pop-up/cookie logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Show promo popup after 4 seconds IF they haven't closed it before
    const hasSeenPromo = localStorage.getItem("seen3000MilesPromo");
    if (!hasSeenPromo) {
      const timer = setTimeout(() => setShowPromoPopup(true), 4000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    }

    // Check for cookie consent
    const hasCookieConsent = localStorage.getItem("cookieConsent");
    if (!hasCookieConsent) {
      setShowCookieBanner(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  if (typeof window !== "undefined") {
    if (isMenuOpen || showPromoPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  const closePromo = () => {
    setShowPromoPopup(false);
    localStorage.setItem("seen3000MilesPromo", "true");
  };

  const acceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem("cookieConsent", "true");
    
    // Send the v2 signals directly to Google
    if (typeof window !== 'undefined') {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
  };

  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 relative ${inter.className}`}>
      
      {/* --- 3000 MILES FILM POP-UP WITH VERTICAL POSTER --- */}
      <AnimatePresence>
        {showPromoPopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-stone-900/60 backdrop-blur-sm overflow-y-auto"
          >
            <div className="bg-stone-800 text-[#E9E8E6] p-8 md:p-12 max-w-3xl w-full relative shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
              <button onClick={closePromo} className="absolute top-5 right-6 text-stone-400 hover:text-white transition-colors z-10">
                <span className="text-[10px] uppercase tracking-widest font-bold">{dict.promo?.close || "Close"}</span>
              </button>
              
              {/* 🚨 POP-UP VERTICAL POSTER (Left Column on Desktop) */}
              <div className="md:col-span-5 flex justify-center mt-4 md:mt-0">
                <div className="w-48 sm:w-56 md:w-full aspect-[2/3] bg-stone-900 relative overflow-hidden shadow-xl border border-stone-700">
                  <Image 
                    src="/3000-miles-poster.jpg" 
                    alt="3000 Miles Official Film Poster" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>

              {/* Pop-up Text & CTAs (Right Column on Desktop) */}
              <div className="md:col-span-7 text-center md:text-left">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-3 block">
                  Currently in Production • Feature Documentary
                </span>
                <h3 className="text-3xl md:text-4xl font-light mb-4">3000 Miles</h3>
                <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed mb-8">
                  I am currently producing <strong>3000 Miles</strong>—the raw, emotional story of Jason &amp; Nikki Doyle running across the US on foot to find purpose and defy every challenge. Subscribe below for exclusive behind-the-scenes access and premiere updates.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                  {/* OPTION 1: MailerLite / Waitlist Link */}
                  <a 
                    href="https://www.studio3cime.com/3000-miles" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: '3000_miles_subscribe' })}
                    className="w-full sm:w-auto text-center px-7 py-3.5 bg-[#E9E8E6] text-stone-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-300 transition-colors"
                  >
                    Subscribe / Join Waitlist
                  </a>

                  {/* OPTION 2: Contact Me */}
                  <a 
                    href="mailto:fvalentinuzzi@studio3cime.com?subject=3000%20Miles%20Film%20Inquiry" 
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email_3000_miles' })}
                    className="w-full sm:w-auto text-center px-7 py-3.5 border border-[#E9E8E6]/40 text-[#E9E8E6] text-[10px] font-bold uppercase tracking-[0.2em] hover:border-[#E9E8E6] hover:bg-stone-700/50 transition-colors"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- GDPR COOKIE BANNER --- */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 w-full z-[150] bg-[#E9E8E6] border-t border-stone-300 p-6 md:px-12 md:py-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-[10px] text-stone-600 uppercase tracking-widest leading-relaxed text-center md:text-left">
              {dict.cookies.text} <Link href="/privacy" className="font-bold border-b border-stone-600 hover:text-stone-800 transition-colors">{dict.cookies.privacyLink}</Link>.
            </p>
            <div className="flex items-center gap-4 shrink-0 justify-center md:justify-end">
              <button onClick={acceptCookies} className="px-8 py-3 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] text-[9px] font-bold hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors">
                {dict.cookies.acceptBtn}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#E9E8E6] flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center py-10 px-8">
              <span className="text-lg uppercase tracking-widest text-stone-800 font-light">
                Francesco Valentinuzzi
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 group shrink-0"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800 font-bold">{dict.nav.closeMenu}</span>
                <span className="w-3 h-3 rounded-full border border-stone-800"></span>
              </button>
            </div>

            <div className="flex-1 flex flex-col px-8 pb-10">
              <ul className="flex flex-col gap-5 mt-4 mb-12">
                <li><Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.15em] text-stone-800 hover:text-stone-500 transition-colors">{dict.nav.portfolio}</Link></li>
                <li><Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.15em] text-stone-800 hover:text-stone-500 transition-colors">{dict.nav.services}</Link></li>
                <li><Link href="/experiences" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.15em] text-stone-800 hover:text-stone-500 transition-colors">{dict.nav.experiences}</Link></li>
                <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.15em] text-stone-800 hover:text-stone-500 transition-colors">{dict.nav.about}</Link></li>
              </ul>

              <div className="w-full aspect-[3/2] bg-stone-300 relative overflow-hidden mb-8">
                 <Image src="/paris-love.jpeg" alt="Tour Eiffel at night with text love each other above the Seine river" fill className="object-cover" />
              </div>
              
              <div className="flex justify-end mb-12">
                <p className="text-sm text-stone-800 font-light text-right max-w-[260px] leading-relaxed">
                  {dict.menu.description}
                </p>
              </div>
              
              <div className="mt-auto flex flex-col gap-6">
                <a
                  href="mailto:fvalentinuzzi@studio3cime.com?subject=Website%20Inquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-4 border border-stone-800 text-stone-800 text-center font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500"
                >
                  {dict.contact.sendEmailBtn}
                </a>

                <div className="flex flex-wrap justify-center items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500">{dict.contact.reachOutText}</span>
                  <a 
                    href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20connect." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    {dict.contact.whatsappBtn}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- STANDARD NAVBAR --- */}
      <nav className={`grid grid-cols-3 items-center px-6 md:px-12 lg:px-24 fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? "py-4 md:py-6 bg-[#E9E8E6]/95 backdrop-blur-md shadow-sm" : "py-6 md:py-10 bg-transparent"
      }`}>
        
        {/* Left Side: Mobile Switcher & Desktop Links */}
        <div className="justify-self-start flex items-center gap-8 md:gap-10">
          {/* MOBILE ONLY SWITCHER */}
          <div className={`md:hidden transition-all duration-700 ${!isScrolled ? "brightness-0 invert opacity-90" : ""}`}>
            <LanguageSwitcher />
          </div>

          <ul className={`hidden md:flex flex-wrap gap-6 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? "text-stone-500" : "text-[#E9E8E6]/90"}`}>
            <li><Link href="/portfolio" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>{dict.nav.portfolio}</Link></li>
            <li><Link href="/services" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>{dict.nav.services}</Link></li>
            <li><Link href="/experiences" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>{dict.nav.experiences}</Link></li>
          </ul>
        </div>
        
        {/* Center: Logo */}
        <div className="justify-self-center w-28 h-28 md:w-[180px] md:h-[180px] relative flex items-center justify-center">
          <Link href="/" className="w-full h-full relative block hover:scale-105 transition-transform duration-500">
            <Image 
              src="/portfolio_logo.png" 
              alt="Artist Logo" 
              fill 
              className={`object-contain transition-all duration-700 ${!isScrolled ? "brightness-0 invert" : ""}`}
              priority 
            />
          </Link>
        </div>
        
        {/* Right Side: Desktop About Link, Desktop Switcher, & Mobile Menu Toggle */}
        <div className="justify-self-end flex items-center gap-6 md:gap-8">
          <ul className={`hidden md:flex flex-wrap gap-6 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? "text-stone-500" : "text-[#E9E8E6]/90"}`}>
            <li><Link href="/about" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>{dict.nav.about}</Link></li>
          </ul>

          {/* DESKTOP ONLY SWITCHER */}
          <div className={`hidden md:block transition-all duration-700 ${!isScrolled ? "brightness-0 invert opacity-90" : ""}`}>
            <LanguageSwitcher />
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`flex md:hidden items-center gap-2 group shrink-0 transition-colors duration-500 ${isScrolled ? "text-stone-800" : "text-[#E9E8E6]"}`}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold">{dict.nav.menu}</span>
            <span className={`w-3 h-3 rounded-full border transition-colors duration-500 ${isScrolled ? "border-stone-800" : "border-[#E9E8E6]"}`}></span>
          </button>
        </div>
      </nav>

      <main>
        
        {/* --- CINEMATIC HERO SECTION --- */}
        <section className="relative w-full min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden mb-24 md:mb-40">
          <Image 
            src="/hero.jpeg" 
            alt="Venice at sunset with gondolas in the foreground" 
            fill 
            priority 
            quality={100}
            className="object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/10 to-stone-900/70" />
          <div className="relative z-10 text-center px-6 mt-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-light text-[#E9E8E6] tracking-wide mb-6"
            >
            </motion.h1>
            
            {/* MULTI-DISCIPLINARY SUBTITLE */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="text-[9px] md:text-base font-bold uppercase tracking-[0.25em] text-[#E9E8E6]/90 max-w-4xl mx-auto leading-loose"
            >
              Photographer • Film Director • Content Creator • Digital Strategist
            </motion.p>
            
            {/* HERO CTA BUTTONS */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
              className="flex flex-wrap justify-center items-center gap-6 mt-8"
            >
              <a 
                href="mailto:fvalentinuzzi@studio3cime.com?subject=Website%20Inquiry" 
                onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9E8E6] border-b border-[#E9E8E6]/50 pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors"
              >
                {dict.promo.emailBtn}
              </a>
              <span className="text-[#E9E8E6]/50 font-light text-xs">/</span>
              <a 
                href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20connect%20about%20a%20project." 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9E8E6] border-b border-[#E9E8E6]/50 pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors"
              >
                {dict.promo.whatsappBtn}
              </a>
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="max-w-2xl mx-auto px-6 text-center mb-32 md:mb-40">
          <h1 className="text-3xl md:text-5xl mb-8 font-light text-stone-800 leading-tight">{dict.home.greeting}</h1>
          <div className="text-stone-600 leading-relaxed font-light text-sm md:text-base space-y-4">
            <p>{dict.home.aboutP1}</p>
            <p>{dict.home.aboutP2}</p>
          </div>
        </section>

        {/* --- DIGITAL IMPACT, EDITING & STRATEGY SECTION --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 border-y border-stone-300 py-24 md:py-32"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">
              Beyond Traditional Production
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-stone-800 mb-6 leading-tight">
              Editing, Viral Workflows & Digital Ecosystems
            </h2>
            <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
              Great visuals are only half the equation. I combine cinema-grade production and high-retention editing with data-driven digital strategy building platforms, ad funnels, and viral content systems that turn views into measurable growth.
            </p>
          </div>

          {/* 1. KEY METRICS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-stone-300 pb-16 text-center">
            <div>
              <span className="text-4xl md:text-6xl font-light text-stone-800 block mb-2">1M+</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">Organic Views on Single Reel/Short</span>
            </div>
            <div>
              <span className="text-4xl md:text-6xl font-light text-stone-800 block mb-2">360°</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">Meta & Google Ads Funnels</span>
            </div>
            <div>
              <span className="text-4xl md:text-6xl font-light text-stone-800 block mb-2">SaaS</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">Founder of ELEVI Streaming Platform</span>
            </div>
            <div>
              <span className="text-4xl md:text-6xl font-light text-stone-800 block mb-2">B2B</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-500">NGO & Travel Brand Workflows</span>
            </div>
          </div>

          {/* 2. 1M+ VIRAL SHORT & 4 PILLARS OF DIGITAL STRATEGY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            
            {/* Left Column: 1M+ Views YouTube Short (oZDwY7HKc24) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[340px] aspect-[9/16] bg-stone-900 relative overflow-hidden shadow-xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/oZDwY7HKc24?rel=0" 
                  title="1M+ Views Viral Edit"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mt-4 text-center">
                High-Retention Editing • 1,000,000+ Views on YouTube
              </p>
            </div>

            {/* Right Column: The 4 Pillars of Your Digital Expertise */}
            <div className="lg:col-span-7 space-y-10 text-left">
              
              <div className="border-l-2 border-stone-800 pl-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">01 / Post-Production & Pacing</span>
                <h3 className="text-2xl font-light text-stone-800 mb-2">High-Retention Video Editing</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Crafting narrative arcs, sound design, and visual hooks engineered for modern algorithms. My edits have organically surpassed 1 million views on YouTube, turning raw footage into high-performing digital assets.
                </p>
              </div>

              <div className="border-l-2 border-stone-800 pl-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">02 / Web & Platform Architecture</span>
                <h3 className="text-2xl font-light text-stone-800 mb-2">Creator of ELEVI Streaming & Custom Web</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed mb-3">
                  I don&apos;t just create content; I build the platforms that host it. I architected and launched <strong>ELEVI</strong>, a dedicated film streaming platform and app ecosystem, alongside custom, SEO-optimized web architectures for brands.
                </p>
                <a href="https://www.elevi.film" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-800 border-b border-stone-800 pb-0.5 hover:text-stone-500 transition-colors">
                  Explore ELEVI Platform &rarr;
                </a>
              </div>

              <div className="border-l-2 border-stone-800 pl-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">03 / Viral Workflows for Travel & NGOs</span>
                <h3 className="text-2xl font-light text-stone-800 mb-2">Content Systems & Brand Awareness</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Partnering with travel companies and NGOs to design repeatable content workflows. From concept to final cut, I help organizations scale their organic reach, amplify their mission, and build engaged communities.
                </p>
              </div>

              <div className="border-l-2 border-stone-800 pl-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">04 / Paid Acquisition & Tracking</span>
                <h3 className="text-2xl font-light text-stone-800 mb-2">Meta & Google Ads Infrastructure</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Bridging creative production with performance marketing. I deploy full-funnel ad campaigns across Meta and Google, complete with custom pixel tracking, conversion APIs, and analytics to ensure every piece of content drives ROI.
                </p>
              </div>

            </div>
          </div>

          {/* 3. FEATURED FILM PRODUCTIONS & DOCUMENTARY EDITING (3 Horizontal Films) */}
          <div className="border-t border-stone-300 pt-20">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-3 block">
                Cinema & Impact Storytelling
              </span>
              <h3 className="text-2xl md:text-4xl font-light text-stone-800">
                Selected Film Productions & Documentary Edits
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              
              {/* Film 1: Produced Film Trailer */}
              <div className="flex flex-col">
                <div className="w-full aspect-video bg-stone-900 relative overflow-hidden shadow-md mb-5">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/z350gRuA81M?rel=0" 
                    title="Official Film Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">
                  Producer • Photographer
                </span>
                <h4 className="text-xl font-light text-stone-800 mb-2">Ephemeral</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  An ice climbing documentary featuring Jeff Mercier and Will Gadd. A film in collaboration with Rab, LaSportiva, HDry, and Icelandic Mountain Guides. 
                </p>
              </div>

              {/* Film 2: NGO Paws Patrol LV */}
              <div className="flex flex-col">
                <div className="w-full aspect-video bg-stone-900 relative overflow-hidden shadow-md mb-5">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/FfcdoiBjtQI?rel=0" 
                    title="Paws Patrol LV NGO Documentary"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">
                  Producer • Director • Editor
                </span>
                <h4 className="text-xl font-light text-stone-800 mb-2">DUMPED (NGO Impact)</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  A raw story about the real life behind animal rescue team Paws Patrol LV in Las Vegas. Winner of best short documentary 2026 - Rock The Shorts
                </p>
              </div>

              {/* Film 3: Producer, Filmmaker & Editor */}
              <div className="flex flex-col">
                <div className="w-full aspect-video bg-stone-900 relative overflow-hidden shadow-md mb-5">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/1rB4CqfJLKE?rel=0" 
                    title="Documentary Production & Edit"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">
                  Producer • Filmmaker • Editor
                </span>
                <h4 className="text-xl font-light text-stone-800 mb-2">Tipa Tipa</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  A film following one of the most famous trail runners in the world, Sylvaine Cussot, Tipa Tipa is an emotional story about the Reunion Island ultramarathon: La Diagonale des Fous.
                </p>
              </div>

            </div>
          </div>

        </motion.section>

        {/* --- PORTFOLIO PREVIEW --- */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-4 font-light text-stone-800">{dict.portfolio.title}</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">{dict.portfolio.subtitle}</p>
          </div>
          
          {/* 3rd Vertical Picture for Weddings (Centered on top) */}
          <div className="flex justify-center mb-16 md:mb-24">
            <Link href="/portfolio" className="group cursor-pointer block w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-center">
              <div className="relative aspect-[3/4] bg-stone-300 mb-6 overflow-hidden transition-transform duration-700 group-hover:scale-[1.02] shadow-sm">
                <Image src="/weddings/smiling-bride-wearing-wedding-dress.jpeg" alt="Professional photographer capturing a smiling bride in a wedding dress in Italy" fill className="object-cover" />
              </div>
              <h3 className="text-3xl mb-2 font-light text-stone-800">
                Weddings
              </h3>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <Link href="/portfolio" className="group cursor-pointer block">
              <div className="relative aspect-[3/4] bg-stone-300 mb-8 overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                <Image src="/Alexa 11 Large.jpeg" alt="Wedding" fill className="object-cover" />
              </div>
              <h3 className="text-3xl mb-3 font-light text-stone-800">{dict.portfolio.elopements}</h3>
            </Link>
            <Link href="/portfolio" className="group cursor-pointer block md:mt-32">
              <div className="relative aspect-[3/4] bg-stone-300 mb-8 overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                <Image src="/erewhon.jpeg" alt="Commercial" fill className="object-cover" />
              </div>
              <h3 className="text-3xl mb-3 font-light text-stone-800">{dict.portfolio.commercial}</h3>
            </Link>
          </div>

        </section>

        {/* --- SERVICES --- */}
        <section id="services" className="max-w-6xl mx-auto px-6 mb-32 md:mb-48 border-t border-stone-300 pt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-stone-800">{dict.services.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left mb-24">
            <div>
              <div className="w-full h-64 md:h-80 bg-stone-300 mb-8 relative overflow-hidden">
                 <Image src="/richard.jpeg" alt="Detailed picture of guy focus wearing headset" fill className="object-cover" />
              </div>
              <h3 className="text-2xl mb-4 font-light text-stone-800">{dict.services.photoTitle}</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {dict.services.photoDesc}
              </p>
            </div>
            <div>
              <div className="w-full h-64 md:h-80 bg-stone-300 mb-8 relative overflow-hidden">
                <Image src="/filmmaking-2-Large.jpeg" alt="Filmmaking Services" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <h3 className="text-2xl mb-4 font-light text-stone-800">{dict.services.filmTitle}</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {dict.services.filmDesc}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* --- ROW 1 --- */}
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm">
               <Image src="/dolomites.jpeg" alt="Dolomites Landscape" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            {/* Middle image pushed down slightly for an editorial staggered look */}
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm md:mt-16">
               <Image src="/redhair-girl.jpeg" alt="Editorial Portrait" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm">
               <Image src="/Tuscany.jpeg" alt="Tuscany Landscape" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>

            {/* --- ROW 2 --- */}
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm">
               <Image src="/antelope-canyon.jpeg" alt="Antelope Canyon" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            {/* Keeping the md:mt-16 here continues the staggered layout down the page */}
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm md:mt-16">
               <Image src="/climbing-in-colorado.jpeg" alt="Climber at Garden of the Gods" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm">
               <Image src="/horses-iceland.jpeg" alt="Horses in Iceland playing" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* --- 3000 MILES FEATURE FILM BANNER WITH VERTICAL POSTER --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-5xl mx-auto px-6 mb-32 md:mb-48"
        >
          <div className="bg-stone-800 text-[#E9E8E6] p-8 md:p-16 shadow-lg relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-500 via-stone-300 to-stone-500 opacity-20"></div>
            
            {/* 🚨 BANNER VERTICAL POSTER (Left Column on Desktop) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 md:w-full aspect-[2/3] bg-stone-900 relative overflow-hidden shadow-2xl border border-stone-700">
                <Image 
                  src="/3000-miles-official-poster.jpeg" 
                  alt="3000 Miles Official Film Poster" 
                  fill 
                  className="object-cover hover:scale-[1.02] transition-transform duration-700" 
                />
              </div>
            </div>

            {/* Banner Text & CTA (Right Column on Desktop) */}
            <div className="md:col-span-7 text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">
                New Film Production • Studio 3 Cime
              </span>
              <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
                3000 Miles
              </h2>
              
              <p className="text-sm md:text-base text-stone-300 font-light leading-relaxed mb-10">
                The extraordinary, emotional true story of <strong className="text-white font-medium">Jason &amp; Nikki Doyle</strong> running across the United States on foot. An inspirational, unfiltered journey to find purpose and defy every physical and mental challenge along the way.
              </p>
              
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
                <a 
                  href="https://www.studio3cime.com/3000-miles" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: '3000_miles_waitlist' })}
                  className="px-10 py-4 bg-[#E9E8E6] text-stone-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-300 transition-colors"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>

          </div>
        </motion.section>

        {/* --- CONTACT (No Form) --- */}
        <section id="contact" className="bg-[#E2E1DF] py-32 md:py-48 px-6 border-t border-stone-300">
          <div className="max-w-xl mx-auto text-center">
            
            <h2 className="text-4xl md:text-5xl mb-6 font-light text-stone-800">{dict.contact.title}</h2>
            <p className="text-stone-600 mb-16 font-light text-sm">
              {dict.contact.description}
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="mailto:fvalentinuzzi@studio3cime.com?subject=Website%20Inquiry" 
                onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                className="inline-block px-12 py-4 border border-stone-800 text-stone-800 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500"
              >
                {dict.contact.sendEmailBtn}
              </a>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500">{dict.contact.reachOutText}</span>
                <a 
                  href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20connect%20about%20a%20project." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                >
                  {dict.contact.whatsappBtn}
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] font-bold tracking-widest uppercase">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left mb-16">
          
          <div className="flex flex-col gap-4">
            <span className="text-stone-800 mb-2">{dict.footer.explore}</span>
            <Link href="/about" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">{dict.nav.about}</Link>
            <Link href="/portfolio" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">{dict.nav.portfolio}</Link>
            <Link href="/services" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">{dict.nav.services}</Link>
            <Link href="/experiences" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">{dict.nav.experiences}</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-stone-800 mb-2">{dict.footer.connect}</span>
            <a href="https://instagram.com/francesco_valentinuzzi" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">IG: francesco_valentinuzzi</a>
            <a href="https://instagram.com/studio3cime" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">IG: studio3cime</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-stone-800 mb-2">{dict.footer.legal}</span>
            <Link href="/privacy" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">{dict.footer.privacy}</Link>
            <Link href="/terms" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">{dict.footer.terms}</Link>
          </div>
          
          <div className="flex flex-col gap-4 md:text-right">
             <span className="text-stone-800 mb-2">{dict.footer.studio}</span>
             <span>{dict.footer.production}</span>
             <span>{dict.footer.copyright}</span>
          </div>

        </div>

        {/* --- SEO LOCATIONS BLOCK --- */}
        <div className="border-t border-stone-300 pt-12 flex flex-col gap-4 text-center">
          <span className="text-stone-800">{dict.footer.destinationsTitle}</span>
          <span className="text-[8px] md:text-[9px] text-stone-400 leading-loose max-w-5xl mx-auto">
            {dict.footer.destinationsDesc}
          </span>
        </div>
      </footer>
      
    </div>
  );
}