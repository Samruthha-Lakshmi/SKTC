import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 shadow-sm border-brand-yellow/30 bg-brand-yellow/10">
              <Star size={16} className="text-brand-yellow" />
              <span className="text-sm font-semibold text-brand-navy">Excellence in Education</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-brand-navy">
              Empowering Minds at <br />
              <span className="text-gradient">Sree Krishna</span>
              <br /> Tuition Center
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Dedicated coaching for Stateboard, CBSE, and ICSE syllabus. We focus on building strong fundamentals and ensuring academic excellence across all subjects from Class 4 to 12.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-navy text-white font-bold text-base sm:text-lg shadow-xl shadow-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/40 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                Join Classes Today
              </a>
              <a 
                href="#subjects" 
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full glass font-bold text-brand-navy text-base sm:text-lg hover:bg-white/80 transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Explore Subjects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 border-t border-slate-200/60 pt-6 sm:pt-8 text-center sm:text-left">
              {[
                { label: 'Classes', value: '4 to 12' },
                { label: 'Syllabus Focus', value: 'Complete' },
                { label: 'Support', value: 'Personalized' }
              ].map((stat, i) => (
                <div key={i} className="min-w-[40%] sm:min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-brand-navy">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] glass p-4 md:p-8">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 blur-xl"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-inner bg-white/50 backdrop-blur border border-white/60 flex items-center justify-center">
                
                {/* Abstract Premium Illustration instead of flat image */}
                <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-brand-blue/10 to-transparent flex items-center justify-center animate-spin-slow">
                </div>
                
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 glass rounded-2xl animate-float">
                  <GraduationCap size={80} className="text-brand-purple mb-4 drop-shadow-md" />
                  <h3 className="text-2xl font-bold text-brand-navy mb-2 shadow-sm">Your Success Journey</h3>
                  <p className="text-slate-600 font-medium">Starts right here.</p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl glass-dark flex items-center justify-center animate-float-delay-1">
                  <span className="text-2xl font-bold text-white">A+</span>
                </div>
                <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full glass bg-gradient-to-r from-brand-yellow to-orange-400 flex items-center justify-center animate-float-delay-2 p-1">
                 <div className="w-full h-full rounded-full bg-white/30 backdrop-blur border border-white border-opacity-50 flex items-center justify-center">
                   <span className="text-white font-black text-xl">100%</span>
                 </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
