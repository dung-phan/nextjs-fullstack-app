import React from 'react'
import Link from 'next/link'
import BookCover from '@/components/BookCover'
import { Book } from '@/types'

const BookCard = ({ id, cover, title, genre }: Book) => {
	return (
		<li className='w-full md:w-52'>
			<Link href={`/book/${id}`} className='w-full flex flex-col items-center'>
				<BookCover cover={cover} variant='medium' />
				<div className='xs:max-w-40 max-w-28'>
					<p className='mt-2 line-clamp-1 text-base font-semibold text-white xs:text-xl'>
						{title}
					</p>
					<p className='mt-1 line-clamp-1 text-sm italic text-light-100 xs:text-base'>
						{genre}
					</p>
				</div>
			</Link>
		</li>
	)
}
export default BookCard
