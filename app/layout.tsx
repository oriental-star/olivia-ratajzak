import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Olivia Ratajzak | Team Lead & Senior IT Project Manager',
  description: 'Leadership, Projektsteuerung und digitale Transformation an der Schnittstelle von Menschen, Struktur und Technologie.',
  openGraph: {
    title: 'Olivia Ratajzak | Leadership · Decisions · Delivery',
    description: 'Team Leadership und komplexe IT-Delivery – belegt durch ausgewählte Cases.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olivia Ratajzak | Leadership · Decisions · Delivery',
    description: 'Team Leadership und komplexe IT-Delivery – belegt durch ausgewählte Cases.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
