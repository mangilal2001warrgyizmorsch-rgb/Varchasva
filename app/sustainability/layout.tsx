import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability & Eco-Friendly Practices",
  description: "Varchasva is committed to sustainable farming and eco-friendly packaging. Learn how our cold-pressed oils are good for you and the planet.",
  alternates: {
    canonical: '/sustainability',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
