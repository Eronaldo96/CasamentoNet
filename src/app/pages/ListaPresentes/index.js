import React, { useState } from "react";
import AirFry from "../../assets/images/AirFry.jpg";
import ValeNight from "../../assets/images/valeNight.jpeg";
import CuecaBobEsponja from "../../assets/images/Cueca-Bob-esponja.jpg";
import Liquidificador from "../../assets/images/Liquidificador.png";
import MicroondasMidead from "../../assets/images/MicroondasMidead.png";
import PanelasAntiaderente from "../../assets/images/panelasAntiaderente.png";
import PanelasTramontina from "../../assets/images/panelasTramontina.jpeg";
import Sanduicheira from "../../assets/images/Sanduicheira.png";
import ValePix from "../../assets/images/PaiUrso.jpg";
import Mgs3 from "../../assets/images/MGS3.jpg";
import Penetra from "../../assets/images/penetra.jpg";
import PrioridadeFila from "../../assets/images/prioridadeFila.jpg";
import praDizerQueNDeiNd from "../../assets/images/praDizerQueNDeiNd.png";
import happyAbencoado from "../../assets/images/happy abençoadao.png";
import CopacabanaPalace from "../../assets/images/CopacabanaPalace.jpg";
import Calmante from "../../assets/images/calmante.jpg";
import ContaLuz from "../../assets/images/contaDeLuz.jpg";
import CabeloCortado from "../../assets/images/CabeloCortado.jpg";
import JantarAlmoço from "../../assets/images/JantarCasaNoivos.jpg";
import Intrometido from "../../assets/images/intrometido.jpg";

import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";

export default function ListaPresentes() {
  const [presentes] = useState([
    {
      descricao: "Três meses de cabelo cortado para o noivo.",
      imagem: CabeloCortado,
      valor: 150,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Pra dizer que não dei nada",
      imagem: praDizerQueNDeiNd,
      valor: 100,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Prioridade na fila do buffet",
      imagem: PrioridadeFila,
      valor: 300,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Kit calmante para desestressar a noiva",
      imagem: Calmante,
      valor: 200,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Dar palpite sobre o casamento",
      imagem: Intrometido,
      valor: 500,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Levar alguém que não foi convidado",
      imagem: Penetra,
      valor: 1000,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Deus te iluminou e você resolveu nos ajudar",
      imagem: happyAbencoado,
      valor: 100,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Primeiro almoço/jantar na casa dos noivos",
      imagem: JantarAlmoço,
      valor: 300,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "3 meses da conta de luz paga para os noivos",
      imagem: ContaLuz,
      valor: 600,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Ajuda para o noivo comprar um joguinho",
      imagem: Mgs3,
      valor: 400,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Hotel para a noite de núpcias",
      imagem: CopacabanaPalace,
      valor: 400,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "AirFry",
      imagem: AirFry,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Night para a noiva",
      imagem: ValeNight,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Cueca sexy para a noite de núpcias",
      imagem: CuecaBobEsponja,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Liquidificador Turbo Mondial 900W 220V",
      imagem: Liquidificador,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Sanduicheira Elétrica Mini Grill 750W",
      imagem: Sanduicheira,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Forno Micro-ondas 20L Preto Midea 220V",
      imagem: MicroondasMidead,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Jogo de Panelas Tramontina Turim em Alumínio 10 Peças",
      imagem: PanelasTramontina,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Jogo de Panelas Tramontina Antiaderente Turim  10 Peças",
      imagem: PanelasAntiaderente,
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Pix",
      imagem: ValePix,
      valor: 150,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Pix",
      imagem: ValePix,
      valor: 250,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Pix",
      imagem: ValePix,
      valor: 350,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
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
