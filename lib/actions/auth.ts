'use server'

import { User } from '@/types'
import { signIn } from '@/auth'

export const signUp = async (params: User) => {
	const { fullName, email, password, universityId, username } = params

	const existingUser = await fetch('http://localhost:5328/api/users/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			full_name: fullName,
			username,
			email,
			password,
			university_id: universityId,
			role: 'user'
		})
	})

	return await existingUser.json()
}

export const signInWithCredentials = async (
	params: Pick<User, 'username' | 'password'>
) => {
	const { username, password } = params

	const result = await signIn('credentials', {
		username,
		password,
		redirect: false
	})
	if (result?.error) {
		return { success: false, error: result.error }
	}

	return { success: true }
}
