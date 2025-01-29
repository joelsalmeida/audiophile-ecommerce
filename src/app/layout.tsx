'use client';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '@/styles/global.scss';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ApolloWrapper } from '@/lib/apollo-client/apollo-wrapper';
import { MiniCartContextProvider } from '@/contexts/mini-cart-context';

const manrope = Manrope({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Audiophile E-commerce',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={manrope.className}>
          <ApolloWrapper>
            <MiniCartContextProvider>
              <Header />
            </MiniCartContextProvider>

            {children}
            <Footer />
          </ApolloWrapper>
        </body>
      </html>
    </>
  );
}
