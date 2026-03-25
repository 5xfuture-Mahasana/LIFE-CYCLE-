import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      
      {/* Philosophy Section - Inline for impact */}
      <section id="philosophy" className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-black/40 mb-8 block">The Core Philosophy</span>
          <h2 className="text-4xl md:text-7xl font-serif leading-tight max-w-5xl mx-auto">
            &quot;We do not see the world as it is, we see it as <span className="italic">we are</span>.&quot;
          </h2>
          <div className="w-24 h-[1px] bg-black/20 mx-auto mt-16" />
          <p className="mt-16 text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-70">
            Our approach is rooted in the belief that external mastery is a byproduct of internal alignment. We work from the inside out.
          </p>
        </div>
      </section>

      <Services />
      <About />
      <Testimonials />

      {/* Final CTA */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5D5B0]/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-serif mb-12">Ready to <br /> <span className="italic">Ascend?</span></h2>
          <p className="text-xl font-light mb-12 opacity-60">
            Limited availability for private coaching. Inquire today to begin your transformation.
          </p>
          <button className="px-16 py-6 bg-white text-black rounded-full text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#E5D5B0] hover:text-white transition-all duration-500 transform hover:scale-105">
            Apply for Coaching
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
