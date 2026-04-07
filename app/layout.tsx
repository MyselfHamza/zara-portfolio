import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaradesigns.com"),
  title: {
    default: "Zara — Presentation Designer & Pitch Deck Specialist",
    template: "%s | Zara Designs",
  },
  description:
    "Professional presentation designer with 6+ years of experience crafting pitch decks, corporate presentations, and brand identities for clients including Red Hat, Cisco, TikTok, Cloudflare, and McDonald's.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Zara — Presentation Designer & Pitch Deck Specialist",
    description: "Professional presentation designer with 6+ years of experience. 348+ projects delivered. 4.9 rating.",
    url: "https://zaradesigns.com",
    siteName: "Zara Designs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zara — Presentation Designer & Pitch Deck Specialist",
    description: "Professional presentation designer. 348+ projects. 4.9 rating.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrumentSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
