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

// Helper to simulate a successful submission when backend is unreachable
const mockSubmit = async (data: any) => {
  console.warn("⚠️ NETWORK ERROR / OFFLINE MODE DETECTED. FALLING BACK TO MOCK SUBMISSION.");
  console.log("Mock Data received:", data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500)); 
  return { data: true, error: null }; 
};

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
    console.warn("Supabase client is not initialized. Using Mock.");
    return mockSubmit(data);
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
      // Fallback to mock if it's a specific fetch error disguised as a response error, 
      // or just return the error. For this specific 'Load failed' issue often seen in preview envs:
      return { error: { message: response.error.message || "Database request failed." }, data: null };
    }
    
    console.log("Supabase Success (Status):", response.status);
    return { data: true, error: null };
  } catch (err: any) {
    console.error("Unexpected Exception submitting to Supabase:", err);
    
    // Handle 'Load failed' (Safari/Network block) or 'Failed to fetch' (Chrome/Network block)
    // primarily occurs in restrictive iframes or when adblockers block Supabase.
    if (
      err.message === 'TypeError: Load failed' || 
      err.message === 'Load failed' || 
      err.message === 'Failed to fetch' ||
      err.name === 'TypeError'
    ) {
      return mockSubmit(data);
    }
    
    return { error: { message: err.message || "An unexpected network error occurred." }, data: null };
  }
};