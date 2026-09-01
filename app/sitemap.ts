import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.francescovalentinuzzi.com';

  // Your old settings, mapped to the new bilingual structure
  const routes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/portfolio', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/experiences', changeFrequency: 'weekly' as const, priority: 0.8 },
    // Including legal pages (typically lower priority and updated less often)
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.5 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach(({ path, changeFrequency, priority }) => {
    // English Entry
    sitemapEntries.push({
      url: `${baseUrl}/en${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          it: `${baseUrl}/it${path}`,
        },
      },
    });

    // Italian Entry
    sitemapEntries.push({
      url: `${baseUrl}/it${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path}`,
          it: `${baseUrl}/it${path}`,
        },
      },
    });
  });

  return sitemapEntries;
}