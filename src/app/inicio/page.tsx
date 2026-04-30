import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function InicioPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-4xl mb-4">🚀</div>
        <h1 className="text-3xl font-bold mb-3">
          Bem-vindo, {profile?.name?.split(' ')[0] ?? 'Aluno'}!
        </h1>
        <p className="text-white/50 mb-8">
          Sua conta foi criada com sucesso. Você está pronto para começar sua jornada no dropshipping.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-base rounded-xl transition-all"
        >
          Começar agora
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}
