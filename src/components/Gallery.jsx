import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import stud1 from "../assets/stud1.png";
import stud2 from "../assets/stud2.png";
import stud3 from "../assets/stud3.png";
import stud4 from "../assets/stud4.png";
import stud5 from "../assets/stud5.png";

const Gallery = () => {
  // To add your own images anytime, simply add your image file (e.g., student_pic.jpg) 
  // to the 'public' folder and replace the URLs below with the file name like: "/student_pic.jpg"
  const galleryImages = [
  { id: 1, src: stud5, span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: stud1, span: "col-span-1" },
  { id: 3, src: stud2, span: "col-span-1" },
  { id: 4, src: stud3, span: "col-span-1" },
  { id: 5, src: stud4, span: "col-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 relative bg-brand-navy border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <Camera size={18} className="text-brand-blue" />
            <span className="text-sm font-semibold text-white tracking-wide uppercase">Life at SKTC</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4 block"
          >
            Our Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Gallery</span>
          </motion.h2>
          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
            Take a look inside our classrooms. A motivating, distraction-free environment built entirely for focused learning and success.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[220px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg ${img.span}`}
            >
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={img.src} 
                alt="SKTC Gallery" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl z-20 pointer-events-none transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;
