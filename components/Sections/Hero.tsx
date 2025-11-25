import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { GlassButton } from '../UI/GlassCard';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-light text-white/80 tracking-wider uppercase">
          Senior Specialist Quality Engineering
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-2">
          Architecting Quality <br /> at Scale.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          12+ years driving test automation, OTT streaming excellence, and CI/CD innovation for Fortune 500 platforms.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <GlassButton primary onClick={onExplore}>
            <span className="flex items-center gap-2">
              View Work <ArrowRight size={16} />
            </span>
          </GlassButton>
          <GlassButton onClick={() => window.open('https://www.linkedin.com/in/yashwant-das/', '_blank')}>
            LinkedIn Profile
          </GlassButton>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
};