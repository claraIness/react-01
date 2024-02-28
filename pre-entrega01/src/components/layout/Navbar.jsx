import CartWidget from "../common/CartWidget";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiPlantBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(138,221,45,0.6)' }}>
      <Stack spacing={5} direction="row" style={{ color: 'black' }}>
        <h5>
          {" "}
          <PiPlantBold /> 4:20{" "}
        </h5>
        <Link to="/">
          <Button variant="text"style={{ color: 'black' }}>Inicio</Button>
        </Link>

        <Link>
          <Button variant="text"style={{ color: 'black' }}>Fotoperiódicas</Button>
        </Link>
        <Button variant="text"style={{ color: 'black' }}>Autoflorecientes</Button>
        <Button variant="text"style={{ color: 'black' }}>Feminizadas</Button>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </Stack>
    </div>
  );
};



