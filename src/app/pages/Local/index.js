import React, { useState, useRef } from "react";
import CapelaSaoPedro from "../../assets/images/Capela de São Pedro.jpg";
import CapelaSaoPedroInterno from "../../assets/images/Capela de São Pedro Interno.jpg";
import CapelaSaoPedroExterno from "../../assets/images/Capela de São Pedro Externo.jpg";

import "./styles.scss";
import StandardImageList from "../../components/SatndardImageList/index";

export default function Local() {
  const [local] = useState([
    {
      descricao: "Capela de São Pedro dos Pescadores",
      imagem: CapelaSaoPedro,
    },
    {
      descricao: "Área Interna",
      imagem: CapelaSaoPedroInterno,
    },
    {
      descricao: "Área Externa",
      imagem: CapelaSaoPedroExterno,
    },
  ]);
  const localSection = useRef(null);
  return (
    <div className="LocalCustom" ref={localSection}>
      <div className="col-sm-12">
        <div className="TituloPagina">
          <h1>Local do Casamento</h1>
          <h5 className="LocalInfoPagina">
            Igreja de São Pedro dos Pescadores
          </h5>
        </div>
        <div>
          <StandardImageList data={local} />
        </div>
        <div className="LocalInfoPagina">
          <h6>
            Endereço: Av. Beira Mar, 4600 - Mucuripe, Fortaleza - CE, 60165-121
          </h6>
        </div>

        <hr className="decorative-line" />
        
        <div className="TituloPagina">
          <h1>Local do Brunch</h1>
          <h5 className="LocalInfoPagina">
            Casa Portuguesa
          </h5>
        </div>
        <div>
          <StandardImageList data={local} />
        </div>
        <div className="LocalInfoPagina">
          <h6>
            Endereço: Av. Beira Mar, 4600 - Mucuripe, Fortaleza - CE, 60165-121
          </h6>
        </div>
      </div>
    </div>
  );
}
