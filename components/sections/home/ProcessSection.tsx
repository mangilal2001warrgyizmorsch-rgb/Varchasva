import React from 'react';
import { Play } from 'lucide-react';
import { SecondaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';

export default function ProcessSection() {
  return (
    <section className="bg-[#1a4a38] py-24 px-6 md:px-20 text-[#fdfaf6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h4 className="text-[#e2a325] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Process</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Seed to Bottle</h2>
          </div>
          <SecondaryButton className="px-6 py-3 text-xs border-[#fdfaf6]/30 text-[#fdfaf6] hover:text-[#e2a325] w-fit">
            <Play size={14} /> Watch The Extraction
          </SecondaryButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Arrows hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-[20%] w-[20%] h-[1px] border-t border-dashed border-white/20"></div>
          <div className="hidden md:block absolute top-1/2 right-[20%] w-[20%] h-[1px] border-t border-dashed border-white/20"></div>

          {/* Process Cards */}
          <ProcessCard 
            step="01" 
            title="Sourcing" 
            desc="We select only the finest, sun-dried seeds from local farmers who practice sustainable agriculture."
            img={IMAGES.process1}
          />
          <ProcessCard 
            step="02" 
            title="Cold-Pressing" 
            desc="Seeds are slowly pressed in wooden ghani without generating heat, preserving all nutrients."
            img={IMAGES.process2}
          />
          <ProcessCard 
            step="03" 
            title="Bottling" 
            desc="The pure oil is left to settle naturally, then bottled in dark glass to protect it from sunlight."
            img={IMAGES.process3}
          />
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, title, desc, img }: { step: string, title: string, desc: string, img: string }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative w-48 h-64 mb-8 overflow-hidden rounded-full border border-white/10">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-[#1a4a38] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-serif mb-3 text-[#e2a325]">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
}
