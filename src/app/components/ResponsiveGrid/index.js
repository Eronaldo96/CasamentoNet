import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
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

export default function ResponsiveGrid({ data }) {
  function produtoCaminho(url) {
    window.open(url, "_blank");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent="center" // Alinhar itens ao centro
        spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item, index) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <Item>
              <Box className="BoxCustom">
                <div>
                  <img
                    className="ImagemPresente"
                    src={item.imagem}
                    alt={item.descricao}
                  />
                </div>
              </Box>
              <Box className="label-container">
                <div>
                  <label>{item.descricao}</label>
                </div>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  onClick={() => produtoCaminho(item.url)}
                >
                  Presentear
                </Button>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
