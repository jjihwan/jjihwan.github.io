import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const googleSans = localFont({
  src: [
    {
      path: "./fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-google-sans",
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
    <html lang="en" className={`${googleSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
