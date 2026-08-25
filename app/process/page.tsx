"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Droplets, Sun, Award, Factory } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";
import { useEnquiry } from "../../context/EnquiryContext";
import { fadeInUp, heroStagger, heroReveal, viewportOnce } from "../../utils/animations";

interface StepItem {
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  highlight: string;
  metric: string;
  icon: React.ElementType;
  image: string;
}

const STEPS: StepItem[] = [
  {
    num: "01",
    tag: "Ethical Sourcing",
    title: "Handpicked Seed Selection",
    subtitle: "Rajasthan • Gujarat • Kerala",
    desc: "We partner directly with multigenerational farming families to procure certified, non-GMO mustard, sesame, and groundnut seeds at peak maturity. Every seed is sorted by hand to eliminate impurities.",
    highlight: "100% Non-GMO Certified",
    metric: "0% Adulteration",
    icon: Sparkles,
    image: "/process/process_seed_selection.webp"
  },
  {
    num: "02",
    tag: "Natural Preparation",
    title: "Solar Sun Drying",
    subtitle: "3 to 5 Days of Solar Cure",
    desc: "Cleaned seeds are spread across open courtyards to cure naturally under gentle sunlight. This removes moisture gradually without damaging the vital omega fatty acids and aromatic terpenes.",
    highlight: "Natural Moisture Balance",
    metric: "< 7% Optimal Moisture",
    icon: Sun,
    image: "/process/process_sun_drying.webp"
  },
  {
    num: "03",
    tag: "Slow Craftsmanship",
    title: "Traditional kachi ghani",
    subtitle: "Cold Extraction Below 40°C",
    desc: "Extracted in an authentic slow-turning Vaghai steel extractor. Rotating at low RPMs prevents friction heat, safeguarding all live enzymes, antioxidants, Vitamin E, and authentic nutty aroma.",
    highlight: "Real Wood-Pressed (Kachi Ghani)",
    metric: "< 40°C True Cold Press",
    icon: Droplets,
    image: "/process/promise_new_1.webp"
  },
  {
    num: "04",
    tag: "Zero Chemicals",
    title: "Natural Gravity Settling",
    subtitle: "48 to 72 Hours Sediment Separation",
    desc: "No synthetic bleaches, chemical solvents, or high-pressure micro-filters. The crude oil rests in sterile settling tanks where sediment separates naturally by gravity over 48 to 72 hours.",
    highlight: "Unbleached & Unrefined",
    metric: "48-72h Gravity Settling",
    icon: Factory,
    image: "/process/process_natural_settling.webp"
  },
  {
    num: "05",
    tag: "Purity Assured",
    title: "Multi-Tier Quality Audit",
    subtitle: "FSSAI & Lab Certified Testing",
    desc: "Each production batch is tested for free fatty acid levels, peroxide value, refractive index, and absolute zero presence of mineral oil or heavy metals before packing clearance.",
    highlight: "Batch-Tested Purity",
    metric: "Zero Heavy Metals",
    icon: ShieldCheck,
    image: "/process/process_quality_testing.webp"
  },
  {
    num: "06",
    tag: "Freshness Locked",
    title: "UV-Protected Bottling & Sealing",
    subtitle: "Eco-Friendly Amber Glass",
    desc: "Fresh oil is poured into recyclable food-grade dark amber glass bottles that protect delicate oil compounds from photo-oxidation. Hermetically sealed with tamper-evident caps.",
    highlight: "Traceable Batch QR",
    metric: "100% Recyclable Glass",
    icon: Award,
    image: "/process/promise_new_2.webp"
  },
];

