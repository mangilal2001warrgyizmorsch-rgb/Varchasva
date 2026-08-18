import React from 'react';
import { IMAGES } from '../../../constants/images';

export default function BannerSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <img src={IMAGES.banner} alt="Dharohar Farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0d140a]/80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
          Nourishing Generations. <br/> <span className="text-[#e2a325] italic">Honoring Tradition.</span>
        </h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto font-light leading-relaxed">
          Experience the authentic taste and unmatched health benefits of real, unrefined oils.
        </p>
      </div>
    </section>
  );
}
