import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from '../context/ContextProvider';
import { updatedata } from '../context/ContextProvider';
import { useAuthContext2 } from '../hooks/useAuthContext2'

const AdminHome = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [filterStatus, setFilterStatus] = useState('ACTIVE');

  console.log(getuserdata);
  const { admin } = useAuthContext2()

  const { udata, setUdata } = useContext(adddata);
  const { updata, setUPdata } = useContext(updatedata);

  const getdata = async () => {
    const res = await fetch('https://miracleachievers.shreeraj.me/backend/api/details/getdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${admin.token}`
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
    const res2 = await fetch(`https://miracleachievers.shreeraj.me/backend/api/details/deleteuser/${id}`, {
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
      getdata();
    }
  };
  const downloadCSV = () => {
    fetch('https://miracleachievers.shreeraj.me/backend/api/details/download',{headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${admin.token}`}
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Network response was not ok.');
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredData = filterStatus
    ? getuserdata.filter((element) => element.status === filterStatus)
    : getuserdata;

  return (
    <>
      <div class="col main pt-3 mt-1">
        <h3>User Details:</h3>
      {udata && (
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
      )}

      <div className="mt-5">
        <div className="container">
          <div className="filter-container">
            <label htmlFor="filterStatus">Filter by Status:</label>
            <select id="filterStatus" value={filterStatus} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="ACTIVE">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button onClick={downloadCSV}>Download CSV</button>
          <table className="table">
            <thead>
              <tr className="table-light">
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">AadharNo</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((element, id) => (
                <tr key={element._id}>
                  <th scope="row">{id + 1}</th>
                  <td>{element.name}</td>
                  <td>{element.aadhar}</td>
                  <td>{element.gender}</td>
                  <td>{element.status}</td>
                  <td className="d-flex ">
                    <NavLink to={`view/${element._id}`}>
                      <button className="btn btn-success">
                        <RemoveRedEyeIcon />
                      </button>
                    </NavLink>
                    <NavLink to="" >
                 {!(element.status=="Inactive")&&  <button  className="btn btn-danger ml-7" onClick={() => deleteuser(element._id)}>
                      <DeleteOutlineIcon />
                    </button>} </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default AdminHome;