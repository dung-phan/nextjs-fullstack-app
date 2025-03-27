import type { Metadata } from 'next'
import './globals.css'
import { PropsWithChildren } from 'react'
import localFont from 'next/font/local'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

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

export default async function RootLayout ({ children }: PropsWithChildren) {
  const session = await auth()
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${SoDoSans.className} antialiased`}>{children}</body>
      </SessionProvider>
    </html>
  )
}
