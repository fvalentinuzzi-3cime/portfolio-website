"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

// Animation variants for smooth fade-ins
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function Portfolio() {
  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 ${inter.className}`}>
      
      {/* Minimal Navbar (Linking back to Home) */}
      <nav className="flex justify-between items-center py-10 px-8 md:px-12 lg:px-24 sticky top-0 z-50 bg-[#E9E8E6]/90 backdrop-blur-sm">
        <div className="w-[120px]">
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 transition-colors">
            ← Back Home
          </Link>
        </div>
        
        <div className="text-center w-28 h-28 md:w-[160px] md:h-[160px] mx-auto flex items-center justify-center relative">
          <Link href="/" className="w-full h-full relative block hover:scale-105 transition-transform duration-500">
            <Image src="/portfolio_logo.png" alt="Artist Logo" fill className="object-contain" priority />
          </Link>
        </div>
        
        <div className="w-[120px] text-right">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-800 border-b-2 border-stone-800 pb-1">Portfolio</span>
        </div>
      </nav>

      <main className="pb-32">
        
        {/* 1. Main Portfolio Intro Image */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="w-full h-[70vh] md:h-[85vh] relative mb-24 md:mb-32 px-4 md:px-12"
        >
          <div className="w-full h-full relative bg-stone-300 overflow-hidden shadow-sm">
             <Image src="/portfolio-header.jpeg" alt="Cinematic documentary photography" fill className="object-cover" priority />
          </div>
        </motion.section>

        {/* 2. Philosophy Text */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-4xl mx-auto px-6 text-center mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-light text-stone-800 leading-tight mb-8">
            A deep reverence for storytelling and truth.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
            Every frame is a celebration of authentic connection—whether capturing the intimate vulnerability of an alpine elopement or the raw energy of a commercial narrative. Crafted with intention, down to the quietest detail.
          </p>
        </motion.section>

        {/* =========================================
            CHAPTER I: ELOPEMENTS & WEDDINGS 
        ========================================= */}
        <section className="mb-40">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-20 px-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Chapter I</span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">Couples & Elopements</h2>
            <div className="w-px h-12 bg-stone-400 mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
                <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4 shadow-sm">
                  <Image src="/ilo-1a.jpg" alt="Elopement" fill className="object-cover" />
                </div>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 md:mt-32">
                <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4 shadow-sm">
                  <Image src="/portfolio-intentional.jpeg" alt="Intentional wedding detail" fill className="object-cover" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 ml-2 text-right md:text-left">Intentional Details</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            CHAPTER II: LANDSCAPES & PLACES
        ========================================= */}
        <section className="mb-40 bg-stone-200/50 py-32 border-y border-stone-300">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-20 px-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Chapter II</span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">Landscapes & Places</h2>
            <p className="text-sm text-stone-500 font-light mt-4">Italy, USA & Beyond</p>
            <div className="w-px h-12 bg-stone-400 mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full mb-12">
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-stone-300 relative overflow-hidden shadow-sm">
                  <Image src="/Tuscany.jpeg" alt="Tuscany landscape" fill className="object-cover" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mt-4 text-center">Tuscany, Italy</p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-12 mt-24">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
                <div className="w-full aspect-[4/3] bg-stone-300 relative overflow-hidden shadow-sm">
                  <Image src="/california-landscape.jpeg" alt="Landscape detail california coast" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
                <div className="w-full aspect-[4/3] bg-stone-300 relative overflow-hidden shadow-sm">
                  <Image src="/dolomites.jpeg" alt="Italian dolomites at sunrise" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            CHAPTER III: COMMERCIAL & ACTION
        ========================================= */}
        <section className="mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-20 px-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Chapter III</span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800">Commercial & Action</h2>
            <div className="w-px h-12 bg-stone-400 mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
                <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4 shadow-sm">
                  <Image src="/Ephemeral 3-4.jpg" alt="Commercial Action" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 md:mt-32">
                <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4 shadow-sm">
                  <Image src="/Jeff Mercier BTS.jpg" alt="Behind the scenes of interview on iceland glacier with ice climber Jeff Mercier" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Simple Footer for Portfolio Page */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] font-bold tracking-widest uppercase text-center">
        © 2026 Francesco Valentinuzzi
      </footer>

    </div>
  );
}