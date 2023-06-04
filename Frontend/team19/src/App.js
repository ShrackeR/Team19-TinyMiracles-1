import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import HomeMain from "./pages/HomeMain";
import { useAuthContext2 } from "./hooks/useAuthContext2";
import AdminHome from "./pages/AdminHome";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import StartNavbar from "./components/StartNavbar";
import AdminNavbar from "./components/AdminNavbar";
import Details from './pages/Details';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';

function App() {
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();

  return (
    <div className="App">
      <BrowserRouter>
      {user && <Navbar />}
      {admin && <AdminNavbar />}
      {!user  && !admin && <StartNavbar />}

      <div>

      
      <Routes>

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
            <Route
              path="/admin/ad"
              element={admin ? <AdminHome /> : <Navigate to="/adminlogin" />}
            />
             <Route
              path="/adminlogin"
              element={!admin ? <AdminLogin /> : <Navigate to="/admin/ad" />}
              />
              <Route
              path="/adminsignup"
              element={!admin ? <AdminSignup /> : <Navigate to="/admin/ad" />}
            />
            <Route
              path="admin/ad/view/:id"
              element={admin ? <Details /> : <Navigate to="/adminlogin" />}
            />
            {/* <Route exact path="/view/:id" component={Details} /> */}
             </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
