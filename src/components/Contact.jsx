import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto glass rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white/60">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Get in Touch</h2>
            <p className="text-slate-600">Have questions? We'd love to hear from you. Register now for the upcoming batches.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy">Call Us</h4>
                  <p className="text-slate-600 text-lg mt-1 font-medium">+91 9283366426</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-purple shadow-sm group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy">Location</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    Near Nagavalliamman Kovil<br />
                    SK Avenue
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-yellow shadow-sm group-hover:bg-brand-yellow group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy">Working Hours</h4>
                  <p className="text-slate-600 mt-1">Monday - Saturday<br />Evening Batches Available</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form snippet */}
            <div className="bg-white/50 backdrop-blur max-w-md w-full rounded-2xl p-6 shadow-sm border border-white">
              <h3 className="text-xl font-bold text-brand-navy mb-6">Quick Enquiry</h3>
              <form 
              action="https://formspree.io/f/mzdkwvwz" 
              method="POST" 
              className="space-y-4 text-left"
              >
                <div>
                  <input type="text" placeholder="Student Name" className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-slate-200 transition-all text-slate-800" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-slate-200 transition-all text-slate-800" required />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-slate-200 transition-all text-slate-500">
                    <option value="">Select Board</option>
                    <option value="state">Stateboard</option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-navy text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
