import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aljaž Strnad",
  description: "Software engineer, Computer Science student and much more!",
  keywords: [
    "Aljaž Strnad",
    "aljaz",
    "strnad",
    "aljaz strnad",
    "Aljaž",
    "Strnad",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Izdelava spletnih strani",
    "spletne strani",
    "splet",
    "strani",
    "webpages",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
