import React from "react";
import useDaysUntil from "../../components/UseDaysUntil";

import "./styles.scss";

export default function HomePage() {
  const { days, hours, minutes, seconds } = useDaysUntil("2025-06-21");
  return (
    <div className="homeStyle">
      <div>
        <div className="image-text text-center">
          <div>Maria & José</div>
        </div>
        <div className="col-12 ">
          <div className="row countdown text-center mt-4">
            <p>Contagem regressiva para o grande dia!</p>
            <div className="d-flex">
              <div className="box col-3">
                <h1>{days}</h1>
                <span>Dias</span>
              </div>
              <div className="box col-3">
                <h1>{hours}</h1>
                <span>Horas</span>
              </div>
              <div className="box col-3">
                <h1>{minutes}</h1>
                <span>Minutos</span>
              </div>
              <div className="box col-3">
                <h1>{seconds}</h1>
                <span>Segundos</span>
              </div>
            </div>
          </div>
          
          <div className="row">
            <h2 className="citacao">
              "Os outros eu conheci por ocioso acaso. A ti vim encontrar porque
              era preciso."
            </h2>
            <h6 className="autor">
              - João Guimarães Rosa em carta a Aracy M. de Carvalho (1946).
            </h6>
          </div>
        </div>

        <br></br>
        {/* <h6 style={{ float: "right" }} className="vessiculo">
          Colossenses 3:14
        </h6> */}
      </div>
    </div>
  );
}
