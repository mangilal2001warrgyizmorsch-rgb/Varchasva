"use client";
import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';
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

        <div className="mt-20 flex justify-center">
          <PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Explore All Collections
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ title, price, size, color, rating, reviews }: { title: string, price: string, size: string, color: string, rating: number, reviews: number }) {
  const [qty, setQty] = useState(1);
  
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 flex flex-col">
      <div className="relative aspect-[4/5] bg-[#fdfaf6] mb-8 flex justify-center items-end pb-8 overflow-hidden rounded-2xl group-hover:bg-white transition-colors duration-500">
        {/* Placeholder bottle */}
        <div className="relative w-28 h-56 rounded-t-3xl rounded-b-xl shadow-2xl shadow-black/10 z-10 group-hover:scale-105 transition-transform duration-700 ease-out">
           {/* Cap */}
           <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-10 h-7 bg-[#111810] rounded-t-md"></div>
           {/* Bottle Body */}
           <div className={`w-full h-full rounded-t-3xl rounded-b-xl ${color} opacity-80 mix-blend-multiply border-2 border-white/50`}></div>
           {/* Label */}
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-28 bg-[#fdfaf6] shadow-md rounded-md p-3 flex flex-col justify-center items-center">
             <div className="text-[8px] font-bold text-[#1a4a38] uppercase tracking-widest text-center leading-tight mb-2">{title.split(' ')[0]}<br/>{title.split(' ')[1]}</div>
             <div className="text-[7px] font-serif italic text-gray-600">Cold Pressed</div>
             <div className="text-[6px] text-gray-500 mt-2 tracking-widest uppercase">{size}</div>
           </div>
           {/* Glare */}
           <div className="absolute top-2 left-2 w-4 h-40 bg-white/40 blur-md rounded-full transform -rotate-12"></div>
        </div>
        
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase text-[#e2a325] shadow-sm rounded-full">
          Pure
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl lg:text-2xl font-serif text-[#111810] leading-tight pr-4 group-hover:text-[#1a4a38] transition-colors">{title}</h3>
        <div className="text-xl font-serif text-[#111810]">{price}</div>
      </div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="flex text-[#e2a325] gap-0.5">
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
        </div>
        <div className="text-sm text-gray-400 font-light">({reviews} reviews)</div>
      </div>
      
      <div className="text-sm text-gray-500 mb-8 font-light flex items-center gap-2">
        <span>{size}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
        <span>Unrefined</span>
      </div>
      
      <div className="flex gap-4 mt-auto">
        <div className="flex items-center justify-between border border-gray-200 rounded-full px-3 py-2 w-28 bg-[#fdfaf6]">
          <button className="p-1 text-gray-400 hover:text-[#111810] transition-colors" onClick={() => setQty(Math.max(1, qty-1))}><Minus size={16} /></button>
          <span className="text-sm font-bold w-6 text-center text-[#111810]">{qty}</span>
          <button className="p-1 text-gray-400 hover:text-[#111810] transition-colors" onClick={() => setQty(qty+1)}><Plus size={16} /></button>
        </div>
        <button className="flex-1 bg-[#111810] hover:bg-[#1a4a38] text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5">
          <ShoppingCart size={14} /> Add To Cart
        </button>
      </div>
    </div>
  );
}
