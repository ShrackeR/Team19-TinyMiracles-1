import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
// import { useNavigate } from 'react-router-dom'

export const useSignup3 = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const [success, setSuccess] = useState()
  // const navigate = useNavigate();
  const signup = async (formData) => {
    setIsLoading(true)
    setError(null)
      console.log(formData)
      
      setSuccess(0);
    const response = await fetch(' http://35.244.31.186:8080/api/community/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name: formData.name,
        isPanCard: formData.isPanCard,
        pan: formData.pan,
        mobile: formData.mobile,
        email: formData.email,
        area: formData.area,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        pin: formData.pin,
        location: formData.location,
        password: formData.password,
        isBankAccount: formData.isBankAccount,
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
        ifsc: formData.ifsc})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      {alert(json.error)}
    }
    if (response.ok) {
      // save the user to local storage
      // localStorage.setItem('user', JSON.stringify(json))

      // // update the auth context
      // dispatch({type: 'LOGIN', payload: json})

      // update loading state
      console.log("Success")
      {alert("Success")}
      // window.location.reload(true);
      setIsLoading(false)
      setSuccess(1);
   
      
    }
  }

  return { signup, isLoading, error,success }
}