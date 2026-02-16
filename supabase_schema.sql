-- ============================================================================
-- SUPABASE SQL SCHEMA FOR NXF INDIA WEBAPP
-- Run this in your Supabase SQL Editor to set up the database.
-- ============================================================================

-- 1. Create 'inquiries' table
-- This stores submissions from the Contact Us page (General, Sponsor, Host inquiries).
create table if not exists public.inquiries (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  
  -- The type of inquiry: 'general', 'sponsor', 'host'
  type text not null,
  
  -- Basic Contact Info
  name text not null,
  email text not null,
  organization text null, -- Optional, for sponsors/hosts
  
  -- The main message body
  message text not null,
  
  -- JSONB column to store flexible data based on inquiry type
  -- e.g., { "location": "Ooty", "sponsorType": "financial" }
  details jsonb null,
  
  constraint inquiries_pkey primary key (id)
);

-- 2. Enable Row Level Security (RLS)
-- This is a best practice to ensure data is secure by default.
alter table public.inquiries enable row level security;

-- 3. Create RLS Policies

-- Policy: Allow public (anonymous) users to INSERT data.
-- This is required so anyone visiting the website can submit the contact form.
create policy "Allow public inserts" 
on public.inquiries 
for insert 
to anon 
with check (true);

-- Policy: Allow service_role (admins/backend) to VIEW data.
-- (Service role bypasses RLS by default, but this is explicit if you add authenticated admin users later)
-- Note: Anonymous users (public) CANNOT select/read data with this setup, which protects user privacy.
