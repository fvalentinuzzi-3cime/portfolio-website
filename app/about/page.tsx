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

export default function About() {
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
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800 border-b border-stone-800 pb-1">About</span>
        </div>
      </nav>

      <main className="pb-32 overflow-hidden">
        
        {/* Intro Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-4xl mx-auto px-6 text-center mt-12 mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight mb-8">
            Ciao! I'm Francesco.
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
            Your Italian visual storyteller, award-winning film director, and local guide. <br className="hidden md:block" />
            I have a deep reverence for cinematic adventure and the truth of human connection.
          </p>
        </motion.section>

        {/* Hero Image */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-5xl mx-auto px-4 md:px-12 mb-24 md:mb-32"
        >
          <div className="w-full aspect-[16/9] relative bg-stone-300 overflow-hidden">
             {/* <Image src="/about-francesco.jpg" alt="Francesco Valentinuzzi" fill className="object-cover" /> */}
          </div>
        </motion.section>

        {/* The Story Section */}
        <section className="max-w-3xl mx-auto px-6 mb-32 md:mb-48">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-8">
            <h2 className="text-2xl font-light text-stone-800 mb-6 text-center">My Approach</h2>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Memories matter. More than the grand venues or the perfect lighting, it is the raw, unscripted emotion that endures. After years of living and creating across New York City, Los Angeles, and Denver, I found my way back to the breathtaking landscapes of Northern Italy. 
            </p>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              My background is in documentary filmmaking, a discipline where authenticity is everything. My work has been celebrated globally, including winning Best Documentary in Los Angeles (2026) and earning a finalist selection as a producer at the 2025 Banff Mountain Film Festival. Today, I bring that exact same cinematic, truth-driven eye to destination weddings, intimate elopements, and high-end commercial campaigns.
            </p>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              I know that stepping in front of a camera can feel intimidating. That is why my couples often describe me as a "photographer, guide, and friend." I am here to navigate the alpine trails, find the hidden Tuscan villas, speak the local language, and ensure you feel completely at ease so your true story can unfold naturally.
            </p>
          </motion.div>
        </section>

        {/* Behind the Lens (6 Random Facts) */}
        <section className="max-w-6xl mx-auto px-6 mb-32 md:mb-48">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-light text-stone-800 mb-4">Behind the Lens</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">A few random facts about me</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-stone-200/50 p-8">
              <span className="block text-3xl font-light text-stone-300 mb-4">01</span>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Before calling the Italian mountains my home base, I lived in the fast-paced creative hubs of New York City, Los Angeles, and Denver. That international experience allows me to seamlessly connect with clients traveling from all over the world.
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-stone-200/50 p-8">
              <span className="block text-3xl font-light text-stone-300 mb-4">02</span>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                I am a massive nerd for visual storytelling. Winning Best Documentary in LA and being a Banff finalist was not just a career milestone: it cemented my belief that every great project must be rooted in truth.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-stone-200/50 p-8">
              <span className="block text-3xl font-light text-stone-300 mb-4">03</span>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                I am also a trained graphic designer. This background gives me a highly refined, editorial eye for composition, color, and typography, which translates perfectly into crafting your custom fine art albums.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-stone-200/50 p-8">
              <span className="block text-3xl font-light text-stone-300 mb-4">04</span>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                I regularly collaborate with major international outdoor brands such as Asics, Rab, Hydrapak, La Sportiva, and NutriPure. Producing high-end commercial campaigns in the mountains requires a level of precision that I bring to every single wedding I shoot.
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-stone-200/50 p-8">
              <span className="block text-3xl font-light text-stone-300 mb-4">05</span>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                When I am not behind the camera, you can usually find me playing with my dog, hiking in the Dolomites, and trying to sip a perfect cup of coffee.
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-stone-200/50 p-8">
              <span className="block text-3xl font-light text-stone-300 mb-4">06</span>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                I love early mornings. I also have a deep passion for vintage cameras, short films, and, of course, a great pizza.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-light text-stone-800 mb-6">Let's create something beautiful.</h2>
          <p className="text-sm text-stone-600 font-light mb-10">
            I can't wait to connect with you and tell your incredible story. 
          </p>
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