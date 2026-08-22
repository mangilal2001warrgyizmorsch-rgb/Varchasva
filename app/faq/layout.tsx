import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Cold-Pressed Oils",
  description: "Find answers to common questions about Varchasva's cold-pressed oils, extraction methods, health benefits, and shipping policies.",
  alternates: {
    canonical: '/faq',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
