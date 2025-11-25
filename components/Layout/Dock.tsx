import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, User, Mail } from 'lucide-react';
import { NavItem, SectionId } from '../../types';

interface DockProps {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'work', label: 'Work', icon: <Briefcase size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

export const Dock: React.FC<DockProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-panel rounded-full p-2 flex items-center space-x-2 shadow-2xl border border-white/20">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                relative p-4 rounded-full flex items-center justify-center
                transition-all duration-300 outline-none
                ${isActive ? 'text-black' : 'text-white/70 hover:text-white hover:bg-white/10'}
              `}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center">
                {item.icon}
              </span>
              
              {/* Tooltip effect on hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900/80 backdrop-blur-md rounded-lg text-xs opacity-0 hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                {item.label}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};