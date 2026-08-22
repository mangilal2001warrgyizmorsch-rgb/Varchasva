import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Heritage & Commitment to Purity",
  description: "Learn about Varchasva's journey. We are dedicated to reviving ancient wellness through honestly crafted, seed-to-bottle cold-pressed natural oils.",
  alternates: {
    canonical: '/about',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
