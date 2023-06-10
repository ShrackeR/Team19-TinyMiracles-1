// import { Link } from "react-router-dom";
// import { useLogout } from "../hooks/useLogout";
// import { useAuthContext } from "../hooks/useAuthContext";
// import "./Navbar2.css";
// import React, { useState } from 'react';

// // import { useAuthContext2 } from "../hooks/useAuthContext2";
// // import { useAuthContext3 } from "../hooks/useAuthContext3";
// const Navbar = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();
//   // const { admin } = useAuthContext2();
//   // const { clerk } = useAuthContext3();
//   const [showNav, setShowNav] = useState(false);

//   const handleToggleNav = () => {
//     setShowNav(!showNav);
//   };

//   const handleClick = () => {
//     logout();
//   };
 

//   console.log(user);
//   return (
//     <>
      

//       <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-brand">
//           {/* <img id="logoImg-n" src={myImg} alt="Logo" /> */} Tiny Miracles
//         </Link>
//         <button className={`hamburger ${showNav ? 'active' : ''}`} onClick={handleToggleNav}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//         <div className={`navbar-menu ${showNav ? 'show-nav' : ''}`}>
//           <ul>
//             {user && (
//               <>
//                 <li>
//                   <span className="hi" style={{color:"blue"}}>Hi!! {user.name}</span>
//                 </li>
//                 <li>
//                   <Link to="/flask">NeedHelp?</Link>
//                 </li>
//                 <li>
//                   <Link to="/noti">Messages</Link>
//                 </li>
//                 <li>
//                   <Link to="/allevents">Viewevents</Link>
//                 </li>
//                 {/* <li>
//                   <Link to="/community">Community</Link>
//                 </li>
//                 <li>
//                   <Link to="/bmi">BMI</Link>
//                 </li> */}
//                 {/* <li>
//                   <Link to="/contact">ContactUs</Link>
//                 </li> */}
//                 <li>
//                   <Link to="/scanner">Mark Attendance</Link>
//                 </li>
//                 <li>
//                 <button className="btn btn-primary" onClick={handleClick}>
//                 Log out
//               </button>
//                     </li>
//               </>
//             )}
//         </ul>
//         </div>
//       </nav>
//     </>
//     </>
//   );
// };

// export default Navbar;


import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import React, { useState } from 'react';
import "./Navbar3.css";
import myImg from "./tinyicon.png" 

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [showNav, setShowNav] = useState(false);
  const userid=user.id;

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const handleClick = () => {
    logout();
  };

  return (
    <>
    {/* <nav className="navbar">
    THE SUN SHINES FOR EVERYONE.
        <Link to="/" className="navbar-brand">
        <img id="logoImg-n" src={myImg} alt="Logo" /> Tiny Miracles
        </Link>
        </nav> */}
      <div className="sidebar">
      <ul>
            {user && (
              <><li>
                <Link to="/" className="navbar-brand">
        {/* <img id="logoImg-n" src={myImg} alt="Logo" />  */}
        Tiny Miracles
        </Link>
              </li>
                <li>
                  <span className="hi" style={{color:"blue"}}>Hi!! {user.name}</span>
                </li>
                <li>
                  <Link to="/flask">Need Help?</Link>
                </li>
                <li>
                  <Link to="/noti">Messages</Link>
                </li>
                <li>
                  <Link to="/EventCards">View All Events</Link>
                </li>
                <li>
                  <Link to="/scanner">Mark Attendance</Link>
                </li>
                <li>
                  <Link to={`/viewAttendedEvents/${userid}`}>View attended events</Link>
                </li>
                <li>
                  <Link to="/employment">Job opportunities</Link>
                </li>
                <li>
                  <button className="btn btn-primary" onClick={handleClick}>
                    Log out
                  </button>
                </li>
              </>
            )}
          </ul>
      </div>

       
        {/*
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
                  <Link to="/flask">Need Help?</Link>
                </li>
                <li>
                  <Link to="/noti">Messages</Link>
                </li>
                <li>
                  <Link to="/allevents">View Events</Link>
                </li>
                <li>
                  <Link to="/scanner">Mark Attendance</Link>
                </li>
                <li>
                  <button className="btn btn-primary" onClick={handleClick}>
                    Log out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
