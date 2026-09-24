import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["600"],
});

const siteUrl = "https://pranosh-portfolio.vercel.app";
const description =
  "I build full-stack AI pipelines that survive a live demo, not just a notebook.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pranosh M",
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Pranosh M",
    description,
    url: siteUrl,
    siteName: "Pranosh M",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranosh M",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
