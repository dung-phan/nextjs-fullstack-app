import React from 'react'
import Link from 'next/link'
import BookCover from '@/components/BookCover'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'

const BookCard = ({ id, cover, is_loaned, title, genre }) => {
  return (
    <li className={clsx(is_loaned && 'w-full md:w-52')}>
      <Link
        href={`/book/${id}`}
        className={clsx(is_loaned && 'w-full flex flex-col items-center')}
      >
        <BookCover cover={cover} variant="regular" />
        <div className={clsx(!is_loaned && 'xs:max-w-40 max-w-28')}>
          <p className="mt-2 line-clamp-1 text-base font-semibold text-white xs:text-xl">
            {title}
          </p>
          <p className="mt-1 line-clamp-1 text-sm italic text-light-100 xs:text-base">
            {genre}
          </p>
          {is_loaned && (
            <div className="mt-3 w-full">
              <div className="flex flex-row items-center gap-1 max-xs:justify-center">
                <Calendar size={20} />
                <p className="text-xs text-yellow-200">
                  11 days left to return
                </p>
              </div>
              <Button className="text-black w-full mt-2">
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
