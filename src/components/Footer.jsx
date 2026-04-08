import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-16 pb-8 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient for footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-purple"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white shadow-lg group-hover:shadow-brand-blue/50 transition-all duration-300">
                <BookOpen size={20} />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                SKTC
              </span>
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
