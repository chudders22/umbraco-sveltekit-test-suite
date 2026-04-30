import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import Header from '@/lib/components/Header/Header';
import Footer from '@/lib/components/Footer/Footer';
import { fetchHeader, fetchFooter } from '@/lib/utils/umbracoApi';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Umbraco Next.js',
  description: 'Umbraco headless CMS with Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [header, footer] = await Promise.all([fetchHeader(), fetchFooter()]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50">
            <Header {...(header ?? {})} />
            {children}
            <Footer {...(footer ?? {})} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
