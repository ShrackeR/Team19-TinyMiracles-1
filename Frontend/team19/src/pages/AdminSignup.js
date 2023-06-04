import { useState } from "react";
import { useSignup2 } from "../hooks/useSignup2";

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const { signup2, error, isLoading } = useSignup2();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup2(email, password,name,gender,address,phone);
  };

  return (
    <div className="form-wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-item">
          <label htmlFor="gender">Gender</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <div className="button-panel">
          <button className="button" disabled={isLoading}>
            Sign Up
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
      {isLoading && (
        <div>
          <i className="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
        </div>
      )}
      <div className="form-footer">
        <p>
          <a href="/login">Already a user?</a>
        </p>
      </div>
    </div>
  );
};

export default AdminSignup;
