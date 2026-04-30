import Link from 'next/link'
import { CheckCircle, Zap } from 'lucide-react'

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
          <CheckCircle className="text-green-400" size={32} />
        </div>
        <h1 className="text-3xl font-bold mb-3">Pagamento confirmado! 🎉</h1>
        <p className="text-white/50 mb-8">
          Seu acesso premium está sendo ativado. Em alguns instantes você receberá um e-mail com as instruções de acesso.
        </p>
        <div className="bg-[#111] border border-green-500/20 rounded-2xl p-5 mb-8 text-left">
          <p className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
            <Zap size={14} /> O que você acabou de desbloquear:
          </p>
          <ul className="space-y-2 text-sm text-white/60">
            {[
              'Acesso completo a todos os 32 módulos e aulas',
              '6 ferramentas de IA desbloqueadas',
              '300 créditos de bônus adicionados',
              'Acesso vitalício garantido',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={13} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/dashboard" className="block w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all text-center">
          Acessar minha área de aluno
        </Link>
      </div>
    </div>
  )
}
