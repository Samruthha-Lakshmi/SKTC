import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, RotateCcw, FileSignature, ShieldCheck } from 'lucide-react';

// Individual Card Component to handle local flip state
const AchieverCard = ({ scorer, delayIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delayIndex * 0.15 }}
      // Standard h-[380px] to make sure both faces use the same physical dimension height
      className="relative w-full h-[380px] group cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="w-full h-full relative transition-all duration-700 ease-in-out" 
        style={{ 
          transformStyle: "preserve-3d", 
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" 
        }}
      >
        
        {/* --- FRONT FACE --- */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[2rem] border border-white/10 backdrop-blur-md overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 z-0"></div>
          
          <div className="relative p-6 sm:p-8 flex flex-col items-center text-center z-10 h-full">
            
            {/* Student Photo */}
            <div className="relative w-28 h-28 mb-4">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${scorer.accent} blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`}></div>
              <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden">
                <img 
                  src={scorer.image} 
                  alt={scorer.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Score Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white rounded-full shadow-lg border border-slate-200 flex items-center gap-1 z-20 whitespace-nowrap">
                <Medal size={14} className="text-brand-yellow" />
                <span className="text-xs font-black text-brand-navy">{scorer.score}</span>
              </div>
            </div>

            {/* Info Text */}
            <h3 className="text-xl font-bold text-white mb-1 mt-2">{scorer.name}</h3>
            <h4 className="font-medium text-slate-300 mb-3">
              {scorer.subject}
            </h4>
            
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium tracking-wide">
              {scorer.board}
            </div>

            {/* Premium View Button */}
            <div className="mt-auto pt-6 w-full opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white font-medium text-sm">
                <FileSignature size={16} className="text-brand-blue" />
                <span>View Marksheet</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div 
          className="absolute inset-0 w-full h-full rounded-[2rem] border border-white/20 bg-brand-navy shadow-3xl overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          {/* Content wrapping for the marksheet */}
          <div className="w-full h-full flex flex-col items-center justify-center relative p-1.5 bg-slate-900 group/back">
            <img 
              src={scorer.marksheet} 
              alt={`${scorer.name} Marksheet`} 
              className="w-full h-full object-cover rounded-[1.7rem] opacity-90 group-hover/back:opacity-100 transition-opacity duration-300" 
            />
            
            {/* Elegant Verified Badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 font-bold text-xs tracking-wide shadow-xl flex items-center gap-1.5">
              <ShieldCheck size={14} />
              <span>Verified Score</span>
            </div>

            {/* Premium Flip Back instruction */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center">
               <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium flex items-center gap-2">
                 <RotateCcw size={12} />
                 <span>Click to flip back</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Achievers = () => {
  const topScorers = [
    { name: "Priya S.", score: "100/100", subject: "Mathematics", board: "Stateboard", accent: "from-brand-yellow to-orange-400", image: "https://randomuser.me/api/portraits/women/44.jpg", marksheet: "/proven-results.png" },
    { name: "Karthik R.", score: "99/100", subject: "Accountancy", board: "CBSE", accent: "from-brand-blue to-cyan-400", image: "https://randomuser.me/api/portraits/men/32.jpg", marksheet: "/proven-results.png" },
    { name: "Varsha M.", score: "98/100", subject: "Computer Science", board: "ICSE", accent: "from-brand-purple to-pink-500", image: "https://randomuser.me/api/portraits/women/68.jpg", marksheet: "/proven-results.png" },
    { name: "Siddharth T.", score: "95/100", subject: "Science (Overall)", board: "CBSE", accent: "from-emerald-400 to-teal-500", image: "https://randomuser.me/api/portraits/men/46.jpg", marksheet: "/proven-results.png" }
  ];

  return (
    <section className="py-20 relative bg-brand-navy overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <Award size={18} className="text-brand-yellow" />
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Hall of Fame</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4 block"
          >
            Our Exceptional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-blue">Achievers</span>
          </motion.h2>
          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
            Consistently producing top scores across all boards. Click on any student's profile to view their verified marksheets!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {topScorers.map((scorer, index) => (
            <AchieverCard key={index} scorer={scorer} delayIndex={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Achievers;
