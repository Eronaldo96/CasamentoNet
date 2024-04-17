import React, { useState } from "react";
import { Input } from "@mui/material"; // Adicione esta linha
import AirFry from "../../assets/images/AirFry.jpg";
import Tv from "../../assets/images/TV.jpg";
import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";

export default function ListaPresentes() {
  const [presentes, setPresentes] = useState([
    { descricao: "Presente 1 - AirFry", imagem: AirFry },
    { descricao: "Presente 2 - Televisão LG", imagem: Tv },
  ]);


  // const handleDescricaoChange = () => {
  //   // Adiciona um novo presente ao array de presentes
  //   setPresentes([{ descricao: "Teste", imagem: AirFry }, ...presentes]);
  // };
  
  return (
    <div className="container">
      <div className="col-sm-12">
        {/* Adiciona o componente Input e manipulador de eventos para alterar o estado */}
        {/* <Input
          value={presentes.descricao}
          onChange={handleDescricaoChange}
          placeholder="Descrição do Presente"
        /> */}

        {/* Exibe o componente ResponseGrid passando a lista de presentes como dados */}
        <ResponseGrid data={presentes} />
      </div>
    </div>
  );
}
