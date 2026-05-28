const supabaseUrl = 'https://qqlpymxmtcmvcdiihkek.supabase.co'
const supabaseKey = 'sb_publishable_lldulKMwPlNEYfQfW_pW6w_t5NEzOfo'

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

document.addEventListener('DOMContentLoaded', () => {
    console.log("script.js is successfully connected!");
    console.log("Supabase client is ready:", supabaseClient);
});
