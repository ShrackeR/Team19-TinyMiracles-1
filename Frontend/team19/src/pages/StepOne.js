import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
// import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values,submitF }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

   
   
     
   
      nextStep();
    
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData} >
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>Name:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="name"
                value={values.name}
                type="text"
                placeholder="First Name"
                onChange={handleFormData}
              />
            
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>Aadhar</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="aadhar"
                value={values.aadhar}
                type="text"
                placeholder="Enter Aadhar"
                onChange={handleFormData }
              />
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>Mobile:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="mobile"
                value={values.mobile}
                type="text"
                placeholder="Enter Mobile Number"
                onChange={handleFormData }
              />
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="email"
                value={values.email}
                type="text"
                placeholder="Enter Email"
                onChange={handleFormData }
              />
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>DOB:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="dob"
                value={values.dob}
                type="date"
                placeholder="Enter Date of Birth"
                onChange={handleFormData }
              />
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <span style={{ color: 'red' }}>*</span>Password:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="password"
                value={values.password}
                type="password"
                placeholder="Enter Password"
                onChange={handleFormData }
              />
              
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;