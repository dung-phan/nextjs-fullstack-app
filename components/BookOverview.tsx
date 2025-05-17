import { BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BookCover from '@/components/BookCover'
import { Book } from '@/types'

const BookOverview = async ({
	title,
	author,
	genre,
	description,
	cover
}: Book) => {
	return (
		<section className='flex flex-col-reverse items-center gap-12 sm:gap-22 sm:flex-row'>
			<div className='flex flex-1 flex-col gap-5'>
				<h1 className='text-4xl font-bold'>{title}</h1>

				<div className='flex gap-5'>
					<p>
						By <span className='font-semibold'>{author}</span>
					</p>
					<p>
						Category <span className='font-semibold'>{genre}</span>
					</p>
				</div>
				<p className='text-green-800'>{description}</p>
				<Button className='bg-yellow-200 text-black w-fit'>
					<BookOpen size={20} />
					<p>Add to your list</p>
				</Button>
			</div>
			<div className='relative flex flex-1 justify-center'>
				<BookCover cover={cover} variant='large' />
			</div>
		</section>
	)
}
export default BookOverview
