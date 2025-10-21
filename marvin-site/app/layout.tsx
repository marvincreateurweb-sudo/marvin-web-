import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Marvin Créateur Web - Site livré en 4 jours | Embrun',
    template: '%s | Marvin Créateur Web'
  },
  description: 'Création de site web professionnel en 4 jours, maquette en 24h. Spécialisé PME locales à Embrun et Hautes-Alpes. Devis gratuit.',
  keywords: ['création site web Embrun', 'développeur web Hautes-Alpes', 'site internet Gap', 'webdesign Alpes', 'site vitrine restaurant'],
  authors: [{ name: 'Marvin Lacroix' }],
  creator: 'Marvin Lacroix',
  publisher: 'Marvin Créateur Web',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://marvin.createurweb.com'
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://marvin.createurweb.com',
    title: 'Marvin Créateur Web - Site livré en 4 jours',
    description: 'Création de site web professionnel en 4 jours pour PME locales. Maquette en 24h garantie.',
    siteName: 'Marvin Créateur Web',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvin Créateur Web - Site livré en 4 jours',
    description: 'Création de site web professionnel en 4 jours pour PME locales.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Marvin Créateur Web",
              "url": "https://marvin.createurweb.com",
              "logo": "https://marvin.createurweb.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-7-70-06-10-75",
                "contactType": "customer service",
                "availableLanguage": "French"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Embrun",
                "postalCode": "05200",
                "addressCountry": "FR"
              },
              "sameAs": [
                "https://www.linkedin.com/in/marvin-lacroix"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}