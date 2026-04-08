import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Arjun M.",
      grade: "Class 12, CBSE",
      text: "The way Mathematics is taught here completely changed my perspective. I was scoring 60s and eventually scored a 95 in my board exams. The mock tests were lifesavers!",
      rating: 5
    },
    {
      name: "Sneha R.",
      grade: "Parent",
      text: "Sree Krishna Tuition Center provided the exact personalized attention my daughter needed for Accountancy. The teachers are incredibly patient and experienced.",
      rating: 5
    },
    {
      name: "Rahul K.",
      grade: "Class 10, Stateboard",
      text: "Science and Computer Science used to be so tough for me. The concept-first approach cleared all my doubts. I highly recommend joining SKTC for boards.",
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
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-l-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
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

        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-brand-navy hover:text-brand-blue hover:scale-110 transition-all shadow-md hover:shadow-xl focus:outline-none hidden sm:flex"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-brand-navy hover:text-brand-blue hover:scale-110 transition-all shadow-md hover:shadow-xl focus:outline-none hidden sm:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Slider */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[350px] w-full overflow-hidden flex justify-center items-center rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute w-full max-w-2xl mx-auto glass-dark rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10"
              >
                <Quote className="absolute top-6 right-8 text-white/5" size={80} />
                
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-brand-yellow fill-brand-yellow drop-shadow-sm" />
                  ))}
                </div>
                
                <p className="text-white/90 text-lg sm:text-xl italic mb-8 relative z-10 leading-relaxed font-light">
                  "{reviews[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-white/20 pt-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-yellow to-brand-blue flex items-center justify-center text-brand-navy font-black text-xl shadow-lg border-2 border-white/50">
                    {reviews[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{reviews[currentIndex].name}</h4>
                    <p className="text-sm font-medium text-brand-yellow/90">{reviews[currentIndex].grade}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? "w-8 h-2.5 bg-brand-blue shadow-lg shadow-brand-blue/30" 
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-brand-blue/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
