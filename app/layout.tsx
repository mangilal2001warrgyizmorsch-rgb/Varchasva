import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EnquiryProvider } from "../context/EnquiryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://varchasva.com'),
  title: {
    default: "Varchasva | Pure Cold-Pressed Natural Oils",
    template: "%s | Varchasva"
  },
  description: "Discover Varchasva's premium range of 100% pure, cold-pressed oils. Extracted using modern cold press machine methods for maximum health benefits and rich flavor.",
};

import { Toaster } from "react-hot-toast";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-[#faf3e0] text-[#171717]">
        <EnquiryProvider>
          {children}
          <FloatingWhatsApp />
          <Toaster position="top-right" />
        </EnquiryProvider>
      </body>
    </html>
  );
}
