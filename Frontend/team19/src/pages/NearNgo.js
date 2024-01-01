import React, { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Survey.css';

import MapPicker from 'react-google-map-picker'
const NearNgo = () => {
    const { user } = useAuthContext();
    const DefaultLocation = { lat: 70, lng: 20 };
  const DefaultZoom = 10;
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);
  const [ngo, setNgo] = useState([]);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    location:{"type": "Point",
    "coordinates": []},
    distance: 1000,
});

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
    setFormData((prevData) => ({
        ...prevData,
        distance: parseFloat(newZoom * 1000)
      }));
  }

  var latt, longg;
  function handleResetLocation(e) {
    e.preventDefault(); // Prevent the default form submission
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
  
      setFormData((prevData) => ({
        ...prevData,
        location: {
          type: "Point",
          coordinates: [position.coords.longitude, position.coords.latitude],
        },
      }));
  
      handleChangeLocation(position.coords.latitude, position.coords.longitude);
    });
  }
  async function handleNgoLocation(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData);
    const res = await fetch(`http://35.244.31.186:8080/api/community/getnear`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'

      }
    })
    const data = await res.json();
    setNgo(data);
    setShow(true);
    console.log(data);
  }

return(
    <>
<button onClick={handleResetLocation}>Get Location</button>
<div>
  <label>Latitude: {location.lat}</label>
</div>
<div>
  <label>Longitude: {location.lng}</label>
</div>
<div>
  <label>Zoom: {zoom}</label>
</div>

<MapPicker
  defaultLocation={location}
  zoom={zoom}
  mapTypeId="roadmap"
  style={{ height: '20rem' }}
  onChangeLocation={handleChangeLocation}
  onChangeZoom={handleChangeZoom}
  apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'
/>
<button onClick={handleNgoLocation}>Get Nearby NGOs</button>
{show && <h1> Nearby NGOs</h1>}
<div className="container">
      {ngo.map((item, index) => (
        <div className="card mb-4" key={index}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.area}, {item.street}, {item.city}</p>
            <a href="mailto: abc@example.com {item.email}" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Send Message
            </a>
            <a style={{margin:"15px"}} href={`https://maps.google.com?q=${item.location.coordinates[1]},${item.location.coordinates[0]}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View on Map
            </a>
          </div>
        </div>
      ))}
    </div>
</>
)
}

export default NearNgo;