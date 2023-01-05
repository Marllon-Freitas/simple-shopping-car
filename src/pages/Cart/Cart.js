import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  addItemToCart,
  removeItemFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} from "../../features/cartSlice";
import {
  CartWrapper,
  CartContent,
  CartHeader,
  CartTitle,
  CartItems,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartEmpty,
  CartBottom,
} from "./styled";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    dispatch(clearCart());
  };

  const handleAddItem = (cartItem) => {
    dispatch(addItemToCart(cartItem));
  };

  const handleRemoveItem = (cartItem) => {
    dispatch(removeItemFromCart(cartItem));
  };

  const handleDecreaseItem = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  return (
    <CartWrapper>
      {cart.cartItems.length > 0 ? (
        <CartContent>
          <>
            <CartHeader>
              <CartTitle>Cart</CartTitle>
            </CartHeader>
            <CartItems>
              {cart.cartItems.map((item) => (
                <CartItem key={item.id}>
                  <CartItemInfo>
                    <div className="product-name">
                      <CartItemImage src={item.image} alt={item.title} />
                      <div className="product-title">
                        <h3>{item.title}</h3>
                        <button
                          onClick={() => {
                            handleRemoveItem(item);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="product-price">
                      <p>
                        Price:
                        <span>${item.price}</span>
                      </p>
                    </div>
                    <div className="product-quantity">
                      <button
                        onClick={() => {
                          handleDecreaseItem(item);
                        }}
                        className="product-quantity-minus-btn"
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => {
                          handleAddItem(item);
                        }}
                        className="product-quantity-plus-btn"
                      >
                        +
                      </button>
                    </div>
                    <div className="product-price">
                      <p>
                        Total:
                        <span>${item.price * item.quantity}</span>
                      </p>
                    </div>
                  </CartItemInfo>
                </CartItem>
              ))}
            </CartItems>
          </>
          <CartBottom>
            <Button
              onClick={() => {
                handleClearCart();
              }}
            >
              Clear Cart
            </Button>
            <div className="cart-bottom-checkout">
              <div className="cart-bottom-checkout-total">
                <p>Subtotal:</p>
                <p>${parseFloat(cart.cartTotalAmount).toFixed(2)}</p>
              </div>
              <Button>Checkout</Button>
              <Link to="/">Continue Shopping</Link>
            </div>
          </CartBottom>
        </CartContent>
      ) : (
        <CartEmpty>
          <h1>Your cart is empty</h1>
          <Link to="/">Go back to shopping</Link>
        </CartEmpty>
      )}
    </CartWrapper>
  );
}

export default Cart;
