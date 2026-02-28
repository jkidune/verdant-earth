import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "GEA — Global Environmental Alliance",
  description:
    "A global alliance dedicated to preserving biodiversity, combating climate change, and ensuring a sustainable future for all life on Earth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}</body>
    </html>
  );
}