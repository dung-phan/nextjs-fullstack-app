import React, { PropsWithChildren } from 'react'
import Image from 'next/image'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await auth()

  if (session?.user?.id) redirect('/')

  return (
    <main className="relative flex flex-col-reverse text-light-100 sm:flex-row">
      <div className="absolute inset-0 background-grainy backdrop-blur-xl"></div>
      <section className="my-auto flex h-full min-h-screen flex-1 items-center px-5 py-10">
        <div className="mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10 bg-white/10 backdrop-blur-md">
          <div className="flex flex-row gap-3">
            <Image
              src="/book-logo.svg"
              alt="Book Logo"
              width={37}
              height={37}
            />
            <h1 className="text-2xl font-semibold">UniBook</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </main>
  )
}

export default Layout
