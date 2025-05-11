'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const Header = () => {
	const pathname = usePathname()
	return (
		<header className='flex flex-col justify-between gap-3 w-full'>
			<div className='flex justify-between'>
				<NavigationMenu>
					<NavigationMenuList>
						<Link href='/' legacyBehavior passHref>
							<NavigationMenuLink
								active={pathname === '/'}
								className={navigationMenuTriggerStyle()}
							>
								home
							</NavigationMenuLink>
						</Link>
						<Link href='/categories' legacyBehavior passHref>
							<NavigationMenuLink
								active={pathname === '/categories'}
								className={navigationMenuTriggerStyle()}
							>
								categories
							</NavigationMenuLink>
						</Link>
					</NavigationMenuList>
				</NavigationMenu>
				<p>
					<span className='pr-2'>date</span>
					<span className='italic text-blue-500 border-b border-b-black px-2 font-sans'>
						{new Date()
							.toLocaleDateString('en-GB', {
								day: '2-digit',
								month: '2-digit',
								year: '2-digit'
							})
							.replace(/\//g, '.')}
					</span>
				</p>
			</div>
			<Separator className='bg-black' />
		</header>
	)
}
export default Header
