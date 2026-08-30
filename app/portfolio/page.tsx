"use client"; // Required for Framer Motion animations in the App Router

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
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800 border-b border-stone-800 pb-1">Portfolio</span>
        </div>
      </nav>

      <main className="pb-32">
        
        {/* 1. First Strong Image */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="w-full h-[70vh] md:h-[85vh] relative mb-24 md:mb-32 px-4 md:px-12"
        >
          <div className="w-full h-full relative bg-stone-300 overflow-hidden">
             <Image src="/portfolio-header.jpeg" alt="Cinematic documentary photography" fill className="object-cover" />
          </div>
        </motion.section>

        {/* 2. First Text Block */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center mb-24 md:mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 leading-tight">
            A deep reverence for storytelling and truth.
          </h2>
        </motion.section>

        {/* 3. Second Image */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-5xl mx-auto px-4 md:px-12 mb-24 md:mb-32"
        >
          <div className="w-full aspect-[16/9] relative bg-stone-300 overflow-hidden">
             {/* <Image src="/portfolio-2.jpg" alt="Detail driven wedding photography" fill className="object-cover" /> */}
          </div>
        </motion.section>

        {/* 4. Second Text Block */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center mb-24 md:mb-32"
        >
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
            A unique cinematic approach to fine-art documentary. <br className="hidden md:block" />
            Crafted with intention, down to the quietest detail.
          </p>
        </motion.section>

        {/* 5. Third Image (Vertical) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-2xl mx-auto px-4 md:px-12 mb-24 md:mb-32"
        >
          <div className="w-full aspect-[3/4] relative bg-stone-300 overflow-hidden">
             {/* <Image src="/portfolio-3.jpg" alt="Authentic connection photography" fill className="object-cover" /> */}
          </div>
        </motion.section>

        {/* 6. Third Text Block */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-4xl mx-auto px-6 text-center mb-32 md:mb-48"
        >
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
            Every frame is a celebration of authentic connection whether capturing the intimate vulnerability of an alpine elopement or the raw energy of a commercial narrative. The story is what matters most.
          </p>
        </motion.section>

        {/* 7. Staggered 6-Image Grid with Catchy Words */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-12 mb-24 md:mb-32 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4">
                <Image 
                   src="/portfolio-refined.jpg" 
                   alt="Refined wedding photography" 
                   fill 
                   className="object-cover" 
                 />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2">Refined</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 md:mt-32">
              <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4">
                <Image 
                   src="/portfolio-detail.jpg" 
                   alt="Detail-driven wedding photography" 
                   fill 
                   className="object-cover" 
                 />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2 text-right md:text-left">Detail-Driven</p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 mb-24 md:mb-32 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4">
                <Image 
                   src="/portfolio-timeless.jpg" 
                   alt="Timeless wedding photography" 
                   fill 
                   className="object-cover" 
                 />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2">Timeless</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 md:mt-32">
              <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4">
                <Image 
                   src="/portfolio-authentic.jpg" 
                   alt="Authentic connection photography" 
                   fill 
                   className="object-cover" 
                 />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2 text-right md:text-left">Authentic</p>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4">
                <Image 
                   src="/portfolio-cinematic.jpg" 
                   alt="Cinematic storytelling photography" 
                   fill 
                   className="object-cover" 
                 />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2">Cinematic</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 md:mt-32">
              <div className="w-full aspect-[4/5] bg-stone-300 relative overflow-hidden mb-4">
                <Image 
                   src="/portfolio-intentional.jpeg" 
                   alt="Intentional detail photography" 
                   fill 
                   className="object-cover" 
                 />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 ml-2 text-right md:text-left">Intentional</p>
            </motion.div>
          </div>

        </section>

      </main>

      {/* Simple Footer for Portfolio Page */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] tracking-widest uppercase text-center">
        © 2026 Francesco Valentinuzzi
      </footer>

    </div>
  );
}