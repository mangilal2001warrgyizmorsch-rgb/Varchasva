"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMAGES } from '../../../constants/images';
import { PrimaryButton } from '../../ui/Button';
import { scaleIn, fadeInUp, viewportOnce } from '../../../utils/animations';

export default function BannerSection() {
  return (
    <section className="relative py-10 sm:py-14 md:py-16 px-4 sm:px-6 w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={IMAGES.banner} 
          alt="Mustard field" 
          fill 
          sizes="100vw"
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-[#fdfaf6]/75 backdrop-blur-sm"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex justify-center">
        <motion.div 
          className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-14 text-center shadow-2xl shadow-black/10 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scaleIn}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">Our Heritage</h4>
            <div className="w-6 sm:w-8 h-[1px] bg-[#e2a325]"></div>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-[#111810] mb-3 sm:mb-5 leading-[1.15] tracking-tight"
            variants={fadeInUp}
          >
            Nourishing Generations. <br/> 
            <span className="text-[#e2a325] italic font-light">Honoring Tradition.</span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-5 sm:mb-8"
            variants={fadeInUp}
          >
            Experience the authentic taste and unmatched health benefits of real, unrefined oils. Grown with care, pressed with patience.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link href="/about" className="w-full sm:w-auto">
              <PrimaryButton className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-[#1a4a38]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center justify-center">
                Discover Our Story
              </PrimaryButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
