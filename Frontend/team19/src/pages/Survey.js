import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostSurvey } from "../hooks/usePostSurvey";
import './Survey.css';
const Survey=(props)=>{
    const {eventId}=useParams("");
    // console.log(eventId);
   
    // const eventId='6482ff73b7c4cde18871f9c0';
    // const [eventData,setEventData]=useState();
    const [questionsData,setQuestionData]=useState();
    const [adharNo,setAdharNo]=useState();
    const { PostSurvey, isLoading, error,success }=usePostSurvey();
    
   

    const questions=['have you created your banck account','will you want further session on financial litteracy','Are you satisfied with session','have you follow your daily checkup routine','do you know about investing']
    // console.log((eventId[eventId]));
    const api="http://localhost:4000/api/event/get/"+eventId;
                console.log(api);
   useEffect(()=>{
    console.log("inside useEffect")
            const fetchData= async()=>{
                
                const response = await fetch(api);
                const data = await response.json();
                // setEventData(data);
                console.log(data);
               
                    const  questionsD = await  data.question.reduce((acc, question, index) => {
                        acc[index] = { question, answer: false };
                        return acc;
                    }, {});
                        setQuestionData(questionsD);
                        // eventData=undefined;
                    
                   
                
        }
        fetchData();
   },[])
     console.log(questionsData);
//      if(eventData){
//     const  questionsD =eventData.question.reduce((acc, question, index) => {
//         acc[index] = { question, answer: false };
//         return acc;
//     }, {});
//         setQuestionData(questionsD);
//         // eventData=undefined;
    
   
// }

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
        
        // setQuestionData((preD)=>({
        //     ...preD,
        //     adhar:adharNo,
        //     eventId:eventId
        // }))
        const finalData={que:questionsData,adhar:adharNo,
            eventId:eventId}
        console.log(finalData);
        PostSurvey(finalData);
      }
      const adharHand=(e)=>{
        setAdharNo(e.target.value);
      }
    if(!questionsData) return <h1>Loading...</h1>
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
      { questionsData && Object.keys(questionsData).map((que,index)=>(
            <>
         <div>
         <label for={`{index}`}>{questionsData[que].question}</label>

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
      {/* <hr/> */}
      <label>Enter Aadhar No.</label>
      <input type="text" name="adhar" id="name" placeholder="Adhar No." required onChange={adharHand}/>
      
      
      <div class="btn-block">
        {/* <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p> */}
        <button type="submit">Submit</button>
      </div>
    </form>
  </div></>
  
  )
}
export default Survey;