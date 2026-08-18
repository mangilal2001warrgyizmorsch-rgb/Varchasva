import React from 'react';
import { Instagram } from '../../ui/Icons';
import { SecondaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';

export default function InstagramSection() {
  return (
    <section className="py-24 bg-white w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Instagram size={20} className="text-[#1a4a38]" />
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">@dharoharoils</h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111810] leading-tight">Join Our Community</h2>
        </div>
        <SecondaryButton className="px-8 py-4 text-xs tracking-widest border-[#111810]/20 text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] shadow-sm hover:shadow-md transition-all duration-300">
          Follow Us
        </SecondaryButton>
      </div>
      
      {/* Scrollable grid for mobile, static grid for desktop */}
      <div className="w-full overflow-x-auto pb-12 hide-scrollbar px-6 lg:px-24 max-w-[1600px] mx-auto">
        <div className="flex md:grid md:grid-cols-6 gap-4 min-w-[1200px] md:min-w-0">
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={IMAGES.ig1} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <Instagram className="text-[#1a4a38] w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={IMAGES.ig2} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <Instagram className="text-[#1a4a38] w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={IMAGES.ig3} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <Instagram className="text-[#1a4a38] w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={IMAGES.ig4} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <Instagram className="text-[#1a4a38] w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={IMAGES.ig5} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <Instagram className="text-[#1a4a38] w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img src={IMAGES.ig6} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <Instagram className="text-[#1a4a38] w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
