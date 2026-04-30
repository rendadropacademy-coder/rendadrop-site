'use client'
import Link from 'next/link'
import { modules } from '@/lib/data/course'
import { Profile } from '@/lib/types'
import { CheckCircle, Lock, Play, Crown, Zap, Wrench } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'

interface Props {
  profile: Profile | null
  completedLessonIds: number[]
}

export function DashboardClient({ profile, completedLessonIds }: Props) {
  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'
  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0)
  const completedCount = completedLessonIds.length
  const progressPct = Math.round((completedCount / totalLessons) * 100)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Boas-vindas */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Olá, {profile?.name?.split(' ')[0] ?? 'Aluno'} 👋
          </h1>
          <p className="text-white/40 text-sm mt-1">Continue de onde parou</p>
        </div>

        {/* Banner upgrade (free only) */}
        {!isPremium && (
          <div className="mb-6 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-sm flex items-center gap-2">
                  <Zap className="text-green-400" size={14} />
                  Desbloqueie o curso completo
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Acesse todos os {totalLessons} aulas, 6 ferramentas de IA e 300 créditos de bônus por apenas R$97.
                </p>
              </div>
              <Link
                href="/premium"
                className="shrink-0 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black text-sm font-bold rounded-xl transition-all"
              >
                Fazer upgrade
              </Link>
            </div>
          </div>
        )}

        {/* Progresso */}
        <div className="mb-8 bg-[#111] border border-white/5 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progresso geral</span>
            <span className="text-sm text-green-400 font-bold">{completedCount}/{totalLessons} aulas</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs text-white/30 mt-2">{progressPct}% concluído</p>
        </div>

        {/* Acesso rápido às ferramentas */}
        <div className="mb-8">
          <Link
            href="/ferramentas"
            className="flex items-center gap-3 bg-[#111] border border-white/5 hover:border-green-500/20 rounded-2xl p-4 transition-all group"
          >
            <div className="bg-green-500/10 p-2.5 rounded-xl">
              <Wrench className="text-green-400" size={18} />
            </div>
            <div>
              <p className="font-semibold text-sm group-hover:text-green-400 transition-colors">Ferramentas de IA</p>
              <p className="text-xs text-white/40">
                {isPremium
                  ? `${profile?.credits ?? 0} créditos disponíveis`
                  : 'Simulador e Assistente disponíveis gratuitamente'}
              </p>
            </div>
            <span className="ml-auto text-white/30 group-hover:text-green-400 text-lg">→</span>
          </Link>
        </div>

        {/* Módulos */}
        <div className="space-y-6">
          {modules.map((mod) => {
            const modCompleted = mod.lessons.filter(l => completedLessonIds.includes(l.id)).length
            return (
              <div key={mod.id} className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-medium">
                        Módulo {mod.id}
                      </span>
                      <span className="text-xs text-white/30">{modCompleted}/{mod.lessons.length} aulas</span>
                    </div>
                    <h2 className="font-semibold text-sm">{mod.title}</h2>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-white/50">
                    {Math.round((modCompleted / mod.lessons.length) * 100)}%
                  </div>
                </div>

                <div className="divide-y divide-white/5">
                  {mod.lessons.map((lesson) => {
                    const isCompleted = completedLessonIds.includes(lesson.id)
                    const isLocked = !isPremium && !lesson.isFree

                    return (
                      <div key={lesson.id} className="flex items-center gap-3 px-5 py-3">
                        <div className="shrink-0">
                          {isCompleted ? (
                            <CheckCircle className="text-green-400" size={16} />
                          ) : isLocked ? (
                            <Lock className="text-white/20" size={16} />
                          ) : (
                            <Play className="text-white/40" size={16} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          {isLocked ? (
                            <div>
                              <p className="text-sm text-white/30 truncate">{lesson.title}</p>
                              <p className="text-xs text-white/20">{lesson.duration}</p>
                            </div>
                          ) : (
                            <Link href={`/dashboard/aula/${lesson.id}`} className="group block">
                              <p className="text-sm text-white/80 group-hover:text-white truncate transition-colors">{lesson.title}</p>
                              <p className="text-xs text-white/30">{lesson.duration}</p>
                            </Link>
                          )}
                        </div>
                        {isLocked && (
                          <Link href="/premium" className="shrink-0">
                            <Crown className="text-yellow-500/50 hover:text-yellow-400 transition-colors" size={14} />
                          </Link>
                        )}
                        {lesson.isFree && !isPremium && (
                          <span className="shrink-0 text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                            grátis
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}
