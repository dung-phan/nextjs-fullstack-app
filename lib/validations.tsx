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
