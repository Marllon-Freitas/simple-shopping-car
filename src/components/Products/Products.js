import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cartSlice";
import { Navigate, useNavigate } from "react-router";

import {
  ProductsWrapper,
  ProductsItem,
  ProductImage,
  ProductButton,
  ProductDescription,
} from "./styled";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    navigate("/cart");
  };

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <ProductsItem key={product.id}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductDescription>{product.title}</ProductDescription>
          <ProductButton
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add to cart
          </ProductButton>
        </ProductsItem>
      ))}
    </ProductsWrapper>
  );
}

export default Products;
