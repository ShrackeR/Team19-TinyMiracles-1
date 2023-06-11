import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Event=(props)=>{
    const id=props.id;
    const [eventData,setEventData]=useState();
    useEffect(()=>{
        try{
      
            const fetchData= async()=>{
                  const response = await fetch(`https://miracleachievers.shreeraj.me/backend/api/event/get/${ id }`);
                  const data = await response.json();
                  setEventData(data);
            }
            fetchData();
        }catch(err){
            console.log("data not found")
        }
            


    },[])
    console.log(eventData);
    return (<>

            
      {eventData && <tr key={eventData._id}> 
                  {/* <th scope="row">{id + 1}</th> */}
                  <td><Link to={`/allevents/eventdetails/${eventData._id}`}>{eventData.title}</Link></td>
                  <td>{eventData.start}</td>
                  
                 
        </tr>
        }
    </>
    )

}
export default Event