export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_comments: {
        Row: {
          approved: boolean | null
          content: string
          created_at: string | null
          email: string
          id: string
          name: string
          post_id: string | null
        }
        Insert: {
          approved?: boolean | null
          content: string
          created_at?: string | null
          email: string
          id?: string
          name: string
          post_id?: string | null
        }
        Update: {
          approved?: boolean | null
          content?: string
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          post_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          content: string | null
          cover_url: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          published: boolean | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          cover_url?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          published?: boolean | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          cover_url?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          id: string
          order_index: number | null
          question: string
        }
        Insert: {
          answer: string
          category?: string | null
          id?: string
          order_index?: number | null
          question: string
        }
        Update: {
          answer?: string
          category?: string | null
          id?: string
          order_index?: number | null
          question?: string
        }
        Relationships: []
      }
      kit_products: {
        Row: {
          id: string
          kit_id: string | null
          product_id: string | null
          quantity: number | null
        }
        Insert: {
          id?: string
          kit_id?: string | null
          product_id?: string | null
          quantity?: number | null
        }
        Update: {
          id?: string
          kit_id?: string | null
          product_id?: string | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "kit_products_kit_id_fkey"
            columns: ["kit_id"]
            isOneToOne: false
            referencedRelation: "kits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kit_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      kits: {
        Row: {
          created_at: string | null
          description: string | null
          featured: boolean | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      landing_pages: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          published: boolean | null
          slug: string
          title: string
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          published?: boolean | null
          slug: string
          title: string
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          published?: boolean | null
          slug?: string
          title?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          client_id: string | null
          created_at: string | null
          email: string | null
          id: string
          interested_in: string | null
          message: string | null
          name: string
          phone: string | null
          source: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          interested_in?: string | null
          message?: string | null
          name: string
          phone?: string | null
          source?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          interested_in?: string | null
          message?: string | null
          name?: string
          phone?: string | null
          source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      manuals: {
        Row: {
          created_at: string | null
          id: string
          pdf_url: string
          product_id: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          pdf_url: string
          product_id?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          id?: string
          pdf_url?: string
          product_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "manuals_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          client_id: string | null
          created_at: string | null
          id: string
          items: Json
          status: string | null
          whatsapp_sent: boolean | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string | null
          id?: string
          items: Json
          status?: string | null
          whatsapp_sent?: boolean | null
        }
        Update: {
          client_id?: string | null
          created_at?: string | null
          id?: string
          items?: Json
          status?: string | null
          whatsapp_sent?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      product_images: {
        Row: {
          alt: string | null
          id: string
          order_index: number | null
          product_id: string | null
          url: string
        }
        Insert: {
          alt?: string | null
          id?: string
          order_index?: number | null
          product_id?: string | null
          url: string
        }
        Update: {
          alt?: string | null
          id?: string
          order_index?: number | null
          product_id?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_pdfs: {
        Row: {
          id: string
          product_id: string | null
          title: string
          url: string
        }
        Insert: {
          id?: string
          product_id?: string | null
          title: string
          url: string
        }
        Update: {
          id?: string
          product_id?: string | null
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_pdfs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_variants: {
        Row: {
          color: string | null
          compatibility: string | null
          id: string
          product_id: string | null
          size: string | null
          sku: string | null
          voltage: string | null
        }
        Insert: {
          color?: string | null
          compatibility?: string | null
          id?: string
          product_id?: string | null
          size?: string | null
          sku?: string | null
          voltage?: string | null
        }
        Update: {
          color?: string | null
          compatibility?: string | null
          id?: string
          product_id?: string | null
          size?: string | null
          sku?: string | null
          voltage?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand: string | null
          category_id: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          id: string
          name: string
          short_description: string | null
          slug: string
          specs_json: Json | null
          type: Database["public"]["Enums"]["product_type"]
          updated_at: string | null
        }
        Insert: {
          brand?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          name: string
          short_description?: string | null
          slug: string
          specs_json?: Json | null
          type: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
        }
        Update: {
          brand?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          name?: string
          short_description?: string | null
          slug?: string
          specs_json?: Json | null
          type?: Database["public"]["Enums"]["product_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      project_images: {
        Row: {
          id: string
          order_index: number | null
          project_id: string | null
          type: string
          url: string
        }
        Insert: {
          id?: string
          order_index?: number | null
          project_id?: string | null
          type: string
          url: string
        }
        Update: {
          id?: string
          order_index?: number | null
          project_id?: string | null
          type?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_images_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          location: string | null
          slug: string
          testimonial: string | null
          title: string
          type: Database["public"]["Enums"]["project_type"]
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          location?: string | null
          slug: string
          testimonial?: string | null
          title: string
          type: Database["public"]["Enums"]["project_type"]
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          location?: string | null
          slug?: string
          testimonial?: string | null
          title?: string
          type?: Database["public"]["Enums"]["project_type"]
          video_url?: string | null
        }
        Relationships: []
      }
      related_products: {
        Row: {
          id: string
          product_id: string | null
          related_id: string | null
        }
        Insert: {
          id?: string
          product_id?: string | null
          related_id?: string | null
        }
        Update: {
          id?: string
          product_id?: string | null
          related_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "related_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "related_products_related_id_fkey"
            columns: ["related_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_messages: {
        Row: {
          author_id: string | null
          created_at: string | null
          id: string
          internal: boolean | null
          message: string
          ticket_id: string | null
        }
        Insert: {
          author_id?: string | null
          created_at?: string | null
          id?: string
          internal?: boolean | null
          message: string
          ticket_id?: string | null
        }
        Update: {
          author_id?: string | null
          created_at?: string | null
          id?: string
          internal?: boolean | null
          message?: string
          ticket_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_messages_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          agent_id: string | null
          client_id: string
          created_at: string | null
          description: string
          id: string
          priority: Database["public"]["Enums"]["ticket_priority"] | null
          status: Database["public"]["Enums"]["ticket_status"] | null
          subject: string
          updated_at: string | null
        }
        Insert: {
          agent_id?: string | null
          client_id: string
          created_at?: string | null
          description: string
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"] | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          subject: string
          updated_at?: string | null
        }
        Update: {
          agent_id?: string | null
          client_id?: string
          created_at?: string | null
          description?: string
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"] | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          subject?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tickets_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tutorials: {
        Row: {
          category: string | null
          content: string | null
          created_at: string | null
          id: string
          pdf_url: string | null
          slug: string
          title: string
          type: string | null
          vimeo_id: string | null
          youtube_id: string | null
        }
        Insert: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          pdf_url?: string | null
          slug: string
          title: string
          type?: string | null
          vimeo_id?: string | null
          youtube_id?: string | null
        }
        Update: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          pdf_url?: string | null
          slug?: string
          title?: string
          type?: string | null
          vimeo_id?: string | null
          youtube_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      product_type:
        | "SMART_HOME"
        | "SEGURIDAD"
        | "ILUMINACION"
        | "CLIMATIZACION"
        | "ACCESO"
        | "AGUA"
      project_type: "VIVIENDA" | "DEPARTAMENTO" | "EDIFICIO" | "OFICINA"
      ticket_priority: "BAJA" | "MEDIA" | "ALTA"
      ticket_status: "ABIERTO" | "EN_PROCESO" | "CERRADO"
      user_role: "ADMIN" | "EDITOR" | "VENDEDOR" | "CLIENTE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      product_type: [
        "SMART_HOME",
        "SEGURIDAD",
        "ILUMINACION",
        "CLIMATIZACION",
        "ACCESO",
        "AGUA",
      ],
      project_type: ["VIVIENDA", "DEPARTAMENTO", "EDIFICIO", "OFICINA"],
      ticket_priority: ["BAJA", "MEDIA", "ALTA"],
      ticket_status: ["ABIERTO", "EN_PROCESO", "CERRADO"],
      user_role: ["ADMIN", "EDITOR", "VENDEDOR", "CLIENTE"],
    },
  },
} as const
