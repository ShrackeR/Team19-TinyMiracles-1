

import React, { useState } from 'react';
import { useSignup3 } from '../hooks/useSignup3';
import Wrapper from '../components/Wrrapper';
import classes from'./signup.module.css'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./Final";
import { FormattedMessage, IntlProvider } from 'react-intl';

import MapPicker from 'react-google-map-picker'

// import Personal from './Personal';
import Personal from './Personal';
import { Container, Row, Col } from "react-bootstrap";
// import classes from './signup.moudle.css';

const Signup3 = () => {
  const { signup, error, isLoading, success, setSuccess } = useSignup3();

  const [activeTab, setActiveTab] = useState(1);

  const [formData, setFormData] = useState({
        name:'',
        isPanCard:false,
        pan:'',
        mobile:'',
        email:'',
        area:'',
        street:'',
        city:'',
        state:'',
        pin:'',
        location:{"type": "Point",
        "coordinates": []},
        password:'',
        isBankAccount:false,
        bankName:'',
        accountNumber:'',
        ifsc:''
  });
  const [showCustomSkillset, setShowCustomSkillset] = useState(false);

  const statesOfIndia = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
  const messages = {
    // Personal Information
    hi:{
    name: 'नाम',
    isPanCard: 'पैन कार्ड',
    pan: 'पैन कार्ड नंबर',
    mobile: 'मोबाइल नंबर',
    email: 'ईमेल',
    area: 'क्षेत्र',
    street: 'गली',
    city: 'शहर',
    state: 'राज्य',
    pin: 'पिनकोड',
    password: 'पासवर्ड',
    // Analytical Information
    isBankAccount: 'बैंक खाता',
    bankName: 'बैंक का नाम',
    accountNumber: 'खाता संख्या',
    ifsc: 'IFSC कोड',
    // Final Information
    status: 'स्थिति',
    submit: 'प्रस्तुत करें',
    back: 'पीछे जाएं',
},

    en:{name: 'Name',
    isPanCard: 'Pan Card',
    pan: 'Pan Card Number',
    mobile: 'Mobile Number',
    dob: 'Date of Birth',
    email: 'Email',
    area: 'Area',
    street: 'Street',
    city: 'City',
    state: 'State',
    pin: 'Pincode',
    password: 'Password',
    // Analytical Information
    isBankAccount: 'Bank Account',
    bankName: 'Bank Name',
    accountNumber: 'Account Number',
    ifsc: 'IFSC Code',
    // Final Information
    status: 'Status',
    submit: 'Submit',
    back: 'Back',}
  };

  const [locale, setLocale] = useState('en');


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

const handleLocaleChange = (e) => {
  setLocale(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();
  signup(formData);
};
console.log(formData);
const DefaultLocation = { lat: 70, lng: 20 };
  const DefaultZoom = 10;
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  var latt, longg;
  function handleResetLocation(e) {
    e.preventDefault(); // Prevent the default form submission
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
  
      // Update the location in formData
      setFormData((prevData) => ({
        ...prevData,
        location: {
          type: "Point",
          coordinates: [position.coords.longitude, position.coords.latitude],
        },
      }));
  
      // Optionally, you can update the location in the map
      handleChangeLocation(position.coords.latitude, position.coords.longitude);
    });
  }
  

const renderForm = () => {
  switch (activeTab) {
    case 1:
      return (
        <IntlProvider locale={locale} messages={messages[locale]}>

        <div className="mb-3" style={{margin:"50px"}}>
        <div className="mb-3">
          <label htmlFor="locale">Select Language:</label>
          <select id="locale" value={locale} onChange={handleLocaleChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
          <h2>Personal Information</h2>
          {/* Form fields for personal information */}
          {/* ... */}
          <div className="mb-3">
      <span style={{ color: 'red' }}>*</span>           <FormattedMessage id="name" />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Your Name"
        />
      </div>
      
      <div className="mb-3">
      <FormattedMessage id="isPanCard" />
        <input
          type="checkbox"
          name="isPanCard"
          checked={formData.isPanCard}
          onChange={handleChange}
          className="form-check"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="pan" />
        <input
          type="text"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter PAN number"
        />
      </div>
      
      
      
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span><FormattedMessage id="mobile" />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Mobile no."
        />
      </div>
      
      
      <div>
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="email" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Email ID"
        />
      </div>
      <div className="mb-3">
        <h6>Address</h6>
        <span style={{ color: 'red' }}>*</span><FormattedMessage id="area" />
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="street" />
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="city" />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="state" />
      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
        className="form-control"
      >
        <option value="">Select State</option>
        {statesOfIndia.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="pin" />
        <input
          type="text"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span><FormattedMessage id="password" />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Password"
        />
      </div>


     

        </div>
        </IntlProvider>

      );
    case 2:
      return (
        <IntlProvider locale={locale} messages={messages[locale]}>
        <div style={{margin:"50px"}}>
        <div>
          <label htmlFor="locale">Select Language:</label>
          <select id="locale" value={locale} onChange={handleLocaleChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
          <h2>Analaytical Information</h2>
          {/* Form fields for address information */}
          {/* ... */}
          
      
      <div>
      <FormattedMessage id="isBankAccount" />
        <input
          type="checkbox"
          name="isBankAccount"
          checked={formData.isBankAccount}
          onChange={handleChange}
          className="form-check"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="bankName" />
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Bank Name"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="accountNumber" />
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter AAccount Number"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="ifsc" />
        <input
          type="text"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter IFSC Code"
        />
      </div>
     
      
     

        </div>
        </IntlProvider>
        
      );
      case 3:
        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                <div>
                
                <div  className="mb-3">
                <div className="d-grid">
                  <button  className="btn btn-primary" onClick={handleResetLocation}>Get Location</button></div>
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
</div>

    
                </div>
                </IntlProvider>
        );
    


     

      
    default:
      return null;
  }
};

return (

  <Wrapper>
      <form onSubmit={handleSubmit} >
        {/* Tab navigation */}
        <div className="btn-group" style={{fontWeight:'bold',fontSize:'3px', width:'100%',justifyContent:'space-around'}}>
          <div style={{cursor: "pointer"}}
            variant={activeTab === 1 ? 'primary'  : 'secondary'} 
            onClick={() => handleTabClick(1)}
          >
           | Community Information |  
          </div>
          <div style={{cursor: "pointer"}}
            variant={activeTab === 2 ? 'primary' : 'secondary'}
            onClick={() => handleTabClick(2)}
          >
            | Analytical Information  |  
          </div>
          <div
       style={{cursor: "pointer"}}
        className={`tab ${activeTab === 3 ? 'primary' : 'secondary'}`}
        onClick={() => handleTabClick(3)}
      >
            | Select Location |
          </div>
        </div>

         {/* Render form based on active tab */}
         {renderForm()}

         {/* Submit button */}
         <div className="d-grid">
         <button type="submit"  className="btn btn-primary">Submit</button>
         </div>
       </form>
     </Wrapper>);
};
export default Signup3;


