import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HistoriaCasal from '../index';

export default function HistoriaCasalRoutes() {
  return (
    <Routes>
      <Route path="/HistoriaCasal" element={<HistoriaCasal />} />
    </Routes>
  );
};
