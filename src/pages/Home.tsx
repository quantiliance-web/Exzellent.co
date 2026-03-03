import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Zap, Users, GraduationCap } from 'lucide-react';
import LabCard from '../components/LabCard';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

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
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20" 
          style={{ backgroundImage: 'radial-gradient(#1E1E2E 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400 animate-gradient-text">Languages</span>. <br />
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-400 animate-gradient-text">Skills</span>.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12">
              The premium Edutech platform designed for the future of work. 
              Master global communication and high-impact technical skills.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <Link to="/language-lab" className="w-full lg:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Explore Language Lab <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/skills-lab" className="w-full lg:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-surface border border-border text-white rounded-2xl font-bold text-lg hover:border-secondary/50 transition-colors flex items-center justify-center gap-2"
                >
                  Explore Skills Lab <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/career-lab" className="w-full lg:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-amber-500 text-bg rounded-2xl font-bold text-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  Explore Career Growth Lab <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
