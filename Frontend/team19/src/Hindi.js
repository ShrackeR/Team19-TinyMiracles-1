import React, { useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

const messages = {
  en: {
    formTitle: 'Form',
    nameLabel: 'Name:',
    emailLabel: 'Email:',
    submitButton: 'Submit',
  },
  hi: {
    formTitle: 'फ़ॉर्म',
    nameLabel: 'नाम:',
    emailLabel: 'ईमेल:',
    submitButton: 'प्रस्तुत करें',
  },
};

const Form = () => {
  const [locale, setLocale] = useState('en');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLocaleChange = (e) => {
    setLocale(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <h2>
          <FormattedMessage id="formTitle" />
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <FormattedMessage id="nameLabel" />
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">
              <FormattedMessage id="emailLabel" />
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">
            <FormattedMessage id="submitButton" />
          </button>
        </form>
        <div>
          <label htmlFor="locale">Select Language:</label>
          <select id="locale" value={locale} onChange={handleLocaleChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>
    </IntlProvider>
  );
};

export default Form;
