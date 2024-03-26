import React from 'react';
import HomePageRoutes from './app/pages/Homepage/Routes/index';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './app/components/NavBar';
import ListaPresentesRoutes from './app/pages/ListaPresentes/Routes';

export default function App() {
  return (
    <Router>
      <NavBar />
      <HomePageRoutes />
      <ListaPresentesRoutes/>
    </Router>
  );
}
