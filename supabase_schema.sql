-- ============================================================================
-- SUPABASE SQL SCHEMA FOR NXF INDIA WEBAPP
-- Run this in your Supabase SQL Editor to set up the database.
-- ============================================================================

-- 1. Create 'inquiries' table
-- We drop the table if it exists to ensure the schema matches exactly.
-- CAUTION: This deletes existing data. If you need to preserve data, use ALTER TABLE commands instead.
-- DROP TABLE IF EXISTS public.inquiries; 
-- (Commented out DROP to prevent accidental data loss if you run this multiple times. Uncomment if you want a fresh start.)

CREATE TABLE IF NOT EXISTS public.inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  
  -- The type of inquiry: 'general', 'sponsor', 'host'
  type text NOT NULL,
  
  -- Basic Contact Info
  name text NOT NULL,
  email text NOT NULL,
  
  -- Shared optional field
  organization text, -- Only for Sponsor/Host
  
  -- The main message body
  message text NOT NULL,
  
  -- Specific fields matching the forms
  location text,      -- Host form: "City / Location"
  sponsor_type text,  -- Sponsor form: "financial", "inkind", "media", etc.
  interest_area text, -- General form: "volunteer", "artist", etc.
  
  CONSTRAINT inquiries_pkey PRIMARY KEY (id)
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies
-- First, drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public inserts" ON public.inquiries;

-- Policy: Allow ANYONE (public) to INSERT data.
-- We use 'public' role to cover both anon and authenticated users just in case.
CREATE POLICY "Allow public inserts" 
ON public.inquiries 
FOR INSERT 
TO public
WITH CHECK (true);

-- Note: We do NOT add a SELECT policy for public. 
-- This ensures that submitted data cannot be read by anonymous users, preserving privacy.
-- The application code should NOT use .select() after insert.