import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auto.vatsalvadia.com"),
  title: "Vatsal Vadia | Auto Transport Performance Growth Systems",
  description: "We help auto transport companies turn paid traffic into booked shipments through high-converting funnels, performance marketing, and CRM automation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vatsal Vadia | Auto Transport Performance Growth Systems",
    description: "Lower cost per lead, improve quote-to-booking rates, and scale profitable campaigns.",
    url: "https://auto.vatsalvadia.com",
    siteName: "Auto Transport Growth Systems",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vatsal Vadia - Auto Transport Growth Systems",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsal Vadia | Auto Transport Performance Growth Systems",
    description: "Lower cost per lead, improve quote-to-booking rates, and scale profitable campaigns.",
    images: ["/images/og-image.png"],
  },
};

import { AuditModalProvider } from "@/context/AuditModalContext";
import Script from "next/script";

// Dynamically import AuditFunnelModal to eliminate its JS footprint from critical path loading
const AuditFunnelModal = dynamic(() => import("@/components/funnel/AuditFunnelModal"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Google Analytics - Loaded after page is interactive to optimize LCP/TBT */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3W43R3BT5T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3W43R3BT5T');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-brand-bg text-brand-white">
        <AuditModalProvider>
          {children}
          <AuditFunnelModal />
        </AuditModalProvider>
      </body>
    </html>
  );
}
