import React, { useRef } from "react";
import CapelaSaoPedro from "../../assets/images/Capela de São Pedro.jpg";
import CapelaSaoPedroInterno from "../../assets/images/Capela de São Pedro Interno.jpg";
import CapelaSaoPedroExterno from "../../assets/images/Capela de São Pedro Externo.jpg";
import YuccaEntrada from "../../assets/images/yucca entrada.jpg";
import YuccaLogo from "../../assets/images/yucca entrada 2.jpg";
import MapComponent from "../../components/MapComponent";
import GalleryLoop from "../../components/GalleryLoop";  // Importando o componente GalleryLoop
import "./styles.scss";

// Lista de locais do casamento e recepção
const locais = [
  {
    titulo: "Local do Casamento",
    subtitulo: "Igreja de São Pedro dos Pescadores",
    endereco: "Av. Beira Mar, 4600 - Mucuripe, Fortaleza - CE, 60165-121",
    imagens: [
      { descricao: "Igreja de São Pedro dos Pescadores", imagem: CapelaSaoPedro },
      { descricao: "Área Interna", imagem: CapelaSaoPedroInterno },
      { descricao: "Área Externa", imagem: CapelaSaoPedroExterno },
    ],
    latitude: -3.722002,
    longitude: -38.480321,
  },
  {
    titulo: "Local da Recepção",
    subtitulo: "Yucca Gastronomia",
    descricao: "Após a cerimônia haverá um chá da tarde para celebrarmos o grande dia.",
    endereco: "Rua Frei Mansueto, 160 - Meireles, Fortaleza - CE, 60175-070",
    imagens: [
      { descricao: "Yucca", imagem: YuccaLogo },
      { descricao: "Yucca Entrada", imagem: YuccaEntrada },
    ],
    latitude: -3.7260092565849052,
    longitude: -38.48950297273497,
  },
];

const LocalSection = ({ titulo, subtitulo, descricao, endereco, imagens, latitude, longitude, isLast }) => (
  <div>
    <div className="TituloPagina">
      <h1>{titulo}</h1>
      <h5 className="LocalInfoPagina">{subtitulo}</h5>
      {descricao && <h7 className="LocalInfoPagina">{descricao}</h7>}
    </div>

    <GalleryLoop images={imagens.map(item => item.imagem)} />

    <div className="LocalInfoPagina">
      <h6>Endereço: {endereco}</h6>
    </div>

    <div style={{ marginTop: "2%", marginBottom: "2%" }}>
      <MapComponent latitude={latitude} longitude={longitude} />
    </div>

    {!isLast && <hr className="decorative-line" />}
  </div>
);

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
