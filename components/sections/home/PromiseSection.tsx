import React from 'react';
import { Leaf, Shield, Heart } from 'lucide-react';
import { PrimaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';

export default function PromiseSection() {
  return (
    <section className="py-24 px-6 md:px-20 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h4 className="text-[#1a4a38] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Promise</h4>
        <h2 className="text-5xl md:text-6xl font-serif text-[#111810] mb-6 leading-tight">
          From the Soil.<br/>Not the Factory.
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-md leading-relaxed">
          We preserve the natural character of every seed through slow, traditional cold-press extraction.
        </p>
        
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[#f0ede6] rounded-full text-[#1a4a38]"><Leaf size={22} strokeWidth={1.5} /></div>
            <div>
              <h5 className="font-bold text-sm text-[#111810] mb-1">Pure & Natural</h5>
              <p className="text-xs text-gray-500">Nothing Artificial</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[#f0ede6] rounded-full text-[#1a4a38]"><Shield size={22} strokeWidth={1.5} /></div>
            <div>
              <h5 className="font-bold text-sm text-[#111810] mb-1">Cold-Pressed</h5>
              <p className="text-xs text-gray-500">Zero Heat Extraction</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[#f0ede6] rounded-full text-[#1a4a38]"><Heart size={22} strokeWidth={1.5} /></div>
            <div>
              <h5 className="font-bold text-sm text-[#111810] mb-1">Heart Healthy</h5>
              <p className="text-xs text-gray-500">Rich in Good Fats</p>
            </div>
          </div>
        </div>

        <PrimaryButton className="px-8 py-3.5 text-xs w-fit">Read Our Full Story</PrimaryButton>
      </div>
      
      <div className="relative group cursor-pointer">
        <div className="aspect-[4/5] rounded-t-full overflow-hidden relative">
          <img src={IMAGES.farmer} alt="Farmer in field" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-700"></div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-[#f0ede6] p-8 rounded-full border border-white flex flex-col items-center justify-center w-36 h-36">
          <div className="text-center">
            <div className="text-2xl font-serif text-[#111810]">100%</div>
            <div className="text-[9px] uppercase tracking-widest text-[#1a4a38] font-bold">Unrefined</div>
          </div>
        </div>
      </div>
    </section>
  );
}
