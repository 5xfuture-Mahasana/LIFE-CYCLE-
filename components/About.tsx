'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] rounded-[40px] overflow-hidden"
        >
          <Image
            src="https://picsum.photos/seed/coach-portrait/800/1000?grayscale"
            alt="The Coach"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="text-2xl font-serif italic">Julian Vane</p>
            <p className="text-xs uppercase tracking-widest opacity-60">Founder & Lead Coach</p>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-[#E5D5B0] mb-4 block">The Visionary</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              A Legacy of <br />
              <span className="italic">Transformation</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-lg font-light text-white/70 leading-relaxed"
          >
            <p>
              With over two decades of experience working with Fortune 500 CEOs, world-class athletes, and creative pioneers, Julian Vane has developed a unique methodology that blends ancient wisdom with modern psychological science.
            </p>
            <p>
              Aura was born from a simple realization: the highest form of achievement is not external success, but internal mastery. Our mission is to guide you back to your most powerful, authentic self.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10"
          >
            <div>
              <p className="text-4xl font-serif mb-2">500+</p>
              <p className="text-xs uppercase tracking-widest opacity-50">Lives Transformed</p>
            </div>
            <div>
              <p className="text-4xl font-serif mb-2">15+</p>
              <p className="text-xs uppercase tracking-widest opacity-50">Global Awards</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
