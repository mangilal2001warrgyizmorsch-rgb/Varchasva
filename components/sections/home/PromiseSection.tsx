import React from 'react';
import { Leaf, Shield, Heart } from 'lucide-react';
import { PrimaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';

export default function PromiseSection() {
  return (
    <section className="bg-white text-[#111810] py-32 w-full">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Promise</h4>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-serif text-[#111810] mb-8 leading-[1.1] tracking-tight">
            From the Soil.<br/>
            <span className="text-gray-400 italic font-light">Not the Factory.</span>
          </h2>
          
          <p className="text-gray-600 text-lg lg:text-xl mb-12 max-w-lg leading-relaxed font-light">
            We preserve the natural character of every seed through slow, traditional cold-press extraction. Pure wellness, delivered straight to your home.
          </p>
          
          <div className="flex flex-col gap-8 mb-14">
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-[#fdfaf6] rounded-2xl text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100">
                <Leaf size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">Pure & Natural</h5>
                <p className="text-sm text-gray-500 font-light">Absolutely nothing artificial added.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-[#fdfaf6] rounded-2xl text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100">
                <Shield size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">Cold-Pressed</h5>
                <p className="text-sm text-gray-500 font-light">Zero heat extraction to retain nutrients.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-[#fdfaf6] rounded-2xl text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100">
                <Heart size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h5 className="text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">Heart Healthy</h5>
                <p className="text-sm text-gray-500 font-light">Rich in good fats and natural antioxidants.</p>
              </div>
            </div>
          </div>

          <PrimaryButton className="px-10 py-4 text-xs tracking-widest w-fit shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Read Our Full Story
          </PrimaryButton>
        </div>
        
        {/* Imagery */}
        <div className="order-1 lg:order-2 relative group cursor-pointer w-full max-w-lg mx-auto lg:ml-auto">
          {/* Main Image */}
          <div className="aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl shadow-black/10">
            <img src={IMAGES.farmer} alt="Farmer in field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white/70 backdrop-blur-xl p-8 rounded-full shadow-2xl border border-white flex flex-col items-center justify-center w-40 h-40 group-hover:-translate-y-4 transition-transform duration-700 ease-out">
            <div className="text-center">
              <div className="text-4xl font-serif text-[#1a4a38]">100%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#e2a325] font-bold mt-1">Unrefined</div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fdfaf6] rounded-full -z-10 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
