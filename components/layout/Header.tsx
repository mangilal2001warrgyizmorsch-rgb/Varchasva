"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import WhatsappIcon from "../ui/WhatsappIcon";
import { PrimaryButton } from "../ui/Button";
import { useEnquiry } from "../../context/EnquiryContext";
import { PRODUCTS } from "../../constants/products";

export default function Header() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOilsOpen, setMobileOilsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check whether we are still in hero or scrolled into body content
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        const promiseEl = document.getElementById("promise-section");
        if (promiseEl) {
          const rect = promiseEl.getBoundingClientRect();
          setIsScrolledPastHero(rect.top <= 90);
        } else {
          setIsScrolledPastHero(window.scrollY > 400);
        }
      } else {
        // On secondary pages (where background is body-bg), stay on theme background
        setIsScrolledPastHero(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

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
    <header 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12 py-2 sm:py-2.5 transition-all duration-300 ${
        isScrolledPastHero 
          ? "bg-[#fdfaf6]/95 backdrop-blur-xl border-b border-[#e2a325]/20 shadow-sm shadow-black/[0.03]" 
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      {/* ── LOGO ── */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 sm:h-14 md:h-16 w-32 sm:w-44 md:w-56 flex items-center justify-start">
            <Image
              src="/common/logo.webp"
              alt="Varchasva Natural Oils"
              width={260}
              height={175}
              priority
              className="h-full w-auto object-contain drop-shadow-sm scale-[1.1] origin-left group-hover:scale-[1.12] transition-transform duration-300"
            />
          </div>
        </Link>
      </motion.div>

      {/* ── DESKTOP NAVIGATION (>= 1024px) ── */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-widest"
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
                className={`group relative py-2 transition-colors duration-300 flex items-center gap-1.5 ${
                  isScrolledPastHero
                    ? isActive
                      ? "text-[#1a4a38] font-bold"
                      : "text-[#111810] hover:text-[#1a4a38]"
                    : isActive
                      ? "text-[#e2a325] font-bold"
                      : "text-white hover:text-[#e2a325]"
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : "group-hover:rotate-180"
                    } ${isScrolledPastHero ? "text-[#1a4a38]" : "text-white/80"}`}
                  />
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
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                    >
                      <div className="bg-white/95 border border-[#e2a325]/25 rounded-xl p-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
                        <Link
                          href="/products"
                          className="group block px-3 py-2"
                        >
                          <span className="relative inline-block pb-1 text-[11px] font-bold uppercase tracking-widest text-[#1a4a38] transition-colors">
                            View All 4 Oils →
                            <span className="absolute bottom-0 left-0 h-[2px] bg-[#e2a325] rounded-full transition-all duration-300 ease-out w-0 group-hover:w-full" />
                          </span>
                        </Link>
                        <div className="h-[1px] bg-gray-100 my-1 mx-3" />
                        {PRODUCTS.map((product) => {
                          const isActive = pathname === `/products/${product.slug}`;
                          return (
                            <Link
                              key={product.slug}
                              href={`/products/${product.slug}`}
                              className="group block px-3 py-2"
                            >
                              <span className={`relative inline-block pb-1 text-[11px] font-bold uppercase tracking-widest transition-colors ${
                                isActive ? "text-[#1a4a38]" : "text-[#111810] group-hover:text-[#1a4a38]"
                              }`}>
                                {product.shortTitle}
                                <span
                                  className={`absolute bottom-0 left-0 h-[2px] bg-[#e2a325] rounded-full transition-all duration-300 ease-out ${
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                  }`}
                                />
                              </span>
                            </Link>
                          );
                        })}
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
        <Link
          href="/products"
          className={`transition p-2 hidden sm:flex items-center justify-center rounded-full ${
            isScrolledPastHero
              ? "text-[#111810] hover:text-[#1a4a38] hover:bg-black/5"
              : "text-white hover:text-[#e2a325] hover:bg-white/10"
          }`}
          aria-label="Search Products"
        >
          <Search size={18} />
        </Link>

        <div className="hidden sm:block">
          <PrimaryButton
            onClick={() => openEnquiry()}
            className="px-4 sm:px-6 py-2.5 text-[9px] sm:text-[10px] tracking-widest shadow-md shadow-black/5 hover:shadow-lg"
          >
            Enquire Now
          </PrimaryButton>
        </div>

        {/* Hamburger Button for Mobile / Tablet (< 1024px) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 focus:outline-none transition-colors rounded-lg flex items-center justify-center cursor-pointer ${
            isScrolledPastHero
              ? "text-[#111810] hover:text-[#1a4a38] hover:bg-black/5"
              : "text-white hover:text-[#e2a325] hover:bg-white/10"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* ── MOBILE / TABLET DRAWER PORTAL ── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div
                key="mobile-drawer-container"
                className="fixed inset-0 z-[9999] lg:hidden"
              >
                {/* Backdrop */}
                <motion.div
                  key="mobile-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Slide-out Menu Panel */}
                <motion.div
                  key="mobile-drawer-panel"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#fdfaf6] border-l border-[#e2a325]/20 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
                >
                  {/* Header Inside Drawer */}
                  <div className="p-5 sm:p-6 border-b border-gray-200 flex items-center justify-between flex-shrink-0 bg-white/60">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center"
                    >
                      <Image
                        src="/common/logo.webp"
                        alt="Varchasva"
                        width={180}
                        height={90}
                        className="h-12 w-auto object-contain"
                      />
                    </Link>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 text-gray-500 hover:text-[#111810] rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
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
                          : pathname === link.href ||
                            pathname.startsWith(link.href + "/");

                      if (link.hasDropdown) {
                        return (
                          <div
                            key={link.label}
                            className="border-b border-gray-200/70 pb-2"
                          >
                            <button
                              type="button"
                              onClick={() => setMobileOilsOpen(!mobileOilsOpen)}
                              className={`w-full py-3 text-left font-serif text-lg sm:text-xl flex items-center justify-between transition-colors cursor-pointer ${
                                isActive
                                  ? "text-[#1a4a38] font-bold"
                                  : "text-[#111810] hover:text-[#1a4a38]"
                              }`}
                            >
                              <span>{link.label}</span>
                              <ChevronDown
                                size={18}
                                className={`text-[#e2a325] transition-transform duration-300 ${mobileOilsOpen ? "rotate-180" : ""}`}
                              />
                            </button>

                            <AnimatePresence>
                              {mobileOilsOpen && (
                                <motion.div
                                  key="mobile-oils-dropdown"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden pl-3 py-2 space-y-2 border-l-2 border-[#1a4a38]/30 ml-2"
                                >
                                  <Link
                                    href="/products"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-1.5 text-xs sm:text-sm text-[#1a4a38] font-bold hover:underline flex items-center gap-1.5"
                                  >
                                    View All 4 Products <ArrowRight size={13} />
                                  </Link>
                                  {PRODUCTS.map((p) => (
                                    <Link
                                      key={p.slug}
                                      href={`/products/${p.slug}`}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block py-1.5 text-xs sm:text-sm text-gray-600 hover:text-[#1a4a38] transition-colors"
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
                          className={`block py-3 font-serif text-lg sm:text-xl border-b border-gray-200/70 transition-colors ${
                            isActive
                              ? "text-[#1a4a38] font-bold"
                              : "text-[#111810] hover:text-[#1a4a38]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom Quick Contact & Actions */}
                  <div className="p-5 sm:p-6 bg-white/70 border-t border-gray-200 space-y-3 sm:space-y-4 flex-shrink-0">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openEnquiry();
                      }}
                      className="w-full bg-[#111810] hover:bg-[#1a4a38] text-white py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/10 cursor-pointer"
                    >
                      <MessageSquare size={14} /> Enquire Now
                    </button>

                    <a
                      href="https://wa.me/918949944620"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <button
                        type="button"
                        className="w-full bg-white hover:bg-gray-50 text-[#1a4a38] border border-[#1a4a38]/30 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-colors flex items-center justify-center gap-2 text-center cursor-pointer shadow-sm"
                      >
                        <WhatsappIcon size={14} color="#15803d" /> WhatsApp Us
                      </button>
                    </a>

                    <p className="text-center text-[9px] sm:text-[10px] text-gray-500 tracking-wider font-light pt-1">
                      100% Pure Cold-Pressed Oils • Rajasthan, India
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
