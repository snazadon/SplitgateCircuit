import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const { error } = isSigningUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold">{isSigningUp ? 'Sign Up' : 'Log In'}</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          {isSigningUp ? 'Sign Up' : 'Log In'}
        </button>

        <p className="text-sm text-center">
          {isSigningUp ? 'Already have an account?' : 'No account?'}{' '}
          <button
            type="button"
            className="text-blue-400 underline"
            onClick={() => setIsSigningUp(!isSigningUp)}
          >
            {isSigningUp ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </form>
    </div>
  )
}
