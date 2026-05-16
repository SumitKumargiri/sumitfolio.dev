'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';


interface ProjectsProps {
  variant?: 'section' | 'page';
}

export function Projects({ variant = 'section' }: ProjectsProps) {
  const [filter, setFilter] = useState('All');
  const basePath = process.env.NODE_ENV === 'production'? '/sumitfolio.dev': '';

  const projects = [
    {
      title: 'Babblio English Learning App',
      description:'An AI-powered English learning and communication platform designed to improve speaking, pronunciation, grammar,    vocabulary, and real-world conversation skills. The application provides personalized learning experiences, interactive' 
      + 'lessons, speech recognition–based pronunciation feedback, adaptive practice sessions, and progress tracking for students,'  + 'professionals, and English learners.',
      image: '/headers/Babblio.png',
      tech: [ 'Dotnet','PostgresSQL','SignalR','Clean Architecture','JWt Token'],
      category: 'Mobile App',
      github: '#',
      demo: 'https://play.google.com/store/apps/details?id=com.babblio.android',
    },
    {
      title: 'Customer Inventory Management System',
      description: 'A scalable full-stack inventory management system built with React and .NET using Clean Architecture principles.' 
           + 'The platform supports real-time inventory tracking, customer management, live stock updates using SignalR and WebSocket communication, interactive dashboards with amCharts, and secure SQL Server data management for enterprise-level performance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      tech: [ 'React','.NET','Clean Architecture','SignalR','WebSocket','Hub','SQL Server','amCharts','jest test cases'],
      category: 'Full-Stack',
      github: 'https://github.com',
      demo: 'https://connexiahub-dev.connexia.championx.com/',
    },
    {
      title: 'Fleet & Transportation Management Platform',
      description:'An enterprise-grade full-stack logistics and fleet management platform inspired by real-world transportation workflows and supply chain operations. Built with React, .NET, and Clean Architecture, the system enables real-time fleet tracking, route optimization, shipment monitoring, customer management, transport planning, live notifications with SignalR and WebSockets, analytics dashboards using amCharts, and secure SQL Server–based data processing. The platform supports scalable cloud deployment, role-based access control, API integrations, reporting modules, and operational visibility for modern logistics ecosystems.',
      image: "/headers/fleetx.png",
      tech: ['Angular','.NET Core','Clean Architecture','SQL Server','REST API','JWT Authentication',
        'Redis','Unit Testing'],
      category: 'Full-Stack',
      github: 'https://github.com/SumitKumargiri',
      demo:'https://cnx-championxconnect-portal-dev.azurewebsites.net/Account/Login?app=fleetx-dev.connexia.championx.com/#/home',
    },
    {
      "title": "Babblio Learning Dashboard",
      "description": "A modern AI-powered learning management dashboard designed to monitor learner progress, manage courses, track performance analytics, and improve communication-based learning experiences. The dashboard provides real-time insights, learner management, AI conversation monitoring, reporting tools, and interactive analytics to help educators and organizations make data-driven decisions efficiently.",
      "image": "/headers/Babbliodashboard.png",
      "tech": ["Dotnet Web API","React","Ant Design","Postgresql","Base64","Ant design","PDFViewModel"],
      "category": "Full Stack",
      "github": "#",
      "demo": "https://dashboard.babblio.io/"
    },
    {
      title: 'Task Management SaaS',
      description: 'Project management tool with team collaboration, real-time updates, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      tech: ['Dotnet','Clean Architecture', 'TypeScript', 'PostgreSQL', 'Angular'],
      category: 'Full-Stack',
      github: 'https://github.com/SumitKumargiri/TaskManagement',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'D3.js', 'Firebase'],
      category: 'Frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'REST API Gateway',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      tech: ['Dotnet', 'Clean Architecture', 'Redis', 'Dapper','SignalR','Unit Testing'],
      category: 'Backend',
      github: 'https://github.com/SumitKumargiri/Dotnet-Core8',
      demo: 'https://example.com',
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool using OpenAI API with custom templates.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
      category: 'Full-Stack',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Real-time Chat App',
      description: 'WebSocket-based chat application with rooms, direct messaging, and file sharing.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Socket.io', 'Websocket', 'SignalR','Tailwind CSS'],
      category: 'Frontend',
      github: 'https://github.com/Sumitgiriyoeki/ChatApplication',
      demo: 'https://sumitgiriyoeki.github.io/ChatApplication/',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

  // const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const filteredProjects = filter === 'All'? projects: projects.filter((p) => p.category === filter);
  const displayedProjects = variant === 'section'? filteredProjects.slice(0, 3): filteredProjects;

  return (
    <section id="projects"
      className={`px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/10 to-purple-900/10 ${
        variant === 'page' ? 'py-16' : 'py-32'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {variant === 'section' && (
            <>
              <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
            </>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <Card key={index} glass hover className="overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-800">
                <Image
                  src={project.image.startsWith('http://') || project.image.startsWith('https://')
                      ? project.image: `${basePath}${project.image}`
                  }
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6 max-h-[60px] overflow-hidden">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
