import React from 'react';
import { Cpu, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020203] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Cpu className="text-vedic-orange" />
              <span className="text-xl font-tech font-bold tracking-widest text-white">
                ANCIENT <span className="text-vedic-orange">AI</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Re-engineering human consciousness through the timeless science of Bhakti Yoga. Based on the teachings of A.C. Bhaktivedanta Swami Prabhupada.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-tech uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/#architecture" className="hover:text-vedic-orange transition-colors">The Course</a></li>
              <li><a href="/outreach" className="hover:text-vedic-orange transition-colors">Mentorship</a></li>
              <li><a href="/events" className="hover:text-vedic-orange transition-colors">Events</a></li>
              <li><a href="/get-involved" className="hover:text-vedic-orange transition-colors">Scholarships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-tech uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:bg-vedic-orange hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:bg-vedic-orange hover:text-black transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:bg-vedic-orange hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-tech uppercase tracking-widest">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; 2025 Ancient AI University. All rights reserved.</p>
            <span className="hidden md:block text-white/20">|</span>
            <p className="text-vedic-orange">Made with love and devotion!</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Protocol</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
