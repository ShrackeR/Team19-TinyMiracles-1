

import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import Wrapper from '../components/Wrrapper';
import classes from'./signup.module.css'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./Final";
// import Personal from './Personal';
import Personal from './Personal';
import { Container, Row, Col } from "react-bootstrap";

const Signup = () => {
  const { signup, error, isLoading, success, setSuccess } = useSignup();

  const [activeTab, setActiveTab] = useState(1);
  // const{signup,error,isLoading,success,setSuccess}=useSignup();
  const [step, setstep] = useState(1);

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
    status: 'ACTIVE',
  });

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

  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };
  
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

  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

// const handleRemoveDisease = (index) => {
//   setFormData((prevFormData) => {
//     const updatedDiseases = [...prevFormData.diseases];
//     updatedDiseases.splice(index, 1);

//     return {
//       ...prevFormData,
//       diseases: updatedDiseases,
//     };
//   });
// };

const handleAddSkill = () => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    skillset: [...prevFormData.skillset, ''],
  }));
};

const handleRemoveSkill = (index) => {
  setFormData((prevFormData) => {
    const updatedSkillset = [...prevFormData.skillset];
    updatedSkillset.splice(index, 1);

    return {
      ...prevFormData,
      skillset: updatedSkillset,
    };
  });
};

const handleAddInterest = () => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    interests: [...prevFormData.interests, ''],
  }));
};

const handleRemoveInterest = (index) => {
  setFormData((prevFormData) => {
    const updatedInterests = [...prevFormData.interests];
    updatedInterests.splice(index, 1);

    return {
      ...prevFormData,
      interests: updatedInterests,
    };
  });
};

const handleAddEvent = () => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    eventsAttended: [...prevFormData.eventsAttended, ''],
  }));
};

const handleRemoveEvent = (index) => {
  setFormData((prevFormData) => {
    const updatedEventsAttended = [...prevFormData.eventsAttended];
    updatedEventsAttended.splice(index, 1);

    return {
      ...prevFormData,
      eventsAttended: updatedEventsAttended,
    };
  });
};

// const handleSubmit = (e) => {
//   e.preventDefault();
//   signup(formData);
// };
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
  console.log(formData);
  await signup(formData);
 
};

