import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Ancient AI?",
      answer: "Ancient AI is a platform that synthesizes Vedic wisdom with modern technology. We believe that the ancient scriptures contain the source code for human consciousness, and we use AI to decode and distribute this knowledge."
    },
    {
      question: "Is this a religious organization?",
      answer: "No. We are a spiritual technology company. We study the universal principles of dharma and consciousness, which transcend religious boundaries."
    },
    {
      question: "How do the courses work?",
      answer: "Our courses are designed as 'modules' for your mind. They combine video lectures, guided meditations, and practical exercises. Once you purchase a module, you have lifetime access to the content."
    },
    {
      question: "What is the 'Sangha'?",
      answer: "The Sangha is our community of seekers. It is a network of individuals who are committed to their spiritual growth. We host regular meetups, both online and offline."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee on all our digital products. If you are not satisfied with your upgrade, you can request a full refund."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-vedic-orange font-tech text-lg tracking-widest mb-2">SUPPORT</h2>
        <h1 className="text-5xl md:text-7xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r from-white via-vedic-gold to-white mb-6">
          FAQs
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Common queries regarding the system update.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-white/10 rounded-2xl bg-cyber-panel overflow-hidden"
          >
            <button
              className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="text-lg font-bold text-white font-tech">{faq.question}</span>
              {activeIndex === index ? (
                <Minus className="text-vedic-orange" />
              ) : (
                <Plus className="text-gray-400" />
              )}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
