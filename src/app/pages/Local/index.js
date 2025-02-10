import React, { useRef } from "react";
import CapelaSaoPedro from "../../assets/images/Capela de São Pedro.jpg";
import CapelaSaoPedroInterno from "../../assets/images/Capela de São Pedro Interno.jpg";
import CapelaSaoPedroExterno from "../../assets/images/Capela de São Pedro Externo.jpg";
import YuccaEntrada from "../../assets/images/yucca entrada.jpg";
import YuccaLogo from "../../assets/images/yucca entrada 2.jpg";
import MapComponent from "../../components/MapComponent";
import StandardImageList from "../../components/SatndardImageList/index";
import "./styles.scss";

// Lista de locais do casamento e recepção
const locais = [
  {
    titulo: "Local do Casamento",
    subtitulo: "Igreja de São Pedro dos Pescadores",
    endereco: "Av. Beira Mar, 4600 - Mucuripe, Fortaleza - CE, 60165-121",
    imagens: [
      { descricao: "Capela de São Pedro dos Pescadores", imagem: CapelaSaoPedro },
      { descricao: "Área Interna", imagem: CapelaSaoPedroInterno },
      { descricao: "Área Externa", imagem: CapelaSaoPedroExterno },
    ],
    latitude: -3.722002,
    longitude: -38.480321,
  },
  {
    titulo: "Local da Recepção",
    subtitulo: "Yucca Gastronomia",
    descricao: "Após a cerimônia haverá um brunch para celebrarmos o grande dia.",
    endereco: "Rua Frei Mansueto, 160 - Meireles, Fortaleza - CE, 60175-070",
    imagens: [
      { descricao: "Yucca", imagem: YuccaLogo },
      { descricao: "Yucca Entrada", imagem: YuccaEntrada },
    ],
    latitude: -3.7260092565849052,
    longitude: -38.48950297273497,
  },
];

// Componente para exibir cada local
const LocalSection = ({ titulo, subtitulo, descricao, endereco, imagens, latitude, longitude, isLast }) => (
  <div>
    <div className="TituloPagina">
      <h1>{titulo}</h1>
      <h5 className="LocalInfoPagina">{subtitulo}</h5>
      {descricao && <h7>{descricao}</h7>}
    </div>

    {/* Galeria de imagens */}
    <StandardImageList data={imagens} />

    {/* Endereço */}
    <div className="LocalInfoPagina">
      <h6>Endereço: {endereco}</h6>
    </div>

    {/* Mapa do local */}
    <div style={{ marginTop: "2%", marginBottom: "2%" }}>
      <MapComponent latitude={latitude} longitude={longitude} />
    </div>

    {/* Linha separadora (somente se não for o último item) */}
    {!isLast && <hr className="decorative-line" />}
  </div>
);

// Componente principal
export default function Local() {
  const localSection = useRef(null);

  return (
    <div className="LocalCustom" ref={localSection}>
      <div className="col-sm-12">
        {locais.map((local, index) => (
          <LocalSection key={index} {...local} isLast={index === locais.length - 1} />
        ))}
      </div>
    </div>
  );
}
