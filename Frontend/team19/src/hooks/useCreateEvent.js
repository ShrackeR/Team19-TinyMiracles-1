import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useAuthContext2 } from './useAuthContext2'
// import { useNavigate } from 'react-router-dom'

export const useCreateEvent = () => {
  const {admin}=useAuthContext2();

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const [success, setSuccess] = useState()
  // const navigate = useNavigate();
  const createEvent = async (formData) => {
    setIsLoading(true)
    setError(null)
      console.log(formData)
      setSuccess(0);
    const response = await fetch('https://miracleachievers.shreeraj.me/backend/api/event/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${admin.token}`
    },
      body: JSON.stringify({ title:formData.title,
            description:formData.description,
            location:formData.location,
            start:formData.start,
            end:formData.end,
            address:formData.address,
            
            resources:formData.resources,
            tag:formData.tag,
            question:formData.question,
            duration:formData.duration,
            expectedAttendance:formData.expectedAttendance,
            expectedAnswer:formData.expectedAnswer,

})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      {alert(json.error)}
    }
    if (response.ok) {
      // save the data to local storage
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

  return { createEvent, isLoading, error,success }
}
