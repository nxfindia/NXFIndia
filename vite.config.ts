import { defineConfig, loadEnv } from 'vite';

// Declare process for TypeScript to avoid type errors since @types/node might be missing or incomplete
declare var process: any;

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      // Prevents "process is not defined" error in browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL || env.VITE_SUPABASE_URL || ''),
      // Check multiple common names for the key
      'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || env.SUPABASE_KEY || ''),
    },
  };
});