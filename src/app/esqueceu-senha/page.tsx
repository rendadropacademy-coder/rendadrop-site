'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/redefinir-senha`,
    })
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="font-bold text-xl inline-block mb-6">
            <span className="text-green-400">Renda</span><span className="text-white">Drop</span>
          </Link>
          <h1 className="text-2xl font-bold">Recuperar senha</h1>
        </div>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
          {sent ? (
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <p className="font-semibold mb-2">E-mail enviado!</p>
              <p className="text-sm text-white/50">Verifique sua caixa de entrada.</p>
              <Link href="/login" className="block mt-6 text-sm text-green-400 hover:text-green-300">Voltar para o login</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-white/50">Digite seu e-mail para receber o link de recuperação.</p>
              <Input label="E-mail" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
              <Button type="submit" loading={loading} className="w-full" size="lg">Enviar link</Button>
            </form>
          )}
        </div>
        <p className="text-center text-sm text-white/40 mt-6">
          <Link href="/login" className="text-green-400 hover:text-green-300">← Voltar para o login</Link>
        </p>
      </div>
    </div>
  )
}
