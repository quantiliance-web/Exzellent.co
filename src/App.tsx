import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LanguageLab from './pages/LanguageLab';
import SkillsLab from './pages/SkillsLab';
import CareerLab from './pages/CareerLab';
import CourseDetail from './pages/CourseDetail';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/language-lab" element={<PageWrapper><LanguageLab /></PageWrapper>} />
              <Route path="/skills-lab" element={<PageWrapper><SkillsLab /></PageWrapper>} />
              <Route path="/career-lab" element={<PageWrapper><CareerLab /></PageWrapper>} />
              <Route path="/course/:id" element={<PageWrapper><CourseDetail /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
