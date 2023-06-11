import React, { useState, useEffect, useContext } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { useAuthContext2 } from '../hooks/useAuthContext2';
// import { adddata, deldata } from '../context/ContextProvider';
// import { updatedata } from '../context/ContextProvider';

const Allevents = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const {admin}=useAuthContext2();
  console.log(getuserdata);

//   const { udata, setUdata } = useContext(adddata);
//   const { updata, setUPdata } = useContext(updatedata);

  const getdata = async () => {
    const res = await fetch('https://miracleachievers.shreeraj.me/backend/api/event/getall', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log('error');
    } else {
      setUserdata(data);
      console.log('get data');
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`https://miracleachievers.shreeraj.me/backend/api/event/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${admin.token}`

      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log('error');
    } else {
      alert('user deleted');
      window.location.reload(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredData = filterStatus
    ? getuserdata.filter((element) => element.status === filterStatus)
    : getuserdata;

  return (
    <>
      {/* {udata && (
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{udata.name}</strong> added succesfully!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      {updata && (
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{updata.name}</strong> updated succesfully!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )} */}

      <div className="mt-5">
        <h1>All Events</h1>
        <div className="container">
          {/* <div className="filter-container">
            <label htmlFor="filterStatus">Filter by Status:</label>
            <select id="filterStatus" value={filterStatus} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="ACTIVE">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div> */}

          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">start</th>
                <th scope="col">end</th>
                <th scope="col">tags</th>
                <th scope="col">visible</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((element, id) => (
                <tr key={element._id}>
                  <th scope="row">{id + 1}</th>
                  <td>{element.title}</td>
                  <td>{element.location}</td>
                  <td>{element.start}</td>
                  <td>{element.end}</td>
                  <td>{element.tag}</td>
                  <td>{element.enabled?"Active":"Inactive"}</td>
                  <td className="d-flex justify-content-evenly">
                    <NavLink to={`/allevents/eventdetails/${element._id}`}>
                      <button className="btn btn-success">
                        <RemoveRedEyeIcon />
                      </button>

                    </NavLink>
                    <NavLink to={`editEvent/${element._id}`}>
                <button className="btn btn-primary mx-2">
                  <CreateIcon />
                </button>
                </NavLink>

                 {!(element.status=="Inactive")&&  <button className="btn btn-danger mr-7" onClick={() => deleteuser(element._id)}>
                      <DeleteOutlineIcon />
                    </button>} 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Allevents;
