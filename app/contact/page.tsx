"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { PRODUCTS } from "../../constants/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#1a4a38]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a4a38] font-medium">Contact</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Get In Touch</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">Contact Us</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Have questions about our oils? Want to place a bulk order? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Enquiry Form</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#111810] mb-8">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-[#fdfaf6] rounded-[2rem] border border-gray-100 p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1a4a38] rounded-full flex items-center justify-center text-white"><MessageCircle size={32} /></div>
                <h3 className="text-2xl font-serif text-[#111810] mb-4">Thank You!</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8">Your enquiry has been received. We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", product: "", message: "" }); }} className="text-[#1a4a38] text-sm font-medium hover:underline">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-2 block">Full Name *</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-2 block">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-2 block">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 99999 99999" className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-2 block">Product Interest</label>
                    <select value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition font-light appearance-none">
                      <option value="">Select a product</option>
                      {PRODUCTS.map((p) => (<option key={p.slug} value={p.title}>{p.title}</option>))}
                      <option value="Bulk Order">Bulk / Wholesale Order</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-2 block">Message *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your requirements, quantities, or any questions..." className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-5 py-4 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light resize-none" />
                </div>
                <PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5 w-full md:w-auto">
                  <Send size={14} className="mr-2" /> Send Enquiry
                </PrimaryButton>
              </form>
            )}
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-2">
            <div className="bg-[#fdfaf6] rounded-[2rem] border border-gray-100 p-8 space-y-8 sticky top-28">
              <div>
                <h3 className="text-xl font-serif text-[#111810] mb-6">Contact Information</h3>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100"><Phone size={20} /></div>
                <div>
                  <div className="text-sm font-medium text-[#111810] mb-1">Phone</div>
                  <div className="text-sm text-gray-500 font-light">+91 99999 99999</div>
                  <div className="text-sm text-gray-500 font-light">+91 88888 88888</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100"><Mail size={20} /></div>
                <div>
                  <div className="text-sm font-medium text-[#111810] mb-1">Email</div>
                  <div className="text-sm text-gray-500 font-light">hello@dharohar.com</div>
                  <div className="text-sm text-gray-500 font-light">orders@dharohar.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100"><MapPin size={20} /></div>
                <div>
                  <div className="text-sm font-medium text-[#111810] mb-1">Address</div>
                  <div className="text-sm text-gray-500 font-light">Dharohar Natural Oils<br />Village Rd, Jodhpur District<br />Rajasthan, India 342001</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1a4a38] flex-shrink-0 border border-gray-100"><Clock size={20} /></div>
                <div>
                  <div className="text-sm font-medium text-[#111810] mb-1">Working Hours</div>
                  <div className="text-sm text-gray-500 font-light">Mon – Sat: 9:00 AM – 6:00 PM</div>
                  <div className="text-sm text-gray-500 font-light">Sunday: Closed</div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-[#1a4a38] hover:bg-[#111810] text-white rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 py-4">
                    <Phone size={16} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
