import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ahmed Hisham | Software Engineer',
  description: 'Portfolio website of Ahmed Hisham, a software engineer and creative developer',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
