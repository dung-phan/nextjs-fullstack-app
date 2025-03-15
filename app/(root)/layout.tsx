import React, { PropsWithChildren } from 'react'
import Header from '@/components/Header'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="background-grainy min-h-screen p-8 sm:p-10">
      <Header />
      <div className="mt-20 pb-20">{children}</div>
    </main>
  )
}
export default Layout
