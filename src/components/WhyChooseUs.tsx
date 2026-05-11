import { motion } from 'motion/react';
import { Layers, Zap, Shield, Cpu } from 'lucide-react';

export default function WhyChooseUs() {
  const stats = [
    { label: 'Uptime Protocol', value: '99.9%' },
    { label: 'Logic Latency', value: '<20ms' },
    { label: 'Security Grade', value: 'L-5' },
    { label: 'Active Relays', value: '500+' },
  ];

  return (
    <section className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[10px] font-bold tracking-[0.4em] uppercase text-primary w-fit"
              >
                Architecture
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-tight">
                Why Industry Leaders <br /> <span className="text-white/40">Choose Our Core</span>
              </h2>
            </div>

            <div className="space-y-8">
              <FeatureItem 
                icon={<Cpu className="text-primary" />}
                title="AI Authoritative Logic"
                desc="Proprietary neural layer integration that optimizes user engagement and resource allocation in real-time."
              />
              <FeatureItem 
                icon={<Shield className="text-accent" />}
                title="Fortress Grade Security"
                desc="End-to-end encryption protocols coupled with blockchain-audited data integrity for mission-critical apps."
              />
              <FeatureItem 
                icon={<Zap className="text-yellow-400" />}
                title="Maximum Velocity Stack"
                desc="Hyper-optimized rendering engines that ensure flawless 60FPS interactions even in complex 3D environments."
              />
            </div>
          </div>

          <div className="relative">
            {/* 3D Visual Mockup Placeholder */}
            <div className="aspect-square glass rounded-[4rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-accent/10" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-12">
                 <div className="grid grid-cols-2 gap-8 w-full">
                    {stats.map(stat => (
                      <div key={stat.label} className="space-y-2">
                        <div className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-primary transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="w-full h-[1px] bg-white/10" />
                 
                 <p className="text-white/40 font-mono text-xs leading-relaxed uppercase tracking-widest animate-pulse">
                   // SCANNING SYSTEM INTEGRITY... OK <br />
                   // ANALYZING MARKET DATA... COMPLETE <br />
                   // READY FOR DEPLOYMENT...
                 </p>
              </div>

              {/* Floating tech rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-1/2 -right-1/2 w-full h-full border border-primary/10 rounded-full border-dashed"
              />
            </div>
            
            {/* Small floating cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -left-8 glass rounded-2xl p-4 border border-primary/20 backdrop-blur-3xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center p-1">
                   <Layers className="text-primary" size={18} />
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase">Layer-7 Verified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 items-start"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 p-2 text-white/50 border border-white/5">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
