import React from 'react';
import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';
import { Instagram, Facebook, Twitter, Youtube } from '../ui/Icons';

export default function Footer() {
  return (
    <>
      {/* NEWSLETTER / PRE-FOOTER */}
      <section className="bg-[#f0ede6] py-24 px-6 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#e2a325]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1a4a38]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Leaf className="w-8 h-8 text-[#1a4a38] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-serif text-[#111810] mb-4">Join Our Heritage</h2>
          <p className="text-gray-600 mb-10 max-w-lg mx-auto text-sm leading-relaxed font-light">
            Subscribe to receive wellness tips, stories from our farms, and updates on our latest oils directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-white border border-gray-300 rounded-full px-6 py-4 text-xs text-[#111810] uppercase tracking-widest focus:outline-none focus:border-[#1a4a38] transition shadow-sm"
            />
            <PrimaryButton className="px-8 py-3 text-xs border-none rounded-full shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">Subscribe</PrimaryButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#fdfaf6] pt-24 pb-10 px-6 md:px-20 text-[#111810]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col items-start mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#1a4a38] mb-2"><path d="M12 2L8 10H16L12 2Z" fill="currentColor"/><path d="M4 14C4 14 6 12 12 12C18 12 20 14 20 14C20 14 18 18 12 20C6 18 4 14 4 14Z" fill="currentColor" opacity="0.8"/></svg>
              <div className="text-2xl font-serif font-bold tracking-widest text-[#111810]">DHAROHAR</div>
              <div className="text-[9px] tracking-[0.3em] text-[#1a4a38] uppercase">Natural Oils</div>
            </Link>
            <p className="text-xs text-gray-500 leading-loose max-w-xs mb-8 font-light">
              Reviving ancient wellness through 100% pure, cold-pressed oils. Honestly crafted from seed to bottle.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Instagram size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Facebook size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Twitter size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Youtube size={16} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-8 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]"></div> Our Oils</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><Link href="/products" className="hover:text-[#1a4a38] transition-colors">All Products</Link></li>
              <li><Link href="/products" className="hover:text-[#1a4a38] transition-colors">Cold-Pressed Oils</Link></li>
              <li><Link href="/products" className="hover:text-[#1a4a38] transition-colors">Essential Oils</Link></li>
              <li><Link href="/benefits" className="hover:text-[#1a4a38] transition-colors">Oil Benefits</Link></li>
              <li><Link href="/contact" className="hover:text-[#1a4a38] transition-colors">Enquire Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-8 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]"></div> About Us</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><Link href="/about" className="hover:text-[#1a4a38] transition-colors">Our Story</Link></li>
              <li><Link href="/process" className="hover:text-[#1a4a38] transition-colors">The Process</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#1a4a38] transition-colors">Sustainability</Link></li>
              <li><Link href="/journal" className="hover:text-[#1a4a38] transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-[#1a4a38] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-8 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]"></div> Support</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><Link href="/faq" className="hover:text-[#1a4a38] transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-[#1a4a38] transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1a4a38] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#1a4a38] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            &copy; 2026 Dharohar Natural Oils. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400 font-light">
            <Link href="/privacy" className="hover:text-[#1a4a38] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1a4a38] transition-colors">Terms</Link>
            <Link href="/shipping" className="hover:text-[#1a4a38] transition-colors">Shipping</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
