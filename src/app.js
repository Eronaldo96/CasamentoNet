import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import "./app.scss";
import Container from "./app/components/Container";
import fotoCasal from "./app/assets/images/ENSAIOBIAEIAN-044.jpg";

export default function App() {

  const calculateDaysUntil = (date) => {
    const now = new Date();
    const targetDate = new Date(date);
    const timeDifference = targetDate - now;
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  };
  const [daysUntil, setDaysUntil] = useState(calculateDaysUntil('2024-11-22'));

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysUntil(calculateDaysUntil('2024-11-22'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="image-container">
          <figure className="ImagemCasalContainer">
            {/* <img className="ImagemCasal" src={fotoCasal} alt="fotoCasal" /> */}
            <img className="ImagemCasal" src={fotoCasal} alt="fotoCasal"></img>
            <div className="image-text-Data">
              22.11.2024
              <br />
              Faltam {daysUntil} dias
            </div>
            <div className="image-text">Bia & Yan</div>
          </figure>
        </div>
        <Container />
        <Footer />
      </div>
    </Router>
  );
}
