
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// import { Redirect } from 'react-router-dom';
// import { useAuthContext2 } from "../hooks/useAuthContext2";
// import { useAuthContext3 } from "../hooks/useAuthContext3";
import { Link } from "react-router-dom";
import './StartNavbar.css';
import { Nav, Navbar, NavLink } from "react-bootstrap";
const UserNavbar = () => {
 
  const { logout } = useLogout();
  const { user } = useAuthContext();
  // const { admin } = useAuthContext2();
  // const { clerk } = useAuthContext3();
  const handleClick = () => {
    logout();
    // return <Redirect to={'/homepage'}/>
    window.location.href = '/homepage'
  };
 

  console.log(user.id);
  return (
    // <header>
    //   <div className="container">
    //     <a href="#" className="flex items-center">
    //       <img
    //         src="https://img.collegepravesh.com/2016/01/VJTI-Mumbai-Logo.png"
    //         className="h-6 mr-3 sm:h-10"
    //         alt="Flowbite Logo"
    //       />
    //       <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //         <Link to="/">
    //           <h1>Home</h1>
    //         </Link>
    //       </span>
    //     </a>

    //     <nav>
    //       {user &&  (
    //         <div>
    //           {/* <span>{user.email}</span>
    //           <span>{user.year}</span>
    //           <Link to="/fees">FeePayment</Link>
    //           <Link to="/viewrooms">SeeAllotedRooms</Link>
    //           <Link to="/allot">Allotment-list</Link>
    //           {user.year != 2022 && <Link to="/feesupload">Uploads </Link>}
    //           <Link to="/complainclerk">ComplainClerk</Link>
    //           {user.year != 2022 && <Link to="/home">SY</Link>}
    //           <Link to="/pass">Pass</Link>
    //           <Link to="/blocks">Blocks</Link>
    //           <Link to="/rules">Hostel Rules</Link>
    //           {/* <Link to="/notification">Notification</Link> */}

    //           {/* <button onClick={handleChat}>Chat</button> */}
    //           {/* <Link to="/chatapp">Chat</Link> */}
    //           // <Link to="/Complains">Complaints</Link> 
    //           <button onClick={handleClick}>Log out</button>
    //         </div>
    //       )}
    //     </nav>

    //     {/* <nav>

    //       {!user && !clerk && !admin && (
    //         <div>
    //           <Link to="/login">Login</Link>
    //           <Link to="/register">Register</Link>
    //           <Link to="/adminlogin">Admin-Login</Link>
    //           <Link to="/clerklogin">Clerk-Login</Link>
    //           <Link to="/adminsignup">Admin-Signup</Link>
    //           <Link to="/clerksignup">CLerk-Signup</Link>
    //         </div>
    //       )}
    //     </nav> */}
    //   </div>
    // </header>
    <div className="App">
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/homepage">Tiny Miracles</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/notification">Notification</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/chatapp">Chat</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/Complains">Complaints</NavLink>
                    <NavLink  eventKey="4" as={Link} to={`/viewAttendedEvents/${user.id}`}>Attendance</NavLink>
                    {/* <NavLink  eventKey="4" as={Link} to="/Complains">Complaints</NavLink> */}
                    <button onClick={handleClick} type="button" class="btn btn-outline-dark but" >Log out</button>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    </div>
  );
};

export default UserNavbar;
