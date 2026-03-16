import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novara Estate | Luxury Real Estate & Property Development",
  description:
    "Novara Estate — where architectural mastery meets refined living. Discover premium residences, iconic towers, and exclusive developments crafted for the discerning few.",
  keywords: "luxury real estate, premium property, residential development, high-end apartments, luxury homes",
  openGraph: {
    title: "Novara Estate | Luxury Real Estate",
    description: "Discover premium residences and iconic developments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-luxury-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
