"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Trash2, Search } from "lucide-react";
import toast from "react-hot-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function AdminJournalPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchArticles = () => {
    setLoading(true);
    fetch("/api/journal")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setArticles(data.data);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      try {
        const res = await fetch(`/api/journal/${id}`, { method: "DELETE" });
        if (res.ok) {
          toast.success("Article deleted successfully");
          fetchArticles();
        } else {
          toast.error("Failed to delete article");
        }
      } catch (err) {
        toast.error("Failed to delete article");
      }
    }
  };

  const filteredArticles = articles.filter(article => 
    article.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#1a4a38] tracking-tight">Journal Articles</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your blog posts and updates.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-9 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link href="/admin/journal/new">
            <Button className="bg-[#1a4a38] hover:bg-[#111810] text-white">
              <Plus className="mr-2 h-4 w-4" /> New Article
            </Button>
          </Link>
        </div>
      </div>
      
      <Card className="shadow-sm border-gray-100/60 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="w-[300px]">Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                    <div className="flex justify-center items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-[#1a4a38] border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading articles...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredArticles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                    No articles found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredArticles.map((article) => (
                  <TableRow key={article._id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-medium text-gray-900">
                      {article.title}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600 font-medium">
                        {article.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {article.date}
                    </TableCell>
                    <TableCell>
                      {article.isPublished ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Published
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Draft
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => handleDelete(article._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
