import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageRoutes from './app/pages/Homepage/Routes/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePageRoutes />
  </React.StrictMode>
);
reportWebVitals();
