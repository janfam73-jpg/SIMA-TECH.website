import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Send, MapPin, MessageSquare } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

       <div className="container mx-auto px-6 md:px-12 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
           {/* Info Side */}
           <div className="space-y-12">
             <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[10px] font-bold tracking-[0.4em] uppercase text-primary w-fit"
                >
                  Connectivity
                </motion.div>
                <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-tight">
                  Let's Build the <br /> <span className="text-white/40">Next Reality</span>
                </h2>
                <p className="text-white/50 text-xl font-sans max-w-md">
                  Have a mission-critical project? Reach out to our core team and let's discuss your digital evolution.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <ContactCard 
                  icon={<Mail className="text-primary" />} 
                  label="Transmission" 
                  value={CONTACT.emails[0]} 
                  href={`mailto:${CONTACT.emails[0]}`}
               />
               <ContactCard 
                  icon={<MessageSquare className="text-accent" />} 
                  label="Direct Protocol" 
                  value={CONTACT.whatsapp_1} 
                  href={`https://wa.me/${CONTACT.whatsapp_1.replace(/\s+/g, '')}`}
               />
               <ContactCard 
                  icon={<Instagram className="text-pink-500" />} 
                  label="Visual Intelligence" 
                  value="@simatech.zm" 
                  href={CONTACT.socials.instagram}
               />
               <ContactCard 
                  icon={<MapPin className="text-white" />} 
                  label="Nexus Base" 
                  value="Zambia / Global" 
                  href="#"
               />
             </div>
           </div>

           {/* Form Side */}
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[3rem] p-8 md:p-12 border border-white/10 relative overflow-hidden group"
           >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
             
             <form className="space-y-8 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Identity Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/10" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Com Link</label>
                   <input type="email" placeholder="john@nebula.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/10" />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Mission Strategy</label>
                 <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white/60 appearance-none">
                    <option>App Development</option>
                    <option>Website Systems</option>
                    <option>AI Integration</option>
                    <option>Visual Identity</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Manifesto</label>
                 <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/10 resize-none"></textarea>
               </div>

               <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-linear-to-r from-primary to-accent rounded-2xl font-display font-bold tracking-[0.2em] uppercase text-white shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
               >
                 Initiate Connection <Send size={18} />
               </motion.button>
             </form>
           </motion.div>
         </div>
       </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, background: "rgba(255,255,255,0.05)" }}
      className="glass rounded-2xl p-6 border border-white/5 flex flex-col gap-4 group transition-all"
    >
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">{label}</div>
        <div className="text-sm font-medium text-white/90 truncate">{value}</div>
      </div>
    </motion.a>
  );
}
