import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot de react-dom/client
import './app/assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageRoutes from './app/pages/Homepage/Routes/index';
import { BrowserRouter as Router } from 'react-router-dom';

// Use createRoot em vez de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <HomePageRoutes />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
