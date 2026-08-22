"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Sparkles, Droplets, Sun, Award, CheckCircle2 } from "lucide-react";

const HOME_STEPS = [
  {
    num: "01",
    tag: "Ethical Harvest",
    title: "Handpicked Seeds",
    subtitle: "Rajasthan & Gujarat",
    desc: "Single-origin, non-GMO seeds hand-sorted at harvest to guarantee 100% purity and prime oil content.",
    highlight: "100% Certified Non-GMO",
    metric: "0% Adulteration",
    icon: Sparkles,
    image: "/process/process1.webp",
  },
  {
    num: "02",
    tag: "Solar Preparation",
    title: "Solar Sun Drying",
    subtitle: "3–5 Days Sunlight Cure",
    desc: "Sun-cured in open courtyards to reduce moisture naturally without destroying delicate volatile terpenes.",
    highlight: "Zero Thermal Damage",
    metric: "< 7% Moisture",
    icon: Sun,
    image: "/process/process_sun_drying.webp",
  },
  {
    num: "03",
    tag: "Cold Extraction",
    title: "Cold Press Machine",
    subtitle: "Slow Pestle Below 40°C",
    desc: "Extracted in authentic slow-turning pestles to retain every live enzyme, rich nutty aroma, and natural antioxidant.",
    highlight: "True Kachi Ghani",
    metric: "< 40°C Pure Cold",
    icon: Droplets,
    image: "/home/home_process_machine.webp",
  },
  {
    num: "04",
    tag: "Freshness Sealed",
    title: "Amber Glass Bottling",
    subtitle: "UV Protected Storage",
    desc: "Sealed in eco-friendly dark amber glass bottles to preserve nutrients, prevent photo-oxidation, and lock freshness.",
    highlight: "Batch Traceable QR",
    metric: "100% Recyclable",
    icon: Award,
    image: "/process/promise_new_2.webp",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // Measure how far the track needs to slide horizontally
  const measure = useCallback(() => {
    if (scrollTrackRef.current) {
      const totalWidth = scrollTrackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollDistance(Math.max(0, totalWidth - viewportWidth + 80));
    }
  }, []);

  useEffect(() => {
    measure();
    const timer = setTimeout(measure, 400);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Spring for smooth horizontal gliding
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.5,
  });

  // Map vertical scroll → horizontal pixel shift
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollDistance]);

  // Track active step
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      HOME_STEPS.length - 1,
      Math.max(0, Math.floor(v * HOME_STEPS.length))
    );
    setActiveStep(idx);
  });

  const scrollToStep = (index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.offsetTop;
    const scrollable = el.offsetHeight - window.innerHeight;
    const target = top + (index / (HOME_STEPS.length - 1)) * scrollable;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#fdfaf6] h-auto lg:h-[220vh]"
    >
      {/* ═══════ DESKTOP: Sticky + Horizontal Scroll ═══════ */}
      <div className="sticky top-0 h-screen w-full hidden lg:flex flex-col justify-between py-6 xl:py-8 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#e2a325]/7 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1a4a38]/6 rounded-full blur-3xl pointer-events-none" />

        {/* ── Top Header ── */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-8 xl:px-16">
          <div className="flex justify-between items-end border-b border-[#e2a325]/15 pb-3">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-6 h-[1px] bg-[#e2a325]" />
                <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">
                  The Cold-Press Journey
                </h4>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-serif text-[#111810] leading-tight">
                From Sacred Seed{" "}
                <span className="italic font-normal text-[#1a4a38]">
                  to Pure Nectar
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#e2a325]/20 shadow-xs">
                {HOME_STEPS.map((s, idx) => (
                  <button
                    key={s.num}
                    onClick={() => scrollToStep(idx)}
                    className={`flex items-center justify-center rounded-full font-serif text-[11px] transition-all duration-300 ${
                      activeStep === idx
                        ? "w-7 h-6 bg-[#1a4a38] text-white font-bold shadow-xs"
                        : "w-6 h-6 text-gray-400 hover:text-[#1a4a38]"
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
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Horizontal Cards Track (Fills Height Proportionally) ── */}
        <div className="relative z-10 w-full overflow-hidden my-auto py-2">
          <motion.div
            ref={scrollTrackRef}
            className="flex items-stretch gap-6 xl:gap-8 pl-8 xl:pl-16 pr-20"
            style={{ x, willChange: "transform" }}
          >
            {HOME_STEPS.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative w-[380px] xl:w-[440px] 2xl:w-[480px] shrink-0 rounded-3xl bg-white border border-gray-100/90 hover:border-[#e2a325]/30 shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[250px] xl:h-[280px] 2xl:h-[300px] overflow-hidden bg-[#1a1c17]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="480px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

                    {/* Step tag badge */}
                    <div className="absolute top-3.5 left-3.5 bg-black/40 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-xs shadow-lg">
                      <div className="w-5 h-5 rounded-full bg-[#e2a325] text-[#111810] font-bold text-[10px] flex items-center justify-center">
                        {step.num}
                      </div>
                      <span className="font-medium tracking-wide">
                        {step.tag}
                      </span>
                    </div>

                    {/* Bottom floating badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/80 flex items-center justify-between text-[11px] shadow-sm">
                      <span className="inline-flex items-center gap-1.5 font-medium text-[#1a4a38]">
                        <CheckCircle2 size={13} />
                        {step.highlight}
                      </span>
                      <span className="font-bold text-[#a36f0a] bg-[#e2a325]/15 px-2 py-0.5 rounded-md text-[10px]">
                        {step.metric}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 xl:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[#1a4a38] text-[#e2a325] flex items-center justify-center shadow-xs">
                          <IconComponent size={17} />
                        </div>
                        <div>
                          <h3 className="text-lg xl:text-xl font-serif text-[#111810] group-hover:text-[#1a4a38] transition-colors leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-[11px] text-gray-400 font-light">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs xl:text-sm text-gray-600 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px]">
                      <span className="text-gray-400 font-serif italic">
                        Step {step.num} of 04
                      </span>
                      <Link
                        href="/process"
                        className="text-[#1a4a38] font-semibold hover:text-[#e2a325] inline-flex items-center gap-1 transition-colors"
                      >
                        Full science <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Bottom Progress Bar ── */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-8 xl:px-16">
          <div className="flex items-center justify-between gap-6 border-t border-gray-200/60 pt-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-serif font-bold text-[#1a4a38]">
                0{activeStep + 1}
              </span>
              <div className="w-32 sm:w-44 h-1.5 bg-gray-200/80 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#e2a325] to-[#1a4a38] rounded-full"
                  style={{ scaleX: smoothProgress, transformOrigin: "left" }}
                />
              </div>
              <span className="text-xs text-gray-400 font-serif">04</span>
            </div>
            <p className="text-xs text-gray-400 font-light hidden md:block">
              Scroll to travel through our extraction line
            </p>
            <Link
              href="/process"
              className="text-xs font-semibold text-[#1a4a38] hover:text-[#e2a325] transition-colors underline underline-offset-4"
            >
              View Full Gallery & Standards →
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════ MOBILE & TABLET: Stacked Cards ═══════ */}
      <div className="block lg:hidden bg-[#fdfaf6] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <div className="w-6 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">
                The Cold-Press Journey
              </h4>
              <div className="w-6 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#111810] leading-tight">
              From Sacred Seed{" "}
              <span className="italic font-normal text-[#1a4a38]">
                to Pure Nectar
              </span>
            </h2>
          </div>

          <div className="space-y-5">
            {HOME_STEPS.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md"
                >
                  <div className="relative w-full aspect-[16/10] bg-gray-900">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-[11px] font-serif font-bold">
                      Step {step.num}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] uppercase tracking-widest text-[#e2a325] font-bold bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-[#1a4a38] text-[#e2a325] flex items-center justify-center shadow-sm">
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <h3 className="text-base font-serif text-[#111810]">
                          {step.title}
                        </h3>
                        <p className="text-[10px] text-gray-400 font-light">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 font-light leading-relaxed mb-2.5">
                      {step.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1a4a38]/8 text-[#1a4a38] text-[11px] font-medium">
                        <CheckCircle2 size={11} />
                        {step.highlight}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e2a325]/10 text-[#a36f0a] text-[11px] font-medium">
                        <Sparkles size={10} />
                        {step.metric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-7">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1a4a38] hover:bg-[#123628] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-[#1a4a38]/10 group"
            >
              <span>View Full Process</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
