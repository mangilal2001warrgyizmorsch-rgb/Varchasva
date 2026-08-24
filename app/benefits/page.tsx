"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Brain, Flame, Droplets, Sun, Shield, Leaf, Sparkles, Activity } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { useEnquiry } from "../../context/EnquiryContext";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, heroStagger, heroReveal, viewportOnce } from "../../utils/animations";

const BENEFITS = [
  { icon: <Heart size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Heart Health", desc: "Cold-pressed oils are rich in monounsaturated and polyunsaturated fats that help lower bad cholesterol (LDL) and support cardiovascular health." },
  { icon: <Activity size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Cholesterol Control", desc: "Naturally helps in managing cholesterol levels by providing a rich source of good fats (HDL) while actively lowering bad cholesterol (LDL)." },
  { icon: <Brain size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Brain Function", desc: "Omega-3 and Omega-6 fatty acids found in mustard and sesame oil support cognitive function, memory, and overall brain vitality." },
  { icon: <Shield size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Immune Support", desc: "Coconut oil is rich in lauric acid — a powerful medium-chain fatty acid with natural antimicrobial and immune-boosting properties." },
  { icon: <Sun size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Skin & Hair", desc: "Coconut and sesame oils are nature's deep moisturisers. Rich in natural Vitamin E, they nourish skin, protect against dryness, and strengthen hair from root to tip." },
  { icon: <Flame size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Anti-Inflammatory", desc: "Sesame and mustard oils contain natural anti-inflammatory compounds that support joint health, reduce swelling, and ease muscle discomfort." },
  { icon: <Droplets size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Rich in Antioxidants", desc: "Cold-pressing preserves natural antioxidants like Vitamin E, sesamolin, and resveratrol — powerful compounds that fight free radicals and slow aging." },
  { icon: <Leaf size={26} strokeWidth={1.5} className="sm:w-7 sm:h-7" />, title: "Zero Chemicals", desc: "Unlike refined oils, our cold-pressed oils undergo zero chemical processing — no hexane extraction, no bleaching, no deodorizing. What you get is 100% pure." },
];

const COMPARISON = [
  { feature: "Extraction Method", cold: "Wooden ghani / Expeller below 40°C", refined: "Chemical solvent (hexane) + high heat" },
  { feature: "Nutrients Preserved", cold: "100% — Vitamins, Omega, Antioxidants", refined: "Most destroyed during processing" },
  { feature: "Chemical Additives", cold: "Zero chemicals added", refined: "Bleaching agents, deodorizers" },
  { feature: "Natural Flavour", cold: "Full, rich, characteristic aroma", refined: "Neutral — flavour stripped away" },
  { feature: "Colour", cold: "Natural golden / amber", refined: "Artificially clear / pale" },
  { feature: "Shelf Life", cold: "6–8 months (natural)", refined: "12+ months (preservatives)" },
  { feature: "Health Impact", cold: "Heart-healthy, anti-inflammatory", refined: "Trans fats, inflammation risk" },
  { feature: "Cholesterol Impact", cold: "Promotes healthy HDL, lowers bad LDL", refined: "Can elevate bad LDL cholesterol" },
];

export default function BenefitsPage() {
  const { openEnquiry } = useEnquiry();

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
            <span className="text-[#1a4a38] font-medium">Benefits</span>
          </motion.div>
          <motion.div variants={heroReveal} className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Why Cold-Pressed</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </motion.div>
          <motion.h1 variants={heroReveal} className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#111810] leading-tight mb-3 sm:mb-4">Health Benefits</motion.h1>
          <motion.p variants={heroReveal} className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
            Discover why cold-pressed oils are the healthier, more natural choice for your kitchen and your wellbeing.
          </motion.p>
        </motion.div>
      </section>

      {/* BENEFITS GRID */}
      <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {BENEFITS.map((b) => (
              <motion.div key={b.title} variants={staggerItem} className="bg-white p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{b.icon}</div>
                <h4 className="text-base sm:text-lg font-serif text-[#111810] mb-1.5 sm:mb-2 group-hover:text-[#1a4a38] transition-colors">{b.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section className="bg-white pb-10 sm:pb-14 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="w-full aspect-[4/3] md:aspect-[16/9] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <Image 
              src="/benefits/benefits_cooking.webp" 
              alt="Healthy Lifestyle Cooking" 
              fill
              sizes="100vw"
              className="object-cover object-[center_20%]" 
            />
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#fdfaf6] py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">The Difference</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810]">Cold-Pressed vs Refined</h2>
          </motion.div>
          
          {/* Responsive Comparison Table Container */}
          <motion.div 
            className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 overflow-hidden shadow-xl shadow-black/5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-3 bg-[#111810] text-white">
                  <div className="p-3.5 sm:p-5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Feature</div>
                  <div className="p-3.5 sm:p-5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#e2a325]">Cold-Pressed</div>
                  <div className="p-3.5 sm:p-5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-400">Refined</div>
                </div>
                {COMPARISON.map((row, i) => (
                  <motion.div 
                    key={row.feature} 
                    className={`grid grid-cols-3 ${i < COMPARISON.length - 1 ? "border-b border-gray-100" : ""}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="p-3.5 sm:p-5 text-xs sm:text-sm font-medium text-[#111810]">{row.feature}</div>
                    <div className="p-3.5 sm:p-5 text-xs sm:text-sm text-[#1a4a38] font-light">{row.cold}</div>
                    <div className="p-3.5 sm:p-5 text-xs sm:text-sm text-gray-400 font-light">{row.refined}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-3 sm:mb-5">Ready to Make the Switch?</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-5 sm:mb-8 text-xs sm:text-base">Join thousands of families who have returned to pure, cold-pressed oils. Experience true natural flavor and wellbeing — your body will thank you.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/products" className="w-full sm:w-auto"><PrimaryButton className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 text-center justify-center">Explore Our Oils</PrimaryButton></Link>
              <button onClick={() => openEnquiry()} className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-widest border-2 border-[#111810] text-[#111810] rounded-full hover:bg-[#111810] hover:text-white transition-all duration-300 cursor-pointer">
                Enquire Now
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
          >
            <Image 
              src="/benefits/benefits_wellness_composition.webp" 
              alt="Pure Wellness Composition" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover" 
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
