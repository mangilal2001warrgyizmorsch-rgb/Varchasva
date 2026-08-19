"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, MessageCircle, ChevronRight, SlidersHorizontal } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { PRODUCTS, CATEGORIES } from "../../constants/products";
import type { Product } from "../../constants/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-40 pb-28 px-6 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#1a4a38]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a4a38] font-medium">Our Collection</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Oils</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">Our Collection</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Every bottle is cold-pressed from hand-selected seeds, preserving nature&apos;s goodness in its purest form.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] z-40 backdrop-blur-xl bg-white/90">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat ? "bg-[#111810] text-white border-[#111810] shadow-lg shadow-black/10" : "bg-transparent text-gray-500 border-gray-200 hover:border-[#1a4a38] hover:text-[#1a4a38]"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 font-light">
            <SlidersHorizontal size={16} />
            <span>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-20 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filtered.map((product) => (<ProductCard key={product.slug} product={product} />))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-light">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── PROMISE STRIP ── */}
      <section className="bg-[#fdfaf6] py-20 px-6 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {[
            { icon: "🌿", title: "100% Natural", sub: "No additives ever" },
            { icon: "❄️", title: "Cold-Pressed", sub: "Below 40°C extraction" },
            { icon: "📞", title: "Quick Response", sub: "We reply within 24hrs" },
            { icon: "🤝", title: "Bulk Orders", sub: "Custom quantities available" },
          ].map((item) => (
            <div key={item.title} className="group">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-serif text-[#111810] mb-1 group-hover:text-[#1a4a38] transition-colors">{item.title}</h4>
              <p className="text-sm text-gray-500 font-light">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HERITAGE CTA ── */}
      <section className="relative py-32 px-6 lg:py-40 overflow-hidden flex justify-center items-center bg-white">
        <div className="absolute inset-0 z-0">
          <img src="/banner.jpg" alt="Dharohar Farm" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-[#0d140a]/50" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-black/10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Interested?</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111810] mb-6 leading-tight">
              Get in <span className="text-[#e2a325] italic font-light">Touch</span>
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto font-light leading-relaxed mb-8">
              Have questions about our oils or want to place a bulk order? We&apos;d love to hear from you.
            </p>
            <Link href="/contact">
              <PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5">
                Enquire Now
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 flex flex-col">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/5] bg-[#fdfaf6] mb-8 flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-white transition-colors duration-500 cursor-pointer">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">{product.badge}</div>
        </div>
      </Link>
      <Link href={`/products/${product.slug}`}>
        <h3 className="text-xl lg:text-2xl font-serif text-[#111810] leading-tight group-hover:text-[#1a4a38] transition-colors cursor-pointer mb-3">{product.title}</h3>
      </Link>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex text-[#e2a325] gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={14} fill="currentColor" />))}</div>
        <div className="text-sm text-gray-400 font-light">({product.reviews} reviews)</div>
      </div>
      <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 line-clamp-2">{product.description}</p>
      <div className="text-sm text-gray-500 mb-8 font-light flex items-center gap-2">
        <span>{product.size}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span>Unrefined</span>
      </div>
      <Link href="/contact" className="mt-auto">
        <button className="w-full bg-[#111810] hover:bg-[#1a4a38] text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 py-4">
          <MessageCircle size={14} /> Enquire Now
        </button>
      </Link>
    </div>
  );
}
