import { useState } from "react";
import  {useForgotPassword} from "../hooks/useForgotPassword"
import Wrapper from "../components/Wrrapper";

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
<Wrapper>

<form className="login" onSubmit={handleSubmit}>
<h3>Reset Password</h3>
<div className="mb-3">
<label>Aadhar</label>
<input 
  type="text" 
  onChange={(e) => setAadhar(e.target.value)} 
  value={aadhar}
  className="form-control"
  placeholder="Enter password" 
/>
</div>
{/* <label>Aadhar</label>
<input 
  type="text" 
  onChange={(e) => setAadhar(e.target.value)} 
  value={aadhar} 
/> */}
{/* <label>Password:</label>
<input 
  type="password" 
  onChange={(e) => setNewpassword(e.target.value)} 
  value={newpassword} 
/> */}

<button className="btn btn-primary">Reset Password</button>

</form>
</Wrapper>
            );
}

export default ForgotPassword;