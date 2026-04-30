'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Profile } from '@/lib/types'
import { Footer } from '@/components/layout/Footer'
import { Video, ArrowLeft, Zap } from 'lucide-react'

interface Props { profile: Profile | null }

const platforms = ['TikTok', 'Instagram Reels', 'YouTube Shorts']
const styles = ['UGC (orgânico)', 'Problema → Solução', 'Antes e Depois', 'Tutorial', 'Shock/Curiosidade']

export function VideoClient({ profile: _ }: Props) {
  const [produto, setProduto] = useState('')
  const [platform, setPlatform] = useState('TikTok')
  const [style, setStyle] = useState('UGC (orgânico)')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const gerar = async () => {
    if (!produto.trim()) return
    setLoading(true)
    setResult(null)
    await new Promise(r => setTimeout(r, 2000))
    setResult(`Roteiro de video ad para "${produto}" em formato ${style} para ${platform} gerado. Conecte o endpoint /api/generate-script à sua IA para obter o roteiro completo com hook, desenvolvimento e CTA.`)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/ferramentas" className="text-white/40 hover:text-white/70"><ArrowLeft size={18} /></Link>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2"><Video className="text-rose-400" size={20} />Criador de Vídeo Ads</h1>
            <p className="text-xs text-white/40">120 créditos por roteiro</p>
          </div>
        </div>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-6 space-y-4">
          <div>
            <label className="text-sm text-white/60 font-medium block mb-2">Produto ou serviço</label>
            <input type="text" value={produto} onChange={e => setProduto(e.target.value)} placeholder="Ex: massageador de pescoço elétrico"
              className="w-full bg-[#0a0a0a] border border-white/10 text-white placeholder:text-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/60 font-medium block mb-2">Plataforma</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500">
                {platforms.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-white/60 font-medium block mb-2">Estilo</label>
              <select value={style} onChange={e => setStyle(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-500">
                {styles.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <button onClick={gerar} disabled={loading || !produto.trim()}
            className="w-full py-3 bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2">
            {loading ? <><div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />Criando roteiro...</> : <><Zap size={15} />Criar roteiro</>}
          </button>
        </div>
        {result && (
          <div className="bg-[#111] border border-rose-500/20 rounded-2xl p-6">
            <h2 className="font-bold text-sm text-rose-400 mb-3">Roteiro Gerado</h2>
            <p className="text-sm text-white/70 leading-relaxed">{result}</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
