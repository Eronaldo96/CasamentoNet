import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Drawer } from "@mui/material";
import "./styles.scss";
import logo from "../../../app/assets/images/rings.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Divider from "@mui/material/Divider";
import Mgs3 from "../../assets/images/navMenuImage.png";

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const menuItems = [
    { to: "/Home", label: "Home", icon: <HomeIcon fontSize="large" /> },
    {
      to: "/HistoriaCasal",
      label: "História do Casal",
      icon: <FavoriteIcon fontSize="large" />,
    },
    { to: "/Local", label: "Local", icon: <LocationOnIcon fontSize="large" /> },
    {
      to: "/ListaPresentes",
      label: "Lista de Presentes",
      icon: <ListAltIcon fontSize="large" />,
    },
    {
      to: "/ConfirmaPresenca",
      label: "Confirmar Presença",
      icon: <CheckCircleIcon fontSize="large" />,
    },
  ];

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mainHeader">
      <AppBar
        sx={{
          boxShadow: "none",
          transition: "background-color 0.3s ease, border-bottom 0.3s ease",
        }}
        position="fixed"
        className={`navBarStyle ${isHidden ? "hidden" : ""}`}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="logoLink">
              <img style={{ width: "2em" }} src={logo} alt="logo" />
            </Link>
          </Typography>

          <IconButton
            className="customIconButton"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        className="drawerStyle"
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <MenuList sx={{ flexGrow: 1 }}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                component={Link}
                to={item.to}
                onClick={handleDrawerClose}
                className="menuItemHamburguer"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
            <Divider />
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
}
