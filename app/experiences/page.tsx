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

export default function Experience() {
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
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800 border-b border-stone-800 pb-1">Experiences</span>
        </div>
      </nav>

      <main className="pb-32 overflow-hidden">
        
        {/* Intro Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-4xl mx-auto px-6 text-center mt-12 mb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-6">What to Expect</p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight mb-8">
            Effortless, Cinematic, and True.
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Working with me goes far beyond just taking a beautiful photograph. It is about creating a space where you feel completely comfortable, wild, and free. 
          </p>
        </motion.section>

        {/* 1. Connection & Planning */}
        <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative">
                 {/* <Image src="/experience-planning.jpg" alt="Planning a destination wedding" fill className="object-cover" /> */}
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">Before The Shoot</h2>
              <h3 className="text-3xl font-light text-stone-800 mb-6">Connection is Everything</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
                These heartfelt images and films you see in my portfolio are born from genuine relationships. From the very first email, I stay as close as possible to the bride and groom. Communication is the foundation of my work.
              </p>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                We will dive deep into your vision, plan the timeline, and scout the perfect unique locations for your moments. By the time your wedding day arrives, you will feel like you are being photographed by a trusted friend, not a stranger.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. During the Shoot */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2">
              <div className="w-full aspect-[4/5] bg-stone-300 relative">
                 {/* <Image src="/experience-shooting.jpg" alt="Cinematic wedding photography in action" fill className="object-cover" /> */}
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-4">During The Shoot</h2>
              <h3 className="text-3xl font-light text-stone-800 mb-6">Unscripted & Authentic</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
                Almost all of my couples have never been professionally photographed before we meet. Static poses and forced smiles have absolutely no place in my work. Be prepared to move, laugh, and embrace the environment. 
              </p>
              <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
                My approach is a spontaneous, photojournalistic reportage. While I will gently direct you to catch the best cinematic light, I will never ask you to freeze in place. For my filmmaking couples, this is also when we create pure magic. We will venture to specific, breathtaking locations to capture the raw audio and video of your private wedding vows, preserving the true heartbeat of your day forever.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What I Value Grid */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-6xl mx-auto px-6 mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-stone-800 mb-4">A Few Things I Value</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="border-t border-stone-300 pt-6">
              <h4 className="text-lg font-light text-stone-800 mb-3">The Quiet Details</h4>
              <p className="text-sm text-stone-600 font-light">Drawing from my graphic design and commercial background, I am obsessed with the details. The texture of a dress, the wildness of a bouquet, and the fleeting glances between you two.</p>
            </div>
            <div className="border-t border-stone-300 pt-6">
              <h4 className="text-lg font-light text-stone-800 mb-3">Joyful Chaos</h4>
              <p className="text-sm text-stone-600 font-light">Parties, crazy dances, and pure happiness. The greatest advice I can offer you is to do things your way, being completely true to your personality.</p>
            </div>
            <div className="border-t border-stone-300 pt-6">
              <h4 className="text-lg font-light text-stone-800 mb-3">Your Unique Vibe</h4>
              <p className="text-sm text-stone-600 font-light">Whether your wedding is an elegant historic villa affair, a rustic gathering, or a wild alpine adventure, I am there to adapt to your energy and capture it flawlessly.</p>
            </div>
          </div>
        </motion.section>

        {/* The Filter (Not for everyone) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-3xl mx-auto px-6 text-center bg-stone-200/50 p-12 md:p-16"
        >
          <h3 className="text-2xl font-light text-stone-800 mb-6">One Last Thing</h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">
            I am not a photographer for everybody. If you are looking for highly traditional, stiffly posed portraits that feel perfectly pristine but lack emotion, we might not be the best fit. 
          </p>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            But if you have looked through my galleries and felt a connection to the raw, cinematic philosophy behind what I do, chances are we are going to create something truly extraordinary together. Wedding photography is the legacy of your day. Choose with your heart.
          </p>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-2xl mx-auto px-6 text-center mt-32"
        >
          <h2 className="text-3xl font-light text-stone-800 mb-6">Ready for the experience?</h2>
          <Link href="/#contact" className="inline-block px-12 py-4 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
            Send Me A Message
          </Link>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] tracking-widest uppercase text-center">
        © 2026 Francesco Valentinuzzi
      </footer>

    </div>
  );
}