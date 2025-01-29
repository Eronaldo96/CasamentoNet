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
          <div className="invite-container">
            <h1 className="invite-title">Celebre Conosco!</h1>
            <p className="invite-text">
              O amor é a celebração mais bela da vida, e queremos compartilhar esse momento único com você! 
              Venha celebrar conosco a união de nossas vidas em um dia repleto de alegria, amor e felicidade. 
              Sua presença será o presente que tornará esse dia ainda mais especial. 
              <span className="invite-emoji">💍✨</span>
            </p>
            <p className="invite-signature">Com carinho, Maria & José.</p>
          </div>

          <hr className="decorative-line" />

          <div className="row invite-container countdown text-center mt-4">
            <p>Contagem regressiva para o grande dia!</p>
            <div className="d-flex">
              <div className="box col-3">
                <h1>{days}</h1>
                <h3>Dias</h3>
              </div>
              <div className="box col-3">
                <h1>{hours}</h1>
                <h3>Horas</h3>
              </div>
              <div className="box col-3">
                <h1>{minutes}</h1>
                <h3>Minutos</h3>
              </div>
              <div className="box col-3">
                <h1>{seconds}</h1>
                <h3>Segundos</h3>
              </div>
            </div>
          </div>
          
          <hr className="decorative-line" />

          <div className="row invite-container textoBiblico">
            <h2 className="citacao">
              "Os outros eu conheci por ocioso acaso. A ti vim encontrar porque
              era preciso."
            </h2>
            <h6 className="autor">
              - João Guimarães Rosa em carta a Aracy M. de Carvalho (1946).
            </h6>
          </div>
        </div>

      </div>
    </div>
  );
}
