import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListaPresentes from '../index';
import PagamentoSucesso from '../../../components/PagamentoSucesso'; // ajuste o caminho conforme sua estrutura

export default function ListaPresentesRoutes() {
  return (
    <Routes>
      <Route path="/ListaPresentes/*" element={<ListaPresentes />} />
      <Route path="/pagamento-sucesso" element={<PagamentoSucesso />} /> {/* <-- adicione aqui */}

    </Routes>
  );
};
