import React from 'react'
import BookCard from '@/components/BookCard'
import { Book } from '@/types'

const BookList = ({ books }: { books: Book[] }) => {
	return (
		<section>
			<h2 className='text-4xl text-primary uppercase'>Popular books</h2>
			<ul className='mt-10 flex flex-wrap gap-5 max-xs:justify-between xs:gap-10'>
				{books.map((book) => (
					<BookCard {...book} key={book.id} />
				))}
			</ul>
		</section>
	)
}
export default BookList
