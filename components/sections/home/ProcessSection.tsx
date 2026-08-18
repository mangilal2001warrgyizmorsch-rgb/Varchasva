import React from 'react';
import { Play } from 'lucide-react';
import { SecondaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';

export default function ProcessSection() {
  return (
    <section className="bg-[#fdfaf6] py-32 px-6 lg:px-24 text-[#111810] relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]"></div>
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Process</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111810] leading-tight">Seed to Bottle</h2>
          </div>
          <SecondaryButton className="px-8 py-4 text-xs border-[#111810]/20 text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] w-fit shadow-sm hover:shadow-md transition-all duration-300">
            <Play size={14} className="text-[#e2a325]" /> Watch The Extraction
          </SecondaryButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[120px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1a4a38]/20 to-transparent -z-10"></div>

          {/* Process Cards */}
          <ProcessCard 
            step="01" 
            title="Sourcing" 
            desc="We select only the finest, sun-dried seeds from local farmers who practice sustainable agriculture."
            img={IMAGES.process1}
            delay="0"
          />
          <ProcessCard 
            step="02" 
            title="Cold-Pressing" 
            desc="Seeds are slowly pressed in wooden ghani without generating heat, preserving all nutrients."
            img={IMAGES.process2}
            delay="150"
          />
          <ProcessCard 
            step="03" 
            title="Bottling" 
            desc="The pure oil is left to settle naturally, then bottled in dark glass to protect it from sunlight."
            img={IMAGES.process3}
            delay="300"
          />
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full -z-0 blur-3xl opacity-60 translate-y-1/2 translate-x-1/4"></div>
    </section>
  );
}

function ProcessCard({ step, title, desc, img, delay }: { step: string, title: string, desc: string, img: string, delay: string }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative w-full max-w-[240px] aspect-[4/5] mb-10 overflow-hidden rounded-[2rem] border border-white shadow-xl shadow-black/5">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
        
        {/* Glassmorphism Step Badge */}
        <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md text-[#1a4a38] text-[10px] font-bold w-10 h-10 flex items-center justify-center rounded-full uppercase tracking-widest shadow-sm">
          {step}
        </div>
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <h3 className="text-2xl font-serif mb-4 text-[#111810] group-hover:text-[#1a4a38] transition-colors duration-300">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-[260px] font-light">{desc}</p>
    </div>
  );
}
