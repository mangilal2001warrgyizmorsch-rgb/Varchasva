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
  title: "Varchasva | Pure Cold-Pressed Natural Oils",
  description: "Reviving ancient wellness through 100% pure, cold-pressed oils. Honestly crafted from seed to bottle.",
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf3e0] text-[#171717]">
        <EnquiryProvider>
          {children}
          <Toaster position="top-right" />
        </EnquiryProvider>
      </body>
    </html>
  );
}
