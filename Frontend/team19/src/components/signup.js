// import React, { Component } from 'react'
// export default class SignUp extends Component {
//   render() {
//     return (
//       <form>
//         <h3>Sign Up</h3>
//         <div className="mb-3">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Aadhar no.</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Aadhar number"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//     )
//   }
// }




import React, { useState } from 'react';
import  {useSignup} from "../hooks/useSignup"

const App = () => {
  const{signup,error,isLoading,success,setSuccess}=useSignup();

  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    isPanCard: false,
    pan: '',
    isEshram: false,
    eshram: '',
    mobile: '',
    dob: '',
    email: '',
    area: '',
    street: '',
    city: '',
    state: '',
    pin: '',
    password: '',
    familyFriends: [],
    isBankAccount: false,
    bankName: '',
    accountNumber: '',
    ifsc: '',
    medicalTestFrequency: '',
    lastCheckup: '',
    diseases: [],
    numberOfChildren: 0,
    needChildEducationAssistance: false,
    needEmploymentSupport: false,
    educationLevel: '',
    skillset: [],
    interests: [],
    eventsAttended: [],
    community: '',
    gender: '',
  });
  
  const handleDiseasesChange = (e, index) => {
    const { value } = e.target;

    setFormData((prevFormData) => {
      const updatedDiseases = [...prevFormData.diseases];
      updatedDiseases[index] = value;

      return {
        ...prevFormData,
        diseases: updatedDiseases,
      };
    });
  };

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
  const handleAddDisease = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      diseases: [...prevFormData.diseases, ''],
    }));
  };

  const handleRemoveDisease = (index) => {
    setFormData((prevFormData) => {
      const updatedDiseases = [...prevFormData.diseases];
      updatedDiseases.splice(index, 1);

      return {
        ...prevFormData,
        diseases: updatedDiseases,
      };
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Perform form submission or validation
    // console.log(formData);
    await signup(formData);
    // await signup( name,
    //   aadhar,
    //   isPanCard,
    //   pan,
    //   isEshram,
    //   eshram,
    //   mobile,
    //   dob,
    //   email,
    //   area,
    //   street,
    //   city,
    //   state,
    //   pin,
    //   password,
    //   familyFriends,
    //   isBankAccount,
    //   bankName,
    //   accountNumber,
    //   ifsc,
    //   medicalTestFrequency,
    //   lastCheckup,
    //   diseases,
    //   numberOfChildren,
    //   needChildEducationAssistance,
    //   needEmploymentSupport,
    //   educationLevel,
    //   skillset,
    //   interests,
    //   eventsAttended,
    //   community,
    //   gender)
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Aadhar:
        <input
          type="text"
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Is PAN Card Available:
        <input
          type="checkbox"
          name="isPanCard"
          checked={formData.isPanCard}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        PAN:
        <input
          type="text"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Is Eshram Available:
        <input
          type="checkbox"
          name="isEshram"
          checked={formData.isEshram}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Eshram:
        <input
          type="text"
          name="eshram"
          value={formData.eshram}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mobile:
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Area:
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        PIN:
        <input
          type="text"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Family & Friends:
        <input
          type="text"
          name="familyFriends"
          value={formData.familyFriends}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Is Bank Account Available:
        <input
          type="checkbox"
          name="isBankAccount"
          checked={formData.isBankAccount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Bank Name:
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Account Number:
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        IFSC:
        <input
          type="text"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Medical Test Frequency:
        <input
          type="text"
          name="medicalTestFrequency"
          value={formData.medicalTestFrequency}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Checkup:
        <input
          type="date"
          name="lastCheckup"
          value={formData.lastCheckup}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Diseases:
        {formData.diseases.map((disease, index) => (
          <div key={index}>
            <input
              type="text"
              name="disease"
              value={disease}
              onChange={(e) => handleDiseasesChange(e, index)}
            />
            <button type="button" onClick={() => handleRemoveDisease(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddDisease}>
          Add Disease
        </button>
      </label>
      <br />
      <label>
        Number of Children:
        <input
          type="number"
          name="numberOfChildren"
          value={formData.numberOfChildren}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Need Child Education Assistance:
        <input
          type="checkbox"
          name="needChildEducationAssistance"
          checked={formData.needChildEducationAssistance}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Need Employment Support:
        <input
          type="checkbox"
          name="needEmploymentSupport"
          checked={formData.needEmploymentSupport}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Education Level:
        <input
          type="text"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Skillset:
        <input
          type="text"
          name="skillset"
          value={formData.skillset}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Interests:
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Events Attended:
        <input
          type="text"
          name="eventsAttended"
          value={formData.eventsAttended}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Community:
        <input
          type="text"
          name="community"
          value={formData.community}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;