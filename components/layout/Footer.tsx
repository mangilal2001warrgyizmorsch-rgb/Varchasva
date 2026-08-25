"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import toast from "react-hot-toast";
import { PrimaryButton } from '../ui/Button';
import { Instagram, Facebook, Twitter, Youtube } from '../ui/Icons';
import { useEnquiry } from '../../context/EnquiryContext';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../utils/animations';

export default function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <>
      {/* NEWSLETTER / PRE-FOOTER */}
      <section className="bg-[#f0ede6] py-10 sm:py-14 md:py-16 px-4 sm:px-6 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#e2a325]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-[#1a4a38]/5 rounded-full blur-3xl"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a4a38] mx-auto mb-3 sm:mb-4 opacity-80" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-2 sm:mb-3">Join Our Heritage</h2>
          <p className="text-gray-600 mb-5 sm:mb-8 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed font-light">
            Subscribe to receive wellness tips, stories from our farms, and updates on our latest oils directly to your inbox.
          </p>
          <form 
            onSubmit={async (e) => { 
              e.preventDefault(); 
              const form = e.target as HTMLFormElement;
              const emailInput = form.elements[0] as HTMLInputElement;
              const button = form.elements[1] as HTMLButtonElement;
              
              button.disabled = true;
              button.textContent = "Subscribing...";
              
              try {
                const res = await fetch("/api/newsletter", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: emailInput.value }),
                });
                if (res.ok) {
                  toast.success("Thank you for subscribing to our newsletter!"); 
                  form.reset(); 
                } else {
                  toast.error("Something went wrong. Please try again.");
                }
              } catch (err) {
                toast.error("Something went wrong. Please try again.");
              } finally {
                button.disabled = false;
                button.textContent = "Subscribe";
              }
            }} 
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-2.5 sm:gap-3"
          >
            <input 
              required
              type="email" 
              placeholder="Your email address" 
              className="bg-white border border-gray-300 rounded-full px-5 py-3 sm:py-3.5 text-xs text-[#111810] placeholder-gray-400 focus:outline-none focus:border-[#1a4a38] flex-1 shadow-sm font-light disabled:opacity-50"
            />
            <button 
              type="submit" 
              className="bg-[#1a4a38] hover:bg-[#111810] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="bg-[#fdfaf6] pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 px-4 sm:px-8 md:px-12 lg:px-20 text-[#111810]">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={staggerItem} className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex flex-col items-start mb-4 sm:mb-6">
              <div className="relative h-24 sm:h-32 md:h-36 w-full max-w-xs mb-2">
                <Image 
                  src="/common/logo.webp" 
                  alt="Varchasva Natural Oils" 
                  fill
                  sizes="320px"
                  className="object-contain object-left origin-left" 
                />
              </div>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs mb-6 font-light">
              Reviving ancient wellness through 100% pure, cold-pressed oils. Honestly crafted from seed to bottle.
            </p>
            <div className="text-xs text-gray-500 font-light mb-6 sm:mb-8 space-y-2">
              <p><strong className="text-gray-700">Address:</strong><br />Varchasva<br />Celebration Mall Road, Oppsite Brand wala,<br/> Bhuwana, Udaipur<br />Rajasthan, India 313001</p>
              <p><strong className="text-gray-700">Customer Care:</strong><br />+91 89499 44620</p>
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-16 h-10 bg-white/50 rounded flex items-center justify-center p-1 border border-[#e2a325]/20">
                  <Image src="/fssai-logo.png" alt="FSSAI" fill className="object-contain" sizes="64px" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-700">Lic.No.</p>
                  <p className="text-[11px] font-medium text-gray-800">22226088002436</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 sm:gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Instagram size={15} /></a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Facebook size={15} /></a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Twitter size={15} /></a>
              <a href="#" aria-label="Youtube" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#111810] hover:border-[#1a4a38] hover:text-[#1a4a38] hover:-translate-y-1 transition-all duration-300 shadow-sm"><Youtube size={15} /></a>
            </div>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-5 sm:mb-8 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]"></div> Our Oils</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 font-light">
              <li><Link href="/products" className="hover:text-[#1a4a38] transition-colors">All Products</Link></li>
              <li><Link href="/products" className="hover:text-[#1a4a38] transition-colors">Cold-Pressed Oils</Link></li>
              <li><Link href="/products" className="hover:text-[#1a4a38] transition-colors">Essential Oils</Link></li>
              <li><Link href="/benefits" className="hover:text-[#1a4a38] transition-colors">Oil Benefits</Link></li>
              <li><button onClick={() => openEnquiry()} className="hover:text-[#1a4a38] transition-colors text-left cursor-pointer">Enquire Now</button></li>
            </ul>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-5 sm:mb-8 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]"></div> About Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 font-light">
              <li><Link href="/about" className="hover:text-[#1a4a38] transition-colors">Our Story</Link></li>
              <li><Link href="/process" className="hover:text-[#1a4a38] transition-colors">The Process</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#1a4a38] transition-colors">Sustainability</Link></li>
              <li><Link href="/journal" className="hover:text-[#1a4a38] transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-[#1a4a38] transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-5 sm:mb-8 flex items-center gap-2"><div className="w-4 h-[1px] bg-[#e2a325]"></div> Support</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 font-light">
              <li><Link href="/faq" className="hover:text-[#1a4a38] transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-[#1a4a38] transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1a4a38] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#1a4a38] transition-colors">Terms of Service</Link></li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            &copy; 2026 Varchasva Natural Oils. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-400 font-light">
            <Link href="/privacy" className="hover:text-[#1a4a38] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1a4a38] transition-colors">Terms</Link>
            <Link href="/shipping" className="hover:text-[#1a4a38] transition-colors">Shipping</Link>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
