"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, MessageCircle } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { useEnquiry } from "../../context/EnquiryContext";
import { fadeInUp, staggerContainer, staggerItem, heroStagger, heroReveal, viewportOnce } from "../../utils/animations";

const FAQS = [
  { q: "What is cold-pressed oil?", a: "Cold-pressed oil is extracted from seeds using a mechanical press (wooden ghani or expeller) at temperatures below 40°C. Unlike refined oils, no chemicals, heat, or solvents are used. This preserves the oil's natural nutrients, flavour, colour, and aroma." },
  { q: "How is cold-pressed different from refined oil?", a: "Refined oils undergo chemical extraction using hexane, followed by bleaching, deodorizing, and high-heat processing — which strips away most nutrients and natural compounds. Cold-pressed oils retain 100% of their vitamins, antioxidants, and essential fatty acids." },
  { q: "Are your oils organic?", a: "While not all our oils carry an official organic certification, we work exclusively with farming families who practice chemical-free, sustainable agriculture. We are currently in the process of obtaining organic certification for select products." },
  { q: "What is the shelf life of your oils?", a: "Our cold-pressed oils have a natural shelf life of 6–8 months from the pressing date. We recommend storing them in a cool, dark place away from direct sunlight. Once opened, refrigeration can extend freshness." },
  { q: "Do you offer bulk / wholesale orders?", a: "Yes! We offer bulk quantities for restaurants, retailers, and wholesale buyers. Please contact us through our enquiry form or WhatsApp us directly for custom pricing and quantities." },
  { q: "How can I place an order?", a: "You can enquire about any product directly from our website using the 'Enquire Now' button, or contact us via phone, email, or WhatsApp. We'll respond within 24 hours with availability and delivery details." },
  { q: "Do you deliver across India?", a: "Yes, we deliver to all major cities and most pin codes across India. Delivery typically takes 3–7 business days depending on your location. We also offer express delivery for select cities." },
  { q: "What if I receive a damaged product?", a: "If your order arrives damaged, please contact us within 48 hours with photos. We'll arrange a free replacement or full refund — no questions asked." },
  { q: "Can I visit your pressing facility?", a: "Absolutely! We welcome visitors to our pressing unit in Jodhpur, Rajasthan. Please contact us in advance to schedule a visit. We love sharing our process with curious minds." },
  { q: "Are your bottles recyclable?", a: "Yes. All our bottles are made from 100% recyclable glass. Labels are printed on FSC-certified paper with soy-based inks. We're committed to minimizing our environmental footprint." },
];

function FAQItem({ q, a }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div 
      className="border-b border-gray-100 last:border-b-0"
      variants={staggerItem}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-start py-5 sm:py-6 text-left group cursor-pointer gap-4">
        <h3 className="text-base sm:text-lg font-serif text-[#111810] group-hover:text-[#1a4a38] transition-colors leading-snug">{q}</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-[#e2a325] mt-0.5 sm:mt-1" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-5 sm:pb-6 text-gray-600 font-light leading-relaxed text-xs sm:text-sm pr-4 sm:pr-8">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] bg-[#1a4a38]/5 rounded-full blur-3xl" />
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={heroReveal} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a4a38] font-medium">FAQ</span>
          </motion.div>
          <motion.div variants={heroReveal} className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Help Center</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </motion.div>
          <motion.h1 variants={heroReveal} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-4 sm:mb-6">Frequently Asked Questions</motion.h1>
          <motion.p variants={heroReveal} className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">Everything you need to know about our cold-pressed oils, ordering, and delivery.</motion.p>
        </motion.div>
      </section>

      {/* FAQ LIST */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 p-6 sm:p-8 md:p-12 shadow-xl shadow-black/5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FAQS.map((faq, i) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />))}
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section 
        className="bg-[#fdfaf6] py-16 sm:py-24 px-4 sm:px-8 lg:px-24 border-t border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-4 sm:mb-6">Still Have Questions?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto text-xs sm:text-base">Can&apos;t find the answer you&apos;re looking for? Reach out and we&apos;ll get back to you within 24 hours.</p>
          <PrimaryButton onClick={() => openEnquiry()} className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 text-center justify-center">
            <MessageCircle size={14} className="mr-2" /> Contact Us
          </PrimaryButton>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
