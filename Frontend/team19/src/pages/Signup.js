import React, { useState } from 'react';
import  {useSignup} from "../hooks/useSignup"

const Signup = () => {
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
      <div>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Aadhar:
        <input
          type="text"
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Is PAN Card Available:
        <input
          type="checkbox"
          name="isPanCard"
          checked={formData.isPanCard}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        PAN:
        <input
          type="text"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Is Eshram Available:
        <input
          type="checkbox"
          name="isEshram"
          checked={formData.isEshram}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Eshram:
        <input
          type="text"
          name="eshram"
          value={formData.eshram}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Mobile:
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Area:
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Street:
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        PIN:
        <input
          type="text"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Family & Friends:
        <input
          type="text"
          name="familyFriends"
          value={formData.familyFriends}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Is Bank Account Available:
        <input
          type="checkbox"
          name="isBankAccount"
          checked={formData.isBankAccount}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <br />
      <div>
        Bank Name:
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Account Number:
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        IFSC:
        <input
          type="text"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Medical Test Frequency:
        <input
          type="text"
          name="medicalTestFrequency"
          value={formData.medicalTestFrequency}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Last Checkup:
        <input
          type="date"
          name="lastCheckup"
          value={formData.lastCheckup}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
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
      </div>
      <br />
      <div>
        Number of Children:
        <input
          type="number"
          name="numberOfChildren"
          value={formData.numberOfChildren}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Need Child Education Assistance:
        <input
          type="checkbox"
          name="needChildEducationAssistance"
          checked={formData.needChildEducationAssistance}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Need Employment Support:
        <input
          type="checkbox"
          name="needEmploymentSupport"
          checked={formData.needEmploymentSupport}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Education Level:
        <input
          type="text"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Skillset:
        <input
          type="text"
          name="skillset"
          value={formData.skillset}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Interests:
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Events Attended:
        <input
          type="text"
          name="eventsAttended"
          value={formData.eventsAttended}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        Community:
        <input
          type="text"
          name="community"
          value={formData.community}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
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
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
