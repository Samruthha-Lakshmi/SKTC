import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer demo or trial classes before enrollment?",
      answer: "Yes! We encourage students to attend a 2-day free trial class. This helps them understand our teaching methodology and ensures they are comfortable before committing."
    },
    {
      question: "What is the typical size of a batch?",
      answer: "To ensure personalized attention, we strictly cap our batch sizes at 15 students. This allows our teachers to monitor each student's progress closely and clear doubts instantly."
    },
    {
      question: "Are there separate batches for Stateboard, CBSE, and ICSE?",
      answer: "Absolutely. The curriculum, examination pattern, and scoring techniques vary drastically between boards. We have dedicated faculty and segregated batches for each syllabus."
    },
    {
      question: "What happens if my child misses a class?",
      answer: "We offer special makeup sessions on weekends for students who miss classes due to valid reasons. Additionally, summary notes are always provided to help them catch up."
    },
    {
      question: "Do you provide study materials and mock tests?",
      answer: "Yes, comprehensive chapter-wise study materials, quick-revision mind maps, and past paper booklets are provided. We conduct mock tests every alternate Sunday to track progress."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-slate-200 mb-6 shadow-sm">
              <HelpCircle size={18} className="text-brand-blue" />
              <span className="text-sm font-semibold text-brand-navy tracking-wide uppercase">Common Queries</span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight"
            >
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Questions</span>
            </motion.h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              We know that as a parent or student, you have questions. We have compiled the most common inquiries about our batches, methodology, and structure.
            </p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? 'border-brand-blue/50 shadow-lg shadow-brand-blue/10 bg-white/80' : 'border-white/60 hover:border-brand-blue/30 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg md:text-xl transition-colors ${activeIndex === index ? 'text-brand-blue' : 'text-brand-navy'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      activeIndex === index ? 'bg-brand-blue text-white' : 'glass-dark text-slate-500'
                    }`}>
                      {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
