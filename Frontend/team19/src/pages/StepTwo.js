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
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Area:</Form.Label>
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
              <Form.Label>Street:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="street"
                placeholder="Street"
                onChange={handleFormData}
                value={values.street}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State:</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="state"
                placeholder="state"
                onChange={handleFormData}
                value={values.state}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City:</Form.Label>
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
              <Form.Label>PIN:</Form.Label>
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