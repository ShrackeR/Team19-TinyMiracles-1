import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useLogin2 } from "../hooks/useLogin2";
import Wrapper from "../components/Wrrapper";
import { Link } from "react-router-dom";
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login2, error, isLoading } = useLogin2();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login2(email, password);
  };

  return (
    <Wrapper>
    <div >
      <h1>Sign In</h1>
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
        <Link to="/adminsignup">Don't have account ?</Link>
        </p>
      </div>
    </div>
    </Wrapper>
  );
};

export default AdminLogin;
