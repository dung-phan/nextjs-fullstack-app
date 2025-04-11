import React from 'react'
import Link from 'next/link'
import BookCover from '@/components/BookCover'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Book } from '@/types'

const BookCard = ({ id, cover, isLoaned, title, genre }: Book) => {
	return (
		<li className={cn(isLoaned && 'w-full md:w-52')}>
			<Link
				href={`/book/${id}`}
				className={cn(isLoaned && 'w-full flex flex-col items-center')}
			>
				<BookCover cover={cover} variant='regular' />
				<div className={cn(!isLoaned && 'xs:max-w-40 max-w-28')}>
					<p className='mt-2 line-clamp-1 text-base font-semibold text-white xs:text-xl'>
						{title}
					</p>
					<p className='mt-1 line-clamp-1 text-sm italic text-light-100 xs:text-base'>
						{genre}
					</p>
					{isLoaned && (
						<div className='mt-3 w-full'>
							<div className='flex flex-row items-center gap-1 max-xs:justify-center'>
								<Calendar size={20} />
								<p className='text-xs text-yellow-200'>
									11 days left to return
								</p>
							</div>
							<Button className='text-black w-full mt-2'>
								Download receipt
							</Button>
						</div>
					)}
				</div>
			</Link>
		</li>
	)
}
export default BookCard