// const renderForm = () => {
//   switch (activeTab) {
//     case 1:
//       return (
//         <div>
//           <h2>Personal Information</h2>
//           {/* Form fields for personal information */}
//           {/* ... */}
//           <div className="mb-3">
//       <span style={{ color: 'red' }}>*</span> Name:
  
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div style={{marginTop:-8+'rem'}}>
         
          <Container>
            <Row>
            
              <Col  md={{ span: 6, offset: 3 }} className={classes.App1}>
                <StepOne nextStep={nextStep} handleFormData={handleChange} values={formData} submitF={handleSubmit}/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div style={{marginTop:-8+'rem'}}>
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} >
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleChange} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div style={{marginTop:-8+'rem'}}>
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} >
              <Final nextStep={nextStep} prevStep={prevStep} handleFormData={handleChange} values={formData}  />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    case 4:
      return (
        <div style={{marginTop:-8+'rem'}}>
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} >
              <Personal nextStep={nextStep} prevStep={prevStep} handleFormData={handleChange} values={formData} handleAddDisease={handleAddDisease}
              handleDiseasesChange={handleDiseasesChange}
              handleRemoveDisease={handleRemoveDisease}
              submitF={handleSubmit}
              />
              </Col>
            </Row>
          </Container>
        </div>
      )
    default:
      return (
        <div >
        </div>
      );
  }
}
// export default Signup;

  {/* // return ( */}
    {/* // <Wrapper> */}
    {/* <form onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <div className="mb-3">
        Name:<span class="required-field"></span>
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
      <span style={{ color: 'red' }}>*</span> Aadhar:
        Aadhar:<span class="required-field"></span>
        <input
          type="text"
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter aadhar no."
        />
      </div>
      <div className="mb-3">
        Is PAN Card Available:
        <input
          type="checkbox"
          name="isPanCard"
          checked={formData.isPanCard}
          onChange={handleChange}
          className="form-check"
        />
      </div>
      <div className="mb-3">
        PAN:
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
        Is Eshram Available:
        <input
          type="checkbox"
          name="isEshram"
          checked={formData.isEshram}
          onChange={handleChange}
          className="form-check"
        />
      </div>
      
      <div className="mb-3">
        Eshram:
        <input
          type="text"
          name="eshram"
          value={formData.eshram}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Eshram"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Mobile:
        Mobile:<span class="required-field"></span>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Mobile no."
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Date of Birth:
        Date of Birth:<span class="required-field"></span>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter DOB"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
      <span style={{ color: 'red' }}>*</span> Email:
        Email:<span class="required-field"></span>
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
        <span style={{ color: 'red' }}>*</span> Area:
        <h6>Address<span class="required-field"></span></h6>
        Area:
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Street:
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> State:
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
      <span style={{ color: 'red' }}>*</span> PIN:
        <input
          type="text"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Password:
        Password:<span class="required-field"></span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Password"
        />
      </div>


      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Education Level:
        <input
          type="text"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Education"
        />
      </div>

        </div>
      );
    case 2:
      return (
        <div>
          <h2>Analaytical Information</h2>
          {/* Form fields for address information */}
          {/* ... */}
          
    //   <div className="mb-3">
    //     Family & Friends:
    //     <input
    //       type="text"
    //       name="familyFriends"
    //       value={formData.familyFriends}
    //       onChange={handleChange}
    //       className="form-control"
    //     />
    //   </div>
    //   <div>
    //     Is Bank Account Available:
    //     <input
    //       type="checkbox"
    //       name="isBankAccount"
    //       checked={formData.isBankAccount}
    //       onChange={handleChange}
    //       className="form-check"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Bank Name:
    //     <input
    //       type="text"
    //       name="bankName"
    //       value={formData.bankName}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Enter Bank Name"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Account Number:
    //     <input
    //       type="text"
    //       name="accountNumber"
    //       value={formData.accountNumber}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Enter AAccount Number"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     IFSC:
    //     <input
    //       type="text"
    //       name="ifsc"
    //       value={formData.ifsc}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Enter IFSC Code"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Medical Test Frequency:
    //     <input
    //       type="text"
    //       name="medicalTestFrequency"
    //       value={formData.medicalTestFrequency}
    //       onChange={handleChange}
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Last Checkup:
    //     <input
    //       type="date"
    //       name="lastCheckup"
    //       value={formData.lastCheckup}
    //       onChange={handleChange}
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Diseases:
    //     {formData.diseases.map((disease, index) => (
    //       <div key={index}>
    //         <input
    //           type="text"
    //           name="disease"
    //           value={disease}
    //           onChange={(e) => handleDiseasesChange(e, index)}
    //         />
    //         <div>
    //           <button type="button" className="btn btn-primary btn-sm" onClick={() => handleRemoveDisease(index)}>
    //             Remove
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //     <div>
    //       <button type="button" className="btn btn-primary btn-sm" onClick={handleAddDisease}>
    //         Add Disease
    //       </button>
    //     </div>
    //   </div>

    //     </div>
        
//       );
//     case 3:
//       return (
//         <div>
//           <h2>Additional Information</h2>
//           {/* Form fields for additional information */}
//           {/* ... */}
//           <div className="mb-3">
//         Number of Children:
//         <input
//           type="number"
//           name="numberOfChildren"
//           value={formData.numberOfChildren}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Enter no. of children"
//         />
//       </div>
//       <div className="mb-3">
//         Need Child Education Assistance:
//         <input
//           type="checkbox"
//           name="needChildEducationAssistance"
//           checked={formData.needChildEducationAssistance}
//           onChange={handleChange}
//           className="form-check"
//         />
//       </div>
//       <div className="mb-3">
//         Need Employment Support:
//         <input
//           type="checkbox"
//           name="needEmploymentSupport"
//           checked={formData.needEmploymentSupport}
//           onChange={handleChange}
//           className="form-check"
//         />
//       </div>
      
//       <div className="mb-3">
//         Skillset:<span class="required-field"></span>
//         <input
//           type="text"
//           name="skillset"
//           value={formData.skillset}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Enter Skills"
//         />
//       </div>
//       <div className="mb-3">
//         Interests:
//         <input
//           type="text"
//           name="interests"
//           value={formData.interests}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Enter Interests"
//         />
//       </div>
//       <div className="mb-3">
//         Events Attended:
//         <input
//           type="text"
//           name="eventsAttended"
//           value={formData.eventsAttended}
//           onChange={handleChange}
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//       <span style={{ color: 'red' }}>*</span> Community:
//         <input
//           type="text"
//           name="community"
//           value={formData.community}
//           onChange={handleChange}
//           className="form-control"
//           placeholder="Enter Community"
//         />
//       </div>
      

