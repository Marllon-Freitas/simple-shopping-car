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
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartTotalQuantity--;
      state.cartTotalAmount -= action.payload.price;
      state.cartItems.splice(index, 1);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
