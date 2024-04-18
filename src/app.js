import React from "react";
import HomePageRoutes from "./app/pages/Homepage/Routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import ListaPresentesRoutes from "./app/pages/ListaPresentes/Routes";

export default function App() {
  return (
    <Router>
      <div
       //style={{display:"flex", justifyContent: "center"}}
       >
        <NavBar />
        <HomePageRoutes />
        <ListaPresentesRoutes />
        <Footer/>
        
      </div>
    </Router>
  );
}
