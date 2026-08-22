import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Varchasva",
  description: "Have questions about our cold-pressed oils or your order? Contact the Varchasva team today for support and inquiries.",
  alternates: {
    canonical: '/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
