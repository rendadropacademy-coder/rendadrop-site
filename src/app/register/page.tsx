'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password.length < 6) { setError('A senha deve ter pelo menos 6 caracteres.'); return }
    if (password !== confirm) { setError('As senhas não coincidem.'); return }
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name, role: 'free', credits: 0 } },
    })
    if (error) {
      setError(error.message === 'User already registered' ? 'E-mail já cadastrado.' : error.message)
    } else {
      router.push('/inicio')
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
          <h1 className="text-2xl font-bold">Crie sua conta grátis</h1>
          <p className="text-sm text-white/40 mt-1">Comece sua jornada no dropshipping</p>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
          <form onSubmit={handleRegister} className="space-y-4">
            <Input label="Nome" type="text" placeholder="João Silva" value={name} onChange={e => setName(e.target.value)} required />
            <Input label="E-mail" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input label="Senha" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            <Input label="Confirmar senha" type="password" placeholder="••••••••" value={confirm} onChange={e => setConfirm(e.target.value)} required />
            {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">{error}</p>}
            <Button type="submit" loading={loading} className="w-full" size="lg">Criar conta grátis</Button>
          </form>
          <p className="text-xs text-white/30 text-center mt-4">
            Ao criar conta você concorda com nossos{' '}
            <Link href="/termos-de-uso" className="underline hover:text-white/60">Termos de Uso</Link>
          </p>
        </div>

        <p className="text-center text-sm text-white/40 mt-6">
          Já tem conta?{' '}
          <Link href="/login" className="text-green-400 hover:text-green-300 font-medium">Entrar</Link>
        </p>
      </div>
    </div>
  )
}
