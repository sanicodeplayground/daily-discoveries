import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fzfsrwigabdyrralxsmd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZnNyd2lnYWJkeXJyYWx4c21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3OTkxOTQsImV4cCI6MjAyOTM3NTE5NH0.EmcvsWUCpkfFII0PoHntQB9iQxbd0YMXBipAi6s_Uhc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
