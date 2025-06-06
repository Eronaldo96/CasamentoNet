import React, { useRef } from "react";
import MapComponent from "../../components/MapComponent";
import GalleryLoop from "../../components/GalleryLoop"; // Importando o componente GalleryLoop
import "./styles.scss";

// Lista de locais do casamento e recepção
const locais = [
  {
    titulo: "Local da Cerimônia",
    subtitulo: "Igreja de São Pedro dos Pescadores",
    endereco: "Av. Beira Mar, 4600 - Mucuripe, Fortaleza - CE, 60165-121",
    horario:"Realizar-se-á às quinze horas do dia Treze de Setembro de Dois Mil e Vinte e Cinco.",
    imagens: [
      {
        descricao: "Área Externa",
        imagem: "/image/LocalCasamento/Capela de São Pedro Externo.jpg",
      },
      {
        descricao: "Área Interna",
        imagem: "/image/LocalCasamento/Capela de São Pedro Interno.jpg",
      },
    ],
    latitude: -3.722002,
    longitude: -38.480321,
  },
  {
    titulo: "Local da Recepção",
    subtitulo: "Yucca Gastronomia",
    descricao:
      "Após a cerimônia haverá um chá da tarde para celebrarmos o grande dia.",
    endereco: "Rua Frei Mansueto, 160 - Meireles, Fortaleza - CE, 60175-070",
    horario:"",
    imagens: [
      { descricao: "Yucca", imagem: "/image/LocalCasamento/yucca entrada 2.jpg" },
      { descricao: "Yucca Entrada", imagem: "/image/LocalCasamento/yucca entrada.jpg" },
    ],
    latitude: -3.7260092565849052,
    longitude: -38.48950297273497,
  },
];

const LocalSection = ({
  titulo,
  subtitulo,
  descricao,
  endereco,
  horario,
  imagens,
  latitude,
  longitude,
  isLast,
}) => (
  <div>
    <div className="TituloPagina">
      <h1>{titulo}</h1>
      <h5 className="LocalInfoPagina">{subtitulo}</h5>
      {descricao && <h7 className="LocalInfoPagina">{descricao}</h7>}
    </div>

    <GalleryLoop images={imagens.map((item) => item.imagem)} />

    <div className="EnderecoMapaContainer">
      <div className="EnderecoBox LocalInfoPagina">
        <h6>Endereço:</h6>
        <ul>
        {horario !=="" && (
          <li>
            <p>{horario}</p>
          </li>
        )}
          <li>
            <p>{endereco}</p>
          </li>
        </ul>
      </div>
      <div className="MapaBox">
        <MapComponent latitude={latitude} longitude={longitude} />
      </div>
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
          <LocalSection
            key={index}
            {...local}
            isLast={index === locais.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
