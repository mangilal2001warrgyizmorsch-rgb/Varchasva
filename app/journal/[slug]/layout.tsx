import { Metadata } from "next";
import connectToDatabase from "../../../lib/mongodb";
import { Article } from "../../../models/Article";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    await connectToDatabase();
    const article = await Article.findOne({ slug }).lean();
    
    if (!article) {
      return {
        title: "Article Not Found | Varchasva",
      };
    }

    return {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      alternates: {
        canonical: `/journal/${slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for journal:", error);
    return {
      title: "Wellness Journal | Varchasva",
    };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
