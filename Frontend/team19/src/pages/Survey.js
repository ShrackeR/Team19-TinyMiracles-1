import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import './Survey.css';
const Survey=()=>{
    const eventId=useParams("");
   
    // const eventId='647c9dec1252c81c102c6528';
    const [eventData,setEventData]=useState();
    
   

    const questions=['have you created your banck account','will you want further session on financial litteracy','Are you satisfied with session','have you follow your daily checkup routine','do you know about investing']
    const  questionsD =questions.reduce((acc, question, index) => {
        acc[index] = { question, answer: false };
        return acc;
    }, {});
    const [questionsData,setQuestionData]=useState(questionsD);
    // useEffect(()=>{
    //     try{
            
            
            
    //         const fetchData= async()=>{
    //               const response = await fetch(`http://localhost:4000/api/event/get/647c9dec1252c81c102c6528`);
    //               const data = await response.json();
    //               setEventData(data);
    //         }
    //         fetchData();
    //         // setQuestionData(questionsData);
    //     }catch(err){
    //         console.log("data not found")
    //     }
            


    // },[])
    // console.log(eventData);
    

      const changeHandler=(e)=>{
        const {name,value}=e.target;
        const ans=value=='true'?true:false;
        console.log(name,value);
        setQuestionData((preD)=>({
            ...preD,
            [name]:{'question':preD[name].question,'answer':ans}

        }))
      }
      const submitFormHand=(e)=>{
        e.preventDefault();
        console.log(questionsData);
      }
    
    return (
        <><div class="main-block">
    <h1>Survey Questions</h1>
    <form onSubmit={submitFormHand}>
      <hr/>
      {/* <div class="account-type">
        <input type="radio" value="none" id="radioOne" name="account" checked/>
        <label for="radioOne" class="radio">Personal</label>
        <input type="radio" value="none" id="radioTwo" name="account" />
        <label for="radioTwo" class="radio">Company</label>
      </div> */}
      {/* <hr/> */}

      {/* <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
      <input type="text" name="name" id="name" placeholder="Email" required/>
      <label id="icon" for="name"><i class="fas fa-user"></i></label>
      <input type="text" name="name" id="name" placeholder="Name" required/>
      <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
      <input type="password" name="name" id="name" placeholder="Password" required/> */}
      {questions.map((que,index)=>(
            <>
         <div>
         <label for={`{index}`}>{que}</label>

                <select id={`${index}`} name={`${index}`} onChange={changeHandler} >
                <option >Select answer</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
                
                </select>
       </div>
       <hr/>
       </>

      ))}
     
      {/* <div class="gender">
        <input type="radio" value="none" id="male" name="gender" checked/>
        <label for="male" class="radio">Male</label>
        <input type="radio" value="none" id="female" name="gender" />
        <label for="female" class="radio">Female</label>
      </div> */}
      <hr/>
      <div class="btn-block">
        {/* <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p> */}
        <button type="submit">Submit</button>
      </div>
    </form>
  </div></>)
}
export default Survey;