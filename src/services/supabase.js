
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ahtbvtmkdoaqojwgfrwj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodGJ2dG1rZG9hcW9qd2dmcndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5MDU1MDcsImV4cCI6MjA1NzQ4MTUwN30.xV4z2Nb171JnmZ-GYZZhAWdeQb506_9b2SSt3r-mZlA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase