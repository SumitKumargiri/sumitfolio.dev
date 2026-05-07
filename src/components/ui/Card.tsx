'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className = '', hover = false, glass = true }: CardProps) {
  const glassStyles = glass
    ? 'bg-white/5 backdrop-blur-lg border border-white/10'
    : 'bg-gray-800/50 border border-gray-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`rounded-xl p-6 ${glassStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
