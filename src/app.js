import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./app/components/NavBar";
import Footer from "./app/components/Footer";
import Container from "./app/components/Container";
// import useDaysUntil from "./app/components/UseDaysUntil";
import fotoCasal from "./app/assets/images/FotoCasal.png";
import "normalize.css";
import "./app.scss";


// export default function App() {
//   // const daysUntil = useDaysUntil("2024-11-22");

//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <div className="image-text">Maria & José</div>
//         <picture className="ImagemCasalContainer">
//           <img
//             src={fotoCasal}
//             alt="Casal feliz"
//             className="ImagemCasal img-fluid"
//           />
//         </picture>
//         <Container />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default function App() {
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
          <div className="image-text text-center">Maria & José</div>
        </picture>
        <div className="Container container my-4 flex-grow-1">
          <Container />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
