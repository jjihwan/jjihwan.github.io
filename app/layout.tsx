import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jihwan Kim - AI Researcher",
  description: "Master's student in Interdisciplinary Program in Artificial Intelligence at Seoul National University. Research interests include autoregressive diffusion models, memory-augmented video generation, and vision-language models.",
  keywords: ["AI", "Artificial Intelligence", "Computer Vision", "Diffusion Models", "Video Generation", "Vision-Language Models", "Seoul National University"],
  authors: [{ name: "Jihwan Kim" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jjihwan.github.io",
    siteName: "Jihwan Kim",
    title: "Jihwan Kim - AI Researcher",
    description: "Master's student in Interdisciplinary Program in Artificial Intelligence at Seoul National University",
    images: [
      {
        url: "https://jjihwan.github.io/images/profile.jpeg",
        width: 800,
        height: 800,
        alt: "Jihwan Kim",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Jihwan Kim - AI Researcher",
    description: "Master's student in Interdisciplinary Program in Artificial Intelligence at Seoul National University",
    creator: "@jji_hwannn",
  },
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
      </body>
    </html>
  );
}
