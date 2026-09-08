import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
