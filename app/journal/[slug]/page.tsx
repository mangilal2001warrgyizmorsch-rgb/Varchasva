"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, Clock, ArrowLeft, Leaf, ChevronDown, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { PrimaryButton } from "../../../components/ui/Button";
import ProductsSection from "../../../components/sections/home/ProductsSection";
import { PRODUCTS } from "../../../constants/products";
import { useEnquiry } from "../../../context/EnquiryContext";
import { fadeInUp, staggerContainer, staggerItem, heroStagger, heroReveal, viewportOnce } from "../../../utils/animations";

export default function JournalDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const { openEnquiry } = useEnquiry();

  const [article, setArticle] = React.useState<any>(null);
  const [related, setRelated] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!slug) return;
    Promise.all([
      fetch(`/api/journal?slug=${slug}&publishedOnly=true`).then(r => r.json()),
      fetch(`/api/journal?publishedOnly=true`).then(r => r.json())
    ])
    .then(([articleData, allData]) => {
      if (articleData.success && articleData.data.length > 0) {
        setArticle(articleData.data[0]);
      }
      if (allData.success) {
        // filter out current and pick first 3 for related
        setRelated(allData.data.filter((a: any) => a.slug !== slug).slice(0, 3));
      }
    })
    .catch(console.error)
    .finally(() => setLoading(false));
  }, [slug]);

  // Update SEO Meta Tags
  React.useEffect(() => {
    if (article) {
      const title = article.metaTitle || article.title;
      const description = article.metaDescription || article.excerpt;
      
      document.title = title;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', description);
        document.head.appendChild(metaDesc);
      }
    }
  }, [article]);

  const [formData, setFormData] = React.useState({ 
    name: "", 
    email: "", 
    phone: "", 
    product: "", 
    becomeDealer: false,
    message: "" 
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (loading) {
    return (
      <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen font-sans flex items-center justify-center">
        <div className="text-gray-400">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen font-sans">
        <Header />
        <div className="pt-32 sm:pt-40 pb-24 sm:pb-32 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-serif text-white mb-4">Article Not Found</h1>
            <p className="text-gray-400 font-light mb-8 text-sm sm:text-base">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/journal"><PrimaryButton className="px-8 sm:px-10 py-3.5 sm:py-4 text-xs tracking-widest">Browse All Articles</PrimaryButton></Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  // Parse content if it is stored as a JSON string array or simple markdown, but here we assume it's stored as array of strings like original constants
  let parsedContent = [];
  try {
    parsedContent = typeof article.content === 'string' ? JSON.parse(article.content) : article.content;
    if (!Array.isArray(parsedContent)) parsedContent = [article.content];
  } catch (e) {
    parsedContent = [article.content];
  }

  return (
    <div className="bg-[#1a1c17] text-[#f4f2eb] min-h-screen overflow-hidden font-sans">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#fdfaf6] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-[#e2a325]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] bg-[#1a4a38]/5 rounded-full blur-3xl" />
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div variants={heroReveal} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 font-light overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            <Link href="/" className="hover:text-[#1a4a38] transition-colors">Home</Link>
            <ChevronRight size={13} className="flex-shrink-0" />
            <Link href="/journal" className="hover:text-[#1a4a38] transition-colors">Journal</Link>
            <ChevronRight size={13} className="flex-shrink-0" />
            <span className="text-[#1a4a38] font-medium truncate">{article.category}</span>
          </motion.div>

          <motion.div variants={heroReveal} className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#e2a325] bg-[#e2a325]/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">{article.category}</span>
            <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-400 font-light">
              <span className="flex items-center gap-1"><Calendar size={11} className="sm:w-3 sm:h-3" /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock size={11} className="sm:w-3 sm:h-3" /> {article.readTime}</span>
            </div>
          </motion.div>

          <motion.h1 variants={heroReveal} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#111810] leading-tight mb-4 sm:mb-6">
            {article.title}
          </motion.h1>

          <motion.p variants={heroReveal} className="text-sm sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
            {article.excerpt}
          </motion.p>
        </motion.div>
      </section>

      {/* FEATURED IMAGE */}
      <motion.section 
        className="bg-[#fdfaf6] pb-10 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/10] sm:aspect-[16/8] md:aspect-[16/7] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/10 bg-[#fdfaf6] relative">
            <Image 
              src={article.image} 
              alt={article.title} 
              fill
              sizes="100vw"
              className="object-cover object-[center_30%]" 
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* ARTICLE CONTENT */}
      <section className="bg-white py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {parsedContent.map((paragraph: string, i: number) => {
            let decodedParagraph = paragraph;
            if (decodedParagraph.includes('&lt;')) {
              decodedParagraph = decodedParagraph
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&nbsp;/g, ' ');
            }
            
            const isHtml = /<[a-z][\s\S]*>/i.test(decodedParagraph);
            return (
            <motion.div 
              key={i} 
              variants={staggerItem}
              className="mb-5 sm:mb-6"
            >
              {isHtml ? (
                <div 
                  className="text-gray-600 text-base sm:text-lg leading-[1.8] sm:leading-[1.9] font-light [&>p]:mb-4 [&>h1]:text-3xl [&>h1]:mb-4 [&>h1]:text-[#111810] [&>h1]:font-serif [&>h2]:text-2xl [&>h2]:mb-3 [&>h2]:text-[#111810] [&>h2]:font-serif [&>h3]:text-xl [&>h3]:mb-2 [&>h3]:text-[#111810] [&>h3]:font-serif [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-4 [&>a]:text-[#1a4a38] [&>a]:underline [&>strong]:font-semibold [&>strong]:text-[#111810] [&_table]:w-full [&_table]:border-collapse [&_table]:mb-6 [&_th]:border [&_th]:border-gray-200 [&_th]:p-3 [&_th]:bg-gray-50 [&_th]:text-left [&_td]:border [&_td]:border-gray-200 [&_td]:p-3" 
                  dangerouslySetInnerHTML={{ __html: decodedParagraph }} 
                />
              ) : decodedParagraph.startsWith("**") || decodedParagraph.match(/^\d\./) ? (
                <p 
                  className="text-gray-700 text-base sm:text-lg leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ 
                    __html: decodedParagraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#111810]">$1</strong>')
                  }} 
                />
              ) : (
                <p className="text-gray-600 text-base sm:text-lg leading-[1.8] sm:leading-[1.9] font-light">{decodedParagraph}</p>
              )}
            </motion.div>
          )})}
        </motion.div>
      </section>

      {/* INLINE ENQUIRY FORM */}
      <section className="bg-[#fdfaf6] py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 p-6 sm:p-10 shadow-xl shadow-black/5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="text-center mb-6 sm:mb-8">
              <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a4a38] mx-auto mb-3" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810] mb-2 sm:mb-3">Interested in Our Oils?</h3>
              <p className="text-gray-600 font-light text-xs sm:text-sm max-w-lg mx-auto">Experience the purity and nutrition of cold-pressed oils. Fill out the form below to enquire.</p>
            </div>

            {submitted ? (
              <motion.div 
                className="bg-[#fdfaf6] rounded-2xl p-6 sm:p-8 text-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-[#1a4a38] text-[#e2a325] rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-serif text-[#111810] mb-1">Thank You!</h4>
                <p className="text-xs text-gray-500 font-light mb-4">We have received your enquiry and will get back to you shortly.</p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", product: article.title, becomeDealer: false, message: "" }); }}
                  className="text-xs text-[#1a4a38] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Your Name *</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      placeholder="Full Name" 
                      className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Email Address *</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      placeholder="you@example.com" 
                      className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light shadow-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                      placeholder="+91 89499 44620" 
                      className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Product Interest</label>
                    <input 
                      type="text" 
                      value={formData.product} 
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })} 
                      placeholder="Product Name" 
                      className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light shadow-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a4a38] mb-1.5 block">Your Message *</label>
                  <textarea 
                    required 
                    rows={3} 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    placeholder="Tell us what you're looking for..." 
                    className="w-full bg-[#fdfaf6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111810] focus:outline-none focus:border-[#1a4a38] transition placeholder:text-gray-400 font-light resize-none shadow-sm" 
                  />
                </div>

                <div className="pt-2 text-center">
                  <PrimaryButton type="submit" className="px-8 sm:px-10 py-3.5 text-xs tracking-widest shadow-lg shadow-black/5 w-full sm:w-auto text-center justify-center">
                    <Send size={14} className="mr-2" /> Send Enquiry
                  </PrimaryButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-8 sm:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-[1px] bg-[#e2a325]" />
                <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Keep Reading</h4>
                <div className="w-8 h-[1px] bg-[#e2a325]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810]">Related Stories</h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {related.map((a, idx) => (
                <motion.article 
                  key={a.slug} 
                  variants={staggerItem}
                  className={`bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 overflow-hidden group hover:border-[#1a4a38]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col hover:-translate-y-1 ${
                    idx === 2 ? "sm:col-span-2 lg:col-span-1 max-w-md sm:max-w-none mx-auto w-full" : ""
                  }`}
                >
                  <Link href={`/journal/${a.slug}`}>
                    <div className="aspect-[16/10] sm:aspect-[3/2] overflow-hidden bg-[#fdfaf6] relative">
                      <Image 
                        src={a.image} 
                        alt={a.title} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                    </div>
                  </Link>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#e2a325] bg-[#e2a325]/10 px-2.5 sm:px-3 py-1 rounded-full w-fit mb-2 sm:mb-3">{a.category}</span>
                    <Link href={`/journal/${a.slug}`}>
                      <h3 className="text-base sm:text-lg font-serif text-[#111810] mb-2 group-hover:text-[#1a4a38] transition-colors leading-tight">{a.title}</h3>
                    </Link>
                    <div className="flex items-center gap-3 text-[11px] sm:text-xs text-gray-400 font-light mt-auto pt-2">
                      <span className="flex items-center gap-1"><Calendar size={11} className="sm:w-3 sm:h-3" /> {a.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} className="sm:w-3 sm:h-3" /> {a.readTime}</span>
                    </div>
                  </div>
                </motion.article>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 sm:mt-12 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <Link href="/journal" className="flex items-center gap-2 text-[#1a4a38] hover:text-[#e2a325] transition-colors text-xs sm:text-sm font-medium">
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </motion.div>
        </div>
      </section>
      )}

      {/* RELATED PRODUCTS */}
      <div className="bg-[#fdfaf6] border-t border-gray-100">
        <ProductsSection />
      </div>

      {/* FAQ SECTION */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-10 sm:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-[#e2a325]" />
                <h4 className="text-[#1a4a38] text-[10px] font-bold tracking-[0.25em] uppercase">Learn More</h4>
                <div className="w-8 h-[1px] bg-[#e2a325]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#111810]">Common Questions</h2>
            </motion.div>
            <motion.div 
              className="bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 p-6 sm:p-8 md:p-12 shadow-xl shadow-black/5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {article.faqs.map((faq: any, i: number) => (<FAQItem key={i} q={faq.question} a={faq.answer} />))}
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

const JOURNAL_FAQS = [
  { q: "What is cold-pressed oil?", a: "Cold-pressed oil is extracted from seeds using a mechanical press at temperatures below 40°C, preserving the natural nutrients, flavour, and aroma without chemicals." },
  { q: "How is cold-pressed different from refined oil?", a: "Refined oils undergo chemical extraction and high-heat processing, stripping away nutrients. Cold-pressed oils retain 100% of their vitamins and antioxidants." },
  { q: "What is the shelf life?", a: "Our cold-pressed oils have a natural shelf life of 6–8 months. We recommend storing them in a cool, dark place away from direct sunlight." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div className="border-b border-gray-100 last:border-b-0" variants={staggerItem}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-start py-5 text-left group cursor-pointer gap-4">
        <h3 className="text-base sm:text-lg font-serif text-[#111810] group-hover:text-[#1a4a38] transition-colors leading-snug">{q}</h3>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown size={18} className="text-[#e2a325] mt-1" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pb-5 text-gray-600 font-light leading-relaxed text-sm pr-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
