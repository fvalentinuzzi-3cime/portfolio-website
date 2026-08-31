"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

// Animation variants for smooth fade-ins
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // This listens for when the user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (typeof window !== "undefined") {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 relative ${inter.className}`}>
      
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
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800 font-bold">Close Menu</span>
                <span className="w-3 h-3 rounded-full border border-stone-800"></span>
              </button>
            </div>

            <div className="flex-1 flex flex-col px-8 pb-10">
              <ul className="flex flex-col gap-5 mt-4 mb-12">
                {["Portfolio", "Services","Experiences", "About"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Portfolio" ? "/portfolio" : `/${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-bold uppercase tracking-[0.15em] text-stone-800 hover:text-stone-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="w-full aspect-[3/2] bg-stone-300 relative overflow-hidden mb-8">
                 <Image src="/redhair-girl.jpeg" alt="Redhair girl black and white" fill className="object-cover" />
              </div>
              
              <div className="flex justify-end mb-12">
                <p className="text-sm text-stone-800 font-light text-right max-w-[260px] leading-relaxed">
                  Crafting cinematic, authentic narratives for destination weddings, intimate elopements, and commercial brand campaigns.
                </p>
              </div>
              
              <div className="mt-auto flex flex-col gap-6">
                <a
                  href="mailto:fvalentinuzzi@studio3cime.com?subject=Website%20Inquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-4 border border-stone-800 text-stone-800 text-center font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500"
                >
                  Send an Email
                </a>

                <div className="flex flex-wrap justify-center items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Or reach out via</span>
                  <a 
                    href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20connect." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    WhatsApp
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
        
        <div className="justify-self-start">
          <ul className={`hidden md:flex flex-wrap gap-6 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? "text-stone-500" : "text-[#E9E8E6]/90"}`}>
            <li><Link href="/portfolio" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>Portfolio</Link></li>
            <li><Link href="/services" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>Services</Link></li>
            <li><Link href="/experiences" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>Experiences</Link></li>
          </ul>
        </div>
        
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
        
        <div className="justify-self-end flex items-center gap-6">
          <ul className={`hidden md:flex flex-wrap gap-6 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? "text-stone-500" : "text-[#E9E8E6]/90"}`}>
            <li><Link href="/about" className={`transition-all duration-500 hover:underline hover:underline-offset-8 decoration-2 ${isScrolled ? "hover:text-stone-800" : "hover:text-white"}`}>About</Link></li>
          </ul>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`flex md:hidden items-center gap-2 group shrink-0 transition-colors duration-500 ${isScrolled ? "text-stone-800" : "text-[#E9E8E6]"}`}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold">Menu</span>
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
              Cinematic Destination Photographer & Film Director
            </motion.p>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="max-w-2xl mx-auto px-6 text-center mb-32 md:mb-48">
          <h1 className="text-3xl md:text-5xl mb-8 font-light text-stone-800 leading-tight">Hi, I'm Francesco</h1>
          <div className="text-stone-600 leading-relaxed font-light text-sm md:text-base space-y-4">
            <p>
              I am an award-winning photographer, film director, and local guide based in Northern Italy.<br />
              I specialize in crafting cinematic, authentic narratives for destination weddings, intimate elopements, and commercial brand campaigns.
            </p>
            <p>
              Whether you envision a rugged mountainscape, a sun-drenched beach shoot, or an elegant historical location, I help you design your day. Leveraging my deep local knowledge, I assist couples and brands in discovering unique, off-the-beaten-path spots and securing the region's most breathtaking backdrops for your story.
            </p>
          </div>
        </section>

        {/* --- PORTFOLIO PREVIEW --- */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-4 font-light text-stone-800">Selected Works</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Visuals for life and business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <Link href="/portfolio" className="group cursor-pointer block">
              <div className="relative aspect-[3/4] bg-stone-300 mb-8 overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                <Image src="/Alexa 11 Large.jpeg" alt="Wedding" fill className="object-cover" />
              </div>
              <h3 className="text-3xl mb-3 font-light text-stone-800">Elopements & Proposals</h3>
            </Link>
            <Link href="/portfolio" className="group cursor-pointer block md:mt-32">
              <div className="relative aspect-[3/4] bg-stone-300 mb-8 overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                <Image src="/erewhon.jpeg" alt="Commercial" fill className="object-cover" />
              </div>
              <h3 className="text-3xl mb-3 font-light text-stone-800">Commercial Films & Photo</h3>
            </Link>
          </div>
        </section>

        {/* --- SERVICES --- */}
        <section id="services" className="max-w-6xl mx-auto px-6 mb-32 md:mb-48 border-t border-stone-300 pt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-stone-800">Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left mb-24">
            <div>
              <div className="w-full h-64 md:h-80 bg-stone-300 mb-8 relative overflow-hidden">
                 <Image src="/richard.jpeg" alt="Detailed picture of guy focus wearing headset" fill className="object-cover" />
              </div>
              <h3 className="text-2xl mb-4 font-light text-stone-800">Photography</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                From intimate sunrise proposals in the Dolomites to high-end commercial brand campaigns across Italy. My photography blends an editorial aesthetic with raw, authentic emotion. You receive a meticulously curated, high-resolution digital gallery and access to premium print options.
              </p>
            </div>
            <div>
              <div className="w-full h-64 md:h-80 bg-stone-300 mb-8 relative overflow-hidden">
                <Image src="/filmmaking-2-Large.jpeg" alt="Filmmaking Services" fill className="object-cover" />
              </div>
              <h3 className="text-2xl mb-4 font-light text-stone-800">Filmmaking</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Award-winning cinematography tailored for cinematic destination wedding films, documentaries, and commercial storytelling. Leveraging my background as a film director, I craft emotion-driven short films that capture the true essence and scale of your narrative.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm">
               <Image src="/dolomites.jpg" alt="Dolomites Landscape" fill className="object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm md:mt-16">
               <Image src="/redhair-girl.jpeg" alt="Editorial Portrait" fill className="object-cover" />
            </div>
            <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm">
               <Image src="/Tuscany.jpeg" alt="Tuscany Landscape" fill className="object-cover" />
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
            
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-6 block">Exclusive 2026 Opportunity</span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">The Editorial Portfolio Rate</h2>
            
            <p className="text-sm md:text-base text-stone-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              As I selectively expand my European portfolio for the upcoming season, I am offering an exclusive <strong className="text-white font-medium">50% reduction</strong> on all photography and filmmaking collections. 
              <br /><br />
              This introductory rate applies to any elopement, wedding, or commercial project secured before <strong className="text-white font-medium">December 31, 2026</strong>.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              {/* <Link href="/#contact" className="inline-block px-12 py-4 border border-[#E9E8E6] text-[#E9E8E6] uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-[#E9E8E6] hover:text-stone-800 transition-colors duration-500">
                Claim This Rate
              </Link> */}
              
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a 
                  href="mailto:fvalentinuzzi@studio3cime.com?subject=2026%20Editorial%20Rate%20Inquiry" 
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-200 transition-colors border-b-2 border-stone-600 hover:border-stone-300 pb-1"
                >
                  Email Directly
                </a>
                <span className="text-stone-600 font-light">/</span>
                <a 
                  href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20claim%20the%2050%25%20Editorial%20Portfolio%20Rate." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-200 transition-colors border-b-2 border-stone-600 hover:border-stone-300 pb-1"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- CONTACT (No Form) --- */}
        <section id="contact" className="bg-[#E2E1DF] py-32 md:py-48 px-6 border-t border-stone-300">
          <div className="max-w-xl mx-auto text-center">
            
            <h2 className="text-4xl md:text-5xl mb-6 font-light text-stone-800">Let's Connect</h2>
            <p className="text-stone-600 mb-16 font-light text-sm">
              Currently accepting bookings for elopements, weddings, and commercial projects. Reach out to discuss your vision.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="mailto:fvalentinuzzi@studio3cime.com?subject=Website%20Inquiry" 
                className="inline-block px-12 py-4 border border-stone-800 text-stone-800 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500"
              >
                Send an Email
              </a>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Or reach out via</span>
                <a 
                  href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20connect%20about%20a%20project." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] font-bold tracking-widest uppercase">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="flex flex-col gap-4">
            <span className="text-stone-800 mb-2">Explore</span>
            <Link href="/about" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">About</Link>
            <Link href="/portfolio" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">Portfolio</Link>
            <Link href="/services" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">Services</Link>
            <Link href="/experiences" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">Experiences</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-stone-800 mb-2">Connect</span>
            <a href="https://instagram.com/francesco_valentinuzzi" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">IG: francesco_valentinuzzi</a>
            <a href="https://instagram.com/studio3cime" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">IG: studio3cime</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-stone-800 mb-2">Legal</span>
            <Link href="#privacy" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="underline underline-offset-4 decoration-1 hover:text-stone-800 transition-colors">Terms of Service</Link>
          </div>
          
          <div className="flex flex-col gap-4 md:text-right">
             <span className="text-stone-800 mb-2">Studio</span>
             <span>Production by Studio3Cime</span>
             <span>© 2026 Francesco Valentinuzzi</span>
          </div>

        </div>
      </footer>
      
    </div>
  );
}