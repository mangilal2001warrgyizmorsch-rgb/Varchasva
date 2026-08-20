"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, Truck, Clock, Package, MessageCircle } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { useEnquiry } from "../../context/EnquiryContext";

export default function ShippingPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] bg-[#1a4a38]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a4a38] font-medium">Shipping & Returns</span>
          </div>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Delivery Info</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-4 sm:mb-6">Shipping & Returns</h1>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">Everything you need to know about how we deliver and our hassle-free return policy.</p>
        </div>
      </section>

      {/* SHIPPING INFO */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {[
              { icon: <Truck size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Pan-India Delivery", desc: "We deliver to all major cities and most pin codes across India via trusted courier partners." },
              { icon: <Clock size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "3–7 Business Days", desc: "Standard delivery takes 3–7 business days. Metro cities typically receive orders in 3–4 days." },
              { icon: <Package size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Secure Packaging", desc: "Every bottle is bubble-wrapped and packed in corrugated boxes to ensure zero damage in transit." },
            ].map((s, idx) => (
              <div key={s.title} className={`bg-[#fdfaf6] p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 text-center group hover:border-[#1a4a38]/20 transition-all duration-500 ${idx === 2 ? 'sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto w-full' : ''}`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 bg-white rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{s.icon}</div>
                <h4 className="text-base sm:text-lg font-serif text-[#111810] mb-2">{s.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* DETAILED SECTIONS */}
          <div className="space-y-10 sm:space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-[1px] bg-[#e2a325]" />
                <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Shipping Policy</h4>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#111810] mb-4 sm:mb-6">How We Ship</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 font-light leading-relaxed text-xs sm:text-base">
                <p>All orders are processed within 1–2 business days of confirmation. You will receive a tracking number via email and WhatsApp once your order is dispatched.</p>
                <p>We use premium courier partners including DTDC, Delhivery, and BlueDart to ensure safe and timely delivery across India. Delivery charges may vary based on location and order size — exact charges will be shared when you enquire.</p>
                <p>For bulk orders (5L+ or multiple bottles), we arrange dedicated logistics for safe delivery. Please contact us for bulk shipping arrangements.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-[1px] bg-[#e2a325]" />
                <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Return Policy</h4>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#111810] mb-4 sm:mb-6">Easy Returns</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 font-light leading-relaxed text-xs sm:text-base">
                <p>We want you to be 100% satisfied with your purchase. If you receive a damaged or defective product, contact us within 7 days of delivery with photographs.</p>
                <p><strong className="font-medium text-[#111810]">Eligible for return:</strong> Damaged bottles, leaking seals, wrong product received.</p>
                <p><strong className="font-medium text-[#111810]">Not eligible:</strong> Opened/used products, change of mind after delivery, orders older than 7 days.</p>
                <p>Approved returns will be picked up from your address at no cost. Refunds are processed within 5–7 business days to your original payment method.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fdfaf6] py-16 sm:py-24 px-4 sm:px-8 lg:px-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-4 sm:mb-6">Need Help With Shipping?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto text-xs sm:text-base">Contact our support team for any shipping enquiries, bulk delivery arrangements, or return requests.</p>
          <PrimaryButton onClick={() => openEnquiry()} className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 text-center justify-center">
            <MessageCircle size={14} className="mr-2" /> Contact Support
          </PrimaryButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
