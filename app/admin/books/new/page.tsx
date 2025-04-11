import React from 'react'
import Link from 'next/link'
import BookForm from '@/components/admin/form/BookForm'
import { ArrowLeft } from 'lucide-react'

const Page = () => {
	return (
		<>
			<Link href='/admin/books' className='flex items-center gap-1'>
				<ArrowLeft size={20} />
				Go back
			</Link>
			<section className='w-full max-w-2xl mt-5'>
				<BookForm />
			</section>
		</>
	)
}
export default Page
