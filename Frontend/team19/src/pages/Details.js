import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

import { useAuthContext2 } from '../hooks/useAuthContext2'

const Details = () => {
  const { admin } = useAuthContext2()

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const navigate = useNavigate();


    const getdata = async () => {

        const res = await fetch(` https://miracleachievers.shreeraj.me/backend/api/details/getdata/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${admin.token}`
            }
        });

        const data = await res.json();
        
        console.log(data);
        // const data = await res.json();
        data.eventsAttended.forEach(async event => {
          console.log(event)
          const edata = await fetch(`https://miracleachievers.shreeraj.me/backend/api/event/get/${event}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(event+" "+edata.title+" ")
        data.eventsAttended.push(edata.title);
        data.eventsAttended.pop(event);
        // console.log(event+" "+edata.title+" ")
        });

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(` https://miracleachievers.shreeraj.me/backend/api/details/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            alert("Success");
            window.location.reload(false);
        }

    }

    return (
        <div className="container mt-3 mango">
        
  
        <Card sx={{ maxWidth: 800 }}>
          <CardContent>
            <div className="add_btn">
              <NavLink to={`/edit/${getuserdata._id}`}>
                <button className="btn btn-primary mx-2">
                  <CreateIcon />
                </button>
              </NavLink>
              <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}>
                <DeleteOutlineIcon />
              </button>
            </div>
            <div className="row">
              <div className="left_view col-lg-6 col-md-6 col-12">
                {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
                <h4 className="mt-3">
                  Name: <span>{getuserdata.name}</span>
                </h4>
                <h4 className="mt-3">
                  Age: <span>{getuserdata.age}</span>
                </h4>
                <p className="mt-3">
                  <MailOutlineIcon />
                  Email: <span>{getuserdata.email}</span>
                </p>
                <p className="mt-3">
                  <WorkIcon />
                  Occupation: <span>{getuserdata.work}</span>
                </p>
                <p className="mt-3">
                  Aadhar: <span>{getuserdata.aadhar}</span>
                </p>
                <p className="mt-3">
                  PAN Card: <span>{getuserdata.isPanCard ? getuserdata.pan : 'Not provided'}</span>
                </p>
                <p className="mt-3">
                  Eshram: <span>{getuserdata.isEshram ? getuserdata.eshram : 'Not provided'}</span>
                </p>
                <p className="mt-3">
                  Mobile: <span>+91 {getuserdata.mobile}</span>
                </p>
                <p className="mt-3">
                  Date of Birth: <span>{getuserdata.dob}</span>
                </p>
                <p className="mt-3">
                  Area: <span>{getuserdata.area}</span>
                </p>
                <p className="mt-3">
                  Street: <span>{getuserdata.street}</span>
                </p>
                <p className="mt-3">
                  City: <span>{getuserdata.city}</span>
                </p>
                <p className="mt-3">
                  State: <span>{getuserdata.state}</span>
                </p>
                <p className="mt-3">
                  PIN: <span>{getuserdata.pin}</span>
                </p>
                {/* Add more fields here */}
              </div>
              <div className="right_view col-lg-6 col-md-6 col-12">
                <p className="mt-5">
                  <PhoneAndroidIcon />
                  Mobile: <span>+91 {getuserdata.mobile}</span>
                </p>
                <p className="mt-3">
                  <LocationOnIcon />
                  Location: <span>{getuserdata.area}, {getuserdata.street}, {getuserdata.city}, {getuserdata.state}, {getuserdata.pin}</span>
                </p>
                <p className="mt-3">
                  Description: <span>{getuserdata.desc}</span>
                </p>
                <p className="mt-3">
                  Family and Friends: <span>{getuserdata.familyFriends && getuserdata.familyFriends.length > 0 ? getuserdata.familyFriends.join(', ') : 'None'}</span>
                </p>
                <p className="mt-3">
                  Bank Account: <span>{getuserdata.isBankAccount ? 'Yes' : 'No'}</span>
                </p>
                <p className="mt-3">
                  Bank Name: <span>{getuserdata.bankName}</span>
                </p>
                <p className="mt-3">
                  Account Number: <span>{getuserdata.accountNumber}</span>
                </p>
                <p className="mt-3">
                  IFSC: <span>{getuserdata.ifsc}</span>
                </p>
                <p className="mt-3">
                  Medical Test Frequency: <span>{getuserdata.medicalTestFrequency}</span>
                </p>
                <p className="mt-3">
                  Last Checkup: <span>{getuserdata.lastCheckup}</span>
                </p>
                <p className="mt-3">
                  Diseases: <span>{getuserdata.diseases && getuserdata.diseases.length > 0 ? getuserdata.diseases.join(', ') : 'None'}</span>
                </p>
                <p className="mt-3">
                  Number of Children: <span>{getuserdata.numberOfChildren}</span>
                </p>
                <p className="mt-3">
                  Child Education Assistance: <span>{getuserdata.needChildEducationAssistance ? 'Yes' : 'No'}</span>
                </p>
                <p className="mt-3">
                  Employment Support: <span>{getuserdata.needEmploymentSupport ? 'Yes' : 'No'}</span>
                </p>
                <p className="mt-3">
                  Education Level: <span>{getuserdata.educationLevel}</span>
                </p>
                <p className="mt-3">
                  Skillset: <span>{getuserdata.skillset && getuserdata.skillset.length > 0 ? getuserdata.skillset.join(', ') : 'None'}</span>
                </p>
                <p className="mt-3">
                  Interests: <span>{getuserdata.interests && getuserdata.interests.length > 0 ? getuserdata.interests.join(', ') : 'None'}</span>
                </p>
                <p className="mt-3">
                  Events Attended: <span>{getuserdata.eventsAttended && getuserdata.eventsAttended.length > 0 ? getuserdata.eventsAttended.join(', ') : 'None'}</span>
                </p>
                <p className="mt-3">
                  Community: <span>{getuserdata.community}</span>
                </p>
                <p className="mt-3">
                  Gender: <span>{getuserdata.gender}</span>
                </p>
                {/* Add more fields here */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}

export default Details