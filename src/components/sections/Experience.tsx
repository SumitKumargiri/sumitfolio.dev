'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/Card';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Yoeki Soft PVT. LTD.',
      role: 'Backend Developer',
      period: '2026 - Onboarding',
      location: 'Noida, Uttar Pradesh(UP)',
      achievements: [
        'Built scalable SaaS platform from ground up using React and Node.js',
        'Developed RESTful APIs handling 1M+ requests daily',
        'Integrated third-party payment systems (Stripe, PayPal)',
        'Reduced infrastructure costs by 40% through AWS optimization',
      ],
    },
    {
      company: 'Codrithm Technologies PVT. LTD.',
      role: 'Full Stack Developer',
      period: '2025 - 2026',
      location: 'Noida, Uttar Pradesh(UP)',
      achievements: [
        'Created responsive web applications using React and TypeScript',
        'Collaborated with UX team to implement pixel-perfect designs',
        'Improved website loading speed by 50%',
        'Implemented comprehensive testing with Jest and Cypress',
      ],
    },
    {
      company: 'Centre for Development of Advanced Computing (CDAC)',
      role: 'Junior Developer',
      period: '2024 - 2025',
      location: 'Mohali,Punjab(PB)',
      achievements: [
        'Developed client websites using HTML, CSS, JavaScript',
        'Participated in code reviews and agile ceremonies',
        'Learned full-stack development fundamentals',
        'Delivered 15+ projects on time and within budget',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} glass hover>
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-gray-300 text-sm">
                        <span className="text-purple-400 mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
