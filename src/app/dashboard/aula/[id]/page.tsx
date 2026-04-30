import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/layout/Navbar'
import { getLessonById, getModuleByLessonId } from '@/lib/data/course'
import { LessonClient } from './LessonClient'

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const lessonId = parseInt(id)
  const lesson = getLessonById(lessonId)
  if (!lesson) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const isPremium = profile?.role === 'premium' || profile?.role === 'admin'

  // Block premium-only lessons for free users
  if (!lesson.isFree && !isPremium) {
    redirect('/premium')
  }

  const mod = getModuleByLessonId(lessonId)

  const { data: progress } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', user.id)

  const completedIds = (progress ?? []).map((p: { lesson_id: number }) => p.lesson_id)

  return (
    <>
      <Navbar profile={profile} />
      <LessonClient
        lesson={lesson}
        module={mod!}
        profile={profile}
        completedLessonIds={completedIds}
        userId={user.id}
      />
    </>
  )
}
