import QrCode from "react-qr-code";

import React, { useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Feedbackk from "../pages/Feedback";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";
import speaker1 from "../assets/images/speakers/speaker-1.jpg";
import speaker2 from "../assets/images/speakers/speaker-2.jpg";
import speaker3 from "../assets/images/speakers/speaker-3.jpg";
import speaker4 from "../assets/images/speakers/speaker-4.jpg";
import speaker5 from "../assets/images/speakers/speaker-5.jpg";
import speaker6 from "../assets/images/speakers/speaker-6.jpg";
import "../assets/css/main.css";
import {useParams, useNavigate } from "react-router-dom";
import { height } from "@mui/system";
function EventDetails() {
    const { user } = useAuthContext();
    const { admin } = useAuthContext2();

    const[pass,setPass]=useState(null)
    const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);
    // console.log(getuserdata.title);
    

    // const { id } = useParams("");
    
    
    const {id}=useParams("")


    const navigate = useNavigate();

    const [aadhar, setAadhar] = useState('');
   

    const handleSubmit = (e) => {
      e.preventDefault();
      // Call handleSubmit2 with the Aadhar number
      
      // You can use fetch or any other HTTP library to send the Aadhar number as the request body
      // Example:
      console.log(aadhar);
      fetch(`http://localhost:4000/api/event/markAttendanceaadhar/${id}`, {
        method: 'POST',
        body: JSON.stringify({ aadhar }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${admin.token}`

        }
      })
        .then(response => response.json())
        .then(data => {
            alert("Attendance Marked")
          // Handle the response from the server
        })
        .catch(error => {
          // Handle any errors
          alert(error)
        });
    };
  
   
    const imageStyle = {
        height: 'calc(100% / 3)', // Reduce height by 1/3
        opacity: 0.33, // Reduce opacity by 1/3
      }; 
    const getdata = async () => {

        const res = await fetch(`http://localhost:4000/api/event/get/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            setPass(getuserdata.attendants)
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    }, [])
    console.log(getuserdata.attendants);
    const extractedDate = new Date(getuserdata.start).toLocaleString('en-IN');
    const extractedEnd = new Date(getuserdata.end).toLocaleString('en-IN');
    const deleteuser = async (id) => {

        const res2 = await fetch(` http://localhost:4000/api/event/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${admin.token}`

            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            alert("Success");
            window.location.reload(false);
        }

    }
   
  return (
   <div>
  <title>TheEvent Bootstrap Template - Index</title>
  <base href="https://shreyascyber.com/test/TheEvent/" />
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet" />
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <section id="hero">
    <div className="hero-container" data-aos="zoom-in" data-aos-delay={100}>
      <h1 className="mb-4 pb-0">The Annual<br /><span>Marketing</span> Conference</h1>
      <p className="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
      <a href="https://www.youtube.com/watch?v=Kw4d8VzSgUc" className="glightbox play-btn mb-4" />
      <a href="#about" className="about-btn scrollto">About The Event</a>
    </div>
  </section>
  <main id="main">
    <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <h2>About The Event</h2>
            <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
              accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in
              est ut optio sequi unde.</p>
          </div>
          <div className="col-lg-3">
            <h3>Where</h3>
            <p>Downtown Conference Center, New York</p>
          </div>
          <div className="col-lg-3">
            <h3>When</h3>
            <p>Monday to Wednesday<br />10-12 December</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>

  );
}

export default EventDetails;