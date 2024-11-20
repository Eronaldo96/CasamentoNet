import React from 'react';
import LoadingGif from "../../../app/assets/images/Loading.gif";
import "./styles.scss";

const Loading = () => {
  return (
    <div className="loading-container">
     <img className="loading-gif" src={LoadingGif} alt="Carregando..." />
    </div>
  );
};

export default Loading;
