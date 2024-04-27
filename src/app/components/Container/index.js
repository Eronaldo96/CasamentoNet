import React from "react";
import HomePageRoutes from "../../../app/pages/Homepage/Routes/index";
import ListaPresentesRoutes from "../../../app/pages/ListaPresentes/Routes";
import "./styles.scss";
import LocalRoutes from "../../pages/Local/Routes";
export default function Container() {
  return (
    <div className="Container">
        <HomePageRoutes />
        <ListaPresentesRoutes />
        <LocalRoutes/>
    </div>
  );
}
