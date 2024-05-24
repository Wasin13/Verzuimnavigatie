import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verzuimnavigator",
  description: "Powered by Metaalunie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={monsterrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}