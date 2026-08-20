import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 font-light">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a4a38] font-medium">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-[1px] bg-[#e2a325]" />
            <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Legal</h4>
            <div className="w-8 h-[1px] bg-[#e2a325]" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#111810] leading-tight mb-4 sm:mb-6">Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-gray-400 font-light">Last updated: August 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          <PolicySection title="Information We Collect">
            <p>When you use our website or contact us, we may collect the following information:</p>
            <ul>
              <li>Name, email address, and phone number (provided via enquiry forms)</li>
              <li>Product preferences and enquiry details</li>
              <li>Shipping address (when placing an order)</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul>
              <li>Respond to your product enquiries and support requests</li>
              <li>Process and fulfill your orders</li>
              <li>Send you updates about new products and promotions (with your consent)</li>
              <li>Improve our website experience and product offerings</li>
            </ul>
          </PolicySection>

          <PolicySection title="Data Sharing">
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only with:</p>
            <ul>
              <li>Delivery partners (name, address, phone) to fulfill your orders</li>
              <li>Payment processors to securely handle transactions</li>
              <li>Analytics providers to understand website usage (anonymized data only)</li>
            </ul>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>Our website uses cookies to improve your browsing experience. You can control cookie preferences through your browser settings. We use cookies for:</p>
            <ul>
              <li>Website functionality and user preferences</li>
              <li>Anonymous usage analytics (Google Analytics)</li>
              <li>No advertising or tracking cookies are used</li>
            </ul>
          </PolicySection>

          <PolicySection title="Data Security">
            <p>We implement industry-standard security measures to protect your personal information, including SSL encryption for all data transmission and secure storage practices.</p>
          </PolicySection>

          <PolicySection title="Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>File a complaint with the relevant data protection authority</li>
            </ul>
          </PolicySection>

          <PolicySection title="Contact Us">
            <p>For any privacy-related queries, please contact us at:</p>
            <p><strong>Email:</strong> privacy@dharohar.com</p>
            <p><strong>Phone:</strong> +91 99999 99999</p>
          </PolicySection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-serif text-[#111810] mb-3 sm:mb-4">{title}</h2>
      <div className="text-gray-600 font-light leading-relaxed space-y-2.5 sm:space-y-3 text-xs sm:text-sm [&_ul]:list-disc [&_ul]:pl-5 sm:[&_ul]:pl-6 [&_ul]:space-y-1.5 sm:[&_ul]:space-y-2 [&_strong]:font-medium [&_strong]:text-[#111810]">{children}</div>
    </div>
  );
}
