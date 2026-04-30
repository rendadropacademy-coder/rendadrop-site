'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Profile } from '@/lib/types'
import { LogOut, Zap, Crown, LayoutDashboard, Wrench } from 'lucide-react'

interface NavbarProps {
  profile?: Profile | null
}

export function Navbar({ profile }: NavbarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'
  const isAdmin = profile?.role === 'admin'

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href={profile ? '/dashboard' : '/'} className="font-bold text-base tracking-tight">
          <span className="text-green-400">Renda</span>
          <span className="text-white">Drop</span>
          <span className="text-white/50 text-xs ml-1">Academy</span>
        </Link>

        {profile ? (
          <nav className="flex items-center gap-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              <LayoutDashboard size={14} />
              <span className="hidden sm:inline">Curso</span>
            </Link>
            <Link
              href="/ferramentas"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              <Wrench size={14} />
              <span className="hidden sm:inline">Ferramentas</span>
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-yellow-400 hover:bg-yellow-500/10 transition-all"
              >
                <Crown size={14} />
                <span className="hidden sm:inline">Admin</span>
              </Link>
            )}

            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
              {isPremium ? (
                <span className="flex items-center gap-1 text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-full font-medium">
                  <Crown size={10} />
                  Premium
                </span>
              ) : (
                <Link
                  href="/premium"
                  className="flex items-center gap-1 text-xs bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-green-500/40 px-2 py-1 rounded-full transition-all"
                >
                  <Zap size={10} />
                  Upgrade
                </Link>
              )}
              {profile.credits >= 0 && (
                <span className="text-xs text-white/50">
                  <span className="text-green-400 font-bold">{profile.credits}</span> cr
                </span>
              )}
              <button
                onClick={handleLogout}
                className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                title="Sair"
              >
                <LogOut size={14} />
              </button>
            </div>
          </nav>
        ) : (
          <nav className="flex items-center gap-2">
            <Link
              href="/login"
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all"
            >
              Começar grátis
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
