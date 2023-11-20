import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrrapper";
import MapPicker from 'react-google-map-picker'

const Login = () => {
  const [aadhar, setAadhar] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(aadhar, password);
  };
  const DefaultLocation = { lat: 70, lng: 20};
  const DefaultZoom = 10;
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  var latt, longg;
  function handleResetLocation(){
    setDefaultLocation({ ... DefaultLocation});
    setZoom(DefaultZoom);
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      latt=position.coords.latitude;
      longg=position.coords.longitude;
      handleChangeLocation(latt,longg)
    });
  }
  
  
  return (

    <Wrapper>

       <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Aadhar</label>
          <input
            type="text"
            name="aadhar"
            onChange={(e) => setAadhar(e.target.value)}
            value={aadhar}
          
            className="form-control"
            placeholder="Enter Aadhar Number"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}

            className="form-control"
            placeholder="Enter password"
          />
        </div>
       
        <div className="d-grid">
          <button disabled={isLoading} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-left">
        <Link to="/signup">Don't have account ?</Link>
        </p>
        <p className="forgot-password text-right">
        <Link to="/forgotPassword">Forgot Password ?</Link>
        </p>
      
        <div>
          {isLoading && (
            <div>
              {" "}
              <i class="fa fa-circle-o-notch fa-spin"></i> <span>Loading </span>
            </div>
          )}
        </div>
        {error && <div className="error">{error}</div>}
      </form>
      <button onClick={handleResetLocation}>Get Location</button>
  <label>Latitute:</label><input type='text' value={location.lat} disabled/>
  <label>Longitute:</label><input type='text' value={location.lng} disabled/>
  <label>Zoom:</label><input type='text' value={zoom} disabled/>
  
  <MapPicker defaultLocation={location}
    zoom={zoom}
    mapTypeId="roadmap"
    style={{height:'20rem'}}
    onChangeLocation={handleChangeLocation} 
    onChangeZoom={handleChangeZoom}
    apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
    </Wrapper>

  

  );
};

export default Login;
