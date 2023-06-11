import React, { useState, useEffect } from "react";
import { useCreateEvent } from "../hooks/useCreateEvent";
import Wrapper from "../components/Wrrapper";

const EditEvent = (props) => {
  const id=props.id;
  // const id = "647ca68456ee5b502156f9df";
  console.log("here!!!!")

  const { createEvent, error, isLoading, success, setSuccess } = useCreateEvent();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    location: '',
    start: '',
    end: '',
    tag: '',
    resources: '',

  });
  useEffect(() => {
    const response = fetch("https://miracleachievers.shreeraj.me/backend/api/event/get/"+id).then(res => {
      return res.json();

    }).then(data => {
      console.log(data);
      var extractedDate = new Date(data.start).toLocaleString('en-IN');
      var extractedTime = new Date(data.start).toLocaleTimeString()
      extractedTime = extractedTime.substring(0, extractedTime.length - 3);
      const start = extractedDate + " " + extractedTime;
      extractedDate = new Date(data.start).toLocaleDateString('en-CA');
      extractedTime = new Date(data.start).toLocaleTimeString()
      extractedTime = extractedTime.substring(0, extractedTime.length - 3);
      const end = extractedDate + " " + extractedTime;

      console.log("start"+end);
      const currentData = {
        title: data.title,
        description: data.description,
        location: data.location,
        start: start,
        end: end,
        tag: data.tag,
        resources: data.resources
      }
      setEventData((preD)=>({
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
    await createEvent(eventData);
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
          Location:
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter location of event"
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
          Event Type
          <select
            name="tag"
            value={eventData.tag}
            onChange={handleChange}
            className="form-control multiple"
          >
            <option value="Education">Education</option>
            <option value="Health">Health Related</option>
            <option value="women">Women Employment</option>
            <option value="child">Children Special</option>
          </select>
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
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </Wrapper>

  </>)
}
export default EditEvent;