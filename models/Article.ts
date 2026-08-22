import mongoose, { Schema, Document, models } from "mongoose";

export interface IArticle extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or HTML
  category: string;
  image: string;
  readTime: string;
  date: string;
  isPublished: boolean;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: { question: string; answer: string }[];
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    readTime: { type: String, required: true },
    date: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    faqs: [
      {
        question: { type: String },
        answer: { type: String }
      }
    ]
  },
  { timestamps: true }
);

if (mongoose.models.Article) {
  delete mongoose.models.Article;
}
export const Article = mongoose.model<IArticle>("Article", ArticleSchema);
