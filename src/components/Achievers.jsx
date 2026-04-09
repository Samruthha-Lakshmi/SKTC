import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal } from 'lucide-react';

const Achievers = () => {
  const topScorers = [
    { name: "Priya S.", score: "100/100", subject: "Mathematics", board: "Stateboard", accent: "from-brand-yellow to-orange-400", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Karthik R.", score: "99/100", subject: "Accountancy", board: "CBSE", accent: "from-brand-blue to-cyan-400", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Varsha M.", score: "98/100", subject: "Computer Science", board: "ICSE", accent: "from-brand-purple to-pink-500", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Siddharth T.", score: "95/100", subject: "Science (Overall)", board: "CBSE", accent: "from-emerald-400 to-teal-500", image: "https://randomuser.me/api/portraits/men/46.jpg" }
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
            Consistently producing top scores across all boards. These students turned their hard work into extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {topScorers.map((scorer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-[2rem] border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20"></div>
              
              <div className="relative p-6 sm:p-8 flex flex-col items-center text-center z-10">
                
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
                  {/* Floating Score Badge on bottom center of image */}
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
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Achievers;
