import React from "react";
import useDaysUntil from "../../components/UseDaysUntil";

import "./styles.scss";

export default function HomePage() {
  const daysUntil = useDaysUntil("2025-06-21");
  return (
    <div className="homeStyle">
      <div>
        <div className="image-text text-center">
          <div>Maria & José</div>
        </div>
        <div className="col-12 ">
          <div className="row countdown text-center mt-4">
            <h1>{daysUntil}</h1>
            <p>Dias para o grande dia!</p>
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
