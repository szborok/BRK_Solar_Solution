import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRK Solar - Powering a Greener Future",
  description: "Professional solar panel installation and energy solutions. We handle system design, paperwork, sizing, and complete installation for your sustainable energy needs.",
};

const locales = ['en', 'de', 'hu'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client side
  const messages = await getMessages({locale});

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
