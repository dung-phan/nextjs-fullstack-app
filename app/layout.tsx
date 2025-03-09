import type { Metadata } from 'next'
import './globals.css'
import { PropsWithChildren } from 'react'
import localFont from 'next/font/local'

const SoDoSans = localFont({
  src: [
    { path: '/fonts/SoDoSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/fonts/SoDoSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '/fonts/SoDoSans-Bold.ttf', weight: '700', style: 'normal' }
  ]
})

export const metadata: Metadata = {
  title: 'UniBook',
  description: 'UniBook is a book borrowing university library management.'
}

export default function RootLayout ({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${SoDoSans.className} antialiased`}>{children}</body>
    </html>
  )
}
