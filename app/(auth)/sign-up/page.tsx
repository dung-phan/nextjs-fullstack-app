'use client'

import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: '',
        email: '',
        universityId: 0,
        universityCard: '',
        password: ''
      }}
    />
  )
}
export default Page
