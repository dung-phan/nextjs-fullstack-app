'use client'

import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'
import { signInWithCredentials } from '@/lib/actions/auth'

const Page = () => {
	return (
		<AuthForm
			type='SIGN_IN'
			schema={signInSchema}
			defaultValues={{
				username: '',
				password: ''
			}}
			onSubmit={signInWithCredentials}
		/>
	)
}
export default Page
