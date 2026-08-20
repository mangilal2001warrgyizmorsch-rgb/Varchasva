"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';
import { useEnquiry } from '../../context/EnquiryContext';
import { PRODUCTS } from '../../constants/products';

export default function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const { scrollYProgress } = useScroll();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOilsOpen, setMobileOilsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(13, 20, 10, 0.9)", "rgba(13, 20, 10, 0.98)"]);
  const navBackdrop = useTransform(scrollYProgress, [0, 0.05], ["blur(8px)", "blur(16px)"]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileOilsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

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
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 py-3 sm:py-3.5 border-b border-white/10 transition-colors duration-300"
    >
      {/* ── LOGO ── */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <Link href="/" className="flex flex-col items-center group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#e2a325] group-hover:scale-110 transition-transform sm:w-[22px] sm:h-[22px]">
            <path d="M12 2L8 10H16L12 2Z" fill="currentColor"/>
            <path d="M4 14C4 14 6 12 12 12C18 12 20 14 20 14C20 14 18 18 12 20C6 18 4 14 4 14Z" fill="currentColor" opacity="0.8"/>
          </svg>
          <span className="text-base sm:text-lg md:text-xl font-serif font-bold text-white tracking-[0.16em] sm:tracking-[0.18em] group-hover:text-[#e2a325] transition mt-0.5 leading-none">
            DHAROHAR
          </span>
          <span className="text-[0.38rem] sm:text-[0.42rem] tracking-[0.3em] sm:tracking-[0.32em] text-white/60 uppercase leading-none mt-0.5 sm:mt-1">
            Natural Oils
          </span>
        </Link>
      </motion.div>
      
      {/* ── DESKTOP NAVIGATION (>= 1024px) ── */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.15 }}
        className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-widest text-white"
      >
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <div 
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
            >
              <Link 
                href={link.href} 
                className={`group relative py-2 transition-colors duration-300 flex items-center gap-1 ${
                  isActive ? "text-[#e2a325]" : "text-white/80 hover:text-[#e2a325]"
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <ChevronDown size={11} className={`opacity-70 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
                )}
                {/* Bottom Border Width 0 to 100 Animation on hover & active */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#e2a325] rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
              
              {link.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      key="desktop-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                    >
                      <div className="bg-[#111810] border border-[#e2a325]/20 rounded-xl p-3 shadow-2xl backdrop-blur-xl">
                        {PRODUCTS.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="block px-4 py-2.5 rounded-lg text-white/80 hover:text-[#e2a325] hover:bg-white/5 transition-colors"
                          >
                            <span className="block text-sm font-medium tracking-wide mb-0.5">{product.shortTitle}</span>
                            <span className="block text-[10px] text-white/50 lowercase tracking-normal">{product.category}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </motion.nav>

      {/* ── ACTIONS & MOBILE TOGGLE ── */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2.5 sm:gap-4 flex-shrink-0"
      >
        <Link href="/products" className="text-white/80 hover:text-[#e2a325] transition p-2 hidden sm:flex items-center justify-center rounded-full hover:bg-white/5" aria-label="Search Products">
          <Search size={18} />
        </Link>
        
        <div className="hidden sm:block">
          <PrimaryButton onClick={() => openEnquiry()} className="px-3.5 sm:px-5 py-2 text-[9px] sm:text-[10px]">
            Enquire Now
          </PrimaryButton>
        </div>

        {/* Hamburger Button for Mobile / Tablet (< 1024px) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#e2a325] focus:outline-none transition-colors rounded-lg hover:bg-white/5 flex items-center justify-center cursor-pointer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* ── MOBILE / TABLET DRAWER PORTAL ── */}
      {mounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div key="mobile-drawer-container" className="fixed inset-0 z-[9999] lg:hidden">
              {/* Backdrop */}
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Slide-out Menu Panel */}
              <motion.div
                key="mobile-drawer-panel"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0d140a] border-l border-white/10 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
              >
                {/* Header Inside Drawer */}
                <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between flex-shrink-0">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                    <span className="text-lg font-serif font-bold text-white tracking-widest">DHAROHAR</span>
                    <span className="text-[9px] text-[#e2a325] uppercase tracking-wider font-sans">Natural Oils</span>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close drawer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="px-5 sm:px-6 py-4 sm:py-6 space-y-1 overflow-y-auto flex-1">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname === link.href || pathname.startsWith(link.href + "/");

                    if (link.hasDropdown) {
                      return (
                        <div key={link.label} className="border-b border-white/5 pb-2">
                          <button
                            type="button"
                            onClick={() => setMobileOilsOpen(!mobileOilsOpen)}
                            className={`w-full py-3 text-left font-serif text-lg sm:text-xl flex items-center justify-between transition-colors cursor-pointer ${
                              isActive ? "text-[#e2a325]" : "text-white hover:text-[#e2a325]"
                            }`}
                          >
                            <span>{link.label}</span>
                            <ChevronDown size={18} className={`text-[#e2a325] transition-transform duration-300 ${mobileOilsOpen ? "rotate-180" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileOilsOpen && (
                              <motion.div
                                key="mobile-oils-dropdown"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden pl-3 py-2 space-y-2 border-l border-[#e2a325]/30 ml-2"
                              >
                                <Link
                                  href="/products"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="py-1.5 text-xs sm:text-sm text-[#e2a325] font-medium hover:underline flex items-center gap-1.5"
                                >
                                  View All Products <ArrowRight size={13} />
                                </Link>
                                {PRODUCTS.map((p) => (
                                  <Link
                                    key={p.slug}
                                    href={`/products/${p.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1.5 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                                  >
                                    {p.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 font-serif text-lg sm:text-xl border-b border-white/5 transition-colors ${
                          isActive ? "text-[#e2a325]" : "text-white hover:text-[#e2a325]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom Quick Contact & Actions */}
                <div className="p-5 sm:p-6 bg-white/[0.02] border-t border-white/10 space-y-3 sm:space-y-4 flex-shrink-0">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openEnquiry();
                    }}
                    className="w-full bg-[#e2a325] hover:bg-[#c98e1d] text-[#111810] py-3 sm:py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/20 cursor-pointer"
                  >
                    <MessageSquare size={14} /> Enquire Now
                  </button>

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button
                      type="button"
                      className="w-full bg-[#1a4a38] hover:bg-[#13372a] text-white py-3 sm:py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-colors flex items-center justify-center gap-2 text-center cursor-pointer"
                    >
                      <Phone size={14} /> WhatsApp Us
                    </button>
                  </a>

                  <p className="text-center text-[9px] sm:text-[10px] text-white/40 tracking-wider font-light pt-1">
                    100% Pure Cold-Pressed Oils • Rajasthan, India
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  );
}
