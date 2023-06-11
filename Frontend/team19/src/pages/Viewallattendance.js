import React from 'react';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import User from '../components/UserCol';
function Viewallattendance() {
    // const { attendants } = props.attendants;
    // console.log(props)
    const [getuserdata, setUserdata] = useState([]);
    const getdata = async () => {

        const res = await fetch(`https://miracleachievers.shreeraj.me/backend/api/event/get/${id}`, {
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
           
            console.log(data);
        }
    }
    const {id}=useParams("")
    useEffect(() => {
        getdata();
    }, )
  return (
    <div>
      {/* {getuserdata.map((item) => (
  <React.Fragment key={item.id}>
    {item.attendants.map((data) => (
      <div key={data.id}>{data}</div>
    ))}
  </React.Fragment>
))} */}
          
       
        <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">Name</th>
                {/* <th scope="col">Date</th> */}
                
              </tr>
            </thead>
            <tbody>
            {getuserdata.attendants?.map((hobby, index) => (
          <User id={hobby}/>
          ))}
            </tbody>
          </table>
      
    </div>
  );
}

export default Viewallattendance;
