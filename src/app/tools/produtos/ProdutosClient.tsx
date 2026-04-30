'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Profile } from '@/lib/types'
import { Footer } from '@/components/layout/Footer'
import { ShoppingBag, ArrowLeft, Zap } from 'lucide-react'

interface Props { profile: Profile | null }

const categorias = ['Pets', 'Beleza', 'Fitness', 'Casa', 'Tecnologia', 'Bebê', 'Moda', 'Ferramentas', 'Auto']

export function ProdutosClient({ profile: _ }: Props) {
  const [categoria, setCategoria] = useState('Pets')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const buscar = async () => {
    setLoading(true)
    setResult(null)
    await new Promise(r => setTimeout(r, 1500))
    setResult(`Lista de produtos em alta na categoria "${categoria}" gerada. Conecte o endpoint /api/trending-products para retornar produtos com custo, preço de venda, margem estimada e links diretos para AliExpress, Shopee e Mercado Livre.`)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/ferramentas" className="text-white/40 hover:text-white/70"><ArrowLeft size={18} /></Link>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2"><ShoppingBag className="text-green-400" size={20} />Produtos Bons</h1>
            <p className="text-xs text-white/40">20 créditos por busca · Produtos em alta com margens reais</p>
          </div>
        </div>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-6">
          <label className="text-sm text-white/60 font-medium block mb-3">Selecione a categoria</label>
          <div className="flex flex-wrap gap-2 mb-6">
            {categorias.map(cat => (
              <button key={cat} onClick={() => setCategoria(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  categoria === cat
                    ? 'bg-green-500/20 border-green-500/40 text-green-400'
                    : 'border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
                }`}>
                {cat}
              </button>
            ))}
          </div>
          <button onClick={buscar} disabled={loading}
            className="w-full py-3 bg-green-600 hover:bg-green-500 disabled:opacity-40 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2">
            {loading ? <><div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />Buscando produtos...</> : <><Zap size={15} />Buscar produtos em alta</>}
          </button>
        </div>
        {result && (
          <div className="bg-[#111] border border-green-500/20 rounded-2xl p-6">
            <h2 className="font-bold text-sm text-green-400 mb-3">Produtos Encontrados</h2>
            <p className="text-sm text-white/70 leading-relaxed">{result}</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
