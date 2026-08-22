"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Star, BadgeCheck, MessageSquareText } from "lucide-react";
import { getProductReviews, getAverageRating } from "@/constants/testimonials";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ProductReviews({ productName }: { productName: string }) {
  const reviews = getProductReviews(productName);
  const averageRating = getAverageRating(reviews);
  
  if (reviews.length === 0) return null;

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row gap-12 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Left Column: Aggregate Rating */}
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/3 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">
                Customer Reviews
              </h4>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111810] mb-6">
              Real Experiences
            </h2>
            
            <div className="bg-[#fdfaf6] p-8 rounded-3xl border border-gray-100 w-full mb-8">
              <div className="flex items-end gap-4 mb-4">
                <span className="text-5xl sm:text-6xl font-serif text-[#111810] leading-none">
                  {averageRating}
                </span>
                <div className="flex flex-col pb-1">
                  <div className="flex text-[#e2a325] gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(Number(averageRating)) ? "currentColor" : "none"} 
                        stroke={i < Math.floor(Number(averageRating)) ? "currentColor" : "#d1d5db"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">Based on {reviews.length} reviews</span>
                </div>
              </div>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map(stars => {
                  const count = reviews.filter(r => Math.floor(r.rating) === stars).length;
                  const percentage = (count / reviews.length) * 100;
                  return (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-8">{stars} Stars</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#e2a325] rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-6 text-right">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Individual Reviews */}
          <motion.div 
            variants={fadeInUp}
            className="md:w-2/3 space-y-6"
          >
            {reviews.map((review, i) => (
              <div 
                key={review.id} 
                className={`py-8 ${i !== reviews.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fdfaf6] rounded-full flex items-center justify-center text-[#1a4a38] font-serif text-lg font-medium border border-gray-100">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111810] text-sm sm:text-base">
                        {review.name}
                      </h4>
                      {review.verified && (
                        <div className="flex items-center gap-1 mt-0.5 text-[10px] sm:text-xs font-medium text-emerald-600">
                          <BadgeCheck size={12} />
                          Verified Purchase
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <div className="flex text-[#e2a325] gap-0.5 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star 
                      key={idx} 
                      size={12} 
                      fill={idx < review.rating ? "currentColor" : "none"}
                      stroke={idx < review.rating ? "currentColor" : "#d1d5db"} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                  {review.content}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
