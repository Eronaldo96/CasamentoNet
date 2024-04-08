// .js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/images/aliancas-de-casamento.png";

export default function NavBar() {
  return (
    <div className="mainHeader">
      <nav className="navbar navBarStyle">
        <div className="buttonHome">
          <div style={{ marginRight: "10px" }}>
            <p className="navbar-brand-custom textButton">Página de Teste</p>
          </div>
          <div>
            <Link className="navbar-brand textButton" to="/">
              Home
            </Link>{" "}
            {/* Use Link */}
          </div>
          <div>
            <Link className="navbar-brand textButton" to="/ListaPresentes">
              Lista de Presentes
            </Link>{" "}
            {/* Use Link */}
          </div>
        </div>
      </nav>
    </div>
  );
}
