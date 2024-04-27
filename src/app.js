import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import "./app.scss";
import Container from "./app/components/Container";
import fotoCasal from "./app/assets/images/ENSAIOBIAEIAN-044.jpg";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="image-container">
          <img className="ImagemCasalTexto" src={fotoCasal} alt="fotoCasal" />
          <div className="image-text-Data">03.10.2024<br/>Faltam 584 dias</div>
          <div className="image-text">Bya & Yan</div>
        </div>
        <Container/>
        <Footer />
      </div>
    </Router>
  );
}
