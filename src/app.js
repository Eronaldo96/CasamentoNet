import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import Container from "./app/components/Container";
import LoadingGif from "./app/assets/images/Loading.gif";
import fotoCasal from "./app/assets/images/FotoCasal.png";
import "normalize.css";
import "./app.scss";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const img = new Image();
    img.src = fotoCasal;
    img.onload = handleImageLoad;
  }, []);

  return (
    <Router>
      {isLoading && (
        <div className="loading-overlay">
          <img
            src={LoadingGif}
            alt="Carregando..."
            className="loading-spinner"
          />
        </div>
      )}
      <div
        className={`App d-flex flex-column ${isLoading ? "loading" : "loaded"}`}
      >
        {!isLoading && (
          <>
            <NavBar />
            <picture className="ImagemCasalContainer position-relative">
              <img
                src={fotoCasal}
                alt="Casal feliz"
                className="ImagemCasal img-fluid"
                onLoad={handleImageLoad}
                loading="lazy"
              />
            </picture>
            <div className="Container container my-4 flex-grow-1">
              <Container />
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}
