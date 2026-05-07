'use client';

import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { CursorGlow } from '@/components/effects/CursorGlow';
import { LoadingScreen } from '@/components/effects/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        <CursorGlow />

        <Navbar />

        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
