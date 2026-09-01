import 'server-only'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  it: () => import('../dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'it') => {
  // If the locale is missing or invalid, fallback to English safely
  const loadDict = dictionaries[locale] ?? dictionaries.en;
  return loadDict();
}