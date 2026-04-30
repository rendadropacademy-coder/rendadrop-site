'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('E-mail ou senha incorretos.')
    } else {
      router.push('/dashboard')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="font-bold text-xl inline-block mb-6">
            <span className="text-green-400">Renda</span>
            <span className="text-white">Drop</span>
            <span className="text-white/50 text-sm ml-1">Academy</span>
          </Link>
          <h1 className="text-2xl font-bold">Acesse sua conta</h1>
          <p className="text-sm text-white/40 mt-1">Continue aprendendo</p>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <Input label="E-mail" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input label="Senha" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">{error}</p>}
            <Button type="submit" loading={loading} className="w-full" size="lg">Entrar</Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/esqueceu-senha" className="text-xs text-white/40 hover:text-white/70 transition-colors">Esqueceu sua senha?</Link>
          </div>
        </div>

        <p className="text-center text-sm text-white/40 mt-6">
          Não tem conta?{' '}
          <Link href="/register" className="text-green-400 hover:text-green-300 font-medium">Criar conta grátis</Link>
        </p>
      </div>
    </div>
  )
}