//         </div>
//       );
//     default:
//       return null;
//   }
// };

// return (
//   <Wrapper>
//       <form onSubmit={handleSubmit} style={{margin:"50px"}}>
//         {/* Tab navigation */}
//         <div className="btn-group">
//           <div style={{cursor: "pointer"}}
//             variant={activeTab === 1 ? 'primary'  : 'secondary'} 
//             onClick={() => handleTabClick(1)}
//           >
//             Personal Information
//           </div>
//           <div style={{cursor: "pointer"}}
//             variant={activeTab === 2 ? 'primary' : 'secondary'}
//             onClick={() => handleTabClick(2)}
//           >
//             Analytical Information
//           </div>
//           <div style={{cursor: "pointer"}}
//             variant={activeTab === 3 ? 'primary' : 'secondary'}
//             onClick={() => handleTabClick(3)}
//           >
//             Additional Information
//           </div>
//         </div>
//     //   );
//     // case 3:
//     //   return (
//     //     <div>
//     //       <h2>Additional Information</h2>
//     //       {/* Form fields for additional information */}
//     //       {/* ... */}
//     //       <div className="mb-3">
//     //     Number of Children:
//     //     <input
    //       type="number"
    //       name="numberOfChildren"
    //       value={formData.numberOfChildren}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Enter no. of children"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Need Child Education Assistance:
    //     <input
    //       type="checkbox"
    //       name="needChildEducationAssistance"
    //       checked={formData.needChildEducationAssistance}
    //       onChange={handleChange}
    //       className="form-check"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Need Employment Support:
    //     <input
    //       type="checkbox"
    //       name="needEmploymentSupport"
    //       checked={formData.needEmploymentSupport}
    //       onChange={handleChange}
    //       className="form-check"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Education Level:<span class="required-field"></span>
    //     <input
    //       type="text"
    //       name="educationLevel"
    //       value={formData.educationLevel}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Enter Education"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Skillset:<span class="required-field"></span>
    //     <input
    //       type="text"
    //       name="skillset"
    //       value={formData.skillset}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Enter Skills"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Interests:
    //     <input
    //       type="text"
    //       name="interests"
    //       value={formData.interests}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Enter Interests"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     Events Attended:
    //     <input
    //       type="text"
    //       name="eventsAttended"
    //       value={formData.eventsAttended}
    //       onChange={handleChange}
    //       className="form-control"
    //     />
    //   </div>
    //   <div className="mb-3">
      //   Community:<span class="required-field"></span>
      //   <input
      //     type="text"
      //     name="community"
      //     value={formData.community}
      //     onChange={handleChange}
      //     className="form-control"
      //     placeholder="Enter Community"
      //   />
      // </div>
    //   <div className="mb-3">
    //     Gender:<span class="required-field"></span>
    //     <select
    //       name="gender"
    //       value={formData.gender}
    //       onChange={handleChange}
    //       className="form-control"
    //     >
    //       <option value="">Select Gender</option>
    //       <option value="male">Male</option>
    //       <option value="female">Female</option>
    //       <option value="other">Other</option>
    //     </select>
    //   </div>
    //   <div className="d-grid">
    //     <button type="submit" className="btn btn-primary">Submit</button>
    //   </div>
    // </form> */}
    // </Wrapper>
  // );
// };

// return (
//   <Wrapper>
//       <form onSubmit={handleSubmit}>
//         {/* Tab navigation */}
//         <div className="btn-group">
//           <div style={{cursor: "pointer"}}
//             variant={activeTab === 1 ? 'primary'  : 'secondary'} 
//             onClick={() => handleTabClick(1)}
//           >
//             Personal Information
//           </div>
//           <div style={{cursor: "pointer"}}
//             variant={activeTab === 2 ? 'primary' : 'secondary'}
//             onClick={() => handleTabClick(2)}
//           >
//             Analytical Information
//           </div>
//           <div style={{cursor: "pointer"}}
//             variant={activeTab === 3 ? 'primary' : 'secondary'}
//             onClick={() => handleTabClick(3)}
//           >
//             Additional Information
//           </div>
//         </div>

//         {/* Render form based on active tab */}
//         {renderForm()}

//         {/* Submit button */}
//         <button type="submit" variant="primary">Submit</button>
//       </form>
//     </Wrapper>);
// };
export default Signup;
