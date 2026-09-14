import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qjfvgnwnhxrangjuukot.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZnZnbnduaHhyYW5nanV1a290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzNTA3OTQsImV4cCI6MjEwNDkyNjc5NH0.-YvcIULpWQVRk9JZxosX-nOhbFnkLkSEnP0oTglkocM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
