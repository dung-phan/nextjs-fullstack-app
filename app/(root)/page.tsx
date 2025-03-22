import BookOverview from '@/components/BookOverview'
import BookList from '@/components/BookList'

export default async function Home () {
  const data = await fetch('http://localhost:5328/api/books')

  const { books } = (await data.json()) ?? []
  return (
    <>
      <BookOverview {...books[0]} />
      <div className="mt-28">
        <BookList books={books} />
      </div>
    </>
  )
}
