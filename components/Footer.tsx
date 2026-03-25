'use client';

import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif tracking-widest uppercase mb-8">Aura</h2>
            <p className="text-lg font-light text-white/50 max-w-md leading-relaxed">
              Crafting extraordinary lives through bespoke coaching and strategic mindset alchemy.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Podcast</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] uppercase tracking-widest opacity-30">
            © 2026 Aura Premium Coaching. All Rights Reserved.
          </p>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
