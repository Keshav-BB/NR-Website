import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppCta } from '@/components/layout/whatsapp-cta';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/cms/site-config';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serifFont = Lora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.neurorecode.in'),
  title: {
    default: 'Eliminate Anxiety at the Root — Neuro Recode Protocol',
    template: '%s · Neuro Recode',
  },
  description:
    'A science-grounded 3-step nervous system protocol (Decode, Rewire, Reinforce) built on neuroplasticity, NLP, and clinical hypnotherapy. Designed for working professionals.',
  keywords: [
    'Neuro Recode',
    'Anxiety relief for working professionals',
    'Rewire anxiety at root',
    'Tanglish mental wellness',
    'High functioning anxiety protocol',
    'Subconscious anxiety re-imprinting',
    'NLP and clinical hypnotherapy anxiety',
    'Chennai anxiety coaching',
  ],
  authors: [{ name: siteConfig.company.name, url: 'https://www.neurorecode.in' }],
  creator: siteConfig.company.legalName,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.neurorecode.in',
    siteName: 'Neuro Recode',
    title: 'Eliminate anxiety at the root — and get your life back.',
    description:
      'A science-grounded 3-step nervous system protocol built on neuroplasticity, NLP, and clinical hypnotherapy. Designed to resolve anxiety — not manage it forever.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neuro Recode Protocol — Eliminate Anxiety at the Root',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eliminate anxiety at the root — and get your life back.',
    description:
      'Science-grounded 3-step protocol built on neuroplasticity, NLP, and clinical hypnotherapy for working professionals.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/neuro-recode-emblem.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/neuro-recode-emblem.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#6B32A1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="font-sans antialiased bg-background text-content-primary flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppCta />
      </body>
    </html>
  );
}
