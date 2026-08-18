import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';
import { Instagram, Facebook, Twitter, Youtube } from '../ui/Icons';

export default function Footer() {
  return (
    <>
      {/* NEWSLETTER / PRE-FOOTER */}
      <section className="bg-[#111810] py-20 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a4a38]/20 via-[#111810] to-[#111810] z-0"></div>
        
        {/* Decorative elements to mimic the floral designs in the corners */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#e2a325]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#e2a325]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Leaf className="w-8 h-8 text-[#e2a325] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Join Our Heritage</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            Subscribe to receive exclusive offers, wellness tips, and stories from our farms directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-transparent border border-white/20 rounded px-6 py-4 text-xs text-white uppercase tracking-widest focus:outline-none focus:border-[#e2a325] transition"
            />
            <PrimaryButton className="px-8 py-3 text-xs border-none">Subscribe</PrimaryButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111810] pt-20 pb-10 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#e2a325] mb-2"><path d="M12 2L8 10H16L12 2Z" fill="currentColor"/><path d="M4 14C4 14 6 12 12 12C18 12 20 14 20 14C20 14 18 18 12 20C6 18 4 14 4 14Z" fill="currentColor" opacity="0.8"/></svg>
              <div className="text-2xl font-serif font-bold tracking-widest">DHAROHAR</div>
              <div className="text-[9px] tracking-[0.3em] text-white/50 uppercase">Natural Oils</div>
            </div>
            <p className="text-xs text-gray-500 leading-loose max-w-xs mb-8">
              Reviving ancient wellness through 100% pure, cold-pressed oils. Honestly crafted from seed to bottle.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"><Twitter size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"><Youtube size={14} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e2a325] mb-6">Shop</h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
              <li><a href="#" className="hover:text-white transition">Cold-Pressed Oils</a></li>
              <li><a href="#" className="hover:text-white transition">Essential Oils</a></li>
              <li><a href="#" className="hover:text-white transition">Wellness Bundles</a></li>
              <li><a href="#" className="hover:text-white transition">Gift Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e2a325] mb-6">About Us</h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition">The Process</a></li>
              <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition">Journal</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e2a325] mb-6">Support</h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            &copy; 2026 Dharohar Natural Oils. All Rights Reserved.
          </p>
          <div className="flex gap-2 opacity-50 grayscale">
            {/* Simple payment icons placeholders */}
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">MC</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">AMEX</div>
            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">PAYPAL</div>
          </div>
        </div>
      </footer>
    </>
  );
}
