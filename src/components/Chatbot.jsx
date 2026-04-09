import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import robot from "../assets/robot.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 Welcome to Sree Krishna Tuition Center. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), text: inputText, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simple bot logic
    setTimeout(() => {
      let botResponse = "Please leave your contact details or call us at +91 9283366426 for more information.";
      const lowerInput = userMessage.text.toLowerCase();

      if (lowerInput.includes("fee") || lowerInput.includes("price") || lowerInput.includes("cost")) {
        botResponse = "Our fee structure varies depending on the grade and board. Please call us at +91 9283366426 or use the contact form to get accurate details!";
      } else if (lowerInput.includes("subject") || lowerInput.includes("teach") || lowerInput.includes("classes")) {
        botResponse = "We teach Mathematics, Accountancy, Computer Science, and Science for Class 4 to 12. Which class are you inquiring for?";
      } else if (lowerInput.includes("time") || lowerInput.includes("hour") || lowerInput.includes("batch")) {
        botResponse = "We have flexible evening batches from Monday to Saturday. Let us know your preferred time!";
      } else if (lowerInput.includes("location") || lowerInput.includes("where") || lowerInput.includes("address")) {
        botResponse = "We are located near Nagavalliamman Kovil, SK Avenue. You can find the map link on our Contact section!";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, isBot: true }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-4 w-80 sm:w-96 h-[450px] glass-dark rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue to-brand-navy border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Bot size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">SKTC Assistant</h3>
                  <p className="text-white/70 text-xs text-left">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/90 backdrop-blur-sm">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                      msg.isBot 
                        ? "bg-white text-slate-700 border border-slate-100 rounded-tl-sm" 
                        : "bg-brand-blue text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all text-slate-700"
              />
              <button 
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-navy flex items-center justify-center text-white shadow-md hover:shadow-lg disabled:opacity-50 transition-all"
              >
                <Send size={16} className="-ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-6 z-50"
      >
        {isOpen ? (
    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg">
      <X size={24} />
    </div>
  ) : (
    <img
      src={robot}
      alt="Chatbot"
      className="w-20 h-20 object-contain animate-[wiggle_1.5s_infinite]"
    />
  )}
</motion.button>
    </div>
  );
};

export default Chatbot;
