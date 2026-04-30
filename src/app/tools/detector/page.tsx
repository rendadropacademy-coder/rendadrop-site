import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { DetectorClient } from './DetectorClient'

export default async function DetectorPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  if (profile?.role === 'free') redirect('/premium')
  return (
    <>
      <Navbar profile={profile} />
      <DetectorClient profile={profile} />
    </>
  )
}
