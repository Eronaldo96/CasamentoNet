import React, { useState } from "react";
import AirFry from "../../assets/images/AirFry.jpg";
import ValeNight from "../../assets/images/valeNight.jpeg";
import CuecaBobEsponja from "../../assets/images/Cueca-Bob-esponja.jpg";
import Liquidificador from "../../assets/images/Liquidificador.png";
import MicroondasMidead from "../../assets/images/MicroondasMidead.png";
import PanelasAntiaderente from "../../assets/images/panelasAntiaderente.png";
import PanelasTramontina from "../../assets/images/panelasTramontina.jpeg";
import Sanduicheira from "../../assets/images/Sanduicheira.png";
import ValePix from "../../assets/images/Pix.png"
import Ventilador from "../../assets/images/ventilador.png";
import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";

export default function ListaPresentes() {
  const [presentes] = useState([
    {
      descricao: "Presente 1 - AirFry",
      imagem: AirFry,
      url: "https://www.amazon.com.br/s?k=air+fryer+220v&crid=WT8X3G04FVZS&sprefix=air%2Caps%2C160&ref=nb_sb_ss_ts-doa-p_2_3",
    },
    {
      descricao: "Presente 3 - Vale Night para a noiva",
      imagem: ValeNight,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Presente 4 - Cueca Para o noivo usar na lua de mel",
      imagem: CuecaBobEsponja,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Presente 5 - Liquidificador Turbo Mondial 900W 220V",
      imagem: Liquidificador,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Presente 6 - Sanduicheira Elétrica Mini Grill 750W",
      imagem: Sanduicheira,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Presente 8 - Ventilador de mesal Arno Xtreme Force 220V",
      imagem: Ventilador,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Presente 11 - Forno Micro-ondas 20L Preto Midea 220V",
      imagem: MicroondasMidead,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Jogo de Panelas Tramontina Turim em Alumínio 10 Peças",
      imagem: PanelasTramontina,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Presente 13 - Jogo de Panelas Tramontina Antiaderente Turim  10 Peças",
      imagem: PanelasAntiaderente,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Vale Pix de 150 Reais",
      imagem: ValePix,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Vale Pix de 250 Reais",
      imagem: ValePix,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
    {
      descricao: "Vale Pix de 350 Reais",
      imagem: ValePix,
      url: "https://www.amazon.com.br/s?k=tv+lg&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KMA7COX6A15&sprefix=tv+lg%2Caps%2C285&ref=nb_sb_noss_1",
    },
  ]);


  return (
    <div className="ListaPresenteCustom">
      <div className="col-sm-12">
        <h1>Lista de presentes</h1>
        <ResponseGrid data={presentes} />
      </div>
    </div>
  );
}
