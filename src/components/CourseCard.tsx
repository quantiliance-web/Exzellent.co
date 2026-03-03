import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: any;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const isLanguage = course.lab === 'language';
  
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Intermediate': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Advanced': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  const getCategoryColor = (category) => {
    if (isLanguage) return 'bg-primary/10 text-primary border-primary/20';
    if (course.lab === 'career') return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    
    switch (category) {
      case 'AI': return 'bg-violet-500/10 text-violet-500 border-violet-500/20';
      case 'Automation': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Web3': return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20';
      case 'Product': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Data': return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
      case 'Vibe Coding': return 'bg-pink-500/10 text-pink-500 border-pink-500/20';
      case 'Systems': return 'bg-teal-500/10 text-teal-500 border-teal-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group relative bg-surface border border-border rounded-2xl p-6 transition-all duration-300 ${isLanguage ? 'card-glow' : 'card-glow-secondary'}`}
    >
      <Link to={`/course/${course.id}`} className="block">
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl">{course.icon}</div>
          <div className="flex flex-col gap-2 items-end">
            {course.type && (
              <span className={`text-[10px] uppercase tracking-widest font-black px-2 py-1 rounded-md border ${course.type === 'Bootcamp' ? 'bg-secondary text-bg border-secondary' : 'bg-white/10 text-white border-white/20'}`}>
                {course.type}
              </span>
            )}
            <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md border ${getCategoryColor(course.skill || course.language)}`}>
              {course.skill || course.language}
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md border ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-6 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-xs text-text-secondary border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} className="text-secondary" />
              <span>{course.enrolled.toLocaleString()}</span>
            </div>
          </div>
          <div className="font-bold text-white">
            {course.price === 0 ? 'Free' : `₹${course.price.toLocaleString()}`}
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-primary hover:text-white text-white text-sm font-semibold transition-all">
            Enroll Now
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
