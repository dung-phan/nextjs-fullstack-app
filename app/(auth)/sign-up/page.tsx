'use client'

import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'
import { signUp } from '@/lib/actions/auth'

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: '',
        username: '',
        email: '',
        universityId: 0,
        password: ''
      }}
      onSubmit={signUp}
    />
  )
}
export default Page
