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
import Edit from './pages/Edit';

import Notification from "./pages/Notification";
import AdminNotification from "./pages/AdminNotification";
import Adminann from "./pages/Adminann";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import './App.css';
import FlaskForm from "./pages/FlaskForm";
import Layout from "./components/Layout";
// import Wrapper from "./components/Wrrapper";

function App() {
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
  console.log(user);
  return (
    <BrowserRouter>
   
    <Layout>
      
      <Routes>
          

          {/* <Route exact
          path="/homepage"
          element={<HomeMain/>}
          /> */}

            
            <Route
              path="/flask"
              element={user ? <FlaskForm /> : <Navigate to="/login" />}
            />
            {/* <Route
             path="/"
              element={user ? <HomeMain/> : <Navigate to="/login" />}
            /> */}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
             /> 
             <Route
              path="/forgotPassword"
              element={!user ? <ForgotPassword /> : <Navigate to="/" />}
            />
              <Route
              path="/"
              element={user ? <Notification /> : <Navigate to="/login" />}
            />
            <Route
              path="/admin/an"
              element={ admin?<AdminNotification />:<Navigate to="/adminlogin" /> }
            />
            <Route
              path="/admin/ad"
              element={admin ? <Adminann /> : <Navigate to="/adminlogin" />}
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
            <Route
              path="edit/:id"
              element={admin ? <Edit/> : <Navigate to="/adminlogin" />}
            />
            
            {/* <Route exact path="/view/:id" component={Details} /> */}
             </Routes>
         
        
    </Layout>
    </BrowserRouter>
  );
}

export default App;