import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import "./styles.scss";
import logo from "../../../app/assets/images/rings.png";
import Loading from "../Loading"; // Importe o componente de loading

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  // Simulando um carregamento (substitua isso com sua lógica real de carregamento)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Depois de 3 segundos, define o carregamento como falso
    }, 3000); // Ajuste o tempo conforme necessário
  }, []);

  return (
    <div className="mainHeader">
      {/* {isLoading ? (  // Se estiver carregando, mostra o loading
        <Loading />
      ) : ( */}
        <AppBar position="fixed" className="navBarStyle">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img style={{ width: "2em", color: "white" }} src={logo} alt="logo" />
              </Link>
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      {/* )} */}

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        className="drawerStyle"
      >
        <List className="menuHamburguer">
          <ListItemButton component={Link} to="/" onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            className="menuItemHamburguer"
            component={Link}
            to="/Home"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            className="menuItemHamburguer"
            component={Link}
            to="/Local"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Local" />
          </ListItemButton>
          <ListItemButton
            className="menuItemHamburguer"
            component={Link}
            to="/ListaPresentes"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Lista de Presentes" />
          </ListItemButton>
          <ListItemButton
            className="menuItemHamburguer"
            component={Link}
            to="/ConfirmaPresenca"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Confirmar Presença" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}