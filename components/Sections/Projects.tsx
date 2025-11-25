import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../UI/GlassCard';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Nebula OS',
    category: 'Spatial UI System',
    description: 'A concept operating system designed for spatial computing environments with gaze-based interactions.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'Three.js', 'Tailwind']
  },
  {
    id: '2',
    title: 'Aero Finance',
    category: 'Fintech Dashboard',
    description: 'Real-time financial visualization platform featuring glassmorphism and data streaming.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['TypeScript', 'D3.js', 'WebSocket']
  },
  {
    id: '3',
    title: 'Lumina Health',
    category: 'Mobile App',
    description: 'Wellness tracking application focusing on mental clarity and minimal interface design.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['React Native', 'HealthKit', 'GraphQL']
  },
  {
    id: '4',
    title: 'Quantum Chat',
    category: 'AI Interface',
    description: 'A next-generation chat interface leveraging LLMs for context-aware conversations.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['OpenAI', 'Next.js', 'Redis']
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 space-y-2"
      >
        <h2 className="text-4xl font-bold">Selected Work</h2>
        <p className="text-white/60 text-lg">Explorations in interface and experience.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <GlassCard key={project.id} hoverEffect delay={index * 0.1} className="group min-h-[400px] flex flex-col">
            <div className="h-64 w-full overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-semibold mt-1">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                    <Github size={18} />
                  </button>
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              
              <p className="text-white/70 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};