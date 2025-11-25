import React from 'react';
import { GlassCard, GlassButton } from '../UI/GlassCard';
import { Send, MapPin, Mail, Smartphone, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-32 px-6 max-w-4xl mx-auto flex items-center">
      <div className="w-full">
        <GlassCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-white/60">
                  Looking for a QA leader to drive automation strategy or optimize your streaming platforms? Let's connect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="text-white/80" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/40">Email</div>
                    <a href="mailto:yashworks@gmail.com" className="text-lg hover:text-blue-300 transition-colors">yashworks@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Smartphone className="text-white/80" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/40">Phone</div>
                    <div className="text-lg">+91-9958914416</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="text-white/80" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/40">Location</div>
                    <div className="text-lg">Bengaluru, India</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                 <GlassButton onClick={() => window.open('https://www.linkedin.com/in/yashwant-das/', '_blank')} className="w-full md:w-auto flex items-center justify-center gap-2">
                    <Linkedin size={18} /> Connect on LinkedIn
                 </GlassButton>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-black/40 focus:border-white/30 transition-all placeholder:text-white/20"
                  placeholder="Recruiter / Client Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-black/40 focus:border-white/30 transition-all placeholder:text-white/20"
                  placeholder="contact@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-black/40 focus:border-white/30 transition-all placeholder:text-white/20 resize-none"
                  placeholder="Discussing a potential role..."
                />
              </div>
              
              <GlassButton primary className="w-full mt-4 flex justify-center items-center gap-2">
                Send Message <Send size={16} />
              </GlassButton>
            </form>

          </div>
        </GlassCard>
      </div>
    </div>
  );
};