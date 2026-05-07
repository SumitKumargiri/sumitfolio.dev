/**
 * Application-wide constants
 */

export const APP_NAME = 'Developer Portfolio';
export const APP_DESCRIPTION = 'Senior Full-Stack Developer specializing in React, Next.js, and Node.js';

export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export { NAV_ITEMS, ROUTES, SECTIONS } from './routes';

// Social Links
export const SOCIAL_LINKS = [
  { icon: 'Github', href: 'https://github.com', label: 'GitHub' },
  { icon: 'Linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'Twitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'Mail', href: 'mailto:sumitgiri15434@gmail.com', label: 'Email' },
] as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Colors
export const COLORS = {
  PRIMARY: '#3b82f6',
  SECONDARY: '#a855f7',
  ACCENT: '#06b6d4',
  SUCCESS: '#10b981',
  ERROR: '#ef4444',
  WARNING: '#f59e0b',
} as const;
