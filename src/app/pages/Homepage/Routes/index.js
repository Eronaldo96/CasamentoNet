import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../index';
import ListaPresentesRoutes from '../../ListaPresentes';

export default function HomePageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/CasamentoNet/home" />} />
      <Route path="/CasamentoNet" element={<Navigate replace to="/CasamentoNet/home" />} />
      <Route path="/CasamentoNet/home" element={<HomePage />} />
      <Route path="/CasamentoNet/ListaPresentes/*" element={<ListaPresentesRoutes />} /> {/* Ajuste o caminho */}
    </Routes>
  );
};
