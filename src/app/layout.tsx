import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wanani Mamidza | Software Developer",
  description: "Portfolio of Wanani Mamidza, a Computer Science graduate and emerging software developer with experience in web development, database management, and object-oriented programming.",
  keywords: ["software developer", "web development", "Java", "JavaScript", "portfolio"],
  authors: [{ name: "Wanani Mamidza" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wanani-portfolio.vercel.app",
    title: "Wanani Mamidza | Software Developer",
    description: "Portfolio of Wanani Mamidza, Computer Science graduate and emerging software developer",
    images: [
      {
        url: "https://wanani-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wanani Mamidza Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://wanani-portfolio.vercel.app" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-dark-bg text-text-primary">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
