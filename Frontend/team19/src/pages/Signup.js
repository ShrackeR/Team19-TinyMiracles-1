
import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import Wrapper from '../components/Wrrapper';
import classes from'./signup.module.css'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./Final";
import { FormattedMessage, IntlProvider } from 'react-intl';

// import Personal from './Personal';
import Personal from './Personal';
import { Container, Row, Col } from "react-bootstrap";
// import classes from './signup.moudle.css';

const Signup = () => {
  const { signup, error, isLoading, success, setSuccess } = useSignup();

  const [activeTab, setActiveTab] = useState(1);

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
    aadhar: 'आधार नंबर',
    isPanCard: 'पैन कार्ड',
    pan: 'पैन कार्ड नंबर',
    isEshram: 'ई-श्रम कार्ड',
    eshram: 'ई-श्रम कार्ड नंबर',
    mobile: 'मोबाइल नंबर',
    dob: 'जन्मतिथि',
    email: 'ईमेल',
    area: 'क्षेत्र',
    street: 'गली',
    city: 'शहर',
    state: 'राज्य',
    pin: 'पिनकोड',
    password: 'पासवर्ड',
    // Analytical Information
    familyFriends: 'परिवार/मित्र',
    isBankAccount: 'बैंक खाता',
    bankName: 'बैंक का नाम',
    accountNumber: 'खाता संख्या',
    ifsc: 'IFSC कोड',
    medicalTestFrequency: 'चिकित्सा परीक्षण आवृत्ति',
    lastCheckup: 'अंतिम चिकित्सा परीक्षण',
    diseases: 'रोग',
    numberOfChildren: 'बच्चों की संख्या',
    needChildEducationAssistance: 'बच्चों की शिक्षा सहायता आवश्यक',
    needEmploymentSupport: 'रोजगार सहायता आवश्यक',
    educationLevel: 'शिक्षा स्तर',
    skillset: 'कौशल',
    interests: 'रुचियाँ',
    eventsAttended: 'आयोजन में भाग लिया',
    community: 'समुदाय',
    gender: 'लिंग',
    // Final Information
    status: 'स्थिति',
    submit: 'प्रस्तुत करें',
    back: 'पीछे जाएं',},

    en:{name: 'Name',
    aadhar: 'Aadhar Number',
    isPanCard: 'Pan Card',
    pan: 'Pan Card Number',
    isEshram: 'E-Shram Card',
    eshram: 'E-Shram Card Number',
    mobile: 'Mobile Number',
    dob: 'Date of Birth',
    email: 'Email',
    area: 'Area',
    street: 'Street',
    city: 'City',
    state: 'State',
    pin: 'Pincode',
    educationLevel: 'Education Level',
    password: 'Password',
    // Analytical Information
    familyFriends: 'Family/Friends',
    isBankAccount: 'Bank Account',
    bankName: 'Bank Name',
    accountNumber: 'Account Number',
    ifsc: 'IFSC Code',
    medicalTestFrequency: 'Medical Test Frequency',
    lastCheckup: 'Last Checkup',
    diseases: 'Diseases',
    numberOfChildren: 'Number of Children',
    needChildEducationAssistance: 'Need Child Education Assistance',
    needEmploymentSupport: 'Need Employment Support',
    
    skillset: 'Skillset',
    interests: 'Interests',
    eventsAttended: 'Events Attended',
    community: 'Community',
    gender: 'Gender',
    // Final Information
    status: 'Status',
    submit: 'Submit',
    back: 'Back',}
  };

  const [locale, setLocale] = useState('en');

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
// const handleSkillsetsChange = (e, index) => {
//   const { value } = e.target;
  
//   setFormData((prevFormData) => {
//     const updatedSkillsets = [...prevFormData.skillset];
//     updatedSkillsets[index] = value;

//     return {
//       ...prevFormData,
//       skillset: updatedSkillsets,
//     };
//   });
// };


// const handleAddSkillset = () => {
//   setFormData((prevFormData) => ({
//     ...prevFormData,
//     skillset: [...prevFormData.skillset, ''],
//   }));
// };



// const handleRemoveSkillset = (index) => {
// setFormData((prevFormData) => {
//   const updatedSkillsets = [...prevFormData.skillset];
//   updatedSkillsets.splice(index, 1);

