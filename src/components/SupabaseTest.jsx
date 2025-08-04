import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function SupabaseTest() {
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { error } = await supabase.auth.getSession()
        if (error) {
          console.error('Supabase connection error:', error)
        } else {
          setConnected(true)
          console.log('✅ Supabase connected successfully!')
        }
      } catch (error) {
        console.error('Connection test failed:', error)
      } finally {
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  if (loading) return <div>Testing Supabase connection...</div>
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {connected ? (
        <p style={{ color: 'green' }}>✅ Supabase connected successfully!</p>
      ) : (
        <p style={{ color: 'red' }}>❌ Supabase connection failed</p>
      )}
    </div>
  )
}