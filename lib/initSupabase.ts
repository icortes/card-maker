import { createClient } from '@supabase/supabase-js';

let NEXT_PUBLIC_SUPABASE_URL: string;
let NEXT_PUBLIC_SUPABASE_ANON_KEY: string;

if (process.env.NEXT_PUBLIC_SUPABASE_URL)
  NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
else throw new Error('NEXT_PUBLIC_SUPABASE_URL variable is not set');

if (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
else throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY variable is not set');

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);
