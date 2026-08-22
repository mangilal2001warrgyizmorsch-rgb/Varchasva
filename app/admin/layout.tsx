import { Metadata } from "next";
import AdminLayoutClient from "./AdminLayout";

export const metadata: Metadata = {
  title: "Admin Dashboard | Varchasva",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
