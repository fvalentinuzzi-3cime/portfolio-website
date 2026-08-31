import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

export default function PrivacyPolicy() {
  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 ${inter.className}`}>
      <nav className="flex justify-between items-center py-10 px-8 md:px-12 lg:px-24 sticky top-0 z-50 bg-[#E9E8E6]/90 backdrop-blur-sm">
        <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 transition-colors">
          ← Back Home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-light mb-12">Privacy Policy</h1>
        <div className="space-y-8 text-sm font-light text-stone-600 leading-relaxed">
          <p>Last updated: August 2026</p>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">1. Information We Collect</h2>
            <p>When you contact us via email or WhatsApp, we collect the personal data you voluntarily provide, including your name, email address, phone number, and project details. We use this information solely to communicate with you regarding your inquiry and our photography/filmmaking services.</p>
          </section>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">2. How We Use Cookies</h2>
            <p>Our website uses essential cookies to ensure proper functionality and improve user experience. These cookies do not store personally identifiable information unless you explicitly provide it to us.</p>
          </section>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">3. Data Sharing and GDPR Rights</h2>
            <p>We respect your privacy and do not sell or rent your personal data to third parties. Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, or erase your personal data at any time. To exercise these rights, please contact us at fvalentinuzzi@studio3cime.com.</p>
          </section>
        </div>
      </main>
    </div>
  );
}