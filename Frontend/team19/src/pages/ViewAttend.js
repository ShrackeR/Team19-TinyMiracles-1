import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";

import Event from "../components/Event";
const ViewAttend=()=>{
    const {id}=useParams("")
    
    const [userData,setUserData]=useState({
        name: '',
        aadhar: '',
        isPanCard: false,
        pan: '',
        isEshram: false,
        eshram: '',
        mobile: '',
        dob: '',
        email: '',
        area: '',
        street: '',
        city: '',
        state: '',
        pin: '',
        password: '',
        familyFriends: [],
        isBankAccount: false,
        bankName: '',
        accountNumber: '',
        ifsc: '',
        medicalTestFrequency: '',
        lastCheckup: '',
        diseases: [],
        numberOfChildren: 0,
        needChildEducationAssistance: false,
        needEmploymentSupport: false,
        educationLevel: '',
        skillset: [],
        interests: [],
        eventsAttended: [],
        community: '',
        gender: '',
        status: 'ACTIVE',
      });
    // const [loading,setloading]=useState(false);
    useEffect(()=>{
        const fetchData= async()=>{
              const response = await fetch(`https://miracleachievers.shreeraj.me/backend/api/user/viewAttendedEvents/${id}`);
              const data = await response.json();
              setUserData(data);
        }
        fetchData();
            
},)

    
  
   
    //  const data= fetchData();
    // const d=eventsAttended
    console.log(userData);
    // const attendance=eventsAttended.forEach(element => {
    //     <li>{element}</li>
        
    // });

    return <>
            <h3>Attendance {userData.name}</h3>
       {/* <ul>
            
          {userData.eventsAttended.map(ele=> <li><Link to={"/allevents/eventdetails/"+ele}>{ele}</Link></li>)}
           
    
    </ul> */}
       <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">Event</th>
                <th scope="col">Date</th>
                
              </tr>
            </thead>
            <tbody>
              {userData.eventsAttended.map((ele) => (
                // <p>{ele}</p>
                <Event id={ele}/>
              ))}
            </tbody>
          </table>
    </>
}
export default ViewAttend