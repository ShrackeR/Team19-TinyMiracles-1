import { useState } from 'react'
import { useAuthContext3 } from './useAuthContext3'

export const useLogin3 = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext3()

  const login3 = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://35.244.31.186:8080/api/community/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('community', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login3, isLoading, error }
}