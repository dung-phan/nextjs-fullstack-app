import React, { PropsWithChildren } from 'react'
import Header from '@/components/Header'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="background-grainy grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-10">
      <Header />
      <div className="m-10">{children}</div>
    </main>
  )
}
export default Layout
