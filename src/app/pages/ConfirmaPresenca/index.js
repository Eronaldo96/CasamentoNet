import React, { useState } from "react";
import "./styles.scss";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";

export default function ConfirmaPresenca() {
  // const [local, setLocal] = useState([
  //   {
  //     descricao: "Presente 1 - AirFry",
  //     imagem: AirFry,
  //   },
  //   {
  //     descricao: "Igreja da Saúde",
  //     imagem: Igreja,
  //   },
  // ]);

  return (
    <div className="ConfirmaPresencaCustom">
      <div>
        <div className="TituloPagina">
          <h1>Confirme sua presença</h1>
        </div>
        <FormControl className="formConfirmaPresenca">
          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Você irá ao evento?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="sim" control={<Radio />} label="sim" />
                <FormControlLabel value="nao" control={<Radio />} label="não" />
              </RadioGroup>
            </div>
          </div>
          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <TextField
                id="outlined-basic"
                label="Nome Completo"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <TextField
                id="outlined-number"
                label="E-mail"
                type="text"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
          </div>
          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <TextField
                id="outlined-number"
                label="Quantidade de adultos incluindo você"
                type="number"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <TextField
                id="outlined-number"
                label="Quantidade de crianças"
                type="number"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <TextField
                id="outlined-number"
                label="Telefone para contato"
                type="text"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
          </div>
          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <TextField
                id="outlined-multiline-static"
                label="Observações"
                multiline
                variant="outlined"
                rows={4}
                // defaultValue="Default Value"
                className="resizable-textfield"
              />
            </div>
          </div>
          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <Button
                variant="outlined"
                //style={{width:"100%"}}
                //onClicButtonk={() => produtoCaminho(item.url)}
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
