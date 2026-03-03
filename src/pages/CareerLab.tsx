import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const CareerLab = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const careerCourses = courses.filter(c => c.lab === 'career');
  
  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredCourses = activeFilter === 'All' 
    ? careerCourses 
    : careerCourses.filter(c => c.level === activeFilter);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-b from-amber-500/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-text-secondary mb-8 uppercase tracking-widest font-bold">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span className="text-amber-500">Career Lab</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Career Growth Lab</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Forge your professional future. Master the art of personal branding, 
            strategic networking, and global job application mastery.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex bg-surface p-1 rounded-2xl border border-border w-full md:w-auto overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-amber-500 text-bg shadow-lg shadow-amber-500/20' 
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search career paths..." 
              className="w-full bg-surface border border-border rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
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

export default CareerLab;
