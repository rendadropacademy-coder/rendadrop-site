import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CheckCircle, Crown, Shield, Clock, Zap } from 'lucide-react'

const features = [
  'Acesso completo a todos os 32 módulos e aulas',
  '6 ferramentas de IA profissionais desbloqueadas',
  '300 créditos de bônus imediatos ao ativar',
  'Assistente IA especialista ilimitado',
  'Acesso vitalício + todas as atualizações gratuitas',
  'Suporte direto por e-mail (resposta em 24h)',
  'Comunidade exclusiva de alunos',
]

export default async function PremiumPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'

  if (isPremium) redirect('/dashboard')

  return (
    <>
      <Navbar profile={profile} />
      <main className="min-h-screen bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Crown size={12} />
              Plano Premium
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Acesso Completo<br />
              <span className="text-green-400">RendaDrop Academy</span>
            </h1>
            <p className="text-white/50 text-base">
              Do zero ao primeiro faturamento. Tudo que você precisa em um único plano.
            </p>
          </div>

          <div className="bg-[#111] border border-green-500/20 rounded-3xl p-8 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-white/30 text-xl line-through">R$ 197</span>
              <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">-51% OFF</span>
            </div>
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-white">
                R$<span className="text-green-400">97</span>
              </div>
              <p className="text-white/40 text-sm mt-1">pagamento único · acesso vitalício</p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={15} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://pay.kiwify.com.br/R97"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-lg rounded-2xl transition-all text-center"
            >
              <span className="flex items-center justify-center gap-2">
                <Zap size={18} />
                ATIVAR MINHA CONTA AGORA
              </span>
            </a>

            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-white/30">
              <span className="flex items-center gap-1"><Shield size={11} /> Pagamento seguro Kiwify</span>
              <span className="flex items-center gap-1"><Clock size={11} /> Acesso imediato</span>
            </div>
          </div>

          <p className="text-center text-xs text-white/30">
            Ao clicar, você será direcionado para ativação na Kiwify.{' '}
            <br />Após o pagamento, o sistema adicionará o acesso premium automaticamente.
          </p>

          <div className="mt-10 text-center">
            <Link href="/dashboard" className="text-sm text-white/40 hover:text-white/60 transition-colors">
              Continuar com conta gratuita
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
