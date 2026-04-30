import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { GeradorClient } from './GeradorClient'

export default async function GeradorPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  if (profile?.role === 'free') redirect('/premium')
  return (<><Navbar profile={profile} /><GeradorClient profile={profile} /></>)
}
