"use client";
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/home/HeroSection";
import PromiseSection from "../components/sections/home/PromiseSection";
import ProcessSection from "../components/sections/home/ProcessSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import BannerSection from "../components/sections/home/BannerSection";
import InstagramSection from "../components/sections/home/InstagramSection";

export default function PremiumEdibleOilHomepage() {
  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />
      <HeroSection />
      <PromiseSection />
      <ProcessSection />
      <ProductsSection />
      <BannerSection />
      {/* <InstagramSection /> */}
      <Footer />
    </div>
  );
}
