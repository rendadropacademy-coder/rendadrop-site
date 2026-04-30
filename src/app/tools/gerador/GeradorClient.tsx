'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Profile } from '@/lib/types'
import { Footer } from '@/components/layout/Footer'
import { Lightbulb, ArrowLeft, Zap } from 'lucide-react'

interface Props { profile: Profile | null }

export function GeradorClient({ profile: _ }: Props) {
  const [nicho, setNicho] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const gerar = async () => {
    if (!nicho.trim()) return
    setLoading(true)
    setResult(null)
    await new Promise(r => setTimeout(r, 1500))
    setResult(`Geração de ideias para o nicho "${nicho}" concluída. Conecte o endpoint /api/generate-ideas para retornar 10 nomes de loja, slogans, produtos potenciais e branding completo.`)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/ferramentas" className="text-white/40 hover:text-white/70"><ArrowLeft size={18} /></Link>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2"><Lightbulb className="text-yellow-400" size={20} />Gerador de Ideias Infalível</h1>
            <p className="text-xs text-white/40">15 créditos por geração</p>
          </div>
        </div>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-6">
          <label className="text-sm text-white/60 font-medium block mb-2">Nicho ou categoria</label>
          <input
            type="text"
            value={nicho}
            onChange={e => setNicho(e.target.value)}
            placeholder="Ex: pets, beleza, fitness, casa inteligente"
            className="w-full bg-[#0a0a0a] border border-white/10 text-white placeholder:text-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
          <button
            onClick={gerar}
            disabled={loading || !nicho.trim()}
            className="mt-4 w-full py-3 bg-yellow-600 hover:bg-yellow-500 disabled:opacity-40 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
          >
            {loading ? <><div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />Gerando...</> : <><Zap size={15} />Gerar ideias</>}
          </button>
        </div>
        {result && (
          <div className="bg-[#111] border border-yellow-500/20 rounded-2xl p-6">
            <h2 className="font-bold text-sm text-yellow-400 mb-3">Ideias Geradas</h2>
            <p className="text-sm text-white/70 leading-relaxed">{result}</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