export default function ProcessPage() {
  const { openEnquiry } = useEnquiry();
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sticky = stickyRef.current;
      if (!section || !sticky) return;

      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const stickyHeight = sticky.offsetHeight;

      const scrollableDistance = sectionHeight - stickyHeight;
      if (scrollableDistance <= 0) return;

      let progress = 0;
      if (scrollTop >= sectionTop && scrollTop <= sectionTop + scrollableDistance) {
        progress = (scrollTop - sectionTop) / scrollableDistance;
      } else if (scrollTop > sectionTop + scrollableDistance) {
        progress = 1;
      }

      setScrollProgress(progress);

      // Distribute evenly across 6 steps
      const stepIndex = Math.min(
        STEPS.length - 1,
        Math.max(0, Math.floor(progress * STEPS.length))
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (index: number) => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const stickyHeight = sticky.offsetHeight;
    const scrollableDistance = sectionHeight - stickyHeight;

    const targetOffset = sectionTop + (index / (STEPS.length - 1)) * scrollableDistance;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  };

  const currentStepData = STEPS[activeStep];
  const StepIcon = currentStepData.icon;

  return (
    <div className="bg-[#fdfaf6] text-[#111810] min-h-screen font-sans overflow-clip selection:bg-[#e2a325]/20 selection:text-[#1a4a38]">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 md:pb-36 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#fbf8f2] overflow-hidden border-b border-[#e2a325]/15">
        <div className="absolute -top-40 -right-40 w-80 sm:w-96 md:w-[600px] h-80 sm:h-96 md:h-[600px] bg-[#e2a325]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-72 sm:w-80 md:w-[500px] h-72 sm:h-80 md:h-[500px] bg-[#1a4a38]/8 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={heroReveal} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#1a4a38] font-medium">Seed to Bottle Process</span>
          </motion.div>

          <motion.div variants={heroReveal} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1a4a38]/5 border border-[#1a4a38]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e2a325] animate-pulse" />
            <h4 className="text-[#1a4a38] text-[11px] font-bold tracking-[0.25em] uppercase">Centuries of Uncompromised Craft</h4>
          </motion.div>

          <motion.h1 variants={heroReveal} className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#111810] leading-[1.1] mb-6 max-w-4xl">
            The Ancient Art of <span className="italic text-[#1a4a38] font-normal">Authentic Cold-Pressing</span>
          </motion.h1>

          <motion.p variants={heroReveal} className="text-base sm:text-xl text-gray-600 max-w-2xl font-light leading-relaxed mb-8">
            Every drop is extracted without heat, chemicals, or rush. Explore our step-by-step cold press machine journey from harvest to bottle.
          </motion.p>

          <motion.div variants={heroReveal} className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => scrollToStep(0)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1a4a38] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#123628] transition-all shadow-lg shadow-[#1a4a38]/15"
            >
              <span>Explore The Process</span>
              <ArrowDown size={14} className="animate-bounce" />
            </button>
            <span className="text-xs text-gray-400 font-light">6 Dedicated Steps • 100% Single-Origin</span>
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESS STEPS - DESKTOP STICKY SCROLL */}
      <section 
        ref={sectionRef} 
        className="bg-[#fdfaf6] relative hidden lg:block" 
        style={{ height: `${STEPS.length * 110}vh` }}
      >
        <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#fdfaf6]">
          
          {/* Subtle Ambient Background Elements */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#e2a325]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#1a4a38]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative w-full max-w-[1440px] mx-auto px-8 xl:px-16 2xl:px-24">
            
            {/* Top Minimal Step Progress Indicator Bar */}
            <div className="flex items-center justify-between pb-8 mb-4 border-b border-[#e2a325]/15">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1a4a38]">Varchasva Quality Protocol</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500 font-serif italic">Step {activeStep + 1} of {STEPS.length}</span>
              </div>

              {/* Step Navigation Dots */}
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#e2a325]/20 shadow-xs">
                {STEPS.map((s, idx) => (
                  <button
                    key={s.num}
                    onClick={() => scrollToStep(idx)}
                    className={`group relative flex items-center justify-center transition-all ${
                      activeStep === idx 
                        ? "w-8 h-6 bg-[#1a4a38] text-white rounded-full font-serif text-xs font-bold shadow-sm" 
                        : "w-6 h-6 text-gray-400 hover:text-[#1a4a38] rounded-full text-xs font-serif"
                    }`}
                  >
                    {s.num}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-12 xl:gap-20 items-center">
              
              {/* Left Column: Timeline & Active Content */}
              <div className="col-span-6 relative h-[65vh] xl:h-[70vh] flex items-center">
                
                {/* Vertical Step Timeline Bar */}
                <div className="absolute left-7 xl:left-9 top-6 bottom-6 w-[2px] bg-gray-200/80 z-0">
                  <motion.div 
                    className="w-full bg-gradient-to-b from-[#e2a325] via-[#1a4a38] to-[#e2a325] origin-top" 
                    animate={{ scaleY: scrollProgress }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ height: '100%' }}
                  />
                  
                  {/* Glowing Tracker Bead */}
                  <motion.div 
                    className="absolute -left-[5px] w-3 h-3 rounded-full bg-[#e2a325] shadow-[0_0_12px_#e2a325] border-2 border-white"
                    animate={{ top: `${Math.min(98, Math.max(0, scrollProgress * 100))}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </div>

                {/* Animated Sliding Steps Container */}
                <div className="w-full h-full relative overflow-hidden">
                  <motion.div 
                    className="w-full absolute top-0 left-0 flex flex-col z-10"
                    animate={{ y: `-${(activeStep * 100) / STEPS.length}%` }}
                    transition={{ type: "spring", stiffness: 70, damping: 22, mass: 0.8 }}
                    style={{ height: `${STEPS.length * 100}%` }}
                  >
                    {STEPS.map((step, i) => {
                      const isActive = activeStep === i;
                      const isPast = activeStep > i;

                      return (
                        <div 
                          key={step.num}
                          className="w-full flex flex-col justify-center shrink-0 pl-16 xl:pl-20 pr-4"
                          style={{ height: `${100 / STEPS.length}%` }}
                        >
                          <div className={`transition-all duration-700 ${isActive ? "opacity-100 scale-100" : "opacity-25 scale-95"}`}>
                            
                            {/* Step Badge & Category */}
                            <div className="flex items-center gap-3 mb-4">
                              <div 
                                className={`w-12 h-12 xl:w-14 xl:h-14 rounded-2xl flex items-center justify-center font-serif text-lg xl:text-xl font-bold transition-all duration-500 shadow-md ${
                                  isActive 
                                    ? "bg-[#1a4a38] text-[#e2a325] shadow-[#1a4a38]/20 ring-4 ring-[#1a4a38]/10" 
                                    : isPast
                                      ? "bg-[#e2a325]/15 text-[#1a4a38] border border-[#e2a325]/30"
                                      : "bg-white/80 text-gray-400 border border-gray-200"
                                }`}
                              >
                                {step.num}
                              </div>

                              <div className="flex flex-col">
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e2a325]">
                                  {step.tag}
                                </span>
                                <span className="text-xs text-gray-500 font-light">
                                  {step.subtitle}
                                </span>
                              </div>
                            </div>

                            {/* Headline */}
                            <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-serif text-[#111810] mb-4 leading-tight tracking-tight">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm xl:text-base text-gray-600 font-light leading-relaxed mb-6 max-w-xl">
                              {step.desc}
                            </p>

                            {/* Key Highlight Chips */}
                            <div className="flex flex-wrap items-center gap-2.5">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1a4a38]/8 text-[#1a4a38] text-xs font-medium border border-[#1a4a38]/10">
                                <CheckCircle2 size={13} className="text-[#1a4a38]" />
                                {step.highlight}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#e2a325]/10 text-[#a36f0a] text-xs font-medium border border-[#e2a325]/20">
                                <Sparkles size={12} />
                                {step.metric}
                              </span>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Visual Stage with Floating Glass Badges */}
              <div className="col-span-6 relative h-[65vh] xl:h-[70vh] flex items-center justify-center">
                
                {/* Image Stage Frame */}
                <div className="relative w-full h-full max-h-[580px] xl:max-h-[640px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-[#1a1c17]">
                  
                  {/* Layered Images with Seamless Crossfade */}
                  {STEPS.map((step, i) => {
                    const isVisible = activeStep === i;
                    const StepItemIcon = step.icon;

                    return (
                      <motion.div 
                        key={step.num}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ 
                          opacity: isVisible ? 1 : 0, 
                          scale: isVisible ? 1 : 1.04,
                          zIndex: isVisible ? 10 : 0
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                      >
                        <Image 
                          src={step.image} 
                          alt={step.title} 
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover brightness-[0.92] contrast-[1.05]" 
                          priority={i === 0}
                        />
                        
                        {/* Subtle Gradient Overlays for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                        {/* Floating Glassmorphism Badge: Top Step Counter */}
                        <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full flex items-center gap-2.5 text-white text-xs shadow-lg">
                          <div className="w-5 h-5 rounded-full bg-[#e2a325] text-[#111810] font-bold text-[10px] flex items-center justify-center">
                            {step.num}
                          </div>
                          <span className="font-medium tracking-wide">Phase {step.num} / 06</span>
                        </div>

                        {/* Floating Glassmorphism Main Card (Bottom) */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-2xl px-6 py-4 xl:py-5 rounded-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.18)] flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#1a4a38] text-[#e2a325] flex items-center justify-center shrink-0 shadow-md">
                              <StepItemIcon size={22} />
                            </div>
                            <div>
                              <h4 className="text-[#1a4a38] font-serif text-base xl:text-lg font-bold leading-snug">
                                {step.title}
                              </h4>
                              <p className="text-xs text-gray-600 font-medium mt-0.5">
                                {step.highlight}
                              </p>
                            </div>
                          </div>

                          <button 
                            onClick={() => scrollToStep((activeStep + 1) % STEPS.length)}
                            className="w-10 h-10 rounded-full bg-[#e2a325] hover:bg-[#c58c1b] text-white flex items-center justify-center transition-all shrink-0 shadow-md group cursor-pointer"
                            aria-label="Next Step"
                          >
                            <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </div>

                      </motion.div>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MOBILE & TABLET ADAPTIVE LAYOUT (Clean luxury cards) */}
      <section className="bg-[#fdfaf6] py-10 sm:py-14 px-4 sm:px-8 block lg:hidden border-t border-[#e2a325]/15">
        <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
                className="bg-[#fdfaf6] rounded-3xl p-5 sm:p-6 border border-gray-200/80 shadow-md space-y-4"
              >
                {/* Visual Card with Badge */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-gray-900">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-serif font-bold">
                    Step {step.num}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#e2a325] font-bold">{step.tag}</span>
                    <h4 className="font-serif text-lg font-semibold">{step.title}</h4>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-light">
                    <Icon size={14} className="text-[#1a4a38]" />
                    <span>{step.subtitle}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1a4a38]/8 text-[#1a4a38] text-xs font-medium">
                      <CheckCircle2 size={12} />
                      {step.highlight}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#e2a325]/10 text-[#a36f0a] text-xs font-medium">
                      <Sparkles size={11} />
                      {step.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section 
        className="bg-[#fbf8f2] py-10 sm:py-14 md:py-16 px-4 sm:px-8 lg:px-24 border-t border-[#e2a325]/15 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a4a38]/5 border border-[#1a4a38]/10 mb-4 sm:mb-6">
            <Sparkles size={13} className="text-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Taste The Heritage</h4>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-3 sm:mb-4">Experience True Cold-Pressed Purity</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto text-xs sm:text-base">
            Ready to switch to unadulterated edible oils crafted the traditional way? Request wholesale or retail batch allocations today.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <PrimaryButton onClick={() => openEnquiry()} className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest shadow-xl shadow-[#1a4a38]/10 text-center justify-center">
              Enquire For Batches
            </PrimaryButton>
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-300 hover:border-[#1a4a38] text-xs font-semibold uppercase tracking-wider text-gray-700 hover:text-[#1a4a38] transition-colors text-center"
            >
              Explore Our Oils
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
