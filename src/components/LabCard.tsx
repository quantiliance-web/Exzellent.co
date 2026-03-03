import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface LabCardProps {
  type: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
  accentColor: string;
}

const LabCard: React.FC<LabCardProps> = ({ type, title, description, items, icon, accentColor }) => {
  const isLanguage = type === 'language';
  const isCareer = type === 'career';
  const labUrl = isLanguage ? '/language-lab' : isCareer ? '/career-lab' : '/skills-lab';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative overflow-hidden bg-surface border border-border rounded-3xl p-8 h-full flex flex-col group transition-all duration-500 ${
        isLanguage ? 'hover:border-primary/50' : isCareer ? 'hover:border-amber-500/50' : 'hover:border-secondary/50'
      }`}
    >
      {/* Background Glow */}
      <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full ${
        isLanguage ? 'bg-primary' : isCareer ? 'bg-amber-500' : 'bg-secondary'
      }`} />

      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-3xl ${
          isLanguage ? 'bg-primary/10 text-primary' : isCareer ? 'bg-amber-500/10 text-amber-500' : 'bg-secondary/10 text-secondary'
        }`}>
          {icon}
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-text-secondary mb-8 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mb-10 flex-grow">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
              <div className={`w-1.5 h-1.5 rounded-full ${
                isLanguage ? 'bg-primary' : isCareer ? 'bg-amber-500' : 'bg-secondary'
              }`} />
              {item}
            </div>
          ))}
        </div>

        <Link
          to={labUrl}
          className={`inline-flex items-center gap-2 font-bold text-lg group/btn ${
            isLanguage ? 'text-primary' : isCareer ? 'text-amber-500' : 'text-secondary'
          }`}
        >
          Explore Lab
          <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={20} />
        </Link>
      </div>
    </motion.div>
  );
};

export default LabCard;
