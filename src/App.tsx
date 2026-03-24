import React, { useState, useEffect } from 'react';
// Version: 1.0.1 - Force Refresh
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Destination from './pages/Destination';
import Delegations from './pages/Delegations';
import CaseStudy from './pages/CaseStudy';
import BlogPage from './pages/BlogPage';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './LanguageContext';

const Egypt = () => {
  const { t } = useLanguage();
  return (
    <Destination 
      name={t.destinations.egypt.name} 
      image="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1000"
      tagline={t.destinations.egypt.tagline}
      description={t.destinations.egypt.description}
      seo={t.destinations.egypt.seo}
    />
  );
};

const UAE = () => {
  const { t } = useLanguage();
  return (
    <Destination 
      name={t.destinations.uae.name} 
      image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000"
      tagline={t.destinations.uae.tagline}
      description={t.destinations.uae.description}
      seo={t.destinations.uae.seo}
    />
  );
};

const Russia = () => {
  const { t } = useLanguage();
  return (
    <Destination 
      name={t.destinations.russia.name} 
      image="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=1000"
      tagline={t.destinations.russia.tagline}
      description={t.destinations.russia.description}
      seo={t.destinations.russia.seo}
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.delegations, path: '/delegations' },
    { name: t.nav.egypt, path: '/egypt' },
    { name: t.nav.uae, path: '/uae' },
    { name: t.nav.russia, path: '/russia' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-royal-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group">
          <img src="/logo.png" alt="ROYAL EVENT" className="h-20 w-auto group-hover:opacity-80 transition-opacity" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-royal-pink ${location.pathname === link.path ? 'text-royal-pink' : 'text-white/60'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Language Toggle */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-10">
            <button 
              onClick={() => setLanguage('ru')}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${language === 'ru' ? 'text-royal-pink' : 'text-white/40 hover:text-white'}`}
            >
              RU
            </button>
            <span className="text-white/10">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${language === 'en' ? 'text-royal-pink' : 'text-white/40 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-royal-black border-b border-white/10 p-6 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-bold uppercase tracking-tight text-white hover:text-royal-pink"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <button onClick={() => { setLanguage('ru'); setIsOpen(false); }} className={`text-sm font-bold ${language === 'ru' ? 'text-royal-pink' : 'text-white/40'}`}>RU</button>
                <button onClick={() => { setLanguage('en'); setIsOpen(false); }} className={`text-sm font-bold ${language === 'en' ? 'text-royal-pink' : 'text-white/40'}`}>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const AppContent = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col relative">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/egypt" element={<Egypt />} />
            <Route path="/uae" element={<UAE />} />
            <Route path="/russia" element={<Russia />} />
            <Route path="/delegations" element={<Delegations />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/portfolio/:id" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
