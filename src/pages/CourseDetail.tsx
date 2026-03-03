import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Users, 
  Clock, 
  CheckCircle2, 
  PlayCircle, 
  FileText, 
  Award, 
  ChevronDown, 
  ChevronUp,
  ArrowLeft
} from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const found = courses.find(c => c.id === id);
    if (found) {
      setCourse(found);
    } else {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!course) return null;

  const isLanguage = course.lab === 'language';

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-text-secondary mb-8 uppercase tracking-widest font-bold">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <Link to={isLanguage ? '/language-lab' : '/skills-lab'} className="hover:text-white">
            {isLanguage ? 'Language Lab' : 'Skills Lab'}
          </Link>
          <ChevronRight size={14} />
          <span className="text-primary">{course.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                {course.type && (
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${course.type === 'Bootcamp' ? 'bg-secondary text-bg border-secondary' : 'bg-white/10 text-white border-white/20'}`}>
                    {course.type}
                  </span>
                )}
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                  isLanguage ? 'bg-primary/10 text-primary border-primary/20' : 
                  course.lab === 'career' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                  'bg-secondary/10 text-secondary border-secondary/20'
                }`}>
                  {course.skill || course.language}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border bg-white/5 text-white border-white/10">
                  {course.level}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                {course.title}
              </h1>

              <div className="flex items-center gap-8 mb-12 text-text-secondary">
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span className="text-sm font-medium">{course.enrolled.toLocaleString()} Enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-secondary" />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4">About this course</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">What you'll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYoullLearn.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-surface border border-border rounded-2xl">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Curriculum</h2>
                <div className="space-y-4">
                  {course.modules.map((module, mIdx) => (
                    <div key={mIdx} className="bg-surface border border-border rounded-2xl overflow-hidden">
                      <button 
                        onClick={() => setActiveModule(activeModule === mIdx ? -1 : mIdx)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-primary font-black">0{mIdx + 1}</span>
                          <span className="text-lg font-bold text-white">{module.title}</span>
                        </div>
                        {activeModule === mIdx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      
                      <AnimatePresence>
                        {activeModule === mIdx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-border"
                          >
                            <div className="p-6 space-y-4">
                              {module.lessons.map((lesson, lIdx) => (
                                <div key={lIdx} className="flex items-center justify-between text-text-secondary hover:text-white transition-colors cursor-pointer group">
                                  <div className="flex items-center gap-3">
                                    <PlayCircle size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">{lesson}</span>
                                  </div>
                                  <span className="text-xs opacity-50">12:00</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">Your Instructor</h2>
                <div className="flex items-center gap-6 p-8 bg-surface border border-border rounded-3xl">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{course.instructor}</h3>
                    <p className="text-text-secondary text-sm">Expert Instructor at Exzellent.co</p>
                    <p className="text-text-secondary text-sm mt-2 max-w-md">
                      Leading professional with over 10 years of experience in the industry, 
                      dedicated to helping students master high-impact skills.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sticky Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface border border-border rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10"
              >
                <div className={`h-48 bg-gradient-to-br flex items-center justify-center text-7xl ${isLanguage ? 'from-primary/20 to-primary/40' : 'from-secondary/20 to-secondary/40'}`}>
                  {course.icon}
                </div>
                
                <div className="p-8">
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-4xl font-black text-white">
                      {course.price === 0 ? 'Free' : `₹${course.price.toLocaleString()}`}
                    </span>
                    {course.price > 0 && <span className="text-text-secondary line-through mb-1">₹{Math.round(course.price * 1.5).toLocaleString()}</span>}
                  </div>

                  <button className="w-full py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black text-lg shadow-lg shadow-primary/20 transition-all active:scale-95 mb-6">
                    Enroll Now
                  </button>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">This course includes:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-text-secondary">
                        <PlayCircle size={18} className="text-primary" />
                        <span>24 hours on-demand video</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-text-secondary">
                        <FileText size={18} className="text-secondary" />
                        <span>12 downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-text-secondary">
                        <Award size={18} className="text-primary" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
