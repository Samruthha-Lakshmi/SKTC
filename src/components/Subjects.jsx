import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Code, BrainCircuit } from 'lucide-react';

const subjects = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    icon: <Calculator className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Master complex equations, trigonometry, calculus, and foundational logic required for high-scoring exams.'
  },
  {
    id: 'accountancy',
    title: 'Accountancy',
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    gradient: 'from-emerald-400 to-teal-600',
    description: 'Clear concepts in financial accounting, balance sheets, and commerce principles for advanced students.'
  },
  {
    id: 'computerscience',
    title: 'Computer Science',
    icon: <Code className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    gradient: 'from-brand-purple to-pink-600',
    description: 'Programming fundamentals, data structures, and IT skills to prepare for the digital future.'
  },
  {
    id: 'science',
    title: 'Science & Others',
    icon: <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    gradient: 'from-orange-400 to-brand-yellow',
    description: 'Physics, Chemistry, and Biology essentials designed comprehensively for board excellence.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Subjects = () => {
  return (
    <section id="subjects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-navy mb-4 inline-block relative"
          >
            Core Subjects Offered
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"></div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto"
          >
            Specialized coaching focusing on logical understanding and perfect scoring techniques.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {subjects.map((sub) => (
            <motion.div
              key={sub.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer border border-white/60 shadow-xl transition-all duration-300"
            >
              {/* Card hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sub.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-6 shadow-lg bg-gradient-to-br ${sub.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {sub.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                {sub.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                {sub.description}
              </p>
              
              {/* Decorative circle */}
              <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br ${sub.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Subjects;
