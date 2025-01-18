import React from "react";
import "./styles.scss";
import {
  FormControl,
  TextField,
  Button,
} from "@mui/material";

export default function ConfirmaPresenca() {

  return (
    <div className="ConfirmaPresencaCustom">
      <div>
        <div className="TituloPagina">
          <h1>Confirme sua presença</h1>
        </div>
        <FormControl className="formConfirmaPresenca">

          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <TextField
                id="outlined-basic"
                label="Nome Completo"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
            <div className="col-12">
              <TextField
                id="outlined-number"
                label="E-mail"
                type="text"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
            <div className="col-12">
              <TextField
                id="outlined-number"
                label="Nome do Acompanhante"
                type="text"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
          </div>
         
          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <Button
                variant="outlined"
              >
                Confirmar Presença
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
}
