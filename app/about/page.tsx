import React from "react";
import Link from "next/link";
import { ChevronRight, Leaf, Heart, Users, Globe, Award, Sparkles } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { PrimaryButton } from "../../components/ui/Button";

export default function AboutPage() {
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
            <span className="text-[#1a4a38] font-medium">Our Story</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">About Us</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">Our Story</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Rooted in tradition, driven by purity — Dharohar revives the ancient art of cold-pressing to bring you oils the way nature intended.
          </p>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Heritage</h4>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111810] mb-8 leading-tight">
              A Legacy of <span className="text-[#e2a325] italic font-light">Pure Goodness</span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>Dharohar was born from a simple belief — that the oils our grandmothers trusted should not be lost to industrial processing. In the villages of Rajasthan, families have been pressing mustard, sesame, and groundnut oils using wooden ghanis for centuries.</p>
              <p>We started Dharohar to bridge this heritage with modern wellness. Every bottle we produce follows the same time-honoured methods — hand-selected seeds, slow wooden pressing below 40°C, and zero chemical processing. The result is oil that tastes, smells, and nourishes exactly as nature intended.</p>
              <p>Today, we work directly with over 200 farming families across Rajasthan, Gujarat, and Kerala, ensuring fair prices for their harvest and the highest quality for your kitchen.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5">
              <img src="/banner.jpg" alt="Dharohar Heritage" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-4xl font-serif text-[#e2a325] font-bold">200+</div>
              <div className="text-xs text-gray-500 font-light uppercase tracking-widest mt-1">Farming Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#fdfaf6] py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">What Drives Us</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111810]">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
              <div className="w-16 h-16 mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">
                <Heart size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-[#111810] mb-4">Our Mission</h3>
              <p className="text-gray-600 font-light leading-relaxed">To make pure, cold-pressed oils accessible to every Indian household — reviving traditional extraction methods while empowering rural farming communities with sustainable livelihoods.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
              <div className="w-16 h-16 mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-[#111810] mb-4">Our Vision</h3>
              <p className="text-gray-600 font-light leading-relaxed">To become India&apos;s most trusted name in traditional cold-pressed oils — a brand synonymous with purity, heritage, and honest craftsmanship. We envision a future where every kitchen returns to nature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#e2a325]" />
              <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Our Pillars</h4>
              <div className="w-8 h-[1px] bg-[#e2a325]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#111810]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf size={24} strokeWidth={1.5} />, title: "Purity", desc: "Zero additives, zero chemicals. Every drop is 100% natural." },
              { icon: <Users size={24} strokeWidth={1.5} />, title: "Community", desc: "Direct partnerships with 200+ farming families across India." },
              { icon: <Award size={24} strokeWidth={1.5} />, title: "Quality", desc: "Lab-tested and certified. We never compromise on standards." },
              { icon: <Sparkles size={24} strokeWidth={1.5} />, title: "Tradition", desc: "Centuries-old wooden ghani pressing preserved for modern wellness." },
            ].map((v) => (
              <div key={v.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-6 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#1a4a38] group-hover:bg-[#1a4a38] group-hover:text-white transition-colors duration-500 border border-gray-100">{v.icon}</div>
                <h4 className="text-lg font-serif text-[#111810] mb-2 group-hover:text-[#1a4a38] transition-colors">{v.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fdfaf6] py-24 px-6 lg:px-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#111810] mb-6">Want to Know More?</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-lg mx-auto">We&apos;d love to tell you more about our story, our oils, and how we work with farmers. Reach out to us anytime.</p>
          <Link href="/contact"><PrimaryButton className="px-10 py-4 text-xs tracking-widest shadow-lg shadow-black/5">Get In Touch</PrimaryButton></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
