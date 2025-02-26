import React, { useState } from "react";
import AirFry from "../../assets/images/AirFry.jpg";
import ValeNight from "../../assets/images/valeNight.jpeg";
import CuecaBobEsponja from "../../assets/images/Cueca-Bob-esponja.jpg";
import Liquidificador from "../../assets/images/Liquidificador.png";
import MicroondasMidead from "../../assets/images/MicroondasMidead.png";
import PanelasAntiaderente from "../../assets/images/panelasAntiaderente.png";
import PanelasTramontina from "../../assets/images/panelasTramontina.jpeg";
import Sanduicheira from "../../assets/images/Sanduicheira.png";
import ValePix from "../../assets/images/PaiUrso.jpg"
import Mgs3 from "../../assets/images/MGS3.jpg"
import Penetra from "../../assets/images/penetra.jpg"
import PrioridadeFila from "../../assets/images/prioridadeFila.jpg"
import praDizerQueNDeiNd from "../../assets/images/praDizerQueNDeiNd.png"
import happyAbencoado from "../../assets/images/happy abençoadao.png"


import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";

export default function ListaPresentes() {
  const [presentes] = useState([
    {
      descricao: "Tampão de ouvido enquanto o noivo ronca",
      //valor: 100,
      //url: "https://www.amazon.com.br/s?k=tampão+de+ouvido&ref=nb_sb_noss",
    },
    {
      descricao: "3 meses de cabelo cortado pro noivo",
      //valor: 150,
      //url: "https://www.google.com/search?q=corte+de+cabelo+masculino",
    },
    {
      descricao: "Pra dizer que não dei nada",
      imagem:praDizerQueNDeiNd,
      //valor: 100,
      //url: "https://www.google.com/search?q=presente+simbolico",
    },
    {
      descricao: "Prioridade na fila do buffet",
      imagem: PrioridadeFila,
      //valor: 300,
      //url: "https://www.google.com/search?q=prioridade+em+eventos",
    },
    {
      descricao: "Kit calmante para desestressar a noiva",
      //valor: 200,
      //url: "https://www.amazon.com.br/s?k=kit+calmante&ref=nb_sb_noss",
    },
    {
      descricao: "Dar palpite sobre o casamento",
      //valor: 500,
      //url: "https://www.google.com/search?q=dar+palpite+sobre+casamento",
    },
    {
      descricao: "Levar alguém que não foi convidado",
      imagem:Penetra,
      //valor: 1000,
      //url: "https://www.google.com/search?q=convidado+extra+casamento",
    },
    {
      descricao: "Deus te iluminou e você resolveu nos ajudar",
      imagem:happyAbencoado,
      //valor: 100,
      //url: "https://www.amazon.com.br/s?k=tampão+de+ouvido&ref=nb_sb_noss",
    },
    {
      descricao: "Primeiro almoço/jantar na casa dos noivos",
      //valor: 300,
      //url: "https://www.google.com/search?q=receitas+para+convidados",
    },
    {
      descricao: "3 meses da conta de luz paga para os noivos",
      //valor: 600,
      //url: "https://www.google.com/search?q=pagar+conta+de+luz",
    },
    {
      descricao: "Ajuda para o noivo comprar um joguinho",
      imagem: Mgs3,
      //valor: 389,
      //url: "https://www.amazon.com.br/s?k=jogos+para+ps5&ref=nb_sb_noss",
    },
    {
      descricao: "Hotel para a noite de núpcias",
      ////valor: 400,
      //url: "https://www.booking.com/searchresults.pt-br.html?ss=hotel+noite+de+núpcias",
    },
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
      descricao: "Presente 4 - Cueca sexy para a noite de núpcias",
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
