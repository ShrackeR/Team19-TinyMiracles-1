import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext2 } from '../hooks/useAuthContext2';
import { Link } from 'react-router-dom'
import Wrapper from "../components/Wrrapper";
import "../assets/css/main.css";

const DateForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const {admin} = useAuthContext2();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the selected start and end dates
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
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
      {/* <Link className='btn btn-primary' target='_blank' to={"dashboard/"+admin.token+"/"+startDate+"/"+endDate}>View Event Analytics</Link> */}
      <Link className='btn btn-primary' target='_blank' to={"http://localhost:3001/dashboard/"+admin.token+"/"+startDate+"/"+endDate}>View User Analytics</Link>
    </form>
    </Wrapper>
  );
};

export default DateForm;