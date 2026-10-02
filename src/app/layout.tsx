import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://les-fripouilles-de-coin.vercel.app'),
  title: "Les Fripouilles de Coin • Friperie & Seconde Main à Coin-lès-Cuvry",
  description: "Friperie locale et sélection soignée de seconde main au 71 Rue de la Fontenelle, 57420 Coin-lès-Cuvry. Vêtements bébés, enfants, femmes, hommes et puériculture. Arrivages réguliers sur Facebook & Instagram, boutique en ligne Vinted.",
  keywords: [
    "friperie",
    "seconde main",
    "Coin-lès-Cuvry",
    "Moselle",
    "Metz",
    "vêtements occasion",
    "puériculture",
    "mode circulaire",
    "Les Fripouilles de Coin"
  ],
  authors: [{ name: "Les Fripouilles de Coin" }],
  openGraph: {
    title: "Les Fripouilles de Coin • Friperie Locale à Coin-lès-Cuvry",
    description: "Mode circulaire, pépites soignées et petits prix pour toute la famille au 71 Rue de la Fontenelle à Coin-lès-Cuvry. Retrouvez nos nouveautés sur Facebook, Instagram et notre dressing Vinted !",
    url: "https://les-fripouilles-de-coin.vercel.app",
    siteName: "Les Fripouilles de Coin",
    images: [
      {
        url: "/assets/les-fripouilles-logo.jpg",
        width: 820,
        height: 332,
        alt: "Logo officiel Les Fripouilles de Coin",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/assets/les-fripouilles-logo.jpg",
    apple: "/assets/les-fripouilles-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
