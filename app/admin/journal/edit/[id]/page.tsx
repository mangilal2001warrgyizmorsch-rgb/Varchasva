"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";

export default function EditJournalPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    readTime: "5 min read",
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    image: "/journal/placeholder.jpg",
    excerpt: "",
    content: "",
    isPublished: true,
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/journal/${id}`);
        const data = await res.json();
        if (data.success && data.data) {
          const article = data.data;
          setFormData({
            title: article.title || "",
            category: article.category || "",
            readTime: article.readTime || "5 min read",
            date: article.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            image: article.image || "",
            excerpt: article.excerpt || "",
            content: article.content ? (typeof article.content === 'string' ? JSON.parse(article.content) : article.content).join('\n\n') : "",
            isPublished: article.isPublished ?? true,
          });
        }
      } catch (err) {
        toast.error("Failed to load article");
      } finally {
        setFetching(false);
      }
    };
    fetchArticle();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert paragraphs to an array of strings
      const contentArray = formData.content.split('\n\n').filter(p => p.trim() !== '');

      const payload = {
        ...formData,
        content: JSON.stringify(contentArray)
      };

      const res = await fetch(`/api/journal/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Article updated successfully!");
        router.push("/admin/journal");
      } else {
        toast.error("Failed to update article");
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
        <h1 className="text-2xl font-bold font-serif text-[#1a4a38] tracking-tight">Edit Article</h1>
        <p className="text-sm text-muted-foreground mt-1">Update your Varchasva journal post.</p>
      </div>

      {fetching ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-[#1a4a38]" />
        </div>
      ) : (
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
                <Label htmlFor="image">Featured Image URL <span className="text-red-500">*</span></Label>
                <Input
                  id="image"
                  required
                  type="text"
                  placeholder="/journal/image.jpg"
                  value={formData.image}
                  onChange={e => setFormData({...formData, image: e.target.value})}
                  className="bg-white"
                />
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
              <Label htmlFor="content">Content <span className="text-red-500">*</span></Label>
              <div className="rounded-md border border-gray-200 bg-gray-50/50 p-2 mb-2">
                <p className="text-xs text-muted-foreground font-medium">Tip: Separate paragraphs by leaving a blank line between them.</p>
              </div>
              <Textarea
                id="content"
                required
                rows={12}
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
                className="bg-white"
                placeholder="Write your full article here..."
              />
            </div>

            <div className="flex items-center gap-3 pt-4 pb-2 border-t border-gray-100">
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
      )}
    </div>
  );
}
