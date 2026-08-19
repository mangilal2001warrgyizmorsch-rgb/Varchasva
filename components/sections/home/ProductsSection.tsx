"use client";
import React from 'react';
import Link from 'next/link';
import { Star, MessageCircle } from 'lucide-react';
import { PrimaryButton } from '../../ui/Button';

export default function ProductsSection() {
  return (
    <section className="py-32 px-6 lg:px-24 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Collection</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111810] leading-tight">Pure Daily Essentials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <ProductCard 
            title="Cold-Pressed Mustard Oil"
            slug="cold-pressed-mustard-oil"
            size="Available in 250ml – 5L"
            image="/product_mustard.jpg"
            badge="Bestseller"
            rating={4.9}
            reviews={128}
          />
          <ProductCard 
            title="Virgin Coconut Oil"
            slug="virgin-coconut-oil"
            size="Available in 200ml – 1L"
            image="/product_coconut.jpg"
            badge="Organic"
            rating={4.8}
            reviews={94}
          />
          <ProductCard 
            title="Pure Groundnut Oil"
            slug="pure-groundnut-oil"
            size="Available in 500ml – 5L"
            image="/product_groundnut.jpg"
            badge="Top Rated"
            rating={5.0}
            reviews={215}
          />
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/products">
            <PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Explore All Collections
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ title, slug, size, image, badge, rating, reviews }: { title: string, slug: string, size: string, image: string, badge: string, rating: number, reviews: number }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 flex flex-col">
      <Link href={`/products/${slug}`}>
        <div className="relative aspect-[4/5] bg-[#fdfaf6] mb-8 flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-white transition-colors duration-500 cursor-pointer">
          <img src={image} alt={title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">
            {badge}
          </div>
        </div>
      </Link>
      
      <Link href={`/products/${slug}`}>
        <h3 className="text-xl lg:text-2xl font-serif text-[#111810] leading-tight group-hover:text-[#1a4a38] transition-colors cursor-pointer mb-3">{title}</h3>
      </Link>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="flex text-[#e2a325] gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
        <div className="text-sm text-gray-400 font-light">({reviews} reviews)</div>
      </div>
      
      <div className="text-sm text-gray-500 mb-8 font-light flex items-center gap-2">
        <span>{size}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
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
