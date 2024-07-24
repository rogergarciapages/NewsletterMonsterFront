const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  try {
    const { data, error } = await supabase
      .from('users') // Ensure this table exists in your Supabase database
      .select('*')
      .limit(1);

    if (error) {
      throw error;
    }

    console.log('Supabase connection test:', data);
  } catch (error) {
    console.error('Error interacting with Supabase:', error);
  }
}

main();
