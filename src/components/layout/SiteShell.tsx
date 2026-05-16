import type { ReactNode } from 'react';

import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { CursorGlow } from '@/components/effects/CursorGlow';
import { LoadingScreen } from '@/components/effects/LoadingScreen';

interface SiteShellProps {
  children: ReactNode;
  mainClassName?: string;
  title?: string;
  subtitle?: string;
  headerImageSrc?: string;
  headerImageAlt?: string;
}

export function SiteShell({
  children,
  mainClassName = '',
  title,
  subtitle,
  headerImageSrc,
  headerImageAlt,
}: SiteShellProps) {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        <CursorGlow />
        <Navbar />

        <main className={`relative pt-16 ${mainClassName}`.trim()}>
         <header className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/*------ Background Image ---------*/}
            {headerImageSrc && (
              <>
                <img
                  src={headerImageSrc}
                  alt={headerImageAlt || 'Background'}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-gray-900/80" />
              </>
            )}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="max-w-3xl">
                {title && (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="mt-5 text-base md:text-lg text-gray-200 leading-relaxed">
                    {subtitle}
                  </p>
                )}
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

              </div>
            </div>
          </header>
          {children}
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
