import React, { PropsWithChildren } from 'react'
import Header from '@/components/Header'

const Layout = async ({ children }: PropsWithChildren) => {
	return (
		<main className='relative min-h-screen p-8 sm:px-10 bg-[#fefefe]'>
			<Header />
			<div className='bg-[repeating-linear-gradient(to_bottom,_#fff_0px,_#fff_34px,_#ccc_35px)] leading-[35px]'>
				{children}
			</div>
		</main>
	)
}
export default Layout
