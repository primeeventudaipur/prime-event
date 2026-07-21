import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prime-event-mauve.vercel.app"),

  title: {
    default: "Prime Event Udaipur | Luxury Wedding & Event Planner",
    template: "%s | Prime Event Udaipur",
  },

  description:
    "Prime Event Udaipur is a luxury wedding and event management company specializing in royal weddings, destination weddings, corporate events, birthday celebrations, engagement ceremonies, haldi, mehndi, reception planning, photography, decoration and premium event experiences in Rajasthan.",

  keywords: [
    "Prime Event Udaipur",
    "Wedding Planner Udaipur",
    "Destination Wedding Rajasthan",
    "Luxury Wedding Planner",
    "Royal Wedding Planner",
    "Event Management Udaipur",
    "Birthday Planner",
    "Corporate Event Planner",
    "Haldi Decoration",
    "Mehndi Planner",
    "Reception Planner",
    "Photography",
    "Wedding Decoration",
    "Best Event Planner Rajasthan",
  ],

  authors: [
    {
      name: "Prime Event",
    },
  ],

  creator: "Prime Event",

  publisher: "Prime Event",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Prime Event Udaipur",
    description:
      "Luxury Wedding & Event Management Company in Udaipur, Rajasthan.",

    url: "https://primeeventudaipur.com",

    siteName: "Prime Event",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Event Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Prime Event Udaipur",

    description:
      "Luxury Wedding & Event Planner in Udaipur.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Wedding & Events",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html
    lang="en-IN"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-BQ08LB9MZ8"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-BQ08LB9MZ8');
  `}
</Script>

      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventPlanner",

            name: "Prime Event",

            url: "https://primeeventudaipur.com",

            logo: "https://primeeventudaipur.com/logo.png",

            image: "https://primeeventudaipur.com/images/hero.jpg",

            telephone: "+91-9876543210",

            email: "info@primeeventudaipur.in",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Udaipur",
              addressRegion: "Rajasthan",
              addressCountry: "IN",
            },

            areaServed: "Rajasthan",

            priceRange: "₹₹₹",

            description:
              "Prime Event is a luxury wedding and event management company in Udaipur specializing in destination weddings, royal weddings, corporate events, birthdays, receptions and premium celebrations.",

            sameAs: [
              "https://facebook.com/",
              "https://instagram.com/",
              "https://wa.me/919876543210",
            ],
          }),
        }}
      />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#090909",
            color: "#FFD700",
            border: "1px solid #FFD700",
          },
        }}
      />

      <Navbar />

<main className="pt-28">
  {children}
</main>

    </body>
  </html>
);
}
