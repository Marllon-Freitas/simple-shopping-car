import React from "react";
import { NavbarWrapper, Logo, Menu, MenuItem, Button } from "./styled";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarWrapper>
      <Logo>Logo</Logo>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>Products</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <Link to="/cart">
        <Button>
          <FaShoppingCart />
          <p>Cart (0)</p>
        </Button>
      </Link>
    </NavbarWrapper>
  );
}

export default Navbar;
