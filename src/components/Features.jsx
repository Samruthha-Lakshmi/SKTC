import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Target, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users size={32} className="text-white" />,
      title: "Small Batch Sizes",
      description: "We strictly limit our class sizes to ensure every single student receives personalized attention and doubt-clearing time.",
      bg: "from-brand-blue to-cyan-500"
    },
    {
      icon: <FileText size={32} className="text-white" />,
      title: "Weekly Mock Tests",
      description: "Regular evaluations help students overcome exam fear and manage their time efficiently for final boards.",
      bg: "from-brand-purple to-pink-500"
    },
    {
      icon: <Target size={32} className="text-white" />,
      title: "Concept-first Approach",
      description: "We focus on building a strong foundation of fundamental concepts rather than rote memorization.",
      bg: "from-brand-yellow to-orange-500"
    },
    {
      icon: <Trophy size={32} className="text-white" />,
      title: "Proven Results",
      description: "Consistent track record of our students producing top-tier scores in Stateboard, CBSE, and ICSE examinations.",
      bg: "from-brand-navy to-indigo-600"
    }
  ];

  return (
    <section className="py-20 relative bg-slate-100/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-brand-navy mb-4 inline-block relative"
          >
            Why Choose Us?
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-full"></div>
          </motion.h2>
          <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto">
            Our teaching methodology is crafted from years of experience to bring out the absolute best in every child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bg} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
