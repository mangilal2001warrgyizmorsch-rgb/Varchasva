"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2, Plus, Trash2, Upload } from "lucide-react";
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import Link from "next/link";
import toast from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";

export default function NewJournalPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    readTime: "5 min read",
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    image: "/journal/placeholder.jpg",
    excerpt: "",
    content: "",
    isPublished: true,
    metaTitle: "",
    metaDescription: "",
    faqs: [{ question: "", answer: "" }],
  });

  const handleAddFaq = () => {
    setFormData({ ...formData, faqs: [...formData.faqs, { question: "", answer: "" }] });
  };

  const handleRemoveFaq = (index: number) => {
    const newFaqs = formData.faqs.filter((_, i) => i !== index);
    setFormData({ ...formData, faqs: newFaqs });
  };

  const handleFaqChange = (index: number, field: "question" | "answer", value: string) => {
    const newFaqs = [...formData.faqs];
    newFaqs[index][field] = value;
    setFormData({ ...formData, faqs: newFaqs });
  };

  const handleHtmlUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const htmlContent = event.target?.result as string;
      setFormData({ ...formData, content: htmlContent });
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append("file", file);

    const loadingToast = toast.loading("Uploading image...");
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setFormData({ ...formData, image: data.url });
        toast.success("Image uploaded!", { id: loadingToast });
      } else {
        toast.error(data.error || "Upload failed", { id: loadingToast });
      }
    } catch (err) {
      toast.error("Error uploading image", { id: loadingToast });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = { ...formData };

      const res = await fetch("/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Article created successfully!");
        router.push("/admin/journal");
      } else {
        toast.error("Failed to create article");
      }
    } catch (err) {
      toast.error("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 space-y-6">
      <Link href="/admin/journal" className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#1a4a38] text-sm font-medium transition-colors">
        <ArrowLeft size={16} /> Back to Articles
      </Link>
      
      <div>
        <h1 className="text-2xl font-bold font-serif text-[#1a4a38] tracking-tight">Create New Article</h1>
        <p className="text-sm text-muted-foreground mt-1">Publish a new post to your Varchasva journal.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="shadow-sm border-gray-100/60 overflow-hidden">
          <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-6">
            <CardTitle className="text-lg">Article Details</CardTitle>
            <CardDescription>Fill in the metadata and content for the new article.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="title">Article Title <span className="text-red-500">*</span></Label>
              <Input
                id="title"
                required
                type="text"
                placeholder="e.g. The Benefits of Cold-Pressed Oils"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="bg-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                <Input
                  id="category"
                  required
                  type="text"
                  placeholder="e.g. Wellness, Science, Farms"
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Featured Image <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="image"
                    required={!formData.image || formData.image === "/journal/placeholder.jpg"}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="bg-white cursor-pointer"
                  />
                  {formData.image && formData.image !== "/journal/placeholder.jpg" && (
                    <div className="h-10 w-16 shrink-0 relative rounded overflow-hidden border border-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={formData.image} alt="Preview" className="object-cover w-full h-full" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt <span className="text-red-500">*</span></Label>
              <Textarea
                id="excerpt"
                required
                rows={2}
                placeholder="A brief summary of the article..."
                value={formData.excerpt}
                onChange={e => setFormData({...formData, excerpt: e.target.value})}
                className="bg-white resize-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="content">Content <span className="text-red-500">*</span></Label>
                <div>
                  <input
                    type="file"
                    id="html-upload"
                    accept=".html"
                    className="hidden"
                    onChange={handleHtmlUpload}
                  />
                  <Label 
                    htmlFor="html-upload" 
                    className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#1a4a38] bg-[#1a4a38]/10 hover:bg-[#1a4a38]/20 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <Upload size={14} /> Upload HTML
                  </Label>
                </div>
              </div>
              <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(val) => setFormData({...formData, content: val})}
                  className="h-96"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-[#1a4a38] mb-4">SEO & Metadata</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    type="text"
                    placeholder="Leave blank to use article title..."
                    value={formData.metaTitle}
                    onChange={e => setFormData({...formData, metaTitle: e.target.value})}
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    rows={2}
                    placeholder="Leave blank to use article excerpt..."
                    value={formData.metaDescription}
                    onChange={e => setFormData({...formData, metaDescription: e.target.value})}
                    className="bg-white resize-none"
                  />
                </div>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#1a4a38]">Frequently Asked Questions</h3>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={handleAddFaq}
                  className="text-xs flex items-center gap-1 border-gray-200 cursor-pointer"
                >
                  <Plus size={14} /> Add FAQ
                </Button>
              </div>
              
              <div className="space-y-4">
                {formData.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 border border-gray-100 rounded-lg bg-gray-50/30 relative group">
                    <button 
                      type="button"
                      onClick={() => handleRemoveFaq(idx)}
                      className="absolute right-2 top-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Remove FAQ"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="space-y-3 pr-8">
                      <div className="space-y-1">
                        <Label className="text-xs text-gray-500">Question {idx + 1}</Label>
                        <Input
                          type="text"
                          placeholder="e.g. How is cold-pressed oil made?"
                          value={faq.question}
                          onChange={e => handleFaqChange(idx, "question", e.target.value)}
                          className="bg-white h-9"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-gray-500">Answer {idx + 1}</Label>
                        <Textarea
                          rows={2}
                          placeholder="Enter the detailed answer..."
                          value={faq.answer}
                          onChange={e => handleFaqChange(idx, "answer", e.target.value)}
                          className="bg-white resize-none text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                {formData.faqs.length === 0 && (
                  <div className="text-center py-6 text-sm text-gray-400 border border-dashed border-gray-200 rounded-lg">
                    No FAQs added yet.
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 pb-2 border-t border-gray-100">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.isPublished}
                  onChange={e => setFormData({...formData, isPublished: e.target.checked})}
                  className="h-4 w-4 rounded border-gray-300 text-[#1a4a38] focus:ring-[#1a4a38] transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="published" className="font-medium">Publish immediately</Label>
                <p className="text-xs text-muted-foreground">If unchecked, the article will be saved as a draft.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50/50 border-t border-gray-100 px-6 py-4 flex justify-end gap-3">
            <Link href="/admin/journal">
              <Button variant="outline" type="button" disabled={loading}>
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#1a4a38] hover:bg-[#111810] text-white shadow-sm shadow-[#1a4a38]/20"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Article
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
