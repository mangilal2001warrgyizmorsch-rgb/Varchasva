import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Premium Cold-Pressed Oils | Coconut, Mustard, Sesame",
  description: "Browse our collection of 100% pure cold-pressed oils. From Kachi Ghani Mustard to extra virgin Coconut oil, find the perfect healthy addition to your kitchen.",
  alternates: {
    canonical: '/products',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
