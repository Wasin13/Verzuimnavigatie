import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Hotjar from '@hotjar/browser';

const siteId = 4997446;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

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