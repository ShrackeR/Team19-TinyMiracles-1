import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext2 } from '../hooks/useAuthContext2';
function Viewafeedback() {
  const [getuserdata, setUserdata] = useState([]);
  const { id } = useParams("");
  const {admin}=useAuthContext2();
  const getdata = async () => {
    const res = await fetch(`https://miracleachievers.shreeraj.me/backend/api/event/getfeedback/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${admin.token}`

      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log(data);
    }
  }

  useEffect(() => {
    getdata();
  }, []);

  console.log("getuserdata:", getuserdata);

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
        {getuserdata && getuserdata.map((hobby, index) => (
          <li key={index}>
            <div class="card">
              <div class="card-header">Username: {hobby.username}</div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>Feedback: {hobby.experience}</p>
                  <footer class="blockquote-footer" style={{ color: "yellow" }}>Rating: {hobby.rating} <cite title="Source Title"></cite></footer>
                </blockquote>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Viewafeedback;
