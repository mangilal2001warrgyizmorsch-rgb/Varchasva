"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Droplets, Sun, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { IMAGES } from "../../../constants/images";

const HOME_STEPS = [
  {
    num: "01",
    tag: "Ethical Harvest",
    title: "Handpicked Seeds",
    subtitle: "Rajasthan & Gujarat",
    desc: "Single-origin, non-GMO seeds hand-sorted at harvest to guarantee 100% purity and optimal oil content.",
    highlight: "100% Certified Non-GMO",
    metric: "0% Adulteration",
    icon: Sparkles,
    image: IMAGES.process1,
  },
  {
    num: "02",
    tag: "Solar Preparation",
    title: "Solar Sun Drying",
    subtitle: "3–5 Days Sunlight Cure",
    desc: "Naturally sun-cured in open courtyards to reduce moisture without destroying delicate volatile terpenes.",
    highlight: "Zero Thermal Damage",
    metric: "< 7% Moisture",
    icon: Sun,
    image: "/process_sun_drying.webp",
  },
  {
    num: "03",
    tag: "Cold Extraction",
    title: "Wooden Ghani Press",
    subtitle: "Slow Pestle Below 40°C",
    desc: "Extracted in authentic slow-turning Vaghai wood pestles to retain every live enzyme, aroma, and antioxidant.",
    highlight: "True Kachi Ghani",
    metric: "< 40°C Pure Cold",
    icon: Droplets,
    image: IMAGES.process2,
  },
  {
    num: "04",
    tag: "Freshness Sealed",
    title: "Amber Glass Bottling",
    subtitle: "UV Protected Storage",
    desc: "Unrefined, naturally settled oil sealed in eco-friendly dark amber glass bottles to prevent photo-oxidation.",
    highlight: "Batch Traceable QR",
    metric: "100% Recyclable",
    icon: Award,
    image: IMAGES.process3,
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.8,
    restDelta: 0.001,
  });

  // Transform scroll progress to horizontal translation on desktop
  // 4 cards: translate from 0% to -58%
  const xTranslation = useTransform(smoothProgress, [0, 1], ["0%", "-58%"]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const index = Math.min(
        HOME_STEPS.length - 1,
        Math.max(0, Math.floor(latest * HOME_STEPS.length))
      );
      setActiveStepIndex(index);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const scrollToStepProgress = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollableDistance = containerHeight - windowHeight;

    const targetOffset = containerTop + (index / (HOME_STEPS.length - 1)) * scrollableDistance;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#fdfaf6] text-[#111810] selection:bg-[#e2a325]/20 selection:text-[#1a4a38]"
      style={{ height: "320vh" }}
    >
      {/* Desktop Sticky Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center gap-4 lg:gap-6 py-4 sm:py-6 bg-[#fdfaf6] z-10">
        
        {/* Subtle Ambient Background Orbs */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#e2a325]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1a4a38]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header & Navigation Bar */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 pb-3 border-b border-[#e2a325]/15">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-6 h-[1px] bg-[#e2a325]" />
                <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">The Cold-Press Journey</h4>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] leading-tight">
                From Sacred Seed <span className="italic font-normal text-[#1a4a38]">to Pure Nectar</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {/* Step Navigation Dots */}
              <div className="hidden sm:flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#e2a325]/20 shadow-xs">
                {HOME_STEPS.map((s, idx) => (
                  <button
                    key={s.num}
                    onClick={() => scrollToStepProgress(idx)}
                    className={`flex items-center justify-center transition-all ${
                      activeStepIndex === idx 
                        ? "w-7 h-5.5 bg-[#1a4a38] text-white rounded-full font-serif text-[11px] font-bold shadow-xs" 
                        : "w-5.5 h-5.5 text-gray-400 hover:text-[#1a4a38] rounded-full text-[11px] font-serif"
                    }`}
                  >
                    {s.num}
                  </button>
                ))}
              </div>

              <Link 
                href="/process"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1a4a38] hover:bg-[#123628] text-white text-[11px] font-semibold uppercase tracking-wider transition-all shadow-md shadow-[#1a4a38]/10 group"
              >
                <span>Full 6 Steps</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Track (Desktop) */}
        <div className="relative w-full overflow-hidden py-1">
          <motion.div 
            className="flex items-center gap-6 lg:gap-8 pl-6 sm:pl-12 lg:pl-20 w-max"
            style={{ x: xTranslation }}
          >
            {HOME_STEPS.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStepIndex === index;

              return (
                <div 
                  key={step.num}
                  className={`group relative w-[300px] sm:w-[330px] lg:w-[360px] rounded-[2rem] bg-white p-5 sm:p-6 border transition-all duration-500 shadow-lg shrink-0 flex flex-col justify-between ${
                    isActive 
                      ? "border-[#1a4a38]/30 shadow-[0_16px_36px_rgba(26,74,56,0.08)] ring-2 ring-[#e2a325]/20" 
                      : "border-gray-100/90 hover:border-[#e2a325]/30 hover:shadow-xl"
                  }`}
                >
                  {/* Giant Watermark Numeral */}
                  <div className="absolute top-3 right-5 font-serif text-6xl lg:text-7xl font-bold text-gray-100/80 -z-0 select-none group-hover:text-[#e2a325]/15 transition-colors">
                    {step.num}
                  </div>

                  {/* Top Step Meta */}
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#1a4a38] text-[#e2a325] flex items-center justify-center shadow-xs">
                        <IconComponent size={15} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e2a325] block">
                          {step.tag}
                        </span>
                        <span className="text-[11px] text-gray-400 font-light block">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 16:10 Landscape / Portrait Image with Luxury Glass Badge */}
                  <div className="relative z-10 w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-3 bg-gray-900 shadow-inner group/img">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover brightness-[0.95] contrast-[1.02] transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Bottom floating micro pill */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/70 flex items-center justify-between text-[11px] shadow-sm">
                      <span className="font-medium text-[#1a4a38] truncate">{step.highlight}</span>
                      <span className="text-[10px] font-bold text-[#a36f0a] bg-[#e2a325]/15 px-1.5 py-0.5 rounded shrink-0 ml-2">
                        {step.metric}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-serif text-[#111810] group-hover:text-[#1a4a38] transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed line-clamp-2">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="relative z-10 pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="text-gray-400 font-serif italic">Step {step.num} of 04</span>
                    <Link 
                      href="/process" 
                      className="text-[#1a4a38] font-semibold hover:text-[#e2a325] inline-flex items-center gap-1 transition-colors"
                    >
                      Full science <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Interactive Progress Bar & Scrubber */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 z-20">
          <div className="flex items-center justify-between gap-6 pt-2.5 border-t border-gray-100">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-serif font-bold text-[#1a4a38]">
                0{activeStepIndex + 1}
              </span>
              <div className="w-28 sm:w-44 h-1.5 bg-gray-200/80 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#e2a325] to-[#1a4a38] rounded-full origin-left"
                  style={{ scaleX: smoothProgress }}
                />
              </div>
              <span className="text-xs text-gray-400 font-serif">04</span>
            </div>

            <p className="text-xs text-gray-400 font-light hidden sm:block">
              Scroll down to travel through our extraction line
            </p>

            <Link 
              href="/process"
              className="text-xs font-semibold text-[#1a4a38] hover:text-[#e2a325] transition-colors underline underline-offset-4"
            >
              View Full Gallery & Laboratory Standards →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
