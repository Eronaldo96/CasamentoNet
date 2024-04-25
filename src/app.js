import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import "./app.scss";
import Container from "./app/components/Container";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container/>
        <Footer />
      </div>
    </Router>
  );
}
