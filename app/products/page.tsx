"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageCircle, ChevronRight, SlidersHorizontal } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { PRODUCTS, CATEGORIES } from "../../constants/products";
import type { Product } from "../../constants/products";
import { useEnquiry } from "../../context/EnquiryContext";
import { scaleIn, staggerContainer, staggerItem, heroStagger, heroReveal, viewportOnce } from "../../utils/animations";

export default function ProductsPage() {
  const { openEnquiry } = useEnquiry();
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-12 md:pb-14 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] bg-[#1a4a38]/5 rounded-full blur-3xl" />
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={heroReveal} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a4a38] font-medium">Our Collection</span>
          </motion.div>
          <motion.div variants={heroReveal} className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Oils</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </motion.div>
          <motion.h1 variants={heroReveal} className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111810] leading-tight mb-3 sm:mb-4">Our Collection</motion.h1>
          <motion.p variants={heroReveal} className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            Every bottle is cold-pressed from hand-selected seeds, preserving nature&apos;s goodness in its purest form.
          </motion.p>
        </motion.div>
      </section>

      {/* ── FILTER BAR ── */}
      <motion.section 
        className="bg-white border-b border-gray-100 sticky top-[58px] sm:top-[66px] z-30 backdrop-blur-xl bg-white/95 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 py-2.5 sm:py-3.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-300 border cursor-pointer flex-shrink-0 ${activeCategory === cat ? "bg-[#111810] text-white border-[#111810] shadow-md shadow-black/10" : "bg-transparent text-gray-500 border-gray-200 hover:border-[#1a4a38] hover:text-[#1a4a38]"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-light justify-end">
            <SlidersHorizontal size={14} className="sm:w-4 sm:h-4" />
            <span>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </motion.section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filtered.map((product) => (<ProductCard key={product.slug} product={product} />))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.div 
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-base sm:text-lg font-light">No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── PROMISE STRIP ── */}
      <section className="bg-[#fdfaf6] py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 border-t border-gray-100">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {[
            { icon: "🌿", title: "100% Natural", sub: "No additives ever" },
            { icon: "❄️", title: "Cold-Pressed", sub: "Below 40°C extraction" },
            { icon: "📞", title: "Quick Response", sub: "We reply within 24hrs" },
            { icon: "🤝", title: "Bulk Orders", sub: "1L, 5L & 15L Available" },
          ].map((item) => (
            <motion.div key={item.title} variants={staggerItem} className="group p-2">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
              <h4 className="text-base sm:text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-500 font-light">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── HERITAGE CTA ── */}
      <section className="relative py-10 sm:py-14 md:py-16 px-4 sm:px-6 overflow-hidden flex justify-center items-center bg-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/home/banner.webp" 
            alt="Varchasva Farm" 
            fill 
            sizes="100vw"
            className="object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-[#0d140a]/50" />
        </div>
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto text-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scaleIn}
        >
          <div className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl shadow-black/10">
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">Interested?</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-3 sm:mb-4 leading-tight">
              Get in <span className="text-[#e2a325] italic font-light">Touch</span>
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto font-light leading-relaxed mb-5 sm:mb-6 text-xs sm:text-base">
              Have questions about our oils or want to place a bulk order? We&apos;d love to hear from you.
            </p>
            <PrimaryButton onClick={() => openEnquiry()} className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 text-center justify-center">
              Enquire Now
            </PrimaryButton>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { openEnquiry } = useEnquiry();
  const [isHovered, setIsHovered] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setActiveIdx(0);
      return;
    }
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % product.gallery.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered, product.gallery.length]);

  return (
    <motion.div 
      variants={staggerItem}
      className="bg-white p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 flex flex-col hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/5] bg-[#fdfaf6] mb-5 sm:mb-8 flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-white transition-colors duration-500 cursor-pointer">
          <motion.div 
            className="flex w-full h-full"
            animate={{ x: `-${activeIdx * 100}%` }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            {product.gallery.map((img, i) => (
              <div key={i} className="relative w-full h-full flex-shrink-0">
                <Image 
                  src={img} 
                  alt={`${product.title} view ${i + 1}`} 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover mix-blend-multiply" 
                />
              </div>
            ))}
          </motion.div>
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/85 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">{product.badge}</div>
        </div>
      </Link>
      <Link href={`/products/${product.slug}`}>
        <h3 className="text-lg sm:text-xl font-serif text-[#111810] leading-tight group-hover:text-[#1a4a38] transition-colors cursor-pointer mb-2 sm:mb-3">{product.title}</h3>
      </Link>
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex text-[#e2a325] gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={13} fill="currentColor" />))}</div>
        <div className="text-xs sm:text-sm text-gray-400 font-light">({product.reviews} reviews)</div>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-4 sm:mb-6 line-clamp-2">{product.description}</p>
      <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-light flex items-center gap-2">
        <span className="font-medium text-[#1a4a38]">1L • 5L • 15L</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>Unrefined</span>
      </div>
      <button 
        onClick={() => openEnquiry(product.title)}
        className="mt-auto w-full bg-[#111810] hover:bg-[#1a4a38] text-white rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 py-3.5 sm:py-4 cursor-pointer"
      >
        <MessageCircle size={14} /> Enquire Now
      </button>
    </motion.div>
  );
}
