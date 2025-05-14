
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'

const supabaseUrl = 'https://jdswukniiyawdpfkpvjn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkc3d1a25paXlhd2RwZmtwdmpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTg4NTQsImV4cCI6MjA2Mjc5NDg1NH0.k8Tj4xopEfO_wofyE1yFfcMlH4OSS85eChzNEtIt4Xg'


  const supabase = createClient(supabaseUrl, supabaseKey)

  export const handleGoogleLogin = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              redirectTo: window.location.origin + '/'
            }
          })
          console.log(error)
    } catch (error) {
        console.error('Error signing in with Google:', error)
    }

    
  }

  export const getSession = async () => {
    const { data: {session}, error: sessionError } = await supabase.auth.getSession()
    if (sessionError) {
        console.error('Error getting session:', sessionError)
    } else {
        console.log('dataaa from session',session)
        return session;
    }
 
  }

  export const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Error signing out:', error)
    }
  }

  export const getMovies = async () => {
    const { data, error } = await supabase.functions.invoke('get-movies', {
        method: 'GET',
    });
    console.log('data from get movies',data)
    if (error) {
        console.error('Error getting movies:', error)
    }
    return data;
  }
