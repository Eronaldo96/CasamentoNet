import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import Container from "./app/components/Container";
import useDaysUntil from "./app/components/UseDaysUntil";
import fotoCasal from "./app/assets/images/FotoCasal.png";
import "normalize.css";
import "./app.scss";


export default function App() {
  const daysUntil = useDaysUntil("2024-11-22");

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="image-text">Maria & José</div>
        <picture className="ImagemCasalContainer">
          <img
            src={fotoCasal}
            alt="Casal feliz"
            className="ImagemCasal img-fluid"
          />
        </picture>
        <Container />
        <Footer />
      </div>
    </Router>
  );
}
