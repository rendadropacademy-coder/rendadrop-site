'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Profile } from '@/lib/types'
import { Footer } from '@/components/layout/Footer'
import { Bot, ArrowLeft, Send, Lock } from 'lucide-react'

interface Message { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  'Como encontrar produtos vencedores?',
  'Qual margem mínima para anunciar?',
  'Como configurar o Meta Pixel?',
  'Diferença entre CBO e ABO?',
]

interface Props { profile: Profile | null }

export function AssistenteClient({ profile }: Props) {
  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou o Assistente IA do RendaDrop Academy, especialista em dropshipping. Como posso te ajudar hoje?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text?: string) => {
    const msg = text ?? input.trim()
    if (!msg || loading) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: msg }])
    setLoading(true)

    // Note: connect to real API endpoint when backend is ready
    // For now, returns a placeholder response
    await new Promise(r => setTimeout(r, 1000))
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: `Ótima pergunta sobre "${msg}"! Para te dar uma resposta precisa, conecte esta ferramenta à sua API de IA. Configure a variável OPENAI_API_KEY ou ANTHROPIC_API_KEY no backend e implemente o endpoint /api/chat.`,
    }])
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="max-w-3xl mx-auto px-4 py-6 w-full flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/ferramentas" className="text-white/40 hover:text-white/70 transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Bot className="text-green-400" size={20} />
              Assistente IA Especialista
            </h1>
            <p className="text-xs text-white/40">Especializado em dropshipping · Disponível 24/7</p>
          </div>
        </div>

        {!isPremium && (
          <div className="mb-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 text-xs text-yellow-300 flex items-start gap-2">
            <Lock size={12} className="shrink-0 mt-0.5" />
            <span>O Assistente IA é ilimitado no plano gratuito para perguntas básicas.{' '}
              <Link href="/premium" className="underline hover:text-yellow-200">Upgrade para Premium</Link> para acesso sem limites a todas as ferramentas.</span>
          </div>
        )}

        {/* Chat */}
        <div className="flex-1 bg-[#111] border border-white/5 rounded-2xl flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[500px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user'
                    ? 'bg-green-500/20 text-green-100 rounded-tr-sm'
                    : 'bg-white/5 text-white/80 rounded-tl-sm'
                }`}>
                  {msg.role === 'assistant' && <Bot size={12} className="text-green-400 mb-1" />}
                  <p className="leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 rounded-2xl px-4 py-3 text-sm text-white/40">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Sugestões */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/5 p-3 flex gap-2">
            <input
              type="text"
              placeholder="Faça uma pergunta sobre dropshipping..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              disabled={loading}
              className="flex-1 bg-[#0a0a0a] border border-white/10 text-white placeholder:text-white/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="px-4 py-2.5 bg-green-500 hover:bg-green-400 disabled:opacity-40 text-black rounded-xl transition-all"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
