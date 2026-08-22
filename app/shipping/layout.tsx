import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns Policy",
  description: "Find information on Varchasva's shipping rates, delivery times, and returns policy for our cold-pressed natural oils.",
  alternates: {
    canonical: '/shipping',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
