import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Smartphone, Globe, Palette, Video, BarChart, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import SimaLogo from './SimaLogo';

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-black/40 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <SimaLogo className="scale-90 origin-left" glow />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-[11px] uppercase tracking-[0.2em] font-medium transition-colors",
                idx === 0 ? "text-cyan-400" : "text-gray-400 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          
          <motion.button
            whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
            className="px-6 py-2 border border-cyan-500/50 text-cyan-400 text-[10px] uppercase tracking-widest font-bold transition-all"
          >
            Initiate Protocol
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        className="fixed inset-0 top-[60px] bg-black/95 backdrop-blur-3xl md:hidden z-40 flex flex-col items-center justify-center gap-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-display font-medium tracking-widest uppercase hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button className="mt-4 px-10 py-4 bg-primary text-white rounded-full font-display font-bold tracking-widest uppercase">
          Get Quote
        </button>
      </motion.div>
    </nav>
  );
}
