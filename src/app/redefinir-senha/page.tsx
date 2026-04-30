'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password.length < 6) { setError('Mínimo 6 caracteres.'); return }
    if (password !== confirm) { setError('As senhas não coincidem.'); return }
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setError('Não foi possível redefinir. Solicite um novo link.')
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="font-bold text-xl inline-block mb-6">
            <span className="text-green-400">Renda</span><span className="text-white">Drop</span>
          </Link>
          <h1 className="text-2xl font-bold">Nova senha</h1>
        </div>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Nova senha" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            <Input label="Confirmar nova senha" type="password" placeholder="••••••••" value={confirm} onChange={e => setConfirm(e.target.value)} required />
            {error && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">{error}</p>}
            <Button type="submit" loading={loading} className="w-full" size="lg">Redefinir senha</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
