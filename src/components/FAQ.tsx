import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the difference between the Language and Skills Labs?",
    answer: "The Language Lab focuses on professional communication and linguistic mastery (CEFR standards), while the Skills Lab is dedicated to high-impact technical skills like AI, Web3, and Automation."
  },
  {
    question: "Are the courses self-paced or live?",
    answer: "We offer a mix of both. Our 'Courses' and 'Micro Courses' are self-paced, while 'Bootcamps' and 'Webinars' often feature live sessions and cohort-based learning."
  },
  {
    question: "Do I receive a certificate upon completion?",
    answer: "Yes, every successfully completed course or bootcamp comes with a verified digital certificate that you can share on LinkedIn or your professional portfolio."
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "Once you enroll in a course, you have lifetime access to the materials, including any future updates we make to the curriculum."
  },
  {
    question: "Is there a community for learners?",
    answer: "Absolutely. Every lab has its own dedicated community space where you can interact with peers, share projects, and get feedback from instructors."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-surface text-text-secondary'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary pb-6 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-text-secondary">Everything you need to know about the Exzellent platform.</p>
      </div>
      <div className="bg-surface/50 border border-border rounded-[2rem] p-8 md:p-12">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
