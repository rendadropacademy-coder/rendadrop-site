import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { tools, creditPacks } from '@/lib/data/tools'
import { Cpu, Lock, Zap, ExternalLink } from 'lucide-react'

export default async function FerramentasPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'

  return (
    <>
      <Navbar profile={profile} />
      <main className="min-h-screen bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1">Ferramentas de IA</h1>
            <p className="text-sm text-white/40">
              {isPremium
                ? `Você tem ${profile?.credits ?? 0} créditos disponíveis`
                : 'Simulador e Assistente disponíveis gratuitamente. Faça upgrade para desbloquear tudo.'}
            </p>
          </div>

          {/* Status de acesso */}
          {!isPremium && (
            <div className="mb-8 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-sm text-orange-300 flex items-center justify-between gap-4">
              <div className="flex items-start gap-2">
                <Lock size={14} className="shrink-0 mt-0.5" />
                <span>
                  <strong>Ferramentas Premium bloqueadas.</strong> O plano gratuito dá acesso apenas ao Simulador e ao Assistente.
                  As demais ferramentas estão disponíveis somente no premium.
                </span>
              </div>
              <Link href="/premium" className="shrink-0 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-black text-xs font-bold rounded-lg transition-all">
                Upgrade
              </Link>
            </div>
          )}

          {isPremium && (
            <div className="mb-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-sm text-green-300 flex items-start gap-2">
              <Zap size={14} className="shrink-0 mt-0.5" />
              <span>Todas as ferramentas desbloqueadas. Você recebeu 300 créditos ao ativar o premium + bônus adicionais conforme seu plano.</span>
            </div>
          )}

          {/* Grid de ferramentas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {tools.map((tool) => {
              const isLocked = !isPremium && !tool.freeAccess
              return (
                <div
                  key={tool.id}
                  className={`border rounded-2xl p-6 transition-all ${
                    isLocked
                      ? 'border-white/5 bg-[#111] opacity-60'
                      : `border-white/5 ${tool.bg} hover:border-white/15`
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Cpu className={isLocked ? 'text-white/20' : tool.color} size={22} />
                    <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                      {tool.creditLabel}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{tool.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4">{tool.description}</p>
                  {isLocked ? (
                    <Link
                      href="/premium"
                      className="flex items-center gap-1 text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      <Lock size={11} /> Desbloquear com Premium
                    </Link>
                  ) : (
                    <Link
                      href={tool.href}
                      className={`flex items-center gap-1 text-xs font-medium ${tool.color} hover:opacity-80 transition-opacity`}
                    >
                      Abrir ferramenta <ExternalLink size={11} />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* Comprar mais créditos */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <h2 className="font-bold text-base mb-1">Comprar mais créditos</h2>
            <p className="text-xs text-white/40 mb-6">Use apenas quando precisar. Pague só pelo que usar. Sem mensalidade.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {creditPacks.map((pack) => (
                <a
                  key={pack.label}
                  href={pack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border rounded-2xl p-5 flex flex-col gap-3 relative transition-all hover:border-green-500/40 ${
                    pack.highlight ? 'border-green-500/30 bg-green-500/5' : 'border-white/10 bg-[#0a0a0a]'
                  }`}
                >
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit ${pack.highlight ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/50'}`}>
                    {pack.badge}
                  </span>
                  <div>
                    <p className="font-bold text-lg">{pack.label}</p>
                    <p className="text-xs text-white/30 line-through">{pack.originalPrice}</p>
                    <p className="text-xl font-bold text-green-400">{pack.price}</p>
                  </div>
                  <span className="text-xs text-white/40">Créditos adicionados imediatamente após o pagamento.</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
