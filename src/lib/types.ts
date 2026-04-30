export type UserRole = 'free' | 'premium' | 'admin'

export type Profile = {
  id: string
  email: string
  name: string
  role: UserRole
  credits: number
  created_at: string
  updated_at: string
}

export type LessonProgress = {
  id: string
  user_id: string
  lesson_id: number
  completed_at: string
}
