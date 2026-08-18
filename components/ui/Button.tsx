"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const PrimaryButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.button 
    onClick={onClick}
    whileHover={{ scale: 1.05, paddingRight: "40px", backgroundColor: "#fff", color: "#000" }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center justify-center gap-3 bg-[#e2a325] text-black rounded-lg font-bold uppercase tracking-[0.15em] transition-all relative overflow-hidden group border border-[#e2a325] ${className}`}
  >
    <span className="relative z-10 whitespace-nowrap">{children}</span> 
    <ArrowRight size={14} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
  </motion.button>
);

export const SecondaryButton = ({ children, className = "border-white/30 text-white hover:text-[#e2a325]", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.button 
    onClick={onClick}
    whileHover={{ scale: 1.05, backgroundColor: "rgba(226, 163, 37, 0.1)", borderColor: "#e2a325" }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center justify-center gap-3 bg-transparent border rounded-lg font-bold uppercase tracking-[0.15em] transition-all whitespace-nowrap ${className}`}
  >
    {children}
  </motion.button>
);
