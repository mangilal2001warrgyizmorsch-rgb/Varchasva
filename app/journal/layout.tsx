import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Journal & Articles on Healthy Living",
  description: "Read the Varchasva journal for tips on healthy cooking, Ayurvedic practices, and the incredible benefits of natural cold-pressed oils.",
  alternates: {
    canonical: '/journal',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
