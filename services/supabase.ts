import { createClient } from '@supabase/supabase-js';

// NOTE: The key below looks like a publishable key from a different service or a custom format.
// Standard Supabase Anon keys are JWTs and typically start with "eyJ...".
// Please ensure you have copied the "anon" public key from your Supabase Project Settings > API.
const supabaseKey = 'sb_publishable_AqTmInNQoIEGNjleHCbAEQ_fQZEFK3s';

// The Project URL provided
const supabaseUrl = 'https://beqttwwmrrowqbhqoooj.supabase.co';

// Initialize client
// We remove the conditional check so that if configuration is wrong, it fails visibly rather than simulating success.
export const supabase = createClient(supabaseUrl, supabaseKey);

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
  console.log("Attempting to submit inquiry to Supabase...", data);
  
  try {
    // We chain .select() to ensure the inserted data is returned (confirming the operation)
    // and to get more explicit errors if policies fail.
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