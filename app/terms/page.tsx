import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

export default function TermsOfService() {
  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 ${inter.className}`}>
      <nav className="flex justify-between items-center py-10 px-8 md:px-12 lg:px-24 sticky top-0 z-50 bg-[#E9E8E6]/90 backdrop-blur-sm">
        <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 transition-colors">
          ← Back Home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-light mb-12">Terms of Service</h1>
        <div className="space-y-8 text-sm font-light text-stone-600 leading-relaxed">
          <p>Last updated: August 2026</p>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. All content provided on this site is for informational purposes related to the photography and filmmaking services of Francesco Valentinuzzi.</p>
          </section>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">2. Intellectual Property</h2>
            <p>All images, text, design, and cinematic works displayed on this website are the exclusive property of Francesco Valentinuzzi and Studio3Cime. They are protected by international copyright laws. Unauthorized reproduction, modification, or distribution is strictly prohibited.</p>
          </section>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">3. Services and Bookings</h2>
            <p>Prices listed on this website, including promotional editorial rates, are subject to change without notice until a formal contract is signed and a retainer is paid. Availability is not guaranteed until formal booking procedures are completed.</p>
          </section>
        </div>
      </main>
    </div>
  );
}