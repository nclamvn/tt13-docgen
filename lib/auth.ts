import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from './db'

// Demo user for testing without OAuth
const DEMO_USER = {
  id: 'demo-user-001',
  email: 'demo@tt13docgen.vn',
  name: 'Demo User',
  image: null,
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'dummy-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy-client-secret',
    }),
    CredentialsProvider({
      id: 'demo',
      name: 'Demo Account',
      credentials: {},
      async authorize() {
        // Create or get demo user in database
        let user = await prisma.user.findUnique({
          where: { email: DEMO_USER.email },
        })

        if (!user) {
          user = await prisma.user.create({
            data: {
              id: DEMO_USER.id,
              email: DEMO_USER.email,
              name: DEMO_USER.name,
              image: DEMO_USER.image,
            },
          })
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}

export async function auth() {
  return await getServerSession(authOptions)
}
