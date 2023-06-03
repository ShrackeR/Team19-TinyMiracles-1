import React, { Component } from 'react'
import { useState } from 'react'
const Login=()=> {
  const [currState,setState]=useState({aadhar:'',
    password:'',
})
  const handleChange=(e)=>{
    console.log(e.target);
      const {name,aadhar}=e.target;
      setState((prevData)=>({
        ...prevData,
        name,
        aadhar
      }))
  }  

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   if (type === 'checkbox') {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: checked,
  //     }));
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  // };
  
   
    return (
    <div>
      <form >
     
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Aadhar no.</label>
          <input
            type="text"
            name="aadhar"
            value={currState.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Aadhar number"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={currState.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
      </form>
    </div>
    )
}
export default Login;