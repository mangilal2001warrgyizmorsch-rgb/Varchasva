"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Mail, FileText, LogOut, MessageSquare, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
    { label: "Enquiries", href: "/admin/enquiries", icon: <MessageSquare size={20} /> },
    { label: "Subscribers", href: "/admin/newsletter", icon: <Mail size={20} /> },
    { label: "Journal", href: "/admin/journal", icon: <FileText size={20} /> },
  ];

  const renderSidebarContent = () => (
    <>
      <div className="h-20 flex items-center justify-center px-6 border-b border-gray-100/50">
        <Link href="/" className="flex items-center justify-center w-full mt-2">
          <Image src="/common/logo.webp" alt="Varchasva Logo" width={160} height={50} className="object-contain h-12 w-auto" priority />
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin");
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium group ${
                isActive 
                  ? "bg-[#1a4a38] text-white shadow-md shadow-[#1a4a38]/20" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#1a4a38]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`${isActive ? "text-[#e2a325]" : "text-gray-400 group-hover:text-[#1a4a38]"} transition-colors`}>
                  {item.icon}
                </span>
                {item.label}
              </div>
              {isActive && <ChevronRight size={16} className="text-[#e2a325] opacity-50" />}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-100/50">
        <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-xl bg-gray-50 border border-gray-100">
          <div className="w-9 h-9 rounded-full bg-[#1a4a38] text-white flex items-center justify-center font-semibold text-sm">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
            <p className="text-xs text-gray-500 truncate">admin@varchasva.com</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors text-sm font-medium cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </>
  );

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <div className="flex h-screen bg-[#faf3e0]/30 text-gray-900 font-sans overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-gray-200/60 flex-col flex-shrink-0 shadow-sm z-20">
        {renderSidebarContent()}
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200/60 flex items-center justify-between px-4 z-30 shadow-sm">
        <Link href="/" className="flex items-center">
          <Image src="/common/logo.webp" alt="Varchasva Logo" width={100} height={32} className="object-contain" />
        </Link>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white flex flex-col z-50 shadow-2xl lg:hidden"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              {renderSidebarContent()}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50/50 relative pt-16 lg:pt-0">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
