import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/context/cart";
import NavBar from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cultiv8VI - Virgin Islands Agricultural Marketplace",
  description:
    "Connecting Virgin Islands farmers with local restaurants, bakeries, and food businesses",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <NavBar />
          <Suspense fallback={<p>Loading...</p>}>
          <main>{children}</main>
          </Suspense>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
