import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MainNav } from './components/main-nav'
import { Footer } from './components/footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biodiversidad.cl',
  description: 'Explora y conserva la biodiversidad de Chile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <MainNav />
          </div>
        </header>
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  )
}

