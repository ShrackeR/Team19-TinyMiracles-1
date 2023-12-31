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
import image from './PB9auk.png';
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
    <div style={{ backgroundImage:`url(${image})`}}>
    <div >
    {/* <nav id="site-nav" class="navbar navbar-fixed-top navbar-custom">
    <div class="container">
        <div class="navbar-header">

            <div class="site-branding">
                <a class="logo" href="index.html">
                    
                    <img src={logo} alt="Logo"/>

                    Conference 2015
                </a>
            </div>

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-items" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

        </div>

        <div class="collapse navbar-collapse" id="navbar-items">
            <ul class="nav navbar-nav navbar-right">

                <li class="active"><a data-scroll href="#about">About</a></li>
                <li><a data-scroll href="#speakers">Speakers</a></li>              
                <li><a data-scroll href="#schedule">Schedule</a></li>                  
                <li><a data-scroll href="#partner">Partner</a></li>       
                <li><a data-scroll href="#faq">FAQ</a></li>
                <li><a data-scroll href="#photos">Photos</a></li>
            
            </ul>
        </div>
    </div>
</nav> */}

<div className="texts">
    
        <h1 style={{ color: 'Black', fontweight: 'bold', fontSize: '80px'}}>{getuserdata.title}</h1>
        <center><h2 style={{ color: 'black', fontFamily: 'Arial' }}>🕑 When: {extractedDate.toUpperCase()}</h2>
        </center></div>
     
        <section id="speakers" class="section speakers" style={{padding:'20px 0'}}>
    <div class="content" style={{marginLeft:"100px",textAlign:"justify",textJustify:'inter-word',fontFamily:"Times New Roman"}}>
        
                <h2 class="section-title">Description</h2>
            

                

                <div class="speaker" style={{margin:0}}>
                    
                <p style={{ float: "left", textAlign: "justify", marginRight:'100px' , textTransform:'none',color:'black', fontSize:'20px'}}>{getuserdata.description}</p>
                    {/* <p>CEO of Peren</p> */}
                    
           
        </div>
    </div>
</section>
{user && new Date(getuserdata.end) < new Date() && <section id="registration"  style={{padding:0}} class="section registration">
    <div class="summary">
            
       



       {user && <Feedbackk id={id}/>}
    </div>
</section>}



{/* <section id="partner" class="section partner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-title">Event Partner</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <a class="partner-box partner-box-1"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-2"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-3"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-4"></a>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <a class="partner-box partner-box-5"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-6"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-7"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-8"></a>
            </div>
        </div>   
    </div>
</section> */}



{admin &&
<section id="about" class="section about" style={{padding:0}}>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">

                {/* <h3 class="section-title">About Us</h3> */}

               
                {/* <p>You've inspired new consumer, racked up click-thru's, blown-up brand enes. We can't give you back the weekends you worked, or erase the pain ebeing forced to make the logo bigger. But if you submit your best work we ajusts might be able to give the chance to show you best digital marketing.</p> */}
                
                <p> <QrCode value={`event=${id}`}/> </p>
                <figure>
                    <img alt="" class="img-responsive" src="assets/images/about-us.jpg"/>
                </figure>

            </div>

            <div class="col-sm-6">

                {/* <h3 class="section-title multiple-title">What is Our Goal?</h3> */}

                
                <h4>Help user mark attendance</h4>
               
            <form onSubmit={handleSubmit}>
      <label>
        Aadhar Number:
        
      </label>
      <input style={{width:'webkit-fill-available'}}
          type="text"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      <button type="submit" class="btn btn-primary">Submit</button>

    </form>
            </div>
        </div>
        <button class="btn btn-primary"><Link style={{color:'white'}} to=
         {"/viewallattendance/"+id}>View Attendance</Link></button>
         
         <button class="btn btn-primary"><Link  style={{color:'white'}}  to=
         {"/viewfeedback/"+id}>View Feedback</Link></button>
    </div>

</section>}


{/* <section id="location" class="section location">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
            <h3 class="section-title">{getuserdata.location}</h3>
            </div>
            <div class="col-sm-9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.50013548559!2d-78.9870674333782!3d40.76030630398601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sbd!4v1436299406518" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
            </div>
            <span style={{textAlign:"right"}}>(Coming up soon...)</span>
        </div>
    </div>
</section> */}

</div>
</div>
  );
}

export default EventDetails;