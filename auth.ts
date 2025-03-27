import NextAuth from 'next-auth'

import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      async authorize (credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const { user } = await fetch('http://localhost:5328/api/auth/login')
        return { ...user, email: user.email }
      }
    })
  ],
  pages: {
    signIn: '/auth/sign-in'
  },
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session ({ session, token }) {
      session.user.id = token.id as string
      return session
    }
  }
})
