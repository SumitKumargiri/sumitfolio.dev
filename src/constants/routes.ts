/**
 * Centralized route configuration for the application.
 *
 * Next.js App Router: "routes" are file-system based, but keeping path constants
 * here avoids hardcoded strings across UI, metadata, and services.
 */

export const ROUTES = {
  pages: {
    home: '/',
    about: '/about',
    experience: '/experience',
    projects: '/projects',
    services: '/services',
    testimonials: '/testimonials',
    contact: '/contact',
  },
  meta: {
    sitemap: '/sitemap.xml',
    robots: '/robots.txt',
    manifest: '/site.webmanifest',
  },
} as const;

export const SECTIONS = {
  home: 'home',
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  services: 'services',
  testimonials: 'testimonials',
  contact: 'contact',
} as const;

export type AppRoutePath =
  | (typeof ROUTES.pages)[keyof typeof ROUTES.pages]
  | (typeof ROUTES.meta)[keyof typeof ROUTES.meta];

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export const NAV_ITEMS = [
  { label: 'Home', id: SECTIONS.home },
  { label: 'About', id: SECTIONS.about },
  { label: 'Experience', id: SECTIONS.experience },
  { label: 'Projects', id: SECTIONS.projects },
  { label: 'Services', id: SECTIONS.services },
  { label: 'Testimonials', id: SECTIONS.testimonials },
  { label: 'Contact', id: SECTIONS.contact },
] as const satisfies ReadonlyArray<{ label: string; id: SectionId }>;

export function sectionHash(id: SectionId): `#${SectionId}` {
  return `#${id}`;
}

export function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, '');
}

export function absoluteUrl(baseUrl: string, path: AppRoutePath) {
  return `${stripTrailingSlash(baseUrl)}${path}`;
}

