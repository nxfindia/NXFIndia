import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Declare process for TypeScript
declare var process: any;

// 1. Get URL: Try process.env first, fall back to the hardcoded URL
const supabaseUrl = process.env.SUPABASE_URL || 'https://beqttwwmrrowqbhqoooj.supabase.co';

// 2. Get Key: Try process.env, fallback to the provided key
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_AqTmInNQoIEGNjleHCbAEQ_fQZEFK3s';

// Validate configuration
if (!supabaseKey) {
  console.warn("Supabase Anon Key is missing! Please check VITE_SUPABASE_ANON_KEY in your .env file.");
}

// Initialize client ONLY if key is present
// We disable auth persistence to prevent issues with localStorage/cookies in some environments
export const supabase: SupabaseClient | null = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    }) 
  : null;

/**
 * Submits an inquiry to the 'inquiries' table in Supabase.
 * Used in: pages/Contact.tsx
 */
export const submitInquiry = async (data: {
  type: string;
  name: string;
  email: string;
  organization?: string | null;
  message: string;
  location?: string | null;
  sponsor_type?: string | null;
  interest_area?: string | null;
}) => {
  // Graceful handling if supabase is not initialized
  if (!supabase) {
    const errorMsg = "Configuration Error: Supabase client is not initialized. VITE_SUPABASE_ANON_KEY is missing.";
    console.error(errorMsg);
    return { error: { message: errorMsg }, data: null };
  }

  try {
    console.log("Submitting inquiry to:", supabaseUrl);
    
    // IMPORTANT: We use .insert() WITHOUT .select().
    // Using .select() triggers a READ operation. Since our RLS policy typically 
    // only allows anonymous users to INSERT (not SELECT), adding .select() 
    // causes a "new row violates row-level security policy" error.
    const response = await supabase.from('inquiries').insert([data]);
    
    if (response.error) {
      console.error("Supabase Request Error:", response.error);
      return { error: { message: response.error.message || "Database request failed." }, data: null };
    }
    
    console.log("Supabase Success (Status):", response.status);
    return { data: true, error: null };
  } catch (err: any) {
    console.error("Unexpected Exception submitting to Supabase:", err);
    // Handle 'Load failed' specifically to give a better hint
    if (err.message === 'TypeError: Load failed' || err.message === 'Load failed') {
      return { error: { message: "Network Error: Request blocked. Please check your connection or Ad Blocker." }, data: null };
    }
    return { error: { message: err.message || "An unexpected network error occurred." }, data: null };
  }
};