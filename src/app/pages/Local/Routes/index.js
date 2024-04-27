import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListaPresentes from '../index';

export default function LocalRoutes() {
  return (
    <Routes>
      <Route path="/Local" element={<ListaPresentes />} />
    </Routes>
  );
};
