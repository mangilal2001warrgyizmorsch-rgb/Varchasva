import { Metadata } from "next";
import { getProductBySlug } from "../../../constants/products";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: "Product Not Found | Varchasva",
    };
  }

  return {
    title: `${product.title} Cold-Pressed Oil | 100% Natural`,
    description: `${product.description.slice(0, 150)}... - Buy 100% pure cold-pressed ${product.title} oil online from Varchasva.`,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
