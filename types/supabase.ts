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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      User: {
        Row: {
          access_token: string
          access_token_expiration: string
          avatar_url: string
          created_at: string
          date_of_birth: string
          CURP: string
          email: string
          id: string
          name: string
          refresh_token: string
          role: Database["public"]["Enums"]["role"]
        }
        Insert: {
          access_token: string
          access_token_expiration: string
          avatar_url: string
          created_at?: string
          date_of_birth: string
          CURP: string
          email: string
          id?: number
          name: string
          refresh_token: string
          role: Database["public"]["Enums"]["role"]
        }
        Update: {
          access_token?: string
          access_token_expiration?: string
          avatar_url?: string
          created_at?: string
          date_of_birth?: string
          CURP?: string
          email?: string
          id?: number
          name?: string
          refresh_token?: string
          role?: Database["public"]["Enums"]["role"]
        }
      }
      Event: {
        Row: {
          name: string
          id: number
          start_date: string
          finish_date: string
          start_schedule: string
          finish_schedule: string
        }
        Insert: {
          name: string
          id?: number
          start_date: string
          finish_date: string
          start_schedule: string
          finish_schedule: string
        }
        Update: {
          name?: string
          id?: number
          start_date?: string
          finish_date?: string
          start_schedule?: string
          finish_schedule?: string
        }
      }
      Material: {
        Row: {
          name: string
          id: number
        }
        Insert: {
          name: string
          id?: number
        }
        Update: {
          name?: string
          id?:  number
        }
      }
      Coupon: {
        Row: {
          c_user_id: string
          event_id: number
          material_id: number
          id: number
          code: string
          thumbnail_url: string
          status: Database["public"]["Enums"]["status"]
        }
        Insert: {
          c_user_id: string
          event_id: number
          material_id: number
          id?: number
          code: string
          thumbnail_url: string
          status: Database["public"]["Enums"]["status"]
        }
        Update: {
          c_user_id?: string
          event_id?: number
          material_id?: number
          id?: number
          code?: string
          thumbnail_url?: string
          status?: Database["public"]["Enums"]["status"]
        }
      }
      Store: {
        Row: {
          avatar_url: string
          business_name: string
          description: string
          id: number
          name_store_manager: string
          owner_user_id: string
          store_email: string
          store_number: string
        }
        Insert: {
          avatar_url?: string
          business_name: string
          description?: string
          id?: number
          name_store_manager: string
          owner_user_id: string
          store_email: string
          store_number: string
        }
        Update: {
          avatar_url?: string
          business_name?: string
          description?: string
          id?: number
          name_store_manager?: string
          owner_user_id?: string
          store_email?: string
          store_number?: string
        }
      }
      Product: {
        Row: {
          name: string
          id: number
          store_id: number
          thumbnail_url: string
        }
        Insert: {
          name: string
          id?: number
          store_id: number
          thumbnail_url: string
        }
        Update: {
          name?: string
          id?: number
          store_id?: number
          thumbnail_url?: string
        }
      }
      EventAddress: {
        Row: {
            event_id: number
            id: number
            postal_code: number
            state: string
            delegation: string
            neighborhood: string
            street: string
            aparment_number: number
            street_number: number
            recipients_name: string
        }
        Insert: {
          event_id: number
          id?: number
          postal_code: number
          state: string
          delegation: string
          neighborhood: string
          street: string
          aparment_number: number
          street_number: number
          recipients_name?: string
        }
        Update: {
          event_id?: number
          id?: number
          postal_code?: number
          state?: string
          delegation?: string
          neighborhood?: string
          street?: string
          aparment_number?: number
          street_number?: number
          recipients_name?: string
        }
      }
      Idea: {
        Row: {
          material_id: number
          id: number
          name: string
          steps: string
          thumbnail_url: string
        }
        Insert: {
          material_id: number
          id?: number
          name: string
          steps: string
          thumbnail_url: string
        }
        Update: {
          material_id?: number
          id?: number
          name?: string
          steps?: string
          thumbnail_url?: string
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
      role: "SELLER" | "CONSUMER" | "ADMIN"
      status: "AVAILABLE" | "USED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
