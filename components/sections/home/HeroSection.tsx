"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PrimaryButton, SecondaryButton } from "../../ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 300;
const currentFrame = (index: number) => 
  `/hero-section-images/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

const scenes = [
  {
    eyebrow: "PURE • TRADITIONAL • AUTHENTIC",
    heading: "From Nature to Purity",
    description: "Experience the timeless journey of carefully selected mustard seeds transformed through traditional cold-press extraction.",
    cta1: "Shop The Harvest",
    cta2: "Explore Our Process",
  },
  {
    eyebrow: "SELECTED MUSTARD SEEDS",
    heading: "Where Purity Begins",
    description: "Carefully selected mustard seeds form the foundation of every drop.",
  },
  {
    eyebrow: "TRADITIONAL COLD PRESS",
    heading: "Crafted the Traditional Way",
    description: "Our traditional wooden ghani gently extracts the natural goodness from every seed.",
  },
  {
    eyebrow: "NATURAL EXTRACTION",
    heading: "Every Drop, Naturally Extracted",
    description: "Slow extraction helps preserve the natural character, aroma and richness of mustard oil.",
  },
  {
    eyebrow: "PURE MUSTARD OIL",
    heading: "Pure From Seed to Bottle",
    description: "A traditional process. A rich natural taste. A product made with care.",
    cta1: "Shop Now",
  }
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const loadingOverlayRef = useRef<HTMLDivElement>(null);
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameObj = useRef({ frame: 1 });

  // Preload images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;
    
    const img1 = new Image();
    img1.src = currentFrame(1);
    images[1] = img1;

    img1.onload = () => {
      renderCanvas(1);
      setImagesLoaded(true);

      let i = 2;
      const loadChunk = () => {
        for (let j = 0; j < 10 && i <= FRAME_COUNT; j++, i++) {
          const img = new Image();
          img.src = currentFrame(i);
          images[i] = img;
        }
        if (i <= FRAME_COUNT) {
          if (typeof requestIdleCallback !== "undefined") {
            requestIdleCallback(loadChunk);
          } else {
            setTimeout(loadChunk, 10);
          }
        }
      };
      loadChunk();
    };
  }, []);

  const renderCanvas = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
                  centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !imagesLoaded) return;

    // Accessibility check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (loadingOverlayRef.current) {
        gsap.to(loadingOverlayRef.current, { 
          opacity: 0, 
          duration: 1, 
          onComplete: () => {
            if (loadingOverlayRef.current) loadingOverlayRef.current.style.display = 'none';
          }
        });
      }

      if (prefersReducedMotion) {
        renderCanvas(FRAME_COUNT); // Render last frame
        if (sceneRefs.current[scenes.length - 1]) {
          gsap.set(sceneRefs.current[scenes.length - 1], { opacity: 1, y: 0 });
        }
        return; // Skip animation timeline
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1.5,
          pin: true,
        }
      });

      tl.to(frameObj.current, {
        frame: FRAME_COUNT,
        snap: "frame",
        ease: "none",
        duration: 1,
        onUpdate: () => {
          renderCanvas(Math.round(frameObj.current.frame));
        }
      }, 0);

      tl.fromTo(canvasRef.current, 
        { scale: 1 }, 
        { scale: 1.05, ease: "power1.inOut", duration: 1 }, 0
      );

      const sceneDuration = 1 / scenes.length;
      const transitionDuration = 0.05;
      
      scenes.forEach((scene, index) => {
        const el = sceneRefs.current[index];
        if (!el) return;
        
        const start = index * sceneDuration;
        const end = start + sceneDuration;

        tl.fromTo(el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: "power2.out", duration: transitionDuration },
          start
        );

        if (index < scenes.length - 1) {
          tl.to(el,
            { opacity: 0, y: -30, ease: "power2.in", duration: transitionDuration },
            end - transitionDuration
          );
        }
      });
    });

    const handleResize = () => renderCanvas(Math.round(frameObj.current.frame));
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded]);

  return (
    <section ref={containerRef} className="relative bg-[#0d140a] min-h-screen">
      <div ref={loadingOverlayRef} className="absolute inset-0 z-50 flex items-center justify-center bg-[#0d140a]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#e2a325] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[#e2a325] text-xs font-mono tracking-widest uppercase">Initializing Cinematic Experience</span>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d140a] via-transparent to-black/20 z-10 pointer-events-none" />

        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-4xl">
          {scenes.map((scene, idx) => (
            <div 
              key={idx} 
              ref={el => { sceneRefs.current[idx] = el; }} 
              className="absolute left-6 md:left-12 lg:left-24 max-w-2xl opacity-0 translate-y-[30px]"
            >
              <p className="text-[#e2a325] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-4 md:mb-6 flex items-center gap-3">
                {scene.eyebrow}
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-6">
                {scene.heading}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-lg mb-8 font-light leading-relaxed">
                {scene.description}
              </p>
              
              {(scene.cta1 || scene.cta2) && (
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 items-start sm:items-center pointer-events-auto">
                  {scene.cta1 && <PrimaryButton className="px-6 md:px-8 py-3.5 md:py-4 text-[10px] md:text-xs">{scene.cta1}</PrimaryButton>}
                  {scene.cta2 && <SecondaryButton className="px-6 md:px-8 py-3.5 md:py-4 text-[10px] md:text-xs border-white/30 text-white hover:text-[#e2a325]">{scene.cta2}</SecondaryButton>}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/80">
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold">Scroll To Explore</span>
          <div className="w-5 h-8 md:w-6 md:h-9 border border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
