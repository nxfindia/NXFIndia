import { createClient } from '@supabase/supabase-js';

// Declare process for TypeScript since we are not using @types/node
declare var process: any;

// The Supabase Key provided
const supabaseKey = 'sb_publishable_AqTmInNQoIEGNjleHCbAEQ_fQZEFK3s';

// IMPORTANT: You must replace this with your actual Supabase Project URL.
// It looks like: https://your-project-id.supabase.co
const supabaseUrl = process.env.SUPABASE_URL || 'https://YOUR_PROJECT_ID.supabase.co';

// Initialize client only if keys are present
export const supabase = (supabaseUrl && supabaseKey && supabaseUrl !== 'https://YOUR_PROJECT_ID.supabase.co') 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

/**
 * Submits an inquiry to the 'inquiries' table in Supabase.
 * Used in: pages/Contact.tsx
 * 
 * Schema expected:
 * - id: uuid (auto)
 * - created_at: timestamp (auto)
 * - type: text (e.g., 'general', 'sponsor', 'host')
 * - name: text
 * - email: text
 * - organization: text (nullable)
 * - message: text
 * - location: text (nullable)
 * - sponsor_type: text (nullable)
 * - interest_area: text (nullable)
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
  if (!supabase) {
    console.warn("Supabase not fully configured. Check services/supabase.ts for URL and Key.");
    console.log("Simulating submission with data:", data);
    
    // Simulate network delay for UI feedback
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { error: null, data: { ...data, id: 'simulated-id' } };
  }

  return await supabase.from('inquiries').insert([data]);
};