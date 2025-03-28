import NextAuth from 'next-auth'

import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      async authorize (credentials) {
        const response = await fetch('http://localhost:5328/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password
          })
        })

        return await response.json()
      }
    })
  ],
  pages: {
    signIn: '/sign-in'
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
