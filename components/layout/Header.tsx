"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';

export default function Header() {
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(13, 20, 10, 0)", "rgba(13, 20, 10, 0.95)"]);
  const navBackdrop = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.header 
      style={{ backgroundColor: navBg, backdropFilter: navBackdrop }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-white/5 transition-colors duration-300"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        className="flex flex-col items-center cursor-pointer group"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#e2a325] mb-1 group-hover:scale-110 transition-transform"><path d="M12 2L8 10H16L12 2Z" fill="currentColor"/><path d="M4 14C4 14 6 12 12 12C18 12 20 14 20 14C20 14 18 18 12 20C6 18 4 14 4 14Z" fill="currentColor" opacity="0.8"/></svg>
        <div className="text-xl font-serif font-bold text-white tracking-[0.15em] group-hover:text-[#e2a325] transition mt-1">DHAROHAR</div>
        <div className="text-[0.45rem] tracking-[0.3em] text-white/70 uppercase">Natural Oils</div>
      </motion.div>
      
      <motion.nav 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white items-center mt-2"
      >
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-[#e2a325]">Home</span>
          <div className="w-6 h-[2px] bg-[#e2a325] mt-1.5 rounded-full"></div>
        </div>
        <a href="#" className="hover:text-[#e2a325] transition pb-2 border-b-2 border-transparent hover:border-[#e2a325]/50">Our Story</a>
        <a href="#" className="hover:text-[#e2a325] transition pb-2 border-b-2 border-transparent hover:border-[#e2a325]/50">Our Process</a>
        <a href="#" className="hover:text-[#e2a325] transition pb-2 border-b-2 border-transparent hover:border-[#e2a325]/50 flex items-center gap-1">Oils <ChevronDown size={12}/></a>
        <a href="#" className="hover:text-[#e2a325] transition pb-2 border-b-2 border-transparent hover:border-[#e2a325]/50">Benefits</a>
        <a href="#" className="hover:text-[#e2a325] transition pb-2 border-b-2 border-transparent hover:border-[#e2a325]/50">Journal</a>
        <a href="#" className="hover:text-[#e2a325] transition pb-2 border-b-2 border-transparent hover:border-[#e2a325]/50">Contact</a>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center gap-5 text-white"
      >
        <Search className="w-[18px] h-[18px] cursor-pointer hover:text-[#e2a325] transition hidden md:block" />
        <User className="w-[18px] h-[18px] cursor-pointer hover:text-[#e2a325] transition hidden md:block" />
        <div className="relative cursor-pointer hover:text-[#e2a325] transition mr-2">
          <ShoppingCart className="w-[18px] h-[18px]" />
          <span className="absolute -top-2 -right-2 bg-[#e2a325] text-black text-[9px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">0</span>
        </div>
        <div className="hidden md:block">
          <PrimaryButton className="px-5 py-2 text-[9px]">Shop Now</PrimaryButton>
        </div>
      </motion.div>
    </motion.header>
  );
}
