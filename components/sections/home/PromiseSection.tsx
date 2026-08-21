"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Shield, Heart, Activity } from 'lucide-react';
import { PrimaryButton } from '../../ui/Button';
import { IMAGES } from '../../../constants/images';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem, viewportOnce } from '../../../utils/animations';

export default function PromiseSection() {
  return (
    <section id="promise-section" className="bg-white text-[#111810] py-10 sm:py-14 md:py-16 w-full overflow-hidden">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Text Content */}
        <motion.div 
          className="order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInLeft}
        >
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Promise</h4>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#111810] mb-4 sm:mb-6 leading-[1.15] tracking-tight">
            From the Soil.<br/>
            <span className="text-gray-400 italic font-light">Not the Factory.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed font-light">
            We preserve the natural character of every seed through slow, traditional cold-press extraction. Pure wellness, delivered straight to your home.
          </p>
          
          <motion.div 
            className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={staggerItem} className="flex items-start gap-4 sm:gap-5 group">
              <div className="p-3 sm:p-4 bg-[#fdfaf6] rounded-2xl text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100 flex-shrink-0">
                <Leaf size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h5 className="text-base sm:text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">Pure & Natural</h5>
                <p className="text-xs sm:text-sm text-gray-500 font-light">Absolutely nothing artificial added.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem} className="flex items-start gap-4 sm:gap-5 group">
              <div className="p-3 sm:p-4 bg-[#fdfaf6] rounded-2xl text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100 flex-shrink-0">
                <Shield size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h5 className="text-base sm:text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">Cold-Pressed</h5>
                <p className="text-xs sm:text-sm text-gray-500 font-light">Zero heat extraction to retain nutrients.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem} className="flex items-start gap-4 sm:gap-5 group">
              <div className="p-3 sm:p-4 bg-[#fdfaf6] rounded-2xl text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100 flex-shrink-0">
                <Heart size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h5 className="text-base sm:text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">Heart Healthy</h5>
                <p className="text-xs sm:text-sm text-gray-500 font-light">Rich in good fats and natural antioxidants.</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="flex items-start gap-4 sm:gap-5 group">
              <div className="p-3 sm:p-4 bg-[#fdfaf6] rounded-2xl text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100 flex-shrink-0">
                <Activity size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h5 className="text-base sm:text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">Cholesterol Control</h5>
                <p className="text-xs sm:text-sm text-gray-500 font-light">Helps maintain healthy cholesterol levels naturally.</p>
              </div>
            </motion.div>
          </motion.div>

          <Link href="/about" className="inline-block w-full sm:w-auto">
            <PrimaryButton className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center justify-center">
              Read Our Full Story
            </PrimaryButton>
          </Link>
        </motion.div>
        
        {/* Imagery */}
        <motion.div 
          className="order-1 lg:order-2 relative group cursor-pointer w-full max-w-md lg:max-w-lg mx-auto lg:ml-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInRight}
        >
          {/* Main Image */}
          <div className="aspect-[4/5] rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative shadow-2xl shadow-black/10">
            <Image 
              src={IMAGES.farmer} 
              alt="Farmer in field" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          {/* Floating Badge with responsive sizing & placement */}
          <motion.div 
            className="absolute -bottom-4 left-2 sm:-bottom-8 sm:-left-6 md:-left-10 bg-white/80 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-full shadow-2xl border border-white flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 transition-transform duration-700 ease-out"
            variants={scaleIn}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1a4a38]">100%</div>
              <div className="text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-[#e2a325] font-bold mt-0.5 sm:mt-1">Unrefined</div>
            </div>
          </motion.div>
          
          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#fdfaf6] rounded-full -z-10 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
