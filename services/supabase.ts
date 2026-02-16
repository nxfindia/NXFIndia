import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Declare process for TypeScript
declare var process: any;

// 1. Get URL: Try process.env first, fall back to the hardcoded URL provided previously
const supabaseUrl = process.env.SUPABASE_URL || 'https://beqttwwmrrowqbhqoooj.supabase.co';

// 2. Get Key: Try process.env. 
// We do NOT hardcode a fallback key here to ensure we rely on the user's valid environment variable.
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

// Validate configuration
if (!supabaseKey) {
  console.warn("Supabase Anon Key is missing! Please check VITE_SUPABASE_ANON_KEY in your .env file.");
} else {
  console.log("Supabase Client initialized. Key length:", supabaseKey.length);
}

// Initialize client ONLY if key is present
export const supabase: SupabaseClient | null = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
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
    const response = await supabase.from('inquiries').insert([data]).select();
    
    if (response.error) {
      console.error("Supabase Request Error:", response.error);
    } else {
      console.log("Supabase Success:", response.data);
    }
    
    return response;
  } catch (err: any) {
    console.error("Unexpected Exception submitting to Supabase:", err);
    return { error: { message: err.message || "An unexpected network error occurred." }, data: null };
  }
};