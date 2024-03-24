import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../index';

export default function HomePageRoutes () {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="/Home" element={<HomePage />} /> */}
      {/* <Route path="/CasamentoNet" element={<HomePage />} />
      <Route path="/CasamentoNet/Home" element={<HomePage />} /> */}
      
      <Route path="/" element={<Navigate replace to="/CasamentoNet/home" /> } />  
      <Route path="/CasamentoNet" element={<Navigate replace to="/CasamentoNet/home" /> } />     
      <Route path="/CasamentoNet/home" element={<HomePage />} />
    </Routes>
  );
};

