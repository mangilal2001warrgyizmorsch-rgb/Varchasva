"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const PrimaryButton = ({ children, className = "", onClick, type = "button" }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit" | "reset" }) => (
  <motion.button 
    type={type}
    onClick={onClick}
    whileHover={{ scale: 1.03, backgroundColor: "#fff", color: "#000" }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center justify-center gap-2 bg-[#e2a325] text-black rounded-full font-bold uppercase tracking-[0.15em] transition-all relative overflow-hidden group border border-[#e2a325] px-6 py-2.5 text-[10px] ${className}`}
  >
    <span className="relative z-10 whitespace-nowrap inline-flex items-center gap-1.5">{children}</span> 
    <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
  </motion.button>
);

export const SecondaryButton = ({ children, className = "border-white/30 text-white hover:text-[#e2a325]", onClick, type = "button" }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit" | "reset" }) => (
  <motion.button 
    type={type}
    onClick={onClick}
    whileHover={{ scale: 1.03, backgroundColor: "rgba(226, 163, 37, 0.1)", borderColor: "#e2a325" }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center justify-center gap-2 bg-transparent border rounded-full font-bold uppercase tracking-[0.15em] transition-all whitespace-nowrap px-6 py-2.5 text-[10px] ${className}`}
  >
    {children}
  </motion.button>
);
