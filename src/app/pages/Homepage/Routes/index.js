import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../index';
import ListaPresentesRoutes from '../../ListaPresentes';

export default function HomePageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
