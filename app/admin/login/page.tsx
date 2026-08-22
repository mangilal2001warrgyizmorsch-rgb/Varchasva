"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Leaf, 
  ArrowLeft,
  Activity,
  Layers
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function LuxuryAdminLoginPage() {
  const [email, setEmail] = useState("admin@varchasva.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        toast.success("Welcome back! Redirecting to Dashboard...", {
          style: {
            borderRadius: "12px",
            background: "#1a4a38",
            color: "#fff",
          }
        });
        setTimeout(() => {
          router.push("/admin");
          router.refresh();
        }, 800);
      } else {
        setError(data.error || "Authentication failed. Please check your credentials.");
        toast.error(data.error || "Invalid credentials");
      }
    } catch (err: any) {
      setError("A connection error occurred. Please verify your network and retry.");
      toast.error("Network or server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0c1f17] text-white font-sans selection:bg-[#c59b27]/30 selection:text-[#f3e5ab] overflow-hidden relative">
      
      {/* ========================================================================= */}
      {/* LEFT PANEL: LUXURY BRAND SHOWCASE & ATMOSPHERE (Desktop visible)           */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[58%] relative flex-col justify-between p-12 xl:p-16 overflow-hidden bg-gradient-to-br from-[#0a1d15] via-[#102d21] to-[#081711] border-r border-[#1a4a38]/40">
        
        {/* Background Visual Art with Golden Tone & Depth */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about/about_hero.webp" 
            alt="Cold pressed heritage oils background" 
            fill 
            className="object-cover object-center opacity-25 scale-105 filter brightness-90 contrast-110"
            priority
          />
          {/* Multi-layered Gradients & Mesh Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d15] via-[#0a1d15]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a1d15]/50 to-[#0a1d15]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c59b27]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#1a4a38]/60 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Top Header with Brand Seal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-between"
        >
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c59b27] to-[#8d6a13] p-[1px] shadow-lg shadow-[#c59b27]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0d271d] rounded-[11px] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#e2a325]" />
              </div>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400">
                VARCHASVA
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#c59b27] uppercase font-semibold">
                Pure Cold-Pressed Oils
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-amber-200/90 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">Admin Engine v2.6</span>
          </div>
        </motion.div>

        {/* Center Content: Editorial Headline & Floating Feature Cards */}
        <div className="relative z-10 my-auto py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59b27]/15 border border-[#c59b27]/30 text-[#e6bf55] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Heritage Craftsmanship Meets Modern Operations
            </div>

            <h1 className="font-serif text-4xl xl:text-5xl 2xl:text-6xl font-normal leading-[1.15] text-stone-100 tracking-tight">
              Preserving <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#edd382] via-[#e2a325] to-[#c59b27]">Ancient Pure Craft</span>, Empowering Real-time Control.
            </h1>

            <p className="text-stone-300/80 text-base xl:text-lg font-light leading-relaxed">
              Seamlessly monitor customer enquiries, curate educational articles, and manage your luxury artisanal oil portfolio from a single protected cockpit.
            </p>
          </motion.div>

          {/* Floating Glassmorphism Feature Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 mt-10"
          >
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.07] transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1a4a38]/80 text-[#e2a325] border border-[#e2a325]/20 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-200">Enquiry Dispatch</h4>
                  <p className="text-xs text-stone-400">Direct lead flow & WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.07] transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1a4a38]/80 text-[#e2a325] border border-[#e2a325]/20 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-200">Journal & SEO</h4>
                  <p className="text-xs text-stone-400">Rich HTML & FAQ Publishing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust & Verification Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 flex items-center justify-between text-xs text-stone-400 pt-6 border-t border-white/10"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#e2a325]" />
            <span>256-Bit JWT Encryption • Protected Session</span>
          </div>
          <span className="text-stone-500 font-mono">© {new Date().getFullYear()} Varchasva</span>
        </motion.div>
      </div>


      {/* ========================================================================= */}
      {/* RIGHT PANEL: INTERACTIVE LOGIN EXPERIENCE                                  */}
      {/* ========================================================================= */}
      <div className="w-full lg:w-[45%] xl:w-[42%] flex flex-col justify-between p-6 sm:p-10 xl:p-14 bg-gradient-to-b from-[#faf3e0] via-[#f7eee2] to-[#f4e8d4] text-stone-900 relative overflow-y-auto">
        
        {/* Subtle Ambient Radial Glows in the corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c59b27]/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1a4a38]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Top Action Bar */}
        <div className="flex items-center justify-between mb-8 z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1a4a38] hover:text-[#113226] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#1a4a38]/5 border border-transparent hover:border-[#1a4a38]/15"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Storefront</span>
          </Link>
        </div>

        {/* Center Container */}
        <div className="w-full max-w-md mx-auto my-auto py-4 z-10">
          
          {/* Mobile Brand Header */}
          <div className="lg:hidden flex flex-col items-center text-center mb-8">
            <Image 
              src="/common/logo.webp" 
              alt="Varchasva Logo" 
              width={180} 
              height={65} 
              className="object-contain h-14 w-auto drop-shadow mb-3"
              priority
            />
            <p className="text-xs tracking-wider uppercase font-semibold text-[#8d6a13]">
              Administrative Portal
            </p>
          </div>

          {/* Form Card Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center lg:text-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a4a38]/10 text-[#1a4a38] text-xs font-semibold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a4a38] animate-pulse" />
              Restricted Area
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14392b] tracking-tight">
              Admin Login
            </h2>
            <p className="text-sm text-stone-600 mt-2 font-normal">
              Sign in to manage Varchasva articles, products, and customer communications.
            </p>
          </motion.div>

          {/* Animated Error Banner */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="mb-6 p-3.5 rounded-xl bg-red-50/90 border border-red-200/90 flex items-start gap-3 text-red-800 shadow-sm"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-semibold block text-red-900">Authentication Failed</span>
                  {error}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Email Field */}
            <div className="space-y-1.5">
              <label 
                htmlFor="admin-email" 
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700"
              >
                Administrator Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-[#1a4a38] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="admin-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="admin@varchasva.com"
                  className="w-full pl-10 pr-4 py-3 bg-white/90 hover:bg-white text-stone-900 rounded-xl border border-stone-300/80 focus:border-[#1a4a38] focus:ring-4 focus:ring-[#1a4a38]/10 text-sm font-medium transition-all shadow-sm outline-none placeholder:text-stone-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label 
                htmlFor="admin-password" 
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700"
              >
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-[#1a4a38] transition-colors">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter administrator password"
                  className="w-full pl-10 pr-11 py-3 bg-white/90 hover:bg-white text-stone-900 rounded-xl border border-stone-300/80 focus:border-[#1a4a38] focus:ring-4 focus:ring-[#1a4a38]/10 text-sm font-medium transition-all shadow-sm outline-none placeholder:text-stone-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 focus:outline-none transition-colors cursor-pointer"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me / Session Persistence */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-stone-300 text-[#1a4a38] focus:ring-[#1a4a38] cursor-pointer accent-[#1a4a38]"
                />
                <span className="text-xs text-stone-600 group-hover:text-stone-900 transition-colors font-medium">
                  Stay signed in for 7 days
                </span>
              </label>
            </div>

            {/* Submit Button with Dynamic States */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading || isSuccess}
                className={`w-full relative overflow-hidden py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2 ${
                  isSuccess
                    ? "bg-emerald-600 text-white shadow-emerald-600/30 scale-[0.99]"
                    : loading
                    ? "bg-[#14392b] text-white/90 shadow-[#1a4a38]/20 cursor-wait"
                    : "bg-gradient-to-r from-[#1a4a38] via-[#153e2f] to-[#0e2c21] hover:from-[#13372a] hover:to-[#081e16] text-[#faf3e0] hover:text-white shadow-[#1a4a38]/25 hover:shadow-[#1a4a38]/40 hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {/* Shimmer Light Accent */}
                <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                {isSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 animate-bounce" />
                    <span>Access Granted • Redirecting...</span>
                  </>
                ) : loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-amber-200/30 border-t-amber-300 rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Enter Administration Dashboard</span>
                    <ArrowRight className="w-4 h-4 text-[#e2a325] group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>

          {/* Quick Notice */}
          <div className="mt-8 pt-6 border-t border-stone-300/60 text-center">
            <p className="text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1a4a38]" />
              Authorized staff only. All access logs are recorded and monitored.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center pt-4 z-10">
          <p className="text-[11px] text-stone-400 font-medium">
            Varchasva Oil Administration & Management Suite
          </p>
        </div>

      </div>
    </div>
  );
}
