import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinaag Pest Control - Professional Pest Control Services',
  description: 'Professional pest control services for residential and commercial properties. Safe, effective, and reliable pest management solutions.',
  keywords: 'pest control, termite control, rodent control, cockroach control, bed bug control, mosquito control',
  icons: {
    icon: '/vinaag-logo.png',
    apple: '/vinaag-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
