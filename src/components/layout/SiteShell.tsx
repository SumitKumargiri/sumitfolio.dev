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
}

export function SiteShell({ children, mainClassName = '', title, subtitle }: SiteShellProps) {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        <CursorGlow />

        <Navbar />

        <main className={`relative ${mainClassName}`.trim()}>
          {(title || subtitle) && (
            <header className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                {title && (
                  <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {title}
                  </h1>
                )}
                {subtitle && <p className="mt-3 text-gray-300 max-w-2xl">{subtitle}</p>}
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </header>
          )}

          {children}
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
