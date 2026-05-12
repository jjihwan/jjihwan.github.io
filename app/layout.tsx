import type { Metadata } from "next";
import { Open_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jihwan Kim",
  description: "Student Researcher at Google DeepMind / Seoul National University Computer Vision Lab",
  keywords: ["AI", "Artificial Intelligence", "Computer Vision", "Diffusion Models", "Video Generation", "Vision-Language Models", "Seoul National University", "Jihwan Kim"],
  authors: [{ name: "Jihwan Kim" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jjihwan.github.io",
    siteName: "Jihwan Kim",
    title: "Jihwan Kim",
    description: "DeepMind / SNU CVLAB",
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
    title: "Jihwan Kim",
    description: "DeepMind / SNU CVLAB",
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
        className={`${openSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
