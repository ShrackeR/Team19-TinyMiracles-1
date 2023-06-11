import { useState } from 'react'
export const usePostSurvey=()=>{
    const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
//   const { dispatch } = useAuthContext()
  const [success, setSuccess] = useState()
  const PostSurvey = async (formData) => {
    setIsLoading(true)
    setError(null)
      console.log(formData)
      
      setSuccess(0);
    const response = await fetch(' https://miracleachievers.shreeraj.me/backend/api/event/postsurvey/:id', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ eventId:formData.eventId,
    question:formData.question,
  answer:formData.answer,
userId:formData.userId})
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

  return { PostSurvey, isLoading, error,success }

}