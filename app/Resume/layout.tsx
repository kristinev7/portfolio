import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kristine Veneles",
  description: "Portfolio using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={tomorrow.className}>
        <div className="content-wrapper pb-48">{children}</div>
      </div>
    </div>
  );
}
