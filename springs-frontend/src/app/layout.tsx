import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Instrument_Serif } from 'next/font/google'

const serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: ['400'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} overflow-x-hidden`}>
      <body className="min-h-dvh bg-white text-zinc-900 overflow-x-hidden font-serif">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
