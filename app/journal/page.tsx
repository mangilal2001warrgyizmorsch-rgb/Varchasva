import React from "react";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";

const ARTICLES = [
  { slug: "#", title: "5 Reasons to Switch to Cold-Pressed Mustard Oil Today", excerpt: "Refined oils undergo chemical processing that strips away nutrients. Here's why cold-pressed mustard oil is the smarter, healthier choice for Indian cooking.", date: "Aug 15, 2026", readTime: "5 min read", category: "Wellness", image: "/product_mustard.jpg" },
  { slug: "#", title: "The Ancient Art of Wooden Ghani Oil Pressing", excerpt: "For centuries, Indian families relied on the wooden ghani for their cooking oil. Discover how this traditional method preserves flavour and nutrition.", date: "Aug 10, 2026", readTime: "7 min read", category: "Heritage", image: "/about_hero.jpg" },
  { slug: "#", title: "Coconut Oil for Skin & Hair: A Complete Guide", excerpt: "Virgin coconut oil has been a beauty staple in India for millennia. Learn the science behind its moisturizing, anti-fungal, and healing properties.", date: "Aug 5, 2026", readTime: "6 min read", category: "Beauty", image: "/product_coconut.jpg" },
  { slug: "#", title: "Understanding Omega-3: Why Flaxseed Oil Matters", excerpt: "Flaxseed oil is the richest plant source of Omega-3 fatty acids. Discover how this superfood oil supports brain health, joints, and heart function.", date: "Jul 28, 2026", readTime: "4 min read", category: "Nutrition", image: "/product_flaxseed.jpg" },
  { slug: "#", title: "Farm Stories: Meet the Groundnut Farmers of Gujarat", excerpt: "Go behind the scenes to meet the farming families who grow the premium groundnuts behind our most popular oil. Fair trade, sustainable agriculture.", date: "Jul 20, 2026", readTime: "8 min read", category: "Farm Stories", image: "/product_groundnut.jpg" },
  { slug: "#", title: "Ayurvedic Oil Pulling: Ancient Detox for Modern Life", excerpt: "Oil pulling with sesame oil has been practiced in Ayurveda for 3,000 years. Science is now confirming its benefits for oral health and detoxification.", date: "Jul 15, 2026", readTime: "5 min read", category: "Ayurveda", image: "/product_sesame.jpg" },
];

export default function JournalPage() {
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
            <span className="text-[#1a4a38] font-medium">Journal</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Stories & Insights</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">The Journal</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">Wellness tips, farm stories, and the science behind cold-pressed oils — from our family to yours.</p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((article) => (
            <article key={article.title} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#e2a325] bg-[#e2a325]/10 px-3 py-1 rounded-full">{article.category}</span>
                </div>
                <h3 className="text-xl font-serif text-[#111810] mb-3 group-hover:text-[#1a4a38] transition-colors leading-tight">{article.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-light mt-auto">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
