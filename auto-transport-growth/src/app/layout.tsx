import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Vatsal Vadia | Auto Transport Performance Growth Systems",
  description: "We help auto transport companies turn paid traffic into booked shipments through high-converting funnels, performance marketing, and CRM automation.",
  openGraph: {
    title: "Vatsal Vadia | Auto Transport Performance Growth Systems",
    description: "Lower cost per lead, improve quote-to-booking rates, and scale profitable campaigns.",
    type: "website",
    locale: "en_US",
  },
};

import { AuditModalProvider } from "@/context/AuditModalContext";
import AuditFunnelModal from "@/components/funnel/AuditFunnelModal";

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
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-brand-bg text-brand-white">
        <AuditModalProvider>
          {children}
          <AuditFunnelModal />
        </AuditModalProvider>
      </body>
    </html>
  );
}
