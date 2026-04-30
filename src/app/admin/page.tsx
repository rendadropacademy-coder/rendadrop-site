import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { AdminClient } from './AdminClient'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  if (profile?.role !== 'admin') redirect('/dashboard')

  // Stats
  const [{ count: totalUsers }, { count: premiumUsers }, { count: totalProgress }] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'premium'),
    supabase.from('lesson_progress').select('*', { count: 'exact', head: true }),
  ])

  // Recent users
  const { data: recentUsers } = await supabase
    .from('profiles')
    .select('id, name, email, role, credits, created_at')
    .order('created_at', { ascending: false })
    .limit(20)

  return (
    <>
      <Navbar profile={profile} />
      <AdminClient
        profile={profile}
        stats={{
          totalUsers: totalUsers ?? 0,
          premiumUsers: premiumUsers ?? 0,
          freeUsers: (totalUsers ?? 0) - (premiumUsers ?? 0),
          totalProgress: totalProgress ?? 0,
        }}
        recentUsers={recentUsers ?? []}
      />
    </>
  )
}
