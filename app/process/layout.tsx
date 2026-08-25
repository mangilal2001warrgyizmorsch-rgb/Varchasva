import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Extraction Process | modern cold press machine",
  description: "Discover how Varchasva oils are extracted using the modern cold press machine (Lakdi Ghani) method to retain zero heat and 100% natural nutrients.",
  alternates: {
    canonical: '/process',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
