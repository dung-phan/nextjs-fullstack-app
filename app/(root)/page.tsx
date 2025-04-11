import BookOverview from '@/components/BookOverview'
import BookList from '@/components/BookList'
import camelcaseKeys from 'camelcase-keys'

export default async function Home() {
	const data = await fetch('http://localhost:5328/api/books/list')

	const books = camelcaseKeys(await data.json()) ?? []
	return (
		<>
			<BookOverview {...books[0]} />
			<div className='mt-28'>
				<BookList books={books} />
			</div>
		</>
	)
}
