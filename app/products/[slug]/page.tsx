"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight, Leaf, Shield, Heart, MessageCircle, Phone, Mail, Check } from "lucide-react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { PrimaryButton } from "../../../components/ui/Button";
import { getProductBySlug, getRelatedProducts } from "../../../constants/products";
import type { Product } from "../../../constants/products";
import { useEnquiry } from "../../../context/EnquiryContext";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportOnce } from "../../../utils/animations";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen font-sans">
        <Header />
        <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-serif text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400 font-light mb-8 text-sm sm:text-base">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products"><PrimaryButton className="px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest">Browse All Products</PrimaryButton></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(slug, 3);

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* BREADCRUMB */}
      <motion.div 
        className="bg-[#fdfaf6] pt-20 sm:pt-28 pb-3 sm:pb-4 px-4 sm:px-8 md:px-12 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 font-light overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
          <ChevronRight size={13} className="flex-shrink-0" />
          <Link href="/products" className="hover:text-[#1a4a38] transition-colors">Products</Link>
          <ChevronRight size={13} className="flex-shrink-0" />
          <span className="text-[#1a4a38] font-medium truncate">{product.title}</span>
        </div>
      </motion.div>

      {/* PRODUCT HERO */}
      <section className="bg-[#fdfaf6] pb-12 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start pt-4 sm:pt-8">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* TABS */}
      <ProductTabs product={product} />

      {/* TRUST BADGES */}
      <section className="bg-[#fdfaf6] py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Promise</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810]">Why Choose Dharohar</h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { icon: <Leaf size={26} strokeWidth={1.5} />, title: "Pure & Natural", desc: "Absolutely nothing artificial added. Every drop is 100% pure." },
              { icon: <Shield size={26} strokeWidth={1.5} />, title: "Cold-Pressed", desc: "Zero heat extraction below 40°C to retain all nutrients." },
              { icon: <Heart size={26} strokeWidth={1.5} />, title: "Heart Healthy", desc: "Rich in good fats and natural antioxidants for your wellbeing." },
            ].map((item, idx) => (
              <motion.div 
                key={item.title} 
                variants={staggerItem} 
                className={`bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 text-center group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 ${
                  idx === 2 ? "sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto w-full" : ""
                }`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{item.icon}</div>
                <h4 className="text-lg sm:text-xl font-serif text-[#111810] mb-2 group-hover:text-[#1a4a38] transition-colors">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">You May Also Like</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#111810]">More Pure Oils</h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {related.map((p, idx) => (
              <motion.div 
                key={p.slug} 
                variants={staggerItem}
                className={idx === 2 ? "sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto w-full" : ""}
              >
                <Link href={`/products/${p.slug}`}>
                  <div className="bg-white p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 cursor-pointer hover:-translate-y-1">
                    <div className="relative aspect-[4/5] bg-[#fdfaf6] mb-5 sm:mb-8 flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-white transition-colors duration-500">
                      <Image 
                        src={p.image} 
                        alt={p.title} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/80 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[8px] sm:text-[9px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">{p.badge}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif text-[#111810] leading-tight group-hover:text-[#1a4a38] transition-colors mb-2 sm:mb-3">{p.title}</h3>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex text-[#e2a325] gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={13} fill="currentColor" />))}</div>
                      <div className="text-xs sm:text-sm text-gray-400 font-light">({p.reviews} reviews)</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-10 sm:mt-16 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <Link href="/products" className="w-full sm:w-auto">
              <PrimaryButton className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center justify-center">View All Products</PrimaryButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductGallery({ product }: { product: Product }) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <motion.div 
      className="flex flex-col gap-3 sm:gap-4"
      initial="hidden"
      animate="visible"
      variants={fadeInLeft}
    >
      <motion.div 
        className="aspect-[4/5] bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 relative group"
        key={activeIdx}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image 
          src={product.gallery[activeIdx]} 
          alt={product.title} 
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
          priority
        />
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/85 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">{product.badge}</div>
      </motion.div>
      <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
        {product.gallery.map((img, i) => (
          <button key={i} onClick={() => setActiveIdx(i)} className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 cursor-pointer ${activeIdx === i ? "border-[#1a4a38] shadow-md" : "border-gray-200 hover:border-[#e2a325]/50 opacity-60 hover:opacity-100"}`}>
            <Image 
              src={img} 
              alt={`${product.title} view ${i + 1}`} 
              fill
              sizes="96px"
              className="object-cover" 
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function ProductInfo({ product }: { product: Product }) {
  const { openEnquiry } = useEnquiry();
  const [selectedSize, setSelectedSize] = useState(product.size);
  return (
    <motion.div 
      className="lg:sticky lg:top-24"
      initial="hidden"
      animate="visible"
      variants={fadeInRight}
    >
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <div className="w-6 sm:w-8 h-[1px] bg-[#e2a325]" />
        <span className="text-[#1a4a38] text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">{product.category}</span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111810] mb-3 sm:mb-4 leading-tight">{product.title}</h1>
      <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
        <div className="flex text-[#e2a325] gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />))}</div>
        <span className="text-xs sm:text-sm text-gray-500 font-light">{product.rating} ({product.reviews} reviews)</span>
      </div>
      <p className="text-gray-600 font-light leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">{product.description}</p>

      {/* Size selector */}
      <div className="mb-6 sm:mb-8">
        <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-3 sm:mb-4 flex items-center gap-2">
          <div className="w-4 h-[1px] bg-[#e2a325]" /> Available Sizes
        </h4>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((sz) => (
            <button key={sz} onClick={() => setSelectedSize(sz)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border cursor-pointer ${selectedSize === sz ? "bg-[#111810] text-white border-[#111810] shadow-md shadow-black/10" : "bg-white text-gray-600 border-gray-200 hover:border-[#1a4a38] hover:text-[#1a4a38]"}`}>
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Enquire Now */}
      <PrimaryButton 
        onClick={() => openEnquiry(product.title)} 
        className="w-full py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-3 sm:mb-4 text-center justify-center"
      >
        <MessageCircle size={15} className="mr-2" /> Enquire About This Oil
      </PrimaryButton>

      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="block w-full">
        <button className="w-full bg-[#1a4a38] hover:bg-[#111810] text-white rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 py-3.5 sm:py-4 mb-6 sm:mb-10 cursor-pointer">
          <Phone size={15} /> WhatsApp Us
        </button>
      </a>

      {/* Contact info */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <Phone size={18} className="text-[#1a4a38] flex-shrink-0" />
          <div>
            <div className="text-xs sm:text-sm font-medium text-[#111810]">Call Us</div>
            <div className="text-[11px] sm:text-xs text-gray-400 font-light">+91 99999 99999</div>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Mail size={18} className="text-[#1a4a38] flex-shrink-0" />
          <div>
            <div className="text-xs sm:text-sm font-medium text-[#111810]">Email Us</div>
            <div className="text-[11px] sm:text-xs text-gray-400 font-light">hello@dharohar.com</div>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Shield size={18} className="text-[#1a4a38] flex-shrink-0" />
          <div>
            <div className="text-xs sm:text-sm font-medium text-[#111810]">Quality Guaranteed</div>
            <div className="text-[11px] sm:text-xs text-gray-400 font-light">100% pure, lab-tested, certified</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState("description");
  const tabs = [
    { id: "description", label: "Description" },
    { id: "benefits", label: "Benefits" },
    { id: "nutrition", label: "Nutrition" },
    { id: "usage", label: "How to Use" },
  ];
  return (
    <motion.section 
      className="bg-white py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-1 mb-8 sm:mb-12 border-b border-gray-100 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`px-5 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-300 border-b-2 flex-shrink-0 cursor-pointer ${activeTab === tab.id ? "border-[#e2a325] text-[#111810]" : "border-transparent text-gray-400 hover:text-[#1a4a38]"}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === "description" && (
              <motion.div 
                key="description"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base lg:text-lg">{product.longDescription}</p>
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#fdfaf6] rounded-2xl border border-gray-100">
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-2 sm:mb-3 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]" /> Ingredients</h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light">{product.ingredients}</p>
                </div>
              </motion.div>
            )}
            {activeTab === "benefits" && (
              <motion.div 
                key="benefits"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4"
              >
                {product.benefits.map((b, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#fdfaf6] rounded-2xl border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#1a4a38] shadow-sm border border-gray-100 group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500"><Check size={13} className="sm:w-3.5 sm:h-3.5" /></div>
                    <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed pt-0.5">{b}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {activeTab === "nutrition" && (
              <motion.div 
                key="nutrition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#fdfaf6] rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-4 sm:p-6 border-b border-gray-100">
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]" /> Nutritional Information</h4>
                </div>
                {product.nutrition.map((n, i) => (
                  <motion.div 
                    key={i} 
                    className={`flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 ${i < product.nutrition.length - 1 ? "border-b border-gray-100" : ""}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-xs sm:text-sm text-gray-600 font-light">{n.label}</span>
                    <span className="text-xs sm:text-sm text-[#111810] font-medium">{n.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {activeTab === "usage" && (
              <motion.div 
                key="usage"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base lg:text-lg">{product.usage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
