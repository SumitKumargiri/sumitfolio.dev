'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Card } from '@/components/ui/Card';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'John is an exceptional developer. He delivered our e-commerce platform ahead of schedule with outstanding quality. His attention to detail and problem-solving skills are remarkable.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO at DataFlow',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with John was a game-changer for our startup. He built a scalable architecture that handled our rapid growth seamlessly. Highly recommended!',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager at CloudSync',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: "John's expertise in both frontend and backend development made him the perfect choice for our project. He's professional, communicative, and delivers excellent results.",
    },
    {
      name: 'David Kim',
      role: 'Founder at AppVenture',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Incredible developer! John transformed our vision into reality with a beautiful, high-performance application. His technical skills and creativity are top-notch.',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400">What clients say about working with me</p>
        </motion.div>

        <div className="relative">
          <Card glass className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <Quote className="w-16 h-16 text-blue-400/20 mx-auto mb-6" />

                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="rounded-full object-cover border-2 border-blue-500"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-blue-500 w-8' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
