import React, { useState } from "react";
import CasaMaraponga from "../../assets/images/CasaMarapongaLocal.png";
import CasalTeatro from "../../assets/images/CasalTeatro.jpg";
import "./styles.scss";
import StandardImageList from "../../components/SatndardImageList/index";

export default function Local() {
  const [local] = useState([
    {
      descricao: "Casa Maraponga",
      imagem: CasaMaraponga,
    },
    {
      descricao: "Casal",
      imagem: CasalTeatro,
    },
  ]);

  return (
    <div className="LocalCustom">
      <div className="col-sm-12">
        <div className="TituloPagina">
          <h1>Local</h1>
          <h5 className="LocalInfoPagina">
            A Realizar-se às quinze horas do dia vinte e dois de novembro de
            dois mil e vionte e quatro na casa maraponga, rua Paurilo Barroso,
            521 - Jardim Cearense, Fortaleza - CE
          </h5>
        </div>
        <div>
          <StandardImageList data={local} />
        </div>
      </div>
    </div>
  );
}
