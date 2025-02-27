import { ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT } from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product: product,
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  product: product,
});

export const clearCart = () =>({
  type: CLEAR_CART,
})