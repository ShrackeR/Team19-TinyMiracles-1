import { Link } from "react-router-dom";
import './Navbar3.css';
import { Nav, Navbar, NavLink } from "react-bootstrap";


const StartNavbar = () => {
   
 
    return (

        <>
       {/* <div className="App"> */}
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/homepage'}>
              Tiny Miracles
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to={'/adminlogin'}>
                    Admin Login
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav> */}
        {/* <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/homepage">Tiny Miracles</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/login">Login</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/adminlogin">Admin Login</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>

        </div> */}

<div className="sidebar">
      <ul>
            
              <><li>
                <Link to="/" className="navbar-brand">
        {/* <img id="logoImg-n" src={myImg} alt="Logo" />  */}
        Tiny Miracles
        </Link>
              </li>
                
                
                <li>
                  <Link to="/login">User login</Link>
                </li>
                <li>
                  <Link to="/adminlogin">Admin Login</Link>
                </li>
               
              </>
           
          </ul>
      </div>
    </>
    
      
      );
}
 
export default StartNavbar;