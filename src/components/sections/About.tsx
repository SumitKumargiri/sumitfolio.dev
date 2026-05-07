'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/Card';
import { Code, Database, Globe, Layers } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    },
    {
      icon: <Layers className="w-8 h-8 text-pink-400" />,
      title: 'Tools',
      items: ['Git', 'VS Code', 'Figma', 'Postman', 'Linux'],
    },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card glass>
            <h3 className="text-2xl mb-4 text-white">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate Full-Stack Developer with 3 years of experience building modern web
                applications. I specialize in creating scalable, high-performance solutions that solve real business
                problems.
              </p>
              <p>
                My journey in software development has taken me through various domains including e-commerce, fintech,
                and SaaS platforms. I believe in writing clean, maintainable code and following best practices.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or
                exploring the latest web technologies.
              </p>
            </div>
          </Card>

          <Card glass>
            <h3 className="text-2xl mb-4 text-white">What I Do</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Design and develop full-stack web applications from concept to deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Build RESTful APIs and microservices architectures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Implement modern frontend frameworks with responsive design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Optimize application performance and scalability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">▹</span>
                <span>Collaborate with cross-functional teams using Agile methodologies</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} hover glass>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-white/5 rounded-lg">{skill.icon}</div>
                <h4 className="text-xl mb-3 text-white">{skill.title}</h4>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <p key={i} className="text-sm text-gray-400">
                      {item}
                    </p>
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
