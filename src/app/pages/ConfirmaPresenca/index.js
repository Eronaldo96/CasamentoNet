import React, { useState } from "react";
import "./styles.scss";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Radio,
  RadioGroup,
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
          <div className="row">
            <TextField
              id="outlined-basic"
              label="Nome Completo"
              variant="outlined"
            />
          </div>
          <div className="row">
            <FormLabel id="demo-row-radio-buttons-group-label">Você irá ao evento?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="sim" control={<Radio />} label="sim" />
              <FormControlLabel value="nao" control={<Radio />} label="não" />
            </RadioGroup>
          </div>
          <div className="row">
            {/* <FormLabel>Quantidade de adultos incluindo você</FormLabel> */}
            <TextField
            id="outlined-number"
            label="Quantidade de adultos incluindo você"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
        </FormControl>
      </div>
    </div>
  );
}
