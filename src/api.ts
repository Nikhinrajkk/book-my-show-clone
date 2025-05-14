
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

  export const makePayment = async () => {
    const { data: orderData, error: orderError } = await supabase.functions.invoke('make-payment', {
        method: 'POST',
        body: {
            amount: 411.92,
            currency: 'INR',
            orderId: '1', // show id of the movie
            user_Id: '1234',
            // seats: '1234',
            booking_time: new Date().toISOString()
        }
    })
    console.log('order data',orderData)
    if (orderError) {
        console.error('Error creating order:', orderError)
    }
    const options = {
        key: orderData.key_id,
        amount: orderData.order[0].amount,
        currency: orderData.order[0].currency,
        name: 'BookMyShow',
        // description: `Booking for ${bookingData?.movieTitle}`,
        order_id: orderData.order[0].razorpay_order_id,
        handler: async function (response) {
            console.log('responseeee',response)
            try {
                // Verify payment
                const { data: verifyData, error: verifyError } = await supabase.functions.invoke('verify-payment', {
                    method: 'POST',
                    body: {
                        // orderId: response.razorpay_order_id,
                        orderId: '1',
                        paymentId: response.razorpay_payment_id,
                        signature: response.razorpay_signature
                    }
                })

                console.log("verifyData: ", verifyData)

                if (verifyError) throw verifyError

                // Redirect to success page
                window.location.href = `http://localhost:8080/`
            } catch (error) {
                console.error('Payment verification error:', error)
                // showMessage('Payment verification failed. Please contact support.')
            }
        },
        prefill: {
            email: 'sabarinath.m97@gmail.com'
        },
        theme: {
            color: '#2563eb'
        },
        modal: {
            ondismiss: function() {
                setLoading(false)
            }
        }
    }

    // Initialize and open Razorpay
    const rzp = new Razorpay(options)
    rzp.open()
  }
