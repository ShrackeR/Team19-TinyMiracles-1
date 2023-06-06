import React from "react";
import { Form, Card, Button } from "react-bootstrap";

const Final = ({ nextStep, handleFormData, values,prevStep,submitF } ) => {

    //destructuring the object from values
  const { firstName, lastName, age, email } = values;
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    
    
      nextStep();
    
  };
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3">
              <Form.Label>Is Pan Card:</Form.Label>
              <input
                
                type="checkbox"
                name="isPanCard"
                checked={values.isPanCard}
                onChange={handleFormData}
                value={values.isPanCard}
                
              />
          </Form.Group>
          {values.isPanCard && <Form.Group className="mb-3">
              <Form.Label>PAN</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="pan"
                value={values.pan}
                type="text"
                placeholder="Enter PAN number"
                onChange={handleFormData }
              />
          </Form.Group>}
          <Form.Group className="mb-3">
              <Form.Label>Is Eshram Card:</Form.Label>
              <input
                
                type="checkbox"
                name="isEshram"
                checked={values.isEshram}
                onChange={handleFormData}
                value={values.isEshram}
                
              />
          </Form.Group>
          {values.isEshram &&  <Form.Group className="mb-3">
              <Form.Label>Eshram No.:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="eshram"
                defaultValue={values.eshram}
                type="text"
                placeholder="Enter Eshram No."
                onChange={handleFormData }
              />
          </Form.Group>}
          <Form.Group className="mb-3">
              <Form.Label>Family and Friends:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="familyFriends"
                defaultValue={values.familyFriends}
                type="text"
                placeholder="Enter Eshram No."
                onChange={handleFormData }
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Is Back Accout Available:</Form.Label>
              <input
                
                type="checkbox"
                name="isBankAccount"
                checked={values.isBackAccount}
                onChange={handleFormData}
                value={values.isBankAccount}
                
              />
          </Form.Group>
          {values.isBankAccount &&  <><Form.Group className="mb-3">
              <Form.Label>Back Name:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="bankName"
                defaultValue={values.bankName}
                type="text"
                placeholder="Enter Bank Name."
                onChange={handleFormData }
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Account No.:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="accountNumber"
                defaultValue={values.accountNumber}
                type="text"
                placeholder="Enter Account Number."
                onChange={handleFormData }
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>IFSC:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="ifsc"
                defaultValue={values.ifsc}
                type="text"
                placeholder="Enter Bank IFSC code."
                onChange={handleFormData }
              />
          </Form.Group>
          
          </>
          }
          

          
         
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

export default Final;