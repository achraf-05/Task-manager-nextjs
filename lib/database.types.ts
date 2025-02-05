export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          title: string
          description: string | null
          status: 'TODO' | 'IN_PROGRESS' | 'DONE'
          priority: 'LOW' | 'MEDIUM' | 'HIGH'
          due_date: string | null
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          status?: 'TODO' | 'IN_PROGRESS' | 'DONE'
          priority?: 'LOW' | 'MEDIUM' | 'HIGH'
          due_date?: string | null
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          status?: 'TODO' | 'IN_PROGRESS' | 'DONE'
          priority?: 'LOW' | 'MEDIUM' | 'HIGH'
          due_date?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Enums: {
      task_status: 'TODO' | 'IN_PROGRESS' | 'DONE'
      task_priority: 'LOW' | 'MEDIUM' | 'HIGH'
    }
  }
}