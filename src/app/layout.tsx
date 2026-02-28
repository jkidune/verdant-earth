import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Import it here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verdant Earth",
  description: "A Greener Tomorrow, Today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        
        {/* The 'flex-grow' ensures that if a page is short, the footer stays at the very bottom! */}
        <div className="flex-grow"> 
          {children}
        </div>
        
        <Footer /> {/* 2. Place it here! */}
        <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
      </body>
    </html>
  );
}