import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConfirmaPresenca from '../index';

export default function ConfirmaPresencaRoutes() {
  return (
    <Routes>
      <Route path="/Local" element={<ConfirmaPresenca />} />
    </Routes>
  );
};
