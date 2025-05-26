"use client";

import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exists) {
        return state;
      } else {
        const updatedProduct = { ...action.payload, quantity: 1 };
        return {
          cartItems: [...state.cartItems, updatedProduct],
        };
      }

    case "INCREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload && item.quantity>1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
