import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom'
import { useAuthContext } from "./hooks/useAuthContext";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
// import { Link } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import HomeMain from "./pages/HomeMain";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const { user } = useAuthContext();
  return (
    // <div className="App">
    //   <BrowserRouter>
    //   {user && <Navbar />}
    //   <div>

      
    //   <Routes>

    //         <Route
    //           path="/"
    //           element={user ? <HomeMain /> : <Navigate to="/login" />}
    //         />
    //         <Route
    //           path="/login"
    //           element={!user ? <Login /> : <Navigate to="/" />}
    //          /> 
    //          <Route
    //           path="/forgotPassword"
    //           element={!user ? <ForgotPassword /> : <Navigate to="/" />}
    //         />
    //         <Route
    //           path="/resetPassword/:newToken"
    //           element={!user ? <ResetPassword /> : <Navigate to="/" />}
    //         />
    //         <Route
    //           path="/signup"
    //           element={!user ? <Signup /> : <Navigate to="/" />}
    //         />
    //          </Routes>
    //     </div>
    //   </BrowserRouter>
    // </div>
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/login'}>
            Tiny
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/login'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/signup'}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route
            path='/homepage'
            element={<HomeMain/>}
            ></Route>
          <Route
              path="/"
              element={user ? <HomeMain /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
             /> 
             <Route
              path="/forgotPassword"
              element={!user ? <ForgotPassword /> : <Navigate to="/" />}
            />
            <Route
              path="/resetPassword/:newToken"
              element={!user ? <ResetPassword /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
           
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
