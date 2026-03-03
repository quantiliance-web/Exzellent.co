import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-extrabold tracking-tighter text-white">Exzellent</span>
              <span className="text-2xl font-extrabold tracking-tighter text-primary">.co</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Master Languages. Build Skills. Lead the Future. The premium learning platform for high-impact growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Labs</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link to="/language-lab" className="hover:text-primary transition-colors">Language Lab</Link></li>
              <li><Link to="/skills-lab" className="hover:text-secondary transition-colors">Skills Lab</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Schools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>© 2026 Exzellent.co. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
