'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Header = () => {
	const pathname = usePathname()
	return (
		<header className='flex justify-between gap-5 w-full'>
			<Link href='/'>
				<Image
					src='/book-logo.svg'
					alt='Logo of the UniBook app'
					width={40}
					height={32}
					priority
				/>
			</Link>

			<ul className='flex flex-row items-center gap 8'>
				<li>
					<Link
						href='/library'
						className={cn(
							'text-yellow-600 cursor-pointer capitalize',
							pathname === '/library' ? 'text-yellow-200' : 'text-yellow-600'
						)}
					>
						Library
					</Link>
				</li>
			</ul>
		</header>
	)
}
export default Header
