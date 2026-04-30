'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Profile } from '@/lib/types'
import { Footer } from '@/components/layout/Footer'
import { Users, Crown, TrendingUp, BookOpen, Search, CheckCircle, Clock } from 'lucide-react'

interface AdminUser {
  id: string
  name: string
  email: string
  role: string
  credits: number
  created_at: string
}

interface Stats {
  totalUsers: number
  premiumUsers: number
  freeUsers: number
  totalProgress: number
}

interface Props {
  profile: Profile | null
  stats: Stats
  recentUsers: AdminUser[]
}

export function AdminClient({ profile: _, stats, recentUsers }: Props) {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<AdminUser[]>(recentUsers)
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  const togglePremium = async (user: AdminUser) => {
    setUpdatingId(user.id)
    const supabase = createClient()
    const newRole = user.role === 'premium' ? 'free' : 'premium'
    const newCredits = newRole === 'premium' ? (user.credits + 300) : user.credits
    await supabase.from('profiles').update({ role: newRole, credits: newCredits }).eq('id', user.id)
    setUsers(prev => prev.map(u => u.id === user.id ? { ...u, role: newRole, credits: newCredits } : u))
    setUpdatingId(null)
  }

  const filtered = users.filter(u =>
    u.email?.toLowerCase().includes(search.toLowerCase()) ||
    u.name?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Crown className="text-yellow-400" size={22} />
            Painel Administrativo
          </h1>
          <p className="text-white/40 text-sm mt-1">Gerenciamento de usuários e métricas</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total de alunos', value: stats.totalUsers, icon: <Users size={18} />, color: 'text-blue-400' },
            { label: 'Premium', value: stats.premiumUsers, icon: <Crown size={18} />, color: 'text-yellow-400' },
            { label: 'Gratuitos', value: stats.freeUsers, icon: <Users size={18} />, color: 'text-white/50' },
            { label: 'Aulas concluídas', value: stats.totalProgress, icon: <BookOpen size={18} />, color: 'text-green-400' },
          ].map(({ label, value, icon, color }) => (
            <div key={label} className="bg-[#111] border border-white/5 rounded-2xl p-5">
              <div className={`mb-2 ${color}`}>{icon}</div>
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-xs text-white/40 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Users table */}
        <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between gap-4">
            <h2 className="font-bold text-sm">Usuários</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
              <input
                type="text"
                placeholder="Buscar por nome ou email..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-[#0a0a0a] border border-white/10 text-white placeholder:text-white/20 rounded-lg pl-9 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-green-500 w-64"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  {['Usuário', 'E-mail', 'Plano', 'Créditos', 'Cadastro', 'Ação'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs text-white/30 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((user) => (
                  <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 text-sm font-medium">{user.name || '—'}</td>
                    <td className="px-4 py-3 text-xs text-white/50">{user.email}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                        user.role === 'premium'
                          ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                          : user.role === 'admin'
                          ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                          : 'bg-white/5 border-white/10 text-white/40'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-green-400 font-medium">{user.credits}</td>
                    <td className="px-4 py-3 text-xs text-white/30 flex items-center gap-1">
                      <Clock size={11} />
                      {new Date(user.created_at).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-4 py-3">
                      {user.role !== 'admin' && (
                        <button
                          onClick={() => togglePremium(user)}
                          disabled={updatingId === user.id}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all disabled:opacity-50 ${
                            user.role === 'premium'
                              ? 'border-red-500/20 text-red-400 hover:bg-red-500/10'
                              : 'border-green-500/20 text-green-400 hover:bg-green-500/10'
                          }`}
                        >
                          {updatingId === user.id ? '...' : user.role === 'premium' ? 'Revogar premium' : 'Dar premium'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-10 text-white/30 text-sm">Nenhum usuário encontrado</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
