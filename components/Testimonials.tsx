'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Julian didn't just help me grow my business; he helped me find the man I was meant to be. The ROI on this coaching is immeasurable.",
    author: "Alexander Thorne",
    role: "CEO, Thorne Industries",
    delay: 0.1
  },
  {
    quote: "The depth of insight and the precision of the guidance provided at Aura is unlike anything I've experienced in the executive coaching world.",
    author: "Elena Rodriguez",
    role: "Creative Director",
    delay: 0.2
  },
  {
    quote: "Aura is for those who are already at the top but know there is a higher peak. It's the secret weapon for the elite.",
    author: "Marcus Chen",
    role: "Venture Capitalist",
    delay: 0.3
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-[#061612] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E5D5B0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.5em] text-[#E5D5B0] mb-4 block"
          >
            Voices of Impact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif"
          >
            The Aura <span className="italic">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: t.delay }}
              className="p-12 glass rounded-[32px] flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#E5D5B0] mb-8 opacity-50" />
                <p className="text-xl font-light leading-relaxed italic mb-12">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div>
                <p className="text-lg font-serif">{t.author}</p>
                <p className="text-xs uppercase tracking-widest opacity-50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
