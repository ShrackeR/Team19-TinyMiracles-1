import React, { useState, useEffect } from "react";
import { useAuthContext2 } from '../hooks/useAuthContext2'
// import { useCreateEvent } from "../hooks/useCreateEvent";
import Wrapper from "../components/Wrrapper";
import { NavLink, useParams } from "react-router-dom";

const EditEvent = (props) => {
  const {admin}=useAuthContext2();
  const { eventId } = useParams('');
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  // const { dispatch } = useAuthContext()
  const [success, setSuccess] = useState()
  // const id = "647ca68456ee5b502156f9df";
  console.log("here!!!!")

  // const { createEvent, error, isLoading, success, setSuccess } = useCreateEvent();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    location: '',
    address: '',
    start: '',
    end: '',
    tag: '',
    resources: '',

  });
  useEffect(() => {
    const response = fetch("/api/event/get/" + eventId).then(res => {
      return res.json();

    }).then(data => {
      console.log(data);
      var extractedDate = new Date(data.start).toLocaleDateString('en-CA');
      var extractedTime = new Date(data.start).toLocaleTimeString()
      extractedTime = extractedTime.substring(0, extractedTime.length - 3);
      const start = extractedDate + " " + extractedTime;
      extractedDate = new Date(data.end).toLocaleDateString('en-CA');
      extractedTime = new Date(data.end).toLocaleTimeString()
      extractedTime = extractedTime.substring(0, extractedTime.length - 3);
      const end = extractedDate + " " + extractedTime;

      console.log("start" + end);
      const currentData = {
        title: data.title,
        description: data.description,
        location: data.location,
        address: data.address,
        start: start,
        end: end,
        tag: data.tag,
        resources: data.resources,
        question:data.question,
        duration:data.duration,
        expectedAnswer:data.expectedAnswer,
        expectedAttendance:data.expectedAttendance
      }
      setEventData((preD) => ({
        ...preD,
        ...currentData
      }));
    })


  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEventData((preData) => ({
      ...preData,
      [name]: value



    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(eventData);
    // await createEvent(eventData);
    setIsLoading(true)
    setError(null)
    console.log("evd"+eventData.tag)

    setSuccess(0);
    const response = await fetch('https://miracleachievers.shreeraj.me/backend/api/event/update/'+eventId, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${admin.token}`
    },
      body: JSON.stringify({
        title: eventData.title,
        description: eventData.description,
        location: eventData.location,
        address: eventData.address,
        start: eventData.start,
        end: eventData.end,
        tag: eventData.tag,
        resources: eventData.resources,
        question:eventData.question,
        duration:eventData.duration,
        expectedAnswer:eventData.expectedAnswer,
        expectedAttendance:eventData.expectedAttendance
      })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      { alert(json.error) }
    }
    if (response.ok) {
      // save the data to local storage
      // localStorage.setItem('user', JSON.stringify(json))

      // // update the auth context
      // dispatch({type: 'LOGIN', payload: json})

      // update loading state
      console.log("Success")
      { alert("Success") 
      // window.location.reload(true);
      setIsLoading(false)
      setSuccess(1);


    }
  }

  // return { createEvent, isLoading, error, success }
}


return (<>
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <h3>Fill Event Details</h3>
      <div className="mb-3">
        Title:
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
        Description:
        {/* <input
          
          name="description"
          value={eventData.description}
          onChange={handleChange}
          className="form-control"
          placeholder=""
        /> */}
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          className="form-control"
          placeholder=""
        ></textarea>
      </div>

      <div className="mb-3">
        Locality:
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter locality of event"
        />
      </div>
      <div className="mb-3">
        Address:
        <input
          type="text"
          name="address"
          value={eventData.address}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter address of event"
        />
      </div>

      <div className="mb-3">
        Start date:
        <input
          type="datetime-local"
          name="start"
          defaultValue={eventData.start}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter start date"
        />
      </div>
      <div className="mb-3">
        End date:
        <input
          type="datetime-local"
          name="end"
          defaultValue={eventData.end}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter end date"
        />
      </div>

      <div className="mb-3">
        Event Tag
        <input
          name="tag"
          value={eventData.tag}
          onChange={handleChange}
          className="form-control multiple"
        >
        </input>
      </div>
      <div className="mb-3">
        Resources:
        <input
          type="text"
          name="resources"
          value={eventData.resources}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter resources"
        />
      </div>
      <div className="mb-3">
            Questions for the survey form:
            <input
              type="text"
              name="question"
              value={eventData.question}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Survey Question"
            />

        </div>
        
        <div className="mb-3">
        Expected survey Answer(Default is yes):
        <select
          name="expectedAnswer"
          value={eventData.expectedAnswer}
          onChange={handleChange}
          className="form-control multiple"
        >
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          {/* <option value="women">Women Employment</option> */}
          {/* <option value="child">Children Special</option> */}
        </select>
      </div>
      <div className="mb-3">
        After how many days do you wish to send this form?:
        <input
          type="text"
          name="duration"
          value={eventData.duration}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter no. of days"
        />
      </div>
      <div className="mb-3">
       Axpected attendants:
        <input
          type="number"
          name="expectedAttendance"
          value={eventData.expectedAttendance}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter no. of days"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </Wrapper>

</>)
}
export default EditEvent;