"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { sendGAEvent } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function ServicesClient({ dict }: { dict: any }) {
  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 ${inter.className}`}>
      
{/* Minimal Navbar */}
      <nav className="flex justify-between items-center py-10 px-8 md:px-12 lg:px-24 sticky top-0 z-50 bg-[#E9E8E6]/90 backdrop-blur-sm">
        
        {/* LEFT SIDE: Back Home (and Desktop Switcher) */}
        <div className="w-[120px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 transition-colors">
            {dict.experiences.backHome}
          </Link>
          {/* Shows only on Desktop */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* CENTER: Logo */}
        <div className="text-center w-[120px] h-[120px] mx-auto flex items-center justify-center">
          <Link href="/">
            <Image src="/portfolio_logo.png" alt="Artist Logo" width={120} height={120} className="object-contain" />
          </Link>
        </div>
        
        {/* RIGHT SIDE: Page Name (and Mobile Switcher) */}
        <div className="w-[120px] flex flex-col items-end gap-3 text-right">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-800 border-b-2 border-stone-800 pb-1 w-max">
            {dict.nav.services}
          </span>
          {/* Shows only on Mobile */}
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
        </div>
        
      </nav>

      <main className="pb-32 overflow-hidden">
        
        {/* Intro Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center mt-12 mb-32"
        >
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight mb-8">
            {dict.servicesPage.introTitle}
          </h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            {dict.servicesPage.introDesc}
          </p>
        </motion.section>

        {/* 1. ELOPEMENTS */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative shadow-sm">
                 <Image src="/wedding-robin.jpeg" alt="Elopement in Italy" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4 font-bold">{dict.servicesPage.elopementsEyebrow}</h2>
              <h3 className="text-4xl font-light text-stone-800 mb-6">{dict.servicesPage.elopementsTitle}</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
                {dict.servicesPage.elopementsDesc}
              </p>
              <div className="border-t border-stone-300 pt-6 mb-8">
                <span className="block text-xl text-stone-800 font-light mb-1">{dict.servicesPage.elopementsPrice}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">{dict.servicesPage.elopementsLocation}</span>
              </div>
              
              {/* --- MULTIPLE CONTACT OPTIONS --- */}
              <div className="flex flex-col gap-6">
                <Link href="/#contact" className="inline-block w-max px-10 py-4 border border-stone-800 text-stone-800 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                  {dict.servicesPage.btnInquire}
                </Link>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="mailto:fvalentinuzzi@studio3cime.com?subject=Elopement%20Inquiry" 
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    {dict.promo.emailBtn}
                  </a>
                  <span className="text-stone-400 font-light">/</span>
                  <a 
                    href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20was%20looking%20at%20your%20Elopement%20services%20and%20would%20love%20to%20chat." 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    {dict.promo.whatsappBtn}
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* 2. WEDDINGS (Reversed Layout) */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative shadow-sm">
                 <Image src="/wedding.jpeg" alt="Italy Destination Wedding Photographer" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">{dict.servicesPage.weddingsEyebrow}</h2>
              <h3 className="text-4xl font-light text-stone-800 mb-6">{dict.servicesPage.weddingsTitle}</h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {dict.servicesPage.weddingsDesc1}
                </p>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {dict.servicesPage.weddingsDesc2}
                </p>
                <p className="text-sm text-stone-600 font-light leading-relaxed font-medium">
                  {dict.servicesPage.weddingsDesc3}
                </p>
              </div>

              <div className="border-t border-stone-300 pt-6 mb-8">
                <span className="block text-xl text-stone-800 font-light mb-3">{dict.servicesPage.weddingsPrice}</span>
                <ul className="text-[11px] font-bold uppercase tracking-widest text-stone-500 space-y-2">
                  <li>{dict.servicesPage.weddingsBullets[0]}</li>
                  <li>{dict.servicesPage.weddingsBullets[1]}</li>
                  <li>{dict.servicesPage.weddingsBullets[2]}</li>
                  <li>{dict.servicesPage.weddingsBullets[3]}</li>
                  <li>{dict.servicesPage.weddingsBullets[4]}</li>
                </ul>
              </div>
              
              {/* --- MULTIPLE CONTACT OPTIONS --- */}
              <div className="flex flex-col gap-6">
                <Link href="/#contact" className="inline-block w-max px-10 py-4 border border-stone-800 text-stone-800 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                  {dict.servicesPage.btnInquire}
                </Link>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="mailto:fvalentinuzzi@studio3cime.com?subject=Destination%20Wedding%20Inquiry" 
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    {dict.promo.emailBtn}
                  </a>
                  <span className="text-stone-400 font-light">/</span>
                  <a 
                    href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20was%20looking%20at%20your%20Destination%20Wedding%20services%20and%20would%20love%20to%20chat." 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    {dict.promo.whatsappBtn}
                  </a>
                </div>
              </div>
              
            </motion.div>
          </div>
        </section>

        {/* 3. COMMERCIAL */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative shadow-sm">
                 <Image src="/norrona-Large.jpeg" alt="Athlete wearing puff from Norrona" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">{dict.servicesPage.commercialEyebrow}</h2>
              <h3 className="text-4xl font-light text-stone-800 mb-6">{dict.servicesPage.commercialTitle}</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
                {dict.servicesPage.commercialDesc}
              </p>
              <div className="border-t border-stone-300 pt-6 mb-8">
                <span className="block text-xl text-stone-800 font-light mb-1">{dict.servicesPage.commercialPrice}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{dict.servicesPage.commercialLocation}</span>
              </div>
              
              {/* --- MULTIPLE CONTACT OPTIONS --- */}
              <div className="flex flex-col gap-6">
                <Link href="/#contact" className="inline-block w-max px-10 py-4 border border-stone-800 text-stone-800 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                  {dict.servicesPage.btnProposal}
                </Link>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="mailto:fvalentinuzzi@studio3cime.com?subject=Commercial%20Project%20Inquiry" 
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    {dict.promo.emailBtn}
                  </a>
                  <span className="text-stone-400 font-light">/</span>
                  <a 
                    href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20was%20looking%20at%20your%20Commercial%20services%20and%20would%20love%20to%20discuss%20a%20project." 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                    className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                  >
                    {dict.promo.whatsappBtn}
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* 4. COUPLES SESSIONS (Text Only - Centered) */}
        <section className="max-w-3xl mx-auto px-6 mb-32 md:mb-48 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="flex flex-col justify-center items-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">{dict.servicesPage.couplesEyebrow}</h2>
            <h3 className="text-4xl font-light text-stone-800 mb-6">{dict.servicesPage.couplesTitle}</h3>
            <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
              {dict.servicesPage.couplesDesc}
            </p>
            <div className="border-t border-stone-300 pt-6 mb-8 w-full">
              <span className="block text-xl text-stone-800 font-light mb-1">{dict.servicesPage.couplesPrice}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{dict.servicesPage.couplesLocation}</span>
            </div>
            
            {/* --- MULTIPLE CONTACT OPTIONS --- */}
            <div className="flex flex-col items-center gap-6">
              <Link href="/#contact" className="inline-block px-10 py-4 border border-stone-800 text-stone-800 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                {dict.servicesPage.btnBook}
              </Link>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <a 
                  href="mailto:fvalentinuzzi@studio3cime.com?subject=Couples%20Session%20Inquiry" 
                  onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                >
                  {dict.promo.emailBtn}
                </a>
                <span className="text-stone-400 font-light">/</span>
                <a 
                  href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20book%20a%20Couples%20Session." 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                >
                  {dict.promo.whatsappBtn}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. PRIVATE EVENTS (Text Only - Centered) */}
        <section className="max-w-3xl mx-auto px-6 mb-32 md:mb-48 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="flex flex-col justify-center items-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">{dict.servicesPage.eventsEyebrow}</h2>
            <h3 className="text-4xl font-light text-stone-800 mb-6">{dict.servicesPage.eventsTitle}</h3>
            <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
              {dict.servicesPage.eventsDesc}
            </p>
            <div className="border-t border-stone-300 pt-6 mb-8 w-full">
              <span className="block text-xl text-stone-800 font-light mb-1">{dict.servicesPage.eventsPrice}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{dict.servicesPage.eventsLocation}</span>
            </div>
            
            {/* --- MULTIPLE CONTACT OPTIONS --- */}
            <div className="flex flex-col items-center gap-6">
              <Link href="/#contact" className="inline-block px-10 py-4 border border-stone-800 text-stone-800 uppercase font-bold tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                {dict.servicesPage.btnQuote}
              </Link>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <a 
                  href="mailto:fvalentinuzzi@studio3cime.com?subject=Private%20Event%20Inquiry" 
                  onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                >
                  {dict.promo.emailBtn}
                </a>
                <span className="text-stone-400 font-light">/</span>
                <a 
                  href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20discuss%20coverage%20for%20a%20Private%20Event." 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
                >
                  {dict.promo.whatsappBtn}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] tracking-widest uppercase text-center">
        {dict.footer.copyright}
      </footer>

    </div>
  );
}