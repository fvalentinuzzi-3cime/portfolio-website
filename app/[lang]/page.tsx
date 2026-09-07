import { getDictionary } from './../getDictionary';
import HomeClient from './home-client';
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  
  return {
    alternates: {
      canonical: `/${resolvedParams.lang}`,
      languages: {
        'en': '/en',
        'it': '/it',
      },
    },
  };
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ lang: 'en' | 'it' }> 
}) {
  // Await the params to properly extract the language in Next.js 15+
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Fetch the correct dictionary based on the URL (/en or /it)
  const dict = await getDictionary(lang);

  // Pass the dictionary to your interactive client component
  return <HomeClient dict={dict} />;
}