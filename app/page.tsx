import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Cold-Pressed Oils | 100% Pure & Natural",
  description: "Experience the purity of Varchasva cold-pressed oils. Our traditional wooden ghani extraction preserves essential nutrients, authentic flavor, and natural aroma.",
  alternates: {
    canonical: '/',
  },
};
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/home/HeroSection";
import PromiseSection from "../components/sections/home/PromiseSection";
import ProcessSection from "../components/sections/home/ProcessSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import BannerSection from "../components/sections/home/BannerSection";
import TestimonialsSection from "../components/sections/home/TestimonialsSection";
import InstagramSection from "../components/sections/home/InstagramSection";

export default function PremiumEdibleOilHomepage() {
  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-clip font-sans">
      <Header />
      <HeroSection />
      <PromiseSection />
      <ProcessSection />
      <ProductsSection />
      <TestimonialsSection />
      <BannerSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}
