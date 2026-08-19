import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";

const STEPS = [
  { num: "01", title: "Seed Selection", desc: "We hand-select the finest seeds from trusted farming families across Rajasthan, Gujarat, and Kerala. Only mature, healthy seeds that meet our strict quality standards make the cut.", image: "/process1.jpg" },
  { num: "02", title: "Sun Drying", desc: "Selected seeds are naturally sun-dried to remove excess moisture, concentrating their natural oils and flavour compounds. This patient process can take 3–5 days depending on the seed variety.", image: "/process2.jpg" },
  { num: "03", title: "Cold Pressing", desc: "The dried seeds are fed into our traditional wooden ghani — a centuries-old cold-press that extracts oil at temperatures below 40°C. This slow process preserves every nutrient, antioxidant, and natural compound.", image: "/process3.jpg" },
  { num: "04", title: "Natural Settling", desc: "The freshly pressed oil is left to settle naturally for 48–72 hours. No chemical filtration, no bleaching, no deodorizing. The oil clarifies on its own, retaining its natural colour and aroma.", image: "/banner.jpg" },
  { num: "05", title: "Quality Testing", desc: "Every batch undergoes rigorous lab testing for purity, acidity levels, and nutritional content. Only batches that pass our strict standards are approved for bottling.", image: "/process1.jpg" },
  { num: "06", title: "Bottling & Sealing", desc: "Approved oil is carefully bottled in food-grade glass and sealed to lock in freshness. Each bottle is labelled with its batch number, pressing date, and source farm for full traceability.", image: "/process2.jpg" },
];

export default function ProcessPage() {
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
            <span className="text-[#1a4a38] font-medium">Our Process</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Seed To Bottle</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">Our Process</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            From hand-selected seeds to your kitchen — every step is guided by tradition, patience, and an unwavering commitment to purity.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {STEPS.map((step, i) => (
            <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="text-6xl font-serif text-[#e2a325]/20 font-bold mb-4">{step.num}</div>
                <h3 className="text-3xl md:text-4xl font-serif text-[#111810] mb-6">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fdfaf6] py-24 px-6 lg:px-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Taste The Difference</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#111810] mb-6">Experience Purity</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-lg mx-auto">Ready to try cold-pressed oils the way they were meant to be? Get in touch to learn more about our products.</p>
          <Link href="/contact"><PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5">Enquire Now</PrimaryButton></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
