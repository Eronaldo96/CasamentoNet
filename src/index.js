import React from 'react';
import ReactDOM from 'react-dom';
import './app/assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageRoutes from './app/pages/Homepage/Routes/index';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HomePageRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
