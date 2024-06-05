import React from "react";
import HomePageRoutes from "../../../app/pages/Homepage/Routes/index";
import ListaPresentesRoutes from "../../../app/pages/ListaPresentes/Routes";
import LocalRoutes from "../../pages/Local/Routes";
import ConfirmaPresencaRoutes from "../../pages/ConfirmaPresenca/Routes";
import "./styles.scss";
export default function Container() {
  return (
    <div className="Container">
        <HomePageRoutes />
        <ListaPresentesRoutes />
        <LocalRoutes/>
        <ConfirmaPresencaRoutes/>
    </div>
  );
}
