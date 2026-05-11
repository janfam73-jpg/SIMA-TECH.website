import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#020205] overflow-x-hidden">
      {/* Interactive Global Elements */}
      <LoadingScreen />
      <Cursor />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[140px]" />
      </div>

      <Navbar />
      
      <div className="relative z-10 font-sans">
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Portfolio Showcase */}
        <section id="portfolio" className="py-24 md:py-40 bg-black/20 backdrop-blur-md">
          <div className="container mx-auto px-6 md:px-12">
             <div className="flex flex-col items-center text-center mb-20">
                <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.5em] mb-4">Matrix Output</span>
                <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-white">
                  IMPOSSIBLE <span className="text-gray-600">ECHOS</span>
                </h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
               {[1, 2, 3, 4, 5, 6].map(i => (
                 <motion.div
                  key={i}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                  className="aspect-video relative group overflow-hidden bg-black p-8 flex items-center justify-center cursor-pointer"
                 >
                   <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="text-[10px] font-mono tracking-[0.4em] text-gray-500 group-hover:text-cyan-400 transition-colors">
                     PROTOCOL_DUMP.0{i}
                   </div>
                   <div className="absolute bottom-6 right-6 w-8 h-[1px] bg-white/10 group-hover:bg-cyan-400 transition-colors" />
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* Reviews */}
        <Reviews />
        
        <Contact />
        
        <Footer />
      </div>
    </main>
  );
}
