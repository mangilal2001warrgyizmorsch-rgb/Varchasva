"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Leaf, Heart, Users, Globe, Award, Sparkles } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { useEnquiry } from "../../context/EnquiryContext";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem, heroStagger, heroReveal, viewportOnce } from "../../utils/animations";

export default function AboutPage() {
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
            <span className="text-[#1a4a38] font-medium">Our Story</span>
          </motion.div>
          <motion.div variants={heroReveal} className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">About Us</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </motion.div>
          <motion.h1 variants={heroReveal} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-4 sm:mb-6">Our Story</motion.h1>
          <motion.p variants={heroReveal} className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Rooted in tradition, driven by purity — Dharohar revives the ancient art of cold-pressing to bring you oils the way nature intended.
          </motion.p>
        </motion.div>
      </section>

      {/* ORIGIN STORY */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Heritage</h4>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#111810] mb-6 sm:mb-8 leading-tight">
              A Legacy of <span className="text-[#e2a325] italic font-light">Pure Goodness</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-600 font-light leading-relaxed text-sm sm:text-base">
              <p>Dharohar was born from a simple belief — that the oils our grandmothers trusted should not be lost to industrial processing. In the villages of Rajasthan, families have been pressing mustard, sesame, and groundnut oils using wooden ghanis for centuries.</p>
              <p>We started Dharohar to bridge this heritage with modern wellness. Every bottle we produce follows the same time-honoured methods — hand-selected seeds, slow wooden pressing below 40°C, and zero chemical processing. The result is oil that tastes, smells, and nourishes exactly as nature intended.</p>
              <p>Today, we work directly with over 200 farming families across Rajasthan, Gujarat, and Kerala, ensuring fair prices for their harvest and the highest quality for your kitchen.</p>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
          >
            <div className="aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 relative">
              <Image 
                src="/about_heritage_farmer.webp" 
                alt="Dharohar Heritage" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <motion.div 
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100"
              variants={scaleIn}
            >
              <div className="text-2xl sm:text-4xl font-serif text-[#e2a325] font-bold">200+</div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-light uppercase tracking-widest mt-0.5 sm:mt-1">Farming Families</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#fdfaf6] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">What Drives Us</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#111810]">Mission & Vision</h2>
          </motion.div>
          <motion.div 
            className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mb-10 sm:mb-16 border border-gray-100 shadow-xl shadow-black/5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <Image 
              src="/about_mission_vision.webp" 
              alt="Dharohar Mission and Vision" 
              fill
              sizes="100vw"
              className="object-cover" 
            />
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={staggerItem} className="bg-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">
                <Heart size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#111810] mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">To make pure, cold-pressed oils accessible to every Indian household — reviving traditional extraction methods while empowering rural farming communities with sustainable livelihoods.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">
                <Globe size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#111810] mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">To become India&apos;s most trusted name in traditional cold-pressed oils — a brand synonymous with purity, heritage, and honest craftsmanship. We envision a future where every kitchen returns to nature.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Pillars</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#111810]">What We Stand For</h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { icon: <Leaf size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />, title: "Purity", desc: "Zero additives, zero chemicals. Every drop is 100% natural." },
              { icon: <Users size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />, title: "Community", desc: "Direct partnerships with 200+ farming families across India." },
              { icon: <Award size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />, title: "Quality", desc: "Lab-tested and certified. We never compromise on standards." },
              { icon: <Sparkles size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />, title: "Tradition", desc: "Centuries-old wooden ghani pressing preserved for modern wellness." },
            ].map((v) => (
              <motion.div key={v.title} variants={staggerItem} className="text-center group p-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{v.icon}</div>
                <h4 className="text-base sm:text-lg font-serif text-[#111810] mb-1 sm:mb-2 group-hover:text-[#1a4a38] transition-colors">{v.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#111810] mb-4 sm:mb-6">Want to Know More?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto text-xs sm:text-base">We&apos;d love to tell you more about our story, our oils, and how we work with farmers. Reach out to us anytime.</p>
          <PrimaryButton onClick={() => openEnquiry()} className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 text-center justify-center">
            Get In Touch
          </PrimaryButton>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
