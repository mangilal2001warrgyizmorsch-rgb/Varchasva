"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram } from '../../ui/Icons';
import { SecondaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../../utils/animations';

const igImages = [
  { src: IMAGES.ig1, alt: "Oil being poured on salad" },
  { src: IMAGES.ig2, alt: "Mustard flowers field" },
  { src: IMAGES.ig3, alt: "Product bottle" },
  { src: IMAGES.ig4, alt: "Heritage woman" },
  { src: IMAGES.ig5, alt: "cold press spoon with seeds" },
  { src: IMAGES.ig6, alt: "Indian dish with oil" },
];

export default function InstagramSection() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white w-full border-t border-gray-100">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 mb-6 sm:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <div>
          <div className="flex items-center gap-3 mb-2 sm:mb-4">
            <Instagram size={18} className="text-[#1a4a38]" />
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">@varchasvaoils</h4>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111810] leading-tight">Join Our Community</h2>
        </div>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <SecondaryButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-xs tracking-widest border-[#111810]/20 text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] shadow-sm hover:shadow-md transition-all duration-300 text-center justify-center">
            Follow Us
          </SecondaryButton>
        </a>
      </motion.div>
      
      {/* Responsive Grid for all devices */}
      <div className="w-full px-4 sm:px-8 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {igImages.map((img, i) => (
            <motion.div 
              key={i} 
              variants={staggerItem}
              className="group cursor-pointer relative overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] shadow-sm"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square overflow-hidden bg-gray-50 relative">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-4">
                <div className="flex items-center gap-1.5 text-white text-[10px] sm:text-xs font-medium">
                  <Instagram size={12} className="sm:w-3.5 sm:h-3.5" />
                  <span className="truncate">@varchasvaoils</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
