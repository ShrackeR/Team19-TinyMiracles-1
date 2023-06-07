import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Signup from "./pages/Signup";
import Scanner from "./pages/Scanner";
import Navbar from "./components/Navbar";
import Viewallattendance from "./pages/Viewallattendance"
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import { useAuthContext2 } from "./hooks/useAuthContext2";
import AdminHome from "./pages/AdminHome";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import Feedbackk from "./pages/Feedback";
import Details from './pages/Details';
import Edit from './pages/Edit';
import Allevents from "./pages/Allevents";
import Notification from "./pages/Notification";
import AdminNotification from "./pages/AdminNotification";
import Adminann from "./pages/Adminann";
import EventDetails from "./pages/Eventdetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import './App.css';
import FlaskForm from "./pages/FlaskForm";
import Layout from "./components/Layout";
// import Wrapper from "./components/Wrrapper";
// import Home from "./pages/Home";
import Wrapper from "./components/Wrrapper";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/editEvent";
// import Feedback from "react-bootstrap/esm/Feedback";

function App() {
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
  console.log(user);
  return (
    <BrowserRouter>
   
    <Layout>
      

      {/* <Wrapper> */}
      <Routes>
          

          {/* <Route exact
          path="/homepage"
          element={<HomeMain/>}
          />  */}
          <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            
            <Route
              path="/flask"
              element={user ? <FlaskForm /> : <Navigate to="/flask" />}
            />
            <Route
              exact path="/allevents"
              element={user ? <Allevents /> : <Navigate to="/allevents" />}
            />
            <Route
              exact path="/feedback"
              element={user ? <Feedbackk /> : <Navigate to="/feedback" />}
            />
            <Route
              path="/scanner"
              element={<Scanner /> }
             
            />
            <Route
             exact path="/allevents/eventdetails/:id"
              element={user ? <EventDetails /> : <Navigate to="/allevents" />}
            />
            <Route path="/viewallattendance/:id"element={<Viewallattendance/> } />
            
            {/* <Route
             path="/"
              element={user ? <HomeMain/> : <Navigate to="/login" />}
            /> */}
            <Route
              path="/editEvent/:eventId"
              element={<EditEvent/>}
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
              path="/noti"
              element={ <Notification />}
            />
            <Route
              path="/admin/ann"
              element={ <AdminNotification /> }
            />
            <Route
              path="/admin/createann"
              element={<Adminann /> }
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
              element={<AdminHome /> }
            />
            <Route
            path="/createEvent"
            element={<CreateEvent/>}
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

      {/* </Wrapper> */}
         
        
    </Layout>
    </BrowserRouter>
  );
}

export default App;