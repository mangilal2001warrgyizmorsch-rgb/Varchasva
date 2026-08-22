import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Benefits of Cold-Pressed Oils",
  description: "Explore the amazing health, skin, and hair benefits of using unrefined, cold-pressed oils rich in natural antioxidants and essential fatty acids.",
  alternates: {
    canonical: '/benefits',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
