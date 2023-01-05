import React, { useEffect } from "react";
import { NavbarWrapper, Logo, Menu, MenuItem } from "./styled";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../features/cartSlice";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <NavbarWrapper>
      <Logo>Logo</Logo>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
      </Menu>
      <Link to="/cart">
        <Button>
          <FaShoppingCart />
          <p>Cart ({cart.cartTotalQuantity})</p>
        </Button>
      </Link>
    </NavbarWrapper>
  );
}

export default Navbar;
