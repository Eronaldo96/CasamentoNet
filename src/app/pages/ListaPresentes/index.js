import React, { useState, useEffect } from "react";

import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";
import { getDatabase, ref, get } from "firebase/database";
import { toast } from "react-toastify"; // Importando o Toastify para mensagens de erro

export default function ListaPresentes() {
  const [presentes, setPresentes] = useState([]);

  const buscarPresentes = async () => {
    const database = getDatabase();
    const listaRef = ref(database, "presentes");

    try {
      const snapshot = await get(listaRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const lista = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        })); // Adiciona o ID ao objeto presente
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
        <ResponseGrid data={presentes} onRefresh={buscarPresentes} />
      </div>
    </div>
  );
}
