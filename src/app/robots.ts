import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sumitkumargiri.github.io/sumitfolio.dev/sitemap.xml',
  };
}