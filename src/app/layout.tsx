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
  title: {
    template: '%s | Shadrack Olaloko',
    default: 'Shadrack Olaloko - Nigerian Yoruba Christian Music Artist',
  },
  description: "Shadrack Olaloko is a Nigerian Yoruba Christian music artist based in Ireland. Experience inspiring worship music and upcoming shows in Dublin.",
  keywords: ["Shadrack Olaloko", "Nigerian music", "Yoruba music", "Christian music", "Ireland", "Dublin", "worship music"],
  authors: [{ name: "Shadrack Olaloko" }],
  creator: "Shadrack Olaloko",
  openGraph: {
    title: "Shadrack Olaloko - Nigerian Yoruba Christian Music Artist",
    description: "Nigerian Yoruba Christian music artist based in Ireland. Experience inspiring worship music and upcoming shows in Dublin.",
    type: "website",
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
