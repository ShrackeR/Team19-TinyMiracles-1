import { useState } from "react";
import { useSignup2 } from "../hooks/useSignup2";
import Wrapper from "../components/Wrrapper";
import './AdminSign.css'
import { Link } from "react-router-dom";
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
    // <Wrapper >
    <div className="admin">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender">Gender</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="form-control"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="form-control"
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" disabled={isLoading}>
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
          <Link to="/login">Already a user?</Link>
        </p>
      </div>
    </div>
    // </Wrapper>
  );
};

export default AdminSignup;
