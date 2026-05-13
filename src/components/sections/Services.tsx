'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/Card';
import { Code, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

interface ServicesProps {
  variant?: 'section' | 'page';
}

export function Services({ variant = 'section' }: ServicesProps) {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Building responsive, modern websites and web applications using the latest technologies and best practices.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'SEO Friendly'],
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: 'Full Stack Development',
      description: 'End-to-end development of scalable applications from database design to frontend implementation.',
      features: ['Custom Solutions', 'Scalable Architecture', 'Database Design', 'API Development'],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'API Development',
      description: 'Creating robust RESTful and GraphQL APIs with proper authentication, documentation, and testing.',
      features: ['RESTful APIs', 'GraphQL', 'Documentation', 'Security'],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms with CI/CD pipelines and monitoring.',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring'],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Integration',
      description: 'Transforming designs into pixel-perfect, interactive user interfaces with smooth animations.',
      features: ['Figma to Code', 'Animations', 'Accessibility', 'Cross-browser'],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Responsive',
      description: 'Ensuring applications work seamlessly across all devices with mobile-first approach.',
      features: ['Mobile First', 'Progressive Web Apps', 'Touch Optimized', 'Offline Support'],
    },
  ];

  return (
    <section id="services" className={`${variant === 'page' ? 'py-16' : 'py-32'} px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {variant === 'section' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive development solutions tailored to bring your vision to life with cutting-edge technologies
              and proven expertise.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} glass hover>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