//   return {
//     ...prevFormData,
//     skillset: updatedSkillsets,
//   };
// });
// };
// const [showCustomSkillset, setShowCustomSkillset] = useState(false);


const handleSkillsetsChange = (e, index) => {
  const { value } = e.target;

  if (value === 'other') {
    setShowCustomSkillset(true);
  } else {
    setShowCustomSkillset(false);
    setFormData((prevFormData) => {
      const updatedSkillsets = [...prevFormData.skillset];
      updatedSkillsets[index] = value;
      return {
        ...prevFormData,
        skillset: updatedSkillsets,
      };
    });
  }
};

const handleCustomSkillsetChange = (e) => {
  const { value } = e.target;
  setFormData((prevFormData) => {
    const updatedSkillsets = [...prevFormData.skillset];
    updatedSkillsets[formData.skillset.length - 1] = value;
    return {
      ...prevFormData,
      skillset: updatedSkillsets,
    };
  });
};

const handleAddSkillset = () => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    skillset: [...prevFormData.skillset, ''],
  }));
  setShowCustomSkillset(false);
};

const handleRemoveSkillset = (index) => {
  setFormData((prevFormData) => {
    const updatedSkillsets = [...prevFormData.skillset];
    updatedSkillsets.splice(index, 1);
    return {
      ...prevFormData,
      skillset: updatedSkillsets,
    };
  });
};

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
const handleLocaleChange = (e) => {
  setLocale(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();
  signup(formData);
};
console.log(formData);
const renderForm = () => {
  switch (activeTab) {
    case 1:
      return (
        <IntlProvider locale={locale} messages={messages[locale]}>

        <div>
        <div>
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
      <span style={{ color: 'red' }}>*</span>  <FormattedMessage id="aadhar" />
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
      <FormattedMessage id="isEshram" />
        <input
          type="checkbox"
          name="isEshram"
          checked={formData.isEshram}
          onChange={handleChange}
          className="form-check"
        />
      </div>
      
      <div className="mb-3">
      <FormattedMessage id="eshram" />
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
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="dob" />
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
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="gender" />
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


      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="educationLevel" />
      <select
  name="educationLevel"
  value={formData.educationLevel}
  onChange={handleChange}
  className="form-control"
>
  <option value="">Select Education</option>
  <option value="nil">No Formal Education</option>
  <option value="primary">Primary</option>
  <option value="secondary">Secondary</option>
  <option value="higher">Higher Secondary</option>
  <option value="graduate">Graduate</option>
  <option value="undergraduate">Undergraduate</option>
  <option value="postgraduate">Postgraduate</option>
  <option value="doctorate">Doctorate</option>
</select>
      </div>

        </div>
        </IntlProvider>

      );
    case 2:
      return (
        <IntlProvider locale={locale} messages={messages[locale]}>
        <div>
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
          
      <div className="mb-3">
      <FormattedMessage id="familyFriends" />:
         <input
          type="text"
          name="familyFriends"
          value={formData.familyFriends}
          onChange={handleChange}
          className="form-control"
        />
      </div>
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
      <div className="mb-3">
      <FormattedMessage id="medicalTestFrequency" />
        <input
          type="text"
          name="medicalTestFrequency"
          value={formData.medicalTestFrequency}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="lastCheckup" />
        <input
          type="date"
          name="lastCheckup"
          value={formData.lastCheckup}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="diseases" />
        {formData.diseases.map((disease, index) => (
          <div key={index}>
            <input
              type="text"
              name="disease"
              value={disease}
              onChange={(e) => handleDiseasesChange(e, index)}
            />
            <div>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => handleRemoveDisease(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        <div>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleAddDisease}>
            Add Disease
          </button>
        </div>
      </div>

        </div>
        </IntlProvider>
        
      );
    case 3:
      return (
        

        <div>
          <IntlProvider locale={locale} messages={messages[locale]}>
           <div>
          <label htmlFor="locale">Select Language:</label>
          <select id="locale" value={locale} onChange={handleLocaleChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
          <h2>Additional Information</h2>
          {/* Form fields for additional information */}
          {/* ... */}
          <div className="mb-3">
          <FormattedMessage id="numberOfChildren" />
        <input
          type="number"
          name="numberOfChildren"
          value={formData.numberOfChildren}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter no. of children"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="needChildEducationAssistance" />
        <input
          type="checkbox"
          name="needChildEducationAssistance"
          checked={formData.needChildEducationAssistance}
          onChange={handleChange}
          className="form-check"
        />
      </div>
      <div className="mb-3">
      <FormattedMessage id="needEmploymentSupport" />
        <input
          type="checkbox"
          name="needEmploymentSupport"
          checked={formData.needEmploymentSupport}
          onChange={handleChange}
          className="form-check"
        />
      </div>
      
      <div className="mb-3">
      <FormattedMessage id="skillset" /><span class="required-field"></span>
        {/* {formData.skillset.map((skillset, index) => (
          <div key={index}>
            <input
              type="text"
              name="skillset"
              value={skillset}
              onChange={(e) => handleSkillsetsChange(e, index)}
            />
            <div>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => handleRemoveSkillset(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        <div>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleAddSkillset}>
            Add Skill
          </button>
        </div> */}
        {/* {formData.skillset.map((skillset, index) => (
  <div key={index}>
    <select
      name="skillset"
      value={skillset}
      onChange={(e) => handleSkillsetsChange(e, index)}
      className="form-control"
    >
      <option value="">Select Skill</option>
      <option value="sewing">Sewing</option>
      <option value="watchman">Watchman</option>
      <option value="househelp">Househelp</option>
      <option value="babysitting">Babysitting</option>
      <option value="baking">Baking</option>
      <option value="other">Other</option>
    </select>
    <div>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => handleRemoveSkillset(index)}
      >
        Remove
      </button>
    </div>
  </div>
))}
<div>
  <button
    type="button"
    className="btn btn-primary btn-sm"
    onClick={handleAddSkillset}
  >
    Add Skill
  </button>
</div> */}

{formData.skillset.map((skillset, index) => (
        <div key={index}>
          {showCustomSkillset && index === formData.skillset.length - 1 ? (
            <input
              type="text"
              value={skillset}
              onChange={handleCustomSkillsetChange}
              className="form-control"
              placeholder="Enter custom skill"
            />
          ) : (
            <select
              name="skillset"
              value={skillset}
              onChange={(e) => handleSkillsetsChange(e, index)}
              className="form-control"
            >
              <option value="">Select Skill</option>
              <option value="sewing">Sewing</option>
              <option value="watchman">Watchman</option>
              <option value="househelp">Househelp</option>
              <option value="babysitting">Babysitting</option>
              <option value="baking">Baking</option>
              <option value="other">Other</option>
            </select>
          )}
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => handleRemoveSkillset(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleAddSkillset}
        >
          Add Skill
        </button>
      </div>      
      </div>
      <div className="mb-3">
      <FormattedMessage id="interests" />
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Interests"
        />
      </div>
      {/* <div className="mb-3">
        Events Attended:
        <input
          type="text"
          name="eventsAttended"
          value={formData.eventsAttended}
          onChange={handleChange}
          className="form-control"
        />
      </div> */}
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> <FormattedMessage id="community" />
        <input
          type="text"
          name="community"
          value={formData.community}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter Community"
        />
      </div>
      </IntlProvider>

        </div>
      );
    default:
      return null;
  }
};

return (
  <Wrapper>
      <form onSubmit={handleSubmit} style={{margin:"50px"}}>
        {/* Tab navigation */}
        <div className="btn-group">
          <div style={{cursor: "pointer"}}
            variant={activeTab === 1 ? 'primary'  : 'secondary'} 
            onClick={() => handleTabClick(1)}
          >
            Personal Information
          </div>
          <div style={{cursor: "pointer"}}
            variant={activeTab === 2 ? 'primary' : 'secondary'}
            onClick={() => handleTabClick(2)}
          >
            Analytical Information
          </div>
          <div style={{cursor: "pointer"}}
            variant={activeTab === 3 ? 'primary' : 'secondary'}
            onClick={() => handleTabClick(3)}
          >
            Additional Information
          </div>
        </div>

         {/* Render form based on active tab */}
         {renderForm()}

         {/* Submit button */}
         <button type="submit" variant="primary">Submit</button>
       </form>
     </Wrapper>);
};
export default Signup;


































