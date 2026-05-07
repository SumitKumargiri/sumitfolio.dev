import { MetadataRoute } from 'next';
import { ROUTES, SECTIONS, absoluteUrl, sectionHash } from '@/constants/routes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://sumitkumargiri.github.io/sumitfolio.dev';
  return [
    {
      url: absoluteUrl(baseUrl, ROUTES.pages.home),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${absoluteUrl(baseUrl, ROUTES.pages.home)}${sectionHash(SECTIONS.about)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${absoluteUrl(baseUrl, ROUTES.pages.home)}${sectionHash(SECTIONS.experience)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${absoluteUrl(baseUrl, ROUTES.pages.home)}${sectionHash(SECTIONS.projects)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${absoluteUrl(baseUrl, ROUTES.pages.home)}${sectionHash(SECTIONS.services)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${absoluteUrl(baseUrl, ROUTES.pages.home)}${sectionHash(SECTIONS.testimonials)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${absoluteUrl(baseUrl, ROUTES.pages.home)}${sectionHash(SECTIONS.contact)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}