import React from "react";
import Link from "next/link";
import { ChevronRight, Heart, Brain, Flame, Droplets, Sun, Shield, Leaf, Sparkles } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";

const BENEFITS = [
  { icon: <Heart size={28} strokeWidth={1.5} />, title: "Heart Health", desc: "Cold-pressed oils are rich in monounsaturated and polyunsaturated fats that help lower bad cholesterol (LDL) and support cardiovascular health.", color: "text-rose-500" },
  { icon: <Brain size={28} strokeWidth={1.5} />, title: "Brain Function", desc: "Omega-3 and Omega-6 fatty acids found in flaxseed and mustard oil support cognitive function, memory, and overall brain health.", color: "text-purple-500" },
  { icon: <Shield size={28} strokeWidth={1.5} />, title: "Immune Support", desc: "Virgin coconut oil is rich in lauric acid — a powerful medium-chain fatty acid with natural antimicrobial and immune-boosting properties.", color: "text-blue-500" },
  { icon: <Sun size={28} strokeWidth={1.5} />, title: "Skin & Hair", desc: "Almond and coconut oils are nature&apos;s moisturisers. Rich in Vitamin E, they nourish skin, reduce dark circles, and strengthen hair from root to tip.", color: "text-amber-500" },
  { icon: <Flame size={28} strokeWidth={1.5} />, title: "Anti-Inflammatory", desc: "Sesame and mustard oils contain natural anti-inflammatory compounds that support joint health, reduce swelling, and ease muscle discomfort.", color: "text-orange-500" },
  { icon: <Droplets size={28} strokeWidth={1.5} />, title: "Rich in Antioxidants", desc: "Cold-pressing preserves natural antioxidants like Vitamin E, sesamolin, and resveratrol — powerful compounds that fight free radicals and slow aging.", color: "text-teal-500" },
  { icon: <Leaf size={28} strokeWidth={1.5} />, title: "Zero Chemicals", desc: "Unlike refined oils, our cold-pressed oils undergo zero chemical processing — no hexane extraction, no bleaching, no deodorizing. What you get is 100% pure.", color: "text-green-600" },
  { icon: <Sparkles size={28} strokeWidth={1.5} />, title: "Nutrient Retention", desc: "Cold-pressing at temperatures below 40°C ensures that heat-sensitive vitamins, minerals, and essential fatty acids remain intact in every drop.", color: "text-indigo-500" },
];

const COMPARISON = [
  { feature: "Extraction Method", cold: "Wooden ghani / Expeller below 40°C", refined: "Chemical solvent (hexane) + high heat" },
  { feature: "Nutrients Preserved", cold: "100% — Vitamins, Omega, Antioxidants", refined: "Most destroyed during processing" },
  { feature: "Chemical Additives", cold: "Zero", refined: "Bleaching agents, deodorizers" },
  { feature: "Natural Flavour", cold: "Full, rich, characteristic aroma", refined: "Neutral — flavour stripped away" },
  { feature: "Colour", cold: "Natural golden/amber", refined: "Artificially clear/pale" },
  { feature: "Shelf Life", cold: "6–8 months (natural)", refined: "12+ months (preservatives)" },
  { feature: "Health Impact", cold: "Heart-healthy, anti-inflammatory", refined: "Trans fats, inflammation risk" },
];

export default function BenefitsPage() {
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
            <span className="text-[#1a4a38] font-medium">Benefits</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Why Cold-Pressed</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">Health Benefits</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Discover why cold-pressed oils are the healthier, more natural choice for your kitchen and your wellbeing.
          </p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white p-8 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                <div className="w-14 h-14 mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{b.icon}</div>
                <h4 className="text-lg font-serif text-[#111810] mb-3 group-hover:text-[#1a4a38] transition-colors">{b.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#fdfaf6] py-24 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">The Difference</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111810]">Cold-Pressed vs Refined</h2>
          </div>
          <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-xl shadow-black/5">
            <div className="grid grid-cols-3 bg-[#111810] text-white">
              <div className="p-5 text-[10px] font-bold uppercase tracking-widest">Feature</div>
              <div className="p-5 text-[10px] font-bold uppercase tracking-widest text-[#e2a325]">Cold-Pressed</div>
              <div className="p-5 text-[10px] font-bold uppercase tracking-widest text-gray-400">Refined</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 ${i < COMPARISON.length - 1 ? "border-b border-gray-100" : ""}`}>
                <div className="p-5 text-sm font-medium text-[#111810]">{row.feature}</div>
                <div className="p-5 text-sm text-[#1a4a38] font-light">{row.cold}</div>
                <div className="p-5 text-sm text-gray-400 font-light">{row.refined}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#111810] mb-6">Ready to Make the Switch?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-lg mx-auto">Join thousands of families who have returned to pure, cold-pressed oils. Your body will thank you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products"><PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5">Explore Our Oils</PrimaryButton></Link>
            <Link href="/contact"><button className="px-10 py-4 text-xs font-bold uppercase tracking-widest border-2 border-[#111810] text-[#111810] rounded-lg hover:bg-[#111810] hover:text-white transition-all duration-300">Enquire Now</button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
