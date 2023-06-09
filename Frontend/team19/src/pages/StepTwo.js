import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
// import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    
    
      nextStep();
    
  };
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
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>Area:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="area"
                placeholder="area"
                onChange={handleFormData}
                value={values.area}
              />
              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>Street:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="street"
                placeholder="Street"
                onChange={handleFormData}
                value={values.street}
              />
            </Form.Group>
            
              <Form.Label> <span style={{ color: 'red' }}>*</span>State:</Form.Label>
              <select
                  name="state"
                  value={values.state}
                  onChange={handleFormData}
                  className="form-control"
                >
                  <option value="">Select State</option>
                  {statesOfIndia.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
            
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>City:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="city"
                placeholder="city"
                onChange={handleFormData}
                value={values.city}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>PIN:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="pin"
                placeholder="pin"
                onChange={handleFormData}
                value={values.pin}
              />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                  Continue
                </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;