import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/index.css';
import { Providers } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#111827',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com'),
  title: {
    default: 'Senior Full-Stack Developer | Portfolio',
    template: '%s | Sumit Giri',
  },
  description:
    'Senior Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable, high-performance web applications.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Web Development',
    'Software Engineer',
  ],
  authors: [
    {
      name: 'Sumit Giri',
      url: 'https://johndoe.dev',
    },
  ],
  creator: 'Sumit Giri',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'Full-Stack Developer | Sumit Giri',
    description: 'Building exceptional digital experiences with modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sumit Giri - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Full-Stack Developer | Sumit Giri',
    description: 'Building exceptional digital experiences with modern web technologies.',
    creator: '@johndoe',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google_site_verification_code_here',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
