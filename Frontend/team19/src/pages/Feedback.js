import { useState } from "react";
import './feedback.css';
import { FaStar } from "react-icons/fa";
// import Feedback from "react-bootstrap/esm/Feedback";
import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";

// const colors = {
//     orange: "#FFBA5A",
//     grey: "#a9a9a9"
    
// };



function Feedbackk(props) {
    const { user } = useAuthContext();
    const { admin } = useAuthContext2();

    const [hoverValue, setHoverValue] = useState(undefined);
    const [currentValue, setCurrentValue] = useState(0);
    const [exp, setExp] = useState('');
  const stars = Array(5).fill(0)
    const id=props.id;
    const id2=user.id;
    const name=user.name
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to the backend with the rating and experience
    
    fetch(`https://miracleachievers.shreeraj.me/backend/api/event/feedback/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        

      },
      body: JSON.stringify({exp,currentValue,id2,name})
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the backend
        setExp("");
        alert("Form Submitted");
        
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  };


  console.log(currentValue);
  console.log(id);
  console.log(exp);
  return (
    
    <form onSubmit={handleSubmit}>
    <div style={styles.container}>
      <h2>Rate the event</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? 'orange' : 'grey'}
              style={{
                marginRight: 10,
                cursor: 'pointer'
              }}
            />
          );
        })}
      </div>
      <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
        onChange={(e) => setExp(e.target.value)}
      />
      <button type="submit">Submit</button>
    </div>
  </form>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default Feedbackk;
 