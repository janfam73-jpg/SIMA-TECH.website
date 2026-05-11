import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const REVIEWS = [
  {
    id: 1,
    name: "Alex Thorne",
    company: "Lumina Labs",
    role: "CTO",
    text: "SIMA TECH transformed our vision into a digital masterpiece. Their 3D UI integration is years ahead of the competition. Simply breathtaking performance.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Elena Vance",
    company: "NeoSphere",
    role: "Design Lead",
    text: "Working with SIMA TECH was like stepping into the future. The attention to detail in their holographic interfaces is unmatched for our luxury brand.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Marcus Kincaid",
    company: "Apex Ventures",
    role: "CEO",
    text: "Efficiency meets elegance. SIMA TECH doesn't just build apps; they create experiences that captivate users the moment they interact with the screen.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  }
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-[10px] font-bold tracking-[0.4em] uppercase text-accent mb-6"
          >
            Transmission
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
            Client <span className="text-white/40">Verified</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative h-[400px] md:h-[350px]">
          {REVIEWS.map((review, i) => {
            const isActive = i === active;
            const distance = i - active;
            
            return (
              <motion.div
                key={review.id}
                initial={false}
                animate={{
                  x: `${distance * 105}%`,
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.3,
                  rotateY: distance * 5,
                }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className={cn(
                  "absolute inset-0 mx-auto w-full md:w-[800px] glass rounded-[2.5rem] p-8 md:p-14 border border-white/10 flex flex-col md:flex-row gap-8 md:gap-12 items-center",
                  !isActive && "pointer-events-none"
                )}
              >
                <div className="relative shrink-0">
                   <div className="absolute -inset-2 bg-linear-to-br from-primary to-accent rounded-full blur opacity-40" />
                   <img src={review.avatar} alt={review.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/10 object-crop relative" />
                   <div className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center p-2 text-white">
                     <Quote size={20} />
                   </div>
                </div>

                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-white/80 font-display italic leading-relaxed">
                    "{review.text}"
                  </p>

                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-white">{review.name}</h4>
                    <p className="text-sm text-white/40 tracking-wider uppercase">{review.company} // {review.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12 md:mt-20">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "w-12 h-1 rounded-full transition-all duration-500",
                i === active ? "bg-primary w-20 shadow-[0_0_10px_rgba(139,92,246,0.6)]" : "bg-white/10 hover:bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
