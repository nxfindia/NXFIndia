import { createClient } from '@supabase/supabase-js';

// Access environment variables securely
// Note: In a real Vite/Next.js app, these would be import.meta.env.VITE_... or process.env.NEXT_PUBLIC_...
// Depending on the build system, process.env might need specific configuration.
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

// Initialize client only if keys are present
export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

/**
 * Submits an inquiry to the 'inquiries' table in Supabase.
 * Schema expected:
 * - id: uuid (auto)
 * - created_at: timestamp (auto)
 * - type: text (e.g., 'general', 'sponsor', 'host')
 * - name: text
 * - email: text
 * - organization: text (nullable)
 * - message: text
 * - details: jsonb (nullable, for extra fields like 'location', 'tier')
 */
export const submitInquiry = async (data: {
  type: string;
  name: string;
  email: string;
  organization?: string;
  message: string;
  details?: any;
}) => {
  if (!supabase) {
    console.warn("Supabase credentials missing. Simulating success:", data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { error: null, data: { ...data, id: 'simulated-id' } };
  }

  return await supabase.from('inquiries').insert([data]);
};