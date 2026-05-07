import type { MetadataRoute } from 'next';
import { ROUTES, absoluteUrl } from '@/constants/routes';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://sumitkumargiri.github.io/sumitfolio.dev';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
    ],
    sitemap: absoluteUrl(baseUrl, ROUTES.meta.sitemap),
  };
}