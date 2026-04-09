import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mzdkwvwz", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto glass rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-xl border border-white/60">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-3 sm:mb-4">Get in Touch</h2>
            <p className="text-slate-600">Have questions? We'd love to hear from you. Register now for the upcoming batches.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
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
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-2 shadow-sm">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy">Thank You!</h3>
                    <p className="text-slate-600 px-4">
                      Your enquiry has been submitted. We will get back to you shortly to confirm the details.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-brand-blue font-medium hover:underline focus:outline-none"
                    >
                      Submit another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-xl font-bold text-brand-navy mb-6">Quick Enquiry</h3>
                    <form 
                      onSubmit={handleSubmit}
                      className="space-y-4 text-left"
                    >
                      <div>
                        <input type="text" name="student_name" placeholder="Student Name" className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-slate-200 transition-all text-slate-800" required />
                      </div>
                      <div>
                        <input 
                          type="tel" 
                          name="phone_number" 
                          placeholder="Phone Number (10 digits)" 
                          pattern="[0-9]{10}" 
                          maxLength="10" 
                          minLength="10" 
                          title="Please enter exactly 10 digits"
                          className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-slate-200 transition-all text-slate-800" 
                          required 
                        />
                      </div>
                      <div>
                        <select name="board" className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-slate-200 transition-all text-slate-500" required>
                          <option value="">Select Board</option>
                          <option value="state">Stateboard</option>
                          <option value="cbse">CBSE</option>
                          <option value="icse">ICSE</option>
                        </select>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-navy text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 transition-all duration-300">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
