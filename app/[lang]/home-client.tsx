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
    const hasSeenPromo = localStorage.getItem("seenPromo");
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
    localStorage.setItem("seenPromo", "true");
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
      
      {/* --- MINIMAL PROMO POP-UP --- */}
      <AnimatePresence>
        {showPromoPopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-sm"
          >
            <div className="bg-stone-800 text-[#E9E8E6] p-10 md:p-16 max-w-lg w-full text-center relative shadow-2xl">
              <button onClick={closePromo} className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors">
                <span className="text-[10px] uppercase tracking-widest font-bold">{dict.promo.close}</span>
              </button>
              
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block mt-4">{dict.promo.eyebrow}</span>
              <h3 className="text-3xl font-light mb-4">{dict.promo.popupTitle}</h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed mb-8">
                {dict.promo.popupDesc1} <strong>{dict.promo.popupDiscount}</strong> {dict.promo.popupDesc2}
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6">
                <a 
                  href="mailto:fvalentinuzzi@studio3cime.com?subject=2026%20Editorial%20Rate%20Inquiry" 
                  onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9E8E6] border-b border-[#E9E8E6] pb-1 hover:text-stone-400 hover:border-stone-400 transition-colors"
                >
                  {dict.promo.emailBtn}
                </a>
                <span className="text-stone-600 font-light">/</span>
                <a 
                  href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20claim%20the%2050%25%20Editorial%20Portfolio%20Rate." 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9E8E6] border-b border-[#E9E8E6] pb-1 hover:text-stone-400 hover:border-stone-400 transition-colors"
                >
                  {dict.promo.whatsappBtn}
                </a>
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
            alt="Cinematic destination wedding in the Dolomites" 
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
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="text-[9px] md:text-xl font-bold uppercase tracking-[0.3em] text-[#E9E8E6]/90"
            >
              {dict.home.heroSubtitle}
            </motion.p>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="max-w-2xl mx-auto px-6 text-center mb-32 md:mb-48">
          <h1 className="text-3xl md:text-5xl mb-8 font-light text-stone-800 leading-tight">{dict.home.greeting}</h1>
          <div className="text-stone-600 leading-relaxed font-light text-sm md:text-base space-y-4">
            <p>{dict.home.aboutP1}</p>
            <p>{dict.home.aboutP2}</p>
          </div>
        </section>

        {/* --- PORTFOLIO PREVIEW --- */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-4 font-light text-stone-800">{dict.portfolio.title}</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">{dict.portfolio.subtitle}</p>
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

        {/* --- 2026 EDITORIAL RATE BANNER --- */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-5xl mx-auto px-6 mb-32 md:mb-48"
        >
          <div className="bg-stone-800 text-[#E9E8E6] p-12 md:p-20 text-center shadow-lg relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-500 via-stone-300 to-stone-500 opacity-20"></div>
            
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-6 block">{dict.promo.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">{dict.promo.bannerTitle}</h2>
            
            <p className="text-sm md:text-base text-stone-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              {dict.promo.bannerDesc1} <strong className="text-white font-medium">{dict.promo.bannerDiscount}</strong> {dict.promo.bannerDesc2}
              <br /><br />
              {dict.promo.bannerDesc3} <strong className="text-white font-medium">{dict.promo.bannerDate}</strong>.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
              <a 
                href="mailto:fvalentinuzzi@studio3cime.com?subject=2026%20Editorial%20Rate%20Inquiry" 
                onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9E8E6] hover:text-stone-300 transition-colors border-b-2 border-[#E9E8E6] hover:border-stone-300 pb-1"
              >
                {dict.promo.emailBtn}
              </a>
              <span className="text-stone-600 font-light">/</span>
              <a 
                href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20claim%20the%2050%25%20Editorial%20Portfolio%20Rate." 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9E8E6] hover:text-stone-300 transition-colors border-b-2 border-[#E9E8E6] hover:border-stone-300 pb-1"
              >
                {dict.promo.whatsappBtn}
              </a>
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