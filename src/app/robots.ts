import type { MetadataRoute } from 'next';
import { ROUTES, absoluteUrl } from '@/constants/routes';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

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
