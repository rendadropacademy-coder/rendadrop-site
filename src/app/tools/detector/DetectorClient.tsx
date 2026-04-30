'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Profile } from '@/lib/types'
import { Footer } from '@/components/layout/Footer'
import { Search, ArrowLeft, Zap } from 'lucide-react'

interface Props { profile: Profile | null }

export function DetectorClient({ profile: _ }: Props) {
  const [produto, setProduto] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const analisar = async () => {
    if (!produto.trim()) return
    setLoading(true)
    setResult(null)
    // Placeholder — connect to /api/analyze-product
    await new Promise(r => setTimeout(r, 1500))
    setResult(`Análise de "${produto}" concluída. Conecte o endpoint /api/analyze-product à sua IA para retornar score de viralidade, potencial de lucro, análise de concorrência e estratégia de marketing.`)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/ferramentas" className="text-white/40 hover:text-white/70 transition-colors"><ArrowLeft size={18} /></Link>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2"><Search className="text-purple-400" size={20} />Detector de Produtos IA</h1>
            <p className="text-xs text-white/40">15 créditos por análise</p>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-6">
          <label className="text-sm text-white/60 font-medium block mb-2">Nome ou descrição do produto</label>
          <textarea
            value={produto}
            onChange={e => setProduto(e.target.value)}
            placeholder="Ex: escova removedora de pelos de pet"
            rows={3}
            className="w-full bg-[#0a0a0a] border border-white/10 text-white placeholder:text-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
          />
          <button
            onClick={analisar}
            disabled={loading || !produto.trim()}
            className="mt-4 w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
          >
            {loading ? <><div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />Analisando...</> : <><Zap size={15} />Analisar com IA</>}
          </button>
        </div>

        {result && (
          <div className="bg-[#111] border border-purple-500/20 rounded-2xl p-6">
            <h2 className="font-bold text-sm text-purple-400 mb-3">Resultado da Análise</h2>
            <p className="text-sm text-white/70 leading-relaxed">{result}</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
