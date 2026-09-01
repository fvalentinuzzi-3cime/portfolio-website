import Link from "next/link";
import { Inter } from "next/font/google";
import { getDictionary } from './../../getDictionary';

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

export default async function PrivacyPolicy({ 
  params 
}: { 
  params: Promise<{ lang: 'en' | 'it' }> 
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <div className={`min-h-screen bg-[#E9E8E6] text-stone-800 ${inter.className}`}>
      <nav className="flex justify-between items-center py-10 px-8 md:px-12 lg:px-24 sticky top-0 z-50 bg-[#E9E8E6]/90 backdrop-blur-sm">
        <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 transition-colors">
          {dict.experiences.backHome}
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-light mb-12">{dict.privacyPage.title}</h1>
        <div className="space-y-8 text-sm font-light text-stone-600 leading-relaxed">
          <p>{dict.privacyPage.updated}</p>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">{dict.privacyPage.sec1Title}</h2>
            <p>{dict.privacyPage.sec1Desc}</p>
          </section>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">{dict.privacyPage.sec2Title}</h2>
            <p>{dict.privacyPage.sec2Desc}</p>
          </section>
          <section>
            <h2 className="text-lg text-stone-800 mb-3 font-normal">{dict.privacyPage.sec3Title}</h2>
            <p>{dict.privacyPage.sec3Desc}</p>
          </section>
        </div>
      </main>
    </div>
  );
}