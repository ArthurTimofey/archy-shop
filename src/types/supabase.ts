export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          updated_at?: string
        }
      }
      product: {
        Row: {
          category_id: number | null
          created_at: string
          description: string
          id: number
          image_url: string | null
          name: string
          price: number
          stock: number
          updated_at: string
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          description: string
          id?: number
          image_url?: string | null
          name: string
          price: number
          stock: number
          updated_at?: string
        }
        Update: {
          category_id?: number | null
          created_at?: string
          description?: string
          id?: number
          image_url?: string | null
          name?: string
          price?: number
          stock?: number
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
