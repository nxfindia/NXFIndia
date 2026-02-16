-- ============================================================================
-- SUPABASE SQL SCHEMA FOR NXF INDIA WEBAPP
-- Run this in your Supabase SQL Editor to set up the database.
-- ============================================================================

-- 1. Create 'inquiries' table
-- We drop the table if it exists to ensure the schema matches exactly.
-- CAUTION: This deletes existing data. If you need to preserve data, use ALTER TABLE commands instead.
DROP TABLE IF EXISTS public.inquiries;

CREATE TABLE public.inquiries (
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

-- Policy: Allow public (anonymous) users to INSERT data.
CREATE POLICY "Allow public inserts" 
ON public.inquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Policy: Allow service_role to read data (implicit, but good for clarity if you expand policies)
-- Note: Anonymous users cannot read the data, protecting privacy.
