import "./Home.css";
import React from 'react';
import Iframe from 'react-iframe';
import "./iframe.css"
import EventCards2 from "./eventCards2";
const Home = () => {

    return ( 
        <>
  
  <div className="loader-wrap">
    <div className="loader">
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
    </div>
  </div>
  <div className="dots">
    <div className="active one" data-x="header" />
    <div className="two" data-x=".recipes" />
    <div className="three" data-x=".fixed-image" />
  </div>
  
  <h4>Events conducted by Tiny Miracles</h4>

  <div className="about-us">
    {/* <div className="text">
      <h2>Discover</h2>
      <h3>The Sun Shines for Everyone
      </h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
     "Empowering communities, one act of kindness at a time, for a brighter future."
 "Uniting hearts, bridging gaps, and igniting hope for a world without barriers."
 "Together, we can create ripples of change that transform lives and shape destinies."
 "Building a compassionate world where every voice is heard, every life cherished."
      </p>
      <div>
        <a className="a-CTA" href="#">
          About Us
        </a>
      </div>
    </div>
    <div className="image-container">
      <div className="image image1">
        <img
          src="https://tinymiracles.com/wp-content/webp-express/webp-images/uploads/2023/03/Left.png.webp"
          alt="Yoga photo1"
        />
      </div>
      
    </div> */}
    
    <div id="my-div" style={{ height: "250px" }}>

    <EventCards2/>
    </div>
  </div>
  {/* {/End About Us/}
  {/start Recipes/} */}
  {/* <div className="recipes">
    <div className="image" />
    <div className="text">
      <h2>Fitness </h2>
      <h3>Is a way of life</h3>
    </div>
  </div> */}
  {/* {/End Recipes/}
  {/start Menu/} */}
  <div className="menu">
    <div className="box-model">
      <i className="fas fa-times fa-2x close" />
      <div className="arrow">
        <div className="arrow arrow-right" />
        <div className="arrow arrow-left" />
      </div>
      <div className="box-image-container">
        <div className="box-image">
          <img src="" alt="Food Photo" />
        </div>
      </div>
    </div>
    <div className="menu-image-container">
      <div className="image active">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-international-day-elimination-violence-against-women-background_23-2149120937.jpg?w=740&t=st=1685962046~exp=1685962646~hmac=dc907d28ca51aa0549878ec254ecb551e274212fd42baae1ee54fd8bc363078d"
          alt="middle Photo" style={{height:"300px"}}
        />
      </div>
      {/* <div className="image">
        <img
          src="https://media.istockphoto.com/id/1324689337/photo/indian-village-government-school-girls-operating-laptop-computer-system-at-rural-area-in-india.jpg?s=612x612&w=0&k=20&c=yXYV73UwR6ZXOhcxv96TVNLH_A3AvL55qjaA3BRSDPY="
          alt="middle Photo"
        />
      </div> */}
     
      <div className="image">
        <img
          src="https://media.istockphoto.com/id/1064019662/photo/pediatrician-doctor-examining-ill-girl-at-village.jpg?s=612x612&w=0&k=20&c=SDj2bv9S4wBllpN3nG8j681tDJN27w1MQOx0nd-jC1U="
          alt="middle Photo" style={{height:"300px"}}
        />
      </div>
    </div>
    <div className="text">
      <h2>Tiny Miracles</h2>
      <h3>More about us</h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
      Empowering women, transforming lives, and shattering glass ceilings with every step
      </p>
      <div>
        <a className="a-CTA" href="#">
          Go to home 
        </a>
      </div>
    </div>
  </div>
  {/* {/End Menu/}
  {/Start fixed-image/} */}
  <div className="fixed-image">
    <div className="text">
      <h2>We are Tiny Miracles</h2>
      <h3>Make Sure It Does</h3>
    </div>
  </div>
  {/* {/End fixed-image/}
  {/start About Us/} */}
  {/* <div className="reservation">
    <div className="text">
      <h2>Motivate</h2>
      <h3>Believe you can and you are halfway there...</h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
        We promise a relaxed experience that offers
        something different to local and foreign patrons and ensures you enjoy a
        memorable experience every time.
      </p>
      <div>
        <a className="a-CTA" href="#">
          Register now
        </a>
      </div>
    </div>
    <div className="image-container">
      <div className="image image1">
        <img
          src="https://i.pinimg.com/originals/4d/90/0d/4d900da84034600a326493c18476a999.png"
          alt="Food Photo"
        />
      </div>
      <div className="image image2">
        <img
          src="https://thevoiceslu.com/wp-content/uploads/2016/08/cross-fit.jpg"
          alt="Food Photo"
        />
      </div>
    </div>
  </div> */}
  {/* {/End About Us/}
  {/Start Footer/} */}
  <footer>
    <div className="text">
    <h2 style={{color:"white"}}>ABOUT Tiny Miracles</h2>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p style={{color:"white"}}>
      Along the way we hope to empower 1 million people to break out of their cycle of poverty. Once and for all.

      We're based in Mumbai and Amsterdam. We get amazing people to make amazing products for amazing companies. 

By creating a place in the economy for them and by fostering education and a sense of community, we empower people to get out (and stay out) of poverty for ever more.
      </p>
    
    </div>
  </footer>
  {/* {/End Footer/}
  {/Start Copy-Right/} */}
  <div className="copyright">
    <svg
      className="svg-up"
      width={192}
      height={61}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 160.7 61.5"
      enableBackground="new 0 0 160.7 61.5"
      xmlSpace="preserve"
    >
      <path
        fill="#262526"
        d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
      />
    </svg>
    <i className="fas fa-angle-double-up arrow-up" />
    <ul className="info">
      <li></li>
      <li>VJTI,Matunga</li>
      {/* <li>Tel: 123456789</li> */}
      <li>

      </li>
    </ul>
  </div>
  {/* {/End Copy-Right/} */}
  {/* Add your site or application content here */}
</>

     );
}
 
export default Home;