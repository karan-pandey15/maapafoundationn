import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maapa Foundation | Empowering Communities",
  description: "MAAPA Foundation is committed to empowering communities through education, healthcare, and sustainable development. Learn more about our initiatives and how you can contribute.",
  keywords: "maapa, maapa foundation, maapafoundation, community support, education, healthcare, sustainable development",
  robots: "index, follow",
  canonical: "https://www.maapafoundation.org",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-your-image.jpg" /> {/* Replace with actual image path */}
 
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />

     
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
