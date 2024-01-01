import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useLogin2 } from "../hooks/useLogin2";
import Wrapper from "../components/Wrrapper";
import { Link } from "react-router-dom";
import './AdminLogin.css';
import emailjs from '@emailjs/browser';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login2, error, isLoading } = useLogin2();
  const [err, setErr] = useState(error);
  // var err=error;
  const [notp, setOTP] = useState("");
  const [otp, setactOTP] = useState(Math.floor(100000 + Math.random() * 900000));
  // const otp=Math.floor(100000 + Math.random() * 900000);
  console.log("otp"+otp);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("handleingg"+otp);
    if (notp!=String(otp)) {
     setErr("Invalid OTP")
      console.log(err)
    }else{
    await login2(email, password);
    setErr(error);
    }
  };

  const sendVerificationEmail = () => {
    // Your Email.js service ID, template ID, and user ID
    const serviceId = "service_wr7k8nt";
    const templateId = "template_u003inp";
    const userId = "vF72laC9WqdHXnNKV";

    // Replace these variables with your actual data
    const templateParams = {
      user_email: email,
      from_name: "Tiny Miracles",
      message: `Verification Code: ${otp}`,
    };

    // Send the email
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };
  return (
    <Wrapper>
    <div >
      <h1>Sign In</h1>
      {err && <div style={{textAlign:"center",fontWeight:'bold',color:'red',fontSize:'20px'}} className="error">{err}</div>}
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
        <div className="mb-3">
                <label htmlFor="number">OTP</label>
                <input
                  type="number"
                  placeholder="OTP"
                  onChange={(e) => setOTP(e.target.value)}
                  value={notp}
                  className="form-control"
                />
              </div>
              
      </form>
      <button
                className="btn btn-secondary"
                onClick={sendVerificationEmail}
                style={{ marginTop: "10px" }}
              >
                Send Verification Email
              </button>
        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleSubmit} disabled={isLoading}>
            Log in
          </button>
          
        </div>
      <div>
        {isLoading && (
          <div>
            {" "}
            <i className="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
          </div>
        )}
      </div>
      <div className="form-footer">
        <p>
        <Link to="/adminsignup">Don't have account ?</Link>
        </p>
      </div>
    </div>
    </Wrapper>
  );
};

export default AdminLogin;
