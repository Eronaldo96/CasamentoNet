import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot de react-dom/client
import './app/assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
