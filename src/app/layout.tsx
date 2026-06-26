import type { Metadata } from "next";
import { inter, playfairDisplay, cormorantGaramond } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import EtherWavesBackground from "@/components/lightswind/ether-waves-background";
import CustomCursor from "@/components/ui/custom-cursor";

export const metadata: Metadata = {
  title: "Nexara | Bridging Languages, Connecting Global Events",
  description: "Providing bespoke linguistic solutions for elite international summits, multinational corporations, and critical diplomatic missions across the globe.",
  openGraph: {
    title: "Nexara | Bridging Languages, Connecting Global Events",
    description: "Bespoke language translation, simultaneous interpretation, and executive cross-cultural training across India.",
    type: "website",
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
      className={`${inter.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-muted selection:bg-gold selection:text-black relative">
        <EtherWavesBackground className="fixed inset-0 -z-10" />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow flex flex-col pt-0 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


