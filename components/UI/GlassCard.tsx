import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false, 
  onClick,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} // Apple-like spring
      whileHover={hoverEffect ? { scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.12)' } : {}}
      whileTap={hoverEffect ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        glass-panel 
        relative overflow-hidden
        rounded-[2rem] 
        text-white
        transition-colors duration-300
        ${hoverEffect ? 'cursor-pointer' : ''} 
        ${className}
      `}
    >
      {/* Specular gradient shine for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const GlassButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  className?: string;
}> = ({ children, onClick, primary = false, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-medium text-sm tracking-wide
        backdrop-blur-md transition-all duration-300
        border border-white/10
        ${primary 
          ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]' 
          : 'bg-white/10 text-white hover:bg-white/20'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};