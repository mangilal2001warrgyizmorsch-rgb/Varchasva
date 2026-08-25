"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../../../constants/products';
import { PrimaryButton } from '../../ui/Button';
import { useEnquiry } from '../../../context/EnquiryContext';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../../utils/animations';

export default function ProductsSection() {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Collection</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#111810] leading-tight">Pure Daily Essentials</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.slug}
              title={product.title}
              slug={product.slug}
              size="1L • 5L • 15L"
              image={product.image}
              badge={product.badge}
              rating={product.rating}
              reviews={product.reviews}
              gallery={product.gallery}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <Link href="/products" className="w-full sm:w-auto">
            <PrimaryButton className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center justify-center">
              Explore All 4 Oils
            </PrimaryButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ title, slug, size, image, badge, rating, reviews, gallery }: { title: string; slug: string; size: string; image: string; badge: string; rating: number; reviews: number; gallery: string[] }) {
  const { openEnquiry } = useEnquiry();
  const [isHovered, setIsHovered] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);

  React.useEffect(() => {
    if (!isHovered) {
      setActiveIdx(0);
      return;
    }
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % gallery.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered, gallery.length]);

  return (
    <motion.div 
      variants={staggerItem}
      className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 p-5 sm:p-6 flex flex-col group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${slug}`} className="block mb-5 sm:mb-6 relative">
        <div className="aspect-square rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden bg-[#fdfaf6] border border-gray-50 relative">
          <motion.div 
            className="flex w-full h-full"
            animate={{ x: `-${activeIdx * 100}%` }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            {gallery.map((img, i) => (
              <div key={i} className="relative w-full h-full flex-shrink-0">
                <Image 
                  src={img} 
                  alt={`${title} view ${i + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover mix-blend-multiply" 
                />
              </div>
            ))}
          </motion.div>
        </div>
        {badge && (
          <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#1a4a38] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg border border-white">{badge}</span>
        )}
      </Link>
      
      <Link href={`/products/${slug}`}>
        <h3 className="text-lg sm:text-xl font-serif text-[#111810] mb-2 group-hover:text-[#1a4a38] transition-colors">{title}</h3>
      </Link>
      
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex text-[#e2a325] gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill="currentColor" />
          ))}
        </div>
        <div className="text-xs sm:text-sm text-gray-400 font-light">({reviews} reviews)</div>
      </div>
      
      <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-light flex items-center gap-2">
        <span>{size}</span>
        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
        <span>Unrefined</span>
      </div>
      
      <button 
        onClick={() => openEnquiry(title)}
        className="mt-auto w-full bg-[#111810] hover:bg-[#1a4a38] text-white rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 py-3.5 sm:py-4 cursor-pointer"
      >
        <MessageCircle size={14} /> Enquire Now
      </button>
    </motion.div>
  );
}
