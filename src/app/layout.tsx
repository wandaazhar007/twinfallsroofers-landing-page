import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import Script from 'next/script';
import '@/styles/main.scss';
import { site } from '@/content/site';
import { buildRoofingContractorJsonLd } from '@/lib/jsonld';
import { JsonLd } from '@/components/seo/JsonLd';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCallBar } from '@/components/layout/StickyCallBar';

const heading = Manrope({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: 'Canyon Construction Services',
  description: 'Roofing contractor in Twin Falls, Idaho.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes
          into <body> before React hydrates, which is a false-positive mismatch. */}
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <JsonLd data={buildRoofingContractorJsonLd()} />

        {site.gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`}
          </Script>
        ) : null}

        {site.gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
              height={0}
              width={0}
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}

        <Header />
        <div id="main-content">{children}</div>
        <StickyCallBar />
        <Footer />
      </body>
    </html>
  );
}
