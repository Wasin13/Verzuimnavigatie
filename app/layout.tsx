import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import useHotjar from '@/app/hotjar'; // Adjust the path according to your project structure

const siteId = 4997446;
const hotjarVersion = 6;

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
  useHotjar(siteId, hotjarVersion);

  return (
    <html lang="nl">
      <body className={monsterrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
