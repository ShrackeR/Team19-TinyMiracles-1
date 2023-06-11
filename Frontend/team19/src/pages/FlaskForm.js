// import React, { useState } from 'react';

// const FlaskForm = () => {
//     const [prompt, setPrompt] = React.useState('');
//     const [response, setResponse] = React.useState('');
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       if (prompt.trim() !== '') {
//         try {
//           const response = await fetch('http://127.0.0.1:5000/prompt', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ prompt })
//           });
  
//           const data = await response.json();
//           setResponse(data.response);
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       }
//     };
  
//     const handlePromptChange = (event) => {
//       setPrompt(event.target.value);
//     };
  
//     return React.createElement('div', { className: 'container mt-4' },
//       React.createElement('h1', null, 'Flask Form Example'),
//       React.createElement('form', { onSubmit: handleSubmit },
//         React.createElement('div', { className: 'form-group' },
//           React.createElement('label', { htmlFor: 'prompt' }, 'Enter Prompt:'),
//           React.createElement('input', {
//             type: 'text',
//             className: 'form-control',
//             id: 'prompt',
//             name: 'prompt',
//             placeholder: 'Enter your prompt here',
//             value: prompt,
//             onChange: handlePromptChange
//           })
//         ),
//         React.createElement('button', { type: 'submit', className: 'btn btn-primary' }, 'Submit')
//       ),
//       response && React.createElement('div', { className: 'mt-4' },
//         React.createElement('h2', null, 'Response:'),
//         React.createElement('p', null, response)
//       )
//     );
//   };
  
//   export default FlaskForm;
import React, { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

const FlaskForm = () => {
  const [prompt, setPrompt] = React.useState('');
  const [response, setResponse] = React.useState('');
  const { user } = useAuthContext();
  console.log("inside flask form");
  console.log(user)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (prompt.trim() !== '') {
      try {
        const response = await fetch('https://miracleachievers.shreeraj.me/chat/prompt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        setResponse(data.response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="container mt-4">
      <h1>Here to help you..</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="prompt">What problem are you facing?</label>
          <input
            type="text"
            className="form-control"
            id="prompt"
            name="prompt"
            placeholder="Enter your querry here"
            style={{ color: 'black' }} // Set the prompt text color to black
            value={prompt}
            onChange={handlePromptChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-4">
          <h2 style={{ color: 'balck' }}>Response:</h2> {/* Set the response text color to white */}
          <p style={{ color: 'black' }}>{response}</p> {/* Set the response text color to white */}
        </div>
      )}
    </div>
  );
};

export default FlaskForm;
