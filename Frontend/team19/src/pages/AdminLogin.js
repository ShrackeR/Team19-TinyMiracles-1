import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useLogin2 } from "../hooks/useLogin2";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login2, error, isLoading } = useLogin2();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login2(email, password);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="email"></label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>
        <br/>
        <div className="mb-3">
          <label for="password"></label>
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
          <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
