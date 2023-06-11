import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext2 } from '../hooks/useAuthContext2';
import { Link } from 'react-router-dom'
import Wrapper from "../components/Wrrapper";
import "../assets/css/main.css";

const DateFormEvent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const {admin} = useAuthContext2();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the selected start and end dates
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    linkto
  };

  return (
    <Wrapper>
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <br />
      <br />
      <Link className='btn btn-primary' target='_blank' to={"http://13.235.113.174:3001/tables/"+admin.token+"/"+startDate+"/"+endDate}>View Event Analytics</Link>
      {/* <button type="submit">Submit</button> */}
    </form>
    </Wrapper>
  );
};

export default DateFormEvent;