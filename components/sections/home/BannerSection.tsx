import React from 'react';
import { IMAGES } from '../../../constants/images';
import { PrimaryButton } from '../../ui/Button';

export default function BannerSection() {
  return (
    <section className="relative py-32 px-6 lg:py-48 overflow-hidden flex justify-center items-center w-full">
      <div className="absolute inset-0 z-0">
        <img src={IMAGES.banner} alt="Dharohar Farm" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-[#0d140a]/40"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Glassmorphism Box */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl shadow-black/10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Heritage</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#111810] mb-8 leading-[1.1] tracking-tight">
            Nourishing Generations. <br/> 
            <span className="text-[#e2a325] italic font-light">Honoring Tradition.</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Experience the authentic taste and unmatched health benefits of real, unrefined oils. Grown with care, pressed with patience.
          </p>
          
          <PrimaryButton className="px-12 py-5 text-xs tracking-widest shadow-lg shadow-[#1a4a38]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Discover Our Story
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
