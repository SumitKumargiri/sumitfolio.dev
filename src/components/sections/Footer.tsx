'use client';

import { ROUTES } from '@/constants/routes';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/SumitKumargiri', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/sumit-giri-524718214', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:sumitgiri15434@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="text-3xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold">
            &lt;Dev/&gt;
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-110 text-gray-300 hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Sumit Giri
            </p>
            <span className="hidden sm:block">•</span>
            <p>&copy; {currentYear} All rights reserved</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
            <span>•</span>
            <Link href={ROUTES.pages.contact}>
              <button className="hover:text-blue-400 transition-colors">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
