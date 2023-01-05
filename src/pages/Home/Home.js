import React from "react";
import Products from "../../components/Products/Products";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Products></Products>
    </HomeWrapper>
  );
}

export default Home;
