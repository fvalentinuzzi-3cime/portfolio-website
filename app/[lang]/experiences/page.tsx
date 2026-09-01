import { getDictionary } from './../../getDictionary';
import ExperiencesClient from './experiences-client';

export default async function Page({ 
  params 
}: { 
  params: Promise<{ lang: 'en' | 'it' }> 
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return <ExperiencesClient dict={dict} />;
}