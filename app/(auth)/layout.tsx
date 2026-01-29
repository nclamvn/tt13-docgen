import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { AuthHeader } from '@/components/layout/auth-header'
import { MainContent } from '@/components/layout/main-content'
import { SessionProvider } from '@/components/providers/session-provider'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <SessionProvider session={session}>
      <div className="min-h-screen bg-slate-50">
        <Sidebar />
        <MainContent>
          <AuthHeader />
          <main className="p-6">{children}</main>
        </MainContent>
      </div>
    </SessionProvider>
  )
}
