import React from "react";
import { Form, Card, Button } from "react-bootstrap";

const Personal = ({handleRemoveDisease,handleDiseasesChange,handleAddDisease, nextStep, handleFormData, values,prevStep,submitF } ) => {

    //destructuring the object from values
  const { firstName, lastName, age, email } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <Form onSubmit={submitF}>
          <Form.Group className="mb-3">
              <Form.Label>Medical Frequency:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="medicalTestFrequency"
                value={values.medicalTestFrequency}
                type="text"
                placeholder="Enter Medical data."
                onChange={handleFormData }
              />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Last Checkup:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="lastCheckup"
                values={values.lastCheckup}
                type="date"
                // placeholder="Enter Bank Name."
                onChange={handleFormData }
              />
          </Form.Group>
          <div className="mb-3">
        Diseases:
        {values.diseases.map((disease, index) => (
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
      <Form.Group className="mb-3">
              <Form.Label>Number of Children:</Form.Label>
              <Form.Control
                // style={{ border: error ? "2px solid red" : "" }}
                name="numberOfChildren"
                values={values.numberOfChildren}
                type="number"
                placeholder="Enter Number of Children."
                onChange={handleFormData }
              />
          </Form.Group>
          <div className="mb-3">
        Need Child Education Assistance:
        <input
          type="checkbox"
          name="needChildEducationAssistance"
          checked={values.needChildEducationAssistance}
          onChange={handleFormData}
          
        />
      </div>
      <div className="mb-3">
        Need Employment Support:
        <input
          type="checkbox"
          name="needEmploymentSupport"
          checked={values.needEmploymentSupport}
          onChange={handleFormData}
          
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span>Education Level:
        <input
          type="text"
          name="educationLevel"
          value={values.educationLevel}
          onChange={handleFormData}
          className="form-control"
          placeholder="Enter Education"
        />
      </div>
      <div className="mb-3">
        Skillset:<span class="required-field"></span>
        <input
          type="text"
          name="skillset"
          value={values.skillset}
          onChange={handleFormData}
          className="form-control"
          placeholder="Enter Skills"
        />
      </div>
      <div className="mb-3">
        Interests:
        <input
          type="text"
          name="interests"
          value={values.interests}
          onChange={handleFormData}
          className="form-control"
          placeholder="Enter Interests"
        />
      </div>
      <div className="mb-3">
        Events Attended:
        <input
          type="text"
          name="eventsAttended"
          value={values.eventsAttended}
          onChange={handleFormData}
          className="form-control"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Community:
        <input
          type="text"
          name="community"
          value={values.community}
          onChange={handleFormData}
          className="form-control"
          placeholder="Enter Community"
        />
      </div>
      <div className="mb-3">
      <span style={{ color: 'red' }}>*</span> Gender:
        <select
          name="gender"
          value={values.gender}
          onChange={handleFormData}
          className="form-control"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>


          
          
         
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

export default Personal;