import React from 'react';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
function Viewallattendance() {
    // const { attendants } = props.attendants;
    // console.log(props)
    const [getuserdata, setUserdata] = useState([]);
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
           
            console.log(data);
        }
    }
    const {id}=useParams("")
    useEffect(() => {
        getdata();
    }, [])
  return (
    <div>
      {/* {getuserdata.map((item) => (
  <React.Fragment key={item.id}>
    {item.attendants.map((data) => (
      <div key={data.id}>{data}</div>
    ))}
  </React.Fragment>
))} */}
          <ul>
        {getuserdata.attendants?.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Viewallattendance;
