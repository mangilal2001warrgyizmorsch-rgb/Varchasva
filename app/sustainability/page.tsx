import React from "react";
import Link from "next/link";
import { ChevronRight, Leaf, Recycle, Users, Droplets, Sun, TreePine } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";

export default function SustainabilityPage() {
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
            <span className="text-[#1a4a38] font-medium">Sustainability</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Commitment</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">Sustainability</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">We believe in giving back more than we take — from our soil, our farmers, and our planet.</p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Pillars</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111810]">How We Sustain</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Users size={28} strokeWidth={1.5} />, title: "Fair Farmer Partnerships", desc: "We work directly with 200+ farming families, paying fair prices that are 15–20% above market rates. No middlemen. No exploitation. Every farmer is a partner." },
              { icon: <Leaf size={28} strokeWidth={1.5} />, title: "Organic Farming", desc: "We encourage and support our partner farmers in transitioning to organic, chemical-free farming practices. Healthier soil means healthier oil." },
              { icon: <Recycle size={28} strokeWidth={1.5} />, title: "Eco Packaging", desc: "Our bottles are made from recyclable glass. Labels are printed on FSC-certified paper with soy-based inks. We aim for zero single-use plastic." },
              { icon: <Droplets size={28} strokeWidth={1.5} />, title: "Water Conservation", desc: "Our cold-press extraction uses zero water — unlike chemical refining which consumes thousands of litres per batch. We also support rainwater harvesting in partner villages." },
              { icon: <Sun size={28} strokeWidth={1.5} />, title: "Solar-Powered Pressing", desc: "Our processing unit is transitioning to 100% solar power. Sun-dried seeds pressed by sun-powered ghanis — nature from start to finish." },
              { icon: <TreePine size={28} strokeWidth={1.5} />, title: "Zero Waste", desc: "The seed cake left after pressing is upcycled as organic cattle feed and natural fertilizer. Nothing goes to a landfill." },
            ].map((p) => (
              <div key={p.title} className="bg-white p-8 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                <div className="w-14 h-14 mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{p.icon}</div>
                <h4 className="text-lg font-serif text-[#111810] mb-3 group-hover:text-[#1a4a38] transition-colors">{p.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#fdfaf6] py-24 px-6 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { num: "200+", label: "Farming Families" },
            { num: "0", label: "Chemicals Used" },
            { num: "100%", label: "Recyclable Packaging" },
            { num: "Zero", label: "Water Wasted" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-serif text-[#e2a325] font-bold mb-2">{s.num}</div>
              <div className="text-xs text-gray-500 font-light uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#111810] mb-6">Join Our Green Journey</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-lg mx-auto">Every bottle of Dharohar oil supports sustainable farming and eco-friendly practices. Be part of the change.</p>
          <Link href="/contact"><PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5">Get In Touch</PrimaryButton></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
