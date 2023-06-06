import { Link } from "react-router-dom";
import './StartNavbar.css';


const StartNavbar = () => {
   
 
    return (

        <>
       <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/signup'}>
                    Sign up
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to={'/adminlogin'}>
                    Admin Login
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/adminsignup'}>
                    Admin Signup
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        </div>
    </>
    
      
      );
}
 
export default StartNavbar;

