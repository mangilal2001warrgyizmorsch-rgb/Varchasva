"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { ARTICLES } from "../../constants/articles";
import { staggerContainer, staggerItem, heroStagger, heroReveal, viewportOnce } from "../../utils/animations";

export default function JournalPage() {
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
            <span className="text-[#1a4a38] font-medium">Journal</span>
          </motion.div>
          <motion.div variants={heroReveal} className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Stories & Insights</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </motion.div>
          <motion.h1 variants={heroReveal} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-4 sm:mb-6">The Journal</motion.h1>
          <motion.p variants={heroReveal} className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">Wellness tips, farm stories, and the science behind cold-pressed oils — from our family to yours.</motion.p>
        </motion.div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ARTICLES.map((article) => (
            <motion.article 
              key={article.slug} 
              variants={staggerItem}
              className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 overflow-hidden group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col hover:-translate-y-1"
            >
              <Link href={`/journal/${article.slug}`}>
                <div className="aspect-[16/10] sm:aspect-[3/2] overflow-hidden bg-[#fdfaf6] relative">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
              </Link>
              <div className="p-5 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#e2a325] bg-[#e2a325]/10 px-2.5 sm:px-3 py-1 rounded-full">{article.category}</span>
                </div>
                <Link href={`/journal/${article.slug}`}>
                  <h3 className="text-lg sm:text-xl font-serif text-[#111810] mb-2 sm:mb-3 group-hover:text-[#1a4a38] transition-colors leading-tight">{article.title}</h3>
                </Link>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-4 sm:mb-6 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                  <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-gray-400 font-light">
                    <span className="flex items-center gap-1"><Calendar size={11} className="sm:w-3 sm:h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} className="sm:w-3 sm:h-3" /> {article.readTime}</span>
                  </div>
                  <Link href={`/journal/${article.slug}`} className="text-[#1a4a38] hover:text-[#e2a325] transition-colors p-1" aria-label={`Read ${article.title}`}>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
