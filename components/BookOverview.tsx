import { BookOpen, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BookCover from '@/components/BookCover'
import { Book } from '@/types'

const BookOverview = async ({
	title,
	author,
	genre,
	rating,
	totalCopies,
	availableCopies,
	description,
	cover
}: Book) => {
	return (
		<section className='flex flex-col-reverse items-center gap-12 sm:gap-32 md:flex-row'>
			<div className='flex flex-1 flex-col gap-5 text-primary'>
				<h1 className='text-4xl font-bold'>{title}</h1>

				<div className='flex gap-5'>
					<p>
						By <span className='font-semibold text-yellow-200'>{author}</span>
					</p>
					<p>
						Category{' '}
						<span className='font-semibold text-yellow-200'>{genre}</span>
					</p>
				</div>
				<div className='flex flex-row gap-1'>
					<Star size={20} />
					{rating}
				</div>
				<div className='flex gap-10'>
					<p>
						Total Books:{' '}
						<span className='font-semibold text-yellow-300'>{totalCopies}</span>
					</p>
					<p>
						Available Books:{' '}
						<span className='font-semibold text-yellow-300'>
							{availableCopies}
						</span>
					</p>
				</div>
				<p className='pt-5 text-green-800'>{description}</p>
				<Button className='bg-yellow-200 text-black w-fit'>
					<BookOpen size={20} />
					<p>Borrow</p>
				</Button>
			</div>
			<div className='relative flex flex-1 justify-center'>
				<div className='relative'>
					<div className='z-10'>
						<BookCover cover={cover} variant='large' />
					</div>
				</div>
				<div className='absolute right-16 top-16 rotate-12 opacity-40 max-md:hidden'>
					<BookCover cover={cover} variant='large' />
				</div>
			</div>
		</section>
	)
}
export default BookOverview
