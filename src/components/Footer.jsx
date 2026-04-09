import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-16 pb-8 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient for footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-purple"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border border-white/20 group-hover:shadow-brand-blue/30 transition-all duration-300 transform group-hover:-translate-y-1">
                <img src="/sktc-logo.png" alt="SKTC Logo" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none tracking-wide">
                  Sree Krishna
                </span>
                <span className="text-xs font-semibold text-brand-yellow/90 tracking-widest uppercase mt-1">
                  Tuition Center
                </span>
              </div>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              Sree Krishna Tuition Center is dedicated to shaping young minds through quality education, specialized coaching, and comprehensive support.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#home" className="hover:text-brand-blue transition-colors">Home</a></li>
              <li><a href="#syllabus" className="hover:text-brand-blue transition-colors">Syllabus</a></li>
              <li><a href="#subjects" className="hover:text-brand-blue transition-colors">Subjects</a></li>
              <li><a href="#about" className="hover:text-brand-blue transition-colors">About Founder</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Subjects Menu</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#subjects" className="hover:text-brand-yellow transition-colors">Mathematics</a></li>
              <li><a href="#subjects" className="hover:text-brand-yellow transition-colors">Accountancy</a></li>
              <li><a href="#subjects" className="hover:text-brand-yellow transition-colors">Computer Science</a></li>
              <li><a href="#subjects" className="hover:text-brand-yellow transition-colors">Science</a></li>
              <li><a href="#subjects" className="hover:text-brand-yellow transition-colors">Business Maths</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Sree Krishna Tuition Center. All rights reserved.</p>
          <p>Excellence in Education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
