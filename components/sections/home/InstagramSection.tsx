import React from 'react';
import { Instagram } from '../../ui/Icons';
import { SecondaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';

export default function InstagramSection() {
  return (
    <section className="py-20 bg-[#111810]">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-3 text-[#e2a325] mb-3">
            <Instagram size={20} />
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase">@dharoharoils</h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Join Our Community</h2>
        </div>
        <SecondaryButton className="px-4 py-2 text-[10px] border-white/20 text-white hover:text-[#e2a325]">Follow Us</SecondaryButton>
      </div>
      
      {/* Scrollable grid for mobile, static grid for desktop */}
      <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex md:grid md:grid-cols-6 gap-0 min-w-[1200px] md:min-w-0 px-6 md:px-0">
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer">
            <img src={IMAGES.ig1} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer">
            <img src={IMAGES.ig2} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer">
            <img src={IMAGES.ig3} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer">
            <img src={IMAGES.ig4} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer">
            <img src={IMAGES.ig5} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="w-48 md:w-auto aspect-square relative group overflow-hidden cursor-pointer">
            <img src={IMAGES.ig6} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
