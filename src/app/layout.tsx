import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}