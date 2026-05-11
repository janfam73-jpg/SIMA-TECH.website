import { motion } from 'motion/react';
import { Smartphone, Globe, Palette, Video, BarChart, ExternalLink } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  Smartphone: Smartphone,
  Globe: Globe,
  Palette: Palette,
  Video: Video,
  BarChart: BarChart,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-6"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            Advanced Tech <span className="text-white/40">Ecosystem</span>
          </h2>
          <p className="max-w-2xl text-white/50 font-sans tracking-wide">
            Leveraging exponential technologies to create digital experiences that transcend the ordinary. Every project is an evolution in design and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/10 bg-black/20 backdrop-blur-md">
          {SERVICES.slice(0, 4).map((service, index) => {
            const Icon = iconMap[service.icon];
            const colors = ['text-cyan-400', 'text-purple-400', 'text-blue-400', 'text-pink-400'];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b md:border-r border-white/10 p-6 md:p-10 flex flex-col gap-4 hover:bg-white/5 cursor-pointer transition-colors min-h-[250px] md:min-h-[300px]"
              >
                <div className={cn("font-mono text-xs mb-2", colors[index % colors.length])}>
                  0{index + 1} //
                </div>
                
                <div className="flex items-center gap-4 mb-2">
                  <Icon className={cn("w-6 h-6", colors[index % colors.length])} strokeWidth={1.5} />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className={cn("w-12 h-[1px]", colors[index % colors.length].replace('text-', 'bg-'))} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Sphere({ size }: { size: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent blur-md"
      />
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/20 to-transparent border border-white/40 backdrop-blur-sm" />
    </div>
  );
}
