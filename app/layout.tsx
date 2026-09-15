import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "../components/Analytics";
import { contentByLocale } from "../content/i18n";
const siteContent = contentByLocale["zh-hk"];
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.canonicalUrl),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  alternates: { canonical: "/", languages: { "zh-HK": "/", en: "/en/", "zh-CN": "/zh-cn/", "x-default": "/" } },
  applicationName: "Mantle Intelligence",
  openGraph: {
    type: "website",
    locale: "zh_HK",
    url: "/",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    siteName: "Mantle Intelligence",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Mantle Intelligence — Control for enterprise AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon-v2.svg?v=20260827", type: "image/svg+xml" }],
    shortcut: "/favicon-v2.svg?v=20260827",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-HK">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
