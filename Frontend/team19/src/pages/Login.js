import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrrapper";
import MapPicker from 'react-google-map-picker'

const Login = () => {
  const [aadhar, setAadhar] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(aadhar, password);
  };

  
  return (

    <Wrapper>

       <form onSubmit={handleSubmit}>
        <h3 style={{textAlign:'center'}}>Sign In</h3>
        {error && <div  style={{textAlign:"center",fontWeight:'bold',color:'red',fontSize:'20px'}}  className="error">{error}</div>}
        <div className="mb-3">
          <label>Aadhar</label>
          <input
            type="text"
            name="aadhar"
            onChange={(e) => setAadhar(e.target.value)}
            value={aadhar}
          
            className="form-control"
            placeholder="Enter Aadhar Number"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}

            className="form-control"
            placeholder="Enter password"
          />
        </div>
       
        <div className="d-grid">
          <button disabled={isLoading} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div style={{justifyContent:'space-between',display:'flex'}} ><p style={{width:'max-content',display:'inline'}} className="forgot-password text-left">
        <Link to="/signup">Don't have account ?</Link>
        </p>
        <p  className="forgot-password text-right">
        <Link to="/forgotPassword">Forgot Password ?</Link>
        </p></div>
      
        <div>
          {isLoading && (
            <div>
              {" "}
              <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
            </div>
          )}
        </div>
        
      </form>
 
    </Wrapper>

  

  );
};

export default Login;
