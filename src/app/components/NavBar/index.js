import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from "../../../app/assets/images/aliancas-de-casamento.png";

export default function NavBar() {
  return (
    <div className="mainHeader">
      <nav className="navbar navBarStyle">
        <div className="buttonHome">
          <div>
            <Link className="navbar-brand textButton" to="/">
            <img style={{width: "2em"}} src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <Link className="navbar-brand textButton" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="navbar-brand textButton" to="/ListaPresentes">
              Lista de Presentes
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
