'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Lesson, Module, modules } from '@/lib/data/course'
import { Profile } from '@/lib/types'
import { CheckCircle, ArrowLeft, ArrowRight, Lock, Play } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'

interface Props {
  lesson: Lesson
  module: Module
  profile: Profile | null
  completedLessonIds: number[]
  userId: string
}

export function LessonClient({ lesson, module: mod, profile, completedLessonIds, userId }: Props) {
  const router = useRouter()
  const [completed, setCompleted] = useState(completedLessonIds.includes(lesson.id))
  const [loading, setLoading] = useState(false)

  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'

  const allLessons = modules.flatMap(m => m.lessons)
  const currentIdx = allLessons.findIndex(l => l.id === lesson.id)
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null

  const toggleComplete = async () => {
    setLoading(true)
    const supabase = createClient()
    if (completed) {
      await supabase.from('lesson_progress').delete()
        .eq('user_id', userId).eq('lesson_id', lesson.id)
      setCompleted(false)
    } else {
      await supabase.from('lesson_progress').upsert({
        user_id: userId,
        lesson_id: lesson.id,
        completed_at: new Date().toISOString(),
      })
      setCompleted(true)
    }
    setLoading(false)
  }

  const goToNext = async () => {
    if (!completed) await toggleComplete()
    if (nextLesson) {
      const isLocked = !isPremium && !nextLesson.isFree
      if (isLocked) { router.push('/premium'); return }
      router.push(`/dashboard/aula/${nextLesson.id}`)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/30 mb-6">
          <Link href="/dashboard" className="hover:text-white/60 flex items-center gap-1">
            <ArrowLeft size={12} /> Curso
          </Link>
          <span>/</span>
          <span>Módulo {mod.id}</span>
          <span>/</span>
          <span className="text-white/50">{lesson.title}</span>
        </div>

        {/* Video */}
        <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-6 border border-white/5">
          <iframe
            src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                Módulo {mod.id}
              </span>
              <span className="text-xs text-white/30">{lesson.duration}</span>
            </div>
            <h1 className="text-xl font-bold">{lesson.title}</h1>
          </div>
          <button
            onClick={toggleComplete}
            disabled={loading}
            className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
              completed
                ? 'bg-green-500/15 border-green-500/30 text-green-400'
                : 'border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
            }`}
          >
            <CheckCircle size={16} />
            {completed ? 'Concluída' : 'Marcar como concluída'}
          </button>
        </div>

        {/* Description */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-5 mb-8">
          <p className="text-sm text-white/60 leading-relaxed">{lesson.description}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          {prevLesson && (
            <Link
              href={`/dashboard/aula/${prevLesson.id}`}
              className="flex-1 flex items-center gap-2 px-4 py-3 bg-[#111] border border-white/5 hover:border-white/15 rounded-xl text-sm transition-all"
            >
              <ArrowLeft size={15} className="text-white/40" />
              <div className="min-w-0">
                <p className="text-xs text-white/30">Anterior</p>
                <p className="text-sm text-white/70 truncate">{prevLesson.title}</p>
              </div>
            </Link>
          )}
          <button
            onClick={goToNext}
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl text-sm transition-all"
          >
            {nextLesson ? (
              <>
                {!isPremium && !nextLesson.isFree ? <Lock size={15} /> : <ArrowRight size={15} />}
                Próxima aula
              </>
            ) : (
              <>
                <CheckCircle size={15} />
                Finalizar curso
              </>
            )}
          </button>
        </div>

        {/* Module lessons sidebar */}
        <div className="mt-10 bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
          <div className="px-5 py-3 border-b border-white/5">
            <h3 className="text-sm font-semibold">Módulo {mod.id}: {mod.title}</h3>
          </div>
          <div className="divide-y divide-white/5">
            {mod.lessons.map((l) => {
              const isCompleted = completedLessonIds.includes(l.id) || (l.id === lesson.id && completed)
              const isLocked = !isPremium && !l.isFree
              const isCurrent = l.id === lesson.id
              return (
                <div
                  key={l.id}
                  className={`flex items-center gap-3 px-5 py-3 ${isCurrent ? 'bg-green-500/5' : ''}`}
                >
                  <div className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle className="text-green-400" size={14} />
                    ) : isLocked ? (
                      <Lock className="text-white/20" size={14} />
                    ) : (
                      <Play className="text-white/30" size={14} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {isLocked ? (
                      <p className="text-xs text-white/25 truncate">{l.title}</p>
                    ) : (
                      <Link href={`/dashboard/aula/${l.id}`} className={`text-xs truncate block ${isCurrent ? 'text-green-400 font-medium' : 'text-white/50 hover:text-white/80'}`}>
                        {l.title}
                      </Link>
                    )}
                  </div>
                  <span className="text-xs text-white/20 shrink-0">{l.duration}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
