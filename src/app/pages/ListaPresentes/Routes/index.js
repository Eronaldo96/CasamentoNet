import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ListaPresentes from '../index';

export default function ListaPresentesRoutes() {
  return (
    <Routes>
      <Route path="/CasamentoNet/ListaPresentes" element={<ListaPresentes />} />
    </Routes>
  );
};
