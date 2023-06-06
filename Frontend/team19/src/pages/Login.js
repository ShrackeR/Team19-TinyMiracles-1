import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrrapper";

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
        <h3>Sign In</h3>
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
        <p className="forgot-password text-left">
        <Link to="/signup">Don't have account ?</Link>
        </p>
        <p className="forgot-password text-right">
        <Link to="/forgotPassword">Forgot Password ?</Link>
        </p>
       
        <div>
          {isLoading && (
            <div>
              {" "}
              <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
            </div>
          )}
        </div>
        {error && <div className="error">{error}</div>}
      </form>

    </Wrapper>

  

  );
};

export default Login;
