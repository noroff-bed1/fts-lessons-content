import type { Metadata } from 'next';
import './globals.css';
import PageHeader from '@components/PageHeader';
import { inter, montserrat } from './fonts'; // Importing the inter font
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      {/* Adding the inter font to our html element */}
      <body className="bg-background h-screen m-0">
        <div className="flex flex-col h-full">
          <div className="h-20 bg-background-light">
            <PageHeader />
          </div>
          <div className="flex-1">
            <div className="container h-full mx-auto p-4">{children}</div>
          </div>
          <footer className="h-32 bg-background-dark">
            <div className="container h-full mx-auto p-4">Footer</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
