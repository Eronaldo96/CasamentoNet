import React, { useState } from "react";

import "./styles.scss";
import ResponseGrid from "../../components/ResponsiveGrid/index";

export default function ListaPresentes() {
  const [presentes] = useState([
    {
      descricao: "Três meses de cabelo cortado para o noivo.",
      imagem: "/image/CabeloCortado.jpg",
      valor: 150,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Pra dizer que não dei nada",
      imagem: "/image/praDizerQueNDeiNd.png",
      valor: 100,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Prioridade na fila do buffet",
      imagem: "/image/prioridadeFila.jpg",
      valor: 300,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Kit calmante para desestressar a noiva",
      imagem: "/image/calmante.jpg",
      valor: 200,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Dar palpite sobre o casamento",
      imagem: "/image/intrometido.jpg",
      valor: 500,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Levar alguém que não foi convidado",
      imagem: "/image/penetra.jpg",
      valor: 1000,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Deus te iluminou e você resolveu nos ajudar",
      imagem: "/image/happy abençoadao.png",
      valor: 100,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Primeiro almoço/jantar na casa dos noivos",
      imagem: "/image/JantarCasaNoivos.jpg",
      valor: 300,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "3 meses da conta de luz paga para os noivos",
      imagem:  "/image/contaDeLuz.jpg",
      valor: 600,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Ajuda para o noivo comprar um joguinho",
      imagem: "/image/MGS3.jpg",
      valor: 400,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Hotel para a noite de núpcias",
      imagem: "/image/CopacabanaPalace.jpg",
      valor: 400,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "AirFry",
      imagem: "/image/AirFry.jpg",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Night para a noiva",
      imagem: "/image/valeNight.jpeg",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Cueca sexy para a noite de núpcias",
      imagem: "/image/Cueca-Bob-esponja.jpg",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Liquidificador Turbo Mondial 900W 220V",
      imagem: "/image/Liquidificador.png",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Sanduicheira Elétrica Mini Grill 750W",
      imagem: "/image/Sanduicheira.png",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Forno Micro-ondas 20L Preto Midea 220V",
      imagem: "/image/MicroondasMidead.png",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Jogo de Panelas Tramontina Turim em Alumínio 10 Peças",
      imagem: "/image/panelasTramontina.jpeg",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Jogo de Panelas Tramontina Antiaderente Turim  10 Peças",
      imagem: "/image/panelasAntiaderente.png",
      valor: 0,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Pix",
      imagem: "/image/PaiUrso.jpg",
      valor: 150,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Pix",
      imagem: "/image/PaiUrso.jpg",
      valor: 250,
      url: "https://nubank.com.br/cobrar/ejs0w/67cf9306-b578-4f4c-b7fa-3505d9078f95",
    },
    {
      descricao: "Vale Pix",
      imagem: "/image/PaiUrso.jpg",
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
