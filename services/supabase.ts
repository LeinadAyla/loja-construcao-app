import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxhgguqkyyngthqiuaqr.supabase.co'; // seu projectURL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aGdndXFreXluZ3RocWl1YXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NzgxODQsImV4cCI6MjA1NjM1NDE4NH0.Do0rfN__aXBtiI1oOUOygxsaXqvqXvdUmO39Qp_M2uM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);