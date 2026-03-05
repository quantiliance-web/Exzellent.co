import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Zap, Users, GraduationCap } from 'lucide-react';
import LabCard from '../components/LabCard';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

import FAQ from '../components/FAQ';

const Home = () => {
  const featuredCourses = courses.slice(0, 6);

  const stats = [
    { label: 'Learners', value: '10,000+', icon: <Users size={20} /> },
    { label: 'Labs', value: '2', icon: <Globe size={20} /> },
    { label: 'Courses', value: '50+', icon: <Zap size={20} /> },
    { label: 'Instructors', value: 'Expert', icon: <GraduationCap size={20} /> },
  ];

  return (
    <div className="pt-20">
      {/* Stats Bar */}
      <section className="py-12 border-y border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 text-text-secondary mb-1">
                  {stat.icon}
                  <span className="text-xs uppercase tracking-widest font-bold">{stat.label}</span>
                </div>
                <div className="text-3xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Overview */}
      <section id="labs" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Path</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Whether you're looking to bridge cultural gaps or technical ones, we have a lab for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LabCard
            type="language"
            title="Language Lab"
            icon="🌍"
            description="Master global languages with our immersive, professional-grade curriculum. From Business English to Mandarin Basics."
            items={['Business English', 'Conversational French', 'Spanish for Professionals', 'Mandarin Basics']}
            accentColor="primary"
          />
          <LabCard
            type="skills"
            title="Skills Lab"
            icon="🚀"
            description="Acquire high-demand technical and cognitive skills. Master AI, Web3, and Systems Thinking to lead the future."
            items={['AI Fundamentals', 'Web3 Development', 'No-Code Automation', 'Vibe Coding']}
            accentColor="secondary"
          />
          <LabCard
            type="career"
            title="Career Growth Lab"
            icon="⚒️"
            description="Accelerate your professional trajectory. Master the art of positioning, networking, and global application strategies."
            items={['360° Career Catalyst', 'European CV Mastery', 'Brand Positioning', 'Interview Strategy']}
            accentColor="amber-500"
          />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-surface/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Featured Courses</h2>
              <p className="text-text-secondary">Hand-picked courses to kickstart your journey.</p>
            </div>
            <Link to="/language-lab" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View all courses <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-surface/10">
        <div className="max-w-7xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to lead the future?</h2>
            <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
              Join 10,000+ learners mastering the skills that matter. Start your journey today.
            </p>
            <button className="px-10 py-5 bg-white text-bg rounded-2xl font-black text-xl hover:scale-105 transition-transform active:scale-95">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
