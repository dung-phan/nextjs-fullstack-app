import React, { PropsWithChildren } from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/admin/sidebar'
import Header from '@/components/admin/header'

const Layout = async ({ children }: PropsWithChildren) => {
	const session = await auth()

	if (!session?.user?.id) redirect('/sign-in')
	return (
		<main className='flex min-h-screen w-full flex-row text-black'>
			<Sidebar session={session} />
			<div className='flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10'>
				<Header session={session} />
				{children}
			</div>
		</main>
	)
}
export default Layout
