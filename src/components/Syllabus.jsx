import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked, CheckCircle2 } from 'lucide-react';

const Syllabus = () => {
  const boards = [
    { name: 'Stateboard', color: 'from-brand-blue to-cyan-500' },
    { name: 'CBSE', color: 'from-brand-yellow to-orange-500' },
    { name: 'ICSE', color: 'from-brand-purple to-pink-500' }
  ];

  return (
    <section id="syllabus" className="py-20 relative bg-white/40 border-y border-white/60">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">
              Comprehensive <span className="text-gradient">Syllabus</span> Coverage
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We provide tailored instruction methods adapted perfectly to the requirements and examination patterns of different educational boards. Our materials ensure that every student is board-ready.
            </p>
            
            <ul className="space-y-4">
              {['Concept-based learning techniques', 'Previous year question paper solving', 'Regular mock tests and evaluations'].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-blue" size={24} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {boards.map((board, index) => (
              <motion.div
                key={board.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border border-white/80"
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${board.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                  <BookMarked size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{board.name}</h3>
                <div className="mt-3 w-12 h-1 bg-slate-200 mx-auto rounded-full"></div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
