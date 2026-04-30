import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'

interface Props {
  children: React.ReactNode
}

export async function PremiumToolWrapper({ children }: Props) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'

  if (!isPremium) redirect('/premium')

  return (
    <>
      <Navbar profile={profile} />
      {children}
    </>
  )
}
