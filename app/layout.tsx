import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Olivia Ratajzak | Team Lead · People · Delivery · Transformation',
  description: 'Team Leadership für crossfunktionale Tech-Teams – Klarheit für Menschen, Struktur für Veränderung.',
  openGraph: {
    title: 'Olivia Ratajzak | Team Lead',
    description: 'Klarheit für Menschen. Struktur für Veränderung.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olivia Ratajzak | Team Lead',
    description: 'Klarheit für Menschen. Struktur für Veränderung.',
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
