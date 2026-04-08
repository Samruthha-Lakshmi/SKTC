import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Profile = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-dark rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative shrink-0"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-brand-yellow via-brand-purple to-brand-blue shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-brand-navy bg-slate-800">
                  {/* Assuming image is placed in public folder as profile.jpg */}
                  <img
                    src="/profile.jpeg"
                    alt="Founder Profile"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://ui-avatars.com/api/?name=Founder&background=032147&color=fff&size=512";
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 glass p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float border-white/30">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-navy font-bold text-xl">
                  15+
                </div>
                <div className="text-sm font-semibold text-brand-navy leading-tight">
                  Years of <br /> Experience
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-white relative"
            >
              <Quote size={64} className="text-white/10 absolute -top-8 -left-8" />

              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur">
                Meet the Founder
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
                Guiding Students to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">Brilliance</span>
              </h2>

              <div className="space-y-4 text-slate-300 text-lg">
                <p>
                  As the driving force behind Sree Krishna Tuition Center, my mission has always been to provide quality education in a nurturing environment. We don't just teach subjects; we cultivate a deep understanding and love for learning.
                </p>
                <p>
                  Our personalized approach ensures that every student, whether in Stateboard, CBSE, or ICSE, receives the guidance they need to conquer Mathematics, Accountancy, Computer Science and beyond.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white tracking-wide">Founder</h4>
                  <h4 className="text-brand-yellow font-medium">R.Sujatha</h4>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
