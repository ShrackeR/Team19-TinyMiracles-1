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
import DateForm from "./pages/seldate";
import DateFormEvent from "./pages/seldateevent";
import Viewfeedback from "./pages/Viewfeedback"
// import './App.css';
import EventCards from "./pages/eventCards";
// import Hindi from "./Hindi"
import FlaskForm from "./pages/FlaskForm";
import Layout from "./components/Layout";
import "./components/Navbar3.css";

import ViewAttend from "./pages/ViewAttend";
// import Wrapper from "./components/Wrrapper";
// import Home from "./pages/Home";
import Wrapper from "./components/Wrrapper";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/editEvent";
import Employment from "./pages/Employment";
// import Chartss from "./pages/Chartss";
import Survey from "./pages/Survey";
// import Feedback from "react-bootstrap/esm/Feedback";
import EventCards2 from "./pages/eventCards2";
function App() {
  const { user } = useAuthContext();
  const { admin } = useAuthContext2();
  console.log(user);
  return (
    <BrowserRouter>
   
    <Layout>
      <div className="content">

      {/* <Wrapper> */}
      <Routes>
          {/* <Route
          path="/adminpanel"
          element={<AdminPanel/>}
          /> */}

          <Route exact
          path="/homepage"
          element={<Home/>}
          /> 
          <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            
            <Route
              path="/flask"
              element={user? <FlaskForm /> : <Navigate to="/login" />}
            />
            <Route
             path="/allevents"
             element={admin ? <Allevents /> : <Navigate to="/adminlogin" />}
             />
            <Route
              exact path="/alleventsadmin"
              element={admin ? <Allevents /> :  <Navigate to="/adminlogin" />}
            />
            <Route
              exact path="/feedback"
              element={user ? <Feedbackk /> : <Navigate to="/feedback" />}
            />
            <Route
              exact path="/selUserDate"
              element={admin ? <DateForm /> : <Navigate to="/" />}
            />
            <Route
              exact path="/selEventDate"
              element={admin ? <DateFormEvent /> : <Navigate to="/" />}
            />
            <Route
              path="/scanner"
              element={user? <Scanner />  : <Navigate to="/login" />}
             
            />
            <Route
              path="/eventCards2"
              element={user ?<EventCards2/>:<Navigate to="/login" /> }
             
            />
            
            <Route
             exact path="/allevents/eventdetails/:id"
             element={ <EventDetails /> }
             />
            <Route path="/viewallattendance/:id"element={admin?<Viewallattendance/> : <Navigate to="/adminlogin" />} />
            <Route path="/viewfeedback/:id"element={admin?<Viewfeedback/> : <Navigate to="/adminlogin" />} />
            
            {/* <Route
             path="/"
              element={user ? <HomeMain/> : <Navigate to="/login" />}
            /> */}
            <Route
              path="/alleventsadmin/editEvent/:eventId"
              element={admin? <EditEvent/>: <Navigate to="/adminlogin" />}
            />
            {/* <Route
              path="/viewEvent/:eventId"
              element={<ViewEvent/>}
            /> */}
            <Route
              path="/viewEvent/:id"
              element={<EventDetails/> }
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
              element={user? <Notification /> : <Navigate to="/login" />}
            />
            <Route
              path="/admin/ann"
              element={admin? <AdminNotification />: <Navigate to="/adminlogin" /> }
            />
            <Route
              path="/admin/createann"
              element={admin? <Adminann /> : <Navigate to="/adminlogin" />}
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
              element={admin? <Home /> : <Navigate to="/adminlogin" />}
            />
            <Route
              path="/admin/allusers"
              element={admin? <AdminHome />: <Navigate to="/adminlogin" /> }
            />
            <Route
            path="/createEvent"
            element={admin?<CreateEvent/>: <Navigate to="admin/" />}
            />
            <Route
            path="/EventCards"
            element={user? <EventCards/>:<Navigate to="/login" />}
            />

            <Route
            path="/employment"
            element={user? <Employment/> : <Navigate to="/login" />}
            />
            {/* <Route
            path="/dashboard"
            element={<Chartss/>}
            /> */}
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
              element={ <EventDetails /> }
            />
            <Route
              path="admin/allusers/view/:id"
              element={admin ? <Details /> : <Navigate to="/adminlogin" />}
            />
            <Route
              path="edit/:id"
              element={admin ? <Edit/> : <Navigate to="/adminlogin" />}
            />
            <Route
              path="alleventsadmin/eventdetails/:id"
              element={<EventDetails/>  }
            />
            
            {/* <Route exact path="/view/:id" component={Details} /> */}

            <Route
            path="/viewAttendedEvents/:id"
            element={user? <ViewAttend/> : <Navigate to="/login" />}
            />

            <Route

            path="/survey/:eventId"
            element={user? <Survey key={123}/>:  <Navigate to="/login" />}
             />
             </Routes>

             

      {/* </Wrapper> */}
         
      </div>
    </Layout>
    </BrowserRouter>
  );
}

export default App;