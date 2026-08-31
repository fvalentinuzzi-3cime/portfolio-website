// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.francescovalentinuzzi.com'; // Replace with your actual domain

  return {
    rules: {
      // This allows all bots (including LLMs like GPTBot and Google-Extended) to read your site
      userAgent: '*',
      allow: '/',
    },
    // THIS IS THE KEY: Pointing bots directly to your sitemap
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}