const { initializeSupabase } = require('supabase-js');

export const supabase = initializeSupabase( process.env.SUPABASE_URL, process.env.SUPABASE_KEY );