import React, { useState, useEffect } from "react";

import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";

import { getDatabase, ref, get, child } from "firebase/database";

import { toast } from "react-toastify"; // Importando o Toastify para mensagens de erro

export default function ListaPresentes() {
  const [presentes, setPresentes] = useState([]);

  const buscarPresentes = async () => {
    const database = getDatabase();
    const listaRef = ref(database);

    try {
      const snapshot = await get(child(listaRef, "presentes"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.values(data);
        setPresentes(lista);
      } else {
        toast.warn("Nenhum presente encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar presentes:", error);
      toast.error("Erro ao buscar presentes. Tente novamente mais tarde.");
    }
  };

  useEffect(() => {
    buscarPresentes();
  }, []);

  return (
    <div className="ListaPresenteCustom">
      <div className="col-sm-12">
        <h1>Lista de presentes</h1>
        <ResponseGrid data={presentes} />
      </div>
    </div>
  );
}
