'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Profile } from '@/lib/types'
import { Footer } from '@/components/layout/Footer'
import { Calculator, ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react'

interface Props { profile: Profile | null }

export function SimuladorClient({ profile }: Props) {
  const [custoP, setCustoP] = useState('')
  const [precoV, setPrecoV] = useState('')
  const [frete, setFrete] = useState('')
  const [taxas, setTaxas] = useState('5')
  const [result, setResult] = useState<null | {
    lucro: number; margem: number; roasMin: number; breakeven: number
  }>(null)

  const calcular = () => {
    const c = parseFloat(custoP) || 0
    const p = parseFloat(precoV) || 0
    const f = parseFloat(frete) || 0
    const t = (parseFloat(taxas) || 0) / 100

    const taxaValor = p * t
    const lucro = p - c - f - taxaValor
    const margem = p > 0 ? (lucro / p) * 100 : 0
    const roasMin = p > 0 ? p / lucro : 0
    const breakeven = lucro > 0 ? c + f + taxaValor : 0

    setResult({ lucro, margem, roasMin, breakeven })
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/ferramentas" className="text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Calculator className="text-blue-400" size={20} />
              Simulador de Lucro
            </h1>
            <p className="text-xs text-white/40">Calcule margens antes de anunciar</p>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-6">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Custo do produto (R$)', val: custoP, set: setCustoP, placeholder: '25,00' },
              { label: 'Preço de venda (R$)', val: precoV, set: setPrecoV, placeholder: '89,90' },
              { label: 'Custo de frete (R$)', val: frete, set: setFrete, placeholder: '15,00' },
              { label: 'Taxa da plataforma (%)', val: taxas, set: setTaxas, placeholder: '5' },
            ].map(({ label, val, set, placeholder }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="text-xs text-white/60 font-medium">{label}</label>
                <input
                  type="number"
                  placeholder={placeholder}
                  value={val}
                  onChange={e => set(e.target.value)}
                  className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-white/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
          </div>
          <button
            onClick={calcular}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all"
          >
            Calcular lucro
          </button>
        </div>

        {result && (
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <h2 className="font-bold text-sm mb-4 text-white/70">Resultado</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: 'Lucro por venda',
                  value: `R$ ${result.lucro.toFixed(2)}`,
                  icon: result.lucro >= 0 ? <TrendingUp className="text-green-400" size={16} /> : <TrendingDown className="text-red-400" size={16} />,
                  color: result.lucro >= 0 ? 'text-green-400' : 'text-red-400',
                },
                {
                  label: 'Margem líquida',
                  value: `${result.margem.toFixed(1)}%`,
                  icon: <TrendingUp className="text-blue-400" size={16} />,
                  color: result.margem >= 20 ? 'text-green-400' : result.margem >= 10 ? 'text-yellow-400' : 'text-red-400',
                },
                {
                  label: 'ROAS mínimo',
                  value: result.roasMin > 0 ? `${result.roasMin.toFixed(2)}x` : '—',
                  icon: <Calculator className="text-purple-400" size={16} />,
                  color: 'text-purple-400',
                },
                {
                  label: 'Ponto de equilíbrio',
                  value: `R$ ${result.breakeven.toFixed(2)}`,
                  icon: <Calculator className="text-white/40" size={16} />,
                  color: 'text-white/70',
                },
              ].map(({ label, value, icon, color }) => (
                <div key={label} className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    {icon}
                    <span className="text-xs text-white/40">{label}</span>
                  </div>
                  <p className={`text-2xl font-bold ${color}`}>{value}</p>
                </div>
              ))}
            </div>
            {result.margem < 15 && result.lucro > 0 && (
              <p className="mt-4 text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-2 rounded-lg">
                ⚠️ Margem abaixo de 15%. Considere aumentar o preço ou reduzir custos antes de anunciar.
              </p>
            )}
            {result.lucro < 0 && (
              <p className="mt-4 text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                ❌ Este produto daria prejuízo. Revise os custos ou aumente o preço de venda.
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
