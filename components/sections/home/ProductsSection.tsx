"use client";
import React, { useState } from 'react';
import { Star, ArrowRight, Minus, Plus, ShoppingCart } from 'lucide-react';
import { PrimaryButton } from '../../ui/Button';

export default function ProductsSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#f0ede6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#1a4a38] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Collection</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-[#111810]">Pure Daily Essentials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProductCard 
            title="Cold-Pressed Mustard Oil"
            price="₹350"
            size="1 Litre"
            color="bg-amber-600"
            rating={4.9}
            reviews={128}
          />
          <ProductCard 
            title="Virgin Coconut Oil"
            price="₹450"
            size="500 ml"
            color="bg-slate-200"
            rating={4.8}
            reviews={94}
          />
          <ProductCard 
            title="Pure Groundnut Oil"
            price="₹420"
            size="1 Litre"
            color="bg-amber-400"
            rating={5.0}
            reviews={215}
          />
        </div>

        <div className="mt-16 flex justify-center">
          <PrimaryButton className="px-8 py-4 text-xs w-fit mx-auto md:mx-0">Explore Collections</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ title, price, size, color, rating, reviews }: { title: string, price: string, size: string, color: string, rating: number, reviews: number }) {
  const [qty, setQty] = useState(1);
  
  return (
    <div className="bg-[#fdfaf6] p-6 rounded-sm border border-gray-200 group hover:border-[#1a4a38]/30 transition-colors">
      <div className="relative aspect-[3/4] bg-[#f5f3f0] mb-6 flex justify-center items-end pb-8 overflow-hidden">
        {/* Placeholder bottle using CSS gradients since we don't have real transparent bottle images */}
        <div className="relative w-24 h-48 rounded-t-3xl rounded-b-lg shadow-xl shadow-black/10 z-10">
           {/* Cap */}
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-6 bg-[#111810] rounded-t-sm"></div>
           {/* Bottle Body */}
           <div className={`w-full h-full rounded-t-3xl rounded-b-lg ${color} opacity-80 mix-blend-multiply border-2 border-white/40`}></div>
           {/* Label */}
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-20 bg-[#fdfaf6] shadow-sm rounded-sm p-2 flex flex-col justify-center items-center">
             <div className="text-[6px] font-bold text-[#1a4a38] uppercase tracking-widest text-center">{title.split(' ')[0]}</div>
             <div className="text-[5px] text-gray-500 mt-1">{size}</div>
           </div>
           {/* Glare */}
           <div className="absolute top-2 left-2 w-4 h-32 bg-white/30 blur-md rounded-full transform -rotate-12"></div>
        </div>
        
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white px-2 py-1 text-[9px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm">
          Pure
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-serif text-[#111810] leading-tight pr-4">{title}</h3>
        <div className="text-lg font-bold text-[#1a4a38]">{price}</div>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-[#e2a325]"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
        <div className="text-xs text-gray-400">({reviews})</div>
      </div>
      
      <div className="text-xs text-gray-500 mb-6">{size} • Cold-Pressed • Unrefined</div>
      
      <div className="flex gap-3">
        <div className="flex items-center justify-between border border-gray-300 rounded px-2 py-1 w-24">
          <button className="p-1 text-gray-400 hover:text-black transition" onClick={() => setQty(Math.max(1, qty-1))}><Minus size={14} /></button>
          <span className="text-xs font-bold w-4 text-center">{qty}</span>
          <button className="p-1 text-gray-400 hover:text-black transition" onClick={() => setQty(qty+1)}><Plus size={14} /></button>
        </div>
        <button className="flex-1 bg-[#111810] hover:bg-[#1a4a38] text-white rounded text-xs font-bold uppercase tracking-widest transition flex items-center justify-center">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
