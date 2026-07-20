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
  metadataBase: new URL("https://niryamedia.com"),

  title: {
    default: "NiryaMedia | Connecting Brands With Creators",
    template: "%s | NiryaMedia",
  },

  description:
    "NiryaMedia is an influencer marketing agency connecting brands with trusted creators across Gaming, Tech, Finance, Lifestyle and Entertainment.",

  keywords: [
    "NiryaMedia",
    "Influencer Marketing",
    "Creator Management",
    "Brand Collaborations",
    "YouTube Influencers",
    "Instagram Influencers",
    "Gaming Creators",
    "Tech Creators",
    "India Influencer Agency",
  ],

  authors: [
  {
    name: "Sunil Kumar & Riya Pathak",
  },
],

  creator: "NiryaMedia",

  publisher: "NiryaMedia",

  openGraph: {
    title: "NiryaMedia | Connecting Brands With Creators",
    description:
      "Discover top creators and collaborate with leading brands through NiryaMedia.",

    url: "https://niryamedia.com",

    siteName: "NiryaMedia",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NiryaMedia",

    description:
      "Connecting Brands With Creators",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
/>