import React from 'react';
import { motion } from 'framer-motion';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      {/* Deep atmosphere gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gray-950 to-black" />
      
      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/30 blur-[120px]" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/20 blur-[130px]" 
      />

      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-indigo-900/20 blur-[100px]" 
      />
      
      {/* Noise texture for materiality */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
};