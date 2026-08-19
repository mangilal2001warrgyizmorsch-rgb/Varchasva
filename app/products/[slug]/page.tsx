"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, ChevronRight, Leaf, Shield, Heart, MessageCircle, Phone, Mail, Check } from "lucide-react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { PrimaryButton } from "../../../components/ui/Button";
import { getProductBySlug, getRelatedProducts } from "../../../constants/products";
import type { Product } from "../../../constants/products";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen font-sans">
        <Header />
        <div className="pt-40 pb-32 text-center">
          <h1 className="text-4xl font-serif text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400 font-light mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products"><PrimaryButton className="px-10 py-4 text-xs tracking-widest">Browse All Products</PrimaryButton></Link>
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
      <div className="bg-[#fdfaf6] pt-28 pb-4 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-400 font-light">
          <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-[#1a4a38] transition-colors">Products</Link>
          <ChevronRight size={14} />
          <span className="text-[#1a4a38] font-medium">{product.title}</span>
        </div>
      </div>

      {/* PRODUCT HERO */}
      <section className="bg-[#fdfaf6] pb-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pt-8">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* TABS */}
      <ProductTabs product={product} />

      {/* TRUST BADGES */}
      <section className="bg-[#fdfaf6] py-20 px-6 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Promise</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#111810]">Why Choose Dharohar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Leaf size={28} strokeWidth={1.5} />, title: "Pure & Natural", desc: "Absolutely nothing artificial added. Every drop is 100% pure." },
              { icon: <Shield size={28} strokeWidth={1.5} />, title: "Cold-Pressed", desc: "Zero heat extraction below 40°C to retain all nutrients." },
              { icon: <Heart size={28} strokeWidth={1.5} />, title: "Heart Healthy", desc: "Rich in good fats and natural antioxidants for your wellbeing." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-[2rem] border border-gray-100 text-center group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{item.icon}</div>
                <h4 className="text-xl font-serif text-[#111810] mb-2 group-hover:text-[#1a4a38] transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">You May Also Like</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111810]">More Pure Oils</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {related.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 cursor-pointer">
                  <div className="relative aspect-[4/5] bg-[#fdfaf6] mb-8 flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-white transition-colors duration-500">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">{p.badge}</div>
                  </div>
                  <h3 className="text-xl font-serif text-[#111810] leading-tight group-hover:text-[#1a4a38] transition-colors mb-3">{p.title}</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex text-[#e2a325] gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={14} fill="currentColor" />))}</div>
                    <div className="text-sm text-gray-400 font-light">({p.reviews} reviews)</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/products"><PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">View All Products</PrimaryButton></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductGallery({ product }: { product: Product }) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[4/5] bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 relative group">
        <img src={product.gallery[activeIdx]} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
        <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">{product.badge}</div>
      </div>
      <div className="flex gap-3">
        {product.gallery.map((img, i) => (
          <button key={i} onClick={() => setActiveIdx(i)} className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeIdx === i ? "border-[#1a4a38] shadow-lg shadow-black/10" : "border-gray-200 hover:border-[#e2a325]/50 opacity-60 hover:opacity-100"}`}>
            <img src={img} alt={`${product.title} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.size);
  return (
    <div className="lg:sticky lg:top-28">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-[1px] bg-[#e2a325]" />
        <span className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">{product.category}</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-serif text-[#111810] mb-4 leading-tight">{product.title}</h1>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex text-[#e2a325] gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}</div>
        <span className="text-sm text-gray-500 font-light">{product.rating} ({product.reviews} reviews)</span>
      </div>
      <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">{product.description}</p>

      {/* Size selector */}
      <div className="mb-8">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-4 flex items-center gap-2">
          <div className="w-4 h-[1px] bg-[#e2a325]" /> Available Sizes
        </h4>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((sz) => (
            <button key={sz} onClick={() => setSelectedSize(sz)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${selectedSize === sz ? "bg-[#111810] text-white border-[#111810] shadow-lg shadow-black/10" : "bg-white text-gray-600 border-gray-200 hover:border-[#1a4a38] hover:text-[#1a4a38]"}`}>
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Enquire Now */}
      <Link href="/contact">
        <PrimaryButton className="w-full py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-4">
          <MessageCircle size={16} className="mr-2" /> Enquire About This Oil
        </PrimaryButton>
      </Link>

      <Link href="https://wa.me/919999999999" target="_blank">
        <button className="w-full bg-[#1a4a38] hover:bg-[#111810] text-white rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 py-4 mb-10">
          <Phone size={16} /> WhatsApp Us
        </button>
      </Link>

      {/* Contact info */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-4">
          <Phone size={20} className="text-[#1a4a38]" />
          <div>
            <div className="text-sm font-medium text-[#111810]">Call Us</div>
            <div className="text-xs text-gray-400 font-light">+91 99999 99999</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={20} className="text-[#1a4a38]" />
          <div>
            <div className="text-sm font-medium text-[#111810]">Email Us</div>
            <div className="text-xs text-gray-400 font-light">hello@dharohar.com</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Shield size={20} className="text-[#1a4a38]" />
          <div>
            <div className="text-sm font-medium text-[#111810]">Quality Guaranteed</div>
            <div className="text-xs text-gray-400 font-light">100% pure, lab-tested, certified</div>
          </div>
        </div>
      </div>
    </div>
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
    <section className="bg-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-1 mb-12 border-b border-gray-100">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${activeTab === tab.id ? "border-[#e2a325] text-[#111810]" : "border-transparent text-gray-400 hover:text-[#1a4a38]"}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="max-w-4xl">
          {activeTab === "description" && (
            <div className="space-y-6">
              <p className="text-gray-600 font-light leading-relaxed text-lg">{product.longDescription}</p>
              <div className="mt-8 p-6 bg-[#fdfaf6] rounded-2xl border border-gray-100">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-3 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]" /> Ingredients</h4>
                <p className="text-sm text-gray-600 font-light">{product.ingredients}</p>
              </div>
            </div>
          )}
          {activeTab === "benefits" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#fdfaf6] rounded-2xl border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#1a4a38] shadow-sm border border-gray-100 group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500"><Check size={14} /></div>
                  <p className="text-gray-600 font-light text-sm leading-relaxed pt-1">{b}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "nutrition" && (
            <div className="bg-[#fdfaf6] rounded-2xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]" /> Nutritional Information</h4>
              </div>
              {product.nutrition.map((n, i) => (
                <div key={i} className={`flex justify-between items-center px-6 py-4 ${i < product.nutrition.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <span className="text-sm text-gray-600 font-light">{n.label}</span>
                  <span className="text-sm text-[#111810] font-medium">{n.value}</span>
                </div>
              ))}
            </div>
          )}
          {activeTab === "usage" && (
            <div className="space-y-6"><p className="text-gray-600 font-light leading-relaxed text-lg">{product.usage}</p></div>
          )}
        </div>
      </div>
    </section>
  );
}
