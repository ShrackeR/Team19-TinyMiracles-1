import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
const Login = () => {
  const [aadhar, setAadhar] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(aadhar, password);
  };

  return (
    <>
      {/* <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <label>Aadhar</label>
        <input
          type="text"
          onChange={(e) => setAadhar(e.target.value)}
          value={aadhar}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        
        <div>
          <Link to="/forgotPassword">Forgot Password ?</Link>
        </div>
        <button disabled={isLoading}>Log in</button>
        <div>
          {isLoading && (
            <div>
              {" "}
              <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
            </div>
          )}
        </div>
        {error && <div className="error">{error}</div>}
      </form> */}
       <form>
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
    </>
  );
};

export default Login;
