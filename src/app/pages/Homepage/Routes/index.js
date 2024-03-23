import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../index';

const ContentRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/CasamentoNet/home" />} />
      {/* Defina a rota inicial como "/CasamentoNet", sem especificar um elemento */}
      {/* <Route path="/CasamentoNet" element={<Navigate replace to="/CasamentoNet/home" />} /> */}
      {/* Adicione uma rota separada para a página inicial */}
      {/* <Route path="/CasamentoNet/home" element={<HomePage />} /> */}
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default ContentRoute;
