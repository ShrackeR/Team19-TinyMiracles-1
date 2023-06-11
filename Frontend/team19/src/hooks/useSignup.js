import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
// import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
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
    const response = await fetch(' https://miracleachievers.shreeraj.me/backend/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name: formData.name,
        aadhar: formData.aadhar,
        isPanCard: formData.isPanCard,
        pan: formData.pan,
        isEshram: formData.isEshram,
        eshram: formData.eshram,
        mobile: formData.mobile,
        dob: formData.dob,
        email: formData.email,
        area: formData.area,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        pin: formData.pin,
        password: formData.password,
        familyFriends: formData.familyFriends,
        isBankAccount: formData.isBankAccount,
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
        ifsc: formData.ifsc,
        medicalTestFrequency: formData.medicalTestFrequency,
        lastCheckup: formData.lastCheckup,
        diseases: formData.diseases,
        numberOfChildren: formData.numberOfChildren,
        needChildEducationAssistance: formData.needChildEducationAssistance,
        needEmploymentSupport: formData.needEmploymentSupport,
        educationLevel: formData.educationLevel,
        skillset:formData.skillset,
        interests:formData.interests,
        eventsAttended:formData.eventsAttended,
        community:formData.community,
        gender:formData.gender,
        status:formData.status})
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