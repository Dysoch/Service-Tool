// src/supabaseClient.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kksropvoixzzfaidhtzx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrc3JvcHZvaXh6emZhaWRodHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMTYzMDIsImV4cCI6MjA3MzU5MjMwMn0.ndFYcMbI9ekgE8y_u-ivFC2ZqMlxAvG0AwBfu6leOCA'

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)


