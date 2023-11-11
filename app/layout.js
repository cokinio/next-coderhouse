import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dietetica Store',
  description: 'En dietetica store tenemos los mejores precios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <hr/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
