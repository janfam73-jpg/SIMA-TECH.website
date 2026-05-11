import { motion } from 'motion/react';
import SimaLogo from './SimaLogo';
import { CONTACT } from '../constants';
import { Mail, Github, Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#020205] z-50">
      <div className="w-full h-12 px-6 md:px-12 border-b border-white/5 flex items-center justify-between text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono">
        <div className="flex gap-10">
          <span>&copy; {new Date().getFullYear()} SIMA TECH INDUSTRIES</span>
          <span className="hidden md:inline">SECURITY_PROTOCOL: AES_256_ACTIVE</span>
        </div>
        <div className="flex gap-10">
          <span className="text-cyan-500">SYSTEM_STATUS: ENCRYPTED</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="space-y-6">
          <SimaLogo className="scale-75 origin-left" />
          <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest max-w-xs">
            Pioneering in neural networks, holographic UI, and cybernetic ecosystems. Engineering the impossible since inception.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 lg:pl-20 md:col-span-2">
          <div className="space-y-6">
            <h4 className="text-[9px] text-white font-black uppercase tracking-[0.5em]">Ecosystem</h4>
            <ul className="space-y-3 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Neural Sync</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Matrix Hub</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Evolving Design</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[9px] text-white font-black uppercase tracking-[0.5em]">Network</h4>
            <ul className="space-y-3 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
              <li><a href={`mailto:${CONTACT.emails[0]}`} className="hover:text-white transition-colors">{CONTACT.emails[0]}</a></li>
              <li><a href={`tel:${CONTACT.whatsapp_1}`} className="hover:text-white transition-colors">{CONTACT.whatsapp_1}</a></li>
              <li className="text-cyan-400">Zambia // Global Nodes</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
