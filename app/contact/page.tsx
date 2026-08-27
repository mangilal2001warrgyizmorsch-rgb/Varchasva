"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import WhatsappIcon from "../../components/ui/WhatsappIcon";
import { PRODUCTS } from "../../constants/products";
import { fadeInUp, fadeInLeft, fadeInRight, heroStagger, heroReveal, viewportOnce } from "../../utils/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    product: "", 
    becomeDealer: false,
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* HERO */}
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
            <span className="text-[#1a4a38] font-medium">Contact</span>
          </motion.div>
          <motion.div variants={heroReveal} className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Get In Touch</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </motion.div>
          <motion.h1 variants={heroReveal} className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111810] leading-tight mb-3 sm:mb-4">Contact Us</motion.h1>
          <motion.p variants={heroReveal} className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            Have questions about our oils? Want to place a bulk order? We&apos;d love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* LANDSCAPE BANNER */}
      <section className="bg-white pt-10 sm:pt-14 pb-6 sm:pb-8 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <Image 
              src="/contact/contact_landscape.webp" 
              alt="Varchasva Rural Farm Landscape" 
              fill
              sizes="100vw"
              className="object-cover" 
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-16">
          {/* FORM */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Enquiry Form</h4>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-6 sm:mb-8">Send Us a Message</h2>

            {submitted ? (
              <motion.div 
                className="bg-[#fdfaf6] rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 p-8 sm:p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-[#1a4a38] rounded-full flex items-center justify-center text-white"><MessageCircle size={28} className="sm:w-8 sm:h-8" /></div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#111810] mb-2 sm:mb-4">Thank You!</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">Your enquiry has been received. We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", product: "", becomeDealer: false, message: "" }); }} className="text-[#1a4a38] text-sm font-medium hover:underline cursor-pointer">Send another enquiry</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Full Name *</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light shadow-sm" />
                  </div>
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light shadow-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 89499 44620" className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light shadow-sm" />
                  </div>
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Product Interest</label>
                    <select value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition font-light appearance-none shadow-sm cursor-pointer">
                      <option value="">Select a product</option>
                      {PRODUCTS.map((p) => (<option key={p.slug} value={p.title}>{p.title}</option>))}
                      <option value="Bulk Order">Bulk / Wholesale Order</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Message *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your requirements, quantities, or any questions..." className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light resize-none shadow-sm" />
                </div>

                {/* Become a Dealer Checkbox */}
                <label className="flex items-center gap-3 p-3.5 sm:p-4 bg-[#fdfaf6] rounded-xl border border-gray-200 cursor-pointer hover:border-[#1a4a38]/40 transition-colors select-none">
                  <input
                    type="checkbox"
                    checked={formData.becomeDealer}
                    onChange={(e) => setFormData({ ...formData, becomeDealer: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-[#1a4a38] focus:ring-[#1a4a38] cursor-pointer accent-[#1a4a38]"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-medium text-[#111810]">
                      Become a Dealer / Distributorship
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-500 font-light">
                      Interested in wholesale distribution, stockist, or retail partnership
                    </span>
                  </div>
                </label>

                <PrimaryButton type="submit" className="px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 w-full sm:w-auto text-center justify-center">
                  <Send size={14} className="mr-2" /> Send Enquiry
                </PrimaryButton>
              </form>
            )}
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
          >
            <div className="bg-[#fdfaf6] rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 p-6 sm:p-8 space-y-6 sm:space-y-8 lg:sticky lg:top-24">
              <div>
                <h3 className="text-lg sm:text-xl font-serif text-[#111810] mb-4 sm:mb-6">Contact Information</h3>
              </div>
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100 shadow-sm"><Phone size={18} className="sm:w-5 sm:h-5" /></div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[#111810] mb-0.5 sm:mb-1">Phone</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light">+91 89499 44620</div>
                  {/* <div className="text-xs sm:text-sm text-gray-500 font-light">+91 88888 88888</div> */}
                </div>
              </div>
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100 shadow-sm"><Mail size={18} className="sm:w-5 sm:h-5" /></div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[#111810] mb-0.5 sm:mb-1">Email</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light">hello@varchasva.com</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light">orders@varchasva.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100 shadow-sm"><MapPin size={18} className="sm:w-5 sm:h-5" /></div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[#111810] mb-0.5 sm:mb-1">Address</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">Varchasva<br />Celebration Mall Road, Opposite Brand wala,<br/> Bhuwana, Udaipur<br />Rajasthan, India 313001</div>
                </div>
              </div>
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100 shadow-sm"><Clock size={18} className="sm:w-5 sm:h-5" /></div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[#111810] mb-0.5 sm:mb-1">Working Hours</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-light">Everyday: 10:00 AM – 9:00 PM</div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <a href="https://wa.me/918949944620" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full bg-[#1a4a38] hover:bg-[#111810] text-white rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 py-3.5 sm:py-4 cursor-pointer shadow-sm">
                    <WhatsappIcon size={15} color="#ffffff" /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
