import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { SimuladorClient } from './SimuladorClient'

export default async function SimuladorPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  return (
    <>
      <Navbar profile={profile} />
      <SimuladorClient profile={profile} />
    </>
  )
}
