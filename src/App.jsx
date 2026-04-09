import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Syllabus from './components/Syllabus';
import Subjects from './components/Subjects';
import Achievers from './components/Achievers';
import Profile from './components/Profile';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Dynamic background blobez for 3D/glass effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-brand-purple/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-brand-yellow/10 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Syllabus />
          <Subjects />
          <Achievers />
          <Profile />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
