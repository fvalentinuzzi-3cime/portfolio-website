"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800">Close Menu</span>
                <span className="w-3 h-3 rounded-full border border-stone-800"></span>
              </button>
            </div>

            <div className="flex-1 flex flex-col px-8 pb-10">
              <ul className="flex flex-col gap-5 mt-4 mb-12">
                {/* Removed "Experiences" from mobile menu */}
                {["Portfolio", "Services","Experiences", "Journal", "About"].map((item) => (
                  <li key={item}>
                    <a
                      href={item === "Portfolio" ? "/portfolio" : `#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xs uppercase tracking-[0.15em] text-stone-800 hover:text-stone-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="w-full aspect-[3/2] bg-stone-300 relative overflow-hidden mb-8">
                 {/* <Image src="/menu-image.jpg" alt="Dolomites Elopement" fill className="object-cover" /> */}
              </div>
              
              <div className="flex justify-end mb-12">
                <p className="text-sm text-stone-800 font-light text-right max-w-[260px] leading-relaxed">
                  Crafting cinematic, authentic narratives for destination weddings, intimate elopements, and commercial brand campaigns.
                </p>
              </div>
              
              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-4 border border-stone-800 text-stone-800 text-center uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500"
                >
                  Inquire
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- STANDARD NAVBAR --- */}
      <nav className="grid grid-cols-3 items-center py-6 px-6 md:py-10 md:px-12 lg:px-24 sticky top-0 z-50 bg-[#E9E8E6]/90 backdrop-blur-sm">
        
        <div className="justify-self-start">
          <ul className="hidden md:flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-stone-500">
            <li><a href="/portfolio" className="hover:text-stone-800 transition-colors duration-500">Portfolio</a></li>
            <li><a href="/services" className="hover:text-stone-800 transition-colors duration-500">Services</a></li>
            <li><a href="/experiences" className="hover:text-stone-800 transition-colors duration-500">Experiences</a></li>
          </ul>
        </div>
        
        <div className="justify-self-center w-20 h-20 md:w-[120px] md:h-[120px] relative flex items-center justify-center">
          <Image 
            src="/portfolio_logo.png" 
            alt="Artist Logo" 
            fill 
            className="object-contain"
            priority 
          />
        </div>
        
        <div className="justify-self-end flex items-center gap-6">
          <ul className="hidden md:flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-stone-500">
            <li><a href="#journal" className="hover:text-stone-800 transition-colors duration-500">Journal</a></li>
            <li><a href="/about" className="hover:text-stone-800 transition-colors duration-500">About</a></li>
          </ul>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex md:hidden items-center gap-2 group shrink-0"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-800 font-medium">Menu</span>
            <span className="w-3 h-3 rounded-full border border-stone-800"></span>
          </button>
        </div>
      </nav>

      <main>
        <section className="w-full h-[70vh] md:h-[90vh] relative mb-24 md:mb-40 px-4 md:px-12 mt-8">
          <div className="w-full h-full relative bg-stone-300 overflow-hidden">
             {/* <Image src="/hero-image.jpg" alt="Couple eloping in the Italian Dolomites mountains" fill className="object-cover" /> */}
          </div>
        </section>

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

        <section id="portfolio" className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-4 font-light text-stone-800">Selected Works</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Visuals for life and business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-stone-300 mb-8 overflow-hidden"></div>
              <h3 className="text-3xl mb-3 font-light text-stone-800">Elopements & Weddings</h3>
            </div>
            <div className="group cursor-pointer md:mt-32">
              <div className="relative aspect-[3/4] bg-stone-300 mb-8 overflow-hidden"></div>
              <h3 className="text-3xl mb-3 font-light text-stone-800">Commercial Films & Photo</h3>
            </div>
          </div>
        </section>

        {/* Refined 2-Column Services Section */}
        <section id="services" className="max-w-5xl mx-auto px-6 mb-32 md:mb-48 text-center border-t border-stone-300 pt-32">
          <h2 className="text-4xl mb-16 font-light text-stone-800">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left">
            <div>
              <div className="w-full h-64 md:h-80 bg-stone-300 mb-8"></div>
              <h3 className="text-2xl mb-4 font-light text-stone-800">Photography</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                From intimate sunrise proposals in the Dolomites to high-end commercial brand campaigns across Italy. My photography blends an editorial aesthetic with raw, authentic emotion. You receive a meticulously curated, high-resolution digital gallery and access to premium print options.
              </p>
            </div>
            <div>
              <div className="w-full h-64 md:h-80 bg-stone-300 mb-8"></div>
              <h3 className="text-2xl mb-4 font-light text-stone-800">Filmmaking</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Award-winning cinematography tailored for cinematic destination wedding films, documentaries, and commercial storytelling. Leveraging my background as a film director, I craft emotion-driven short films that capture the true essence and scale of your narrative.
              </p>
            </div>
          </div>
        </section>

        <section id="journal" className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 border-t border-stone-300 pt-32">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left gap-4">
            <div>
              <h2 className="text-4xl mb-2 font-light text-stone-800">Local Guides</h2>
              <p className="text-sm text-stone-600 font-light">Insights and planning tips for destination shoots across Italy.</p>
            </div>
            <a href="#journal" className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 transition-colors border-b border-transparent hover:border-stone-800 pb-1 hidden md:block">
              View All Posts
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-stone-300 mb-6 overflow-hidden"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">Planning</p>
              <h3 className="text-xl mb-3 font-light text-stone-800 group-hover:text-stone-500 transition-colors">How to Elope in the Friulian Dolomites</h3>
              <p className="text-sm text-stone-600 font-light line-clamp-2">A complete guide to planning your intimate mountain wedding away from the tourist crowds.</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-stone-300 mb-6 overflow-hidden"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">Locations</p>
              <h3 className="text-xl mb-3 font-light text-stone-800 group-hover:text-stone-500 transition-colors">Historic Villas vs. Alpine Peaks</h3>
              <p className="text-sm text-stone-600 font-light line-clamp-2">Choosing the perfect backdrop for your destination wedding or brand retreat in Northern Italy.</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-stone-300 mb-6 overflow-hidden"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">Commercial</p>
              <h3 className="text-xl mb-3 font-light text-stone-800 group-hover:text-stone-500 transition-colors">Producing a High-End Brand Campaign at Altitude</h3>
              <p className="text-sm text-stone-600 font-light line-clamp-2">Behind the scenes on logistics, lighting, and scouting for outdoor apparel shoots in unpredictable weather.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="#journal" className="text-[10px] uppercase tracking-[0.2em] text-stone-800 border-b border-stone-800 pb-1">
              View All Posts
            </a>
          </div>
        </section>

        <section id="contact" className="bg-[#E2E1DF] py-32 md:py-48 px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6 font-light text-stone-800">Let's Connect</h2>
            <p className="text-stone-600 mb-16 font-light text-sm">
              Currently accepting bookings for elopements, weddings, and commercial projects. Reach out to discuss your vision.
            </p>
            
            <form className="flex flex-col gap-10 text-left">
              <input type="text" placeholder="Name *" className="w-full bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-stone-800 transition-colors text-sm placeholder:text-stone-500" />
              <input type="email" placeholder="Email address *" className="w-full bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-stone-800 transition-colors text-sm placeholder:text-stone-500" />
              <textarea placeholder="Tell me about your vision, dates, and ideas *" rows={4} className="w-full bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-stone-800 transition-colors resize-none text-sm placeholder:text-stone-500"></textarea>
              
              <button type="submit" className="self-center mt-8 px-12 py-4 border border-stone-800 text-stone-800 uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 hover:text-[#E9E8E6] transition-colors duration-500">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-300 mx-6 md:mx-24 py-16 text-stone-500 text-[10px] tracking-widest uppercase">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="flex flex-col gap-4">
            <span className="text-stone-800 font-medium mb-2">Explore</span>
            <a href="/about" className="underline underline-offset-4 hover:text-stone-800 transition-colors">About</a>
            <a href="/portfolio" className="underline underline-offset-4 hover:text-stone-800 transition-colors">Portfolio</a>
            <a href="/services" className="underline underline-offset-4 hover:text-stone-800 transition-colors">Services</a>
            <a href="/experiences" className="underline underline-offset-4 hover:text-stone-800 transition-colors">Experiences</a>
            <a href="#journal" className="underline underline-offset-4 hover:text-stone-800 transition-colors">Journal</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-stone-800 font-medium mb-2">Connect</span>
            <a href="https://instagram.com/francesco_valentinuzzi" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-stone-800 transition-colors">IG: francesco_valentinuzzi</a>
            <a href="https://instagram.com/studio3cime" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-stone-800 transition-colors">IG: studio3cime</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-stone-800 font-medium mb-2">Legal</span>
            <a href="#privacy" className="underline underline-offset-4 hover:text-stone-800 transition-colors">Privacy Policy</a>
            <a href="#terms" className="underline underline-offset-4 hover:text-stone-800 transition-colors">Terms of Service</a>
          </div>
          
          <div className="flex flex-col gap-4 md:text-right">
             <span className="text-stone-800 font-medium mb-2">Studio</span>
             <span>Production by Studio3Cime</span>
             <span>© 2026 Francesco Valentinuzzi</span>
          </div>

        </div>
      </footer>
      
    </div>
  );
}