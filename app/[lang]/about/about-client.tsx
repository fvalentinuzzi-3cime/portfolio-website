"use client";

import Image from "next/image";
import { sendGAEvent } from '@next/third-parties/google';
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function AboutClient({ dict }: { dict: any }) {
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
            {dict.nav.about}
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
          className="max-w-4xl mx-auto px-6 text-center mt-12 mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight mb-8">
            {dict.aboutPage.introTitle}
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
            {dict.aboutPage.introDesc1} <br className="hidden md:block" />
            {dict.aboutPage.introDesc2}
          </p>
        </motion.section>

        {/* Hero Image */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-5xl mx-auto px-4 md:px-12 mb-24 md:mb-32"
        >
          <div className="w-full aspect-[16/9] relative bg-stone-300 overflow-hidden shadow-sm">
             <Image src="/Francesco.jpeg" alt="Francesco Valentinuzzi" fill className="object-cover" priority />
          </div>
        </motion.section>

        {/* The Story Section */}
        <section className="max-w-3xl mx-auto px-6 mb-32 md:mb-48">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-8">
            <h2 className="text-2xl font-light text-stone-800 mb-6 text-center">{dict.aboutPage.storyTitle}</h2>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {dict.aboutPage.storyP1}
            </p>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {dict.aboutPage.storyP2}
            </p>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {dict.aboutPage.storyP3}
            </p>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {dict.aboutPage.storyP4}
            </p>
          </motion.div>
        </section>

        {/* =========================================
            FILM PRODUCER SECTION 
        ========================================= */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 border-t border-stone-300 pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-light text-stone-800 mb-4">{dict.aboutPage.filmsTitle}</h2>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500">{dict.aboutPage.filmsSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            
            {/* Film 1: Ephemeral */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group">
              <div className="w-full aspect-[2/3] bg-stone-300 relative overflow-hidden mb-6 shadow-sm">
                <Image src="/ephemeral-website.jpeg" alt="Ephemeral Poster" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-xl mb-2 font-medium text-stone-800">{dict.aboutPage.film1Title}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4 font-bold">{dict.aboutPage.film1Sub}</p>
              <p className="text-sm text-stone-600 font-light mb-4 line-clamp-3">
                {dict.aboutPage.film1Desc}
              </p>
              <div className="text-[9px] uppercase tracking-widest text-stone-400 space-y-1">
                <p>• Finalist, Banff Mountain Film Festival 2025</p>
                <p>• Trento Film Festival</p>
                <p>• Mendi Film Festival</p>
                <p>• Flickr Rhode Island</p>
                <p>• Mountainfilm</p>
              </div>
            </motion.div>

            {/* Film 2: Tipa Tipa */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group md:mt-12">
              <div className="w-full aspect-[2/3] bg-stone-300 relative overflow-hidden mb-6 shadow-sm">
                <Image src="/tipa-tipa-website.jpeg" alt="Tipa Tipa Poster" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-xl mb-2 font-medium text-stone-800">{dict.aboutPage.film2Title}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4 font-bold">{dict.aboutPage.film2Sub}</p>
              <p className="text-sm text-stone-600 font-light mb-4 line-clamp-3">
                {dict.aboutPage.film2Desc}
              </p>
              <div className="text-[9px] uppercase tracking-widest text-stone-400 space-y-1">
                <p>• Official Selection, MHFF</p>
                <p>• Trail Running Film Festival</p>
              </div>
            </motion.div>

            {/* Film 3: Dumped */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group md:mt-24">
              <div className="w-full aspect-[2/3] bg-stone-300 relative overflow-hidden mb-6 shadow-sm">
                <Image src="/dumped-website.jpeg" alt="Dumped Poster" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-xl mb-2 font-medium text-stone-800">{dict.aboutPage.film3Title}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4 font-bold">{dict.aboutPage.film3Sub}</p>
              <p className="text-sm text-stone-600 font-light mb-4 line-clamp-3">
                {dict.aboutPage.film3Desc}
              </p>
              <div className="text-[9px] uppercase tracking-widest text-stone-400 space-y-1">
                <p>• Award Winner, Rock The Shorts Los Angeles</p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================
            COMMERCIAL CLIENTS SECTION 
        ========================================= */}
        <section className="bg-stone-200/50 py-32 mb-32 md:mb-48 border-y border-stone-300">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h2 className="text-2xl font-light text-stone-800 mb-12">{dict.aboutPage.trustedTitle}</h2>
              
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-sm uppercase tracking-[0.3em] font-medium text-stone-400">
                <span>EREWHON Los Angeles</span>
                <span className="hidden md:inline text-stone-300">/</span>
                <span>Rab</span>
                <span className="hidden md:inline text-stone-300">/</span>
                <span>ASICS</span>
                <span className="hidden md:inline text-stone-300">/</span>
                <span>HDRY</span>
                <span className="hidden md:inline text-stone-300">/</span>
                <span>Nutripure</span>
              </div>
              
              <p className="text-xs text-stone-500 font-light mt-12 max-w-2xl mx-auto leading-relaxed">
                {dict.aboutPage.trustedDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            TOP 3 PICTURES
        ========================================= */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-light text-stone-800 mb-4">{dict.aboutPage.signatureTitle}</h2>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500">{dict.aboutPage.signatureSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm">
              <Image src="/signature2 Large.jpeg" alt="New York City at sunset" fill className="object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm md:mt-12">
              <Image src="/signature2.jpeg" alt="Signature Frame 2" fill className="object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden shadow-sm md:mt-24">
              <Image src="/signature3.jpeg" alt="Signature Frame 3" fill className="object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-2xl mx-auto px-6 text-center border-t border-stone-300 pt-32"
        >
          <h2 className="text-3xl font-light text-stone-800 mb-6">{dict.aboutPage.ctaTitle}</h2>
          <p className="text-sm text-stone-600 font-light mb-10">
            {dict.aboutPage.ctaDesc}
          </p>
          
          {/* --- MULTIPLE CONTACT OPTIONS --- */}
          <div className="flex flex-col items-center gap-8">
            <Link href="/#contact" className="inline-block px-12 py-4 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500 font-bold">
              {dict.contact.sendEmailBtn}
            </Link>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="mailto:fvalentinuzzi@studio3cime.com?subject=General%20Inquiry" 
                onClick={() => sendGAEvent('event', 'generate_lead', { lead_type: 'email' })}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-800 hover:text-stone-500 transition-colors border-b-2 border-stone-800 hover:border-stone-500 pb-1"
              >
                {dict.promo.emailBtn}
              </a>
              <span className="text-stone-400 font-light">/</span>
              <a 
                href="https://wa.me/393515034609?text=Ciao%20Francesco!%20I%20would%20love%20to%20connect%20and%20create%20something%20beautiful." 
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
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] tracking-widest font-bold uppercase text-center">
        {dict.footer.copyright}
      </footer>

    </div>
  );
}