import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEEZ - Little is Enough | Premium Perfume Brand",
  description:
    "Discover SEEZ premium perfumes. Bold, Dusk & Noir — crafted for those who know little is enough.",
  keywords:
    "SEEZ,perfume,premium perfume,Bold perfume,Dusk perfume,Noir perfume,luxury fragrances,little is enough",
  robots: "index, follow",
  openGraph: {
    title: "SEEZ - Little is Enough | Premium Perfume Brand",
    description:
      "Discover SEEZ premium perfumes. Bold, Dusk & Noir — crafted for those who know little is enough.",
    url: "https://seez.com",
    siteName: "SEEZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEEZ – Little is Enough | Premium Perfume Brand",
    description:
      "SEEZ premium perfumes — Bold, Dusk & Noir. Little is enough.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const models = [
                  '/3dModels/bold.glb',
                  '/3dModels/dusk.glb',
                  '/3dModels/noir.glb',
                  '/hdr/venice_sunset_1k.exr'
                ];
                if (typeof fetch !== 'undefined') {
                  fetch(models[0], { method: 'GET', mode: 'cors', credentials: 'omit', cache: 'default' }).catch(() => {});
                  const loadOthers = () => {
                    models.slice(1).forEach(url => {
                      fetch(url, { method: 'GET', mode: 'cors', credentials: 'omit', cache: 'default' }).catch(() => {});
                    });
                  };
                  if (window.requestIdleCallback) {
                    requestIdleCallback(loadOthers, { timeout: 2000 });
                  } else {
                    setTimeout(loadOthers, 100);
                  }
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SEEZ",
              description:
                "Premium perfume brand — Little is Enough",
              url: "https://seez.com",
              logo: "https://seez.com/icon.png",
              foundingDate: "2024",
              slogan: "Little is Enough",
              sameAs: [
                "https://www.facebook.com/seez",
                "https://www.instagram.com/seez",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "SEEZ Premium Perfume Collection",
              description: "Available perfumes: Bold, Dusk, Noir",
              itemListElement: [
                {
                  "@type": "Product",
                  position: 1,
                  name: "Bold Perfume",
                  description: "Premium perfume — Little is Enough",
                  url: "https://seez.com/product/bold",
                },
                {
                  "@type": "Product",
                  position: 2,
                  name: "Dusk Perfume",
                  description: "Premium perfume — Little is Enough",
                  url: "https://seez.com/product/dusk",
                },
                {
                  "@type": "Product",
                  position: 3,
                  name: "Noir Perfume",
                  description:
                    "Premium perfume — Little is Enough",
                  url: "https://seez.com/product/noir",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden bg-seez-black text-seez-gray-warm font-sans">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
