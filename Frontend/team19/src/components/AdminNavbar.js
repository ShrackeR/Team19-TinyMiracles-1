import { Link } from 'react-router-dom'
import { useLogout2 } from '../hooks/useLogout2'
import { useAuthContext2 } from '../hooks/useAuthContext2'
import { useAuthContext } from '../hooks/useAuthContext'
import { Nav, Navbar, NavLink } from "react-bootstrap";



const Navbar2 = () => {
  const { logout2 } = useLogout2()
  const { admin } = useAuthContext2()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout2()
  }

  return (
    // <header>
    //   <div className="container">
    //     {/* <Link to="/admin/ad">
    //       <h1>VJTI Hostel Portal-Admin</h1>
    //     </Link> */}
    //     <nav>
    //       {admin &&!user  && (
    //         <div>
    //           <span>{admin.email}</span>
    //           <button onClick={handleClick}>Log out</button>
    //           {/* <Link to="/admin/mer">Merit-List</Link>
    //           <Link to="/signup">CreateUser</Link>
    //           <Link to="/verify">Verify</Link>
    //           <Link to="/admin/ann">Announce</Link>
    //           <Link to="/admin/acc">Accepted-students</Link>
    //           <Link to="/admin/rej">Rejected-students</Link>
    //           <Link to="/adminnotification">ViewAndDelAnnouncement</Link> */}
    //         </div>
            
    //       )}
    //       {/* {!admin && (
    //         <div>
    //           <Link to="/adminlogin">Login</Link>
    //           <Link to="/adminsignup">Signup</Link>
    //         </div>
    //       )} */}
    //     </nav>
    //   </div>
    // </header>
    <div className='App'>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/homepage">Tiny Miracles</NavLink>
                    {admin && !user &&  <><NavLink  eventKey="2" as={Link} to="/notification">Notification</NavLink>
                    {/* <NavLink  eventKey="3" as={Link} to="/chatapp">Chat</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/Complains">Complaints</NavLink> */}
                    {/* <NavLink  eventKey="4" as={Link} to="/Complains">Complaints</NavLink> */}
                    <button onClick={handleClick} type="button" class="btn btn-outline-dark but" >Log out</button></>}
                   
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    </div>
  )
}

export default Navbar2