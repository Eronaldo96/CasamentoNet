import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import ModalPresente from "../ModalPresente"; // ajuste o caminho conforme sua estrutura
import "./style.scss";

const Item = styled(Paper)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

export default function ResponsiveGrid({ data, onRefresh }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [presenteSelecionado, setPresenteSelecionado] = useState(null);

  const abrirModal = (item) => {
    setPresenteSelecionado(item);
    setModalAberto(true);
  };

  const fecharModal = (presenteConfirmado) => {
    setModalAberto(false);

    if (presenteConfirmado) {
      console.log("Presente confirmado!");
      if (onRefresh) onRefresh(); // chama a função de atualização se existir
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }}>
        {data.map((item, index) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <Item className={item.pago ? "presente-pago" : ""}>
              <Box className="BoxCustom">
                <div style={{ position: "relative" }}>
                  <img
                    className="ImagemPresente"
                    src={item.imagem}
                    alt={item.descricao}
                  />
                  {item.pago && !item.pix && (
                    <div className="selo-pago">🎁 Presenteado</div>
                  )}
                </div>
              </Box>
              <Box className="label-container">
                <div>
                  <label>{item.descricao}</label>
                </div>
                <div style={{ margin: "5px" }}>
                  <b>{item.valor} Reais</b>
                </div>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  onClick={() => abrirModal(item)}
                  disabled={item.pago}
                >
                  {item.pago ? "Já foi presenteado" : "Presentear"}
                </Button>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>

      {presenteSelecionado && (
        <ModalPresente
          open={modalAberto}
          onClose={fecharModal}
          presente={presenteSelecionado}
        />
      )}
    </Box>
  );
}
