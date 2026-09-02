"use client";

import Image from "next/image";
import { sendGAEvent } from '@next/third-parties/google';
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";


const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function ExperiencesClient({ dict }: { dict: any }) {
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
        <div className="text-center w-28 h-28 md:w-[160px] md:h-[160px] mx-auto flex items-center justify-center relative">
          <Link href="/" className="w-full h-full relative block hover:scale-105 transition-transform duration-500">
            <Image src="/portfolio_logo.png" alt="Artist Logo" fill className="object-contain" priority />
          </Link>
        </div>
        
        {/* RIGHT SIDE: Page Name (and Mobile Switcher) */}
        <div className="w-[120px] flex flex-col items-end gap-3 text-right">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-800 border-b-2 border-stone-800 pb-1 w-max">
            {dict.nav.experiences}
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
          className="max-w-4xl mx-auto px-6 text-center mt-12 mb-32"
        >
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 mb-6">{dict.experiences.introEyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight mb-8">
            {dict.experiences.introTitle}
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            {dict.experiences.introDesc}
          </p>
        </motion.section>

        {/* 1. Connection & Planning (Text Only, Centered) */}
        <section className="max-w-3xl mx-auto px-6 mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center">
            <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-4">{dict.experiences.beforeEyebrow}</h2>
            <h3 className="text-3xl font-light text-stone-800 mb-8">{dict.experiences.beforeTitle}</h3>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-6">
              {dict.experiences.beforeDesc1}
            </p>
            <p className="text-base text-stone-600 font-light leading-relaxed">
              {dict.experiences.beforeDesc2}
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="w-px h-16 bg-stone-300 mx-auto mb-32"></div>

        {/* 2. During the Shoot (Text Only, Centered) */}
        <section className="max-w-3xl mx-auto px-6 mb-40">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center">
            <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-400 mb-4">{dict.experiences.duringEyebrow}</h2>
            <h3 className="text-3xl font-light text-stone-800 mb-8">{dict.experiences.duringTitle}</h3>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-6">
              {dict.experiences.duringDesc1}
            </p>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-6">
              {dict.experiences.duringDesc2}
            </p>
            <p className="text-base text-stone-600 font-light leading-relaxed">
              {dict.experiences.duringDesc3}
            </p>
          </motion.div>
        </section>

        {/* What I Value Grid */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-6xl mx-auto px-6 mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-stone-800 mb-4">{dict.experiences.valueTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="border-t border-stone-300 pt-6">
              <h4 className="text-lg font-light text-stone-800 mb-3">{dict.experiences.val1Title}</h4>
              <p className="text-sm text-stone-600 font-light">{dict.experiences.val1Desc}</p>
            </div>
            <div className="border-t border-stone-300 pt-6">
              <h4 className="text-lg font-light text-stone-800 mb-3">{dict.experiences.val2Title}</h4>
              <p className="text-sm text-stone-600 font-light">{dict.experiences.val2Desc}</p>
            </div>
            <div className="border-t border-stone-300 pt-6">
              <h4 className="text-lg font-light text-stone-800 mb-3">{dict.experiences.val3Title}</h4>
              <p className="text-sm text-stone-600 font-light">{dict.experiences.val3Desc}</p>
            </div>
          </div>
        </motion.section>

        {/* The Filter (Not for everyone) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center bg-stone-200/50 p-12 md:p-16"
        >
          <h3 className="text-2xl font-light text-stone-800 mb-6">{dict.experiences.filterTitle}</h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
            {dict.experiences.filterDesc1}
          </p>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            {dict.experiences.filterDesc2}
          </p>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-2xl mx-auto px-6 text-center mt-32"
        >
          <h2 className="text-3xl font-light text-stone-800 mb-6">{dict.experiences.ctaTitle}</h2>
          
          {/* --- MULTIPLE CONTACT OPTIONS --- */}
          <div className="flex flex-col items-center gap-8">
            <Link href="/#contact" className="inline-block px-12 py-4 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] font-bold text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
              {dict.experiences.ctaBtn}
            </Link>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="mailto:fvalentinuzzi@studio3cime.com?subject=Ready%20for%20the%20Experience" 
                onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
              >
                {dict.promo.emailBtn}
              </a>
              <span className="text-stone-400 font-light">/</span>
              <a 
                href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20am%20ready%20for%20the%20experience%20and%20would%20love%20to%20connect." 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'whatsapp' })}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
              >
                {dict.promo.whatsappBtn}
              </a>
            </div>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] font-bold tracking-widest uppercase text-center">
        {dict.footer.copyright}
      </footer>

    </div>
  );
}