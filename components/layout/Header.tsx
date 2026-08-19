"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';

export default function Header() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(13, 20, 10, 0.9)", "rgba(13, 20, 10, 0.98)"]);
  const navBackdrop = useTransform(scrollYProgress, [0, 0.05], ["blur(8px)", "blur(16px)"]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Oils", href: "/products", hasDropdown: true },
    { label: "Benefits", href: "/benefits" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header 
      style={{ backgroundColor: navBg, backdropFilter: navBackdrop }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-3.5 border-b border-white/10 transition-colors duration-300"
    >
      {/* ── LOGO ── */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <Link href="/" className="flex flex-col items-center group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#e2a325] group-hover:scale-110 transition-transform">
            <path d="M12 2L8 10H16L12 2Z" fill="currentColor"/>
            <path d="M4 14C4 14 6 12 12 12C18 12 20 14 20 14C20 14 18 18 12 20C6 18 4 14 4 14Z" fill="currentColor" opacity="0.8"/>
          </svg>
          <span className="text-lg md:text-xl font-serif font-bold text-white tracking-[0.18em] group-hover:text-[#e2a325] transition mt-0.5 leading-none">
            DHAROHAR
          </span>
          <span className="text-[0.42rem] tracking-[0.32em] text-white/60 uppercase leading-none mt-1">
            Natural Oils
          </span>
        </Link>
      </motion.div>
      
      {/* ── NAVIGATION ── */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.15 }}
        className="hidden lg:flex items-center gap-7 xl:gap-8 text-[11px] font-bold uppercase tracking-widest text-white"
      >
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link 
              key={link.label}
              href={link.href} 
              className={`group relative py-2 transition-colors duration-300 flex items-center gap-1 ${
                isActive ? "text-[#e2a325]" : "text-white/80 hover:text-[#e2a325]"
              }`}
            >
              <span>{link.label}</span>
              {link.hasDropdown && (
                <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              )}
              {/* Bottom Border Width 0 to 100 Animation on hover & active */}
              <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-[#e2a325] rounded-full transition-all duration-300 ease-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} 
              />
            </Link>
          );
        })}
      </motion.nav>

      {/* ── ACTIONS ── */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-4 flex-shrink-0"
      >
        <Link href="/products" className="text-white/80 hover:text-[#e2a325] transition p-1 hidden sm:block">
          <Search size={18} />
        </Link>
        <Link href="/contact">
          <PrimaryButton className="px-5 py-2 text-[10px]">
            Enquire Now
          </PrimaryButton>
        </Link>
      </motion.div>
    </motion.header>
  );
}
