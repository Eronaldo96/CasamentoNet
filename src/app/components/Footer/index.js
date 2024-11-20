import React from "react";
import Button from '@mui/material/Button';
import "./styles.scss";

export default function Footer() {
  return (
    <div className="footerStyle">
      <p>© 2024 Ero Company, Inc.</p>
      <p className="float-right">
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} variant="outlined">Voltar pro topo</Button>
      </p>
    </div>
  );
}
