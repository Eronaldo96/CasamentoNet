import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListaPresentes from '../index';

export default function ListaPresentesRoutes() {
  return (
    <Routes>
      <Route path="/ListaPresentes" element={<ListaPresentes />} />
    </Routes>
  );
};
