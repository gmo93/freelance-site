import '../globals.css'
import * from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Little Shop, Big Design',
  description: 'The Web Designer for Small Businesses and Shops',
  openGraph: {
    title: 'Little Shop, Big Design',
    description: 'The Web Designer for Small Businesses and Shops',
    url: "www.littleshopbigdesign.com",
    siteName: "Little Shop, Big Design",
    images: [
      {
        url: '/littleShopOGSmall.jpg',
        width: 500,
        height: 500
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
