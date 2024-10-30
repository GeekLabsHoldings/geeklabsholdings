import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Geek Labs Holdings",
  description:
    "Geek Labs Holdings is a privately held mergers and acquisitions firm focused on media and technology assets. We specialize in identifying promising startup media brands and turning them into substantial businesses.",
  // Basic metadata
  keywords: ["mergers", "acquisitions", "media", "technology", "startups"],
  authors: [{ name: "Geek Labs Holdings" }],
  // Open Graph metadata
  openGraph: {
    title: "Geek Labs Holdings",
    description:
      "Geek Labs Holdings is a privately held mergers and acquisitions firm focused on media and technology assets.",
    url: "https://www.geeklabs.agency",
    siteName: "Geek Labs Holdings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Geek Labs Holdings",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Geek Labs Holdings",
    description:
      "Geek Labs Holdings is a privately held mergers and acquisitions firm focused on media and technology assets.",
    creator: "@geeklabsholding",
    images: ["/logo.png"], // Make sure to add this image to your public folder
  },

  // Robots metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
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
