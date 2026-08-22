"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { PRODUCTS } from "../../constants/products";
import { PrimaryButton } from "./Button";
import WhatsappIcon from "./WhatsappIcon";

import toast from "react-hot-toast";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialProduct = "" }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    quantity: "1 Litre",
    becomeDealer: false,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        toast.error("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "",
      quantity: "1 Litre",
      becomeDealer: false,
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#fdfaf6] rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-2xl shadow-black/30 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative px-5 sm:px-8 pt-6 sm:pt-8 pb-3.5 sm:pb-4 border-b border-gray-200/60 bg-white/80 backdrop-blur-sm flex items-start justify-between flex-shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <div className="w-5 sm:w-6 h-[1.5px] bg-[#e2a325]" />
                  <span className="text-[#1a4a38] text-[8px] sm:text-[9px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                    Direct Inquiry
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#111810] leading-tight">
                  Enquire About Pure Oils
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-light mt-0.5 sm:mt-1">
                  Leave your details. We will reach out within 24 hours.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-500 hover:text-[#111810] transition-colors flex items-center justify-center flex-shrink-0 ml-2 sm:ml-4 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 overflow-y-auto">
              {submitted ? (
                <div className="py-8 sm:py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1a4a38]/10 text-[#1a4a38] rounded-full flex items-center justify-center mb-4 sm:mb-5">
                    <CheckCircle2 size={32} className="sm:w-9 sm:h-9" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#111810] mb-2">
                    Enquiry Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light max-w-sm mx-auto mb-6 sm:mb-8 leading-relaxed">
                    Thank you for your interest in Varchasva Oils. We have received your inquiry and will contact you shortly with pricing and availability.
                  </p>
                  <PrimaryButton onClick={handleReset} className="px-8 py-3 text-xs tracking-widest">
                    Done
                  </PrimaryButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a4a38] mb-1 block">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white border border-gray-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition font-light shadow-sm placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a4a38] mb-1 block">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 89499 44620"
                        className="w-full bg-white border border-gray-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition font-light shadow-sm placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a4a38] mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition font-light shadow-sm placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a4a38] mb-1 block">
                        Product of Interest
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full bg-white border border-gray-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition font-light shadow-sm flex items-center justify-between text-left"
                        >
                          <span className={formData.product ? "text-[#111810] truncate" : "text-gray-400 truncate"}>
                            {formData.product || "Select an Oil"}
                          </span>
                          <ChevronDown size={16} className={`text-gray-400 flex-shrink-0 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <>
                              <div 
                                className="fixed inset-0 z-10" 
                                onClick={() => setIsDropdownOpen(false)} 
                              />
                              <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-20 top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl shadow-black/10 overflow-hidden max-h-56 overflow-y-auto"
                              >
                                <div className="p-1.5">
                                  {[
                                    { value: "", label: "Select an Oil" },
                                    ...PRODUCTS.map((p) => ({ value: p.title, label: p.title })),
                                    { value: "Bulk Order", label: "Bulk / Wholesale Inquiry" },
                                    { value: "All Oils Sample Set", label: "Sample Set" },
                                  ].map((option) => (
                                    <button
                                      key={option.value}
                                      type="button"
                                      onClick={() => {
                                        setFormData({ ...formData, product: option.value });
                                        setIsDropdownOpen(false);
                                      }}
                                      className={`w-full text-left px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-colors ${
                                        formData.product === option.value
                                          ? "bg-[#1a4a38]/5 text-[#1a4a38] font-medium"
                                          : "text-gray-600 hover:bg-gray-50 hover:text-[#111810]"
                                      }`}
                                    >
                                      {option.label}
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a4a38] mb-1.5 block">
                      Required Quantity / Size
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {["1 Litre", "5 Litres", "15 Litres"].map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setFormData({ ...formData, quantity: qty })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                            formData.quantity === qty
                              ? "bg-[#111810] text-white border-[#111810] shadow-sm"
                              : "bg-white text-gray-600 border-gray-200 hover:border-[#1a4a38] hover:text-[#1a4a38]"
                          }`}
                        >
                          {qty}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a4a38] mb-1 block">
                      Message / Delivery City
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your location or specific requirements..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition font-light shadow-sm resize-none placeholder:text-gray-400"
                    />
                  </div>

                  {/* Become a Dealer Checkbox */}
                  <label className="flex items-center gap-3 p-3 bg-[#1a4a38]/5 rounded-xl border border-[#1a4a38]/15 cursor-pointer hover:bg-[#1a4a38]/10 transition-colors select-none">
                    <input
                      type="checkbox"
                      checked={formData.becomeDealer}
                      onChange={(e) => setFormData({ ...formData, becomeDealer: e.target.checked })}
                      className="w-4 h-4 rounded border-gray-300 text-[#1a4a38] focus:ring-[#1a4a38] cursor-pointer accent-[#1a4a38]"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-medium text-[#111810]">
                        Become a Dealer / Distributorship
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-gray-500 font-light">
                        Interested in wholesale distribution or retail partnership
                      </span>
                    </div>
                  </label>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                    <PrimaryButton 
                      type="submit"
                      className={`w-full sm:flex-1 py-3.5 text-xs tracking-widest shadow-lg shadow-black/5 text-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      <Send size={13} className="mr-1.5" /> 
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </PrimaryButton>

                    <a
                      href={`https://wa.me/918949944620?text=${encodeURIComponent(
                        formData.becomeDealer
                          ? "Hello Varchasva Team, I am interested in becoming a dealer / distributor for your cold-pressed oils."
                          : "Hello Varchasva Team, I would like to enquire about your cold-pressed oils."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <button
                        type="button"
                        className="w-full sm:w-auto px-5 py-3.5 sm:py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#1a4a38] bg-white border border-gray-200 hover:border-[#1a4a38] hover:bg-[#1a4a38]/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <WhatsappIcon size={14} color="#15803d" /> WhatsApp
                      </button>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
