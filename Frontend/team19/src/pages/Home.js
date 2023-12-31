import "./Home.css";
import React from 'react';
import Iframe from 'react-iframe';
import "./iframe.css"
import EventCards2 from "./eventCards2";
const Home = () => {

    return ( 
      <>
      <iframe src="https://tinymiracles.com/about-us/" style={{width:'90%',height:'100%',margin:'0px',padding:'0px',overflow:'hidden',position:'absolute',top:'0px',left:'200px',right:'0px',bottom:'0px'}}></iframe>
    </>

     );
}
 
export default Home;