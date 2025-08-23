import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";

const mozillaText = localFont({
  src: [
    {
      path: "../public/fonts/MozillaText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mozilla-text",
  display: "swap",
});

const mozillaHeadline = localFont({
  src: [
    {
      path: "../public/fonts/MozillaHeadline-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mozilla-headline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lisa Tech",
  description:
    "AI-powered drone waste management system by Silvera Automotives",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.jpg" />
      </head>
      <body
        className={`${mozillaText.variable} ${mozillaHeadline.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
