import React, { useState } from "react";
import { Input } from "@mui/material"; // Adicione esta linha
import AirFry from "../../assets/images/AirFry.jpg";
import Tv from "../../assets/images/TV.jpg";
import ValeNight from "../../assets/images/valeNight.jpeg";
import CuecaBobEsponja from "../../assets/images/Cueca-Bob-esponja.jpg";
import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";

export default function ListaPresentes() {
  const [presentes, setPresentes] = useState([
    {
      descricao: "Presente 1 - AirFry",
      imagem: AirFry,
      url: "https://www.amazon.com.br/s?k=air+fryer+220v&crid=WT8X3G04FVZS&sprefix=air%2Caps%2C160&ref=nb_sb_ss_ts-doa-p_2_3",
    },
    {
      descricao: "Presente 2 - Televisão LG",
      imagem: Tv,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Vale Night para a noiva",
      imagem: ValeNight,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Cueca Para o noivo usar na lua de mel",
      imagem: CuecaBobEsponja,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
  ]);

  // const handleDescricaoChange = () => {
  //   // Adiciona um novo presente ao array de presentes
  //   setPresentes([{ descricao: "Teste", imagem: AirFry }, ...presentes]);
  // };

  return (
    <div className="ListaPresenteCustom">
      <div className="col-sm-12">
        <ResponseGrid data={presentes} />
      </div>
    </div>
  );
}
