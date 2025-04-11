import { z } from 'zod'

export const signUpSchema = z.object({
	fullName: z.string().min(3),
	email: z.string().email(),
	universityId: z.coerce.number(),
	username: z.string().min(8),
	password: z.string().min(8)
})

export const signInSchema = z.object({
	username: z.string().min(8),
	password: z.string().min(8)
})

export const bookSchema = z.object({
	title: z.string().trim().min(2).max(100),
	author: z.string().trim().min(10).max(100),
	genre: z.string().trim().min(2).max(50),
	rating: z.number().min(1).max(5),
	description: z.string().trim().min(10).max(500),
	totalCopies: z.coerce.number().int().positive().lte(100000),
	coverUrl: z.string().url().nonempty(),
	videoUrl: z.string().url().optional(),
	summary: z.string().trim().min(10)
})
