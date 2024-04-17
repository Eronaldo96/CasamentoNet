import React from "react";
import HomePageRoutes from "./app/pages/Homepage/Routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import ListaPresentesRoutes from "./app/pages/ListaPresentes/Routes";

export default function App() {
  return (
    <Router>
      <div style={{display:"flex", justifyContent: "center"}}>
        <NavBar />
        <div>
          <HomePageRoutes />
          <ListaPresentesRoutes />
        </div>
        <footer class="footerStyle">
          <p>© 2024 Ero Company, Inc.</p>
          <p class="float-right">
            <a href="/">Back to top</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}
