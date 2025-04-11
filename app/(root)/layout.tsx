import React, { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const Layout = async ({ children }: PropsWithChildren) => {
	const session = await auth()
	if (!session?.user?.id) redirect('/auth/sign-in')

	return (
		<main className='background-grainy min-h-screen p-8 sm:p-10'>
			<Header />
			<div className='mt-20 pb-20'>{children}</div>
		</main>
	)
}
export default Layout
