"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function Services() {
  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 ${inter.className}`}>
      
      {/* Minimal Navbar */}
      <nav className="flex justify-between items-center py-10 px-8 md:px-12 lg:px-24 sticky top-0 z-50 bg-[#E9E8E6]/90 backdrop-blur-sm">
        <div className="w-[120px]">
          <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 transition-colors">
            ← Back Home
          </Link>
        </div>
        
        <div className="text-center w-[120px] h-[120px] mx-auto flex items-center justify-center">
          <Link href="/">
            <Image src="/portfolio_logo.png" alt="Artist Logo" width={120} height={120} className="object-contain" />
          </Link>
        </div>
        
        <div className="w-[120px] text-right">
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800 border-b border-stone-800 pb-1">Services</span>
        </div>
      </nav>

      <main className="pb-32 overflow-hidden">
        
        {/* Intro Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center mt-12 mb-32"
        >
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight mb-8">
            Investment & Experience
          </h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Based in Northern Italy, I craft cinematic, authentic narratives across the Dolomites, the Italian coastline, and throughout Europe. Serving an international clientele, I provide a seamless, stress-free experience for English-speaking couples and brands planning from abroad.
          </p>
        </motion.section>

        {/* 1. ELOPEMENTS */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative">
                 <Image src="/wedding-robin.jpeg" alt="Elopement in Italy" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">01. Intimate</h2>
              <h3 className="text-4xl font-light text-stone-800 mb-6">Destination Elopements</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
                An elopement is the ultimate freedom to celebrate your relationship without the pressure of tradition. Whether you are traveling from abroad to an alpine peak in the Dolomites or a hidden villa in Tuscany, I guide you through location scouting and timeline planning to create a deeply personal, cinematic adventure.
              </p>
              <div className="border-t border-stone-300 pt-6 mb-8">
                <span className="block text-xl text-stone-800 font-light mb-1">Starting at €2,000</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400">Available across Europe</span>
              </div>
              <Link href="/#contact" className="inline-block w-max px-10 py-4 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                Inquire for Elopement
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. WEDDINGS (Reversed Layout) - Heavily SEO & Conversion Optimized */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative">
                 <Image src="/wedding.jpeg" alt="Italy Destination Wedding Photographer" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">02. Grandeur</h2>
              <h3 className="text-4xl font-light text-stone-800 mb-6">Italy Destination Weddings</h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Planning a destination wedding in Italy from abroad requires a visual storyteller who acts as your photographer, local guide, and friend. I am dedicated to helping you experience the true authenticity of Italy—the food, the warmth, the atmosphere—while seamlessly documenting your celebration.
                </p>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  My approach is modern, spontaneous, and deeply photojournalistic. I act as a silent observer, utilizing natural light to capture intimate details and genuine emotions completely free from stressful, forced poses. 
                </p>
                <p className="text-sm text-stone-600 font-light leading-relaxed font-medium">
                  Whether you envision a rustic villa in Tuscany, a luxury castle in Northern Italy, the dramatic cliffs of the Amalfi Coast, or the breathtaking islands of Sicily and Sardinia—I travel everywhere in Italy to capture your story.
                </p>
              </div>

              <div className="border-t border-stone-300 pt-6 mb-8">
                <span className="block text-xl text-stone-800 font-light mb-3">Starting at €4,000</span>
                <ul className="text-[11px] uppercase tracking-widest text-stone-500 space-y-2">
                  <li>— Full-day comprehensive coverage</li>
                  <li>— 1,000+ meticulously edited high-res images</li>
                  <li>— Cinematic aerial drone footage</li>
                  <li>— Private online gallery & printing rights</li>
                  <li>— Custom fine-art physical albums</li>
                </ul>
              </div>
              
              <Link href="/#contact" className="inline-block w-max px-10 py-4 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                Inquire for Wedding
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 3. COMMERCIAL */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative">
                 <Image src="/norrona-Large.jpeg" alt="Athlete wearing puff from Norrona" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">03. Impact</h2>
              <h3 className="text-4xl font-light text-stone-800 mb-6">Commercial & Brands</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-8">
                Leveraging my background as an award-winning film director, I produce high-end visual campaigns for brands and unique locations. Whether it is a luxury hospitality venue, a fashion editorial in Rome, or an outdoor lifestyle narrative in the Alps, I deliver assets that elevate your brand's global presence.
              </p>
              <div className="border-t border-stone-300 pt-6 mb-8">
                <span className="block text-xl text-stone-800 font-light mb-1">Custom Quoted</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400">Tailored to project scope</span>
              </div>
              <Link href="/#contact" className="inline-block w-max px-10 py-4 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                Request a Proposal
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] tracking-widest uppercase text-center">
        © 2026 Francesco Valentinuzzi
      </footer>

    </div>
  );
}