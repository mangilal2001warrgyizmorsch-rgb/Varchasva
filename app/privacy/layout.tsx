import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Varchasva's privacy policy to understand how we collect, use, and protect your personal data.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
