import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useLogin3 } from "../hooks/useLogin3";
import Wrapper from "../components/Wrrapper";
import { Link } from "react-router-dom";
import './AdminLogin.css';

const CommunityLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login3, error, isLoading } = useLogin3();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login3(email, password);
  };

  return (
    <Wrapper>
    <div >
      <h1>Community Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control"
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" disabled={isLoading}>
            Log in
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
      <div>
        {isLoading && (
          <div>
            {" "}
            <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
          </div>
        )}
      </div>
      <div class="form-footer">
        <p>
        <Link to="/communitysignup">Don't have account ?</Link>
        </p>
      </div>
    </div>
    </Wrapper>
  );
};

export default CommunityLogin;
