'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
	DefaultValues,
	FieldValues,
	Path,
	useForm,
	UseFormReturn
} from 'react-hook-form'
import { z, ZodType } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

type Props<T extends FieldValues> = {
	schema: ZodType<T>
	defaultValues: T
	type: 'SIGN_IN' | 'SIGN_UP'
	onSubmit: (values: T) => Promise<{
		success: boolean
		message?: string
	}>
}

const AuthForm = <T extends FieldValues>({
	type,
	schema,
	defaultValues,
	onSubmit
}: Props<T>) => {
	const isSignedIn = type === 'SIGN_IN'
	const form: UseFormReturn<T> = useForm({
		resolver: zodResolver(schema),
		defaultValues: defaultValues as DefaultValues<T>
	})

	const handleSubmit = async (values: z.infer<typeof schema>) => {
		console.log('hello')
		const result = await onSubmit(values)

		console.log('result', result)
	}

	return (
		<div className='flex flex-col gap-4 max-w-md'>
			<h1 className='text-2xl'>
				{isSignedIn ? 'Welcome back to Unibook' : 'Create your library account'}
			</h1>
			<p className='text-yellow-200'>
				{isSignedIn
					? 'Access the vast collection of resources, and stay updated'
					: 'Please complete all fields and upload a valid university Id to gain access'}
			</p>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className='space-y-6 w-full'
				>
					{Object.keys(defaultValues).map((fieldName) => {
						return (
							<FormField
								control={form.control}
								name={fieldName as Path<T>}
								key={fieldName}
								render={({ field }) => (
									<FormItem>
										<FormLabel>{fieldName}</FormLabel>
										<FormControl>
											<Input placeholder='shadcn' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						)
					})}
					<Button className='bg-yellow-200 text-black w-full' type='submit'>
						Submit
					</Button>
				</form>
			</Form>
			<p className='text-center '>
				{isSignedIn ? 'New to Unibook? ' : 'Already have an account? '}
				<Link
					href={isSignedIn ? '/sign-up' : '/sign-in'}
					className='text-yellow-200 font-bold'
				>
					{isSignedIn ? 'Create an account' : 'Sign in'}
				</Link>
			</p>
		</div>
	)
}
export default AuthForm
