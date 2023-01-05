import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";

import {
  ProductsWrapper,
  ProductsItem,
  ProductImage,
  ProductDescription,
} from "./styled";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import { addItemToCart } from "../../features/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong", {
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    navigate("/cart");
  };

  return (
    <ProductsWrapper>
      {loading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <ProductsItem key={product?.id}>
            <ProductImage src={product?.image} alt={product.title} />
            <ProductDescription>{product?.title}</ProductDescription>
            <Button onClick={() => handleAddToCart(product)}>
              Add to cart
            </Button>
          </ProductsItem>
        ))
      )}
    </ProductsWrapper>
  );
}

export default Products;
