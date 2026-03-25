'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://picsum.photos/seed/aura-hero/1920/1080?grayscale"
          alt="Atmospheric background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="block text-xs uppercase tracking-[0.5em] mb-8 text-[#D4AF37]"
        >
          Elevate Your Existence
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-6xl md:text-9xl font-serif leading-tight mb-12"
        >
          Master Your <br />
          <span className="italic">Inner World</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Bespoke coaching for visionaries, leaders, and those who refuse to settle for the ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-12 py-5 bg-white text-black rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-[#E5D5B0] hover:text-white transition-all duration-500 transform hover:scale-105">
            Begin the Journey
          </button>
          <button className="px-12 py-5 border border-white/30 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-white/10 transition-all duration-500">
            Our Philosophy
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
