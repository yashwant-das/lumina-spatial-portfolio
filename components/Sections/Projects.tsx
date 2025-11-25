import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../UI/GlassCard';
import { Project } from '../../types';
import { Layers, ImageOff } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'OTT Automation Framework',
    category: 'Media & Entertainment',
    description: 'Architected a cloud-based media QC automation system using AWS Elemental and FFmpeg. Ensured high-quality video playback and DRM validation across Smart TVs, Fire TV, and Apple TV.',
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-1f4d0601f7b4?auto=format&fit=crop&q=80',
    tags: ['Python', 'AWS Elemental', 'Selenium', 'DRM']
  },
  {
    id: '2',
    title: 'Retail App Automation',
    category: 'Mobile Quality',
    description: 'Built a cross-platform testing framework for a major Latin American retailer (Falabella), serving 35M+ customers. Reduced regression cycles by 40% using Cucumber & Appium.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-415522f96319?auto=format&fit=crop&q=80',
    tags: ['Appium', 'Cucumber', 'CI/CD', 'Mobile']
  },
  {
    id: '3',
    title: 'Smart TV Certification',
    category: 'Device Testing',
    description: 'Led global App Store Certification testing for Microsoft Xbox and Amazon Fire TV. Validated MPEG-DASH/HLS streams and implemented regional content restriction policies.',
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80',
    tags: ['Xbox', 'FireTV', 'Roku', 'Conviva']
  },
  {
    id: '4',
    title: 'Fintech Payment Security',
    category: 'API & Security',
    description: 'Validated secure payment gateways and checkout flows for multi-million user platforms. Performed rigorous API testing (REST/SOAP) and database integrity checks.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    tags: ['RestAssured', 'SQL', 'Security', 'Fintech']
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <GlassCard hoverEffect delay={index * 0.1} className="group min-h-[400px] flex flex-col">
      <div className={`h-64 w-full overflow-hidden relative transition-colors duration-500 ${imageError ? 'bg-gradient-to-br from-slate-800 to-black' : 'bg-slate-900'}`}>
         <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />
         
         {!imageError ? (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
         ) : (
           <div className="w-full h-full flex flex-col items-center justify-center text-white/20">
             <ImageOff size={48} className="mb-2" />
             <span className="text-xs uppercase tracking-widest font-medium">Preview Unavailable</span>
           </div>
         )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">{project.category}</span>
            <h3 className="text-2xl font-semibold mt-1">{project.title}</h3>
          </div>
          <div className="flex gap-2">
            <div className="p-2 rounded-full bg-white/5 text-white/50">
              <Layers size={18} />
            </div>
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
  );
};

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 space-y-2"
      >
        <h2 className="text-4xl font-bold">Key Projects</h2>
        <p className="text-white/60 text-lg">Delivering quality at the intersection of media and technology.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};