import React, { useState } from "react";
import AirFry from "../../assets/images/AirFry.jpg";
import Igreja from "../../assets/images/igreja.jpeg";
import "./styles.scss";
import StandardImageList from "../../components/SatndardImageList/index";

export default function Local() {
  const [local, setLocal] = useState([
    {
      descricao: "Presente 1 - AirFry",
      imagem: AirFry,
    },
    {
      descricao: "Igreja da Saúde",
      imagem: Igreja,
    },
  ]);

  return (
    <div className="LocalCustom">
      <div className="col-sm-12">
        <div className="TituloPagina">
          <h1>Local</h1>
          <h5>Paróquia da Nossa Senhora da Saúde</h5>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </p>
        </div>
        <div>
          <StandardImageList data={local} />
        </div>
      </div>
    </div>
  );
}
