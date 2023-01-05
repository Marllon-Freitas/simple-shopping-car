import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: global.localStorage.getItem("cartItems")
    ? JSON.parse(global.localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
        toast.info(
          `Increased ${state.cartItems[itemIndex].title} cart quantity`,
          {
            position: "top-right",
          }
        );
      } else {
        const tempItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempItem);
        toast.success(`${action.payload.title} added to cart`, {
          position: "top-right",
        });
      }
      global.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      global.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.info(`${action.payload.title} removed from cart`, {
        position: "top-right",
      });
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity--;
        toast.info(
          `Decreased ${state.cartItems[itemIndex].title} cart quantity`,
          {
            position: "top-right",
          }
        );
      } else {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.info(`${action.payload.title} removed from cart`, {
          position: "top-right",
        });
      }
      global.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      global.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.info(`Cart cleared`, {
        position: "top-right",
      });
    },
    getTotals: (state, action) => {
      let { cartTotalQuantity, cartTotalAmount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { quantity, price } = cartItem;
          const itemTotal = quantity * price;
          cartTotal.cartTotalQuantity += quantity;
          cartTotal.cartTotalAmount += itemTotal;
          return cartTotal;
        },
        {
          cartTotalQuantity: 0,
          cartTotalAmount: 0,
        }
      );

      state.cartTotalQuantity = cartTotalQuantity;
      state.cartTotalAmount = cartTotalAmount;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
