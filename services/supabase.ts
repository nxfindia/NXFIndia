import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Declare process for TypeScript
declare var process: any;

// 1. Get URL: Try process.env first, fall back to the hardcoded URL provided previously
const supabaseUrl = process.env.SUPABASE_URL || 'https://beqttwwmrrowqbhqoooj.supabase.co';

// 2. Get Key: Try standard Vite env var (exposed via vite.config.ts)
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

// Validate configuration
if (!supabaseKey) {
  console.error("Supabase Anon Key is missing! Please set VITE_SUPABASE_ANON_KEY in your .env file.");
}

// Initialize client ONLY if key is present to avoid "supabaseKey is required" error
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
  console.log("Attempting to submit inquiry to Supabase...", { url: supabaseUrl, hasKey: !!supabaseKey, data });
  
  // Graceful handling if supabase is not initialized
  if (!supabase) {
    const errorMsg = "Supabase client is not initialized. Missing VITE_SUPABASE_ANON_KEY.";
    console.error(errorMsg);
    return { error: { message: errorMsg }, data: null };
  }

  try {
    const response = await supabase.from('inquiries').insert([data]).select();
    
    if (response.error) {
      console.error("Supabase Error:", response.error);
    } else {
      console.log("Supabase Success:", response.data);
    }
    
    return response;
  } catch (err) {
    console.error("Unexpected Error submitting to Supabase:", err);
    return { error: err, data: null };
  }
};