import { createContext, useReducer, useEffect } from 'react'

export const AuthContext3 = createContext()

export const authReducer3 = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { community: action.payload }
    case 'LOGOUT':
      return { community: null }
    default:
      return state
  }
}

export const AuthContext3Provider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer3, { 
    community: null
  })

  useEffect(() => {
    const community = JSON.parse(localStorage.getItem('community'))

    if (community) {
      dispatch({ type: 'LOGIN', payload: community }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext3.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext3.Provider>
  )

}