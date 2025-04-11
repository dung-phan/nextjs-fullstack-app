'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Book } from '@/types'
import { bookSchema } from '@/lib/validations'
import { Textarea } from '@/components/ui/textarea'

type Props = {
	type?: 'CREATE' | 'UPDATE'
	book: Book
}

const BookForm = ({ type, ...book }: Props) => {
	const form: UseFormReturn<z.infer<typeof bookSchema>> = useForm({
		resolver: zodResolver(bookSchema),
		defaultValues: {
			title: '',
			description: '',
			author: '',
			genre: '',
			rating: 0,
			totalCopies: 0,
			coverUrl: '',
			videoUrl: '',
			summary: ''
		}
	})

	const handleSubmit = async (values: z.infer<typeof bookSchema>) => {
		console.log('values', values, type, book)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem className='flex flex-col gap-1'>
							<FormLabel className='text-base font-normal text-dark-500'>
								Book Title
							</FormLabel>
							<FormControl>
								<Input
									required
									placeholder='Book title'
									{...field}
									className='min-h-14 border border-gray-100 bg-light-600 p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='author'
					render={({ field }) => (
						<FormItem className='flex flex-col gap-1'>
							<FormLabel className='text-base font-normal text-dark-500'>
								Genre
							</FormLabel>
							<FormControl>
								<Input
									required
									placeholder='Genre'
									{...field}
									className='min-h-14 border border-gray-100 bg-light-600 p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='genre'
					render={({ field }) => (
						<FormItem className='flex flex-col gap-1'>
							<FormLabel className='text-base font-normal text-dark-500'>
								Book Title
							</FormLabel>
							<FormControl>
								<Input
									required
									placeholder='Book title'
									{...field}
									className='min-h-14 border border-gray-100 bg-light-600 p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='rating'
					render={({ field }) => (
						<FormItem className='flex flex-col gap-1'>
							<FormLabel className='text-base font-normal text-dark-500'>
								Rating
							</FormLabel>
							<FormControl>
								<Input
									required
									type='number'
									placeholder='Rating'
									min={1}
									max={5}
									{...field}
									className='min-h-14 border border-gray-100 bg-light-600 p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem className='flex flex-col gap-1'>
							<FormLabel className='text-base font-normal text-dark-500'>
								Book Description
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder='Book description'
									{...field}
									rows={20}
									className='min-h-14 border border-gray-100 bg-light-600 p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}
export default BookForm
