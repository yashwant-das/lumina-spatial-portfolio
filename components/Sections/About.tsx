import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../UI/GlassCard';
import { Experience } from '../../types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Specialist Quality Engineering',
    company: 'LTIMindtree',
    period: '2021 - 2024',
    description: 'Led QA & Test Automation for Fortune 500 clients including Paramount Pictures. Optimized API responsiveness, implemented AWS-based media QC automation, and drove agile transformation.'
  },
  {
    id: '2',
    role: 'QA Lead',
    company: 'Future Focus Infotech',
    period: '2019 - 2021',
    description: 'Managed international QA teams for Falabella (Latin America Retail). Built cross-platform automation frameworks using Cucumber & Appium for high-traffic mobile apps.'
  },
  {
    id: '3',
    role: 'Senior QA Engineer',
    company: 'Diagnal Technologies',
    period: '2017 - 2019',
    description: 'Specialized in OTT & VOD testing for Smart TVs, Xbox, and Fire TV. Integrated real-time analytics with Conviva and led app store certification testing.'
  }
];

const skills = [
  'Selenium', 'Appium', 'Playwright', 'Java', 'Python', 
  'AWS', 'Jenkins', 'Docker', 'API Testing', 'OTT/VOD', 
  'JMeter', 'REST Assured', 'CI/CD'
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
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-6 bg-gray-800">
               {/* Placeholder or Uploaded Image */}
               <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 text-3xl font-bold">
                 YD
               </div>
            </div>
            <h3 className="text-2xl font-bold">Yashwant Das</h3>
            <p className="text-white/50 mb-6">Senior Specialist QE</p>
            <p className="text-white/80 leading-relaxed text-sm">
              Expert in defining scalable test strategies, building robust automation frameworks, and ensuring seamless digital experiences.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
               <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                 <div className="text-2xl font-bold">12+</div>
                 <div className="text-xs text-white/40">Years Exp.</div>
               </div>
               <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                 <div className="text-2xl font-bold">OTT</div>
                 <div className="text-xs text-white/40">Specialist</div>
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
             <h2 className="text-3xl font-bold mb-6">Professional Journey</h2>
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

          {/* Skills Mini-Grid */}
          <GlassCard delay={0.5} className="p-6 mt-8">
            <h3 className="text-lg font-semibold mb-4">Technical Proficiency</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(tech => (
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