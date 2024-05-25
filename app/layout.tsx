// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import HotjarClient from "@/app/hotjar"; // Adjust the path according to your project structure

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verzuimnavigator",
  description: "Powered by Metaalunie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={monsterrat.className}>
        <Navbar />
        <HotjarClient /> {/* Initialize Hotjar here */}
        {children}
      </body>
    </html>
  );
}
