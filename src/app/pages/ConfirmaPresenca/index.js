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
import InputMask from 'react-input-mask';

export default function ConfirmaPresenca() {
  const [phone, setPhone] = useState("");
  const [mask, setMask] = useState("(99) 99999-9999");

  const handleChange = (event) => {
    const value = event.target.value;
    setPhone(value);

    const onlyNumbers = value.replace(/\D/g, "");
    if (onlyNumbers.length > 2 && onlyNumbers[2] === '9') {
      setMask("(99) 99999-9999");
    } else {
      setMask("(99) 9999-9999");
    }
  };

  return (
    <div className="ConfirmaPresencaCustom">
      <div>
        <div className="TituloPagina">
          <h1>Confirme sua presença</h1>
        </div>
        <FormControl className="formConfirmaPresenca">
          {/* <div className="row" style={{ display: "flex", margin: "5px" }}>
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
          </div> */}
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
          {/* <div className="row" style={{ display: "flex", margin: "5px" }}>
             <div className="col-12">
              <TextField
                id="outlined-number"
                label="Nome do Acompanhante"
                type="text"
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
              <InputMask
                mask={mask}
                value={phone}
                onChange={handleChange}
                //maskChar={null}
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    id="outlined-phone"
                    label="Telefone para contato"
                    type="text"
                    style={{ width: "100%", marginTop: "1rem" }}
                    variant="outlined"
                  />
                )}
              </InputMask>
            </div>
          </div> */}
          {/* <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <TextField
                id="outlined-multiline-static"
                label="Observações"
                multiline
                variant="outlined"
                rows={4}
                className="resizable-textfield"
              />
            </div>
          </div> */}
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
