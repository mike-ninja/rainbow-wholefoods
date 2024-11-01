import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "400", "700", "900"],
});

const noto_serif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto_serif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${noto_serif.variable} antialiased relative`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
