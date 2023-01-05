import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home/Home.js";
import Cart from "./Cart/Cart.js";
import NotFound from "./NotFound/NotFound.js";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.path}>
      <Route path="/" exact element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Pages;
