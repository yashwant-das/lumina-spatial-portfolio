import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../UI/GlassCard';
import { Experience } from '../../types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Systems',
    period: '2021 - Present',
    description: 'Leading the spatial computing division, focusing on React-based VR interfaces and performance optimization.'
  },
  {
    id: '2',
    role: 'UI Developer',
    company: 'Creative Studio X',
    period: '2019 - 2021',
    description: 'Collaborated with designers to implement pixel-perfect, motion-rich web applications for Fortune 500 clients.'
  },
  {
    id: '3',
    role: 'Frontend Intern',
    company: 'StartUp Inc',
    period: '2018 - 2019',
    description: 'Developed core components for the design system and assisted in the migration to React.'
  }
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <GlassCard className="p-8 h-full flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-6">
              <img src="https://picsum.photos/300/300?grayscale" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold">Alex Chen</h3>
            <p className="text-white/50 mb-6">Spatial Interface Designer</p>
            <p className="text-white/80 leading-relaxed text-sm">
              Obsessed with the intersection of design and engineering. I create tools that feel like magic.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
               <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                 <div className="text-2xl font-bold">5+</div>
                 <div className="text-xs text-white/40">Years Exp.</div>
               </div>
               <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                 <div className="text-2xl font-bold">40+</div>
                 <div className="text-xs text-white/40">Projects</div>
               </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Experience Feed */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl font-bold mb-6">Experience</h2>
          </motion.div>
          
          {experiences.map((exp, index) => (
            <GlassCard key={exp.id} delay={index * 0.15} className="p-6 group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                <span className="text-sm font-mono text-white/40 bg-white/5 px-2 py-1 rounded">{exp.period}</span>
              </div>
              <div className="text-white/60 font-medium mb-3">{exp.company}</div>
              <p className="text-white/70 leading-relaxed text-sm">
                {exp.description}
              </p>
            </GlassCard>
          ))}

          {/* Tech Stack Mini-Grid */}
          <GlassCard delay={0.5} className="p-6 mt-8">
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Three.js', 'Node.js', 'GraphQL', 'Figma', 'Blender'].map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/5 transition-colors text-xs cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};