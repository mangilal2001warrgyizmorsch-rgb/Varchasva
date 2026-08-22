"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import WhatsappIcon from './WhatsappIcon';

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const phoneNumber = "918949944620";
  const message = "Hi Varchasva, I am interested in your cold-pressed oils. Could you please share more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8" color="#ffffff" />
    </a>
  );
}
