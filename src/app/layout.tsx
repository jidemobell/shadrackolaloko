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
  metadataBase: new URL('https://shadrackolaloko.pages.dev'), // Replace with your actual domain
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Shadrack Olaloko - Nigerian Yoruba Christian Music Artist",
    description: "Nigerian Yoruba Christian music artist based in Ireland. Experience inspiring worship music and upcoming shows in Dublin.",
    type: "website",
    locale: "en_IE",
    siteName: "Shadrack Olaloko Official Website",
    url: "https://shadrackolaloko.pages.dev", // Replace with your actual domain
    images: [
      {
        url: "/opengraph-image", // Next.js will auto-generate this
        width: 1200,
        height: 630,
        alt: "Shadrack Olaloko - Nigerian Yoruba Christian Music Artist",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadrack Olaloko - Nigerian Yoruba Christian Music Artist",
    description: "Nigerian Yoruba Christian music artist based in Ireland. Experience inspiring worship music and upcoming shows in Dublin.",
    creator: "@shadrackolaloko", // Replace with actual Twitter handle if available
    images: ["/twitter-image"], // Next.js will auto-generate this
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
