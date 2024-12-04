import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import Container from "./app/components/Container";
// import useDaysUntil from "./app/components/UseDaysUntil";
import fotoCasal from "./app/assets/images/FotoCasal.png";
import "normalize.css";
import "./app.scss";

export default function App() {
  // const daysUntil = useDaysUntil("2025-07-21");

  return (
    <Router>
      <div className="App d-flex flex-column">
        <NavBar />
        <picture className="ImagemCasalContainer position-relative">
          <img
            src={fotoCasal}
            alt="Casal feliz"
            className="ImagemCasal img-fluid"
          />
          {/* <div className="image-text text-center">
            <div>Maria & José</div>
            <div className="countdown text-center mt-4">
              <h1>{daysUntil}</h1>
              <p>Dias para o grande dia!</p>
            </div>
          </div> */}
        </picture>
        <div className="Container container my-4 flex-grow-1">
          <Container />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
