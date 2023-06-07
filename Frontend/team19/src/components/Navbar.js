import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Navbar2.css";
import React, { useState } from 'react';

// import { useAuthContext2 } from "../hooks/useAuthContext2";
// import { useAuthContext3 } from "../hooks/useAuthContext3";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  // const { admin } = useAuthContext2();
  // const { clerk } = useAuthContext3();
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const handleClick = () => {
    logout();
  };
 

  console.log(user);
  return (
    <>
      {/* <div className="container">
        <a href="#" className="flex items-center">
          <img
            src="https://img.collegepravesh.com/2016/01/VJTI-Mumbai-Logo.png"
            className="h-6 mr-3 sm:h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </span>
        </a>

        <nav>
          {user &&  (
            <div>
              {/* <span>{user.email}</span> */}
              {/* <span>{user.year}</span>
              <Link to="/fees">FeePayment</Link>
              <Link to="/viewrooms">SeeAllotedRooms</Link>
              <Link to="/allot">Allotment-list</Link>
              {user.year != 2022 && <Link to="/feesupload">Uploads </Link>}
              <Link to="/complainclerk">ComplainClerk</Link>
              {user.year != 2022 && <Link to="/home">SY</Link>}
              <Link to="/pass">Pass</Link>
              <Link to="/blocks">Blocks</Link>
              <Link to="/rules">Hostel Rules</Link> */}
              {/* <Link to="/notification">Notification</Link> */}

              {/* <button onClick={handleChat}>Chat</button> */}
              {/* <Link to="/chatapp">Chat</Link> */}
               {/* <Link to="/Complains">Complaints</Link> 
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
        </nav> */}

        {/* <nav>

          {!user && !clerk && !admin && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/adminlogin">Admin-Login</Link>
              <Link to="/clerklogin">Clerk-Login</Link>
              <Link to="/adminsignup">Admin-Signup</Link>
              <Link to="/clerksignup">CLerk-Signup</Link>
            </div>
          )}
        </nav> */}
      {/* </div> */}

      <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          {/* <img id="logoImg-n" src={myImg} alt="Logo" /> */} Tiny Miracles
        </Link>
        <button className={`hamburger ${showNav ? 'active' : ''}`} onClick={handleToggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-menu ${showNav ? 'show-nav' : ''}`}>
          <ul>
            {user && (
              <>
                <li>
                  <span className="hi" style={{color:"blue"}}>Hi!! {user.name}</span>
                </li>
                <li>
                  <Link to="/flask">NeedHelp?</Link>
                </li>
                <li>
                  <Link to="/noti">Messages</Link>
                </li>
                <li>
                  <Link to="/allevents">Viewevents</Link>
                </li>
                {/* <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/bmi">BMI</Link>
                </li> */}
                {/* <li>
                  <Link to="/contact">ContactUs</Link>
                </li> */}
                {/* <li>
                  <Link to="/about">AboutUs</Link>
                </li> */}
                <li>
                <button className="btn btn-primary" onClick={handleClick}>
                Log out
              </button>
                    </li>
              </>
            )}
        </ul>
        </div>
      </nav>
    </>
    </>
  );
};

export default Navbar;
