import { useState } from "react";
import  {useForgotPassword} from "../hooks/useForgotPassword"

const ForgotPassword = () => {
  const{forgotPassword,error,isLoading}=useForgotPassword();
  const [aadhar , setAadhar ]= useState ('');
// const [newpassword, setNewpassword ]= useState ('');


const handleSubmit = async(e) => {
  e.preventDefault();

  await forgotPassword(aadhar);

}
console.log(aadhar)


  return (


<form className="login" onSubmit={handleSubmit}>
<h3>Reset Password</h3>

<label>Aadhar</label>
<input 
  type="text" 
  onChange={(e) => setAadhar(e.target.value)} 
  value={aadhar} 
/>
{/* <label>Password:</label>
<input 
  type="password" 
  onChange={(e) => setNewpassword(e.target.value)} 
  value={newpassword} 
/> */}

<button>Reset Password</button>

</form>
            );
}

export default ForgotPassword;