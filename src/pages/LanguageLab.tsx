import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const LanguageLab = () => {
  const [activeLanguage, setActiveLanguage] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const languageCourses = courses.filter(c => c.lab === 'language');
  
  const languages = ['All', ...new Set(languageCourses.map(c => c.language))];
  const levels = ['All', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const types = ['All', 'Course', 'Bootcamp', 'Webinar', 'Micro Course'];
  
  const filteredCourses = languageCourses.filter(course => {
    const matchesLanguage = activeLanguage === 'All' || course.language === activeLanguage;
    const matchesLevel = activeLevel === 'All' || course.level === activeLevel;
    const matchesType = activeType === 'All' || course.type === activeType;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.language.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLanguage && matchesLevel && matchesType && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-text-secondary mb-8 uppercase tracking-widest font-bold">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span className="text-primary">Language Lab</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Language Lab</h1>
          <p className="text-xl text-text-secondary max-w-2xl mb-10">
            Master global communication. From professional fluency to conversational basics, 
            our curriculum is designed for high-impact results.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary/20 border border-primary/30 text-primary rounded-2xl font-bold text-lg hover:bg-primary/30 transition-all flex items-center gap-2"
          >
            What is my Language Learning Fit? <ChevronRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
            {/* Search */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-black text-text-secondary mb-3">Search</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                <input 
                  type="text" 
                  placeholder="Search languages..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface border border-border rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Language Filter */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-black text-text-secondary mb-3">Language</label>
              <select 
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value)}
                className="w-full bg-surface border border-border rounded-2xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-black text-text-secondary mb-3">Level (CEFR)</label>
              <div className="flex bg-surface p-1 rounded-2xl border border-border overflow-x-auto scrollbar-hide">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setActiveLevel(level)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeLevel === level 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-black text-text-secondary mb-3">Format</label>
              <div className="flex bg-surface p-1 rounded-2xl border border-border overflow-x-auto scrollbar-hide">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeType === type 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LanguageLab;
