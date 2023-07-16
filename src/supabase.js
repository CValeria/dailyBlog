import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hwizxhqysrelkmeilofe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3aXp4aHF5c3JlbGttZWlsb2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMDgwNDUsImV4cCI6MTk5Njc4NDA0NX0.-_27w9T5rnovh-cI79wsnYBs3kqi3F4IxpiEB9k3QLo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
