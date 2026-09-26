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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://sumitkumargiri.github.io/sumitfolio.dev'),
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
      url: 'https://sumitkumargiri.github.io/sumitfolio.dev',
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
    url: 'https://sumitkumargiri.github.io/sumitfolio.dev',
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
    creator: '@sumitkumargiri',
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
    google: 'google50036ce6672e08c7.html',
  },
};


const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sumit Giri",
  url: "https://sumitkumargiri.github.io/sumitfolio.dev/",
  image: "https://sumitkumargiri.github.io/sumitfolio.dev/headers/sumit-giri.jpg", 
  jobTitle: "Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, Next.js, TypeScript, .NET and IIS,CI/CD,SQL SERVER,Angular",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    ".NET",
    "IIS",
    "CI/CD",
    "SQL Server",
    "Angular"
  ],
  sameAs: [
    "https://github.com/SumitKumargiri",
    "https://www.linkedin.com/in/sumit-giri-524718214/",
    "https://www.youtube.com/@SKtutorial15434",
    "https://www.instagram.com/goshwamiaaditya/",
    "https://www.facebook.com/aaditya.goshwami.39/"
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}
