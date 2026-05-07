'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    secondary: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    accent: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${variants[variant]}`}>
      {children}
    </span>
  );
}
