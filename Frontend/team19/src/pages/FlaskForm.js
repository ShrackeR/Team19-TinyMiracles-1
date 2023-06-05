import React, { useState } from 'react';

const FlaskForm = () => {
    const [prompt, setPrompt] = React.useState('');
    const [response, setResponse] = React.useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (prompt.trim() !== '') {
        try {
          const response = await fetch('http://127.0.0.1:5000/prompt', {
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
  
    return React.createElement('div', { className: 'container mt-4' },
      React.createElement('h1', null, 'Flask Form Example'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'prompt' }, 'Enter Prompt:'),
          React.createElement('input', {
            type: 'text',
            className: 'form-control',
            id: 'prompt',
            name: 'prompt',
            placeholder: 'Enter your prompt here',
            value: prompt,
            onChange: handlePromptChange
          })
        ),
        React.createElement('button', { type: 'submit', className: 'btn btn-primary' }, 'Submit')
      ),
      response && React.createElement('div', { className: 'mt-4' },
        React.createElement('h2', null, 'Response:'),
        React.createElement('p', null, response)
      )
    );
  };
  
  export default FlaskForm;
  