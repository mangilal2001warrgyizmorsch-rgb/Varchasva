"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { testimonials } from "@/constants/testimonials";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

export default function TestimonialsSection() {
  // Take top 3 for the home page
  const homeTestimonials = testimonials.slice(0, 3);

  return (
    <section className="bg-[#fdfaf6] py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden relative border-t border-[#e2a325]/10">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a4a38]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e2a325]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpItem} className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Social Proof</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]"></div>
          </motion.div>
          <motion.h2 
            variants={fadeUpItem}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#111810] mb-6 leading-tight"
          >
            Loved by Health Conscious Families
          </motion.h2>
          <motion.p 
            variants={fadeUpItem}
            className="max-w-2xl mx-auto text-gray-600 font-light text-base sm:text-lg"
          >
            Don&apos;t just take our word for it. Hear from people who have experienced the genuine purity and taste of our cold-pressed oils.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {homeTestimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={fadeUpItem}
              className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm shadow-[#1a4a38]/5 border border-[#1a4a38]/5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500 ease-out"
            >
              <div className="flex items-center gap-1 mb-6 text-[#e2a325]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="flex-1 text-gray-600 font-serif italic text-lg leading-relaxed mb-8">
                &quot;{testimonial.content}&quot;
              </blockquote>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-semibold text-[#111810] text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.role}</p>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                    <BadgeCheck size={14} />
                    Verified
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
