import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = () => {
	return (
		<section className='w-full p-7 border'>
			<div className='flex flex-wrap items-center justify-between gap-2'>
				<h2 className='text-dark-400 text-xl font-semibold'>Books</h2>
				<Button variant='outline' className='bg-green-800 text-white' asChild>
					<Link href='/admin/books/new'>+ Create a new book</Link>
				</Button>
			</div>
			<div className='mt-7 w-full overflow-hidden'>Table</div>
		</section>
	)
}
export default Page
