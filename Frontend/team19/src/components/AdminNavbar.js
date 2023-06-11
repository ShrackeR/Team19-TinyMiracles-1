import { Link } from 'react-router-dom'
import { useLogout2 } from '../hooks/useLogout2'
import { useAuthContext2 } from '../hooks/useAuthContext2'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from 'react'
import "./Navbar3.css";

const Navbar2 = () => {
  const { logout2 } = useLogout2()
  const { admin } = useAuthContext2()
  // const { user } = useAuthContext()
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    logout2()
  }
  const handleToggleNav = () => {
    setShowNav(!showNav);
  };


 

  return (
    

    <>
      {/* <nav className="navbar">
        <Link to="/admin/ad" className="navbar-brand">
          <img id="logoImg-n" src={myImg} alt="Logo" /> Tiny Miracles
        </Link>
        <button className={`hamburger ${showNav ? 'active' : ''}`} onClick={handleToggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-menu ${showNav ? 'show-nav' : ''}`}>
          <ul>
            {admin && (
              <>
                <li>
                  <span className="hi" style={{color:"blue"}}>Hi!! {admin.name}</span>
                </li>
                <li>
                  <Link to="/flask">NeedHelp?</Link>
                </li>
                <li>
                  <Link to="/createEvent">CreateNewEvent</Link>
                </li>
                <li>
                  <Link to="/alleventsadmin">Viewevents</Link>
                </li>
                
                <li>
                  <Link to="/admin/allusers">All Users</Link>
                </li>
                <li>
                  <Link to="/admin/createann">Create Announcement</Link>
                </li>
                <li>
                  <Link to="/admin/ann">View Announcements</Link>
                </li>
                <li>
                <button className="btn btn-primary" onClick={handleClick}>
                Log out
              </button>
                    </li>
              </>
            )}
        </ul>
        </div>
      </nav> */}

<div class="sidebar">
        <Link to="/admin/ad">Home</Link>
        <Link to="/flask">Need Help?</Link>
        <Link to="/createEvent">Create New Event</Link>
        <Link to="/alleventsadmin">View Events</Link>
        <Link to="/admin/allusers">All Users</Link>
        <Link to="/admin/createann">Create Announcement</Link>
        <Link to="/admin/ann">View Announcements</Link>
        <Link to="/selUserDate">View User Analytics</Link>
        <Link to="/selEventDate">View Event Analytics</Link>
        <li>
                  <button className="btn btn-primary" onClick={handleClick}>
                    Log out
                  </button>
                </li>
      </div>
    </>


  )
}

export default Navbar2