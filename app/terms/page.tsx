import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a4a38] font-medium">Terms of Service</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Legal</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-6">Terms of Service</h1>
          <p className="text-sm text-gray-400 font-light">Last updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20 px-6 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <TermsSection title="Agreement to Terms">
            <p>By accessing and using the Dharohar Natural Oils website (dharohar.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </TermsSection>

          <TermsSection title="Products & Orders">
            <p>All products listed on our website are subject to availability. Product images are for illustrative purposes; actual appearance may vary slightly due to natural variations in cold-pressed oils.</p>
            <p>Orders are confirmed only after we respond to your enquiry with availability and pricing. We reserve the right to decline or cancel orders at our discretion.</p>
          </TermsSection>

          <TermsSection title="Pricing & Payment">
            <p>Prices are communicated upon enquiry and may vary based on order quantity, delivery location, and current availability. All prices are in Indian Rupees (₹) and inclusive of applicable GST unless otherwise stated.</p>
            <p>We accept payment via UPI, bank transfer, and select online payment methods. Payment terms will be confirmed when your enquiry is processed.</p>
          </TermsSection>

          <TermsSection title="Delivery">
            <p>We aim to deliver within 3–7 business days for standard orders. Delivery timelines are estimates and not guaranteed. Dharohar is not responsible for delays caused by courier partners, natural events, or circumstances beyond our control.</p>
          </TermsSection>

          <TermsSection title="Returns & Refunds">
            <p>Please refer to our <Link href="/shipping" className="text-[#1a4a38] hover:underline">Shipping & Returns</Link> page for detailed information on our return and refund policies.</p>
          </TermsSection>

          <TermsSection title="Intellectual Property">
            <p>All content on this website — including text, images, logos, and design — is the property of Dharohar Natural Oils and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.</p>
          </TermsSection>

          <TermsSection title="Limitation of Liability">
            <p>Dharohar Natural Oils provides this website and its content on an &quot;as is&quot; basis. We make no warranties regarding the accuracy or completeness of information. Our liability for any claims arising from your use of our products or website is limited to the value of the product purchased.</p>
          </TermsSection>

          <TermsSection title="Governing Law">
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jodhpur, Rajasthan.</p>
          </TermsSection>

          <TermsSection title="Changes to Terms">
            <p>We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of the website after changes constitutes acceptance of the new terms.</p>
          </TermsSection>

          <TermsSection title="Contact">
            <p>For questions about these terms, please contact us at:</p>
            <p><strong>Email:</strong> legal@dharohar.com</p>
            <p><strong>Phone:</strong> +91 99999 99999</p>
          </TermsSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-serif text-[#111810] mb-4">{title}</h2>
      <div className="text-gray-600 font-light leading-relaxed space-y-3 text-sm [&_strong]:font-medium [&_strong]:text-[#111810]">{children}</div>
    </div>
  );
}
