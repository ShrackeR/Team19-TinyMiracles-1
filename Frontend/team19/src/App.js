import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Signup from "./pages/Signup";
import Scanner from "./pages/Scanner";
import Navbar from "./components/Navbar";
// import Viewallattendance from "./pages/Viewallattendance"
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
import EventDetails from "./pages/EventDetails";
import EventCards from "./pages/eventCards";
// import EventTable from "./tables/EventTable";
import Details from './pages/Details';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import './App.css';
// import Layout from "./components/Layout";
import Wrapper from "./components/Wrrapper";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/editEvent";
import ViewEvent from "./pages/viewEvent";

function App() {
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();

  return (
    <BrowserRouter>
   
    {/* <Layout> */}
      {/* <Wrapper> */}
      <Routes>
          

          <Route
          path="/homepage"
          element={<HomeMain/>}
          />

            <Route
              path="/"
              element={user ? <HomeMain /> : <Navigate to="/login" />}
            />
            <Route
              path="/editEvent/:eventId"
              element={<EditEvent/>}
            />
            {/* <Route
              path="/viewEvent/:eventId"
              element={<ViewEvent/>}
            /> */}
            <Route
              path="/viewEvent/:id"
              element={<EventDetails/>}
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
            path="/createEvent"
            element={<CreateEvent/>}
            />
            <Route
            path="/EventCards"
            element={<EventCards/>}
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
             exact path="/allevents/eventdetails/:id"
              element={<EventDetails /> }
            />
            <Route
              path="admin/ad/view/:id"
              element={admin ? <Details /> : <Navigate to="/adminlogin" />}
            />
            {/* <Route exact path="/view/:id" component={Details} /> */}
             </Routes>
      {/* </Wrapper> */}
         
        
    {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;