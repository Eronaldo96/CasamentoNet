import React, { useState, useRef } from "react";
import CapelaSaoPedro from "../../assets/images/Capela de São Pedro.jpg";
import CapelaSaoPedroInterno from "../../assets/images/Capela de São Pedro Interno.jpg";
import CapelaSaoPedroExterno from "../../assets/images/Capela de São Pedro Externo.jpg";
import YuccaEntrada from "../../assets/images/yucca entrada.jpg";
import YuccaLogo from "../../assets/images/yucca entrada 2.jpg";

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

  const [localBrunch] = useState([
    {
      descricao: "Yucca",
      imagem: YuccaLogo,
    },
    {
      descricao: "Yucca Entrada",
      imagem: YuccaEntrada,
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
          <h1>Local da Recepção</h1>
          <h7>
            Após a cerimônia haverá um brunch para celebrarmos o grande dia.
          </h7>

          <h5 style={{marginTop:"2%"}} className="LocalInfoPagina">Yucca gastronomia</h5>
        </div>
        <div>
          <StandardImageList data={localBrunch} />
        </div>
        <div className="LocalInfoPagina">
          <h6>
            Endereço: Rua Frei Mansueto, 160 - Meireles, Fortaleza - CE,
            60175-070
          </h6>
        </div>
      </div>
    </div>
  );
}
