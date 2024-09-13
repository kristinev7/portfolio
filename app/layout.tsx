import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const tomorrow = Tomorrow({ subsets: ['latin'],  weight: ['400', '500', '400'], });

export const metadata: Metadata = {
  title: "Kristine Veneles",
  description: "Portfolio using create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tomorrow.className}>
        <Navbar />
        <div className="content-wrapper pb-48">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
