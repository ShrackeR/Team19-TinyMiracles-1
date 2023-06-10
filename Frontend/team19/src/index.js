import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutsContext'

import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { AuthContext2Provider } from './context/AuthContext2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <AuthContext2Provider>

    <WorkoutsContextProvider>
    <App />
    </WorkoutsContextProvider>
    </AuthContext2Provider>

    </AuthContextProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
