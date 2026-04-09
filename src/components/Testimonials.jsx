import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const allReviews = [
    {
      name: "Arjun M.",
      grade: "Class 12, CBSE",
      text: "The way Mathematics is taught here completely changed my perspective. I was scoring 60s and eventually scored a 95 in my board exams. The mock tests were lifesavers!",
      rating: 5
    },
    {
      name: "Sneha R.",
      grade: "Parent",
      text: "Sree Krishna Tuition Center provided the exact personalized attention my daughter needed for Accountancy. The teachers are incredibly patient.",
      rating: 5
    },
    {
      name: "Rahul K.",
      grade: "Class 10, Stateboard",
      text: "Science and Computer Science used to be so tough for me. The concept-first approach cleared all my doubts. I highly recommend joining SKTC.",
      rating: 5
    },
    {
      name: "Divya S.",
      grade: "Class 11, ICSE",
      text: "I joined for Business Maths and the results were immediate. The syllabus coverage is thorough and they ensure you practice enough previous year papers.",
      rating: 5
    },
    {
      name: "Vikram T.",
      grade: "Class 12, Stateboard",
      text: "Securing an A+ felt impossible until I joined SKTC. The environment is extremely motivating. Best tuition center near SK Avenue without a doubt!",
      rating: 5
    },
    {
      name: "Manoj P.",
      grade: "Class 10, ICSE",
      text: "The small batch sizes made a huge difference. I never felt shy to ask questions, and the teachers took the time to explain every single formula to me.",
      rating: 5
    }
  ];

  // Chunk the reviews into pages of 3 (Desktop) 
  // Note: On mobile, responsive grid classes will stack them vertically, which actually looks great.
  const itemsPerPage = 3;
  const pages = [];
  for (let i = 0; i < allReviews.length; i += itemsPerPage) {
    pages.push(allReviews.slice(i, i + itemsPerPage));
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextPage();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-l-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-12 relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-brand-navy mb-4 inline-block relative"
          >
            Student Success Stories
          </motion.h2>
          <p className="text-slate-600 text-lg mt-2 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from those who have secured top ranks with us.
          </p>
        </div>

        {/* Chunked Slider */}
        <div className="relative w-full">
          {/* Navigation Arrows - Sides */}
          <button 
            onClick={prevPage}
            className="absolute -left-4 xl:-left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass-dark border border-white/20 flex items-center justify-center text-white hover:text-brand-yellow hover:scale-110 transition-all shadow-2xl focus:outline-none hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextPage}
            className="absolute -right-4 xl:-right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass-dark border border-white/20 flex items-center justify-center text-white hover:text-brand-yellow hover:scale-110 transition-all shadow-2xl focus:outline-none hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative min-h-[450px] md:min-h-[350px] w-full overflow-hidden px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {pages[currentPage].map((review, idx) => (
                <div 
                  key={idx} 
                  className="glass-dark rounded-3xl p-8 relative shadow-xl border border-white/10 flex flex-col h-full"
                >
                  <Quote className="absolute top-6 right-6 text-white/5" size={60} />
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-brand-yellow fill-brand-yellow drop-shadow-sm" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 italic mb-8 relative z-10 leading-relaxed font-light flex-grow">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-yellow to-brand-blue flex items-center justify-center text-brand-navy font-bold text-lg shadow-md shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{review.name}</h4>
                      <p className="text-xs font-medium text-brand-yellow/80">{review.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12 relative z-20">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentPage === idx 
                  ? "w-8 h-2.5 bg-brand-blue shadow-lg shadow-brand-blue/30" 
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-brand-blue/50"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
