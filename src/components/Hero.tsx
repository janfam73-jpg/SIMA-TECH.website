import { Canvas } from '@react-three/fiber';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Experience from './Experience';
import SimaLogo from './SimaLogo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 md:py-0">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
        <Canvas shadows gl={{ antialias: true }}>
          <Experience />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold">System Status: Optimal</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-white uppercase">
            FUTURE<br />
            <span className="text-gradient">MADE</span><br />
            SIMPLE
          </h1>
          
          <p className="max-w-md text-gray-400 text-sm leading-relaxed border-l-2 border-primary pl-6 py-2 mx-auto md:mx-0">
            We engineer the impossible. SIMA TECH is a multi-dimensional technology conglomerate pioneering in neural networks, holographic UI, and cybernetic ecosystems.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-[10px] md:text-[11px] uppercase tracking-widest font-black shadow-[0_0_20px_rgba(79,70,229,0.4)]"
            >
              Explore Universe
            </motion.button>
            
            <motion.button
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="px-6 md:px-8 py-3 md:py-4 border border-white/20 text-[10px] md:text-[11px] uppercase tracking-widest font-black"
            >
              Documentation
            </motion.button>
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative flex items-center justify-center">
          {/* Geometric Orbits */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-cyan-500/10 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border border-purple-500/30 border-dashed"
            />
            <div className="absolute w-96 h-96 rounded-full border border-blue-500/5"></div>
          </div>

          {/* Floating Data Card */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative glass-panel p-8 rounded-2xl w-72 transform -rotate-3 shadow-2xl z-10"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-2 bg-cyan-500/50 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full blur-[2px]"></div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
              <div className="h-20 bg-linear-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-lg flex items-center justify-center">
                <span className="text-[10px] text-cyan-300 font-mono">NEURAL_SYNCING... 98%</span>
              </div>
            </div>
          </motion.div>

          {/* Side Stat Panel */}
          <motion.div
            animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-0 right-0 lg:translate-x-12 lg:-translate-y-6 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-xl w-48 z-20"
          >
            <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Core Analytics</span>
            <div className="mt-2 text-xl font-mono text-cyan-400 tracking-tighter">2.4ms LATENCY</div>
            <div className="w-full h-1 bg-white/10 mt-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                className="h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" 
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements / UI panels */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-64 h-40 glass rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-white/40">AI Engine Active</div>
          </div>
          <div className="h-12 w-full bg-linear-to-r from-primary/10 to-transparent rounded-lg" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -2, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-72 h-48 glass rounded-3xl p-6 border border-white/10 flex flex-col gap-4"
        >
          <div className="text-[10px] font-bold tracking-widest uppercase text-white/40">System Diagnostics</div>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-2 w-24 bg-white/5 rounded-full overflow-hidden">
                  <motion.div animate={{ width: ['0%', '70%', '40%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-accent" />
                </div>
                <div className="text-[10px] text-accent">98.2%</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-bold">Discover</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
