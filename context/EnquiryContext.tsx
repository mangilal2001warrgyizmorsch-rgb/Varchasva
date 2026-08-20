"use client";
import React, { createContext, useContext, useState } from "react";
import EnquiryModal from "../components/ui/EnquiryModal";

interface EnquiryContextType {
  isOpen: boolean;
  selectedProduct: string;
  openEnquiry: (productName?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openEnquiry = (productName?: string) => {
    setSelectedProduct(productName || "");
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
    setSelectedProduct("");
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, selectedProduct, openEnquiry, closeEnquiry }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeEnquiry} initialProduct={selectedProduct} />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
