import { IconName } from 'lucide-react/dynamic'

export const adminSideBarLinks: {
	text: string
	href: string
	icon: IconName
}[] = [
	{
		text: 'Home',
		href: '/admin',
		icon: 'home'
	},
	{
		text: 'All Users',
		href: '/admin/users',
		icon: 'user'
	},
	{
		text: 'Books',
		href: '/admin/books',
		icon: 'book-open-text'
	}
	// {
	//   text: 'Bookmarks',
	//   href: '/admin/bookmarks'
	// }
]
