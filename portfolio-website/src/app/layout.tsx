import './globals.css';
import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Interactive Portfolio | Software Engineer',
  description: 'Portfolio website showcasing software engineering projects with interactive Rive animations',
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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
