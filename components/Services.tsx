'use client';

import { motion } from 'motion/react';
import { Sparkles, Target, Compass, Zap } from 'lucide-react';

const services = [
  {
    title: 'Executive Presence',
    description: 'Command the room with authentic authority and refined leadership skills.',
    icon: Target,
    delay: 0.1
  },
  {
    title: 'Mindset Alchemy',
    description: 'Transform limiting beliefs into powerful catalysts for unprecedented growth.',
    icon: Sparkles,
    delay: 0.2
  },
  {
    title: 'Purpose Discovery',
    description: 'Align your daily actions with your deepest values and long-term vision.',
    icon: Compass,
    delay: 0.3
  },
  {
    title: 'High Performance',
    description: 'Optimize your energy and focus to achieve more with effortless flow.',
    icon: Zap,
    delay: 0.4
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#081c17]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-[#E5D5B0] mb-4 block"
            >
              The Offerings
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif"
            >
              Tailored Pathways to <br />
              <span className="italic">Excellence</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md text-lg font-light leading-relaxed"
          >
            We don&apos;t believe in templates. Every session is a bespoke exploration of your potential, designed to unlock the extraordinary.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#E5D5B0] transition-colors duration-500">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-sm font-light text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
